
'use client';

import { mockGlobalOffers, mockPropFirms } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const GlobalOfferBar = () => {
  const activeOffersWithFirms = mockGlobalOffers
    .filter(offer => offer.isActive)
    .map(offer => {
      // Find the firm based on a loose match in the offer text.
      // This is a simple approach; a more robust solution would involve linking offers to firms with an ID.
      const firm = mockPropFirms.find(f => offer.text.toLowerCase().includes(f.name.toLowerCase().split(' ')[0]));
      return {
        ...offer,
        firmLogo: firm?.logoUrl,
        firmSlug: firm?.slug,
      };
    });

  if (activeOffersWithFirms.length === 0) {
    return null;
  }

  // Duplicate the content to create a seamless loop for the marquee effect
  const duplicatedOffers = [...activeOffersWithFirms, ...activeOffersWithFirms];

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm sticky top-0 z-50 shadow-md overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {duplicatedOffers.map((offer, index) => (
          <Link
            key={`${offer.id}-${index}`}
            href={offer.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white inline-flex items-center text-white mx-4 flex-shrink-0"
          >
            {offer.firmLogo && (
              <Image 
                src={offer.firmLogo} 
                alt="" 
                width={20} 
                height={20} 
                className="w-5 h-5 mr-2 rounded-sm object-contain"
              />
            )}
            <span className="font-medium">{offer.text}</span>
            <ChevronRight className="ml-1 h-4 w-4 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalOfferBar;
