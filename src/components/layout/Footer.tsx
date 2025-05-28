
'use client';

import Link from 'next/link';
import { DegenEntryModal } from '@/components/degen/DegenEntryModal';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import NeonAstronautTrigger from '../ui/NeonAstronautTrigger'; // Import the new trigger

const Footer = () => {
  const { isDegenMode, isMounted } = useDegenMode();
  const [isDegenModalOpen, setIsDegenModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const mainSiteFooterLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/how-we-rate', label: 'How We Rate & Review' },
  ];

  const handleTriggerClick = () => {
    setIsDegenModalOpen(true);
  };

  // Prevents hydration mismatch for DegenEntryModal
  const [clientMounted, setClientMounted] = useState(false);
  useEffect(() => {
    setClientMounted(true);
  }, []);


  if (isDegenMode && isMounted) {
    // Degen Mode Footer
    return (
      <footer className="p-4 mt-auto border-t border-[hsl(var(--degen-neon-blue))]/50 text-center text-xs text-gray-500 font-pixelify">
        <p className="uppercase">RISK IT FOR THE BISCUIT. NFA. DYOR. WAGMI?</p>
        <p className="mt-1 text-[hsl(var(--degen-neon-pink))]/70">Remember: Ape responsibly. Or don't. Your keys, your crypto, your problem.</p>
        <p className="mt-2 text-[hsl(var(--degen-text-muted-hsl))]">&copy; {currentYear} TradingisEZ [DEGEN REALM]</p>
      </footer>
    );
  }
  
  // Main Site Footer
  return (
    <>
      <footer className="py-8 mt-auto bg-muted text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">TradingisEZ</h3>
              <p className="text-sm">Your trusted resource for finding the best prop firms and trading opportunities.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link href="/firms" className="text-sm hover:text-primary">All Prop Firms</Link></li>
                <li><Link href="/compare" className="text-sm hover:text-primary">Compare Firms</Link></li>
                <li><Link href="/free-resources" className="text-sm hover:text-primary">Free Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2">Legal</h4>
              <ul className="space-y-1">
                {mainSiteFooterLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Easter Egg Trigger Area */}
            {!isDegenMode && isMounted && (
              <div className="flex flex-col items-center md:items-end">
                <div onClick={handleTriggerClick} className="cursor-pointer">
                  <NeonAstronautTrigger />
                </div>
              </div>
            )}
          </div>
          <div className="text-center text-sm border-t border-border pt-8">
            <p>&copy; {currentYear} TradingisEZ. All rights reserved.</p>
            <p className="mt-1">
              Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor.
            </p>
          </div>
        </div>
      </footer>
      {clientMounted && <DegenEntryModal isOpen={isDegenModalOpen} onClose={() => setIsDegenModalOpen(false)} />}
    </>
  );
};

export default Footer;
