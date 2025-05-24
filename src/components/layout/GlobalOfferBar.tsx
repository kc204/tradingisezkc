
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

  // Defensive check, though unlikely to be hit with current logic
  if (!currentOffer) {
    return null; 
  }

  return (
    // The parent div sets bg-primary and text-white, which should be inherited.
    <div className="bg-primary text-white py-2 text-sm sticky top-0 z-50 shadow-md">
      {/* Added h-full to ensure this div takes the parent's height from py-2 */}
      <div className="container mx-auto px-4 flex items-center justify-center h-full">
        <Link
          href={currentOffer.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          // Using inline-flex for the Link to properly contain its flex children (text and icon)
          // Text color should be inherited from the parent div.
          className="hover:underline inline-flex items-center" 
          key={currentOffer.id} // Key to help React differentiate changing content and force re-render
        >
          <span>{currentOffer.text}</span>
          {/* Added shrink-0 to prevent icon from unduly affecting layout */}
          <ChevronRight className="ml-1 h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
};

export default GlobalOfferBar;
