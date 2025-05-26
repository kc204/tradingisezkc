
'use client';

import type { FreeResourceItem } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Film, Headphones, MicVocal } from 'lucide-react'; // Added Film, Headphones

interface FreeResourceCardProps {
  resource: FreeResourceItem;
}

const ResourceTypeIcon = ({ type }: { type: FreeResourceItem['resourceType'] }) => {
  switch (type) {
    case 'Free Video Course Series':
      return <Film className="w-4 h-4 mr-1.5" />;
    case 'Audiobook Trial Offer':
      return <Headphones className="w-4 h-4 mr-1.5" />;
    case 'PDF Guide':
      return <Download className="w-4 h-4 mr-1.5" />;
    case 'Free Tool/Trial':
      return <MicVocal className="w-4 h-4 mr-1.5" />; // Using MicVocal as a generic "tool/trial" icon
    default:
      return null;
  }
};

const FreeResourceCard = ({ resource }: FreeResourceCardProps) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-card">
      {resource.coverImage && (
        <div className="relative w-full h-48">
          <Image
            src={resource.coverImage}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="resource cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-1">
          <Badge variant="secondary" className="flex items-center">
            <ResourceTypeIcon type={resource.resourceType} />
            {resource.resourceType}
          </Badge>
          {/* Optionally, add author or other small meta info here */}
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2 text-foreground">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {resource.pageIntroduction && (
          <CardDescription className="text-sm line-clamp-3 text-muted-foreground">
            {resource.pageIntroduction}
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
          {/* Ensure the link opens in a new tab if it's an external affiliate link */}
          <Link href={resource.mainAffiliateLink} target={resource.mainAffiliateLink.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
            {resource.mainCTAText || 'Learn More'} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FreeResourceCard;
