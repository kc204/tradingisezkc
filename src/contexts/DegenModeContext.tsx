
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: (isDegen: boolean) => void;
  toggleDegenMode: () => void;
}

const DegenModeContext = createContext<DegenModeContextType | undefined>(undefined);

export const DegenModeProvider = ({ children }: { children: ReactNode }) => {
  // Default to false. Client-side useEffect will update from localStorage.
  const [isDegenMode, setIsDegenModeState] = useState<boolean>(false);

  useEffect(() => {
    // This effect runs once on the client after the component mounts.
    // It initializes the degen mode state from localStorage.
    let initialDegenMode = false;
    try {
      const storedDegenMode = localStorage.getItem('degenMode');
      if (storedDegenMode === 'true') { // Explicitly check for the string 'true'
        initialDegenMode = true;
      }
      // For any other value ('false', null, undefined, or corrupted data),
      // initialDegenMode will remain false.
    } catch (error) {
      console.error("Error reading degenMode from localStorage:", error);
      // initialDegenMode remains false in case of error.
    }
    setIsDegenModeState(initialDegenMode);
  }, []); // Empty dependency array ensures this runs once on client mount.

  useEffect(() => {
    // This effect runs whenever isDegenMode changes.
    // It syncs the state to localStorage and applies/removes the 'degen-mode' class.
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
  }, [isDegenMode]); // This effect depends on isDegenMode.

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
