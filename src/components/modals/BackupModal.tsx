import React, { useState } from 'react';
import { X, Download, Upload, AlertCircle, CheckCircle, Database } from 'lucide-react';
import { AppState } from '../../types/pcra';
import { exportBackupFile, parseAndValidateBackup } from '../../utils/storage';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: AppState;
  onStateRestored: (newState: AppState) => void;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  state,
  onStateRestored,
}) => {
  const [jsonText, setJsonText] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleExport = () => {
    exportBackupFile(state);
    setStatusMessage({ type: 'success', text: 'Backup JSON downloaded successfully.' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setJsonText(text);
      tryRestore(text);
    };
    reader.readAsText(file);
  };

  const tryRestore = (text: string) => {
    try {
      const newState = parseAndValidateBackup(text);
      onStateRestored(newState);
      setStatusMessage({
        type: 'success',
        text: `Backup restored successfully! ${newState.poEstimates.length} POs, ${newState.retailDeductions.length} deductions loaded.`,
      });
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Invalid backup file structure' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.45)] backdrop-blur-sm animate-fade-up">
      <div className="bg-white rounded-xl shadow-[0_16px_48px_rgba(5,28,44,0.18)] w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[rgba(5,28,44,0.06)] flex items-center justify-center">
              <Database className="w-4 h-4 text-[#051C2C]" />
            </div>
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#051C2C]">
                Backup &amp; Restore Manager
              </h3>
              <p className="text-[12px] text-[#888888]">
                Export or restore full JSON snapshot of your PCRA configuration
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Export Section */}
          <div className="p-4 rounded-lg bg-[rgba(5,28,44,0.02)] border border-[#E8E8E6]">
            <h4 className="text-[13px] font-semibold text-[#051C2C] mb-1">
              Export Complete Backup File
            </h4>
            <p className="text-[12px] text-gray-500 mb-3">
              Downloads a standalone JSON file containing all 5 sheets (Rules, FX, Duty, POs, Invoices, Deductions).
            </p>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-[#051C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#0c2f4a] transition shadow-xs"
            >
              <Download className="w-4 h-4 text-[#2251FF]" />
              <span>Download JSON Backup</span>
            </button>
          </div>

          {/* Import Section */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-[#051C2C]">
              Restore From Backup File
            </h4>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E6] hover:bg-gray-50 text-xs font-semibold text-[#051C2C] rounded-lg transition shadow-xs">
                <Upload className="w-4 h-4 text-[#051C2C]" />
                <span>Select .json Backup File</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <span className="text-xs text-gray-400">or paste JSON below</span>
            </div>

            <textarea
              rows={4}
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              placeholder="Paste raw backup JSON text here..."
              className="w-full text-xs font-mono p-3 bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-[#2251FF] resize-none"
            />

            {jsonText.trim() && (
              <button
                onClick={() => tryRestore(jsonText)}
                className="w-full py-2 bg-[#2251FF] text-white text-xs font-semibold rounded-lg hover:bg-[#1a3fd6] transition"
              >
                Validate &amp; Restore Pasted JSON
              </button>
            )}
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`flex items-center gap-2 text-xs p-3 rounded-lg border ${
                statusMessage.type === 'success'
                  ? 'bg-[rgba(0,200,83,0.08)] border-[rgba(0,200,83,0.25)] text-[#051C2C]'
                  : 'bg-[rgba(211,47,47,0.06)] border-[rgba(211,47,47,0.2)] text-[#D32F2F]'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle className="w-4 h-4 text-[#00C853] shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-[#E8E8E6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-gray-600 bg-white border border-[#E8E8E6] hover:bg-gray-100 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
