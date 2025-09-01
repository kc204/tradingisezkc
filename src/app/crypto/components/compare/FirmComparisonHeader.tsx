
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
    <div className="relative flex justify-center items-center my-8 md:my-12">
        <div className="flex-1 text-center px-2">
            <Link href={`/crypto/firms/${firm1.slug}`} className="inline-block group">
                <Image src={firm1.logoUrl} alt={`${firm1.name} logo`} width={80} height={80} className="mx-auto mb-2 rounded-xl border-2 border-border shadow-lg group-hover:border-primary transition-colors duration-300 w-16 h-16 md:w-24 md:h-24" />
                <h2 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{firm1.name}</h2>
            </Link>
        </div>
        
        <div className="absolute flex items-center justify-center h-12 w-12 md:h-20 md:w-20 rounded-full bg-background border-2 border-card shadow-2xl" style={{left: '50%', transform: 'translateX(-50%)'}}>
            <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                VS
            </span>
        </div>

        <div className="flex-1 text-center px-2">
             <Link href={`/crypto/firms/${firm2.slug}`} className="inline-block group">
                <Image src={firm2.logoUrl} alt={`${firm2.name} logo`} width={80} height={80} className="mx-auto mb-2 rounded-xl border-2 border-border shadow-lg group-hover:border-secondary transition-colors duration-300 w-16 h-16 md:w-24 md:h-24" />
                <h2 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">{firm2.name}</h2>
            </Link>
        </div>
    </div>
  );
};

export default FirmComparisonHeader;
