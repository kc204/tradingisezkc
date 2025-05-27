
'use client';

import Link from 'next/link';
import { useState } from 'react';
import DegenEntryModal from '@/components/degen/DegenEntryModal';
import { Button } from '@/components/ui/button'; // Keep for potential Degen trigger styling

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDegenModalOpen, setIsDegenModalOpen] = useState(false);

  const footerLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/how-we-rate', label: 'How We Rate & Review' },
  ];

  return (
    <>
      <footer className="bg-muted text-muted-foreground py-8 mt-auto">
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
          <div className="border-t border-border pt-8 text-center text-sm">
            <p>&copy; {currentYear} TradingisEZ. All rights reserved.</p>
            <p className="mt-1">
              Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor.
            </p>
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
          </div>
        </div>
      </footer>
      <DegenEntryModal isOpen={isDegenModalOpen} onClose={() => setIsDegenModalOpen(false)} />
    </>
  );
};

export default Footer;
