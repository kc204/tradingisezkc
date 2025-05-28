'use client';

import type { ReactNode } from 'react';

// Placeholder DegenLayout.
// TODO: Implement full Degen Mode visual style, fonts, and layout structure as per PRD 10.4.
// This will require adding Degen-specific fonts (Press Start 2P, Pixelify Sans)
// to next/font/google in the root layout and configuring them in tailwind.config.ts.
export default function DegenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Minimal Degen Header - to be expanded as per PRD 10.4 */}
      <header className="p-4 border-b border-gray-700 text-center">
        <h1 className="text-2xl text-lime-400">TradingisEZ [DEGEN ZONE]</h1>
        {/* "Return to Sanity" button will be added here or in a more persistent spot */}
      </header>
      <main className="flex-grow p-4">
        <p className="mb-6 text-center text-xl text-yellow-400">!!! WELCOME TO THE DEGEN DIMENSION !!!</p>
        {children}
      </main>
      {/* Minimal Degen Footer - to be expanded as per PRD 10.4 */}
      <footer className="p-4 mt-auto border-t border-gray-700 text-center text-xs text-gray-500">
        <p>RISK IT FOR THE BISCUIT. NFA. DYOR. WAGMI?</p>
      </footer>
    </div>
  );
}
