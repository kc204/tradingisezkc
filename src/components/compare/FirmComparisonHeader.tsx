
import React from 'react';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface FirmComparisonHeaderProps {
  firm1: PropFirm;
  firm2: PropFirm;
}

const FirmComparisonHeader: React.FC<FirmComparisonHeaderProps> = ({ firm1, firm2 }) => {
  return (
    <header className="flex justify-around items-center py-6">
      <Link href={`/firms/${firm1.slug}`} className="flex flex-col items-center gap-3 text-center group">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-border/50 p-2 shadow-lg group-hover:scale-105 transition-transform">
          <Image src={firm1.logoUrl} alt={`${firm1.name} logo`} layout="fill" objectFit="contain" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{firm1.name}</h1>
      </Link>
      <div className="text-4xl md:text-6xl font-black text-primary/80 transform -rotate-6">
        VS
      </div>
      <Link href={`/firms/${firm2.slug}`} className="flex flex-col items-center gap-3 text-center group">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-border/50 p-2 shadow-lg group-hover:scale-105 transition-transform">
          <Image src={firm2.logoUrl} alt={`${firm2.name} logo`} layout="fill" objectFit="contain" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{firm2.name}</h1>
      </Link>
    </