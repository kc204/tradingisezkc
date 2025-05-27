
// src/app/degen/memewatch/page.tsx
import { DegenPageWrapper } from '@/components/degen/DegenPageWrapper';

export const metadata = {
  title: 'Memecoin Watch | TradingisEZ Degen Mode',
  description: 'Tracking the latest memecoin sensations. Extremely high risk!',
};

export default function MemeWatchPage() {
  return (
    <DegenPageWrapper title="Memecoin Radar - To The MOON or DUST?">
      <p className="text-lg mb-4">
        Strap in, space cadets! This is your memecoin watchlist. Remember, these are
        basically lottery tickets with extra steps and more memes.
      </p>
      <p className="text-sm text-[hsl(var(--degen-hot-pink-hsl))] font-bold mb-6">
        ULTRA MEGA WARNING: MEMECOINS ARE EXTREMELY VOLATILE AND RISKY. 99.9% GO TO ZERO.
        This is PURELY for entertainment and tracking trends. NFA. DYOR. Seriously.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["PEPEKILLER", "DOGEWIFHAT2", "SHIBELONMARS"].map((token) => (
          <div key={token} className="p-4 border-2 border-dashed border-[hsl(var(--degen-hot-pink-hsl))] rounded-lg bg-black/50">
            <h3 className="text-2xl font-press-start text-[hsl(var(--degen-electric-blue-hsl))] mb-2">${token}</h3>
            <p className="text-sm mb-1">Narrative: "The next big [animal/celebrity/random object] coin!"</p>
            <p className="text-sm mb-1">Chain: Solana / Base / ETH L2</p>
            <p className="text-sm mb-3">Current Hype Level: Over 9000!</p>
            <a href="#" className="text-[hsl(var(--degen-lime-green-hsl))] hover:underline text-xs">
              View on DexScreener &rarr;
            </a>
            <p className="text-xs mt-4 text-[hsl(var(--degen-bright-orange-hsl))]">
              Risk: Infinite | Potential: 0.0001x to 1000x | DYOR NFA
            </p>
          </div>
        ))}
      </div>
    </DegenPageWrapper>
  );
}
