
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
    <div className="relative flex justify-center items-center mb-12">
        <div className="flex-1 text-center">
            <Link href={`/firms/${firm1.slug}`} className="inline-block group">
                <Image src={firm1.logoUrl} alt={`${firm1.name} logo`} width={120} height={120} className="mx-auto mb-4 rounded-2xl border-4 border-border shadow-lg group-hover:border-primary transition-colors duration-300" />
                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{firm1.name}</h2>
            </Link>
        </div>
        
        <div className="absolute flex items-center justify-center h-24 w-24 rounded-full bg-background border-4 border-card shadow-2xl" style={{left: '50%', transform: 'translateX(-50%)'}}>
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                VS
            </span>
        </div>

        <div className="flex-1 text-center">
             <Link href={`/firms/${firm2.slug}`} className="inline-block group">
                <Image src={firm2.logoUrl} alt={`${firm2.name} logo`} width={120} height={120} className="mx-auto mb-4 rounded-2xl border-4 border-border shadow-lg group-hover:border-secondary transition-colors duration-300" />
                <h2 className="text-3xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">{firm2.name}</h2>
            </Link>
        </div>
    </div>
  );
};

export default FirmComparisonHeader;
