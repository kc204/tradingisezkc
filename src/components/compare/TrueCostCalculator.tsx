
'use client';

import type { PropFirm, AccountTier } from '@/lib/types';
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button'; // For a potential "Calculate" button, though auto-calc is implemented
import { Input } from '@/components/ui/input'; // Not used yet, but could be for custom reset fee
import { Separator } from '@/components/ui/separator';

interface TrueCostCalculatorProps {
  firms: PropFirm[];
}

interface CalculatedCosts {
  evaluationFee: number;
  activationFee: number;
  resetFee: number;
  totalCost: number;
}

export default function TrueCostCalculator({ firms }: TrueCostCalculatorProps) {
  const [selectedFirmId, setSelectedFirmId] = useState<string | null>(null);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [includeResetFee, setIncludeResetFee] = useState(false);
  const [calculatedCosts, setCalculatedCosts] = useState<CalculatedCosts | null>(null);

  const selectedFirm = useMemo(() => {
    return firms.find(f => f.id === selectedFirmId) || null;
  }, [firms, selectedFirmId]);

  const availableTiers = useMemo(() => {
    return selectedFirm?.accountTiers || [];
  }, [selectedFirm]);

  const selectedTier = useMemo(() => {
    return availableTiers.find(t => t.id === selectedTierId) || null;
  }, [availableTiers, selectedTierId]);

  useEffect(() => {
    // Reset tier and costs if firm changes
    setSelectedTierId(null);
    setCalculatedCosts(null);
    setIncludeResetFee(false);
  }, [selectedFirmId]);

  useEffect(() => {
    if (selectedFirm && selectedTier) {
      let evalFee = selectedTier.evaluationFee || 0;
      let activFee = selectedTier.activationFee || 0;
      let rstFee = 0;

      if (includeResetFee && selectedTier.resetFee && selectedTier.resetFee > 0) {
        rstFee = selectedTier.resetFee;
      }

      const total = evalFee + activFee + rstFee;
      setCalculatedCosts({
        evaluationFee: evalFee,
        activationFee: activFee,
        resetFee: rstFee,
        totalCost: total,
      });
    } else {
      setCalculatedCosts(null);
    }
  }, [selectedFirm, selectedTier, includeResetFee]);

  const canIncludeReset = selectedTier?.resetFee !== undefined && selectedTier.resetFee > 0;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl mt-12">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-foreground">True Cost of Funding Calculator</CardTitle>
        <CardDescription className="text-muted-foreground">
          Estimate the initial financial commitment for different prop firms and account sizes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firm-select" className="mb-2 block text-sm font-medium text-foreground">Select Prop Firm</Label>
            <Select
              value={selectedFirmId || undefined}
              onValueChange={(value) => setSelectedFirmId(value)}
            >
              <SelectTrigger id="firm-select" className="w-full">
                <SelectValue placeholder="Choose a firm..." />
              </SelectTrigger>
              <SelectContent>
                {firms.map((firm) => (
                  <SelectItem key={firm.id} value={firm.id}>
                    {firm.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tier-select" className="mb-2 block text-sm font-medium text-foreground">Select Account Tier</Label>
            <Select
              value={selectedTierId || undefined}
              onValueChange={(value) => setSelectedTierId(value)}
              disabled={!selectedFirmId || availableTiers.length === 0}
            >
              <SelectTrigger id="tier-select" className="w-full">
                <SelectValue placeholder="Choose an account tier..." />
              </SelectTrigger>
              <SelectContent>
                {availableTiers.map((tier) => (
                  <SelectItem key={tier.id} value={tier.id}>
                    {tier.name || `$${tier.size.toLocaleString()} Account`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id="include-reset"
            checked={includeResetFee}
            onCheckedChange={(checked) => setIncludeResetFee(Boolean(checked))}
            disabled={!canIncludeReset}
          />
          <Label
            htmlFor="include-reset"
            className={`text-sm font-medium ${!canIncludeReset ? 'text-muted-foreground/50 cursor-not-allowed' : 'text-foreground cursor-pointer'}`}
          >
            Include one typical Reset Fee (if applicable: {selectedTier?.resetFee ? `$${selectedTier.resetFee}` : 'N/A'})
          </Label>
        </div>
      </CardContent>

      {calculatedCosts && selectedTier && (
        <CardFooter className="flex flex-col items-start space-y-4 border-t border-border pt-6">
          <h3 className="text-xl font-semibold text-foreground">Estimated Cost Breakdown:</h3>
          <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evaluation Fee:</span>
              <span className="font-medium text-foreground">${calculatedCosts.evaluationFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Activation Fee:</span>
              <span className="font-medium text-foreground">
                {selectedTier.activationFee !== undefined && selectedTier.activationFee > 0
                  ? `$${calculatedCosts.activationFee.toLocaleString()}`
                  : (selectedTier.activationFee === 0 ? '$0 (None)' : 'N/A')}
              </span>
            </div>
            {includeResetFee && canIncludeReset && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reset Fee (x1):</span>
                <span className="font-medium text-foreground">${calculatedCosts.resetFee.toLocaleString()}</span>
              </div>
            )}
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between w-full text-lg">
            <span className="font-semibold text-accent">Total Estimated Upfront Cost:</span>
            <span className="font-bold text-accent">${calculatedCosts.totalCost.toLocaleString()}</span>
          </div>
        </CardFooter>
      )}
      {!selectedTier && selectedFirmId && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select an account tier to see cost details.</p>
        </CardFooter>
      )}
       {!selectedFirmId && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select a firm to begin.</p>
        </CardFooter>
      )}
    </Card>
  );
}
