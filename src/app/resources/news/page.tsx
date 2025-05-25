
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockTradingResources } from "@/lib/mockData";
import { Newspaper, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Trading News | TradingisEZ',
  description: 'Stay updated with the latest news in the trading and financial markets on TradingisEZ.',
};

export default function NewsPage() {
  const newsSources = mockTradingResources.filter(r => r.resourceType === 'News');
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg"> {/* Consider updating gradient with new palette */}
        <div className="flex justify-center items-center mb-4">
          <Newspaper className="w-12 h-12 text-primary-foreground mr-3" />
          <h1 className="text-4xl font-bold text-primary-foreground">Trading News</h1>
        </div>
        <p className="text-lg text-primary-foreground/90">Keep your finger on the pulse of the market.</p>
      </section>
      
      {newsSources.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsSources.map(source => (
          <Card key={source.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
             <CardHeader>
               <div className="flex items-center mb-2">
                  {source.logoUrl && (
                    <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden flex-shrink-0 bg-card p-1"> {/* Added bg-card for better logo visibility if transparent */}
                       <Image src={source.logoUrl} alt={`${source.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo"/>
                    </div>
                  )}
                  <CardTitle className="text-xl">{source.name}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm mb-4 min-h-[4rem]">{source.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href={source.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Visit {source.name} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No news sources listed yet. Check back later!</p>
      )}
    </div>
  );
}
