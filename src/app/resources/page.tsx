import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTradingResources } from "@/lib/mockData";
import { BookOpen, Wrench, Newspaper, Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Trading Resources | TradingisEZ',
  description: 'Explore guides, tools, news, and courses to enhance your trading skills on TradingisEZ.',
};

const ResourceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'Guide': return <BookOpen className="w-6 h-6 text-primary" />;
    case 'Tool': return <Wrench className="w-6 h-6 text-primary" />;
    case 'News': return <Newspaper className="w-6 h-6 text-primary" />;
    case 'Course': return <Award className="w-6 h-6 text-primary" />;
    default: return <BookOpen className="w-6 h-6 text-primary" />;
  }
};

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Trading Resources</h1>
        <p className="text-lg text-primary-foreground/90">Your hub for guides, tools, news, and courses to elevate your trading journey.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockTradingResources.map(resource => (
          <Card key={resource.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {resource.logoUrl && (
                    <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden flex-shrink-0">
                       <Image src={resource.logoUrl} alt={`${resource.name} logo`} layout="fill" objectFit="contain" data-ai-hint="company logo"/>
                    </div>
                  )}
                  <CardTitle className="text-xl">{resource.name}</CardTitle>
                </div>
                <ResourceIcon type={resource.resourceType} />
              </div>
              <CardDescription className="text-sm text-muted-foreground">{resource.resourceType}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm mb-4 min-h-[4rem]">{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-special-accent text-special-accent-foreground hover:bg-special-accent-hover">
                <Link href={resource.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Visit {resource.name} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Looking for Al Brooks Trading Course?</h2>
        <p className="text-muted-foreground mb-6">While not directly integrated, many resources here complement advanced trading strategies.</p>
        {/* You can add a specific link or section for Al Brooks if available */}
      </section>

    </div>
  );
}
