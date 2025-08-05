
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ComparisonMetricCardProps {
  title: string;
  icon: React.ReactNode;
  value: string | React.ReactNode;
  subvalue?: string;
  isPlatformList?: boolean;
}

const renderPlatformValue = (value: string | React.ReactNode) => {
    if (typeof value !== 'string') return value;
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
        <div className="flex items-center flex-wrap gap-2 mt-1">
            {platforms.map(p => (
                platformLogos[p] ? 
                <Image key={p} src={platformLogos[p]} alt={p} width={24} height={24} className="rounded-sm bg-white p-0.5" /> 
                : <span key={p} className="bg-gray-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full">{p}</span>
            ))}
        </div>
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
