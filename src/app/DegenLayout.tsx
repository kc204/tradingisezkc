
'use client';

import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { LogOut } from 'lucide-react';

export default function DegenLayout({ children }: { children: ReactNode }) {
  const { setIsDegenMode } = useDegenMode();

  return (
    <div className="min-h-screen bg-black text-white font-pixelify flex flex-col">
      <header className="p-4 border-b border-degen-electric-blue/50 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-press-start text-degen-lime-green">TradingisEZ [DEGEN ZONE]</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsDegenMode(false)}
          className="font-pixelify text-degen-hot-pink border-degen-hot-pink hover:bg-degen-hot-pink hover:text-black"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Return to Sanity
        </Button>
      </header>
      <main className="flex-grow p-4 md:p-8">
        <p className="mb-6 text-center text-2xl md:text-3xl font-press-start text-degen-electric-blue animate-pulse">
          !!! WELCOME TO THE DEGEN DIMENSION !!!
        </p>
        {children}
      </main>
      <footer className="p-4 mt-auto border-t border-degen-electric-blue/50 text-center text-xs text-gray-500 font-pixelify">
        <p className="uppercase">RISK IT FOR THE BISCUIT. NFA. DYOR. WAGMI?</p>
        <p className="mt-1 text-degen-hot-pink/70">Remember: Ape responsibly. Or don't. Your keys, your crypto, your problem.</p>
      </footer>
    </div>
  );
}
