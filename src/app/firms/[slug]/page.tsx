
import { mockPropFirms } from '@/lib/mockData';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import OfferBox from '@/components/propfirms/OfferBox';
import { ExternalLink, Info, Star, ThumbsUp, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import TrueCostCalculator from '@/components/compare/TrueCostCalculator'; // Import the calculator

interface FirmDetailPageProps {
  params: { slug: string };
}

// Generate static paths for firms
export async function generateStaticParams() {
  return mockPropFirms.map(firm => ({
    slug: firm.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: FirmDetailPageProps) {
  const firm = mockPropFirms.find(p => p.slug === params.slug);
  if (!firm) {
    return { title: 'Firm Not Found' };
  }
  return {
    title: `${firm.name} Review | TradingisEZ`,
    description: `In-depth review of ${firm.name}: funding, rules, profit split, and more. ${firm.briefDescription}`,
  };
}


const FirmDetailPage = ({ params }: FirmDetailPageProps) => {
  const firm = mockPropFirms.find(p => p.slug === params.slug);

  if (!firm) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="relative py-8 md:py-12 bg-card rounded-xl shadow-xl overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center text-center md:text-left">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-20 md:w-48 md:h-24 relative">
                <Image 
                  src={firm.logoUrl} 
                  alt={`${firm.name} logo`} 
                  layout="fill" 
                  objectFit="contain"
                  data-ai-hint="company logo" 
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{firm.name}</h1>
              <p className="text-md md:text-lg text-muted-foreground mb-4">{firm.briefDescription}</p>
              {firm.rating && (
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 ${i < Math.round(firm.rating || 0) ? 'text-yellow-400 fill-current' : 'text-muted-foreground/50'}`} />
                  ))}
                  <span className="ml-2 text-md md:text-lg font-semibold text-foreground">{firm.rating.toFixed(1)} / 5.0</span>
                </div>
              )}
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Visit {firm.name} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                (Affiliate Link)
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {firm.fullReview && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Full Review</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>{firm.fullReview}</p>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {firm.pros && firm.pros.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center"><ThumbsUp className="mr-2 h-5 w-5 text-primary" /> Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-none space-y-2">
                    {firm.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <ThumbsUp className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {firm.cons && firm.cons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-secondary" /> Things to consider</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-none space-y-2">
                    {firm.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <Lightbulb className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Info className="mr-2 h-5 w-5 text-primary" /> Firm Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {firm.fundingModels && <p><strong className="text-muted-foreground">Funding Models:</strong> {firm.fundingModels.join(', ')}</p>}
              {firm.profitSplit && <p><strong className="text-muted-foreground">Profit Split:</strong> {firm.profitSplit}</p>}
              {firm.drawdownRules && <p><strong className="text-muted-foreground">Drawdown Rules:</strong> {firm.drawdownRules}</p>}
              {firm.profitTarget && <p><strong className="text-muted-foreground">Profit Target:</strong> {firm.profitTarget}</p>}
              {firm.minAccountSize && <p><strong className="text-muted-foreground">Min. Account:</strong> ${firm.minAccountSize.toLocaleString()}</p>}
              {firm.maxAccountSize && <p><strong className="text-muted-foreground">Max. Account:</strong> ${firm.maxAccountSize.toLocaleString()}</p>}
              {firm.tradableInstruments && <p><strong className="text-muted-foreground">Instruments:</strong> {firm.tradableInstruments.join(', ')}</p>}
              {firm.platforms && <p><strong className="text-muted-foreground">Platforms:</strong> {firm.platforms.join(', ')}</p>}
            </CardContent>
          </Card>
        </div>

        <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24">
          <OfferBox firm={firm} />
          <TrueCostCalculator singleFirm={firm} /> 
        </aside>
      </div>
    </div>
  );
};

export default FirmDetailPage;
