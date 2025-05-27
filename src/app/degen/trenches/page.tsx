
import DegenPageWrapper from '@/components/degen/DegenPageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Example import
import { cn } from '@/lib/utils';

export default function TrenchesPage() {
  return (
    <DegenPageWrapper>
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-press-start mb-4 text-[hsl(var(--degen-lime-green-hsl))]">
            The Trenches
          </h1>
          <p className="text-lg text-[hsl(var(--degen-text-main-hsl))]">
            ALPHA LEAKS & HIGH-RISK VENTURES. HANDLE WITH CARE, APE RESPONSIBLY.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className={cn(
              "bg-transparent border-2 border-[hsl(var(--degen-hot-pink-hsl))]",
              "shadow-[0_0_10px_hsl(var(--degen-hot-pink-hsl))]"
            )}>
              <CardHeader>
                <CardTitle className="font-press-start text-xl text-[hsl(var(--degen-electric-blue-hsl))]">
                  Project Moonshot #{i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Some degen info about a new coin, probably on BSC or Solana. DYOR HARD.
                </p>
                <a 
                  href="#" 
                  className="text-[hsl(var(--degen-lime-green-hsl))] hover:underline break-all"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on DexScreener/Telegram
                </a>
                <p className="mt-3 text-xs text-[hsl(var(--degen-hot-pink-hsl))] font-bold">
                  ⚠️ EXTREME RISK - NFA/DYOR
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </DegenPageWrapper>
  );
}
