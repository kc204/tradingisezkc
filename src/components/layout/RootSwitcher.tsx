'use client';

import type { ReactNode } from 'react';
import { useDegenMode } from '@/contexts/DegenModeContext';
import DegenLayout from '@/app/DegenLayout';

export default function RootSwitcher({ children }: { children: ReactNode }) {
  const { isDegenMode, isMounted } = useDegenMode();

  if (!isMounted) {
    // Return null or a loading skeleton until client is mounted and localStorage is checked.
    // This prevents hydration mismatch or flash of incorrect layout.
    return null; 
  }

  if (isDegenMode) {
    return <DegenLayout>{children}</DegenLayout>;
  }

  // If not in Degen Mode, render the children passed (which is the normal site layout)
  return <>{children}</>;
}
