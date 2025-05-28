
'use client';

import type { ReactNode } from 'react';
import { useDegenMode } from '@/contexts/DegenModeContext';
import DegenLayout from '@/app/DegenLayout';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootSwitcher({ pageContent }: { pageContent: ReactNode }) {
  const { isDegenMode, isMounted } = useDegenMode();

  if (!isMounted) {
    // Return null or a loading skeleton until client is mounted and localStorage is checked.
    // This prevents hydration mismatch or flash of incorrect layout.
    return null; 
  }

  if (isDegenMode) {
    return <DegenLayout>{pageContent}</DegenLayout>;
  }

  // If not in Degen Mode, render the normal site layout with the page content
  return (
    <>
      <GlobalOfferBar />
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {pageContent}
      </main>
      <Footer />
    </>
  );
}
