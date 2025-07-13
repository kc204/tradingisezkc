
'use client';

import type { PropFirm } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';

const ComparisonTable = ({ firms }: { firms: PropFirm[] }) => {

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
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[800px]">
        <TableCaption>
          Disclosure: We may earn a commission if you sign up through our links. This does not affect our reviews or rankings.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky left-0 bg-card z-10 min-w-[200px] text-foreground font-semibold">Firm</TableHead>
            {featuresToCompare.map(feature => (
              <TableHead key={feature.label} className="text-center min-w-[150px] whitespace-nowrap text-foreground">{feature.label}</TableHead>
            ))}
            <TableHead className="text-center min-w-[120px] text-foreground">Website</TableHead>
            <TableHead className="text-center min-w-[120px] text-foreground">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firms.map(firm => (
            <TableRow key={firm.id}>
              <TableCell className="font-medium sticky left-0 bg-card z-10">
                <div className="flex items-center space-x-3">
                  {firm.logoUrl && !firm.id.startsWith('placeholder-') ? (
                    <div className="w-16 h-8 relative flex-shrink-0">
                      <Image src={firm.logoUrl} alt={`${firm.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo"/>
                    </div>
                  ) : firm.id.startsWith('placeholder-') ? (
                    <div className="w-16 h-8 flex items-center justify-center text-muted-foreground text-xs flex-shrink-0"></div>
                  ) : <div className="w-16 h-8 flex-shrink-0"></div>}
                  <div className="flex flex-col justify-center">
                    <span className="text-foreground text-sm font-semibold whitespace-nowrap">
                      {firm.name}
                    </span>
                    {firm.offerBadgeLabel && !firm.id.startsWith('placeholder-') && (
                      <Badge variant="secondary" className="mt-1 w-fit">
                        {firm.offerBadgeLabel}
                      </Badge>
                    )}
                  </div>
                </div>
              </TableCell>
              {featuresToCompare.map(feature => (
                <TableCell key={`${firm.id}-${feature.label}`} className="text-center text-xs text-muted-foreground">
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


export default function ComparisonPageClient({ firms }: { firms: PropFirm[] }) {

  return (
    <>
      {firms.length > 0 ? (
        <ComparisonTable firms={firms} />
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No firms available for comparison.</p>
      )}
    </>
  );
}
