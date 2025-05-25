
import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import { mockArticles, mockPropFirms } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { StarBorder } from "@/components/ui/star-border";

export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured).slice(0, 3);
  const recentArticles = mockArticles.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image 
            src="https://placehold.co/1200x600.png" // Optional background image
            alt="Trading desk background" 
            layout="fill" 
            objectFit="cover" 
            quality={75}
            priority
            data-ai-hint="trading finance"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unlock Your Trading Potential with TradingisEZ: Get Funded.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tired of risking your own capital or sifting through confusing prop firm options? TradingisEZ helps you discover top-rated firms, master the rules, access exclusive deals, and secure your funded account with confidence.
          </p>
          <div className="space-x-4">
            <StarBorder<typeof Link>
              as={Link}
              href="/firms"
              className="text-lg"
            >
              Find Your Firm Now
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Featured Prop Firms Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Featured Prop Firms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFirms.map(firm => (
              <FirmCard key={firm.id} firm={firm} />
            ))}
          </div>
          <div className="text-center mt-10">
            <StarBorder<typeof Link>
              as={Link}
              href="/firms"
            >
              View All Firms
            </StarBorder>
          </div>
        </div>
      </section>

      {/* Recent Articles & Guides Section */}
      <section className="py-12 bg-muted/50 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Latest Insights &amp; Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-10">
            <StarBorder<typeof Link>
              as={Link}
              href="/resources"
            >
              Explore All Resources
            </StarBorder>
          </div>
        </div>
      </section>
    </div>
  );
}
