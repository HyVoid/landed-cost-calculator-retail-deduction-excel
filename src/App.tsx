import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AppState, ActualLogisticsRecord, POEstimateRecord, RetailDeductionRecord } from './types/pcra';
import {
  loadSavedState,
  saveStateToStorage,
  exportBackupFile,
  resetToInitialState,
} from './utils/storage';
import { Sidebar, TabKey } from './components/Sidebar';
import { Footer } from './components/Footer';
import { RulesMappingView } from './views/RulesMappingView';
import { SourceDataView } from './views/SourceDataView';
import { CostEngineView } from './views/CostEngineView';
import { ReconciliationView } from './views/ReconciliationView';
import { ManagementSummaryView } from './views/ManagementSummaryView';
import { CsvImportModal } from './components/modals/CsvImportModal';
import { BackupModal } from './components/modals/BackupModal';
import { ResetConfirmModal } from './components/modals/ResetConfirmModal';
import { GitHubDeployModal } from './components/modals/GitHubDeployModal';

export default function App() {
  const [state, setState] = useState<AppState>(() => loadSavedState());
  const [activeTab, setActiveTab] = useState<TabKey>('05_Management_Summary');

  // Modals state
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  // Auto-save debounce timer
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleStateChange = useCallback((updater: (prev: AppState) => AppState) => {
    setState((prev) => {
      const updated = updater(prev);
      // Debounce auto-save to localStorage
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        saveStateToStorage(updated);
      }, 500);
      return updated;
    });
  }, []);

  const handleManualSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    const saved = saveStateToStorage(state);
    setState(saved);
  }, [state]);

  // Export Backup
  const handleExportBackup = useCallback(() => {
    exportBackupFile(state);
  }, [state]);

  // Reset Data
  const handleConfirmReset = useCallback(() => {
    const fresh = resetToInitialState();
    setState(fresh);
  }, []);

  // CSV Imports
  const handleImportPO = useCallback((records: POEstimateRecord[], mode: 'append' | 'replace') => {
    handleStateChange((prev) => ({
      ...prev,
      poEstimates: mode === 'replace' ? records : [...prev.poEstimates, ...records],
    }));
  }, [handleStateChange]);

  const handleImportLogistics = useCallback((records: ActualLogisticsRecord[], mode: 'append' | 'replace') => {
    handleStateChange((prev) => ({
      ...prev,
      actualLogistics: mode === 'replace' ? records : [...prev.actualLogistics, ...records],
    }));
  }, [handleStateChange]);

  const handleImportRetail = useCallback((records: RetailDeductionRecord[], mode: 'append' | 'replace') => {
    handleStateChange((prev) => ({
      ...prev,
      retailDeductions: mode === 'replace' ? records : [...prev.retailDeductions, ...records],
    }));
  }, [handleStateChange]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-row text-[13px] text-[var(--color-body-text)]">
      {/* Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        lastSaved={state.lastSaved}
        onExportBackup={handleExportBackup}
        onOpenImportBackup={() => setIsBackupModalOpen(true)}
        onOpenCsvModal={() => setIsCsvModalOpen(true)}
        onOpenResetConfirm={() => setIsResetModalOpen(true)}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
        onTriggerSave={handleManualSave}
      />

      {/* Right Main Content & Footer Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-8 lg:px-10 py-8">
          {activeTab === '01_Rules_Mapping' && (
            <RulesMappingView state={state} onChange={handleStateChange} />
          )}

          {activeTab === '02_Source_Data' && (
            <SourceDataView
              state={state}
              onChange={handleStateChange}
              onOpenCsvModal={() => setIsCsvModalOpen(true)}
            />
          )}

          {activeTab === '03_Cost_Engine' && (
            <CostEngineView state={state} />
          )}

          {activeTab === '04_Reconciliation' && (
            <ReconciliationView state={state} onChange={handleStateChange} />
          )}

          {activeTab === '05_Management_Summary' && (
            <ManagementSummaryView state={state} />
          )}
        </main>

        {/* Footer with Explicit Privacy Statement */}
        <Footer />
      </div>

      {/* Modals */}
      <CsvImportModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        state={state}
        onImportPO={handleImportPO}
        onImportLogistics={handleImportLogistics}
        onImportRetail={handleImportRetail}
      />

      <BackupModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        state={state}
        onStateRestored={setState}
      />

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
      />

      <GitHubDeployModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}
