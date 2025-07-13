
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { PropFirm } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, ChevronsUpDown, Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

export interface Filters {
  searchTerm?: string;
  platforms?: string[];
  fundingModel?: string;
  maxAccountSize?: number;
}

interface FirmSearchFilterProps {
  allFirms: PropFirm[];
  onFilterChange: (filters: Filters) => void;
}

const FirmSearchFilter = ({ allFirms, onFilterChange }: FirmSearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [fundingModel, setFundingModel] = useState('');
  const [maxAccountSize, setMaxAccountSize] = useState('');
  
  const [openPlatformPopover, setOpenPlatformPopover] = useState(false);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      onFilterChange({ searchTerm, platforms: selectedPlatforms, fundingModel, maxAccountSize: Number(maxAccountSize) || undefined });
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm, selectedPlatforms, fundingModel, maxAccountSize, onFilterChange]);


  const allPlatforms = useMemo(() => {
    const platforms = new Set<string>();
    allFirms.forEach(firm => firm.platforms?.forEach(p => platforms.add(p)));
    return Array.from(platforms).sort();
  }, [allFirms]);

  const allFundingModels = useMemo(() => {
    const models = new Set<string>();
    allFirms.forEach(firm => firm.fundingModels?.forEach(m => models.add(m)));
    return Array.from(models).sort();
  }, [allFirms]);

  const accountSizeOptions = [
    { value: '50000', label: '$50,000+' },
    { value: '100000', label: '$100,000+' },
    { value: '150000', label: '$150,000+' },
    { value: '250000', label: '$250,000+' },
  ];

  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedPlatforms([]);
    setFundingModel('');
    setMaxAccountSize('');
    onFilterChange({});
  }, [onFilterChange]);

  return (
    <Card className="mb-8 p-4 shadow-lg">
      <CardContent className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* Search by Name */}
          <div className="lg:col-span-2">
            <label className="text-sm font-medium text-foreground mb-2 block">Search by Name</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search firms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Platforms */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Platforms</label>
            <Popover open={openPlatformPopover} onOpenChange={setOpenPlatformPopover}>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={openPlatformPopover} className="w-full justify-between">
                  <span className="truncate">
                    {selectedPlatforms.length > 0 ? selectedPlatforms.join(', ') : "Select platforms..."}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search platform..." />
                  <CommandList>
                    <CommandEmpty>No platform found.</CommandEmpty>
                    <CommandGroup>
                      {allPlatforms.map((platform) => (
                        <CommandItem
                          key={platform}
                          value={platform}
                          onSelect={(currentValue) => {
                            setSelectedPlatforms(prev => 
                              prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
                            );
                            setOpenPlatformPopover(false);
                          }}
                        >
                          <Check className={cn("mr-2 h-4 w-4", selectedPlatforms.includes(platform) ? "opacity-100" : "opacity-0")} />
                          {platform}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Funding Model */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Funding Model</label>
            <Select value={fundingModel} onValueChange={setFundingModel}>
              <SelectTrigger>
                <SelectValue placeholder="Any Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Model</SelectItem>
                {allFundingModels.map(model => (
                  <SelectItem key={model} value={model}>{model}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reset Button */}
          <Button onClick={resetFilters} variant="ghost" className="w-full">
            <X className="w-4 h-4 mr-2" />
            Reset
          </Button>

        </div>
      </CardContent>
    </Card>
  );
};

export default FirmSearchFilter;
