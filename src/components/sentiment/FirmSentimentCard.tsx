
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, TrendingUp, TrendingDown } from 'lucide-react';
import type { FirmData, WeeklyFirmData } from '@/lib/types';
import Image from 'next/image';

interface FirmSentimentCardProps {
    firm: FirmData;
    data: WeeklyFirmData;
}

const FirmSentimentCard: React.FC<FirmSentimentCardProps> = ({ firm, data }) => {
  if (!data) return null;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
            <Image src={firm.logoUrl} alt={`${firm.name} logo`} width={48} height={48} className="rounded-lg bg-muted p-1 object-contain border" data-ai-hint="logo" />
            <div>
            <CardTitle>{firm.name}</CardTitle>
            <CardDescription>Most Recent Weekly Analysis</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <h3 className="font-semibold text-foreground mb-2 flex items-center"><Globe className="w-4 h-4 mr-2 text-primary"/> Web Summary</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{data.summary}</p>
        </div>
        <div>
          <h4 className="font-semibold text-green-500 mb-2 flex items-center"><TrendingUp className="w-4 h-4 mr-2"/> Common Positives</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {data.positivePoints.map((point, i) => <li key={i}>{point}</li>)}
            {data.positivePoints.length === 0 && <li>No significant positive points found.</li>}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-500 mb-2 flex items-center"><TrendingDown className="w-4 h-4 mr-2"/> Common Negatives</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {data.negativePoints.map((point, i) => <li key={i}>{point}</li>)}
            {data.negativePoints.length === 0 && <li>No significant negative points found.</li>}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FirmSentimentCard;
