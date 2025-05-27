
'use client';

import { useDegenMode } from '@/contexts/DegenModeContext';
import { Button } from '@/components/ui/button'; // Using ShadCN button for base
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react'; // Example icon

interface DegenPageWrapperProps {
  children: React.ReactNode;
}

export default function DegenPageWrapper({ children }: DegenPageWrapperProps) {
  const { setIsDegenMode } = useDegenMode();

  return (
    <div className={cn(
      "min-h-screen flex flex-col font-pixelify",
      "bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))]"
    )}>
      <header className="p-4 flex justify-between items-center border-b-2 border-[hsl(var(--degen-electric-blue-hsl))]">
        <h1 className="font-press-start text-xl text-[hsl(var(--degen-lime-green-hsl))]">
          TradingisEZ <span className="text-[hsl(var(--degen-hot-pink-hsl))]">[DEGEN MODE]</span>
        </h1>
        <Button
          onClick={() => setIsDegenMode(false)}
          variant="outline"
          className={cn(
            "font-pixelify text-sm py-2 px-4",
            "bg-transparent text-[hsl(var(--degen-electric-blue-hsl))]",
            "border-2 border-[hsl(var(--degen-electric-blue-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]"
          )}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Return to Sanity
        </Button>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="p-4 text-center text-xs border-t-2 border-[hsl(var(--degen-electric-blue-hsl))]">
        <p>NFA/DYOR. Stay SAFU. Don't get rekt. But WAGMI if you do it right (maybe).</p>
        <p className="mt-1 text-[hsl(var(--degen-hot-pink-hsl))]">DEGEN MODE IS FOR ENTERTAINMENT & SPECULATIVE INFO ONLY.</p>
      </footer>
    </div>
  );
}
