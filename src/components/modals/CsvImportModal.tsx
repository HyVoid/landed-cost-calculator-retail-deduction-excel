import React, { useState } from 'react';
import { X, Upload, Download, Check, AlertCircle, FileText } from 'lucide-react';
import {
  downloadCSV,
  logisticsCsvTemplateHeaders,
  objectsToCSV,
  parseLogisticsFromCSV,
  parsePOFromCSV,
  parseRetailFromCSV,
  poCsvTemplateHeaders,
  retailCsvTemplateHeaders,
} from '../../utils/csv';
import { ActualLogisticsRecord, AppState, POEstimateRecord, RetailDeductionRecord } from '../../types/pcra';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: AppState;
  onImportPO: (records: POEstimateRecord[], mode: 'append' | 'replace') => void;
  onImportLogistics: (records: ActualLogisticsRecord[], mode: 'append' | 'replace') => void;
  onImportRetail: (records: RetailDeductionRecord[], mode: 'append' | 'replace') => void;
}

type TableTarget = 'po' | 'logistics' | 'retail';

export const CsvImportModal: React.FC<CsvImportModalProps> = ({
  isOpen,
  onClose,
  state,
  onImportPO,
  onImportLogistics,
  onImportRetail,
}) => {
  const [target, setTarget] = useState<TableTarget>('po');
  const [importMode, setImportMode] = useState<'append' | 'replace'>('append');
  const [csvText, setCsvText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [parsedCount, setParsedCount] = useState<number | null>(null);

  if (!isOpen) return null;

  // Handle template download
  const handleDownloadTemplate = () => {
    if (target === 'po') {
      const sample = state.poEstimates.slice(0, 3);
      const csv = objectsToCSV(sample, poCsvTemplateHeaders as any);
      downloadCSV('pcra-po-estimates-template.csv', csv);
    } else if (target === 'logistics') {
      const sample = state.actualLogistics.slice(0, 3);
      const csv = objectsToCSV(sample, logisticsCsvTemplateHeaders as any);
      downloadCSV('pcra-actual-logistics-template.csv', csv);
    } else {
      const sample = state.retailDeductions.slice(0, 3);
      const csv = objectsToCSV(sample, retailCsvTemplateHeaders as any);
      downloadCSV('pcra-retail-deductions-template.csv', csv);
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvText(text);
      validateContent(text, target);
    };
    reader.readAsText(file);
  };

  // Validate on text change
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCsvText(text);
    validateContent(text, target);
  };

  const validateContent = (text: string, currentTarget: TableTarget) => {
    setError(null);
    setParsedCount(null);
    if (!text.trim()) return;

    try {
      if (currentTarget === 'po') {
        const records = parsePOFromCSV(text);
        if (records.length === 0) {
          setError('No valid rows recognized. Check CSV column headers.');
        } else {
          setParsedCount(records.length);
        }
      } else if (currentTarget === 'logistics') {
        const records = parseLogisticsFromCSV(text);
        if (records.length === 0) {
          setError('No valid rows recognized. Check CSV column headers.');
        } else {
          setParsedCount(records.length);
        }
      } else {
        const records = parseRetailFromCSV(text);
        if (records.length === 0) {
          setError('No valid rows recognized. Check CSV column headers.');
        } else {
          setParsedCount(records.length);
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Error parsing CSV structure');
    }
  };

  // Submit import
  const handleConfirmImport = () => {
    if (!csvText.trim()) {
      setError('Please provide CSV data to import');
      return;
    }

    try {
      if (target === 'po') {
        const records = parsePOFromCSV(csvText);
        if (records.length === 0) throw new Error('No valid PO rows parsed');
        onImportPO(records, importMode);
      } else if (target === 'logistics') {
        const records = parseLogisticsFromCSV(csvText);
        if (records.length === 0) throw new Error('No valid Logistics rows parsed');
        onImportLogistics(records, importMode);
      } else {
        const records = parseRetailFromCSV(csvText);
        if (records.length === 0) throw new Error('No valid Retail rows parsed');
        onImportRetail(records, importMode);
      }
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Import failed');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.45)] backdrop-blur-sm animate-fade-up">
      <div className="bg-white rounded-xl shadow-[0_16px_48px_rgba(5,28,44,0.18)] w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E6] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[rgba(34,81,255,0.10)] flex items-center justify-center">
              <Upload className="w-4 h-4 text-[#2251FF]" />
            </div>
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#051C2C]">
                Bulk CSV Data Ingestion
              </h3>
              <p className="text-[12px] text-[#888888]">
                Import large batches of PO estimates, actual freight, or retail deduction lines
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#888888] hover:text-[#051C2C] hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Target Table Selector */}
          <div>
            <label className="block text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider mb-2">
              Select Destination Table
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'po', label: '1. PO Estimates (In-07~17)' },
                { id: 'logistics', label: '2. Actual Logistics (In-18~22)' },
                { id: 'retail', label: '3. Retail Deductions (In-23~29)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTarget(t.id as TableTarget);
                    validateContent(csvText, t.id as TableTarget);
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition ${
                    target === t.id
                      ? 'border-[#2251FF] bg-[rgba(34,81,255,0.05)] text-[#051C2C] font-semibold shadow-xs'
                      : 'border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mode & Template Actions */}
          <div className="flex items-center justify-between gap-4 bg-[rgba(5,28,44,0.03)] p-3 rounded-lg border border-[#E8E8E6]">
            <div className="flex items-center gap-4 text-xs">
              <span className="font-semibold text-[#051C2C]">Import Mode:</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  checked={importMode === 'append'}
                  onChange={() => setImportMode('append')}
                  className="accent-[#2251FF]"
                />
                <span>Append to Existing</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  checked={importMode === 'replace'}
                  onChange={() => setImportMode('replace')}
                  className="accent-[#2251FF]"
                />
                <span className="text-[#D32F2F] font-medium">Replace Table</span>
              </label>
            </div>

            <button
              onClick={handleDownloadTemplate}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E8E8E6] hover:bg-gray-50 text-[11px] font-semibold text-[#051C2C] rounded-md transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#2251FF]" />
              <span>Download CSV Template</span>
            </button>
          </div>

          {/* Upload Input & Paste Area */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                Upload File or Paste CSV Text
              </label>
              <label className="cursor-pointer text-[11px] text-[#2251FF] hover:underline flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span>Browse .csv file</span>
                <input
                  type="file"
                  accept=".csv,text/csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
            <textarea
              rows={8}
              value={csvText}
              onChange={handleTextChange}
              placeholder="Paste comma-separated CSV rows here, including column header line..."
              className="w-full text-xs font-mono p-3 bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-[#2251FF] resize-none"
            />
          </div>

          {/* Validation Feedback */}
          {error && (
            <div className="flex items-center gap-2 text-xs text-[#D32F2F] bg-[rgba(211,47,47,0.06)] p-2.5 rounded-lg border border-[rgba(211,47,47,0.2)]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {parsedCount !== null && parsedCount > 0 && !error && (
            <div className="flex items-center gap-2 text-xs text-[#051C2C] bg-[rgba(0,200,83,0.08)] p-2.5 rounded-lg border border-[rgba(0,200,83,0.25)]">
              <Check className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>
                <strong>{parsedCount} valid rows</strong> detected and ready for ingestion ({importMode} mode).
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-[#E8E8E6] flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-[#E8E8E6] hover:bg-gray-100 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmImport}
            disabled={!csvText.trim() || !!error}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#051C2C] hover:bg-[#0d2a40] disabled:opacity-40 disabled:pointer-events-none rounded-lg transition shadow-sm"
          >
            Import {parsedCount ? `(${parsedCount} Records)` : ''}
          </button>
        </div>
      </div>
    </div>
  );
};
