import React from 'react';
import {
  FileSpreadsheet,
  Download,
  Upload,
  RotateCcw,
  GitBranch,
  Save,
  FileUp,
  Sliders,
  Database,
  Calculator,
  Scale,
  LayoutDashboard,
  ShieldCheck,
} from 'lucide-react';

export type TabKey =
  | '01_Rules_Mapping'
  | '02_Source_Data'
  | '03_Cost_Engine'
  | '04_Reconciliation'
  | '05_Management_Summary';

interface SidebarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  lastSaved: string;
  onExportBackup: () => void;
  onOpenImportBackup: () => void;
  onOpenCsvModal: () => void;
  onOpenResetConfirm: () => void;
  onOpenGitHubModal: () => void;
  onTriggerSave: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  lastSaved,
  onExportBackup,
  onOpenImportBackup,
  onOpenCsvModal,
  onOpenResetConfirm,
  onOpenGitHubModal,
  onTriggerSave,
}) => {
  const navItems: { key: TabKey; code: string; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      key: '01_Rules_Mapping',
      code: '01',
      label: 'Rules & Mapping',
      desc: 'FX rates, duties & rules',
      icon: <Sliders className="w-4 h-4" />,
    },
    {
      key: '02_Source_Data',
      code: '02',
      label: 'Source Data',
      desc: 'PO, freight & deductions',
      icon: <Database className="w-4 h-4" />,
    },
    {
      key: '03_Cost_Engine',
      code: '03',
      label: 'Cost Engine',
      desc: 'ABF landed cost audit',
      icon: <Calculator className="w-4 h-4" />,
    },
    {
      key: '04_Reconciliation',
      code: '04',
      label: 'Reconciliation',
      desc: '5-way variance & disputes',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      key: '05_Management_Summary',
      code: '05',
      label: 'Management Summary',
      desc: 'Margin bridge & KPIs',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
  ];

  const formattedTime = React.useMemo(() => {
    if (!lastSaved) return 'Just now';
    const d = new Date(lastSaved);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }, [lastSaved]);

  return (
    <aside className="w-64 bg-[#FFFFFF] border-r border-[#E8E8E6] flex flex-col justify-between shrink-0 shadow-[1px_0_4px_rgba(5,28,44,0.04)] sticky top-0 h-screen z-30 select-none">
      {/* Top Branding Section */}
      <div>
        <div className="h-[64px] px-5 border-b border-[#E8E8E6] flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#051C2C] flex items-center justify-center text-white shadow-sm shrink-0">
            <FileSpreadsheet className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-[17px] font-bold text-[#051C2C] tracking-tight leading-none">
                PCRA
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[rgba(5,28,44,0.06)] text-[#051C2C]">
                SaaS
              </span>
            </div>
            <span className="text-[10px] text-[#888888] tracking-tight leading-none truncate mt-0.5" title="Cost & Reconciliation Analyzer">
              Cost &amp; Recon Analyzer
            </span>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="p-3">
          <div className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
            Workbook Sheets
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onTabChange(item.key)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#051C2C] text-white shadow-sm'
                      : 'text-[#051C2C] hover:bg-[rgba(5,28,44,0.04)]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-mono font-bold shrink-0 ${
                      isActive
                        ? 'bg-[rgba(255,255,255,0.18)] text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {item.code}
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[12.5px] font-medium leading-tight truncate">
                      {item.label}
                    </span>
                    <span
                      className={`text-[10px] leading-tight truncate mt-0.5 ${
                        isActive ? 'text-gray-300' : 'text-gray-400'
                      }`}
                    >
                      {item.desc}
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2251FF] shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Live Auto-Save Status Card */}
        <div className="px-4 py-2">
          <div className="p-3 rounded-lg bg-[rgba(5,28,44,0.03)] border border-[#E8E8E6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase text-gray-400 tracking-wider">
                  Auto-Save Active
                </span>
                <span className="text-[11px] font-mono text-[#051C2C] font-semibold">
                  {formattedTime}
                </span>
              </div>
            </div>
            <button
              onClick={onTriggerSave}
              title="Click to force save to browser localStorage"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#051C2C] hover:bg-white hover:shadow-xs transition"
            >
              <Save className="w-3.5 h-3.5 text-[#2251FF]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Operations & Modals */}
      <div className="p-4 border-t border-[#E8E8E6] space-y-2 bg-white">
        <div className="px-1 text-[10px] font-semibold uppercase tracking-wider text-[#888888] mb-1">
          Data &amp; CI/CD Actions
        </div>

        {/* CSV Import */}
        <button
          onClick={onOpenCsvModal}
          className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-left text-xs font-medium text-[#051C2C] hover:bg-[rgba(5,28,44,0.04)] transition"
        >
          <FileUp className="w-3.5 h-3.5 text-[#2251FF]" />
          <span>Bulk CSV Ingestion</span>
        </button>

        {/* Export Backup */}
        <button
          onClick={onExportBackup}
          className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-left text-xs font-medium text-[#051C2C] hover:bg-[rgba(5,28,44,0.04)] transition"
        >
          <Download className="w-3.5 h-3.5 text-gray-600" />
          <span>Export JSON Backup</span>
        </button>

        {/* Import Backup */}
        <button
          onClick={onOpenImportBackup}
          className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-left text-xs font-medium text-[#051C2C] hover:bg-[rgba(5,28,44,0.04)] transition"
        >
          <Upload className="w-3.5 h-3.5 text-gray-600" />
          <span>Import JSON Backup</span>
        </button>

        {/* Reset Data */}
        <button
          onClick={onOpenResetConfirm}
          className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-left text-xs font-medium text-gray-500 hover:text-[#D32F2F] hover:bg-[rgba(211,47,47,0.06)] transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Benchmark</span>
        </button>

        {/* GitHub CI/CD */}
        <button
          onClick={onOpenGitHubModal}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-left text-xs font-semibold text-white bg-[#051C2C] hover:bg-[#0c2f4a] transition shadow-xs mt-1"
        >
          <div className="flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5 text-[#2251FF]" />
            <span>GitHub CI/CD</span>
          </div>
          <span className="text-[9px] bg-[rgba(255,255,255,0.15)] px-1.5 py-0.5 rounded font-mono">
            gh-pages
          </span>
        </button>

        {/* Privacy Note Badge */}
        <div className="pt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
          <ShieldCheck className="w-3 h-3 text-[#00C853] shrink-0" />
          <span className="truncate">Local Storage Only</span>
        </div>
      </div>
    </aside>
  );
};
