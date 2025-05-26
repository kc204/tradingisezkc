
'use client';

import type { FreeResourceItem, FreeResourceType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StarBorder } from '@/components/ui/star-border';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Headphones, Video, FileText, Wrench } from 'lucide-react'; // Changed Tool to Wrench

interface FreeResourceCardProps {
  resource: FreeResourceItem;
}

const ResourceTypeIcon = ({ type }: { type: FreeResourceType }) => {
  switch (type) {
    case "Free Video Course Series":
      return <Video className="w-5 h-5 mr-1.5 text-primary" />;
    case "Audiobook Trial Offer":
      return <Headphones className="w-5 h-5 mr-1.5 text-primary" />;
    case "PDF Guide":
      return <FileText className="w-5 h-5 mr-1.5 text-primary" />;
    case "Free Tool/Trial":
      return <Wrench className="w-5 h-5 mr-1.5 text-primary" />; // Changed Tool to Wrench
    default:
      return <BookOpen className="w-5 h-5 mr-1.5 text-primary" />;
  }
};


const FreeResourceCard = ({ resource }: FreeResourceCardProps) => {
  // Determine the correct link for the resource based on its slug or type
  let pageLink = `/free-resources/${resource.slug}`; // Default link construction

  // Special handling for resource types that might have different overview pages
  // This logic can be expanded if more specific top-level pages exist per type
  if (resource.resourceType === "Audiobook Trial Offer" && resource.slug === "audiobooks") {
    pageLink = "/free-resources/audiobooks";
  } else if (resource.resourceType === "Free Video Course Series" && resource.slug === "al-brooks-course") {
    pageLink = "/free-resources/al-brooks-course";
  } else if (resource.resourceType === "PDF Guide" && resource.slug === "prop-firm-checklist-pdf") {
    // Assuming PDF guides might eventually link to a generic /resources/guides or a specific page
    // For now, let's use the constructed slug, but this could be refined.
    // Example: pageLink = "/resources/guides/" + resource.slug;
  }


  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {resource.coverImage && (
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={resource.coverImage}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="resource cover"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center mb-1.5">
          <ResourceTypeIcon type={resource.resourceType} />
          <Badge variant="outline" className="text-xs">{resource.resourceType}</Badge>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2 text-foreground">
          <Link href={pageLink} className="hover:text-primary transition-colors">
            {resource.title}
          </Link>
        </CardTitle>
        {resource.author && (
           <p className="text-xs text-muted-foreground">By {resource.author}</p>
        )}
      </CardHeader>
      <CardContent className="flex-grow pt-1">
        {resource.pageIntroduction && (
          <CardDescription className="text-sm line-clamp-3">{resource.pageIntroduction}</CardDescription>
        )}
      </CardContent>
      <CardFooter className="mt-auto pt-3">
        <StarBorder<typeof Link>
          as={Link}
          href={pageLink}
          className="w-full"
        >
          {resource.mainCTAText || "Learn More"} <ArrowRight className="ml-1.5 h-4 w-4" />
        </StarBorder>
      </CardFooter>
    </Card>
  );
};

export default FreeResourceCard;
