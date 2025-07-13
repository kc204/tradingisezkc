
'use client';

import type { PropFirm } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import FirmSearchFilter, { type Filters } from '@/components/compare/FirmSearchFilter';

const ComparisonTable = ({ firms }: { firms: PropFirm[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollLeft > 10);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuresToCompare = [
    {
      label: 'Account Sizes',
      getValue: (f: PropFirm) => {
        const min = f.minAccountSize;
        const max = f.maxAccountSize;
        if (min && max) {
          if (min === max) return `$${min.toLocaleString()}`;
          return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
        } else if (min) {
          return `From $${min.toLocaleString()}`;
        } else if (max) {
          return `Up to $${max.toLocaleString()}`;
        }
        return f.id.startsWith('placeholder-') ? '' : '-';
      }
    },
    {
      label: 'Evaluation Cost',
      getValue: (f: PropFirm) => {
        const min = f.minChallengeCost;
        const max = f.maxChallengeCost;
        if (min && max) {
          if (min === max) return `$${min.toLocaleString()}`;
          return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
        } else if (min) {
          return `From $${min.toLocaleString()}`;
        } else if (max) {
          return `Up to $${max.toLocaleString()}`;
        }
        return f.id.startsWith('placeholder-') ? '' : '-';
      }
    },
    {
      label: 'Activation Fee',
      getValue: (f: PropFirm) => f.activationFee || (f.id.startsWith('placeholder-') ? '' : '-')
    },
    { label: 'Profit Split', getValue: (f: PropFirm) => f.profitSplit || (f.id.startsWith('placeholder-') ? '' : '-') },
    { label: 'Max Funding', getValue: (f: PropFirm) => f.maxAccountSize ? `$${f.maxAccountSize.toLocaleString()}` : (f.id.startsWith('placeholder-') ? '' : '-') },
    { label: 'Challenge Type', getValue: (f: PropFirm) => f.challengeType || (f.id.startsWith('placeholder-') ? '' : '-') },
    { label: 'Drawdown Rules', getValue: (f: PropFirm) => f.drawdownRules || (f.id.startsWith('placeholder-') ? '' : '-') },
    { label: 'Profit Goal', getValue: (f: PropFirm) => f.profitTarget || (f.id.startsWith('placeholder-') ? '' : '-') },
    { label: 'Platforms', getValue: (f: PropFirm) => f.platforms?.join(', ') || (f.id.startsWith('placeholder-') ? '' : '-') },
    {
      label: 'Rating',
      getValue: (f: PropFirm) => {
        if (f.id.startsWith('placeholder-')) return '';
        if (!f.rating) return '-';
        const roundedRating = Math.round(f.rating || 0);
        return (
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < roundedRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
              />
            ))}
            <span className="ml-1.5 text-xs md:text-sm text-foreground">{f.rating.toFixed(1)}/5</span>
          </div>
        );
      }
    },
  ];

  return (
    <div ref={tableContainerRef} className="w-full overflow-x-auto border rounded-lg">
      <Table className="min-w-[1200px] border-separate border-spacing-0">
        <TableCaption>
          Disclosure: We may earn a commission if you sign up through our links. This does not affect our reviews or rankings.
        </TableCaption>
        <TableHeader className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg">
          <TableRow>
            <TableHead className="sticky left-0 bg-card/80 backdrop-blur-lg z-30 min-w-[200px] md:min-w-[250px] text-foreground font-semibold uppercase text-[10px] md:text-xs">
               <div className="flex relative">
                Firm
                <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
              </div>
            </TableHead>
            {featuresToCompare.map(feature => (
              <TableHead key={feature.label} className="text-center min-w-[150px] whitespace-nowrap text-foreground uppercase text-[10px] md:text-xs relative">
                <div className="flex justify-center items-center">
                    {feature.label}
                    <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
                </div>
              </TableHead>
            ))}
            <TableHead className="text-center min-w-[120px] text-foreground uppercase text-[10px] md:text-xs relative">
                <div className="flex justify-center">
                    Website
                    <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
                </div>
            </TableHead>
            <TableHead className="text-center min-w-[120px] text-foreground uppercase text-[10px] md:text-xs">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firms.map(firm => (
            <TableRow key={firm.id}>
              <TableCell className="font-medium sticky left-0 z-10 bg-card p-2">
                 <div className="flex items-center gap-2 md:gap-3">
                    {firm.logoUrl && !firm.id.startsWith('placeholder-') ? (
                        <div className="w-12 h-12 relative flex-shrink-0 flex items-center justify-center rounded-lg bg-background/50 border">
                        <Image src={firm.logoUrl} alt={`${firm.name} logo`} layout="fill" objectFit="contain" className="p-1" data-ai-hint="company logo"/>
                        </div>
                    ) : <div className="w-12 h-12 flex-shrink-0"></div>}
                    
                    <div className={cn(
                        "flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out",
                        isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
                    )}>
                        <Link href={`/firms/${firm.slug}`} className="text-foreground text-sm font-semibold whitespace-nowrap hover:underline line-clamp-1">
                            {firm.name}
                        </Link>
                        {firm.offerBadgeLabel && !firm.id.startsWith('placeholder-') && (
                        <Badge variant="secondary" className="mt-1 w-fit whitespace-nowrap">
                            {firm.offerBadgeLabel}
                        </Badge>
                        )}
                    </div>
                 </div>
              </TableCell>
              {featuresToCompare.map(feature => (
                <TableCell key={`${firm.id}-${feature.label}`} className="text-center text-xs md:text-sm text-muted-foreground">
                  {feature.getValue(firm)}
                </TableCell>
              ))}
              <TableCell className="text-center">
                {firm.websiteUrl && !firm.id.startsWith('placeholder-') ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={firm.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink className="ml-1.5 h-3 w-3" />
                    </Link>
                  </Button>
                ) : firm.id.startsWith('placeholder-') ? '' : '-'}
              </TableCell>
              <TableCell className="text-center">
                 {firm.slug && !firm.id.startsWith('placeholder-') ? (
                    <Button asChild variant="outline" size="sm">
                    <Link href={`/firms/${firm.slug}`}>Details</Link>
                    </Button>
                 ) : firm.id.startsWith('placeholder-') ? '' : '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export default function ComparisonPageClient({ allFirms }: { allFirms: PropFirm[] }) {
  const [filters, setFilters] = useState<Filters>({});

  const filteredFirms = useMemo(() => {
    return allFirms.filter(firm => {
      // Search term filter
      if (filters.searchTerm) {
        if (!firm.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
          return false;
        }
      }
      // Platform filter (multi-select)
      if (filters.platforms && filters.platforms.length > 0) {
        if (!filters.platforms.every(p => firm.platforms?.includes(p))) {
          return false;
        }
      }
      // Funding model filter
      if (filters.fundingModel) {
        if (!firm.fundingModels?.includes(filters.fundingModel)) {
          return false;
        }
      }
      // Max account size filter
      if (filters.maxAccountSize) {
        if (!firm.maxAccountSize || firm.maxAccountSize < filters.maxAccountSize) {
          return false;
        }
      }
      return true;
    });
  }, [allFirms, filters]);


  return (
    <>
      <FirmSearchFilter allFirms={allFirms} onFilterChange={setFilters} />
      {filteredFirms.length > 0 ? (
        <ComparisonTable firms={filteredFirms} />
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No firms available for comparison matching your criteria.</p>
      )}
    </>
  );
}
