import React from 'react';
import { ShieldCheck, HardDrive } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-[#E8E8E6] text-center text-[12px] text-[#888888]">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Product & Engine Identity */}
        <div className="flex items-center gap-2 text-left">
          <HardDrive className="w-4 h-4 text-[#051C2C]" />
          <div>
            <span className="font-semibold text-[#051C2C]">PCRA v2.6 M365 Edition</span>
            <span className="mx-2 text-[#E8E8E6]">|</span>
            <span>Zero Macro &bull; Dynamic JS Engine &bull; Zero Residual Guarantee</span>
          </div>
        </div>

        {/* Right: Explicit Privacy and Storage Security Notice */}
        <div className="flex items-center gap-1.5 text-right text-[11px] bg-white px-3 py-1.5 rounded-full shadow-[0_1px_2px_rgba(5,28,44,0.04)] border border-[#E8E8E6]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
          <span className="text-[#051C2C]">
            Privacy &amp; Security: All data storage is managed locally in your browser&apos;s localStorage. The application does not store, transmit, or retain any user data on external servers.
          </span>
        </div>
      </div>
    </footer>
  );
};
