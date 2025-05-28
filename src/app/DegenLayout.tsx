
'use client';

import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

export default function DegenLayout({ children }: { children: ReactNode }) {
  const { setIsDegenMode } = useDegenMode();
  const router = useRouter(); 

  const handleExit = () => {
    setIsDegenMode(false);
    router.push('/'); 
  };

  return (
    <div className="min-h-screen bg-black text-white font-pixelify flex flex-col">
      <header className="p-4 border-b border-[hsl(var(--degen-neon-blue))]/50 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-press-start text-[var(--degen-direct-neon-lime-green)]">TradingisEZ [DEGEN ZONE]</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={handleExit} 
          className="font-pixelify text-[hsl(var(--degen-neon-pink))] border-[hsl(var(--degen-neon-pink))] hover:bg-[hsl(var(--degen-neon-pink))] hover:text-black rounded-none hover:shadow-[0_0_8px_var(--degen-direct-neon-hot-pink),_0_0_12px_var(--degen-direct-neon-hot-pink)]"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Return to Sanity
        </Button>
      </header>
      <main className="flex-grow p-4 md:p-8 relative degen-scanlines-overlay"> {/* Added relative and overlay class */}
        {children}
      </main>
      <footer className="p-4 mt-auto border-t border-[hsl(var(--degen-neon-blue))]/50 text-center text-xs text-gray-500 font-pixelify">
        <p className="uppercase">RISK IT FOR THE BISCUIT. NFA. DYOR. WAGMI?</p>
        <p className="mt-1 text-[hsl(var(--degen-neon-pink))]/70">Remember: Ape responsibly. Or don't. Your keys, your crypto, your problem.</p>
      </footer>
    </div>
  );
}

