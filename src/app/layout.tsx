
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
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
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Ensure dark theme is default
          enableSystem={false} // Disable system preference to enforce dark theme
          disableTransitionOnChange
        >
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
