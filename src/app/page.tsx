
import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import { mockArticles, mockPropFirms } from '@/lib/mockData';
import Link from 'next/link';
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured).slice(0, 3);
  const recentArticles = mockArticles.slice(0, 3);

  const economicCalendarWidgetHtml = `
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" style="height:600px;width:100%;">
  <div class="tradingview-widget-container__widget" style="height:100%;width:100%;"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async>
  {
  "colorTheme": "dark",
  "isTransparent": false,
  "width": "100%",
  "height": "600",
  "locale": "en",
  "importanceFilter": "-1,0,1",
  "currencyFilter": "USD,EUR,JPY,GBP,CAD,AUD,CHF,CNY,KRW"
}
  </script>
</div>
<!-- TradingView Widget END -->
  `;

  const chartsWidgetHtml = `
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" style="height:600px;width:100%;">
  <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%;"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
  {
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
    "support_host": "https://www.tradingview.com"
  }
  </script>
</div>
<!-- TradingView Widget END -->
  `;

  const newsWidgetHtml = `
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" style="height:700px;width:100%;">
  <div class="tradingview-widget-container__widget" style="height:100%;width:100%;"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
  {
  "feedMode": "all_symbols",
  "colorTheme": "dark",
  "isTransparent": false,
  "displayMode": "regular",
  "width": "100%",
  "height": 700,
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
  `;

  return (
    <div className="space-y-16">
      {/* Updated Hero Section with BackgroundBoxes */}
      <div className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-foreground relative z-20 text-center px-4")}>
          Unlock Your Trading Potential: Find the Perfect Prop Firm & Get Funded.
        </h1>
        <p className="text-center mt-4 text-muted-foreground relative z-20 max-w-2xl px-4">
          Tired of risking your own capital or sifting through confusing prop firm options? Discover top-rated firms, master the rules, access exclusive deals, and secure your funded account with confidence.
        </p>
        <div className="mt-8 relative z-20">
          <StarBorder<typeof Link>
            as={Link}
            href="/firms"
          >
            Find Your Firm Now
          </StarBorder>
        </div>
      </div>

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
      </section> {/* Featured Prop Firms Section END */}

      {/* Market Outlook Section START */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Market Outlook</h2>
          <Tabs defaultValue="economic-calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="economic-calendar">Economic Calendar</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            <TabsContent value="economic-calendar">
              <div className="mt-4 rounded-lg overflow-hidden bg-card p-1 md:p-2">
                <div dangerouslySetInnerHTML={{ __html: economicCalendarWidgetHtml }} />
              </div>
            </TabsContent>
            <TabsContent value="charts">
              <div className="mt-4 rounded-lg overflow-hidden bg-card p-1 md:p-2">
                <div dangerouslySetInnerHTML={{ __html: chartsWidgetHtml }} />
              </div>
            </TabsContent>
            <TabsContent value="news">
              <div className="mt-4 rounded-lg overflow-hidden bg-card p-1 md:p-2">
                <div dangerouslySetInnerHTML={{ __html: newsWidgetHtml }} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Market Outlook Section END */}

      {/* Recent Articles & Guides Section */}
      <section className="py-12 bg-card rounded-xl">
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
