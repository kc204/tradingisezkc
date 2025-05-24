'use client';

import { mockGlobalOffers } from '@/lib/mockData';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const GlobalOfferBar = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const activeOffers = mockGlobalOffers.filter(offer => offer.isActive);

  useEffect(() => {
    if (activeOffers.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % activeOffers.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(intervalId);
  }, [activeOffers.length]);

  if (activeOffers.length === 0) {
    return null;
  }

  const currentOffer = activeOffers[currentOfferIndex];

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link href={currentOffer.affiliateLink} passHref legacyBehavior>
          <a className="hover:underline flex items-center transition-opacity duration-500 ease-in-out" target="_blank" rel="noopener noreferrer">
            {currentOffer.text}
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GlobalOfferBar;
