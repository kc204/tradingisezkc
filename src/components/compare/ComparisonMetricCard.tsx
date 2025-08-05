
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ComparisonMetricCardProps {
  title: string;
  value: string | React.ReactNode;
  subvalue?: string;
  isPlatformList?: boolean;
}

const renderPlatformValue = (value: string) => {
    if (!value) return null;
    const platforms = value.split(', ');
    const platformLogos: {[key: string]: string} = {
        'NinjaTrader': '/images/platform-logos/ninjatrader.png',
        'TradingView': '/images/platform-logos/tradingview.png',
        'Tradovate': '/images/platform-logos/tradovate.png',
        'Rithmic': '/images/platform-logos/rithmic.png',
        'MT5': '/images/platform-logos/mt5.png',
        'cTrader': '/images/platform-logos/ctrader.png',
        'TopstepX': '/images/platform-logos/topstep.png'
    };

    return (
        <div className="flex items-center flex-wrap gap-2 justify-center">
            {platforms.map(p => (
                platformLogos[p] ? 
                <Image key={p} src={platformLogos[p]} alt={p} width={24} height={24} className="rounded-sm" /> 
                : <span key={p} className="text-sm font-medium">{p}</span>
            ))}
        </div>
    );
};

const ComparisonMetricCard: React.FC<ComparisonMetricCardProps> = ({ title, value, subvalue, isPlatformList }) => {
  return (
    <Card className="bg-card/80 border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center font-semibold text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center p-4 min-h-[100px]">
        <div className="w-full py-2">
          {isPlatformList ? renderPlatformValue(value as string) : <div className="text-xl font-bold text-foreground">{value}</div>}
          {subvalue && <p className="text-xs text-muted-foreground mt-1">{subvalue}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonMetricCard;
