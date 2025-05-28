
// This page will be automatically wrapped by DegenLayout when Degen Mode is active.
import DegenCard from '@/components/degen/DegenCard'; // Import the new DegenCard

export default function DegenHomePage() {
  return (
    <div className="space-y-12 text-center">
      <section id="trenches" className="p-6 border-2 border-[var(--degen-direct-neon-lime-green)] shadow-[0_0_10px_var(--degen-direct-neon-lime-green),_0_0_15px_var(--degen-direct-neon-lime-green)_/_0.7] rounded-none">
        <h2 className="text-3xl md:text-4xl font-press-start text-[var(--degen-direct-neon-lime-green)] mb-6 animate-pulse">
          § The Trenches: Degen Alpha §
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed mb-8">
          Strap in, space cadet! This is where we dive deep into the crypto abyss. Unfiltered alpha, high-risk plays, and maybe a few 100x gems (or complete rugs). Remember: NFA, DYOR, and don't ape what you can't afford to lose! We're all just degens trying to make it.
        </p>
        {/* Using the new DegenCard component */}
        <div className="max-w-2xl mx-auto space-y-6">
          <DegenCard 
            title="Alpha Drop #001"
            description="Latest intel suggests $WIFMEOW coin might have a 0.0001% chance of not rugging this week. Consider this your daily dose of hopium, or copium. Tread carefully."
          />
          <DegenCard 
            title="Project Moonshot X"
            description="Heard from a guy who knows a guy that Project Moonshot X is about to announce a revolutionary partnership with... a sentient AI toaster. DYOR, but if this hits, lambos for everyone (or ramen noodles)."
          />
        </div>
      </section>

      <section id="memewatch" className="p-6 border-2 border-[var(--degen-direct-neon-blue)] shadow-[0_0_10px_var(--degen-direct-neon-blue),_0_0_15px_var(--degen-direct-neon-blue)_/_0.7] rounded-none">
        <h2 className="text-3xl md:text-4xl font-press-start text-[var(--degen-direct-neon-blue)] mb-6">
          Memecoin Watchlist/Radar
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed mb-6">
          Scanning the degen-o-sphere for the latest memetic mutations. These coins are pure speculation. High risk, high reward, high chance of zero. Treat this like a casino, but with more frogs and dogs. Always check contract addresses and project communities!
        </p>
        <div className="mt-6 p-4 border border-[var(--degen-direct-neon-pink)]/50 rounded-none bg-black/30 max-w-md mx-auto">
          <ul className="font-pixelify text-gray-400 space-y-2 text-left">
            <li>$DOGEWITHASCREAMMASK - Chart looking... interesting? (DYOR!)</li>
            <li>$SHIBAMONKEYBALLZ - Just launched, liquidity locked? (Verify!)</li>
            <li>$NOTCOINBUTMAYBE - Zero utility, 100% meme. (You've been warned!)</li>
          </ul>
        </div>
      </section>

      <section id="how-to-ape" className="p-6 border-2 border-[var(--degen-direct-neon-lime-green)] shadow-[0_0_10px_var(--degen-direct-neon-lime-green),_0_0_15px_var(--degen-direct-neon-lime-green)_/_0.7] rounded-none">
        <h2 className="text-3xl md:text-4xl font-press-start text-[var(--degen-direct-neon-lime-green)] mb-6">
          How to Ape (EZ Degen Guides)
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-pixelify max-w-3xl mx-auto leading-relaxed mb-6">
          So you wanna be a degen? These ain't your grandma's trading guides. Learn the sacred arts of aping responsibly (lol, jk, but seriously be careful).
        </p>
        <div className="mt-6 p-4 border border-[var(--degen-direct-neon-pink)]/50 rounded-none bg-black/30 max-w-md mx-auto">
          <ul className="font-pixelify text-gray-400 space-y-2 text-left">
            <li>How to Create a Memecoin (For Fun & Learning!) - (Guide Coming Soon!)</li>
            <li>Understanding Tokenomics of Degen Plays (Simplified) - (Guide Coming Soon!)</li>
            <li>Spotting Rug Pulls & Scams (Degen Edition) - (Guide Coming Soon!)</li>
            <li>Navigating DEXs for New Coins - (Guide Coming Soon!)</li>
            <li>Degen Glossary - (Guide Coming Soon!)</li>
          </ul>
        </div>
      </section>
       <div className="mt-12 p-6 border-2 border-[var(--degen-direct-neon-pink)] bg-black text-center shadow-[0_0_15px_var(--degen-direct-neon-pink)]">
        <h3 className="text-2xl font-press-start text-[var(--degen-direct-neon-pink)] mb-3">
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

