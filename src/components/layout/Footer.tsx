
'use client';

import Link from 'next/link';
import { useState } from 'react';
import DegenEntryModal from '@/components/degen/DegenEntryModal';
import { Button } from '@/components/ui/button';
import { useDegenMode } from '@/contexts/DegenModeContext';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { isDegenMode } = useDegenMode();
  const currentYear = new Date().getFullYear();
  const [isDegenModalOpen, setIsDegenModalOpen] = useState(false);

  const mainSiteFooterLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/how-we-rate', label: 'How We Rate & Review' },
  ];

  // Placeholder for Degen Mode specific footer links if needed in the future
  // const degenFooterLinks = [ ... ];

  const footerLinks = isDegenMode ? [] : mainSiteFooterLinks; // Hide legal links in degen mode for now or define degen specific ones

  return (
    <>
      <footer className={cn(
        "py-8 mt-auto",
        isDegenMode ? "bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] border-t-2 border-[hsl(var(--degen-electric-blue-hsl))]" 
                    : "bg-muted text-muted-foreground"
      )}>
        <div className="container mx-auto px-4">
          {!isDegenMode && (
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
                  {footerLinks.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className={cn(
            "text-center text-sm",
            isDegenMode ? "border-none pt-0" : "border-t border-border pt-8"
          )}>
            <p>&copy; {currentYear} TradingisEZ. All rights reserved.</p>
            {isDegenMode ? (
              <>
                <p className="mt-1 text-[hsl(var(--degen-hot-pink-hsl))]">DEGEN MODE IS FOR ENTERTAINMENT & SPECULATIVE INFO ONLY.</p>
                <p>NFA/DYOR. Stay SAFU. Don't get rekt. But WAGMI if you do it right (maybe).</p>
              </>
            ) : (
              <p className="mt-1">
                Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor.
              </p>
            )}
            {!isDegenMode && (
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
      {!isDegenMode && <DegenEntryModal isOpen={isDegenModalOpen} onClose={() => setIsDegenModalOpen(false)} />}
    </>
  );
};

export default Footer;
