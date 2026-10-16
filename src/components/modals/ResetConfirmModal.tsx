import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.45)] backdrop-blur-sm animate-fade-up">
      <div className="bg-white rounded-xl shadow-[0_16px_48px_rgba(5,28,44,0.18)] w-full max-w-md overflow-hidden p-6 space-y-4">
        <div className="w-10 h-10 rounded-full bg-[rgba(211,47,47,0.10)] flex items-center justify-center text-[#D32F2F]">
          <AlertTriangle className="w-5 h-5" />
        </div>

        <div>
          <h3 className="font-heading text-[18px] font-bold text-[#051C2C]">
            Reset to Benchmark Master Dataset?
          </h3>
          <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
            This action will restore the reference Australian multi-retailer enterprise data across all 5 sheets (Rules, FX, Duty, POs, Actual Logistics, and Deductions). Any unsaved manual entries will be replaced.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-[#E8E8E6] hover:bg-gray-50 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirmReset();
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#D32F2F] hover:bg-[#b71c1c] rounded-lg transition shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Sheets</span>
          </button>
        </div>
      </div>
    </div>
  );
};
