
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PlusCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ComparisonMetricCardProps {
  title: string;
  icon: React.ReactNode;
  value: string | React.ReactNode;
  subvalue?: string;
  isPlatformList?: boolean;
}

const platformLogos: {[key: string]: string} = {
    'NinjaTrader': '/images/platform-logos/ninjatrader.png',
    'TradingView': '/images/platform-logos/tradingview.png',
    'Tradovate': '/images/platform-logos/tradovate.png',
    'Rithmic': '/images/platform-logos/rithmic.png',
    'MT5': '/images/platform-logos/mt5.png',
    'cTrader': '/images/platform-logos/ctrader.png',
    'TopstepX': '/images/platform-logos/topstep.png'
};

const PlatformItem = ({ platform }: { platform: string }) => (
    platformLogos[platform] ? 
    <Image key={platform} src={platformLogos[platform]} alt={platform} width={24} height={24} className="rounded-sm bg-white p-0.5" /> 
    : <span key={platform} className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full">{platform}</span>
);

const renderPlatformValue = (value: string | React.ReactNode) => {
    if (typeof value !== 'string') return value;
    const platforms = value.split(', ');
    const MAX_VISIBLE = 3;
    const visiblePlatforms = platforms.slice(0, MAX_VISIBLE);
    const hiddenPlatforms = platforms.slice(MAX_VISIBLE);

    return (
        <TooltipProvider>
            <div className="flex items-center flex-wrap gap-2 mt-1">
                {visiblePlatforms.map(p => <PlatformItem key={p} platform={p} />)}
                {hiddenPlatforms.length > 0 && (
                     <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 cursor-pointer">
                               <PlusCircle className="w-4 h-4 text-white" />
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

const ComparisonMetricCard: React.FC<ComparisonMetricCardProps> = ({ title, icon, value, subvalue, isPlatformList }) => {
  return (
    <div className="bg-card/80 border border-border/30 rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02]">
        <div className="flex items-center gap-4">
            {icon}
            <div>
                <h3 className="font-semibold text-lg text-muted-foreground">{title}</h3>
                {isPlatformList ? (
                     renderPlatformValue(value)
                ) : (
                    <p className="text-2xl font-bold text-foreground">{value} {subvalue && <span className="text-sm font-normal text-gray-400">({subvalue})</span>}</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default ComparisonMetricCard;
