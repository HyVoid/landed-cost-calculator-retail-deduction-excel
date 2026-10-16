import React, { useState } from 'react';
import { Plus, Trash2, Sliders, DollarSign, Shield, BookOpen } from 'lucide-react';
import { AppState, CustomsDutyItem, FxRateItem, RetailDeductionRule } from '../types/pcra';
import { InsightBlock } from '../components/InsightBlock';
import { round } from '../utils/calculations';

interface RulesMappingViewProps {
  state: AppState;
  onChange: (updater: (prev: AppState) => AppState) => void;
}

export const RulesMappingView: React.FC<RulesMappingViewProps> = ({ state, onChange }) => {
  const { parameters, fxRates, dutyRules, deductionRules } = state;
  const [activeSection, setActiveSection] = useState<'all' | 'fx' | 'duty' | 'deductions'>('all');

  // Parameter change handler
  const handleParamChange = (field: keyof typeof parameters, value: any) => {
    onChange((prev) => ({
      ...prev,
      parameters: {
        ...prev.parameters,
        [field]: value,
      },
    }));
  };

  // FX change handler
  const handleFxChange = (id: string, field: keyof FxRateItem, value: any) => {
    onChange((prev) => ({
      ...prev,
      fxRates: prev.fxRates.map((f) => (f.id === id ? { ...f, [field]: value } : f)),
    }));
  };

  const handleAddFx = () => {
    const newFx: FxRateItem = {
      id: `fx-${Date.now()}`,
      currencyCode: 'NZD',
      currencyName: 'New Zealand Dollar',
      budgetRate: 0.92,
      actualRate: 0.94,
    };
    onChange((prev) => ({ ...prev, fxRates: [...prev.fxRates, newFx] }));
  };

  const handleDeleteFx = (id: string) => {
    onChange((prev) => ({ ...prev, fxRates: prev.fxRates.filter((f) => f.id !== id) }));
  };

  // Duty change handler
  const handleDutyChange = (id: string, field: keyof CustomsDutyItem, value: any) => {
    onChange((prev) => ({
      ...prev,
      dutyRules: prev.dutyRules.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
    }));
  };

  const handleAddDuty = () => {
    const newDuty: CustomsDutyItem = {
      id: `duty-${Date.now()}`,
      categoryCode: 'CAT-NEW',
      categoryName: 'New Merchandise Category',
      hsPrefix: '9403.20',
      defaultDutyRate: 0.05,
      ftaDutyRate: 0.0,
    };
    onChange((prev) => ({ ...prev, dutyRules: [...prev.dutyRules, newDuty] }));
  };

  const handleDeleteDuty = (id: string) => {
    onChange((prev) => ({ ...prev, dutyRules: prev.dutyRules.filter((d) => d.id !== id) }));
  };

  // Deduction change handler
  const handleDeductionChange = (id: string, field: keyof RetailDeductionRule, value: any) => {
    onChange((prev) => ({
      ...prev,
      deductionRules: prev.deductionRules.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
    }));
  };

  const handleAddDeduction = () => {
    const newDed: RetailDeductionRule = {
      id: `ded-${Date.now()}`,
      retailerName: 'Woolworths',
      rawCode: 'NEW-CLAIM',
      standardTypeCode: 'DIFOT',
      meaning: 'New Operational Inbound Discrepancy',
      classification: 'Compliance Penalty',
      recoverableFlag: 'Y',
      actionOwner: 'Supply Chain Logistics',
      evidenceRequired: 'Carrier Stamped Delivery Receipt and ASN Log',
    };
    onChange((prev) => ({ ...prev, deductionRules: [...prev.deductionRules, newDed] }));
  };

  const handleDeleteDeduction = (id: string) => {
    onChange((prev) => ({ ...prev, deductionRules: prev.deductionRules.filter((d) => d.id !== id) }));
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Page Title & Subtitle */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1">
          <span>Sheet 01</span>
          <span>&bull;</span>
          <span>Core Control Center</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-[28px] font-bold text-[#051C2C] leading-tight">
              Rules, Mapping &amp; Global Parameters
            </h1>
            <p className="text-[13px] text-gray-600 mt-1">
              Single Source of Truth: Central parameter hub driving all downstream landed cost recalculations, variance decomposition, and retailer dispute workflows.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg shadow-xs border border-[#E8E8E6] shrink-0">
            {[
              { id: 'all', label: 'All Tables' },
              { id: 'fx', label: 'FX Hub' },
              { id: 'duty', label: 'Customs Duty' },
              { id: 'deductions', label: 'Deductions' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id as any)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition ${
                  activeSection === s.id
                    ? 'bg-[#051C2C] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#051C2C] hover:bg-gray-100'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Global Control Parameters (Principle 7: Zero Hardcoding) */}
      <div className="pcra-card p-6">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E8E6]">
          <Sliders className="w-4 h-4 text-[#2251FF]" />
          <h2 className="font-heading text-[18px] font-bold text-[#051C2C]">
            Global Master Parameters (Defined Names)
          </h2>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(5,28,44,0.05)] text-[#051C2C] ml-auto">
            Pale yellow cells (#FFFDE7) are interactive and auto-save
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Base Currency (B4)
            </label>
            <input
              type="text"
              value={parameters.baseCurrency}
              onChange={(e) => handleParamChange('baseCurrency', e.target.value)}
              className="input-editable w-full font-mono font-bold"
            />
            <span className="text-[10px] text-gray-400 mt-1 block">Param_BaseCurr</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Report Period (B5)
            </label>
            <input
              type="text"
              value={parameters.period}
              onChange={(e) => handleParamChange('period', e.target.value)}
              className="input-editable w-full font-mono"
            />
            <span className="text-[10px] text-gray-400 mt-1 block">Param_Period</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Tol. Amount (E4)
            </label>
            <div className="relative">
              <span className="absolute left-2.5 top-1.5 text-gray-500 font-mono text-[11px]">$</span>
              <input
                type="number"
                step="50"
                value={parameters.toleranceAmount}
                onChange={(e) => handleParamChange('toleranceAmount', parseFloat(e.target.value) || 0)}
                className="input-editable w-full pl-6 font-mono font-semibold"
              />
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">Param_Tol_Amount</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Tol. Ratio % (E5)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.5"
                value={round(parameters.tolerancePct * 100, 1)}
                onChange={(e) => handleParamChange('tolerancePct', (parseFloat(e.target.value) || 0) / 100)}
                className="input-editable w-full pr-6 font-mono font-semibold"
              />
              <span className="absolute right-2.5 top-1.5 text-gray-500 font-mono text-[11px]">%</span>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">Param_Tol_Pct</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Deduct Alert (E6)
            </label>
            <div className="relative">
              <span className="absolute left-2.5 top-1.5 text-gray-500 font-mono text-[11px]">$</span>
              <input
                type="number"
                step="100"
                value={parameters.toleranceDeduction}
                onChange={(e) => handleParamChange('toleranceDeduction', parseFloat(e.target.value) || 0)}
                className="input-editable w-full pl-6 font-mono font-semibold"
              />
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">Param_Tol_Deduct</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Target GM % (E7)
            </label>
            <div className="relative">
              <input
                type="number"
                step="1"
                value={round(parameters.targetGrossMargin * 100, 1)}
                onChange={(e) => handleParamChange('targetGrossMargin', (parseFloat(e.target.value) || 0) / 100)}
                className="input-editable w-full pr-6 font-mono font-semibold"
              />
              <span className="absolute right-2.5 top-1.5 text-gray-500 font-mono text-[11px]">%</span>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">Param_Target_GM</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#888888] uppercase tracking-wider mb-1">
              Port FEU Base (E8)
            </label>
            <div className="relative">
              <span className="absolute left-2.5 top-1.5 text-gray-500 font-mono text-[11px]">$</span>
              <input
                type="number"
                step="50"
                value={parameters.portStdFEU}
                onChange={(e) => handleParamChange('portStdFEU', parseFloat(e.target.value) || 0)}
                className="input-editable w-full pl-6 font-mono font-semibold"
              />
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">Param_PortStd_FEU</span>
          </div>
        </div>
      </div>

      {/* Insight Block */}
      <InsightBlock title="Zero-Hardcoding Architecture (Principle 7)">
        All formulas and calculations throughout PCRA link to these master parameters and rate matrices. Modifying any exchange rate, customs tariff, or tolerance threshold updates every dependent column in real-time across Sheet 03 (Cost Engine), Sheet 04 (Reconciliation), and Sheet 05 (Management Summary).
      </InsightBlock>

      {/* Table 1: FX Central Hub */}
      {(activeSection === 'all' || activeSection === 'fx') && (
        <div className="pcra-card overflow-hidden">
          <div className="p-5 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#2251FF]" />
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
                  Exchange Rate Central Hub (Table_FX: In-01 ~ In-03)
                </h3>
                <p className="text-[12px] text-gray-500">
                  Fixed budget planning rates vs realized accounting settlement rates in AUD terms
                </p>
              </div>
            </div>
            <button
              onClick={handleAddFx}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Currency</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-24">Currency (In-01)</th>
                  <th className="pcra-th">Currency Name</th>
                  <th className="pcra-th text-right w-36">Budget FX Rate (In-02)</th>
                  <th className="pcra-th text-right w-36">Actual FX Rate (In-03)</th>
                  <th className="pcra-th text-right w-32">FX Variance</th>
                  <th className="pcra-th text-center w-48">FX Risk Level</th>
                  <th className="pcra-th w-16 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fxRates.map((fx, idx) => {
                  const fxVariance = round(fx.actualRate - fx.budgetRate, 4);
                  const variancePct = fx.budgetRate > 0 ? (fxVariance / fx.budgetRate) : 0;
                  const isHighRisk = Math.abs(variancePct) >= parameters.tolerancePct;

                  return (
                    <tr
                      key={fx.id}
                      className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                    >
                      <td className="pcra-td font-mono font-bold text-[#051C2C]">
                        <input
                          type="text"
                          value={fx.currencyCode}
                          onChange={(e) => handleFxChange(fx.id, 'currencyCode', e.target.value.toUpperCase())}
                          className="input-editable w-20 font-mono uppercase font-bold"
                        />
                      </td>
                      <td className="pcra-td">
                        <input
                          type="text"
                          value={fx.currencyName}
                          onChange={(e) => handleFxChange(fx.id, 'currencyName', e.target.value)}
                          className="input-editable w-full"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.001"
                          value={fx.budgetRate}
                          onChange={(e) => handleFxChange(fx.id, 'budgetRate', parseFloat(e.target.value) || 0)}
                          className="input-editable w-28 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.001"
                          value={fx.actualRate}
                          onChange={(e) => handleFxChange(fx.id, 'actualRate', parseFloat(e.target.value) || 0)}
                          className="input-editable w-28 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td text-right font-mono tabular-nums font-semibold">
                        <span className={fxVariance !== 0 ? 'text-[#051C2C]' : 'text-gray-400'}>
                          {fxVariance > 0 ? `+${fxVariance.toFixed(4)}` : fxVariance.toFixed(4)}
                        </span>
                      </td>
                      <td className="pcra-td text-center">
                        {isHighRisk ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                            ⚠️ Volatility Breached ({(variancePct * 100).toFixed(1)}%)
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                            Controlled ({(variancePct * 100).toFixed(1)}%)
                          </span>
                        )}
                      </td>
                      <td className="pcra-td text-center">
                        {fx.currencyCode !== 'AUD' && (
                          <button
                            onClick={() => handleDeleteFx(fx.id)}
                            className="p-1 rounded text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 transition"
                            title="Delete currency row"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Table 2: Australia Customs Duty Schedule */}
      {(activeSection === 'all' || activeSection === 'duty') && (
        <div className="pcra-card overflow-hidden">
          <div className="p-5 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#2251FF]" />
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
                  Australia Customs Tariff Baseline (Table_Duty: In-04)
                </h3>
                <p className="text-[12px] text-gray-500">
                  Statutory ad valorem customs duty schedule by product category &amp; HS code prefix (ABF Regulations)
                </p>
              </div>
            </div>
            <button
              onClick={handleAddDuty}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Category</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-32">Category Code</th>
                  <th className="pcra-th">Category Name</th>
                  <th className="pcra-th w-32">HS Prefix</th>
                  <th className="pcra-th text-right w-40">Base Duty Rate (In-04)</th>
                  <th className="pcra-th text-right w-36">FTA Duty Rate</th>
                  <th className="pcra-th w-16 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dutyRules.map((duty, idx) => (
                  <tr
                    key={duty.id}
                    className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                  >
                    <td className="pcra-td font-mono font-semibold text-[#051C2C]">
                      <input
                        type="text"
                        value={duty.categoryCode}
                        onChange={(e) => handleDutyChange(duty.id, 'categoryCode', e.target.value.toUpperCase())}
                        className="input-editable w-28 font-mono font-semibold"
                      />
                    </td>
                    <td className="pcra-td">
                      <input
                        type="text"
                        value={duty.categoryName}
                        onChange={(e) => handleDutyChange(duty.id, 'categoryName', e.target.value)}
                        className="input-editable w-full"
                      />
                    </td>
                    <td className="pcra-td">
                      <input
                        type="text"
                        value={duty.hsPrefix}
                        onChange={(e) => handleDutyChange(duty.id, 'hsPrefix', e.target.value)}
                        className="input-editable w-28 font-mono"
                      />
                    </td>
                    <td className="pcra-td text-right">
                      <div className="relative inline-block w-28">
                        <input
                          type="number"
                          step="0.5"
                          value={round(duty.defaultDutyRate * 100, 1)}
                          onChange={(e) => handleDutyChange(duty.id, 'defaultDutyRate', (parseFloat(e.target.value) || 0) / 100)}
                          className="input-editable w-full pr-6 text-right font-mono font-semibold"
                        />
                        <span className="absolute right-2 top-1.5 text-gray-500 font-mono text-[11px]">%</span>
                      </div>
                    </td>
                    <td className="pcra-td text-right">
                      <div className="relative inline-block w-28">
                        <input
                          type="number"
                          step="0.5"
                          value={round(duty.ftaDutyRate * 100, 1)}
                          onChange={(e) => handleDutyChange(duty.id, 'ftaDutyRate', (parseFloat(e.target.value) || 0) / 100)}
                          className="input-editable w-full pr-6 text-right font-mono"
                        />
                        <span className="absolute right-2 top-1.5 text-gray-500 font-mono text-[11px]">%</span>
                      </div>
                    </td>
                    <td className="pcra-td text-center">
                      <button
                        onClick={() => handleDeleteDuty(duty.id)}
                        className="p-1 rounded text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 transition"
                        title="Delete category rule"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Table 3: Retailer Deduction Mapping */}
      {(activeSection === 'all' || activeSection === 'deductions') && (
        <div className="pcra-card overflow-hidden">
          <div className="p-5 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2251FF]" />
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#051C2C]">
                  Retailer Deduction &amp; Dispute Dictionary (Table_Deductions: In-05, In-06)
                </h3>
                <p className="text-[12px] text-gray-500">
                  Standardized mapping rules for major Australian retailers (Woolworths, Coles, ALDI, Kmart, Big W)
                </p>
              </div>
            </div>
            <button
              onClick={handleAddDeduction}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Deduction Rule</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-32">Retailer</th>
                  <th className="pcra-th w-28">Raw Code (In-29)</th>
                  <th className="pcra-th w-32">Standard Type (In-05)</th>
                  <th className="pcra-th">Commercial Meaning</th>
                  <th className="pcra-th w-40">Classification</th>
                  <th className="pcra-th w-36 text-center">Recoverable (In-06)</th>
                  <th className="pcra-th w-36">Action Owner</th>
                  <th className="pcra-th">Required Evidence</th>
                  <th className="pcra-th w-14 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deductionRules.map((ded, idx) => (
                  <tr
                    key={ded.id}
                    className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                  >
                    <td className="pcra-td font-semibold text-[#051C2C]">
                      <input
                        type="text"
                        value={ded.retailerName}
                        onChange={(e) => handleDeductionChange(ded.id, 'retailerName', e.target.value)}
                        className="input-editable w-28 font-medium"
                      />
                    </td>
                    <td className="pcra-td font-mono font-bold text-[#051C2C]">
                      <input
                        type="text"
                        value={ded.rawCode}
                        onChange={(e) => handleDeductionChange(ded.id, 'rawCode', e.target.value.toUpperCase())}
                        className="input-editable w-24 font-mono uppercase font-bold"
                      />
                    </td>
                    <td className="pcra-td font-mono">
                      <select
                        value={ded.standardTypeCode}
                        onChange={(e) => handleDeductionChange(ded.id, 'standardTypeCode', e.target.value)}
                        className="input-editable w-28 font-mono text-xs font-semibold"
                      >
                        <option value="REB">REB (Rebate)</option>
                        <option value="DIFOT">DIFOT (Delay)</option>
                        <option value="DAMAGE">DAMAGE</option>
                        <option value="DISC">DISC (Discount)</option>
                        <option value="COMPLIANCE">COMPLIANCE</option>
                      </select>
                    </td>
                    <td className="pcra-td">
                      <input
                        type="text"
                        value={ded.meaning}
                        onChange={(e) => handleDeductionChange(ded.id, 'meaning', e.target.value)}
                        className="input-editable w-full text-xs"
                      />
                    </td>
                    <td className="pcra-td">
                      <select
                        value={ded.classification}
                        onChange={(e) => handleDeductionChange(ded.id, 'classification', e.target.value)}
                        className="input-editable w-36 text-xs"
                      >
                        <option value="Contractual Rebate">Contractual Rebate</option>
                        <option value="Compliance Penalty">Compliance Penalty</option>
                      </select>
                    </td>
                    <td className="pcra-td text-center">
                      <select
                        value={ded.recoverableFlag}
                        onChange={(e) => handleDeductionChange(ded.id, 'recoverableFlag', e.target.value as any)}
                        className={`input-editable w-28 text-xs font-semibold text-center ${
                          ded.recoverableFlag === 'Y'
                            ? 'text-[#2251FF]'
                            : ded.recoverableFlag === 'N'
                            ? 'text-gray-500'
                            : 'text-[#D32F2F]'
                        }`}
                      >
                        <option value="Y">Y - Recoverable</option>
                        <option value="N">N - Non-recov</option>
                        <option value="P">P - Pending</option>
                      </select>
                    </td>
                    <td className="pcra-td">
                      <input
                        type="text"
                        value={ded.actionOwner}
                        onChange={(e) => handleDeductionChange(ded.id, 'actionOwner', e.target.value)}
                        className="input-editable w-32 text-xs"
                      />
                    </td>
                    <td className="pcra-td">
                      <input
                        type="text"
                        value={ded.evidenceRequired}
                        onChange={(e) => handleDeductionChange(ded.id, 'evidenceRequired', e.target.value)}
                        className="input-editable w-full text-xs"
                      />
                    </td>
                    <td className="pcra-td text-center">
                      <button
                        onClick={() => handleDeleteDeduction(ded.id)}
                        className="p-1 rounded text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 transition"
                        title="Delete deduction rule"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
