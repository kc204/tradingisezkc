import type { Article } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {article.featuredImageUrl && (
        <div className="relative w-full h-48">
          <Image 
            src={article.featuredImageUrl} 
            alt={article.title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="article blog" 
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-1">
          <Badge variant="outline">{article.category}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="w-3.5 h-3.5 mr-1" />
            {new Date(article.publishedDate).toLocaleDateString()}
          </div>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3">{article.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="link" className="text-primary p-0">
          <Link href={`/resources/${article.category.toLowerCase()}/${article.slug}`}>
            Read More <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
