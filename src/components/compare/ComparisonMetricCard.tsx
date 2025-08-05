
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ComparisonMetricCardProps {
  title: string;
  value1: string | React.ReactNode;
  subvalue1?: string;
  value2: string | React.ReactNode;
  subvalue2?: string;
  isPlatformList?: boolean;
}

const renderPlatformValue = (value: string) => {
    const platforms = value.split(', ');
    const platformLogos: {[key: string]: string} = {
        'NinjaTrader': '/images/platform-logos/ninjatrader.png',
        'TradingView': '/images/platform-logos/tradingview.png',
        'Tradovate': '/images/platform-logos/tradovate.png',
        'Rithmic': '/images/platform-logos/rithmic.png',
        'MT5': '/images/platform-logos/mt5.png',
        'cTrader': '/images/platform-logos/ctrader.png',
        'TopstepX': '/images/platform-logos/topstep.png'
    }

    return (
        <div className="flex items-center flex-wrap gap-2">
            {platforms.map(p => (
                platformLogos[p] ? 
                <Image key={p} src={platformLogos[p]} alt={p} width={24} height={24} className="rounded-sm" /> 
                : <span key={p} className="text-sm font-medium">{p}</span>
            ))}
        </div>
    );
};

const ComparisonMetricCard: React.FC<ComparisonMetricCardProps> = ({ title, value1, subvalue1, value2, subvalue2, isPlatformList }) => {
  return (
    <Card className="bg-card/80 border-border/50 col-span-1 md:col-span-1 lg:col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center font-semibold text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center p-4">
        <div className="w-full py-4 border-b border-border/30 last:border-b-0">
          {isPlatformList ? renderPlatformValue(value1 as string) : <div className="text-xl font-bold text-foreground">{value1}</div>}
          {subvalue1 && <p className="text-xs text-muted-foreground mt-1">{subvalue1}</p>}
        </div>
        <div className="w-full py-4">
          {isPlatformList ? renderPlatformValue(value2 as string) : <div className="text-xl font-bold text-foreground">{value2}</div>}
          {subvalue2 && <p className="text-xs text-muted-foreground mt-1">{subvalue2}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonMetricCard;
