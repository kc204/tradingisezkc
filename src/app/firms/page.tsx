
import FirmCard from '@/components/propfirms/FirmCard';
import { mockPropFirms } from '@/lib/mockData';
// import { Input } from '@/components/ui/input'; // No longer needed
// import { Button } from '@/components/ui/button'; // No longer needed
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // No longer needed
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // No longer needed
// import { Filter, Search } from 'lucide-react'; // No longer needed

export const metadata = {
  title: 'All Prop Firms | TradingisEZ',
  description: 'Browse and compare all listed proprietary trading firms on TradingisEZ.',
};

// FirmSearchFilter component is removed as it's no longer used.

export default function FirmsPage() {
  const firms = mockPropFirms; // In a real app, fetch this data

  return (
    <div className="space-y-10">
      <section className="text-center py-10 bg-background rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-foreground mb-2">Discover Prop Firms</h1>
        <p className="text-lg text-muted-foreground">Find the funding opportunity that matches your trading style.</p>
      </section>
      
      {/* FirmSearchFilter component removed from here */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firms.map(firm => (
            <FirmCard key={firm.id} firm={firm} />
          ))}
        </div>
        {firms.length === 0 && (
          <p className="text-center text-muted-foreground text-lg py-10">No prop firms found matching your criteria.</p>
        )}
      </section>
    </div>
  );
}

