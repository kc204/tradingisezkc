
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import CryptoGlobalOfferBar from './components/CryptoGlobalOfferBar';
import CryptoHeader from './components/CryptoHeader';
import CryptoFooter from './components/CryptoFooter';
import './crypto.css';

export default function CryptoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="crypto-theme font-pixel antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <CryptoGlobalOfferBar />
        <CryptoHeader />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <CryptoFooter />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
