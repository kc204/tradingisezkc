
'use client';
import { useState, useEffect, useRef } from 'react';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import OfferBox from '@/components/propfirms/OfferBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CreditCard, Banknote, CandlestickChart, ShieldCheck, FileText, Ban, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

const DetailItem = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div>
        <h4 className="text-sm font-semibold text-muted-foreground mb-2">{label}</h4>
        <div className="flex flex-wrap gap-2">
            {children}
        </div>
    </div>
);

const DetailBadge = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted text-muted-foreground">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
    </div>
);

const CountryBadge = ({ name, code }: { name: string, code: string }) => (
  <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted text-muted-foreground">
    <Image 
      src={`https://flagsapi.com/${code.toUpperCase()}/flat/64.png`}
      alt={`${name} flag`}
      width={20}
      height={15}
      className="mr-2"
    />
    {name}
  </div>
);

const FirmMiniDetail = ({ firm }: { firm: PropFirm }) => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const offerBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    
    const handleScroll = () => {
      if (offerBoxRef.current && scrollContainer) {
        const offerBoxRect = offerBoxRef.current.getBoundingClientRect();
        const scrollContainerRect = scrollContainer.getBoundingClientRect();
        
        // When the top of the offer box goes above the top of the scroll container, make CTA sticky
        if (offerBoxRect.top < scrollContainerRect.top) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      {isSticky && (
          <div
          className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm py-3 px-4 border-b"
          >
          <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent-hover text-base">
              <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
              Claim Offer &amp; Visit {firm.name}
              <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">(Affiliate Link)</p>
          </div>
      )}
      <ScrollArea className="flex-grow" ref={scrollAreaRef}>
        <div className="relative space-y-6 text-foreground p-4 sm:p-6">
          <div ref={offerBoxRef}>
            <OfferBox firm={firm} hideCta={isSticky} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">Firm Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {firm.broker && <DetailItem label="Broker"><DetailBadge icon={<Briefcase className="w-4 h-4" />}>{firm.broker}</DetailBadge></DetailItem>}
              {firm.platforms && firm.platforms.length > 0 && <DetailItem label="Platforms">{firm.platforms.map(p => <DetailBadge key={p}>{p}</DetailBadge>)}</DetailItem>}
              {firm.paymentMethods && firm.paymentMethods.length > 0 && <DetailItem label="Payment Methods">{firm.paymentMethods.map(p => <DetailBadge key={p} icon={<CreditCard className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
              {firm.payoutMethods && firm.payoutMethods.length > 0 && <DetailItem label="Payout Methods">{firm.payoutMethods.map(p => <DetailBadge key={p} icon={<Banknote className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><CandlestickChart className="mr-2 h-5 w-5 text-primary" /> Instruments and Assets</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {firm.instrumentTypes && firm.instrumentTypes.length > 0 && <DetailItem label="Type of Instruments">{firm.instrumentTypes.map(i => <DetailBadge key={i}>{i}</DetailBadge>)}</DetailItem>}
                {firm.assets && firm.assets.length > 0 && <DetailItem label="Assets">{firm.assets.map(a => <DetailBadge key={a}>{a}</DetailBadge>)}</DetailItem>}
            </CardContent>
          </Card>

          {firm.tradingRules && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Trading Rules</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none break-words dark:prose-invert">
                 <div dangerouslySetInnerHTML={{ __html: firm.tradingRules.replace(/### (.*?)\n/g, '<h3>$1</h3>').replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<p><strong>$1:</strong> $2</p>').replace(/- (.*?)\n/g, '<ul><li>$1</li></ul>').replace(/<\/ul>\s*<ul>/g, '') }} />
              </CardContent>
            </Card>
          )}

          {firm.restrictedCountries && firm.restrictedCountries.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><Ban className="mr-2 h-5 w-5 text-primary" /> Restricted Countries</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {firm.restrictedCountries.map(country => (
                  <CountryBadge key={country.code} name={country.name} code={country.code} />
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FirmMiniDetail;
