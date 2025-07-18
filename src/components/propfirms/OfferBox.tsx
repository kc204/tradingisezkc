import React from 'react';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  firm: PropFirm;
  hideCta?: boolean;
}

const OfferBox = React.forwardRef<HTMLDivElement, OfferBoxProps>(
  ({ firm, className, hideCta = false, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn('shadow-xl border-2 border-primary', className)} {...props}>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
            <div className='flex items-center mb-2 sm:mb-0'>
              <div className="w-24 h-12 relative mr-4 flex-shrink-0">
                  <Image 
                      src={firm.logoUrl} 
                      alt={`${firm.name} logo`} 
                      layout="fill" 
                      objectFit="contain" 
                      data-ai-hint="company logo"
                  />
              </div>
              <CardTitle className="text-2xl">{firm.name}</CardTitle>
            </div>
            {firm.offerBadgeLabel && (
              <Badge variant="default" className="bg-accent text-accent-foreground text-sm px-3 py-1">
                🔥 {firm.offerBadgeLabel}
              </Badge>
            )}
          </div>
          <CardDescription>{firm.briefDescription}</CardDescription>
        </CardHeader>
        <CardContent>
            {firm.keyInfoSnippets && firm.keyInfoSnippets.length > 0 && (
              <div className="mb-4 space-y-2">
                <h4 className="font-semibold text-md text-foreground">Key Information:</h4>
                <ul className="list-none space-y-1 text-sm">
                  {firm.keyInfoSnippets.map((snippet, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      <span className="font-medium text-muted-foreground">{snippet.label}:</span>
                      <span className="ml-1 text-foreground">{snippet.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {firm.keyFeatures && firm.keyFeatures.length > 0 && (
              <div className="mb-6 space-y-2">
                <h4 className="font-semibold text-md text-foreground">Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                  {firm.keyFeatures.slice(0,3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
        </CardContent>
        <CardFooter className={cn('flex-col items-stretch pt-4 transition-opacity duration-300', { 'opacity-0': hideCta })}>
           <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent-hover text-base">
            <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
              Claim Offer &amp; Visit {firm.name}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">(Affiliate Link)</p>
        </CardFooter>
      </Card>
    );
  }
);

OfferBox.displayName = 'OfferBox';

export default OfferBox;