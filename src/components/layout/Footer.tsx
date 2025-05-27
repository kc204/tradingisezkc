
'use client';

import Link from 'next/link';
import { useState } from 'react';
import DegenEntryModal from '@/components/degen/DegenEntryModal';
import { Button } from '@/components/ui/button';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { isDegenMode } = useDegenMode(); // Still needed to show/hide the easter egg
  const currentYear = new Date().getFullYear();
  const [isDegenModalOpen, setIsDegenModalOpen] = useState(false);

  const mainSiteFooterLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/how-we-rate', label: 'How We Rate & Review' },
  ];

  // Degen specific footer links are now part of DegenAppLayout.tsx

  return (
    <>
      <footer className={cn(
        "py-8 mt-auto",
        // Degen mode specific styling for the footer is now handled by DegenAppLayout
        // This footer is only for the main site.
        "bg-muted text-muted-foreground" 
      )}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
          </div>
          <div className={cn(
            "text-center text-sm border-t border-border pt-8"
          )}>
            <p>&copy; {currentYear} TradingisEZ. All rights reserved.</p>
            <p className="mt-1">
              Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor.
            </p>
            {!isDegenMode && ( // Only show easter egg trigger if not in Degen Mode
              <div className="mt-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsDegenModalOpen(true)}
                  className="text-xs text-muted-foreground hover:text-primary"
                  aria-label="Access Degen Zone"
                >
                  🚀 Neon Astronaut Launch Codes?
                </Button>
              </div>
            )}
          </div>
        </div>
      </footer>
      {/* DegenEntryModal is only shown if the trigger is clicked (which is only visible if not in DegenMode) */}
      {!isDegenMode && <DegenEntryModal isOpen={isDegenModalOpen} onClose={() => setIsDegenModalOpen(false)} />}
    </>
  );
};

export default Footer;
