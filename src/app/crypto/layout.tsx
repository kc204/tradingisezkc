
'use client';

import { Toaster } from '@/app/crypto/components/ui/toaster';
import CryptoGlobalOfferBar from './components/CryptoGlobalOfferBar';
import CryptoHeader from './components/CryptoHeader';
import CryptoFooter from './components/CryptoFooter';
import './crypto.css';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function CryptoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    // Apply crypto-theme class to body for this layout
    document.body.classList.add('crypto-theme', 'font-pixel');
    
    // Cleanup function to remove classes when the component unmounts
    return () => {
      document.body.classList.remove('crypto-theme', 'font-pixel');
    };
  }, [pathname]); // Re-run effect if path changes


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <CryptoGlobalOfferBar />
      <CryptoHeader />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {children}
      </main>
      <CryptoFooter />
      <Toaster />
    </div>
  );
}
