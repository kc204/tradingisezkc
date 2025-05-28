
'use client';

import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: Dispatch<SetStateAction<boolean>>; // Exposing setter for more flexibility
  isMounted: boolean; // To help prevent hydration issues when reading localStorage
}

const DegenModeContext = createContext<DegenModeContextType | undefined>(undefined);

export function DegenModeProvider({ children }: { children: ReactNode }) {
  const [isDegenMode, setIsDegenMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedDegenMode = localStorage.getItem('degenMode');
      if (storedDegenMode !== null) {
        setIsDegenMode(JSON.parse(storedDegenMode));
      }
    } catch (error) {
      console.error("Error reading degenMode from localStorage", error);
      // Default to false if localStorage is inaccessible or value is corrupted
      setIsDegenMode(false);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('degenMode', JSON.stringify(isDegenMode));
        if (isDegenMode) {
          document.documentElement.classList.add('degen-mode');
        } else {
          document.documentElement.classList.remove('degen-mode');
        }
      } catch (error) {
        console.error("Error writing degenMode to localStorage", error);
      }
    }
  }, [isDegenMode, isMounted]);

  return (
    <DegenModeContext.Provider value={{ isDegenMode, setIsDegenMode, isMounted }}>
      {children}
    </DegenModeContext.Provider>
  );
}

export function useDegenMode() {
  const context = useContext(DegenModeContext);
  if (context === undefined) {
    throw new Error('useDegenMode must be used within a DegenModeProvider');
  }
  return context;
}
