
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/crypto/components/ui/card';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/crypto/components/ui/popover';
import { PlusCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/app/crypto/components/ui/tooltip';

interface ComparisonMetricCardProps {
  title: string;
  icon?: React.ReactNode;
  value: string | React.ReactNode;
  subvalue?: string;
  isPlatformList?: boolean;
  value1?: string | React.ReactNode;
  value2?: string | React.ReactNode;
  subvalue1?: string;
  subvalue2?: string;
}

const PlatformItem = ({ platform }: { platform: string }) => (
    <span key={platform} className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full">{platform}</span>
);

const renderPlatformValue = (value: string | React.ReactNode) => {
    if (typeof value !== 'string') return value;
    const platforms = value.split(', ').filter(p => p.trim() !== ''); // Filter out empty strings
    const MAX_VISIBLE = 3;
    const visiblePlatforms = platforms.slice(0, MAX_VISIBLE);
    const hiddenPlatforms = platforms.slice(MAX_VISIBLE);

    return (
        <TooltipProvider>
            <div className="flex items-center flex-wrap gap-1.5 mt-1">
                {visiblePlatforms.map(p => <PlatformItem key={p} platform={p} />)}
                {hiddenPlatforms.length > 0 && (
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center justify-center h-6 px-2 rounded-full bg-gray-700 cursor-pointer text-xs font-semibold text-white">
                               +{hiddenPlatforms.length} more
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="p-2 space-y-1">
                                {hiddenPlatforms.map(p => (
                                    <p key={p} className="text-xs">{p}</p>
                                ))}
                            </div>
                        </TooltipContent>
                    </Tooltip>
                )}
            </div>
        </TooltipProvider>
    );
};

const ComparisonMetricCard: React.FC<ComparisonMetricCardProps> = ({ title, icon, value, subvalue, isPlatformList, value1, value2, subvalue1, subvalue2 }) => {
    if (value1 && value2) {
    return (
        <div className="bg-card/80 border border-border/30 rounded-xl p-3 md:p-5 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02]">
            <h3 className="font-semibold text-base text-center text-muted-foreground mb-2">{title}</h3>
            <div className="flex justify-around items-start">
                 <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-foreground">{value1}</p>
                    {subvalue1 && <p className="text-xs font-normal text-gray-400">{subvalue1}</p>}
                </div>
                <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-foreground">{value2}</p>
                    {subvalue2 && <p className="text-xs font-normal text-gray-400">{subvalue2}</p>}
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-card/80 border border-border/30 rounded-xl p-3 md:p-5 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02]">
        <div className="flex items-center gap-3 md:gap-4">
            {icon && <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0">{icon}</div>}
            <div>
                <h3 className="font-semibold text-base text-muted-foreground">{title}</h3>
                {isPlatformList ? (
                     renderPlatformValue(value)
                ) : (
                    <p className="text-xl md:text-2xl font-bold text-foreground">{value} {subvalue && <span className="text-xs font-normal text-gray-400">({subvalue})</span>}</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default ComparisonMetricCard;
