
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Press_Start_2P, Pixelify_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import { ThemeProvider } from '@/components/theme-provider';
import { DegenModeProvider } from '@/contexts/DegenModeContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700'],
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  weight: ['400'],
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'TradingisEZ | Your Trading Success Partner',
  description: 'Find the Perfect Prop Firm & Get Funded with TradingisEZ. Your comprehensive trading hub.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${pressStart2P.variable} ${pixelifySans.variable}`}>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <DegenModeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <GlobalOfferBar />
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </DegenModeProvider>
      </body>
    </html>
  );
}
