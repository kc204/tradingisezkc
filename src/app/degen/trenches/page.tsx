
// src/app/degen/trenches/page.tsx
import { DegenPageWrapper } from '@/components/degen/DegenPageWrapper';

export const metadata = {
  title: 'The Trenches | TradingisEZ Degen Mode',
  description: 'Deep dives into degen alpha. NFA/DYOR!',
};

export default function TrenchesPage() {
  return (
    <DegenPageWrapper title="The Trenches - Alpha Drops">
      <p className="text-lg mb-4">
        Welcome to the digital frontier, degens! This is where we sift through the noise
        to find those 100x gems (or get gloriously rekt trying).
      </p>
      <p className="text-sm text-[hsl(var(--degen-hot-pink-hsl))] font-bold mb-6">
        EXTREME WARNING: Everything here is highly speculative. Most projects will fail.
        This is NOT financial advice. Do YOUR OWN research. Don't invest more than you
        can afford to lose (like, for real).
      </p>
      
      <div className="space-y-8">
        {/* Placeholder for content items */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-4 border border-[hsl(var(--degen-electric-blue-hsl))] rounded-md bg-black/30">
            <h3 className="text-xl font-press-start text-[hsl(var(--degen-lime-green-hsl))] mb-2">Potential Alpha Leak #{item}</h3>
            <p className="mb-2">
              Heard some whispers about $Token{item} on chain XYZ. Rumored CEX listing soon?
              Market cap still low. Could be a moonshot or a quick trip to zero.
            </p>
            <a href="#" className="text-[hsl(var(--degen-bright-orange-hsl))] hover:underline">
              Check DexScreener for $Token{item} &rarr;
            </a>
            <p className="text-xs mt-3 text-[hsl(var(--degen-hot-pink-hsl))]">
              Risk Level: MAX | DYOR NFA
            </p>
          </div>
        ))}
      </div>
    </DegenPageWrapper>
  );
}
