
'use client';

import { useDegenMode } from '@/contexts/DegenModeContext';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DegenAppLayout from '@/components/degen/DegenAppLayout'; // New layout for Degen Mode

interface AppContentWrapperProps {
  children: React.ReactNode;
}

export default function AppContentWrapper({ children }: AppContentWrapperProps) {
  const { isDegenMode, isMounted } = useDegenMode();

  if (!isMounted) {
    // Return null or a loading spinner to prevent flash of incorrect content during hydration
    // For simplicity, returning null. Ensure your <html> and <body> have fallback styles if needed.
    return null; 
  }

  if (isDegenMode) {
    return <DegenAppLayout>{children}</DegenAppLayout>;
  }

  // Default main site layout
  return (
    <div className="flex flex-col min-h-screen">
      <GlobalOfferBar />
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
