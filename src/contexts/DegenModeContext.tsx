
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
    const storedDegenMode = localStorage.getItem('degenMode');
    if (storedDegenMode) {
      setIsDegenModeState(JSON.parse(storedDegenMode));
    }
  }, []);

  useEffect(() => {
    if (isDegenMode) {
      document.documentElement.classList.add('degen-mode');
      localStorage.setItem('degenMode', 'true');
    } else {
      document.documentElement.classList.remove('degen-mode');
      localStorage.setItem('degenMode', 'false');
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
