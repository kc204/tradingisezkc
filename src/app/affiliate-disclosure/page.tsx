import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";

export const metadata = {
  title: 'Affiliate Disclosure | TradingisEZ',
  description: 'Read the Affiliate Disclosure for TradingisEZ.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <Handshake className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Affiliate Disclosure</h1>
        <p className="text-lg text-primary-foreground/90">Transparency is important to us.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Our Commitment to Transparency</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>At TradingisEZ, our mission is to provide traders with valuable, unbiased information and resources to help them succeed. To support our work and keep our content free, we participate in affiliate marketing programs.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">What Are Affiliate Links?</h3>
          <p>Throughout our website, you may find links to third-party products and services (such as proprietary trading firms, trading tools, courses, etc.). These links may be affiliate links. This means that if you click on one of these links and subsequently make a purchase or sign up for a service on the third-party website, we may receive a small commission or referral fee. This comes at <strong>no additional cost to you</strong>.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">How Does This Affect You?</h3>
          <p>Using our affiliate links to make purchases helps support TradingisEZ, allowing us to continue creating high-quality content, maintaining the website, and expanding our resources. The price you pay for any product or service is the same whether you use our affiliate link or go directly to the vendor's website.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Our Editorial Independence</h3>
          <p>Our reviews, comparisons, and recommendations are based on thorough research, analysis, and, where applicable, our team's experience. While we may receive compensation through affiliate links, this does not influence our editorial content, the topics we cover, or the opinions we express. We strive to provide honest and objective information to help you make the best decisions for your trading journey.</p>
          <p>We only recommend products and services that we believe will provide value to our readers. The trust of our audience is paramount, and we are committed to maintaining that trust through transparency and integrity.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Your Support</h3>
          <p>By using our affiliate links, you are supporting TradingisEZ, and we genuinely appreciate it. This support enables us to continue our mission of empowering traders.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Questions?</h3>
          <p>If you have any questions regarding our affiliate disclosure or any of the products/services we feature, please do not hesitate to <a href="/contact">contact us</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
