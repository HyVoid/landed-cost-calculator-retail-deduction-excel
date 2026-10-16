import {
  AppState,
  CostEngineCalculatedRow,
  ManagementSummaryData,
  ReconciliationCostRow,
  ReconciliationDeductionRow,
  WaterfallStep,
} from '../types/pcra';

/**
 * Rounds a number to a fixed decimal count safely
 */
export function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

/**
 * Formats currency values using base currency symbol
 */
export function formatCurrency(value: number, baseCurr = 'A$', decimals = 2): string {
  const formatted = Math.abs(value).toLocaleString('en-AU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  if (value < 0) {
    return `-${baseCurr}${formatted}`;
  }
  return `${baseCurr}${formatted}`;
}

/**
 * Formats percentages cleanly
 */
export function formatPct(value: number, decimals = 1, showSign = false): string {
  const formatted = (Math.abs(value) * 100).toFixed(decimals) + '%';
  if (value < 0) return `-${formatted}`;
  if (showSign && value > 0) return `+${formatted}`;
  return formatted;
}

/**
 * Recalculates Sheet 03: Cost Engine (Out-01 to Out-05)
 */
export function computeCostEngineRows(state: AppState): CostEngineCalculatedRow[] {
  const { parameters, fxRates, dutyRules, poEstimates } = state;

  return poEstimates.map((po) => {
    // 1. Find benchmark FX rate for PO currency
    const fxItem = fxRates.find((f) => f.currencyCode.toUpperCase() === po.fobCurrency.toUpperCase());
    const benchmarkFX = fxItem ? fxItem.budgetRate : 1.0;

    // 2. Out-01: Recalc FOB AUD
    const recalcFobAUD = round(po.fobUnitPriceFC * benchmarkFX, 2);

    // 3. Find statutory duty rate from Customs Duty Table
    const dutyItem = dutyRules.find(
      (d) =>
        d.categoryName.toLowerCase() === po.category.toLowerCase() ||
        d.categoryCode.toLowerCase() === po.category.toLowerCase()
    );
    const statutoryDutyRate = dutyItem ? dutyItem.defaultDutyRate : 0.05;

    // 4. Out-02: Recalc Duty AUD (Australia ABF rules: duty is strictly on FOB value)
    const recalcDutyAUD = round(recalcFobAUD * statutoryDutyRate, 2);

    // 5. Out-03: Recalc Landed Cost
    const estFreightAUD = round(po.estFreightPerUnitAUD, 2);
    const estOtherLandedAUD = round(po.estOtherLandedCost, 2);
    const recalcLandedCost = round(
      recalcFobAUD + estFreightAUD + recalcDutyAUD + estOtherLandedAUD,
      2
    );

    // 6. Out-04: Cost Baseline Variance
    const costBaselineVariance = round(recalcLandedCost - po.bookLandedCostPerUnit, 2);
    const totalVarianceExposure = round(costBaselineVariance * po.poQty, 2);
    const variancePct = recalcLandedCost !== 0 ? round(costBaselineVariance / recalcLandedCost, 4) : 0;

    // 7. Out-05: Engine Audit Status
    let engineAuditStatus: CostEngineCalculatedRow['engineAuditStatus'] = 'Compliant';
    if (
      Math.abs(totalVarianceExposure) <= parameters.toleranceAmount &&
      Math.abs(variancePct) <= parameters.tolerancePct
    ) {
      engineAuditStatus = 'Compliant';
    } else if (costBaselineVariance > 0) {
      engineAuditStatus = 'Submerged Loss Risk';
    } else {
      engineAuditStatus = 'Cost Overestimated';
    }

    // 8. Audit Insight
    let auditInsight = 'Calculation aligned with standard rules.';
    const dutyMismatch = Math.abs(po.estDutyRate - statutoryDutyRate) > 0.001;
    if (Math.abs(costBaselineVariance) <= 0.05) {
      auditInsight = 'Exact match (variation within rounding margin).';
    } else if (dutyMismatch) {
      auditInsight = `Customs tariff mismatch: Book model used ${(po.estDutyRate * 100).toFixed(1)}% vs Statutory ${(statutoryDutyRate * 100).toFixed(1)}%.`;
    } else if (Math.abs(costBaselineVariance) > 5.0) {
      auditInsight = 'Major structural divergence: verify FX benchmark & port drayage formulas.';
    } else if (costBaselineVariance > 0) {
      auditInsight = 'Book model understates landed cost; risk of selling at depressed actual margin.';
    } else {
      auditInsight = 'Book model overstates landed cost; unnecessarily compresses quoted gross margin.';
    }

    return {
      poNumber: po.poNumber,
      skuCode: po.skuCode,
      productName: po.productName,
      category: po.category,
      poQty: po.poQty,
      fobCurrency: po.fobCurrency,
      fobUnitPriceFC: po.fobUnitPriceFC,
      benchmarkFX,
      recalcFobAUD,
      estFreightAUD,
      statutoryDutyRate,
      recalcDutyAUD,
      estOtherLandedAUD,
      recalcLandedCost,
      bookLandedCost: po.bookLandedCostPerUnit,
      costBaselineVariance,
      totalVarianceExposure,
      variancePct,
      engineAuditStatus,
      auditInsight,
    };
  });
}

/**
 * Computes Sheet 04: Reconciliation Left Track (Costs & 5-Way Attribution)
 */
export function computeReconciliationCostRows(
  state: AppState,
  costEngineRows: CostEngineCalculatedRow[]
): ReconciliationCostRow[] {
  const { parameters, fxRates, poEstimates, actualLogistics } = state;

  return costEngineRows.map((engineRow) => {
    const po = poEstimates.find((p) => p.poNumber === engineRow.poNumber);
    const actual = actualLogistics.find((a) => a.poNumber === engineRow.poNumber);

    const actualQty = actual && actual.actualReceivedQty > 0 ? actual.actualReceivedQty : engineRow.poQty;
    const actualFreightTotal = actual ? actual.actualFreightInvoiceAUD : engineRow.estFreightAUD * actualQty;
    const actualDutyTotal = actual ? actual.actualDutyPaidAUD : engineRow.recalcDutyAUD * actualQty;
    const actualPortTotal = actual ? actual.actualPortDrayageAUD : engineRow.estOtherLandedAUD * actualQty;

    // Out-06 & Out-07
    const actualFreightPerUnit = round(actualFreightTotal / actualQty, 2);
    const actualDutyPerUnit = round(actualDutyTotal / actualQty, 2);
    const actualPortPerUnit = round(actualPortTotal / actualQty, 2);

    // Actual FX Rate
    const fxItem = fxRates.find((f) => f.currencyCode.toUpperCase() === engineRow.fobCurrency.toUpperCase());
    const actualFX = fxItem ? fxItem.actualRate : 1.0;
    const budgetFX = fxItem ? fxItem.budgetRate : 1.0;

    const actualFobAUD = round(engineRow.fobUnitPriceFC * actualFX, 2);

    // Out-08: Actual Landed Cost
    const actualLandedCost = round(
      actualFobAUD + actualFreightPerUnit + actualDutyPerUnit + actualPortPerUnit,
      2
    );

    // Out-09: Total Cost Variance
    const totalCostVariance = round((actualLandedCost - engineRow.recalcLandedCost) * actualQty, 2);

    // 5-Way Mathematical Decomposition
    // Out-10: FOB price component (assuming PO FC FOB price is reference)
    const varPriceComp = 0.0;

    // Out-11: Freight component
    const varFreightComp = round((actualFreightPerUnit - engineRow.estFreightAUD) * actualQty, 2);

    // Out-12: Duty component
    const varDutyComp = round((actualDutyPerUnit - engineRow.recalcDutyAUD) * actualQty, 2);

    // Out-13: FX component
    const varFXComp = round(engineRow.fobUnitPriceFC * (actualFX - budgetFX) * actualQty, 2);

    // Port component
    const varPortComp = round((actualPortPerUnit - engineRow.estOtherLandedAUD) * actualQty, 2);

    // Attribution Check (Must be 0.00)
    const decomposedSum = round(varPriceComp + varFreightComp + varDutyComp + varFXComp + varPortComp, 2);
    const attributionCheck = round(totalCostVariance - decomposedSum, 2);

    // Severity
    let varianceSeverity: ReconciliationCostRow['varianceSeverity'] = 'Controlled';
    if (Math.abs(totalCostVariance) <= parameters.toleranceAmount) {
      varianceSeverity = 'Controlled';
    } else if (totalCostVariance > parameters.toleranceAmount) {
      varianceSeverity = 'Severe Overrun';
    } else {
      varianceSeverity = 'Cost Savings';
    }

    // Primary driver
    const components = [
      { name: '🚢 Ocean Freight Rate Surge', val: Math.abs(varFreightComp) },
      { name: '💱 Currency Depreciation Erosion', val: Math.abs(varFXComp) },
      { name: '📑 Customs Clearance Tariff Delta', val: Math.abs(varDutyComp) },
      { name: '🚛 Port Drayage & Wharf Demurrage', val: Math.abs(varPortComp) },
    ];
    components.sort((a, b) => b.val - a.val);
    const primaryDriver = Math.abs(totalCostVariance) <= 50 ? 'Minor variance' : components[0].name;

    // Action owner
    let actionOwner = 'Finance Control';
    if (primaryDriver.includes('Ocean Freight')) actionOwner = 'Supply Chain Logistics';
    else if (primaryDriver.includes('Currency')) actionOwner = 'Treasury & Finance';
    else if (primaryDriver.includes('Customs')) actionOwner = 'Customs & Compliance';
    else if (primaryDriver.includes('Port')) actionOwner = 'Domestic Distribution';

    return {
      poNumber: engineRow.poNumber,
      skuCode: engineRow.skuCode,
      poQty: engineRow.poQty,
      actualQty,
      recalcLandedCost: engineRow.recalcLandedCost,
      actualFreightPerUnit,
      actualDutyPerUnit,
      actualPortPerUnit,
      actualFobAUD,
      actualLandedCost,
      totalCostVariance,
      varPriceComp,
      varFreightComp,
      varDutyComp,
      varFXComp,
      varPortComp,
      attributionCheck,
      varianceSeverity,
      primaryDriver,
      actionOwner,
    };
  });
}

/**
 * Computes Sheet 04: Reconciliation Right Track (Retail Deductions & Claims)
 */
export function computeReconciliationDeductionRows(state: AppState): ReconciliationDeductionRow[] {
  const { parameters, deductionRules, retailDeductions } = state;

  return retailDeductions.map((row) => {
    // Lookup deduction rule by retailer + rawCode
    const rule = deductionRules.find(
      (r) =>
        r.retailerName.toLowerCase() === row.retailerName.toLowerCase() &&
        r.rawCode.toUpperCase() === row.deductionCodeRaw.toUpperCase()
    );

    const standardType = rule ? rule.standardTypeCode : 'CLAIM-UNKNOWN';
    const classification = rule ? rule.classification : 'Commercial Dispute';
    const recoverableFlag = rule ? rule.recoverableFlag : 'P';
    const isCeoPriority = recoverableFlag === 'Y' && row.deductionAmountAUD >= parameters.toleranceDeduction;
    const evidenceGuide = rule ? rule.evidenceRequired : 'Retrieve bilateral remittance notice & proof of delivery';

    return {
      id: row.id,
      invoiceRef: row.invoiceRef,
      retailerName: row.retailerName,
      deductionClaimRef: row.deductionClaimRef,
      deductionCodeRaw: row.deductionCodeRaw,
      deductionAmountAUD: row.deductionAmountAUD,
      standardType,
      classification,
      recoverableFlag,
      isCeoPriority,
      disputeStatus: row.disputeStatus,
      evidenceGuide,
    };
  });
}

/**
 * Computes Sheet 05: Management Summary & Margin Waterfall (Out-16 to Out-21)
 */
export function computeManagementSummary(
  state: AppState,
  costEngineRows: CostEngineCalculatedRow[],
  reconCostRows: ReconciliationCostRow[],
  reconDeductionRows: ReconciliationDeductionRow[]
): ManagementSummaryData {
  const { parameters, retailDeductions } = state;

  // 1. Gross sales billed
  let grossSalesRevenue = 0;
  retailDeductions.forEach((r) => {
    grossSalesRevenue += r.billedQty * r.contractPriceAUD;
  });
  grossSalesRevenue = round(grossSalesRevenue, 2);

  // 2. Contractual rebates (REB)
  let contractRebates = 0;
  let compliancePenaltiesTotal = 0;
  let potentialRecoveryPool = 0;

  reconDeductionRows.forEach((r) => {
    if (r.standardType === 'REB') {
      contractRebates += r.deductionAmountAUD;
    } else {
      compliancePenaltiesTotal += r.deductionAmountAUD;
    }

    if (r.recoverableFlag === 'Y' && r.disputeStatus !== 'Recovered & Settled') {
      potentialRecoveryPool += r.deductionAmountAUD;
    }
  });

  contractRebates = round(contractRebates, 2);
  compliancePenaltiesTotal = round(compliancePenaltiesTotal, 2);
  potentialRecoveryPool = round(potentialRecoveryPool, 2);

  // 3. Out-16: Net Sales Revenue
  const netSalesRevenue = round(grossSalesRevenue - contractRebates, 2);

  // 4. Baseline Landed Cost Total
  let baselineLandedCostTotal = 0;
  costEngineRows.forEach((row) => {
    baselineLandedCostTotal += row.poQty * row.recalcLandedCost;
  });
  baselineLandedCostTotal = round(baselineLandedCostTotal, 2);

  // 5. Out-17: Book Gross Margin
  const bookGrossMarginTotal = round(netSalesRevenue - baselineLandedCostTotal, 2);
  const bookGrossMarginPct = netSalesRevenue > 0 ? round(bookGrossMarginTotal / netSalesRevenue, 4) : 0;

  // 6. Actual Cost Overrun Total
  let actualCostOverrunTotal = 0;
  reconCostRows.forEach((row) => {
    actualCostOverrunTotal += row.totalCostVariance;
  });
  actualCostOverrunTotal = round(actualCostOverrunTotal, 2);

  // 7. Out-18: Realized Gross Margin
  const realizedGrossMarginTotal = round(bookGrossMarginTotal - actualCostOverrunTotal, 2);
  const realizedGrossMarginPct = netSalesRevenue > 0 ? round(realizedGrossMarginTotal / netSalesRevenue, 4) : 0;

  // 8. Out-19: Net Effective Profit & Margin
  const netEffectiveProfit = round(realizedGrossMarginTotal - compliancePenaltiesTotal, 2);
  const netEffectiveMarginPct = netSalesRevenue > 0 ? round(netEffectiveProfit / netSalesRevenue, 4) : 0;

  // 9. Out-20: Margin Erosion Rate & bps
  const marginErosionRate = round(bookGrossMarginPct - netEffectiveMarginPct, 4);
  const marginErosionBps = Math.round(marginErosionRate * 10000);

  // Variance breakdown sums for waterfall
  let totalVarPrice = 0;
  let totalVarFreight = 0;
  let totalVarDuty = 0;
  let totalVarFX = 0;
  let totalVarPort = 0;

  reconCostRows.forEach((row) => {
    totalVarPrice += row.varPriceComp;
    totalVarFreight += row.varFreightComp;
    totalVarDuty += row.varDutyComp;
    totalVarFX += row.varFXComp;
    totalVarPort += row.varPortComp;
  });

  const waterfallSteps: WaterfallStep[] = [
    {
      label: '1. Gross Billed Revenue',
      amount: grossSalesRevenue,
      type: 'base',
      description: 'Gross invoiced sales to Australian retail partners',
    },
    {
      label: '2. Contractual Trading Rebates (REB)',
      amount: -contractRebates,
      type: 'deduction',
      description: 'Agreed contract volume and promotional trading terms',
    },
    {
      label: '3. Effective Net Sales Revenue',
      amount: netSalesRevenue,
      type: 'subtotal',
      isTotal: true,
      description: 'Clean commercial revenue baseline (Out-16)',
    },
    {
      label: '4. Baseline Recalc Landed Cost',
      amount: -baselineLandedCostTotal,
      type: 'deduction',
      description: 'Standard landed cost calculated via statutory ABF rules',
    },
    {
      label: '5. Book Gross Margin',
      amount: bookGrossMarginTotal,
      rate: bookGrossMarginPct,
      type: 'subtotal',
      isTotal: true,
      description: 'Nominal commercial gross margin before actual deviations (Out-17)',
    },
    {
      label: '6. Net Landed Cost Overrun',
      amount: -actualCostOverrunTotal,
      type: 'deduction',
      description: `Includes: Ocean Freight (${formatCurrency(-totalVarFreight, parameters.baseCurrency)}), FX (${formatCurrency(-totalVarFX, parameters.baseCurrency)}), Port (${formatCurrency(-totalVarPort, parameters.baseCurrency)}), Duty (${formatCurrency(-totalVarDuty, parameters.baseCurrency)})`,
    },
    {
      label: '7. Realized Landed Gross Margin',
      amount: realizedGrossMarginTotal,
      rate: realizedGrossMarginPct,
      type: 'subtotal',
      isTotal: true,
      description: 'True operational gross margin post logistics & foreign exchange (Out-18)',
    },
    {
      label: '8. Retailer Compliance Fines & Shortages',
      amount: -compliancePenaltiesTotal,
      type: 'deduction',
      description: 'Unplanned DIFOT delay penalties, ASN errors, and store damages',
    },
    {
      label: '9. Net Effective Profit (True Margin)',
      amount: netEffectiveProfit,
      rate: netEffectiveMarginPct,
      type: 'final',
      isTotal: true,
      description: 'Net take-home profit after all friction & deductions (Out-19)',
    },
    {
      label: '10. Actionable Dispute Recovery Pool (Memo)',
      amount: potentialRecoveryPool,
      type: 'base',
      description: 'Substantiated dispute claims eligible for clawback (Out-21)',
    },
  ];

  return {
    netSalesRevenue,
    grossSalesRevenue,
    contractRebates,
    baselineLandedCostTotal,
    bookGrossMarginTotal,
    bookGrossMarginPct,
    actualCostOverrunTotal,
    realizedGrossMarginTotal,
    realizedGrossMarginPct,
    compliancePenaltiesTotal,
    netEffectiveProfit,
    netEffectiveMarginPct,
    marginErosionRate,
    marginErosionBps,
    potentialRecoveryPool,
    waterfallSteps,
  };
}
