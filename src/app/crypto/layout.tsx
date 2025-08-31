
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
    document.body.classList.add('crypto-theme', 'font-pixel');
    // Cleanup function to remove classes when the component unmounts
    return () => {
      document.body.classList.remove('crypto-theme', 'font-pixel');
    };
  }, []);


  if (!pathname.startsWith('/crypto')) {
    // This layout is only for the /crypto path. For other paths, render children directly.
    return <>{children}</>
  }

  return (
      <>
        <CryptoGlobalOfferBar />
        <CryptoHeader />
        <main className='flex-grow container mx-auto px-4 py-8'>
            {children}
        </main>
        <CryptoFooter />
        <Toaster />
      </>
  );
}
