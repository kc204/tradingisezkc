import ArticleCard from "@/components/shared/ArticleCard";
import { mockArticles } from "@/lib/mockData";
import { BookOpenText } from "lucide-react";

export const metadata = {
  title: 'Trading Guides | Prop Firm Finder',
  description: 'In-depth guides to help you navigate the world of trading and prop firms.',
};

export default function GuidesPage() {
  const guides = mockArticles.filter(article => article.category.toLowerCase() === 'guides');

  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-4">
          <BookOpenText className="w-12 h-12 text-primary-foreground mr-3" />
          <h1 className="text-4xl font-bold text-primary-foreground">Trading Guides</h1>
        </div>
        <p className="text-lg text-primary-foreground/90">Learn the essentials and advanced strategies for trading success.</p>
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
