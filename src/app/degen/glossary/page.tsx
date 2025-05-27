
// src/app/degen/glossary/page.tsx
import { DegenPageWrapper } from '@/components/degen/DegenPageWrapper';

export const metadata = {
  title: 'Degen Glossary | TradingisEZ Degen Mode',
  description: 'Decode the degen dialect. WAGMI? GM? NGMI? Find out here.',
};

const terms = [
  { term: "Ape In", definition: "To invest heavily into a speculative asset, often without full research, driven by FOMO." },
  { term: "Bagholder", definition: "Someone holding a significant amount of a cryptocurrency that has drastically decreased in value." },
  { term: "DYOR", definition: "Do Your Own Research. A common refrain encouraging personal due diligence." },
  { term: "FOMO", definition: "Fear Of Missing Out. The anxiety that an exciting or interesting event may currently be happening elsewhere, often aroused by posts seen on social media." },
  { term: "FUD", definition: "Fear, Uncertainty, and Doubt. Spreading negative (often false or exaggerated) information to drive down an asset's price." },
  { term: "GM", definition: "Good Morning. A common greeting in crypto communities." },
  { term: "NGMI", definition: "Not Gonna Make It. Expresses skepticism about someone's or something's success." },
  { term: "WAGMI", definition: "We're All Gonna Make It. Expresses optimism and community spirit." },
  { term: "Rekt", definition: "Short for 'wrecked'. Refers to suffering significant financial losses." },
  { term: "Moon / Mooning", definition: "When a cryptocurrency's price experiences a dramatic upward trajectory." },
  { term: "Rug Pull", definition: "A malicious maneuver where crypto developers abandon a project and run away with investors' funds." },
  { term: "Shill", definition: "To enthusiastically promote a cryptocurrency, often with ulterior motives." },
];

export default function DegenGlossaryPage() {
  return (
    <DegenPageWrapper title="Degen Glossary - Speak Fluent Crypto">
      <p className="text-lg mb-6">
        Lost in the degen jungle? Don't know your WAGMI from your NGMI?
        This glossary will help you decipher the unique dialect of the crypto trenches.
      </p>
      
      <div className="space-y-4">
        {terms.sort((a,b) => a.term.localeCompare(b.term)).map((item) => (
          <div key={item.term} className="p-3 border-b border-[hsl(var(--degen-electric-blue-hsl))] border-opacity-50">
            <h3 className="text-lg font-press-start text-[hsl(var(--degen-lime-green-hsl))]">
              {item.term}
            </h3>
            <p className="text-sm mt-1">{item.definition}</p>
          </div>
        ))}
      </div>
    </DegenPageWrapper>
  );
}
