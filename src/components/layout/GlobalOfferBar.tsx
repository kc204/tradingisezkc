
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
    <div className="bg-primary text-white py-2 text-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center">
        {currentOffer && (
          <Link
            href={currentOffer.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
            key={currentOffer.id} // Add key to help React differentiate changing content
          >
            {currentOffer.text}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default GlobalOfferBar;
