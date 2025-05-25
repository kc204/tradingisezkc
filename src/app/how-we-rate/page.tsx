import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, BarChart, Users, Award } from "lucide-react";

export const metadata = {
  title: 'How We Rate & Review | TradingisEZ',
  description: 'Understand our methodology for rating and reviewing prop firms on TradingisEZ.',
};

const ratingCriteria = [
  {
    icon: <CheckSquare className="w-8 h-8 text-primary mb-2" />,
    title: "Funding Conditions",
    description: "Evaluation of account sizes, scaling plans, challenge difficulty, profit targets, and drawdown rules. We look for realistic and achievable targets.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary mb-2" />,
    title: "Profit Split & Payouts",
    description: "Assessment of the profit share offered to traders and the frequency, reliability, and ease of payouts. Higher splits and faster payouts are favored.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary mb-2" />,
    title: "Trader Support & Community",
    description: "Quality of customer service, availability of educational resources, and the presence of an active, supportive trading community.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary mb-2" />,
    title: "Reputation & Trustworthiness",
    description: "Analysis of user reviews from various platforms, company history, transparency of terms, and overall industry standing.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary mb-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m10.5 11.55 2 2.05L17.5 9"></path></svg>, // Example for custom SVG or unique icon
    title: "Tradable Instruments & Platforms",
    description: "Variety of assets offered (Forex, Crypto, Indices, etc.) and the quality and stability of trading platforms (MT4, MT5, cTrader, proprietary).",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
    title: "Fees & Costs",
    description: "Transparency and competitiveness of challenge fees, reset fees, and any other associated costs. We look for value for money.",
  },
];

export default function HowWeRatePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <BarChart className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">How We Rate &amp; Review Prop Firms</h1>
        <p className="text-lg text-primary-foreground/90">Our commitment to providing fair, transparent, and comprehensive evaluations on TradingisEZ.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Our Methodology</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>At TradingisEZ, we strive to provide you with the most accurate, unbiased, and comprehensive reviews of proprietary trading firms. Our rating system is designed to help you make informed decisions by highlighting the key aspects that matter most to traders. Here’s a breakdown of our evaluation process:</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ratingCriteria.map(criterion => (
          <Card key={criterion.title} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="items-center text-center">
              {criterion.icon}
              <CardTitle className="text-xl">{criterion.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">{criterion.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Final Score &amp; Updates</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Each firm is scored across these criteria, and an overall rating is calculated. We understand that the prop firm landscape is constantly evolving. Therefore, we periodically review and update our ratings and reviews to reflect any changes in a firm's offerings, terms, or community feedback.</p>
          <p>Our goal is to be your most trusted resource. If you have feedback on our rating system or believe a review needs updating, please don't hesitate to <a href="/contact">contact us</a>.</p>
          <p><strong>Disclaimer:</strong> Our ratings and reviews are based on our research and opinions. Trading involves risk, and you should always do your own due diligence before joining any prop firm.</p>
        </CardContent>
      </Card>
    </div>
  );
}
