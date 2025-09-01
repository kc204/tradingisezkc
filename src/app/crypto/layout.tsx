
'use client';

import { Toaster } from '@/app/crypto/components/ui/toaster';
import CryptoGlobalOfferBar from './components/CryptoGlobalOfferBar';
import CryptoHeader from './components/CryptoHeader';
import CryptoFooter from './components/CryptoFooter';
import './crypto.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CryptoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply crypto-theme class to body for this layout
    document.body.classList.add('crypto-theme', 'font-pixel');
    
    // Cleanup function to remove classes when the component unmounts or path changes
    return () => {
      document.body.classList.remove('crypto-theme', 'font-pixel');
    };
  }, [pathname]);

  if (!mounted) {
    return null; // Don't render anything on the server or before hydration
  }

  return createPortal(
    <div className="crypto-root-container flex flex-col min-h-screen bg-background text-foreground">
      <CryptoGlobalOfferBar />
      <CryptoHeader />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {children}
      </main>
      <CryptoFooter />
      <Toaster />
    </div>,
    document.body
  );
}
