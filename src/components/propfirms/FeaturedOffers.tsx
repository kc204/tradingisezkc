
'use client';

import * as React from 'react';
import type { PropFirm } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Star, Flame } from 'lucide-react';
import { Button } from '../ui/button';

interface FeaturedOffersProps {
  firms: PropFirm[];
}

const FeaturedOffers: React.FC<FeaturedOffersProps> = ({ firms }) => {
  return (
    <Card className="w-full border-2 border-primary/50 shadow-xl bg-card/50 p-4 md:p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute h-full w-full bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f6,transparent)]"></div>
        </div>
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Flame className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Today's Hottest Offers
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {firms.map((firm) => (
              <CarouselItem key={firm.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <CardContent className="flex flex-col items-center justify-between p-4 gap-4 flex-grow">
                        <div className="flex items-center gap-4 w-full">
                            <div className="bg-muted border rounded-lg p-2 flex-shrink-0">
                                <Image
                                    src={firm.logoUrl}
                                    alt={`${firm.name} logo`}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 object-contain"
                                    data-ai-hint="company logo"
                                />
                            </div>
                            <div className="flex-grow overflow-hidden">
                                <h3 className="font-semibold text-lg truncate text-foreground group-hover:text-primary transition-colors">
                                <Link href={`/firms/${firm.slug}`}>
                                    {firm.name}
                                </Link>
                                </h3>
                                {firm.rating && (
                                <div className="flex items-center text-xs text-muted-foreground">
                                    <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                                    <span>{firm.rating.toFixed(1)} / 5.0</span>
                                </div>
                                )}
                            </div>
                        </div>

                        {firm.offerBadgeLabel && (
                            <Badge
                                variant="default"
                                className="w-full text-center justify-center py-2 text-sm font-bold bg-accent text-accent-foreground"
                            >
                                {firm.offerBadgeLabel}
                            </Badge>
                        )}

                        <Button asChild className="w-full mt-auto">
                            <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                                Visit Offer
                            </Link>
                        </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </Card>
  );
};

export default FeaturedOffers;

