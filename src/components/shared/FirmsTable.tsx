
'use client';

import type { PropFirm } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface FirmsTableProps {
  firms: PropFirm[];
}

const FirmsTable = ({ firms }: FirmsTableProps) => {
  return (
    <div className="w-full overflow-x-auto border rounded-lg bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px] text-foreground">Firm</TableHead>
            <TableHead className="text-center text-foreground">Rating</TableHead>
            <TableHead className="text-center text-foreground">Profit Split</TableHead>
            <TableHead className="text-center text-foreground">Max Funding</TableHead>
            <TableHead className="text-right text-foreground">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firms.map((firm) => (
            <TableRow key={firm.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src={firm.logoUrl}
                      alt={`${firm.name} logo`}
                      layout="fill"
                      objectFit="contain"
                      data-ai-hint="company logo"
                      className="rounded-md"
                    />
                  </div>
                  <span className="font-semibold text-foreground">{firm.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center">
                  {firm.rating ? (
                    <>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-foreground">{firm.rating.toFixed(1)}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center text-muted-foreground">{firm.profitSplit || '-'}</TableCell>
              <TableCell className="text-center text-muted-foreground">
                {firm.maxAccountSize ? `$${firm.maxAccountSize.toLocaleString()}` : '-'}
              </TableCell>
              <TableCell className="text-right">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/firms/${firm.slug}`}>View Firm</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FirmsTable;
