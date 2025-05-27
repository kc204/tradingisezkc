
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface DegenModeContextType {
  isDegenMode: boolean;
  setIsDegenMode: (isDegen: boolean) => void;
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
      setIsDegenModeState(false); // Explicitly set to false if not 'true' or null
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Prevent running on server or before initial client mount

    if (isDegenMode) {
      document.documentElement.classList.add('degen-mode');
      localStorage.setItem('degenMode', 'true');
    } else {
      document.documentElement.classList.remove('degen-mode');
      localStorage.setItem('degenMode', 'false');
    }
  }, [isDegenMode, isMounted]);

  const setIsDegenMode = (isDegen: boolean) => {
    if (isMounted) { // Only allow state changes if mounted
      setIsDegenModeState(isDegen);
    }
  };
  
  // Provide a default value during SSR or before hydration, then the actual value
  const value = isMounted ? { isDegenMode, setIsDegenMode } : { isDegenMode: false, setIsDegenMode: () => {} };


  return (
    <DegenModeContext.Provider value={value}>
      {children}
    </DegenModeContext.Provider>
  );
};

export const useDegenMode = () => {
  const context = useContext(DegenModeContext);
  if (context === undefined) {
    // Provide a default non-degen state if context is not yet available
    // This helps prevent errors during SSR or initial client render before context is fully set up
    return { isDegenMode: false, setIsDegenMode: () => console.warn("DegenModeContext not yet available") };
  }
  return context;
};
