/**
 * Product Costing & Reconciliation Analyzer (PCRA) Data Models
 * Full Lifecycle TypeScript Definitions for In-01 ~ In-29 and Out-01 ~ Out-21
 */

export interface GlobalParameters {
  baseCurrency: string;       // Param_BaseCurr ("A$" or "AUD$")
  period: string;             // Param_Period ("2026-Q1")
  toleranceAmount: number;    // Param_Tol_Amount (e.g. 500.00)
  tolerancePct: number;       // Param_Tol_Pct (e.g. 0.03 -> 3.0%)
  toleranceDeduction: number; // Param_Tol_Deduct (e.g. 1000.00)
  targetGrossMargin: number;  // Param_Target_GM (e.g. 0.28 -> 28.0%)
  portStdFEU: number;         // Param_PortStd_FEU (e.g. 850.00)
}

export interface FxRateItem {
  id: string;
  currencyCode: string;       // In-01
  currencyName: string;
  budgetRate: number;         // In-02
  actualRate: number;         // In-03
}

export interface CustomsDutyItem {
  id: string;
  categoryCode: string;
  categoryName: string;
  hsPrefix: string;
  defaultDutyRate: number;    // In-04
  ftaDutyRate: number;
}

export interface RetailDeductionRule {
  id: string;
  retailerName: string;
  rawCode: string;
  standardTypeCode: string;   // In-05 (REB, DIFOT, DAMAGE, DISC, COMPLIANCE)
  meaning: string;
  classification: string;     // "Contractual Rebate" | "Compliance Penalty"
  recoverableFlag: 'Y' | 'N' | 'P'; // In-06 ('Y-Recoverable', 'N-Non-Recoverable', 'P-Pending')
  actionOwner: string;        // "Supply Chain Logistics", "Key Accounts Sales", "Finance Treasury"
  evidenceRequired: string;
}

export interface POEstimateRecord {
  id: string;
  poNumber: string;           // In-07
  skuCode: string;            // In-08
  productName: string;        // In-09
  category: string;           // In-10
  poQty: number;              // In-11
  fobCurrency: string;        // In-12
  fobUnitPriceFC: number;     // In-13
  estFreightPerUnitAUD: number; // In-14
  estDutyRate: number;        // In-15
  estOtherLandedCost: number; // In-16
  bookLandedCostPerUnit: number; // In-17
}

export interface ActualLogisticsRecord {
  id: string;
  poNumber: string;           // In-07
  skuCode: string;            // In-08
  shipmentId: string;         // In-18
  arrivalDate: string;
  actualFreightInvoiceAUD: number; // In-19
  actualDutyPaidAUD: number;  // In-20
  actualPortDrayageAUD: number; // In-21
  actualReceivedQty: number;  // In-22
}

export interface RetailDeductionRecord {
  id: string;
  invoiceRef: string;         // In-23
  retailerName: string;       // In-24
  billedQty: number;          // In-25
  contractPriceAUD: number;   // In-26
  deductionClaimRef: string;  // In-27
  deductionAmountAUD: number; // In-28
  deductionCodeRaw: string;   // In-29
  poMapRef: string;
  disputeStatus: 'Pending Review' | 'Dispute Lodged' | 'Recovered & Settled' | 'Accepted & Written Off'; // Out-15
}

export interface CostEngineCalculatedRow {
  poNumber: string;           // In-07
  skuCode: string;            // In-08
  productName: string;        // In-09
  category: string;           // In-10
  poQty: number;              // In-11
  fobCurrency: string;        // In-12
  fobUnitPriceFC: number;     // In-13
  benchmarkFX: number;
  recalcFobAUD: number;       // Out-01
  estFreightAUD: number;      // In-14
  statutoryDutyRate: number;
  recalcDutyAUD: number;      // Out-02
  estOtherLandedAUD: number;  // In-16
  recalcLandedCost: number;   // Out-03
  bookLandedCost: number;     // In-17
  costBaselineVariance: number; // Out-04 (Recalc - Book)
  totalVarianceExposure: number;
  variancePct: number;
  engineAuditStatus: 'Compliant' | 'Submerged Loss Risk' | 'Cost Overestimated' | 'Pending Review'; // Out-05
  auditInsight: string;
}

export interface ReconciliationCostRow {
  poNumber: string;           // In-07
  skuCode: string;            // In-08
  poQty: number;              // In-11
  actualQty: number;          // In-22
  recalcLandedCost: number;   // Out-03
  actualFreightPerUnit: number; // Out-06
  actualDutyPerUnit: number;  // Out-07
  actualPortPerUnit: number;
  actualFobAUD: number;
  actualLandedCost: number;   // Out-08
  totalCostVariance: number;  // Out-09
  varPriceComp: number;       // Out-10
  varFreightComp: number;     // Out-11
  varDutyComp: number;        // Out-12
  varFXComp: number;          // Out-13
  varPortComp: number;
  attributionCheck: number;   // Zero residual verification
  varianceSeverity: 'Controlled' | 'Severe Overrun' | 'Cost Savings';
  primaryDriver: string;
  actionOwner: string;
}

export interface ReconciliationDeductionRow {
  id: string;
  invoiceRef: string;         // In-23
  retailerName: string;       // In-24
  deductionClaimRef: string;  // In-27
  deductionCodeRaw: string;   // In-29
  deductionAmountAUD: number; // In-28
  standardType: string;       // Out-14
  classification: string;
  recoverableFlag: 'Y' | 'N' | 'P'; // In-06
  isCeoPriority: boolean;
  disputeStatus: 'Pending Review' | 'Dispute Lodged' | 'Recovered & Settled' | 'Accepted & Written Off'; // Out-15
  evidenceGuide: string;
}

export interface WaterfallStep {
  label: string;
  amount: number;
  isTotal?: boolean;
  rate?: number;
  type: 'base' | 'deduction' | 'subtotal' | 'final';
  description: string;
}

export interface ManagementSummaryData {
  netSalesRevenue: number;         // Out-16
  grossSalesRevenue: number;
  contractRebates: number;
  baselineLandedCostTotal: number;
  bookGrossMarginTotal: number;
  bookGrossMarginPct: number;      // Out-17
  actualCostOverrunTotal: number;
  realizedGrossMarginTotal: number;
  realizedGrossMarginPct: number;  // Out-18
  compliancePenaltiesTotal: number;
  netEffectiveProfit: number;
  netEffectiveMarginPct: number;   // Out-19
  marginErosionRate: number;       // Out-20
  marginErosionBps: number;
  potentialRecoveryPool: number;   // Out-21
  waterfallSteps: WaterfallStep[];
}

export interface AppState {
  parameters: GlobalParameters;
  fxRates: FxRateItem[];
  dutyRules: CustomsDutyItem[];
  deductionRules: RetailDeductionRule[];
  poEstimates: POEstimateRecord[];
  actualLogistics: ActualLogisticsRecord[];
  retailDeductions: RetailDeductionRecord[];
  lastSaved: string; // ISO string
}
