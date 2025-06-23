
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Map } from "lucide-react";

export const metadata = {
  title: 'Sitemap | TradingisEZ',
  description: 'Navigate TradingisEZ through our sitemap.',
};

const sitemapLinks = [
  { category: "Main Navigation", links: [
    { href: "/", label: "Home" },
    { href: "/firms", label: "All Prop Firms" },
    { href: "/compare", label: "Compare Firms" },
    { href: "/resources", label: "Trading Resources" },
    { href: "/free-resources", label: "Free Resources" }, 
    { href: "/about", label: "About Us" },
  ]},
  { category: "Prop Firms (Examples - Dynamic in real app)", links: [
    { href: "/firms/apex-trader-funding", label: "Apex Trader Funding Review" },
    { href: "/firms/take-profit-trader", label: "Take Profit Trader Review" },
  ]},
  { category: "Free Resources", links: [ 
    { href: "/free-resources", label: "Overview" },
    { href: "/free-resources/audiobooks", label: "Free Audiobooks (Audible Trial)" },
    { href: "/free-resources/al-brooks-course", label: "Al Brooks Free Video Course" },
  ]},
  { category: "Legal & Information", links: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    { href: "/how-we-rate", label: "How We Rate & Review" },
  ]},
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <Map className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Sitemap</h1>
        <p className="text-lg text-primary-foreground/90">Find your way around TradingisEZ.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sitemapLinks.map(section => (
          <Card key={section.category} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{section.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-primary hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
