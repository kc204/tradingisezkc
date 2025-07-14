'use client'; 

import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import FreeResourceCard from '@/components/shared/FreeResourceCard';
import { mockArticles, mockPropFirms, mockFreeResources } from '@/lib/mockData';
import Link from 'next/link';
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from 'react';
import TradingViewWidget from '@/components/shared/TradingViewWidget';
import ComparisonTable from '@/components/compare/ComparisonTable';
import EzCompareTable from '@/components/propfirms/EzCompareTable';


export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured);
  const recentArticles = mockArticles.slice(0, 3);
  const featuredFreeResources = mockFreeResources.filter(r => r.isFeatured).slice(0, 3);
  
  const economicCalendarScriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
  const economicCalendarConfig = {
    "colorTheme": "dark",
    "isTransparent": false, 
    "width": "100%",
    "height": "100%",
    "locale": "en",
    "importanceFilter": "-1,0,1",
    "currencyFilter": "USD,EUR,JPY,GBP,CAD,AUD,CHF,CNY,KRW"
  };
  const economicCalendarContainerStyles = { height: '500px', width: '100%' };

  const chartsScriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  const chartsConfig = {
    "autosize": true,
    "symbol": "BITSTAMP:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "calendar": false,
    "support_host": "https://www.tradingview.com",
    "backgroundColor": "rgba(0,0,0,0)", 
    "gridColor": "rgba(255,255,255,0.05)", 
  };
  const chartContainerStyles = { height: '500px', width: '100%' };

  const newsScriptSrc = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
  const newsConfig = {
    "feedMode": "all_symbols",
    "colorTheme": "dark",
    "isTransparent": false, 
    "displayMode": "regular",
    "width": "100%",
    "height": "100%",
    "locale": "en"
  };
  const newsContainerStyles = { height: '600px', width: '100%' };

  const tradingViewAffiliateLink = "https://www.tradingview.com/?aff_id=152856";
  const tradingViewLinkText = "Track all markets on TradingView";

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section with BackgroundBoxes */}
      <div className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
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

      {/* EZ Compare Table Section */}
      <section className="py-12">
        <EzCompareTable />
      </section>

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

      {/* Market Outlook Section START */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 relative z-10">
            Market Outlook
          </h2>
          {isClient && ( 
            <Tabs defaultValue="economic-calendar" className="w-full">
              <TabsList className="grid w-full grid-cols-3 relative z-20">
                <TabsTrigger value="economic-calendar">Economic Calendar</TabsTrigger>
                <TabsTrigger value="charts">Charts</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
              </TabsList>

              <TabsContent value="economic-calendar" className="relative">
                <div className="relative mt-4">
                  <div className="absolute inset-0">
                    {/* Glow effect was here - removed for this rollback */}
                  </div>
                  <div className="relative z-10 rounded-lg bg-card p-1 md:p-2" style={economicCalendarContainerStyles}>
                    <TradingViewWidget
                      scriptSrc={economicCalendarScriptSrc}
                      config={economicCalendarConfig}
                      widgetKey="calendar"
                    />
                     <div className="text-center mt-4">
                      <Link href={tradingViewAffiliateLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        {tradingViewLinkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="charts" className="relative">
                 <div className="relative mt-4">
                  <div className="absolute inset-0">
                    {/* Glow effect was here - removed for this rollback */}
                  </div>
                  <div className="relative z-10 rounded-lg bg-card p-1 md:p-2" style={chartContainerStyles}>
                    <TradingViewWidget
                      scriptSrc={chartsScriptSrc}
                      config={chartsConfig}
                      widgetKey="charts"
                    />
                     <div className="text-center mt-4">
                      <Link href={tradingViewAffiliateLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        {tradingViewLinkText}
                      </Link>
                    </div>
                  </div>
                 </div>
              </TabsContent>

              <TabsContent value="news" className="relative">
                 <div className="relative mt-4">
                  <div className="absolute inset-0">
                    {/* Glow effect was here - removed for this rollback */}
                  </div>
                  <div className="relative z-10 rounded-lg bg-card p-1 md:p-2" style={newsContainerStyles}>
                    <TradingViewWidget
                      scriptSrc={newsScriptSrc}
                      config={newsConfig}
                      widgetKey="news"
                    />
                    <div className="text-center mt-4">
                      <Link href={tradingViewAffiliateLink} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        {tradingViewLinkText}
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
      {/* Market Outlook Section END */}

    </div>
  );
}
