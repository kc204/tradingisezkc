
import DegenPageWrapper from '@/components/degen/DegenPageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function MemewatchPage() {
  return (
    <DegenPageWrapper>
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-press-start mb-4 text-[hsl(var(--degen-lime-green-hsl))]">
            Memecoin Watchlist
          </h1>
          <p className="text-lg text-[hsl(var(--degen-text-main-hsl))]">
            TRACKING THE LATEST MEME MADNESS. 99% ARE RUGS. 1% MIGHT MOON. DYOR.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["DOGWIFHAT", "PEPE", "BONK", "SHIB", "FLOKI", "NEWCOIN", "SCAMCOIN", "MOONSHOT"].map((coin, i) => (
             <Card key={i} className={cn(
              "bg-transparent border-2 border-[hsl(var(--degen-electric-blue-hsl))]",
              "text-center p-4 shadow-[0_0_8px_hsl(var(--degen-electric-blue-hsl))]"
            )}>
              <CardHeader className="p-2">
                <CardTitle className="font-press-start text-lg text-[hsl(var(--degen-hot-pink-hsl))]">{coin}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-xs mb-2">Ticker: ${coin.slice(0,4)}</p>
                <a 
                  href="#" 
                  className="text-[hsl(var(--degen-lime-green-hsl))] hover:underline text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chart
                </a>
              </CardContent>
              <CardDescription className="text-xs p-1 border-t border-[hsl(var(--degen-electric-blue-hsl))] mt-2 text-[hsl(var(--degen-text-main-hsl))]">
                 HIGH RISK - DYOR
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </DegenPageWrapper>
  );
}
