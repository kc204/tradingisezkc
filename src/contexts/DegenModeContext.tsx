
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: (isDegen: boolean) => void;
  toggleDegenMode: () => void;
}

const DegenModeContext = createContext<DegenModeContextType | undefined>(undefined);

export const DegenModeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize isDegenMode to false. It will be updated by useEffect on the client.
  // This ensures server-render and initial client render (pre-useEffect) show non-degen.
  const [isDegenMode, setIsDegenModeState] = useState<boolean>(false);

  useEffect(() => {
    // This effect runs ONLY on the client, after hydration.
    let initialClientDegenMode = false;
    try {
      if (typeof window !== 'undefined' && localStorage.getItem('degenMode') === 'true') {
        initialClientDegenMode = true;
      }
    } catch (e) {
      console.error("Error reading degenMode from localStorage on init:", e);
      // Keep initialClientDegenMode as false in case of error
    }
    // Update the state based on localStorage. This might trigger a re-render.
    setIsDegenModeState(initialClientDegenMode);
  }, []); // Empty array means this runs once on mount.

  useEffect(() => {
    // This effect runs whenever isDegenMode state changes, to sync to DOM and localStorage.
    try {
      if (typeof window !== 'undefined' && document.documentElement) {
        if (isDegenMode) {
          document.documentElement.classList.add('degen-mode');
          localStorage.setItem('degenMode', 'true');
        } else {
          document.documentElement.classList.remove('degen-mode');
          localStorage.setItem('degenMode', 'false');
        }
      }
    } catch (e) {
      console.error("Error syncing degenMode to DOM/localStorage:", e);
    }
  }, [isDegenMode]); // Runs when isDegenMode state changes.

  const setIsDegenMode = (isDegen: boolean) => {
    setIsDegenModeState(isDegen);
  };

  const toggleDegenMode = () => {
    setIsDegenModeState(prev => !prev);
  };

  return (
    <DegenModeContext.Provider value={{ isDegenMode, setIsDegenMode, toggleDegenMode }}>
      {children}
    </DegenModeContext.Provider>
  );
};

export const useDegenMode = () => {
  const context = useContext(DegenModeContext);
  if (context === undefined) {
    throw new Error('useDegenMode must be used within a DegenModeProvider');
  }
  return context;
};
