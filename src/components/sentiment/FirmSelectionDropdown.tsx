
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import type { FirmData } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FirmSelectionDropdownProps {
  allFirms: FirmData[];
  selectedFirms: string[];
  onFirmSelect: (firmName: string) => void;
}

const FirmSelectionDropdown: React.FC<FirmSelectionDropdownProps> = ({ allFirms, selectedFirms, onFirmSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between md:w-[300px]"
        >
          <span className="truncate">
            {selectedFirms.length > 0 ? `${selectedFirms.length} of 4 firms selected` : "Select firms to compare..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search firms..." />
          <CommandList>
            <CommandEmpty>No firms found.</CommandEmpty>
            <CommandGroup>
              {allFirms.map((firm) => (
                <CommandItem
                  key={firm.name}
                  value={firm.name}
                  onSelect={(currentValue) => {
                    onFirmSelect(firm.name);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedFirms.includes(firm.name) ? "opacity-100" : "opacity-0"
                    )}
                  />
                   <Image src={firm.logoUrl} alt={firm.name} width={20} height={20} className="mr-2 rounded-sm" data-ai-hint="logo" />
                  {firm.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FirmSelectionDropdown;
