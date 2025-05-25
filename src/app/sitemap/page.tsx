
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
    { href: "/about", label: "About Us" },
    // { href: "/contact", label: "Contact Us" }, // Removed from main navigation
  ]},
  { category: "Prop Firms (Examples - Dynamic in real app)", links: [
    // In a real app, these would be dynamically generated from your firm data
    { href: "/firms/top-prop-firm", label: "TopPropFirm Review" },
    { href: "/firms/fund-your-dreams", label: "FundYourDreams Review" },
  ]},
  { category: "Trading Resources", links: [
    { href: "/resources/guides", label: "Trading Guides" },
    { href: "/resources/tools", label: "Trading Tools" },
    { href: "/resources/news", label: "Trading News" },
    { href: "/resources/al-brooks-trading-course", label: "Al Brooks Course" },
  ]},
  { category: "Legal & Information", links: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    { href: "/how-we-rate", label: "How We Rate &amp; Review" },
    { href: "/contact", label: "Contact Us Page (Still accessible directly)" }, // Clarify it's still a page
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
