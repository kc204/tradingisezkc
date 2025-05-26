
'use client';

import type { BookListing } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StarBorder } from '@/components/ui/star-border';
import { Headphones, PlayCircle } from 'lucide-react';

interface AudiobookCardProps {
  book: BookListing;
}

const AudiobookCard = ({ book }: AudiobookCardProps) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {book.bookCoverImage && (
        <div className="relative w-full h-64 bg-muted">
          <Image
            src={book.bookCoverImage}
            alt={book.bookTitle}
            layout="fill"
            objectFit="contain"
            className="p-2"
            data-ai-hint="book cover"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold line-clamp-2 text-foreground">{book.bookTitle}</CardTitle>
        {book.bookAuthor && (
          <CardDescription className="text-xs text-muted-foreground">By {book.bookAuthor}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {book.bookDescription && (
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{book.bookDescription}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 mt-auto pt-3">
        {book.bookSampleLink && (
          <StarBorder<typeof Link>
            as={Link}
            href={book.bookSampleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1" // Ensure it uses special-accent by default if StarBorder has it
          >
            <PlayCircle className="mr-1.5 h-4 w-4" /> Hear Sample
          </StarBorder>
        )}
        <StarBorder<typeof Link>
          as={Link}
          href={book.bookAudibleAffiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1" // Ensure it uses special-accent by default
        >
          <Headphones className="mr-1.5 h-4 w-4" /> Listen on Audible
        </StarBorder>
      </CardFooter>
    </Card>
  );
};

export default AudiobookCard;
