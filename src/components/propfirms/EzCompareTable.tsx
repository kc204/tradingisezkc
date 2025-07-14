
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Star, ChevronsUpDown, Copy, ExternalLink, Info } from 'lucide-react';
import type { PropFirm } from '@/lib/types';
import { mockPropFirms } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

// --- MOCK DATA ADAPTATION (to use existing app structure) ---
const MOCK_FIRMS_DATA_ADAPTED = mockPropFirms.map((firm, index) => ({
  ...firm,
  trustpilotRating: firm.rating || 0,
  trustpilotReviewCount: (firm.rating ? Math.floor(firm.rating * 250) : 50) + index * 10, // Deterministic mock count
  countryCode: 'US', // Mocking country code
  yearFounded: 2020 - (index % 5), // Deterministic founding year
  assets: firm.tradableInstruments || ['Futures'],
  maxAllocation: firm.maxAccountSize || 0,
  promoCode: firm.promo ? firm.promo.split(' ')[0] : 'EZPROMO',
  promoDiscount: firm.offerBadgeLabel || 'Discount Available',
  isNew: index > mockPropFirms.length - 3, // Make last two new
  isPopular: firm.isFeatured || false,
  payoutFrequency: 'Bi-Weekly', // Mock data
  hasNoTimeLimits: index % 2 === 0, // Deterministic
  isInstant: index % 3 === 0, // Deterministic
}));


// --- Helper Functions ---
const calculateEzScore = (firm: any) => {
  let score = 0;
  score += (firm.trustpilotRating / 5) * 50;
  score += (Math.min(firm.trustpilotReviewCount, 1000) / 1000) * 20;
  score += (Math.min(firm.maxAllocation, 1000000) / 1000000) * 15;
  const years = new Date().getFullYear() - firm.yearFounded;
  score += (Math.min(years, 10) / 10) * 15;
  return Math.round(score);
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// --- Child Components ---

const ControlBar = ({ searchTerm, setSearchTerm, activeFilters, toggleFilter, filteredCount, totalCount }: any) => (
  <div className="space-y-4 mb-6">
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold text-foreground mr-2">EZ Filters:</span>
        <Button onClick={() => toggleFilter('isPopular')} variant={activeFilters.isPopular ? 'default' : 'outline'}>Popular</Button>
        <Button onClick={() => toggleFilter('isNew')} variant={activeFilters.isNew ? 'default' : 'outline'}>New</Button>
        <Button onClick={() => toggleFilter('hasNoTimeLimits')} variant={activeFilters.hasNoTimeLimits ? 'default' : 'outline'}>No Time Limits</Button>
        <Button onClick={() => toggleFilter('isInstant')} variant={activeFilters.isInstant ? 'default' : 'outline'}>Instant Funding</Button>
      </div>
      <div className="relative flex-grow md:flex-grow-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search firms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 pl-10"
        />
      </div>
    </div>
    <h2 className="text-xl font-bold tracking-tight text-foreground">
      Firms <span className="ml-1 text-primary">Showing {filteredCount} of {totalCount}</span>
    </h2>
  </div>
);

const FirmsTable = ({ firms, requestSort, sortConfig }: any) => {
  const getSortIndicator = (key: string) => {
    if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4" />;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table className="hidden md:table">
        <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur-lg">
          <TableRow>
            {['Firm', 'EZ Score', 'Trustpilot', 'Founded', 'Platforms', 'Max Funding', 'Offer / Discount', 'Action'].map(header => (
              <TableHead key={header}>
                <Button variant="ghost" onClick={() => requestSort(header.toLowerCase().replace(/ /g, ''))} className="flex items-center gap-2 px-0 hover:bg-transparent">
                  {header}
                  <span>{getSortIndicator(header.toLowerCase().replace(/ /g, ''))}</span>
                </Button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {firms.map((firm: any) => <FirmRow key={firm.id} firm={firm} />)}
        </TableBody>
      </Table>
      <div className="md:hidden space-y-4 p-4">
          {firms.map((firm: any) => <FirmCard key={firm.id} firm={firm} />)}
      </div>
    </div>
  );
};

const FirmRow = ({ firm }: { firm: any }) => {
    const { toast } = useToast();
    const ezScore = useMemo(() => calculateEzScore(firm), [firm]);
    const yearsInOperation = new Date().getFullYear() - firm.yearFounded;

    const copyPromoCode = () => {
        navigator.clipboard.writeText(firm.promoCode);
        toast({ title: "Copied!", description: `Promo code "${firm.promoCode}" copied to clipboard.` });
    };

  return (
    <TableRow className="hover:bg-muted/50 transition-colors">
      <TableCell>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <Image className="h-12 w-12 rounded-lg object-contain" src={firm.logoUrl} alt={`${firm.name} logo`} width={48} height={48} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-foreground">{firm.name}</div>
            <div className="text-xs text-muted-foreground">{firm.countryCode}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${ezScore > 80 ? 'text-green-400' : ezScore > 70 ? 'text-yellow-400' : 'text-red-400'}`}>{ezScore}</span>
                        <Info className="h-4 w-4 text-muted-foreground" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Combines Trustpilot rating ({firm.trustpilotRating}), reviews ({firm.trustpilotReviewCount}), max funding, and years in business.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
          <span className="text-sm text-foreground">{firm.trustpilotRating}</span>
        </div>
        <div className="text-xs text-muted-foreground">{firm.trustpilotReviewCount} reviews</div>
      </TableCell>
      <TableCell>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center text-sm text-foreground">
                        {firm.yearFounded}
                        <Info className="h-4 w-4 text-muted-foreground ml-2" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Established {yearsInOperation} year{yearsInOperation !== 1 ? 's' : ''} ago.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1 flex-wrap">
          {firm.platforms.slice(0, 2).map((p: string) => <div key={p} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">{p}</div>)}
          {firm.platforms.length > 2 && <div className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">+{firm.platforms.length - 2}</div>}
        </div>
      </TableCell>
      <TableCell>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center text-sm text-foreground">
                        {formatCurrency(firm.maxAllocation)}
                        <Info className="h-4 w-4 text-muted-foreground ml-2" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>The maximum amount of capital a trader can manage with this firm.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <Button onClick={copyPromoCode} variant="outline" size="sm" className="bg-accent/10 border-accent/30 text-accent hover:bg-accent/20">
          <span>{firm.promoDiscount}</span>
          <Copy className="h-4 w-4 ml-2" />
        </Button>
      </TableCell>
      <TableCell>
        <Button asChild>
            <a href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
            Visit Firm <ExternalLink className="h-4 w-4 ml-2" />
            </a>
        </Button>
      </TableCell>
    </TableRow>
  );
};

const FirmCard = ({ firm }: { firm: any }) => {
    const { toast } = useToast();
    const ezScore = useMemo(() => calculateEzScore(firm), [firm]);
    
    const copyPromoCode = () => {
        navigator.clipboard.writeText(firm.promoCode);
        toast({ title: "Copied!", description: `Promo code "${firm.promoCode}" copied to clipboard.` });
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Image className="h-14 w-14 rounded-lg object-contain" src={firm.logoUrl} alt={`${firm.name} logo`} width={56} height={56}/>
                        <div>
                            <CardTitle className="text-lg">{firm.name}</CardTitle>
                            <CardDescription>{firm.countryCode} - Est. {firm.yearFounded}</CardDescription>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground">EZ Score</p>
                        <p className={`text-2xl font-bold ${ezScore > 80 ? 'text-green-400' : ezScore > 70 ? 'text-yellow-400' : 'text-red-400'}`}>{ezScore}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">Trustpilot</p>
                        <div className="flex items-center text-foreground"><Star className="h-4 w-4 text-yellow-400 fill-current mr-1" /> {firm.trustpilotRating} ({firm.trustpilotReviewCount} reviews)</div>
                    </div>
                     <div>
                        <p className="text-muted-foreground">Max Funding</p>
                        <p className="text-foreground font-semibold">{formatCurrency(firm.maxAllocation)}</p>
                    </div>
                </div>
                <div>
                    <p className="text-muted-foreground text-sm">Platforms</p>
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                        {firm.platforms.map((p: string) => <div key={p} className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">{p}</div>)}
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-4 pt-2">
                    <Button onClick={copyPromoCode} variant="outline" className="w-full">
                      <span>{firm.promoDiscount}</span>
                      <Copy className="h-4 w-4 ml-2" />
                    </Button>
                     <Button asChild className="w-full">
                        <a href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Visit Firm <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};


export default function EzCompareTable() {
  const [firms, setFirms] = useState(MOCK_FIRMS_DATA_ADAPTED);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [sortConfig, setSortConfig] = useState({ key: 'ezscore', direction: 'descending' });

  const filteredAndSortedFirms = useMemo(() => {
    let filtered = [...firms];

    if (searchTerm) {
      filtered = filtered.filter(firm =>
        firm.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    Object.keys(activeFilters).forEach(filterKey => {
        if (activeFilters[filterKey]) {
            filtered = filtered.filter(firm => (firm as any)[filterKey]);
        }
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue, bValue;
        
        if (sortConfig.key === 'ezscore') {
            aValue = calculateEzScore(a);
            bValue = calculateEzScore(b);
        } else if (sortConfig.key === 'firm') {
            aValue = a.name;
            bValue = b.name;
        } else if (sortConfig.key === 'trustpilot') {
            aValue = (a as any).trustpilotRating;
            bValue = (b as any).trustpilotRating;
        } else if (sortConfig.key === 'maxfunding') {
            aValue = (a as any).maxAllocation;
            bValue = (b as any).maxAllocation;
        } else {
            aValue = (a as any)[sortConfig.key];
            bValue = (b as any)[sortConfig.key];
        }

        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [firms, searchTerm, activeFilters, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const toggleFilter = (filter: string) => {
      setActiveFilters((prev: any) => ({...prev, [filter]: !prev[filter]}));
  };

  if (loading) {
    return (
      <div className="text-center p-8">
        <p>Loading Prop Firm Data...</p>
      </div>
    );
  }

  return (
    <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold tracking-tight">Advanced Prop Firm Comparison</CardTitle>
          <CardDescription className="text-lg">The EZ-iest Way to Compare Prop Firms.</CardDescription>
        </CardHeader>
        <CardContent>
          <ControlBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            filteredCount={filteredAndSortedFirms.length}
            totalCount={firms.length}
          />
          <FirmsTable 
            firms={filteredAndSortedFirms} 
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
        </CardContent>
    </Card>
  );
}
