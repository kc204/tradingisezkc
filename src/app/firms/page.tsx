import FirmCard from '@/components/propfirms/FirmCard';
import { mockPropFirms } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, Search } from 'lucide-react';

export const metadata = {
  title: 'All Prop Firms | Prop Firm Finder',
  description: 'Browse and compare all listed proprietary trading firms.',
};

// Placeholder for search/filter component or logic
const FirmSearchFilter = () => {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl flex items-center"><Filter className="mr-2 h-5 w-5" /> Filter Prop Firms</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Input type="text" placeholder="Search by firm name..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Funding Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2-step">2-Step Challenge</SelectItem>
              <SelectItem value="1-step">1-Step Challenge</SelectItem>
              <SelectItem value="instant">Instant Funding</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Max Account Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100k">$100,000+</SelectItem>
              <SelectItem value="500k">$500,000+</SelectItem>
              <SelectItem value="1m">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full lg:w-auto bg-primary text-primary-foreground hover:bg-primary/90">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
};


export default function FirmsPage() {
  const firms = mockPropFirms; // In a real app, fetch this data

  return (
    <div className="space-y-10">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Discover Prop Firms</h1>
        <p className="text-lg text-primary-foreground/90">Find the funding opportunity that matches your trading style.</p>
      </section>
      
      <FirmSearchFilter />

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
