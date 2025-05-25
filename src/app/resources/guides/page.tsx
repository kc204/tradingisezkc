
import ArticleCard from "@/components/shared/ArticleCard";
import { mockArticles } from "@/lib/mockData";
import { BookOpenText } from "lucide-react";

export const metadata = {
  title: 'Trading Guides | TradingisEZ',
  description: 'In-depth guides to help you navigate the world of trading and prop firms on TradingisEZ.',
};

export default function GuidesPage() {
  const guides = mockArticles.filter(article => article.category.toLowerCase() === 'guides');

  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-background rounded-lg shadow-lg"> {/* Updated background */}
        <div className="flex justify-center items-center mb-4">
          <BookOpenText className="w-12 h-12 text-primary mr-3" /> {/* Updated icon color */}
          <h1 className="text-4xl font-bold text-foreground">Trading Guides</h1> {/* Updated text color */}
        </div>
        <p className="text-lg text-muted-foreground">Learn the essentials and advanced strategies for trading success.</p> {/* Updated text color */}
      </section>

      {guides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map(guide => (
            <ArticleCard key={guide.id} article={guide} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No guides available at the moment. Check back soon!</p>
      )}
    </div>
  );
}
