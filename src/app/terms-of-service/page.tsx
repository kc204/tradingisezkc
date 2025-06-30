import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertTriangle } from "lucide-react";

export const metadata = {
  title: 'Terms & Privacy | TradingisEZ',
  description: 'Read the Terms of Service and Privacy Policy for TradingisEZ.',
};

export default function TermsAndPrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-4">
          <FileText className="w-12 h-12 text-primary-foreground" />
          <Shield className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-primary-foreground mb-2 mt-4">Terms of Service & Privacy Policy</h1>
        <p className="text-lg text-primary-foreground/90">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <Card className="shadow-lg border-2 border-destructive">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-destructive">
            <AlertTriangle className="w-6 h-6 mr-2" /> Important Disclaimer: For Informational Purposes Only
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="text-destructive-foreground">
            All content, reviews, comparisons, tools, and resources provided on TradingisEZ are for <strong>informational and entertainment purposes only</strong>. The information on this website is not, and should not be interpreted as, financial advice, investment advice, a recommendation to buy or sell any security or asset, or an offer to enter into any transaction.
          </p>
          <p  className="text-destructive-foreground">
            Trading, especially in futures and cryptocurrencies, involves a substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. You should not make any financial, investment, or trading decisions based on any of the information presented on this website without undertaking independent due diligence and consultation with a professional financial advisor. We are not liable for any loss or damage which may arise directly or indirectly from use of or reliance on such information.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-6 mb-2">1. Agreement to Terms</h3>
          <p>By accessing or using TradingisEZ (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on TradingisEZ's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">3. Affiliate Links & Advertising</h3>
          <p>This Website contains affiliate links, which means we may earn a commission if you click on a link and make a purchase or sign up. This comes at no additional cost to you. Our editorial content is not influenced by affiliate partnerships. Please see our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more information.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4. Limitations of Liability</h3>
          <p>In no event shall TradingisEZ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TradingisEZ's Website, even if TradingisEZ or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
           <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
          <p>We do not collect personal information as user accounts are not part of this version. We may collect non-personal information such as browser type, operating system, and website usage data through analytics tools to improve our services.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
          <p>Any non-personal information collected is used to analyze website traffic and user behavior to improve our Website and Services and to monitor the effectiveness of our affiliate partnerships.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h3>
          <p>We may use cookies and similar tracking technologies to track the activity on our Service. Our affiliate partners also use cookies to track referrals from our Website.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">General Provisions</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to These Terms</h3>
          <p>We may update our Terms and Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any changes.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p>If you have any questions about these Terms, please <a href="/contact">contact us</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
