
'use client';

import type { ReactNode } from 'react';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { Button } from '@/components/ui/button'; // For styling the exit button
import { LogOut } from 'lucide-react';

interface DegenPageWrapperProps {
  title: string;
  children: ReactNode;
}

export function DegenPageWrapper({ title, children }: DegenPageWrapperProps) {
  const { setIsDegenMode } = useDegenMode();

  return (
    <div className="degen-page-root min-h-screen flex flex-col bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] font-pixelify">
      <header className="p-4 flex justify-between items-center border-b border-[hsl(var(--degen-electric-blue-hsl))] border-opacity-50">
        <h1 className="text-2xl font-press-start text-[hsl(var(--degen-lime-green-hsl))]">
          TradingisEZ [DEGEN]
        </h1>
        <Button
          variant="outline"
          onClick={() => setIsDegenMode(false)}
          className="font-pixelify text-sm border-[hsl(var(--degen-hot-pink-hsl))] text-[hsl(var(--degen-hot-pink-hsl))] hover:bg-[hsl(var(--degen-hot-pink-hsl))] hover:text-black"
        >
          <LogOut className="mr-2 h-4 w-4" /> Exit Degen Zone
        </Button>
      </header>
      
      <div className="flex-grow py-8 px-2 md:px-4"> {/* Content area with padding */}
        <h2 className="text-3xl md:text-4xl font-press-start text-center mb-8 text-[hsl(var(--degen-electric-blue-hsl))]">
          {title}
        </h2>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 p-2 bg-[hsl(var(--degen-hot-pink-hsl))] text-black font-pixelify text-xs rounded shadow-lg z-50">
        DEGEN MODE ACTIVE - NFA/DYOR
      </div>
    </div>
  );
}
