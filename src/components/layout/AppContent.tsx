
'use client';

import type { ReactNode } from 'react';
import { useDegenMode } from '@/contexts/DegenModeContext';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export default function AppContent({ children }: { children: ReactNode }) {
  const { isDegenMode } = useDegenMode();

  return (
    <>
      {!isDegenMode && <GlobalOfferBar />}
      {!isDegenMode && <Header />}
      <main
        className={cn(
          'flex-grow',
          !isDegenMode && 'container mx-auto px-4 py-8'
        )}
      >
        {children}
      </main>
      {!isDegenMode && <Footer />}
      <Toaster />
    </>
  );
}
