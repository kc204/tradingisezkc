
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google'; // Removed Degen fonts
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import { ThemeProvider } from '@/components/theme-provider';
// Removed DegenModeProvider and AppContent imports

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700'],
});

// Removed Press_Start_2P and Pixelify_Sans font definitions

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
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable}`}> {/* Removed Degen font variables from className */}
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        {/* Removed DegenModeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Directly include Header, Footer, etc. */}
          <GlobalOfferBar />
          <Header />
          <main className='flex-grow container mx-auto px-4 py-8'>
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
