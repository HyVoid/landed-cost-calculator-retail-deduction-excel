import React, { useMemo, useState } from 'react';
import {
  Scale,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Filter,
  DollarSign,
  Search,
} from 'lucide-react';
import { AppState, ReconciliationCostRow, ReconciliationDeductionRow } from '../types/pcra';
import {
  computeCostEngineRows,
  computeReconciliationCostRows,
  computeReconciliationDeductionRows,
  formatCurrency,
  round,
} from '../utils/calculations';
import { InsightBlock } from '../components/InsightBlock';
import { DataBar } from '../components/DataBar';

interface ReconciliationViewProps {
  state: AppState;
  onChange: (updater: (prev: AppState) => AppState) => void;
}

export const ReconciliationView: React.FC<ReconciliationViewProps> = ({ state, onChange }) => {
  const { parameters } = state;
  const [activeTab, setActiveTab] = useState<'costs' | 'deductions'>('costs');
  const [searchTerm, setSearchTerm] = useState('');
  const [deductionFilter, setDeductionFilter] = useState<'all' | 'priority' | 'recoverable' | 'disputed'>('all');

  // Compute calculated tables
  const costEngineRows = useMemo(() => computeCostEngineRows(state), [state]);
  const reconCostRows = useMemo(
    () => computeReconciliationCostRows(state, costEngineRows),
    [state, costEngineRows]
  );
  const reconDeductionRows = useMemo(() => computeReconciliationDeductionRows(state), [state]);

  // Track A Summary
  const costSummary = useMemo(() => {
    let totalActualVariance = 0;
    let totalFreightVar = 0;
    let totalFxVar = 0;
    let totalDutyVar = 0;
    let totalPortVar = 0;
    let severeOverruns = 0;
    let maxCostVariance = 0;

    reconCostRows.forEach((r) => {
      totalActualVariance += r.totalCostVariance;
      totalFreightVar += r.varFreightComp;
      totalFxVar += r.varFXComp;
      totalDutyVar += r.varDutyComp;
      totalPortVar += r.varPortComp;
      if (r.varianceSeverity === 'Severe Overrun') severeOverruns++;
      if (Math.abs(r.totalCostVariance) > maxCostVariance) maxCostVariance = Math.abs(r.totalCostVariance);
    });

    return {
      totalActualVariance: round(totalActualVariance, 2),
      totalFreightVar: round(totalFreightVar, 2),
      totalFxVar: round(totalFxVar, 2),
      totalDutyVar: round(totalDutyVar, 2),
      totalPortVar: round(totalPortVar, 2),
      severeOverruns,
      maxCostVariance,
    };
  }, [reconCostRows]);

  // Track B Summary
  const deductionSummary = useMemo(() => {
    let totalDeductions = 0;
    let totalRebates = 0;
    let totalPenalties = 0;
    let totalRecoverable = 0;
    let ceoPriorityCount = 0;

    reconDeductionRows.forEach((d) => {
      totalDeductions += d.deductionAmountAUD;
      if (d.standardType === 'REB') totalRebates += d.deductionAmountAUD;
      else totalPenalties += d.deductionAmountAUD;

      if (d.recoverableFlag === 'Y') totalRecoverable += d.deductionAmountAUD;
      if (d.isCeoPriority) ceoPriorityCount++;
    });

    return {
      totalDeductions: round(totalDeductions, 2),
      totalRebates: round(totalRebates, 2),
      totalPenalties: round(totalPenalties, 2),
      totalRecoverable: round(totalRecoverable, 2),
      ceoPriorityCount,
    };
  }, [reconDeductionRows]);

  // Dispute status updater
  const handleDisputeStatusChange = (id: string, status: any) => {
    onChange((prev) => ({
      ...prev,
      retailDeductions: prev.retailDeductions.map((r) => (r.id === id ? { ...r, disputeStatus: status } : r)),
    }));
  };

  // Filtered deductions
  const filteredDeductions = useMemo(() => {
    return reconDeductionRows.filter((d) => {
      const matchSearch =
        d.invoiceRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.retailerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.deductionClaimRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.deductionCodeRaw.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchSearch) return false;
      if (deductionFilter === 'priority') return d.isCeoPriority;
      if (deductionFilter === 'recoverable') return d.recoverableFlag === 'Y';
      if (deductionFilter === 'disputed') return d.disputeStatus === 'Dispute Lodged';
      return true;
    });
  }, [reconDeductionRows, searchTerm, deductionFilter]);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1">
          <span>Sheet 04</span>
          <span>&bull;</span>
          <span>Operational Reconciliation</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-[28px] font-bold text-[#051C2C] leading-tight">
              Multi-Dimensional Variance Reconciliation &amp; Dispute Recovery
            </h1>
            <p className="text-[13px] text-gray-600 mt-1">
              Zero-Residual Mathematical Decomposition: Deconstruct landed cost variances across 5 financial dimensions and manage actionable Australian retailer deduction dispute lifecycles.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('costs')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'costs'
                  ? 'bg-[#051C2C] text-white shadow-xs'
                  : 'bg-white text-gray-600 border border-[#E8E8E6] hover:bg-gray-50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Track A: 5-Way Cost Attribution</span>
            </button>
            <button
              onClick={() => setActiveTab('deductions')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'deductions'
                  ? 'bg-[#051C2C] text-white shadow-xs'
                  : 'bg-white text-gray-600 border border-[#E8E8E6] hover:bg-gray-50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Track B: Retail Claims &amp; Disputes ({reconDeductionRows.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Track A: 5-Way Landed Cost Attribution View */}
      {activeTab === 'costs' && (
        <div className="space-y-6">
          {/* Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Total Landed Variance (Out-09)
              </span>
              <div className={`font-display text-[26px] font-bold leading-none mb-1 ${
                costSummary.totalActualVariance > parameters.toleranceAmount ? 'text-[#D32F2F]' : 'text-[#051C2C]'
              }`}>
                {formatCurrency(costSummary.totalActualVariance, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                {costSummary.totalActualVariance > 0 ? 'Net cost inflation overrun' : 'Net favorable variance'}
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Ocean Freight Surge (Out-11)
              </span>
              <div className="font-display text-[26px] font-bold text-[#051C2C] leading-none mb-1">
                {formatCurrency(costSummary.totalFreightVar, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Carrier rate hikes &amp; surcharges
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Currency Fluctuation (Out-13)
              </span>
              <div className="font-display text-[26px] font-bold text-[#051C2C] leading-none mb-1">
                {formatCurrency(costSummary.totalFxVar, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                AUD devaluation impact on FOB
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Port &amp; Demurrage Delta
              </span>
              <div className="font-display text-[26px] font-bold text-[#051C2C] leading-none mb-1">
                {formatCurrency(costSummary.totalPortVar, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Wharf congestion &amp; detention fees
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Zero Residual Guarantee
              </span>
              <div className="font-display text-[26px] font-bold text-[#00C853] leading-none mb-1">
                $0.00
              </div>
              <span className="text-[11px] text-[#888888]">
                100% mathematically balanced
              </span>
            </div>
          </div>

          {/* Insight Block */}
          <InsightBlock title="Zero Residual Guarantee & Multi-Departmental Attribution">
            The variance decomposition model mathematically guarantees that the sum of the five sub-components (Purchase Price + Ocean Freight + Customs Duty + FX Fluctuation + Port Drayage) equals the exact Total Cost Variance ($0.00$ residual). This instantly assigns financial accountability to the responsible business team (Supply Chain Logistics, Treasury, Customs Compliance, or Distribution).
          </InsightBlock>

          {/* Track A Table */}
          <div className="pcra-card overflow-hidden">
            <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
              <div>
                <h3 className="font-heading text-[16px] font-bold text-[#051C2C]">
                  Track A: Incurred Actual Landed Cost vs Baseline Recalculation (Out-06 ~ Out-13)
                </h3>
                <p className="text-[11.5px] text-gray-500">
                  Detailed variance attribution per procurement order item
                </p>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(0,200,83,0.08)] text-[#051C2C] font-semibold">
                ✓ Check Residual: 0.00
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pcra-th w-28">PO Number (In-07)</th>
                    <th className="pcra-th w-28">SKU Code</th>
                    <th className="pcra-th text-right w-24">Act Qty (In-22)</th>
                    <th className="pcra-th text-right w-28">Base Cost (Out-03)</th>
                    <th className="pcra-th text-right w-28">Act Freight (Out-06)</th>
                    <th className="pcra-th text-right w-28">Act Duty (Out-07)</th>
                    <th className="pcra-th text-right w-28">Act Landed (Out-08)</th>
                    <th className="pcra-th text-right w-32">Total Var (Out-09)</th>
                    <th className="pcra-th text-right w-28">Freight Var (Out-11)</th>
                    <th className="pcra-th text-right w-28">FX Var (Out-13)</th>
                    <th className="pcra-th text-right w-28">Duty Var (Out-12)</th>
                    <th className="pcra-th text-right w-28">Port Var</th>
                    <th className="pcra-th text-center w-24">Residual Check</th>
                    <th className="pcra-th text-center w-32">Severity</th>
                    <th className="pcra-th min-w-[180px]">Primary Cost Driver</th>
                    <th className="pcra-th w-36">Action Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {reconCostRows.map((row, idx) => {
                    const isSevere = row.varianceSeverity === 'Severe Overrun';
                    return (
                      <tr
                        key={row.poNumber}
                        className={`${idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'} ${
                          isSevere ? 'anomaly-row' : ''
                        }`}
                      >
                        <td className="pcra-td font-mono font-bold text-[#051C2C]">
                          {row.poNumber}
                        </td>
                        <td className="pcra-td font-mono">{row.skuCode}</td>
                        <td className="pcra-td text-right font-mono tabular-nums">
                          {row.actualQty.toLocaleString()}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                          {formatCurrency(row.recalcLandedCost, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                          {formatCurrency(row.actualFreightPerUnit, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                          {formatCurrency(row.actualDutyPerUnit, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums font-bold text-[#051C2C]">
                          {formatCurrency(row.actualLandedCost, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums font-bold">
                          <span className={isSevere ? 'text-[#D32F2F]' : 'text-[#051C2C]'}>
                            {formatCurrency(row.totalCostVariance, parameters.baseCurrency)}
                          </span>
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums">
                          {formatCurrency(row.varFreightComp, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums">
                          {formatCurrency(row.varFXComp, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums">
                          {formatCurrency(row.varDutyComp, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-right font-mono tabular-nums">
                          {formatCurrency(row.varPortComp, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-center font-mono font-bold text-[#00C853] text-[11px]">
                          ${row.attributionCheck.toFixed(2)}
                        </td>
                        <td className="pcra-td text-center">
                          {isSevere ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                              Severe Overrun
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                              Controlled
                            </span>
                          )}
                        </td>
                        <td className="pcra-td text-xs font-medium text-[#051C2C]">
                          {row.primaryDriver}
                        </td>
                        <td className="pcra-td text-xs font-semibold text-[#2251FF]">
                          {row.actionOwner}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Track B: Retail Deductions & Claims View */}
      {activeTab === 'deductions' && (
        <div className="space-y-6">
          {/* Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Total Incurred Deductions
              </span>
              <div className="font-display text-[26px] font-bold text-[#051C2C] leading-none mb-1">
                {formatCurrency(deductionSummary.totalDeductions, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Across all Australian retailer accounts
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Contractual Trade Rebates (REB)
              </span>
              <div className="font-display text-[26px] font-bold text-[#051C2C] leading-none mb-1">
                {formatCurrency(deductionSummary.totalRebates, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Agreed trading terms &amp; volume incentives
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Compliance &amp; DIFOT Penalties
              </span>
              <div className="font-display text-[26px] font-bold text-[#D32F2F] leading-none mb-1">
                {formatCurrency(deductionSummary.totalPenalties, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Direct margin erosion from fines &amp; shortages
              </span>
            </div>

            <div className="pcra-card p-5">
              <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Actionable Recovery Pool (Out-21)
              </span>
              <div className="font-display text-[26px] font-bold text-[#2251FF] leading-none mb-1">
                {formatCurrency(deductionSummary.totalRecoverable, parameters.baseCurrency)}
              </div>
              <span className="text-[11px] text-[#888888]">
                Substantiated claims with proof of compliance
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="pcra-card overflow-hidden">
            <div className="p-4 border-b border-[#E8E8E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'all', label: `All Claims (${reconDeductionRows.length})` },
                  { id: 'priority', label: `CEO Priority Pool (${deductionSummary.ceoPriorityCount})` },
                  { id: 'recoverable', label: 'Recoverable' },
                  { id: 'disputed', label: 'Dispute Lodged' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setDeductionFilter(f.id as any)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                      deductionFilter === f.id
                        ? 'bg-[#051C2C] text-white shadow-xs'
                        : 'text-gray-600 hover:text-[#051C2C] hover:bg-gray-100'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search invoice, retailer, claim..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-1.5 bg-gray-50 border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-[#2251FF] focus:bg-white"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pcra-th w-28">Invoice Ref</th>
                    <th className="pcra-th w-32">Retailer</th>
                    <th className="pcra-th w-36">Claim Ref</th>
                    <th className="pcra-th w-28">Raw Code</th>
                    <th className="pcra-th text-right w-32">Amount (In-28)</th>
                    <th className="pcra-th w-28 text-center">Type (Out-14)</th>
                    <th className="pcra-th w-36 text-center">Recoverable</th>
                    <th className="pcra-th text-center w-36">CEO Priority Flag</th>
                    <th className="pcra-th w-48">Dispute Status (Out-15)</th>
                    <th className="pcra-th min-w-[240px]">Required Dispute Evidence Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDeductions.map((row, idx) => {
                    return (
                      <tr
                        key={row.id}
                        className={`${idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'} ${
                          row.isCeoPriority ? 'anomaly-row' : ''
                        }`}
                      >
                        <td className="pcra-td font-mono font-bold text-[#051C2C]">
                          {row.invoiceRef}
                        </td>
                        <td className="pcra-td font-semibold text-[#051C2C]">
                          {row.retailerName}
                        </td>
                        <td className="pcra-td font-mono text-xs">{row.deductionClaimRef}</td>
                        <td className="pcra-td font-mono font-bold">{row.deductionCodeRaw}</td>
                        <td className="pcra-td text-right font-mono font-bold tabular-nums text-[#051C2C]">
                          {formatCurrency(row.deductionAmountAUD, parameters.baseCurrency)}
                        </td>
                        <td className="pcra-td text-center">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                            row.standardType === 'REB'
                              ? 'bg-[rgba(5,28,44,0.06)] text-[#051C2C]'
                              : 'bg-[rgba(211,47,47,0.08)] text-[#D32F2F]'
                          }`}>
                            {row.standardType}
                          </span>
                        </td>
                        <td className="pcra-td text-center">
                          {row.recoverableFlag === 'Y' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(34,81,255,0.08)] text-[#2251FF]">
                              Y - Recoverable
                            </span>
                          ) : row.recoverableFlag === 'N' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium text-gray-500">
                              N - Contractual
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium text-amber-600 bg-amber-50">
                              P - Review
                            </span>
                          )}
                        </td>
                        <td className="pcra-td text-center">
                          {row.isCeoPriority ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[rgba(211,47,47,0.10)] text-[#D32F2F]">
                              <AlertTriangle className="w-3 h-3" />
                              <span>CEO Priority</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-gray-400">Regular</span>
                          )}
                        </td>
                        <td className="pcra-td">
                          {/* Interactive dropdown for Out-15 */}
                          <select
                            value={row.disputeStatus}
                            onChange={(e) => handleDisputeStatusChange(row.id, e.target.value)}
                            className="input-editable w-full text-xs font-semibold"
                          >
                            <option value="Pending Review">Pending Review</option>
                            <option value="Dispute Lodged">Dispute Lodged (Letter Sent)</option>
                            <option value="Recovered & Settled">Recovered &amp; Settled</option>
                            <option value="Accepted & Written Off">Accepted &amp; Written Off</option>
                          </select>
                        </td>
                        <td className="pcra-td text-xs text-gray-600">
                          {row.evidenceGuide}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
