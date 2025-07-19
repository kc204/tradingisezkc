

'use client';

import React, { useRef, useEffect, useState } from 'react';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import OfferBox from '@/components/propfirms/OfferBox';
import { ExternalLink, Info, ShieldCheck, FileText, Briefcase, CreditCard, Banknote, CandlestickChart, TowerControl, Ban } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FirmMiniDetailProps {
    firm: PropFirm;
}

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

const FirmMiniDetail: React.FC<FirmMiniDetailProps> = ({ firm }) => {
    const offerBoxRef = useRef<HTMLDivElement>(null);
    const [isOfferBoxVisible, setIsOfferBoxVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOfferBoxVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } 
        );

        const currentRef = offerBoxRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="relative h-full w-full flex flex-col">
            <ScrollArea className="flex-grow w-full">
                 <div className={cn(
                    "sticky top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm p-3 border-b transition-opacity duration-300",
                    isOfferBoxVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                 )}>
                    <div className="container mx-auto flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-3 overflow-hidden">
                             <div className="w-12 h-12 relative flex-shrink-0">
                                <Image src={firm.logoUrl} alt={`${firm.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo" />
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-lg font-bold text-foreground truncate">{firm.name}</h3>
                                {firm.offerBadgeLabel && <Badge variant="secondary" className="whitespace-nowrap">{firm.offerBadgeLabel}</Badge>}
                            </div>
                        </div>
                        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent-hover flex-shrink-0">
                            <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                                Claim Offer <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="p-4 md:p-6 space-y-6 w-full">
                    <div ref={offerBoxRef}>
                        <OfferBox firm={firm} />
                    </div>

                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center"><Info className="mr-2 h-5 w-5 text-primary" /> Firm Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
                            {firm.broker && <DetailItem label="Broker"><DetailBadge icon={<Briefcase className="w-4 h-4" />}>{firm.broker}</DetailBadge></DetailItem>}
                            {firm.platforms && firm.platforms.length > 0 && <DetailItem label="Platforms">{firm.platforms.map(p => <DetailBadge key={p}>{p}</DetailBadge>)}</DetailItem>}
                            {firm.paymentMethods && firm.paymentMethods.length > 0 && <DetailItem label="Payment Methods">{firm.paymentMethods.map(p => <DetailBadge key={p} icon={<CreditCard className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
                            {firm.payoutMethods && firm.payoutMethods.length > 0 && <DetailItem label="Payout Methods">{firm.payoutMethods.map(p => <DetailBadge key={p} icon={<Banknote className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
                        </CardContent>
                    </Card>
                    
                    <Card className="w-full">
                        <CardHeader>
                        <CardTitle className="text-xl flex items-center"><CandlestickChart className="mr-2 h-5 w-5 text-primary" /> Instruments and Assets</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
                            {firm.instrumentTypes && firm.instrumentTypes.length > 0 && <DetailItem label="Type of Instruments">{firm.instrumentTypes.map(i => <DetailBadge key={i}>{i}</DetailBadge>)}</DetailItem>}
                            {firm.assets && firm.assets.length > 0 && <DetailItem label="Assets">{firm.assets.map(a => <DetailBadge key={a}>{a}</DetailBadge>)}</DetailItem>}
                        </CardContent>
                    </Card>

                    {firm.tradingRules && (
                        <Card className="w-full">
                          <CardHeader>
                            <CardTitle className="text-2xl flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Trading Rules</CardTitle>
                          </CardHeader>
                           <CardContent className="prose max-w-none break-words dark:prose-invert" dangerouslySetInnerHTML={{ __html: firm.tradingRules.replace(/<h3> (.*?)\n/g, '<h3>$1</h3>').replace(/- \*\*(.*?):\*\* (.*?)\n/g, '<p><strong>$1:</strong> $2</p>').replace(/- (.*?)\n/g, '<ul><li>$1</li></ul>').replace(/<\/ul>\s*<ul>/g, '') }} />
                        </Card>
                      )}

                    {firm.restrictedCountries && firm.restrictedCountries.length > 0 && (
                        <Card className="w-full">
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
