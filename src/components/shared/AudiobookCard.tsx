
'use client';

import type { BookListing } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, PlayCircle } from 'lucide-react';

interface AudiobookCardProps {
  book: BookListing;
}

const AudiobookCard = ({ book }: AudiobookCardProps) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {book.bookCoverImage && (
        <div className="relative w-full h-64 bg-muted overflow-hidden"> {/* Added overflow-hidden here */}
          <Image
            src={book.bookCoverImage}
            alt={book.bookTitle}
            layout="fill"
            objectFit="contain"
            className="p-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
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
      <CardFooter className="flex flex-col sm:flex-row sm:justify-center gap-2 mt-auto pt-3">
        {book.bookSampleLink && (
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent-hover flex-1 rounded-none w-full sm:w-auto whitespace-normal h-auto"
          >
            <Link
              href={book.bookSampleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircle className="mr-1.5 h-4 w-4 flex-shrink-0" /> Hear Sample
            </Link>
          </Button>
        )}
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent-hover flex-1 rounded-none w-full sm:w-auto whitespace-normal h-auto"
        >
          <Link
            href={book.bookAudibleAffiliateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Headphones className="mr-1.5 h-4 w-4 flex-shrink-0" />
            Listen to full free
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AudiobookCard;
