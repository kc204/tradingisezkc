
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: (isDegen: boolean) => void;
  isMounted: boolean; // Expose isMounted
}

const DegenModeContext = createContext<DegenModeContextType | undefined>(undefined);

export const DegenModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDegenMode, setIsDegenModeState] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initialize from localStorage only on the client after mount
    const storedDegenMode = localStorage.getItem('degenMode');
    if (storedDegenMode === 'true') {
      setIsDegenModeState(true);
    } else {
      setIsDegenModeState(false);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isDegenMode) {
      document.documentElement.classList.add('degen-mode');
      localStorage.setItem('degenMode', 'true');
    } else {
      document.documentElement.classList.remove('degen-mode');
      localStorage.setItem('degenMode', 'false');
    }
  }, [isDegenMode, isMounted]);

  const setIsDegenMode = (isDegen: boolean) => {
    if (isMounted) {
      setIsDegenModeState(isDegen);
    }
  };
  
  const value = { isDegenMode, setIsDegenMode, isMounted };

  return (
    <DegenModeContext.Provider value={value}>
      {children}
    </DegenModeContext.Provider>
  );
};

export const useDegenMode = () => {
  const context = useContext(DegenModeContext);
  if (context === undefined) {
    // Default values if context is not yet available (e.g. during SSR for a component that might use it early)
    // AppContentWrapper will handle the !isMounted case more gracefully.
    return { isDegenMode: false, setIsDegenMode: () => console.warn("DegenModeContext not yet available"), isMounted: false };
  }
  return context;
};
