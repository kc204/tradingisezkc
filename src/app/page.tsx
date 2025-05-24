
import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import { Button } from '@/components/ui/button';
import { mockArticles, mockPropFirms } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { StarBorder } from "@/components/ui/star-border"; // Added import

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
            Unlock Your Trading Potential: Find the Perfect Prop Firm &amp; Get Funded.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tired of risking your own capital or sifting through confusing prop firm options? Discover top-rated firms, master the rules, access exclusive deals, and secure your funded account with confidence.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-special-accent text-special-accent-foreground hover:bg-special-accent/90 px-8 py-3 text-lg">
              <Link href="/firms">Find Your Firm Now</Link>
            </Button>
            {/* Removed AI Firm Matcher button 
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/10">
              <Link href="#ai-matcher">AI Firm Matcher</Link>
            </Button>
            */}
          </div>
        </div>
      </section>

      {/* AI Firm Matcher Section REMOVED */}
      {/* 
      <section id="ai-matcher" className="py-12">
        <div className="container mx-auto px-4">
          <AiMatcher />
        </div>
      </section>
      */}

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
            <Button asChild variant="outline" size="lg">
              <Link href="/firms">View All Firms</Link>
            </Button>
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
            <Button asChild variant="default" size="lg">
              <Link href="/resources">Explore All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* StarBorder Demo Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">StarBorder Component Demo</h2>
          <div className="flex justify-center">
            <StarBorder>
              Theme-aware Border
            </StarBorder>
          </div>
        </div>
      </section>
    </div>
  );
}
