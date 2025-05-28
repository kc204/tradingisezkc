
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Press_Start_2P, Pixelify_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { DegenModeProvider } from '@/contexts/DegenModeContext';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RootSwitcher from '@/components/layout/RootSwitcher';

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
      <body>
        <DegenModeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <RootSwitcher>
              {/* This block is the normal site layout, rendered if not in Degen Mode */}
              <GlobalOfferBar />
              <Header />
              <main className='flex-grow container mx-auto px-4 py-8'>
                {children} {/* Page content for the normal site */}
              </main>
              <Footer />
              <Toaster />
            </RootSwitcher>
          </ThemeProvider>
        </DegenModeProvider>
      </body>
    </html>
  );
}
