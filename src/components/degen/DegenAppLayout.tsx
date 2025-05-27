
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DegenAppLayoutProps {
  children: React.ReactNode;
}

export default function DegenAppLayout({ children }: DegenAppLayoutProps) {
  const { setIsDegenMode } = useDegenMode();

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] font-pixelify">
      {/* Degen Mode Header */}
      <header className={cn(
        "sticky top-0 z-40 py-3 px-4",
        "border-b-2 border-[hsl(var(--degen-electric-blue-hsl))]",
        "bg-[hsl(var(--degen-bg-main-hsl))]" // Match body bg or slightly different
      )}>
        <div className="container mx-auto flex items-center justify-between h-12">
          <Link
            href="/degen/trenches" // Default Degen homepage
            className="text-2xl font-press-start text-[hsl(var(--degen-lime-green-hsl))]"
          >
            TradingisEZ [DEGEN]
          </Link>
          <nav className="flex items-center space-x-2">
            {/* Add Degen specific nav links here if needed later */}
            {/* e.g., <Link href="/degen/memewatch" className="...">Memewatch</Link> */}
            <Button
              onClick={() => setIsDegenMode(false)}
              variant="outline"
              size="sm"
              className={cn(
                "font-pixelify",
                "bg-transparent text-[hsl(var(--degen-electric-blue-hsl))]",
                "border-2 border-[hsl(var(--degen-electric-blue-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]"
              )}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Return to Sanity
            </Button>
          </nav>
        </div>
      </header>

      {/* Degen Mode Main Content Area */}
      <main className="flex-grow w-full container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Degen Mode Footer */}
      <footer className={cn(
        "py-6 mt-auto text-center text-xs",
        "border-t-2 border-[hsl(var(--degen-hot-pink-hsl))]",
        "bg-[hsl(var(--degen-bg-main-hsl))]" // Match body bg or slightly different
      )}>
        <p className="text-[hsl(var(--degen-hot-pink-hsl))] font-bold">
          ⚠️ DEGEN ZONE - HIGHLY SPECULATIVE - NFA/DYOR ⚠️
        </p>
        <p className="mt-1 text-[hsl(var(--degen-text-main-hsl))] opacity-75">
          Fortune favors the bold... and sometimes reks them. Trade responsibly (lol).
        </p>
      </footer>
    </div>
  );
}
