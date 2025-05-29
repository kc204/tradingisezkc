
'use client';

import type { FreeResourceItem, FreeResourceType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StarBorder } from '@/components/ui/star-border';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Headphones, Video, FileText, Wrench } from 'lucide-react';

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
      return <Wrench className="w-5 h-5 mr-1.5 text-primary" />;
    default:
      return <BookOpen className="w-5 h-5 mr-1.5 text-primary" />;
  }
};


const FreeResourceCard = ({ resource }: FreeResourceCardProps) => {
  let pageLink = `/free-resources/${resource.slug}`;

  if (resource.resourceType === "Audiobook Trial Offer" && resource.slug === "audiobooks") {
    pageLink = "/free-resources/audiobooks";
  } else if (resource.resourceType === "Free Video Course Series" && resource.slug === "al-brooks-course") {
    pageLink = "/free-resources/al-brooks-course";
  }

  const isAudiobookOfferWithSufficientBooks =
    resource.resourceType === "Audiobook Trial Offer" &&
    resource.bookListings &&
    resource.bookListings.length >= 3;

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {isAudiobookOfferWithSufficientBooks ? (
        <div className="relative w-full h-56 bg-muted flex justify-center items-center p-4 overflow-hidden">
          {resource.bookListings?.slice(0, 3).map((book, index) => (
            <div
              key={book.bookTitle}
              className="absolute transition-all duration-300 ease-in-out transform hover:z-30 hover:scale-110 hover:-translate-y-2"
              style={{
                width: '80px', // Adjust size as needed
                height: '120px', // Adjust size as needed
                zIndex: index === 1 ? 20 : 10, // Center image on top
                transform:
                  index === 0 ? 'translateX(-40%) rotate(-10deg) scale(0.9)' :
                  index === 1 ? 'translateX(0%) rotate(0deg) scale(1)' :
                  'translateX(40%) rotate(10deg) scale(0.9)',
              }}
            >
              {book.bookCoverImage && (
                <Image
                  src={book.bookCoverImage}
                  alt={book.bookTitle}
                  layout="fill"
                  objectFit="contain"
                  className="rounded shadow-md"
                  data-ai-hint="book cover"
                />
              )}
            </div>
          ))}
        </div>
      ) : resource.coverImage ? (
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={resource.coverImage}
            alt={resource.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint="resource cover"
          />
        </div>
      ) : (
         <div className="relative w-full h-48 bg-muted flex items-center justify-center">
            <ResourceTypeIcon type={resource.resourceType} />
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
          <span className="inline-flex items-center justify-center">
            {resource.mainCTAText || "Learn More"} <ArrowRight className="ml-1.5 h-4 w-4" />
          </span>
        </StarBorder>
      </CardFooter>
    </Card>
  );
};

export default FreeResourceCard;
