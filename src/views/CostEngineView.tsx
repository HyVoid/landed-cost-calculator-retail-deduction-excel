import React, { useMemo, useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertOctagon, TrendingUp, Search } from 'lucide-react';
import { AppState } from '../types/pcra';
import { computeCostEngineRows, formatCurrency, formatPct, round } from '../utils/calculations';
import { InsightBlock } from '../components/InsightBlock';
import { DataBar } from '../components/DataBar';

interface CostEngineViewProps {
  state: AppState;
}

export const CostEngineView: React.FC<CostEngineViewProps> = ({ state }) => {
  const { parameters } = state;
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'risk' | 'compliant' | 'overestimated'>('all');

  // Compute all Cost Engine rows dynamically
  const engineRows = useMemo(() => computeCostEngineRows(state), [state]);

  // Summary Metrics
  const summary = useMemo(() => {
    let totalExposure = 0;
    let netVariance = 0;
    let submergedRiskCount = 0;
    let compliantCount = 0;
    let maxUnitCost = 0;

    engineRows.forEach((row) => {
      totalExposure += row.poQty * row.recalcLandedCost;
      netVariance += row.totalVarianceExposure;
      if (row.engineAuditStatus === 'Submerged Loss Risk') submergedRiskCount++;
      if (row.engineAuditStatus === 'Compliant') compliantCount++;
      if (row.recalcLandedCost > maxUnitCost) maxUnitCost = row.recalcLandedCost;
    });

    return {
      totalExposure: round(totalExposure, 2),
      netVariance: round(netVariance, 2),
      submergedRiskCount,
      compliantCount,
      totalCount: engineRows.length,
      maxUnitCost,
    };
  }, [engineRows]);

  // Filtering
  const filteredRows = useMemo(() => {
    return engineRows.filter((r) => {
      const matchSearch =
        r.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.skuCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.category.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchSearch) return false;
      if (statusFilter === 'risk') return r.engineAuditStatus === 'Submerged Loss Risk';
      if (statusFilter === 'compliant') return r.engineAuditStatus === 'Compliant';
      if (statusFilter === 'overestimated') return r.engineAuditStatus === 'Cost Overestimated';
      return true;
    });
  }, [engineRows, searchTerm, statusFilter]);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1">
          <span>Sheet 03</span>
          <span>&bull;</span>
          <span>Computational Audit Engine</span>
        </div>
        <h1 className="font-display text-[28px] font-bold text-[#051C2C] leading-tight">
          Landed Cost Recalculation &amp; Formula Audit Engine
        </h1>
        <p className="text-[13px] text-gray-600 mt-1">
          Australian Border Force (ABF) Statutory Baseline Engine: Eliminates historical spreadsheet logic flaws, recalculates true landed costs on FOB value, and flags submerged pricing risks (Out-01 ~ Out-05).
        </p>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Standard Baseline Exposure
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {formatCurrency(summary.totalExposure, parameters.baseCurrency)}
          </div>
          <span className="text-[11px] text-[#888888]">
            Across {summary.totalCount} active procurement orders
          </span>
        </div>

        {/* Card 2 */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Model Net Discrepancy (Out-04 Total)
          </span>
          <div className={`font-display text-[28px] font-bold leading-none mb-1 ${
            summary.netVariance > parameters.toleranceAmount ? 'text-[#D32F2F]' : 'text-[#051C2C]'
          }`}>
            {formatCurrency(summary.netVariance, parameters.baseCurrency)}
          </div>
          <span className="text-[11px] text-[#888888]">
            {summary.netVariance > 0 ? 'Book models understated true costs' : 'Aligned within normal tolerance'}
          </span>
        </div>

        {/* Card 3 */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Submerged Pricing Risks
          </span>
          <div className={`font-display text-[28px] font-bold leading-none mb-1 ${
            summary.submergedRiskCount > 0 ? 'text-[#D32F2F]' : 'text-[#051C2C]'
          }`}>
            {summary.submergedRiskCount} <span className="text-sm font-sans font-normal text-gray-500">SKUs</span>
          </div>
          <span className="text-[11px] text-[#888888]">
            {summary.submergedRiskCount > 0
              ? 'Action required: Understated landed costs'
              : 'Zero submerged loss risks detected'}
          </span>
        </div>

        {/* Card 4 */}
        <div className="pcra-card p-5">
          <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block mb-1">
            Statutory Model Alignment
          </span>
          <div className="font-display text-[28px] font-bold text-[#051C2C] leading-none mb-1">
            {round((summary.compliantCount / Math.max(1, summary.totalCount)) * 100, 0)}%
          </div>
          <span className="text-[11px] text-[#888888]">
            {summary.compliantCount} of {summary.totalCount} PO models 100% compliant
          </span>
        </div>
      </div>

      {/* Insight Block */}
      <InsightBlock title="Statutory Valuation Rule: Australian ABF Compliance">
        Under Australian Border Force regulations, customs duty is calculated strictly against the <strong>FOB (Free On Board) export value</strong>, excluding international ocean freight and marine insurance. When historical spreadsheet models mistakenly calculate duty on CIF or invert foreign currency rates, products are mispriced, leading to silent erosion of true retail margins.
      </InsightBlock>

      {/* Main Table Container */}
      <div className="pcra-card overflow-hidden">
        {/* Table Filter & Search Header */}
        <div className="p-4 border-b border-[#E8E8E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
          <div className="flex items-center gap-1.5">
            {[
              { id: 'all', label: `All Orders (${engineRows.length})` },
              { id: 'risk', label: `Submerged Risks (${summary.submergedRiskCount})` },
              { id: 'compliant', label: `Compliant (${summary.compliantCount})` },
              { id: 'overestimated', label: 'Overestimated' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setStatusFilter(f.id as any)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                  statusFilter === f.id
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
              placeholder="Search PO, SKU, product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 bg-gray-50 border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-[#2251FF] focus:bg-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="pcra-th w-28">PO Number (In-07)</th>
                <th className="pcra-th w-28">SKU Code (In-08)</th>
                <th className="pcra-th min-w-[160px]">Product Description</th>
                <th className="pcra-th text-right w-20">PO Qty</th>
                <th className="pcra-th text-right w-24">FOB FC (In-13)</th>
                <th className="pcra-th text-right w-20">FX (B7)</th>
                <th className="pcra-th text-right w-24">FOB AUD (Out-01)</th>
                <th className="pcra-th text-right w-24">Freight</th>
                <th className="pcra-th text-right w-20">Duty %</th>
                <th className="pcra-th text-right w-24">Duty AUD (Out-02)</th>
                <th className="pcra-th text-right w-28">Recalc Cost (Out-03)</th>
                <th className="pcra-th text-right w-24">Book Cost (In-17)</th>
                <th className="pcra-th text-right w-28">Unit Var (Out-04)</th>
                <th className="pcra-th text-right w-32">Total Exposure Var</th>
                <th className="pcra-th text-center w-36">Audit Status (Out-05)</th>
                <th className="pcra-th min-w-[200px]">Audit Root Cause Insight</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, idx) => {
                const isRisk = row.engineAuditStatus === 'Submerged Loss Risk';
                return (
                  <tr
                    key={row.poNumber}
                    className={`${idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'} ${
                      isRisk ? 'anomaly-row' : ''
                    }`}
                  >
                    <td className="pcra-td font-mono font-bold text-[#051C2C]">
                      {row.poNumber}
                    </td>
                    <td className="pcra-td font-mono">{row.skuCode}</td>
                    <td className="pcra-td">
                      <div className="truncate max-w-[180px]" title={row.productName}>
                        {row.productName}
                      </div>
                      <span className="text-[10px] text-gray-400 block">{row.category}</span>
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums">
                      {row.poQty.toLocaleString()}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums">
                      {row.fobCurrency} {row.fobUnitPriceFC.toFixed(2)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums text-gray-500">
                      {row.benchmarkFX.toFixed(3)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums font-semibold text-[#051C2C]">
                      {formatCurrency(row.recalcFobAUD, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                      {formatCurrency(row.estFreightAUD, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                      {formatPct(row.statutoryDutyRate, 1)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums text-gray-600">
                      {formatCurrency(row.recalcDutyAUD, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums font-bold text-[#051C2C]">
                      <DataBar
                        value={row.recalcLandedCost}
                        max={summary.maxUnitCost}
                        formattedText={formatCurrency(row.recalcLandedCost, parameters.baseCurrency)}
                      />
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums text-gray-500">
                      {formatCurrency(row.bookLandedCost, parameters.baseCurrency)}
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums font-semibold">
                      <span className={isRisk ? 'text-[#D32F2F]' : row.costBaselineVariance !== 0 ? 'text-[#051C2C]' : 'text-gray-400'}>
                        {row.costBaselineVariance > 0
                          ? `+${row.costBaselineVariance.toFixed(2)}`
                          : row.costBaselineVariance.toFixed(2)}
                      </span>
                    </td>
                    <td className="pcra-td text-right font-mono tabular-nums font-bold">
                      <span className={isRisk ? 'text-[#D32F2F]' : 'text-[#051C2C]'}>
                        {formatCurrency(row.totalVarianceExposure, parameters.baseCurrency)}
                      </span>
                    </td>
                    <td className="pcra-td text-center">
                      {isRisk ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                          <AlertOctagon className="w-3 h-3" />
                          <span>Submerged Risk</span>
                        </span>
                      ) : row.engineAuditStatus === 'Compliant' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                          <CheckCircle2 className="w-3 h-3 text-[#051C2C]" />
                          <span>Compliant</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.05)] text-gray-600">
                          Overestimated
                        </span>
                      )}
                    </td>
                    <td className="pcra-td text-xs text-gray-600">
                      {row.auditInsight}
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
