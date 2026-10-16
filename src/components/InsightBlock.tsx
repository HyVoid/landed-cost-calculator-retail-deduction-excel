import React from 'react';
import { Lightbulb } from 'lucide-react';

interface InsightBlockProps {
  title: string;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const InsightBlock: React.FC<InsightBlockProps> = ({
  title,
  children,
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`insight-block my-4 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 w-5 h-5 rounded-full bg-[rgba(34,81,255,0.12)] flex items-center justify-center shrink-0">
            <Lightbulb className="w-3.5 h-3.5 text-[#2251FF]" />
          </div>
          <div>
            <h4 className="font-heading text-[15px] font-bold text-[#051C2C] leading-snug">
              {title}
            </h4>
            <div className="mt-1 text-[13px] text-[#1A1A2E] leading-relaxed">
              {children}
            </div>
          </div>
        </div>

        {actionText && onAction && (
          <button
            onClick={onAction}
            className="shrink-0 px-3 py-1.5 bg-[#2251FF] text-white text-[12px] font-medium rounded-md hover:bg-[#1a3fd6] transition shadow-sm"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
