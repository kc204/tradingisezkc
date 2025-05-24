
import { mockPropFirms } from '@/lib/mockData';
import type { PropFirm } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Check, ExternalLink, X, Star } from 'lucide-react'; // Added Star

export const metadata = {
  title: 'Compare Prop Firms | Prop Firm Finder',
  description: 'Side-by-side comparison of leading proprietary trading firms.',
};

const ComparisonTable = ({ firms }: { firms: PropFirm[] }) => {
  const featuresToCompare = [
    { label: 'Profit Split', getValue: (f: PropFirm) => f.profitSplit || '-' },
    { label: 'Max Funding', getValue: (f: PropFirm) => f.maxAccountSize ? `$${f.maxAccountSize.toLocaleString()}` : '-' },
    { label: 'Challenge Type', getValue: (f: PropFirm) => f.challengeType || '-' },
    { label: 'Drawdown Rules', getValue: (f: PropFirm) => f.drawdownRules || '-' },
    { label: 'Platforms', getValue: (f: PropFirm) => f.platforms?.join(', ') || '-' },
    { 
      label: 'Rating', 
      getValue: (f: PropFirm) => {
        if (!f.rating) return '-';
        return (
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.round(f.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} 
              />
            ))}
            <span className="ml-1.5">{f.rating.toFixed(1)}/5</span>
          </div>
        );
      } 
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[950px]">
        <TableHeader>
          <TableRow>
            <TableHead className="sticky left-0 bg-card z-10 min-w-[200px]">Firm</TableHead>
            {featuresToCompare.map(feature => (
              <TableHead key={feature.label} className="text-center min-w-[150px]">{feature.label}</TableHead>
            ))}
            <TableHead className="text-center min-w-[150px]">Website</TableHead>
            <TableHead className="text-center min-w-[150px]">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firms.map(firm => (
            <TableRow key={firm.id}>
              <TableCell className="font-medium sticky left-0 bg-card z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-8 relative">
                    <Image src={firm.logoUrl} alt={`${firm.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo" />
                  </div>
                  <span>{firm.name}</span>
                </div>
                {firm.offerBadgeLabel && <Badge variant="secondary" className="mt-1">{firm.offerBadgeLabel}</Badge>}
              </TableCell>
              {featuresToCompare.map(feature => (
                <TableCell key={`${firm.id}-${feature.label}`} className="text-center">
                  {feature.getValue(firm)}
                </TableCell>
              ))}
              <TableCell className="text-center">
                <Button asChild variant="outline" size="sm">
                  <Link href={firm.websiteUrl} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/firms/${firm.slug}`}>View Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export default function ComparePage() {
  // Select a few firms for comparison, or allow user selection in a future version
  const firmsToCompare = mockPropFirms.slice(0, 3); 

  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Compare Prop Firms</h1>
        <p className="text-lg text-primary-foreground/90">Make informed decisions by comparing key features side-by-side.</p>
      </section>
      
      {firmsToCompare.length > 0 ? (
        <ComparisonTable firms={firmsToCompare} />
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No firms available for comparison.</p>
      )}
      
      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/firms">Explore All Firms</Link>
        </Button>
      </div>
    </div>
  );
}
