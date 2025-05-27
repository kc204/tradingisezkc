
import DegenPageWrapper from '@/components/degen/DegenPageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const guides = [
  { title: "How to Create a Memecoin (For Fun & Learning!)", slug: "create-memecoin" },
  { title: "Understanding Tokenomics of Degen Plays (Simplified)", slug: "degen-tokenomics" },
  { title: "Spotting Rug Pulls & Scams (Degen Edition)", slug: "spot-rugs" },
  { title: "Navigating DEXs for New Coins", slug: "navigate-dexs" },
];

export default function HowToApePage() {
  return (
    <DegenPageWrapper>
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-press-start mb-4 text-[hsl(var(--degen-lime-green-hsl))]">
            How to Ape (EZ Degen Guides)
          </h1>
          <p className="text-lg text-[hsl(var(--degen-text-main-hsl))]">
            EDUCATION FOR THE ASPIRING DEGEN. LEARN THE ROPES, MINIMIZE THE REKT.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, i) => (
            <Link key={i} href={`/degen/how-to-ape/${guide.slug}`} passHref>
              <Card className={cn(
                "bg-transparent border-2 border-[hsl(var(--degen-hot-pink-hsl))] hover:border-[hsl(var(--degen-lime-green-hsl))]",
                "hover:shadow-[0_0_15px_hsl(var(--degen-lime-green-hsl))] transition-all cursor-pointer h-full flex flex-col"
              )}>
                <CardHeader>
                  <CardTitle className="font-press-start text-xl text-[hsl(var(--degen-electric-blue-hsl))] group-hover:text-[hsl(var(--degen-lime-green-hsl))]">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm">
                    Click to learn more about {guide.title.toLowerCase()}. This is not a drill, it's a degen masterclass.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DegenPageWrapper>
  );
}
