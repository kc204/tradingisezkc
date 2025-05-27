
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: (isDegen: boolean) => void;
  toggleDegenMode: () => void;
}

const DegenModeContext = createContext<DegenModeContextType | undefined>(undefined);

export const DegenModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDegenMode, setIsDegenModeState] = useState<boolean>(false);

  useEffect(() => {
    // Initialize state from localStorage on client mount
    try {
      const storedDegenMode = localStorage.getItem('degenMode');
      if (storedDegenMode !== null) {
        setIsDegenModeState(JSON.parse(storedDegenMode));
      }
    } catch (error) {
      console.error("Error reading degenMode from localStorage:", error);
      // Default to false if localStorage is inaccessible or value is corrupted
      setIsDegenModeState(false);
    }
  }, []);

  useEffect(() => {
    // Sync state to localStorage and HTML class
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
    } catch (error) {
      console.error("Error syncing degenMode to localStorage/class:", error);
    }
  }, [isDegenMode]);

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
