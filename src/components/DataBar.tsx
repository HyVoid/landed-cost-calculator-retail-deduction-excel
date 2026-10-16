import React from 'react';

interface DataBarProps {
  value: number;
  max: number;
  formattedText?: string;
  align?: 'right' | 'left';
  widthClass?: string;
}

export const DataBar: React.FC<DataBarProps> = ({
  value,
  max,
  formattedText,
  align = 'right',
  widthClass = 'w-24',
}) => {
  const percentage = max > 0 ? Math.min(100, Math.max(0, (Math.abs(value) / max) * 100)) : 0;

  return (
    <div className={`flex items-center gap-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      {align === 'right' && formattedText && (
        <span className="font-mono text-[12px] tabular-nums">{formattedText}</span>
      )}
      <div className={`relative h-2 ${widthClass} bg-[rgba(5,28,44,0.10)] rounded-full overflow-hidden shrink-0`}>
        <div
          className="absolute top-0 bottom-0 left-0 bg-[#2251FF] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {align === 'left' && formattedText && (
        <span className="font-mono text-[12px] tabular-nums">{formattedText}</span>
      )}
    </div>
  );
};
