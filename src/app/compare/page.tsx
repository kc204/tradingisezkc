
import { mockPropFirms } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TrueCostCalculator from '@/components/compare/TrueCostCalculator';
import ComparisonPageClient from '@/components/compare/ComparisonPageClient';

export const metadata = {
  title: 'Compare Prop Firms | TradingisEZ',
  description: 'Side-by-side comparison of leading proprietary trading firms on TradingisEZ.',
};

export default function ComparePage() {

  return (
    <div className="space-y-8">
      <section className="text-center py-6 md:py-10 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Compare Prop Firms</h1>
        <p className="text-md md:text-lg text-muted-foreground px-4">Make informed decisions by comparing key features side-by-side.</p>
      </section>
      
      <ComparisonPageClient allFirms={mockPropFirms} />

      <section className="py-8">
        <TrueCostCalculator firms={mockPropFirms} />
      </section>
      
      <div className="text-center mt-8">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
          <Link href="/firms">Explore All Firms</Link>
        </Button>
      </div>
    </div>
  );
}
