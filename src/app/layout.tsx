
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import GlobalOfferBar from '@/components/layout/GlobalOfferBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
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
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Enforce dark theme for "Dynamic Blue & Action Orange"
          enableSystem={false}
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
