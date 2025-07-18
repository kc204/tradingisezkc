
'use client'; 

import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import FreeResourceCard from '@/components/shared/FreeResourceCard';
import { mockArticles, mockPropFirms, mockFreeResources } from '@/lib/mockData';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from 'react';
import TradingViewWidget from '@/components/shared/TradingViewWidget';
import ComparisonTable from '@/components/compare/ComparisonTable';


export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured);
  const recentArticles = mockArticles.slice(0, 3);
  const featuredFreeResources = mockFreeResources.filter(r => r.isFeatured).slice(0, 3);
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className={cn("text-2xl md:text-4xl text-foreground relative z-20 text-center px-4")}>
          Unlock Your Trading Potential: Find the Perfect Prop Firm &amp; Get Funded.
        </h1>
        <p className="text-center mt-4 text-muted-foreground relative z-20 max-w-2xl px-4 text-sm md:text-base">
          Tired of risking your own capital or sifting through confusing prop firm options? Discover top-rated firms, master the rules, access exclusive deals, and secure your funded account with confidence.
        </p>
        <div className="mt-8 relative z-20">
          <StarBorder<typeof Link>
            as={Link}
            href="/compare"
          >
            Compare All Prop Firms
          </StarBorder>
        </div>
      </div>

      {/* Featured Prop Firms Section START */}
      {featuredFirms.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Featured Prop Firms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredFirms.map(firm => (
                <FirmCard key={firm.id} firm={firm} />
              ))}
            </div>
            
          </div>
        </section>
      )}
      {/* Featured Prop Firms Section END */}

      {/* Comparison Table Section */}
      <section className="py-12">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-foreground mb-10">Compare All Firms</h2>
              <ComparisonTable firms={mockPropFirms} />
              <div className="text-center mt-10">
                <StarBorder<typeof Link>
                    as={Link}
                    href="/compare"
                >
                    Go to Full Comparison Page
                </StarBorder>
            </div>
          </div>
      </section>

      {/* Featured Free Resources Section START */}
      {featuredFreeResources.length > 0 && (
        <section className="py-12 bg-card rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Explore Our Free Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredFreeResources.map(resource => (
                <FreeResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
            <div className="text-center mt-10">
              <StarBorder<typeof Link>
                as={Link}
                href="/free-resources"
              >
                View All Free Resources
              </StarBorder>
            </div>
          </div>
        </section>
      )}
      {/* Featured Free Resources Section END */}

    </div>
  );
}
