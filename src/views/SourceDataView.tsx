import React, { useState } from 'react';
import { Plus, Trash2, Package, Truck, Receipt, Search, FileUp } from 'lucide-react';
import { ActualLogisticsRecord, AppState, POEstimateRecord, RetailDeductionRecord } from '../types/pcra';
import { formatCurrency, round } from '../utils/calculations';

interface SourceDataViewProps {
  state: AppState;
  onChange: (updater: (prev: AppState) => AppState) => void;
  onOpenCsvModal: () => void;
}

export const SourceDataView: React.FC<SourceDataViewProps> = ({
  state,
  onChange,
  onOpenCsvModal,
}) => {
  const { parameters, poEstimates, actualLogistics, retailDeductions, deductionRules } = state;
  const [activeTab, setActiveTab] = useState<'po' | 'logistics' | 'retail'>('po');
  const [searchTerm, setSearchTerm] = useState('');

  // PO handlers
  const handlePoChange = (id: string, field: keyof POEstimateRecord, value: any) => {
    onChange((prev) => ({
      ...prev,
      poEstimates: prev.poEstimates.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));
  };

  const handleAddPo = () => {
    const nextIdx = poEstimates.length + 1;
    const newPo: POEstimateRecord = {
      id: `po-${Date.now()}`,
      poNumber: `PO-2026-00${nextIdx}`,
      skuCode: `SKU-NEW-${nextIdx}`,
      productName: 'Imported Consumer Pack Item',
      category: 'Homeware & Kitchen',
      poQty: 1000,
      fobCurrency: 'USD',
      fobUnitPriceFC: 25.0,
      estFreightPerUnitAUD: 5.0,
      estDutyRate: 0.05,
      estOtherLandedCost: 2.0,
      bookLandedCostPerUnit: 45.0,
    };
    onChange((prev) => ({ ...prev, poEstimates: [...prev.poEstimates, newPo] }));
  };

  const handleDeletePo = (id: string) => {
    onChange((prev) => ({ ...prev, poEstimates: prev.poEstimates.filter((p) => p.id !== id) }));
  };

  // Logistics handlers
  const handleLogisticsChange = (id: string, field: keyof ActualLogisticsRecord, value: any) => {
    onChange((prev) => ({
      ...prev,
      actualLogistics: prev.actualLogistics.map((l) => (l.id === id ? { ...l, [field]: value } : l)),
    }));
  };

  const handleAddLogistics = () => {
    const newLog: ActualLogisticsRecord = {
      id: `act-${Date.now()}`,
      poNumber: poEstimates[0]?.poNumber || 'PO-2026-001',
      skuCode: poEstimates[0]?.skuCode || 'SKU-001',
      shipmentId: `BL-LINE-${Math.floor(10000 + Math.random() * 90000)}`,
      arrivalDate: new Date().toISOString().split('T')[0],
      actualFreightInvoiceAUD: 10000.0,
      actualDutyPaidAUD: 3500.0,
      actualPortDrayageAUD: 4000.0,
      actualReceivedQty: 1000,
    };
    onChange((prev) => ({ ...prev, actualLogistics: [...prev.actualLogistics, newLog] }));
  };

  const handleDeleteLogistics = (id: string) => {
    onChange((prev) => ({ ...prev, actualLogistics: prev.actualLogistics.filter((l) => l.id !== id) }));
  };

  // Retail handlers
  const handleRetailChange = (id: string, field: keyof RetailDeductionRecord, value: any) => {
    onChange((prev) => ({
      ...prev,
      retailDeductions: prev.retailDeductions.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    }));
  };

  const handleAddRetail = () => {
    const newRet: RetailDeductionRecord = {
      id: `ret-${Date.now()}`,
      invoiceRef: `INV-AU-${Math.floor(100 + Math.random() * 900)}`,
      retailerName: 'Woolworths',
      billedQty: 500,
      contractPriceAUD: 89.95,
      deductionClaimRef: `CLM-${Date.now()}`,
      deductionAmountAUD: 1250.0,
      deductionCodeRaw: 'DIF-LATE',
      poMapRef: poEstimates[0]?.poNumber || 'PO-2026-001',
      disputeStatus: 'Pending Review',
    };
    onChange((prev) => ({ ...prev, retailDeductions: [...prev.retailDeductions, newRet] }));
  };

  const handleDeleteRetail = (id: string) => {
    onChange((prev) => ({ ...prev, retailDeductions: prev.retailDeductions.filter((r) => r.id !== id) }));
  };

  // Filtered lists
  const filteredPo = poEstimates.filter(
    (p) =>
      p.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.skuCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLogistics = actualLogistics.filter(
    (l) =>
      l.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.shipmentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.skuCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRetail = retailDeductions.filter(
    (r) =>
      r.invoiceRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.retailerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.deductionClaimRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.deductionCodeRaw.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Page Title & Navigation Bar */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1">
          <span>Sheet 02</span>
          <span>&bull;</span>
          <span>Ingestion Layer</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-[28px] font-bold text-[#051C2C] leading-tight">
              Multi-Source Business Data Ingestion
            </h1>
            <p className="text-[13px] text-gray-600 mt-1">
              Raw Operational Input Depot: Enter or import PO baseline estimates, actual freight &amp; customs invoices, and Australian retail deduction slips.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenCsvModal}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E8E8E6] hover:bg-gray-50 text-[12px] font-semibold text-[#051C2C] rounded-lg transition shadow-xs"
            >
              <FileUp className="w-3.5 h-3.5 text-[#2251FF]" />
              <span>Bulk CSV Ingestion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-table Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-2.5 rounded-xl border border-[#E8E8E6] shadow-xs">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('po')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'po'
                ? 'bg-[#051C2C] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#051C2C] hover:bg-gray-100'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>1. PO Estimates &amp; Baseline Costs ({poEstimates.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('logistics')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'logistics'
                ? 'bg-[#051C2C] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#051C2C] hover:bg-gray-100'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>2. Actual Freight &amp; Customs ({actualLogistics.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('retail')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'retail'
                ? 'bg-[#051C2C] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#051C2C] hover:bg-gray-100'
            }`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>3. Retail Sales &amp; Deductions ({retailDeductions.length})</span>
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search PO, SKU, B/L, or Invoice..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-8 pr-3 py-1.5 bg-gray-50 border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-[#2251FF] focus:bg-white"
          />
        </div>
      </div>

      {/* Sub-table 1: PO Estimates & Cost Sheets */}
      {activeTab === 'po' && (
        <div className="pcra-card overflow-hidden">
          <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div>
              <h3 className="font-heading text-[16px] font-bold text-[#051C2C]">
                Table_PO_Est: Purchase Order Forecasts &amp; Historical Book Landed Costs (In-07 ~ In-17)
              </h3>
              <p className="text-[11.5px] text-gray-500">
                All values in pale yellow cells are editable. Changes instantly propagate to the calculation engine.
              </p>
            </div>
            <button
              onClick={handleAddPo}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add PO Line</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-28">PO Number (In-07)</th>
                  <th className="pcra-th w-28">SKU Code (In-08)</th>
                  <th className="pcra-th min-w-[180px]">Product Description (In-09)</th>
                  <th className="pcra-th w-36">Category (In-10)</th>
                  <th className="pcra-th text-right w-24">PO Qty (In-11)</th>
                  <th className="pcra-th w-20">Curr (In-12)</th>
                  <th className="pcra-th text-right w-28">FOB FC (In-13)</th>
                  <th className="pcra-th text-right w-28">Est Freight (In-14)</th>
                  <th className="pcra-th text-right w-24">Est Duty % (In-15)</th>
                  <th className="pcra-th text-right w-28">Est Other (In-16)</th>
                  <th className="pcra-th text-right w-28">Book Cost (In-17)</th>
                  <th className="pcra-th text-center w-28">Validation (M5)</th>
                  <th className="pcra-th w-14 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPo.map((po, idx) => {
                  const isValid = po.poNumber && po.skuCode && po.poQty > 0 && po.fobUnitPriceFC > 0;
                  return (
                    <tr
                      key={po.id}
                      className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                    >
                      <td className="pcra-td font-mono font-bold text-[#051C2C]">
                        <input
                          type="text"
                          value={po.poNumber}
                          onChange={(e) => handlePoChange(po.id, 'poNumber', e.target.value)}
                          className="input-editable w-24 font-mono font-bold"
                        />
                      </td>
                      <td className="pcra-td font-mono">
                        <input
                          type="text"
                          value={po.skuCode}
                          onChange={(e) => handlePoChange(po.id, 'skuCode', e.target.value.toUpperCase())}
                          className="input-editable w-24 font-mono uppercase"
                        />
                      </td>
                      <td className="pcra-td">
                        <input
                          type="text"
                          value={po.productName}
                          onChange={(e) => handlePoChange(po.id, 'productName', e.target.value)}
                          className="input-editable w-full min-w-[160px]"
                        />
                      </td>
                      <td className="pcra-td">
                        <select
                          value={po.category}
                          onChange={(e) => handlePoChange(po.id, 'category', e.target.value)}
                          className="input-editable w-32 text-xs"
                        >
                          {state.dutyRules.map((d) => (
                            <option key={d.id} value={d.categoryName}>
                              {d.categoryName}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="100"
                          value={po.poQty}
                          onChange={(e) => handlePoChange(po.id, 'poQty', parseInt(e.target.value, 10) || 0)}
                          className="input-editable w-20 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td">
                        <select
                          value={po.fobCurrency}
                          onChange={(e) => handlePoChange(po.id, 'fobCurrency', e.target.value)}
                          className="input-editable w-16 font-mono font-bold text-center"
                        >
                          {state.fxRates.map((f) => (
                            <option key={f.id} value={f.currencyCode}>
                              {f.currencyCode}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.5"
                          value={po.fobUnitPriceFC}
                          onChange={(e) => handlePoChange(po.id, 'fobUnitPriceFC', parseFloat(e.target.value) || 0)}
                          className="input-editable w-24 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.1"
                          value={po.estFreightPerUnitAUD}
                          onChange={(e) => handlePoChange(po.id, 'estFreightPerUnitAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-24 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.5"
                          value={round(po.estDutyRate * 100, 1)}
                          onChange={(e) => handlePoChange(po.id, 'estDutyRate', (parseFloat(e.target.value) || 0) / 100)}
                          className="input-editable w-20 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.1"
                          value={po.estOtherLandedCost}
                          onChange={(e) => handlePoChange(po.id, 'estOtherLandedCost', parseFloat(e.target.value) || 0)}
                          className="input-editable w-24 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.5"
                          value={po.bookLandedCostPerUnit}
                          onChange={(e) => handlePoChange(po.id, 'bookLandedCostPerUnit', parseFloat(e.target.value) || 0)}
                          className="input-editable w-24 text-right font-mono font-bold text-[#051C2C]"
                        />
                      </td>
                      <td className="pcra-td text-center">
                        {isValid ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                            Valid
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                            Missing Data
                          </span>
                        )}
                      </td>
                      <td className="pcra-td text-center">
                        <button
                          onClick={() => handleDeletePo(po.id)}
                          className="p-1 text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 rounded transition"
                          title="Delete PO"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-table 2: Actual Logistics & Customs */}
      {activeTab === 'logistics' && (
        <div className="pcra-card overflow-hidden">
          <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div>
              <h3 className="font-heading text-[16px] font-bold text-[#051C2C]">
                Table_Actual_Logistics: Ocean Freight Invoices, Customs Tax Receipts &amp; Receipts (In-18 ~ In-22)
              </h3>
              <p className="text-[11.5px] text-gray-500">
                Incurred freight forwarder invoices and Australian Customs N20 duty assessment receipts.
              </p>
            </div>
            <button
              onClick={handleAddLogistics}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Shipment</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-28">PO Number (In-07)</th>
                  <th className="pcra-th w-28">SKU Code (In-08)</th>
                  <th className="pcra-th w-36">Shipment B/L (In-18)</th>
                  <th className="pcra-th w-32">Arrival Date</th>
                  <th className="pcra-th text-right w-36">Actual Freight AUD (In-19)</th>
                  <th className="pcra-th text-right w-36">Actual Duty AUD (In-20)</th>
                  <th className="pcra-th text-right w-36">Actual Port/Drayage (In-21)</th>
                  <th className="pcra-th text-right w-28">Actual Qty (In-22)</th>
                  <th className="pcra-th text-center w-32">Logistics Audit</th>
                  <th className="pcra-th w-14 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogistics.map((log, idx) => {
                  const poMatch = poEstimates.find((p) => p.poNumber === log.poNumber);
                  const isQtyMatch = poMatch ? log.actualReceivedQty >= poMatch.poQty * 0.95 : true;

                  return (
                    <tr
                      key={log.id}
                      className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                    >
                      <td className="pcra-td font-mono font-bold text-[#051C2C]">
                        <input
                          type="text"
                          value={log.poNumber}
                          onChange={(e) => handleLogisticsChange(log.id, 'poNumber', e.target.value)}
                          className="input-editable w-28 font-mono font-bold"
                        />
                      </td>
                      <td className="pcra-td font-mono">
                        <input
                          type="text"
                          value={log.skuCode}
                          onChange={(e) => handleLogisticsChange(log.id, 'skuCode', e.target.value.toUpperCase())}
                          className="input-editable w-24 font-mono uppercase"
                        />
                      </td>
                      <td className="pcra-td font-mono">
                        <input
                          type="text"
                          value={log.shipmentId}
                          onChange={(e) => handleLogisticsChange(log.id, 'shipmentId', e.target.value)}
                          className="input-editable w-32 font-mono"
                        />
                      </td>
                      <td className="pcra-td">
                        <input
                          type="date"
                          value={log.arrivalDate}
                          onChange={(e) => handleLogisticsChange(log.id, 'arrivalDate', e.target.value)}
                          className="input-editable w-32 font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="100"
                          value={log.actualFreightInvoiceAUD}
                          onChange={(e) => handleLogisticsChange(log.id, 'actualFreightInvoiceAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-32 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="50"
                          value={log.actualDutyPaidAUD}
                          onChange={(e) => handleLogisticsChange(log.id, 'actualDutyPaidAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-32 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="50"
                          value={log.actualPortDrayageAUD}
                          onChange={(e) => handleLogisticsChange(log.id, 'actualPortDrayageAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-32 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="100"
                          value={log.actualReceivedQty}
                          onChange={(e) => handleLogisticsChange(log.id, 'actualReceivedQty', parseInt(e.target.value, 10) || 0)}
                          className="input-editable w-24 text-right font-mono font-semibold text-[#051C2C]"
                        />
                      </td>
                      <td className="pcra-td text-center">
                        {isQtyMatch ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                            Receipt OK
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                            Shortage Alert
                          </span>
                        )}
                      </td>
                      <td className="pcra-td text-center">
                        <button
                          onClick={() => handleDeleteLogistics(log.id)}
                          className="p-1 text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 rounded transition"
                          title="Delete shipment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-table 3: Retail Sales & Deductions */}
      {activeTab === 'retail' && (
        <div className="pcra-card overflow-hidden">
          <div className="p-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
            <div>
              <h3 className="font-heading text-[16px] font-bold text-[#051C2C]">
                Table_Retail_Deductions: Store Sales Invoices &amp; Disputed Remittance Claims (In-23 ~ In-29)
              </h3>
              <p className="text-[11.5px] text-gray-500">
                Commercial billing invoices to Australian retail majors with deducted trade rebates and penalty claims.
              </p>
            </div>
            <button
              onClick={handleAddRetail}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Deduction Line</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pcra-th w-28">Invoice Ref (In-23)</th>
                  <th className="pcra-th w-32">Retailer (In-24)</th>
                  <th className="pcra-th text-right w-24">Billed Qty (In-25)</th>
                  <th className="pcra-th text-right w-28">Price AUD (In-26)</th>
                  <th className="pcra-th text-right w-32">Gross Revenue</th>
                  <th className="pcra-th w-36">Claim Ref (In-27)</th>
                  <th className="pcra-th text-right w-32">Deduction (In-28)</th>
                  <th className="pcra-th w-28">Raw Code (In-29)</th>
                  <th className="pcra-th w-28">PO Map</th>
                  <th className="pcra-th text-center w-28">Rule Map Audit</th>
                  <th className="pcra-th w-14 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRetail.map((ret, idx) => {
                  const grossRevenue = round(ret.billedQty * ret.contractPriceAUD, 2);
                  const isRuleMapped = deductionRules.some(
                    (r) =>
                      r.retailerName.toLowerCase() === ret.retailerName.toLowerCase() &&
                      r.rawCode.toUpperCase() === ret.deductionCodeRaw.toUpperCase()
                  );

                  return (
                    <tr
                      key={ret.id}
                      className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F5F2]'}
                    >
                      <td className="pcra-td font-mono font-bold text-[#051C2C]">
                        <input
                          type="text"
                          value={ret.invoiceRef}
                          onChange={(e) => handleRetailChange(ret.id, 'invoiceRef', e.target.value)}
                          className="input-editable w-28 font-mono font-bold"
                        />
                      </td>
                      <td className="pcra-td font-semibold">
                        <select
                          value={ret.retailerName}
                          onChange={(e) => handleRetailChange(ret.id, 'retailerName', e.target.value)}
                          className="input-editable w-32 text-xs font-medium"
                        >
                          <option value="Woolworths">Woolworths</option>
                          <option value="Coles">Coles</option>
                          <option value="ALDI">ALDI</option>
                          <option value="Kmart">Kmart</option>
                          <option value="Big W">Big W</option>
                        </select>
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="100"
                          value={ret.billedQty}
                          onChange={(e) => handleRetailChange(ret.id, 'billedQty', parseInt(e.target.value, 10) || 0)}
                          className="input-editable w-20 text-right font-mono"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="0.5"
                          value={ret.contractPriceAUD}
                          onChange={(e) => handleRetailChange(ret.id, 'contractPriceAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-24 text-right font-mono font-semibold"
                        />
                      </td>
                      <td className="pcra-td text-right font-mono font-bold text-[#051C2C]">
                        {formatCurrency(grossRevenue, parameters.baseCurrency)}
                      </td>
                      <td className="pcra-td font-mono">
                        <input
                          type="text"
                          value={ret.deductionClaimRef}
                          onChange={(e) => handleRetailChange(ret.id, 'deductionClaimRef', e.target.value)}
                          className="input-editable w-32 font-mono text-xs"
                        />
                      </td>
                      <td className="pcra-td text-right">
                        <input
                          type="number"
                          step="50"
                          value={ret.deductionAmountAUD}
                          onChange={(e) => handleRetailChange(ret.id, 'deductionAmountAUD', parseFloat(e.target.value) || 0)}
                          className="input-editable w-28 text-right font-mono font-bold text-[#051C2C]"
                        />
                      </td>
                      <td className="pcra-td font-mono font-bold">
                        <input
                          type="text"
                          value={ret.deductionCodeRaw}
                          onChange={(e) => handleRetailChange(ret.id, 'deductionCodeRaw', e.target.value.toUpperCase())}
                          className="input-editable w-24 font-mono uppercase font-bold"
                        />
                      </td>
                      <td className="pcra-td font-mono">
                        <input
                          type="text"
                          value={ret.poMapRef}
                          onChange={(e) => handleRetailChange(ret.id, 'poMapRef', e.target.value)}
                          className="input-editable w-28 font-mono text-xs"
                        />
                      </td>
                      <td className="pcra-td text-center">
                        {isRuleMapped ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                            Mapped
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[rgba(211,47,47,0.08)] text-[#D32F2F]">
                            Unmapped
                          </span>
                        )}
                      </td>
                      <td className="pcra-td text-center">
                        <button
                          onClick={() => handleDeleteRetail(ret.id)}
                          className="p-1 text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 rounded transition"
                          title="Delete deduction line"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
