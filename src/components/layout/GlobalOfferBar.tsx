
'use client';

import { GlobalOffer, mockGlobalOffers } from '@/lib/mockData';
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
    <div className="bg-primary text-white py-2 text-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-center h-full overflow-hidden">
        {/* Only display the current offer */}
        <Link
 key={currentOffer.id}
 href={currentOffer.affiliateLink}
 target="_blank"
 rel="noopener noreferrer"
 className="hover:underline hover:text-white inline-flex items-center text-white whitespace-nowrap transition-all duration-500 ease-in-out"
 // The animation is handled by the container's overflow-hidden and the fact we only render one element
        >
          <span>{currentOffer.text}</span>
          <ChevronRight className="ml-1 h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
};

export default GlobalOfferBar;
