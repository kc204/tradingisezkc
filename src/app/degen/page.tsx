
// This page will be automatically wrapped by DegenLayout when Degen Mode is active.
export default function DegenHomePage() {
  return (
    <div className="space-y-12 text-center">
      <section id="trenches">
        <h2 className="text-3xl md:text-4xl font-press-start text-[hsl(var(--degen-neon-lime))] mb-4 animate-pulse">
          § The Trenches: Degen Alpha §
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed">
          Strap in, space cadet! This is where we dive deep into the crypto abyss. Unfiltered alpha, high-risk plays, and maybe a few 100x gems (or complete rugs). Remember: NFA, DYOR, and don't ape what you can't afford to lose! We're all just degens trying to make it.
        </p>
        {/* Placeholder for curated news, threads, insights */}
        <div className="mt-6 p-4 border border-[hsl(var(--degen-neon-pink))]/50 rounded-none bg-black/30">
          <p className="font-pixelify text-gray-400">Latest Alpha Drop: "Is $PEPEWIFHATLASEREYES the next big thing? Probably not, but here's why it might pump..." (Coming Soon!)</p>
        </div>
      </section>

      <section id="memewatch">
        <h2 className="text-3xl md:text-4xl font-press-start text-[hsl(var(--degen-neon-blue))] mb-4">
          Memecoin Watchlist/Radar
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed">
          Scanning the degen-o-sphere for the latest memetic mutations. These coins are pure speculation. High risk, high reward, high chance of zero. Treat this like a casino, but with more frogs and dogs. Always check contract addresses and project communities!
        </p>
        {/* Placeholder for memecoin listings */}
        <div className="mt-6 p-4 border border-[hsl(var(--degen-neon-pink))]/50 rounded-none bg-black/30">
          <ul className="font-pixelify text-gray-400 space-y-2">
            <li>$DOGEWITHASCREAMMASK - Chart looking... interesting? (DYOR!)</li>
            <li>$SHIBAMONKEYBALLZ - Just launched, liquidity locked? (Verify!)</li>
            <li>$NOTCOINBUTMAYBE - Zero utility, 100% meme. (You've been warned!)</li>
          </ul>
        </div>
      </section>

      <section id="how-to-ape">
        <h2 className="text-3xl md:text-4xl font-press-start text-[hsl(var(--degen-neon-lime))] mb-4">
          How to Ape (EZ Degen Guides)
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed">
          So you wanna be a degen? These ain't your grandma's trading guides. Learn the sacred arts of aping responsibly (lol, jk, but seriously be careful).
        </p>
        {/* Placeholder for guide links */}
        <div className="mt-6 p-4 border border-[hsl(var(--degen-neon-pink))]/50 rounded-none bg-black/30">
          <ul className="font-pixelify text-gray-400 space-y-2">
            <li>How to Create a Memecoin (For Fun & Learning!) - (Guide Coming Soon!)</li>
            <li>Understanding Tokenomics of Degen Plays (Simplified) - (Guide Coming Soon!)</li>
            <li>Spotting Rug Pulls & Scams (Degen Edition) - (Guide Coming Soon!)</li>
            <li>Navigating DEXs for New Coins - (Guide Coming Soon!)</li>
            <li>Degen Glossary - (Guide Coming Soon!)</li>
          </ul>
        </div>
      </section>
       <div className="mt-12 p-6 border-2 border-[hsl(var(--degen-neon-pink))] bg-black text-center">
        <h3 className="text-2xl font-press-start text-[hsl(var(--degen-neon-pink))] mb-3">
          🚨 MEGA DISCLAIMER 🚨
        </h3>
        <p className="font-pixelify text-sm text-gray-300 leading-relaxed">
          This entire Degen Zone is for entertainment and informational novelty ONLY.
          None of this is financial advice (NFA). Cryptocurrencies, especially memecoins and new projects, are EXTREMELY volatile and high-risk.
          You WILL likely lose money. Do Your Own Research (DYOR). Never invest more than you are willing to lose completely.
          We are not responsible for your financial decisions, gains, or (most likely) losses. Ape responsibly... or don't, but don't blame us. WAGMI? Maybe.
        </p>
      </div>
    </div>
  );
}
