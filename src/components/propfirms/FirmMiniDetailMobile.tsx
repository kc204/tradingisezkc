
'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OfferBox from '@/components/propfirms/OfferBox';
import { ExternalLink, Info, ShieldCheck, Briefcase, CreditCard, Banknote, CandlestickChart, Ban } from 'lucide-react';

// --- Helper Components ---

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

const TradingRulesContent = ({ rules }: { rules: string | undefined }) => {
    if (!rules) return null;
    const lines = rules.split('\n').filter(line => line.trim() !== '');
    let listItems: React.ReactNode[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            const list = <ul key={`ul-${Math.random()}`}>{listItems}</ul>;
            listItems = [];
            return list;
        }
        return null;
    };

    const elements = lines.reduce<React.ReactNode[]>((acc, line, index) => {
        if (line.startsWith('<h3>')) {
            acc.push(flushList());
            acc.push(<h3 key={index} dangerouslySetInnerHTML={{ __html: line.replace(/<\/?h3>/g, '') }} />);
        } else if (line.startsWith('- **')) {
            acc.push(flushList());
            const match = line.match(/- \*\*(.*?):\*\* (.*)/);
            if (match) {
                acc.push(<p key={index}><strong>{match[1]}:</strong> {match[2]}</p>);
            }
        } else if (line.startsWith('- ')) {
            listItems.push(<li key={index}>{line.substring(2)}</li>);
        } else {
            acc.push(flushList());
            acc.push(<p key={index}>{line}</p>);
        }
        if (index === lines.length - 1) {
            acc.push(flushList());
        }
        return acc;
    }, []);

    return (
        <div className="prose max-w-none break-words dark:prose-invert">
            {elements.filter(Boolean)}
        </div>
    );
};


const FirmMiniDetailMobile: React.FC<{ firm: PropFirm }> = ({ firm }) => {
    return (
        <div className="relative h-full w-full flex flex-col">
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-4 pb-24">
                    <OfferBox firm={firm} />

                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center"><Info className="mr-2 h-5 w-5 text-primary" /> Firm Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            {firm.broker && <DetailItem label="Broker"><DetailBadge icon={<Briefcase className="w-4 h-4" />}>{firm.broker}</DetailBadge></DetailItem>}
                            {firm.platforms && firm.platforms.length > 0 && <DetailItem label="Platforms">{firm.platforms.map(p => <DetailBadge key={p}>{p}</DetailBadge>)}</DetailItem>}
                            {firm.paymentMethods && firm.paymentMethods.length > 0 && <DetailItem label="Payment Methods">{firm.paymentMethods.map(p => <DetailBadge key={p} icon={<CreditCard className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
                            {firm.payoutMethods && firm.payoutMethods.length > 0 && <DetailItem label="Payout Methods">{firm.payoutMethods.map(p => <DetailBadge key={p} icon={<Banknote className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
                        </CardContent>
                    </Card>
                    
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center"><CandlestickChart className="mr-2 h-5 w-5 text-primary" /> Instruments & Assets</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            {firm.instrumentTypes && firm.instrumentTypes.length > 0 && <DetailItem label="Type of Instruments">{firm.instrumentTypes.map(i => <DetailBadge key={i}>{i}</DetailBadge>)}</DetailItem>}
                            {firm.assets && firm.assets.length > 0 && <DetailItem label="Assets">{firm.assets.map(a => <DetailBadge key={a}>{a}</DetailBadge>)}</DetailItem>}
                        </CardContent>
                    </Card>

                    {firm.tradingRules && (
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Trading Rules</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <TradingRulesContent rules={firm.tradingRules} />
                            </CardContent>
                        </Card>
                    )}

                    {firm.restrictedCountries && firm.restrictedCountries.length > 0 && (
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center"><Ban className="mr-2 h-5 w-5 text-primary" /> Restricted Countries</CardTitle>
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

            {/* Sticky Footer CTA */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm p-3 border-t">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <div className="w-10 h-10 relative flex-shrink-0">
                           <Image src={firm.logoUrl} alt={`${firm.name} logo`} fill={true} style={{objectFit: 'contain'}} data-ai-hint="company logo" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                           <span className="text-sm font-bold text-foreground truncate">{firm.name}</span>
                           {firm.offerBadgeLabel && <Badge variant="secondary" className="text-xs w-fit">{firm.offerBadgeLabel}</Badge>}
                        </div>
                    </div>
                     <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent-hover flex-shrink-0">
                        <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                            Claim <ExternalLink className="ml-1.5 h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FirmMiniDetailMobile;
