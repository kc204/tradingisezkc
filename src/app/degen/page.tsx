
'use client';

// This page will be rendered within DegenLayout when Degen Mode is active and user navigates to /degen.

export default function DegenMainPage() {
  return (
    <div className="space-y-12 p-4 md:p-8">
      <section className="border-2 border-[hsl(var(--degen-neon-lime))] p-6 shadow-[0_0_15px_hsl(var(--degen-neon-lime))] rounded-none">
        <h2 className="font-press-start text-2xl md:text-3xl text-[hsl(var(--degen-neon-lime))] mb-4 animate-pulse">
          /// THE TRENCHES / DEGEN ALPHA ///
        </h2>
        <p className="font-pixelify text-lg text-gray-300 leading-relaxed">
          Deep dives into the crypto abyss. Early calls, potential 1000x gems, and high-octane speculation.
          Remember: This is the wild west. NFA. DYOR. Most will go to zero.
        </p>
        <p className="font-pixelify text-sm text-[hsl(var(--degen-neon-blue))] mt-3">
          [Content coming soon: Latest alpha, project spotlights, risk assessments...]
        </p>
      </section>

      <section className="border-2 border-[hsl(var(--degen-neon-pink))] p-6 shadow-[0_0_15px_hsl(var(--degen-neon-pink))] rounded-none">
        <h2 className="font-press-start text-2xl md:text-3xl text-[hsl(var(--degen-neon-pink))] mb-4 animate-pulse">
          *** MEMECOIN RADAR ***
        </h2>
        <p className="font-pixelify text-lg text-gray-300 leading-relaxed">
          Tracking the next potential moon-bound memecoins. Or the next rug. Who knows? That's the fun.
          Extreme caution advised. Invest only what you can afford to lose (which is probably everything).
        </p>
        <p className="font-pixelify text-sm text-[hsl(var(--degen-neon-blue))] mt-3">
          [Content coming soon: New listings, trending coins, sentiment analysis...]
        </p>
      </section>

      <section className="border-2 border-[hsl(var(--degen-neon-blue))] p-6 shadow-[0_0_15px_hsl(var(--degen-neon-blue))] rounded-none">
        <h2 className="font-press-start text-2xl md:text-3xl text-[hsl(var(--degen-neon-blue))] mb-4 animate-pulse">
          +++ HOW TO APE (EZ DEGEN GUIDES) +++
        </h2>
        <p className="font-pixelify text-lg text-gray-300 leading-relaxed">
          Not sure how to navigate this madness? We gotchu. Learn the basics of degen trading, from creating a wallet to spotting scams (maybe).
        </p>
        <ul className="font-pixelify list-disc list-inside mt-4 space-y-2 text-[hsl(var(--degen-neon-lime))]">
          <li>How to Create a Memecoin (For Fun & Learning!)</li>
          <li>Understanding Tokenomics of Degen Plays (Simplified)</li>
          <li>Spotting Rug Pulls & Scams (Degen Edition)</li>
          <li>Navigating DEXs for New Coins</li>
        </ul>
        <p className="font-pixelify text-sm text-[hsl(var(--degen-neon-pink))] mt-3">
          [Guides coming soon...]
        </p>
      </section>
    </div>
  );
}
