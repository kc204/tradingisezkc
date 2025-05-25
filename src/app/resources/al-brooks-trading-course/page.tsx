
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Al Brooks Trading Course | TradingisEZ',
  description: 'Information about the Al Brooks Trading Course and related resources on TradingisEZ.',
};

export default function AlBrooksTradingCoursePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-4">
          <Award className="w-12 h-12 text-primary-foreground mr-3" />
          <h1 className="text-4xl font-bold text-primary-foreground">Al Brooks Trading Course</h1>
        </div>
        <p className="text-lg text-primary-foreground/90">Learn from a master price action trader.</p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Course Information</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Detailed information about the Al Brooks Trading Course will be available here soon. Al Brooks is a renowned technical analyst and trader, author of several comprehensive books on price action trading.</p>
          <p>His course material typically covers:</p>
          <ul>
            <li>Understanding market structure and price action.</li>
            <li>Identifying trends and trading ranges.</li>
            <li>Bar-by-bar analysis.</li>
            <li>Entry and exit strategies.</li>
            <li>Advanced candlestick patterns and chart formations.</li>
          </ul>
          <p>While we prepare specific details and potential offers related to the Al Brooks Trading Course, we encourage you to explore our other valuable trading resources on TradingisEZ.</p>
          
          <div className="mt-6 text-center">
            <Button asChild size="lg">
              <Link href="/resources">Explore Other Trading Resources</Link>
            </Button>
          </div>
          
           <p className="mt-6 text-sm text-muted-foreground">
            <strong>Note:</strong> TradingisEZ may provide links to external resources, including courses. We may receive affiliate compensation if you purchase through these links, at no extra cost to you. Please see our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for more details.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
