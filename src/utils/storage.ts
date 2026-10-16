import { AppState } from '../types/pcra';
import { initialAppState } from '../data/initialData';

const STORAGE_KEY = 'pcra_app_state_v1';

export function loadSavedState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initialAppState;
    }
    const parsed = JSON.parse(raw);
    // Ensure all critical arrays and parameters exist
    return {
      parameters: { ...initialAppState.parameters, ...(parsed.parameters || {}) },
      fxRates: Array.isArray(parsed.fxRates) && parsed.fxRates.length > 0 ? parsed.fxRates : initialAppState.fxRates,
      dutyRules: Array.isArray(parsed.dutyRules) && parsed.dutyRules.length > 0 ? parsed.dutyRules : initialAppState.dutyRules,
      deductionRules: Array.isArray(parsed.deductionRules) && parsed.deductionRules.length > 0 ? parsed.deductionRules : initialAppState.deductionRules,
      poEstimates: Array.isArray(parsed.poEstimates) && parsed.poEstimates.length > 0 ? parsed.poEstimates : initialAppState.poEstimates,
      actualLogistics: Array.isArray(parsed.actualLogistics) && parsed.actualLogistics.length > 0 ? parsed.actualLogistics : initialAppState.actualLogistics,
      retailDeductions: Array.isArray(parsed.retailDeductions) && parsed.retailDeductions.length > 0 ? parsed.retailDeductions : initialAppState.retailDeductions,
      lastSaved: parsed.lastSaved || new Date().toISOString(),
    };
  } catch (err) {
    console.error('Failed to load PCRA state from localStorage:', err);
    return initialAppState;
  }
}

export function saveStateToStorage(state: AppState): AppState {
  const updatedState: AppState = {
    ...state,
    lastSaved: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
  } catch (err) {
    console.error('Failed to save PCRA state to localStorage:', err);
  }
  return updatedState;
}

export function exportBackupFile(state: AppState): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `pcra-backup-${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function parseAndValidateBackup(jsonText: string): AppState {
  const parsed = JSON.parse(jsonText);
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Invalid JSON format: root is not an object');
  }

  // Validate core structures
  if (!parsed.parameters || !parsed.fxRates || !parsed.poEstimates) {
    throw new Error('Missing essential PCRA sections: parameters, fxRates, or poEstimates.');
  }

  const restored: AppState = {
    parameters: { ...initialAppState.parameters, ...parsed.parameters },
    fxRates: Array.isArray(parsed.fxRates) ? parsed.fxRates : initialAppState.fxRates,
    dutyRules: Array.isArray(parsed.dutyRules) ? parsed.dutyRules : initialAppState.dutyRules,
    deductionRules: Array.isArray(parsed.deductionRules) ? parsed.deductionRules : initialAppState.deductionRules,
    poEstimates: Array.isArray(parsed.poEstimates) ? parsed.poEstimates : initialAppState.poEstimates,
    actualLogistics: Array.isArray(parsed.actualLogistics) ? parsed.actualLogistics : initialAppState.actualLogistics,
    retailDeductions: Array.isArray(parsed.retailDeductions) ? parsed.retailDeductions : initialAppState.retailDeductions,
    lastSaved: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
  return restored;
}

export function resetToInitialState(): AppState {
  localStorage.removeItem(STORAGE_KEY);
  const fresh = {
    ...initialAppState,
    lastSaved: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  return fresh;
}
