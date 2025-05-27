
import DegenPageWrapper from '@/components/degen/DegenPageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const glossaryTerms = [
  { term: "Ape In", definition: "To invest heavily into a new, often risky, cryptocurrency project without much research, driven by FOMO." },
  { term: "FOMO", definition: "Fear Of Missing Out. The anxiety that an exciting or interesting event may currently be happening elsewhere, often aroused by posts seen on social media." },
  { term: "DYOR", definition: "Do Your Own Research. A common piece of advice in the crypto space, encouraging individuals to investigate projects themselves before investing." },
  { term: "NFA", definition: "Not Financial Advice. A disclaimer used to indicate that information shared should not be taken as professional investment advice." },
  { term: "WAGMI", definition: "We're All Gonna Make It. An expression of optimism and solidarity within the crypto community." },
  { term: "NGMI", definition: "Not Gonna Make It. The pessimistic counterpart to WAGMI." },
  { term: "Rekt", definition: "Slang for 'wrecked,' meaning to suffer significant financial losses in crypto trading." },
  { term: "Rug Pull", definition: "A malicious maneuver in the cryptocurrency industry where developers abandon a project and run away with investors' funds." },
  { term: "Mooning", definition: "When a cryptocurrency's price experiences a rapid and significant upward trajectory." },
  { term: "Shill", definition: "To enthusiastically promote a cryptocurrency, often with the intention of inflating its price." },
];

export default function GlossaryPage() {
  return (
    <DegenPageWrapper>
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-press-start mb-4 text-[hsl(var(--degen-lime-green-hsl))]">
            Degen Glossary
          </h1>
          <p className="text-lg text-[hsl(var(--degen-text-main-hsl))]">
            SPEAK LIKE A TRUE DEGEN. YOUR GUIDE TO CRYPTO SLANG.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryTerms.map((item, i) => (
             <Card key={i} className={cn(
              "bg-transparent border-2 border-[hsl(var(--degen-electric-blue-hsl))]",
              "shadow-[0_0_10px_hsl(var(--degen-electric-blue-hsl))]"
            )}>
              <CardHeader>
                <CardTitle className="font-press-start text-lg text-[hsl(var(--degen-hot-pink-hsl))]">
                  {item.term}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {item.definition}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DegenPageWrapper>
  );
}
