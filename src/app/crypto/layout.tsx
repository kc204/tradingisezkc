
'use client';

import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import CryptoGlobalOfferBar from './components/CryptoGlobalOfferBar';
import CryptoHeader from './components/CryptoHeader';
import CryptoFooter from './components/CryptoFooter';
import './crypto.css';
import { usePathname } from 'next/navigation';


export default function CryptoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (!pathname.startsWith('/crypto')) {
    return <>{children}</>
  }
  return (
    <div className="crypto-theme font-pixel antialiased flex flex-col min-h-screen overflow-x-hidden">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
          <CryptoGlobalOfferBar />
          <CryptoHeader />
          <main className='flex-grow container mx-auto px-4 py-8'>
            {children}
          </main>
          <CryptoFooter />
          <Toaster />
      </ThemeProvider>
    </div>
  );
}
