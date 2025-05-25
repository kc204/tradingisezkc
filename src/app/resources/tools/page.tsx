
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockTradingResources } from "@/lib/mockData";
import { Wrench, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Trading Tools | TradingisEZ',
  description: 'Discover useful tools to enhance your trading analysis and execution on TradingisEZ.',
};

export default function ToolsPage() {
  const tools = mockTradingResources.filter(r => r.resourceType === 'Tool');
  return (
    <div className="space-y-8">
       <section className="text-center py-10 bg-background rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-4">
          <Wrench className="w-12 h-12 text-primary mr-3" />
          <h1 className="text-4xl font-bold text-foreground">Trading Tools</h1>
        </div>
        <p className="text-lg text-muted-foreground">Essential tools to power your trading strategy.</p>
      </section>

      {tools.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map(tool => (
          <Card key={tool.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <div className="flex items-center mb-2">
                  {tool.logoUrl && (
                     <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden flex-shrink-0 bg-card p-1"> {/* Added bg-card for better logo visibility */}
                       <Image src={tool.logoUrl} alt={`${tool.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo"/>
                    </div>
                  )}
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm mb-4 min-h-[4rem]">{tool.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Visit {tool.name} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No tools listed yet. Stay tuned!</p>
      )}
    </div>
  );
}
