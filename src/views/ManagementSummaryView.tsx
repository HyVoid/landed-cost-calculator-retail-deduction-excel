import React, { useMemo } from 'react';
import {
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
} from 'lucide-react';
import { AppState } from '../types/pcra';
import {
  computeCostEngineRows,
  computeManagementSummary,
  computeReconciliationCostRows,
  computeReconciliationDeductionRows,
  formatCurrency,
  formatPct,
  round,
} from '../utils/calculations';
import { InsightBlock } from '../components/InsightBlock';
import { DataBar } from '../components/DataBar';

interface ManagementSummaryViewProps {
  state: AppState;
}

export const ManagementSummaryView: React.FC<ManagementSummaryViewProps> = ({ state }) => {
  const { parameters } = state;

  // Compute downstream metrics
  const costEngineRows = useMemo(() => computeCostEngineRows(state), [state]);
  const reconCostRows = useMemo(
    () => computeReconciliationCostRows(state, costEngineRows),
    [state, costEngineRows]
  );
  const reconDeductionRows = useMemo(() => computeReconciliationDeductionRows(state), [state]);
  const summary = useMemo(
    () => computeManagementSummary(state, costEngineRows, reconCostRows, reconDeductionRows),
    [state, costEngineRows, reconCostRows, reconDeductionRows]
  );

  // Top 5 Profit Erosion High-Risk SKUs
  const topErosionSkus = useMemo(() => {
    const list = [...reconCostRows];
    list.sort((a, b) => b.totalCostVariance - a.totalCostVariance);
    return list.slice(0, 5).map((item) => {
      const eng = costEngineRows.find((e) => e.poNumber === item.poNumber);
      return {
        poNumber: item.poNumber,
        skuCode: item.skuCode,
        productName: eng?.productName || item.skuCode,
        category: eng?.category || 'General',
        actualQty: item.actualQty,
        totalVariance: item.totalCostVariance,
        primaryDriver: item.primaryDriver,
      };
    });
  }, [reconCostRows, costEngineRows]);

  // Retailer Deduction Matrix
  const retailerMatrix = useMemo(() => {
    const retailers = ['Woolworths', 'Coles', 'ALDI', 'Kmart', 'Big W'];
    return retailers.map((ret) => {
      const matching = reconDeductionRows.filter(
        (d) => d.retailerName.toLowerCase() === ret.toLowerCase()
      );
      let totalDeductions = 0;
      let rebates = 0;
      let penalties = 0;
      let recoveryPool = 0;

      matching.forEach((m) => {
        totalDeductions += m.deductionAmountAUD;
        if (m.standardType === 'REB') rebates += m.deductionAmountAUD;
        else penalties += m.deductionAmountAUD;

        if (m.recoverableFlag === 'Y' && m.disputeStatus !== 'Recovered & Settled') {
          recoveryPool += m.deductionAmountAUD;
        }
      });

      return {
        retailer: ret,
        totalDeductions: round(totalDeductions, 2),
        rebates: round(rebates, 2),
        penalties: round(penalties, 2),
        recoveryPool: round(recoveryPool, 2),
        claimsCount: matching.length,
      };
    });
  }, [reconDeductionRows]);

  const isNetMarginBreached = summary.netEffectiveMarginPct < parameters.targetGrossMargin;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1">
          <span>Sheet 05</span>
          <span>&bull;</span>
          <span>Executive Decision Cockpit</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-[28px] font-bold text-[#051C2C] leading-tight">
              Management Summary &amp; True Margin Analysis
            </h1>
            <p className="text-[13px] text-gray-600 mt-1">
              CEO Strategic Review: Margin bridge from nominal book margin to true take-home profit, high-risk SKU loss ranking, and commercial recovery targets.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white border border-[#E8E8E6] text-[#051C2C] font-semibold shadow-xs">
              Period: {parameters.period}
            </span>
          </div>
        </div>
      </div>

      {/* Top 6 Executive KPI Cards Row (Out-16 to Out-21) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* KPI 1: Net Sales Revenue (Out-16) */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Effective Net Sales (Out-16)
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {formatCurrency(summary.netSalesRevenue, parameters.baseCurrency, 0)}
          </div>
          <span className="text-[11px] text-[#888888]">
            Gross sales less trade rebates
          </span>
        </div>

        {/* KPI 2: Book Gross Margin % (Out-17) */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Nominal Book GM (Out-17)
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {formatPct(summary.bookGrossMarginPct, 1)}
          </div>
          <span className="text-[11px] text-[#888888]">
            Initial forecast planning margin
          </span>
        </div>

        {/* KPI 3: Realized Landed GM % (Out-18) */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Realized Landed GM (Out-18)
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {formatPct(summary.realizedGrossMarginPct, 1)}
          </div>
          <span className="text-[11px] text-[#888888]">
            Post freight &amp; FX settlement
          </span>
        </div>

        {/* KPI 4: Net Effective Margin % (Out-19) */}
        <div className={`pcra-card p-5 ${isNetMarginBreached ? 'ring-2 ring-[#D32F2F]' : ''}`}>
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Net Effective GM (Out-19)
          </span>
          <div className={`font-display text-[28px] font-bold leading-none mb-1 ${
            isNetMarginBreached ? 'text-[#D32F2F]' : 'text-[#051C2C]'
          }`}>
            {formatPct(summary.netEffectiveMarginPct, 1)}
          </div>
          <span className="text-[11px] text-[#888888]">
            {isNetMarginBreached
              ? `Below ${formatPct(parameters.targetGrossMargin, 0)} target threshold`
              : 'Target achieved'}
          </span>
        </div>

        {/* KPI 5: Margin Erosion Rate (Out-20) */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Margin Erosion (Out-20)
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {formatPct(summary.marginErosionRate, 1)}{' '}
            <span className="text-xs font-sans font-normal text-gray-500">
              (-{summary.marginErosionBps} bps)
            </span>
          </div>
          <span className="text-[11px] text-[#888888]">
            Slipped to logistics &amp; retail penalties
          </span>
        </div>

        {/* KPI 6: Potential Recovery Pool (Out-21) */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Recovery Pool (Out-21)
          </span>
          <div className="font-display text-[28px] font-bold text-[#2251FF] leading-none mb-1">
            {formatCurrency(summary.potentialRecoveryPool, parameters.baseCurrency, 0)}
          </div>
          <span className="text-[11px] text-[#888888]">
            Substantiated claims for clawback
          </span>
        </div>
      </div>

      {/* Executive Insight Block */}
      <InsightBlock
        title="CEO Strategic Margin Verdict"
        actionText="Review Dispute Package"
        onAction={() => {}}
      >
        Nominal book margin was projected at <strong>{formatPct(summary.bookGrossMarginPct, 1)}</strong>, but true net take-home margin fell to <strong>{formatPct(summary.netEffectiveMarginPct, 1)}</strong> (an erosion of <strong>{summary.marginErosionBps} bps</strong>). Inbound ocean freight inflation and Australian retailer DIFOT compliance deductions are the primary causes. Lodging substantiated dispute letters can immediately recover <strong>{formatCurrency(summary.potentialRecoveryPool, parameters.baseCurrency)}</strong>, restoring <strong>{round((summary.potentialRecoveryPool / summary.netSalesRevenue) * 10000, 0)} bps</strong> of net margin.
      </InsightBlock>

      {/* Main Analysis Section: Waterfall Bridge & Top SKUs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Waterfall Margin Bridge (7 cols) */}
        <div className="lg:col-span-7 pcra-card overflow-hidden">
          <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div>
              <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
                Financial Margin Bridge Waterfall (Table_Waterfall)
              </h3>
              <p className="text-[12px] text-gray-500">
                Sequential reconciliation from gross billed revenue to net effective profit
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr>
                  <th className="pcra-th">Line Item / Operational Friction</th>
                  <th className="pcra-th text-right w-36">Amount</th>
                  <th className="pcra-th text-right w-24">Margin %</th>
                  <th className="pcra-th min-w-[200px]">Strategic Commentary</th>
                </tr>
              </thead>
              <tbody>
                {summary.waterfallSteps.map((step, idx) => {
                  const isSubtotal = step.isTotal;
                  const isDeduction = step.type === 'deduction';
                  const isFinal = step.type === 'final';

                  return (
                    <tr
                      key={step.label}
                      className={`${
                        isFinal
                          ? 'bg-[rgba(34,81,255,0.06)] font-bold'
                          : isSubtotal
                          ? 'bg-[rgba(5,28,44,0.04)] font-semibold'
                          : idx % 2 === 0
                          ? 'bg-[#FFFFFF]'
                          : 'bg-[#F5F5F2]'
                      }`}
                    >
                      <td className="pcra-td">
                        <span className={isSubtotal || isFinal ? 'text-[#051C2C]' : 'text-gray-700'}>
                          {step.label}
                        </span>
                      </td>
                      <td className="pcra-td text-right font-mono tabular-nums">
                        <span
                          className={
                            isFinal
                              ? 'text-[#2251FF] font-bold text-sm'
                              : isDeduction
                              ? 'text-gray-600'
                              : 'text-[#051C2C] font-semibold'
                          }
                        >
                          {formatCurrency(step.amount, parameters.baseCurrency)}
                        </span>
                      </td>
                      <td className="pcra-td text-right font-mono tabular-nums font-semibold">
                        {step.rate !== undefined ? formatPct(step.rate, 1) : '-'}
                      </td>
                      <td className="pcra-td text-gray-500 text-[11px]">
                        {step.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 5 High-Risk Profit Erosion SKUs (5 cols) */}
        <div className="lg:col-span-5 pcra-card overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div>
              <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
                Top 5 Profit Erosion SKUs
              </h3>
              <p className="text-[12px] text-gray-500">
                Products with largest landed cost overrun eroding contract margins
              </p>
            </div>
          </div>

          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
            {topErosionSkus.map((sku, index) => {
              const maxVar = topErosionSkus[0]?.totalVariance || 1;
              return (
                <div
                  key={sku.skuCode}
                  className="p-3 rounded-lg bg-[rgba(5,28,44,0.02)] border border-[#E8E8E6] hover:bg-[rgba(5,28,44,0.04)] transition"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-[#051C2C]">
                          #{index + 1} {sku.skuCode}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">({sku.poNumber})</span>
                      </div>
                      <div className="text-xs text-gray-700 truncate max-w-[220px]">
                        {sku.productName}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-xs text-[#D32F2F]">
                        +{formatCurrency(sku.totalVariance, parameters.baseCurrency)}
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {sku.actualQty.toLocaleString()} units
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[rgba(5,28,44,0.06)]">
                    <span className="text-gray-500">{sku.primaryDriver}</span>
                    <span className="text-[#2251FF] font-medium text-[10px]">
                      {formatPct(sku.totalVariance / (summary.netSalesRevenue || 1), 2)} of total rev
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Retailer Customer Deduction & Dispute Matrix */}
      <div className="pcra-card overflow-hidden">
        <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
          <div>
            <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
              Australian Retailer Deduction &amp; Dispute Recovery Matrix
            </h3>
            <p className="text-[12px] text-gray-500">
              Breakdown of total deductions into legitimate contractual rebates vs actionable compliance penalties
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr>
                <th className="pcra-th w-36">Retail Partner</th>
                <th className="pcra-th text-center w-24">Claims Count</th>
                <th className="pcra-th text-right w-36">Total Deducted</th>
                <th className="pcra-th text-right w-36">Contractual Rebates</th>
                <th className="pcra-th text-right w-36">Compliance Penalties</th>
                <th className="pcra-th text-right w-36">Actionable Recovery Pool</th>
                <th className="pcra-th text-right w-44">Dispute Opportunity</th>
              </tr>
            </thead>
            <tbody>
              {retailerMatrix.map((item, idx) => {
                const recoveryRatio = item.penalties > 0 ? (item.recoveryPool / item.penalties) * 100 : 0;
                return (
                  <tr
                    key={item.retailer}
                    className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                  >
                    <td className="pcra-td font-semibold text-[#051C2C] text-sm">
                      {item.retailer}
                    </td>
                    <td className="pcra-td text-center font-mono text-gray-600">
                      {item.claimsCount}
                    </td>
                    <td className="pcra-td text-right font-mono font-bold text-[#051C2C]">
                      {formatCurrency(item.totalDeductions, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono text-gray-600">
                      {formatCurrency(item.rebates, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono text-[#D32F2F] font-semibold">
                      {formatCurrency(item.penalties, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono font-bold text-[#2251FF]">
                      {formatCurrency(item.recoveryPool, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right">
                      <DataBar
                        value={item.recoveryPool}
                        max={summary.potentialRecoveryPool || 1}
                        formattedText={`${round(recoveryRatio, 0)}% of fines`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
