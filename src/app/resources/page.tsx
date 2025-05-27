
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
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
      <section className="text-center py-10 bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg"> {/* Updated gradient with new palette */}
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
                     <div className="w-12 h-12 relative mr-3 rounded-md overflow-hidden flex-shrink-0 bg-card p-1"> {/* Added bg-card for better logo visibility */}
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
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                <Link href={resource.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Visit {resource.name} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
    </div>
  );
}
