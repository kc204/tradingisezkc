
// src/app/degen/how-to-ape/page.tsx
import { DegenPageWrapper } from '@/components/degen/DegenPageWrapper';
import Link from 'next/link';

export const metadata = {
  title: 'How to Ape (EZ Degen Guides) | TradingisEZ Degen Mode',
  description: 'Learn the degen arts. For educational and entertainment purposes only.',
};

const guides = [
  { title: "How to Create a Memecoin (For Fun & Learning!)", slug: "create-memecoin", wip: true },
  { title: "Understanding Tokenomics of Degen Plays (Simplified)", slug: "degen-tokenomics", wip: false },
  { title: "Spotting Rug Pulls & Scams (Degen Edition)", slug: "spot-rugs", wip: false },
  { title: "Navigating DEXs for New Coins", slug: "navigate-dexs", wip: false },
];

export default function HowToApePage() {
  return (
    <DegenPageWrapper title="How to Ape - EZ Degen Guides">
      <p className="text-lg mb-4">
        So you wanna be a degen? These ain't your grandma's trading guides.
        Learn the ways of the ape, but remember: with great power comes great
        rekt-ential.
      </p>
      <p className="text-sm text-[hsl(var(--degen-hot-pink-hsl))] font-bold mb-6">
        EDUCATIONAL PURPOSES ONLY. NFA/DYOR. This is advanced, risky stuff.
      </p>
      
      <div className="space-y-6">
        {guides.map((guide) => (
          <div key={guide.slug} className="p-4 border border-[hsl(var(--degen-electric-blue-hsl))] rounded-lg bg-black/30 hover:border-[hsl(var(--degen-lime-green-hsl))] transition-colors">
            <h3 className="text-xl font-press-start text-[hsl(var(--degen-lime-green-hsl))] mb-2">
              {guide.title} {guide.wip && <span className="text-xs text-[hsl(var(--degen-bright-orange-hsl))]">(WIP - Coming Soon!)</span>}
            </h3>
            {!guide.wip ? (
              <Link href={`/degen/how-to-ape/${guide.slug}`} className="text-[hsl(var(--degen-electric-blue-hsl))] hover:underline">
                Read Guide &rarr;
              </Link>
            ) : (
              <p className="text-sm text-muted-foreground">Patience, young padawan. Alpha is brewing.</p>
            )}
          </div>
        ))}
      </div>
    </DegenPageWrapper>
  );
}
