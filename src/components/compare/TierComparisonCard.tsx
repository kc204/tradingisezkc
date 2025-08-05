
import React from 'react';
import type { PropFirm, AccountTier } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface TierComparisonCardProps {
  firm: PropFirm;
  tier: AccountTier;
}

const formatCurrency = (value: number | undefined) => {
    if (value === undefined) return 'N/A';
    return `$${value.toLocaleString()}`;
}

const MetricRow: React.FC<{ label: string; value: string | React.ReactNode; isPositive?: boolean; isNegative?: boolean }> = ({ label, value, isPositive, isNegative }) => {
    const Icon = isPositive ? CheckCircle2 : isNegative ? XCircle : MinusCircle;
    const iconColor = isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-muted-foreground';

    return (
        <div className="flex justify-between items-center py-3 border-b border-border/30 last:border-b-0">
            <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${iconColor}`} />
                <span className="text-muted-foreground">{label}</span>
            </div>
            <span className="font-semibold text-foreground text-right">{value}</span>
        </div>
    );
};

const TierComparisonCard: React.FC<TierComparisonCardProps> = ({ firm, tier }) => {
  const profitTarget = Array.isArray(tier.profitTargetPercentage) ? tier.profitTargetPercentage.join('% / ') + '%' : tier.profitTargetPercentage ? `${tier.profitTargetPercentage}%` : 'N/A';
  const drawdown = tier.drawdownRules ? tier.drawdownRules : tier.drawdownPercentage ? `${tier.drawdownPercentage}% Max` : 'N/A';
  const dailyLoss = tier.dailyLossLimitPercentage ? `${tier.dailyLossLimitPercentage}%` : 'None';

  return (
    <Card className="bg-card/60 border-border/50 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">{firm.name}</CardTitle>
        <CardDescription className="text-center">
            {tier.name || `$${(tier.size / 1000)}K ${tier.challengeType}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <MetricRow 
            label="Monthly Price" 
            value={formatCurrency(tier.evaluationFee)} 
            isNegative={tier.evaluationFee > 100}
        />
        <MetricRow 
            label="Activation Fee" 
            value={tier.activationFee ? formatCurrency(tier.activationFee) : 'None'} 
            isPositive={!tier.activationFee}
            isNegative={!!tier.activationFee}
        />
        <MetricRow 
            label="Profit Target" 
            value={profitTarget}
        />
        <MetricRow 
            label="Max Drawdown" 
            value={drawdown}
        />
        <MetricRow 
            label="Daily Loss Limit" 
            value={dailyLoss}
            isPositive={dailyLoss === 'None'}
        />
        <MetricRow 
            label="Profit Split" 
            value={firm.profitSplit || 'N/A'}
        />
      </CardContent>
      <div className="p-4 mt-auto">
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={`/firms/${firm.slug}`}>
                View Full Review
            </Link>
        </Button>
      </div>
    