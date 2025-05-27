
'use client';

import type { PropFirm, AccountTier } from '@/lib/types';
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
// Button and Link imports are removed if no longer used after removing the CTA button.
// Let's keep Link and ExternalLink for now in case they are used elsewhere or might be added back.
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';


interface TrueCostCalculatorProps {
  firms?: PropFirm[]; // Used on compare page
  singleFirm?: PropFirm; // Used on firm detail page
}

interface CalculatedCosts {
  evaluationFee: number;
  activationFee: number;
  resetFee: number;
  totalCost: number;
}

export default function TrueCostCalculator({ firms = [], singleFirm }: TrueCostCalculatorProps) {
  const isSingleFirmMode = !!singleFirm;

  const [selectedFirmIdForMultiMode, setSelectedFirmIdForMultiMode] = useState<string | null>(
    !isSingleFirmMode && firms.length > 0 ? firms[0].id : null
  );
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [includeResetFee, setIncludeResetFee] = useState(false);
  const [calculatedCosts, setCalculatedCosts] = useState<CalculatedCosts | null>(null);

  const activeFirm = useMemo(() => {
    if (isSingleFirmMode) return singleFirm;
    return firms.find(f => f.id === selectedFirmIdForMultiMode) || null;
  }, [isSingleFirmMode, singleFirm, firms, selectedFirmIdForMultiMode]);

  const availableTiers = useMemo(() => {
    return activeFirm?.accountTiers || [];
  }, [activeFirm]);

  const selectedTier = useMemo(() => {
    return availableTiers.find(t => t.id === selectedTierId) || null;
  }, [availableTiers, selectedTierId]);

  // Effect to reset tier and costs if firm changes in multi-firm mode
  useEffect(() => {
    if (!isSingleFirmMode) {
      setSelectedTierId(null);
      setCalculatedCosts(null);
      setIncludeResetFee(false);
    }
  }, [selectedFirmIdForMultiMode, isSingleFirmMode]);

  // Effect to reset tier selection when singleFirm prop changes (or on initial load in singleFirmMode)
  useEffect(() => {
    if (isSingleFirmMode) {
      setSelectedTierId(null); // Force re-selection of tier for the current single firm
      setCalculatedCosts(null);
      setIncludeResetFee(false);
    }
  }, [singleFirm, isSingleFirmMode]); // React to changes in singleFirm prop

  useEffect(() => {
    if (activeFirm && selectedTier) {
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
  }, [activeFirm, selectedTier, includeResetFee]);

  const canIncludeReset = selectedTier?.resetFee !== undefined && selectedTier.resetFee > 0;

  return (
    <Card className="w-full shadow-xl mt-8"> {/* Max-width controlled by parent */}
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">
          {isSingleFirmMode && activeFirm ? `${activeFirm.name} - Cost Calculator` : "True Cost of Funding Calculator"}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {isSingleFirmMode && activeFirm ? `Estimate initial costs for ${activeFirm.name} account tiers.` : "Select a firm and account tier to estimate your initial upfront costs, including optional reset fees."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isSingleFirmMode && firms.length > 0 && (
          <div>
            <Label htmlFor="firm-select" className="mb-2 block text-sm font-medium text-foreground">Select Prop Firm</Label>
            <Select
              value={selectedFirmIdForMultiMode || undefined}
              onValueChange={(value) => setSelectedFirmIdForMultiMode(value)}
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
        )}

        <div>
          <Label htmlFor="tier-select" className="mb-2 block text-sm font-medium text-foreground">
            {isSingleFirmMode && activeFirm ? `Select ${activeFirm.name} Account Tier` : "Select Account Tier"}
          </Label>
          <Select
            value={selectedTierId || undefined}
            onValueChange={(value) => setSelectedTierId(value)}
            disabled={!activeFirm || availableTiers.length === 0}
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
          {activeFirm && availableTiers.length === 0 && (
             <p className="text-xs text-muted-foreground mt-1">No specific account tiers data available for {activeFirm.name} for cost calculation.</p>
          )}
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id={`include-reset-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}`} // Unique ID for checkbox
            checked={includeResetFee}
            onCheckedChange={(checked) => setIncludeResetFee(Boolean(checked))}
            disabled={!canIncludeReset}
          />
          <Label
            htmlFor={`include-reset-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}`}
            className={`text-sm font-medium ${!canIncludeReset ? 'text-muted-foreground/50 cursor-not-allowed' : 'text-foreground cursor-pointer'}`}
          >
            Include one typical Reset Fee (if applicable: {selectedTier?.resetFee ? `$${selectedTier.resetFee}` : 'N/A'})
          </Label>
        </div>
      </CardContent>

      {calculatedCosts && selectedTier && activeFirm && (
        <CardFooter className="flex flex-col items-start space-y-4 border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-foreground">Estimated Cost Breakdown:</h3>
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
          {/* The "Visit Firm" button that was here has been removed for this rollback */}
        </CardFooter>
      )}
      {!selectedTier && activeFirm && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select an account tier to see cost details.</p>
        </CardFooter>
      )}
       {!activeFirm && !isSingleFirmMode && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select a firm to begin.</p>
        </CardFooter>
      )}
       {isSingleFirmMode && !activeFirm && (
         <CardFooter>
            <p className="text-sm text-muted-foreground">Firm data not available for calculator.</p>
        </CardFooter>
       )}
    </Card>
  );
}
