
'use client';

import { Toaster } from '@/app/crypto/components/ui/toaster';
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


  // This layout now only applies the theme and renders children.
  // The header, footer, and main content structure are handled by the page itself
  // to avoid being nested inside the root layout's <main> container.
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
