
'use client';

import type { PropFirm } from '@/lib/types';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import FirmSearchFilter, { type Filters } from '@/components/compare/FirmSearchFilter';
import ComparisonTable from '@/components/compare/ComparisonTable';


export default function ComparisonPageClient({ allFirms }: { allFirms: PropFirm[] }) {
  const [filters, setFilters] = useState<Filters>({});

  const filteredFirms = useMemo(() => {
    return allFirms.filter(firm => {
      // Search term filter
      if (filters.searchTerm) {
        if (!firm.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
          return false;
        }
      }
      // Platform filter (multi-select)
      if (filters.platforms && filters.platforms.length > 0) {
        if (!filters.platforms.every(p => firm.platforms?.includes(p))) {
          return false;
        }
      }
      // Funding model filter
      if (filters.fundingModel) {
        if (!firm.fundingModels?.includes(filters.fundingModel)) {
          return false;
        }
      }
      // Max account size filter
      if (filters.maxAccountSize) {
        if (!firm.maxAccountSize || firm.maxAccountSize < filters.maxAccountSize) {
          return false;
        }
      }
      return true;
    });
  }, [allFirms, filters]);


  return (
    <>
      <FirmSearchFilter allFirms={allFirms} onFilterChange={setFilters} />
      {filteredFirms.length > 0 ? (
        <ComparisonTable firms={filteredFirms} />
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No firms available for comparison matching your criteria.</p>
      )}
    </>
  );
}
