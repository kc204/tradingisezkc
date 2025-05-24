import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const metadata = {
  title: 'Terms of Service | Prop Firm Finder',
  description: 'Read the Terms of Service for Prop Firm Finder.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <FileText className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Terms of Service</h1>
        <p className="text-lg text-primary-foreground/90">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>By accessing or using Prop Firm Finder (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Prop Firm Finder's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Prop Firm Finder's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Prop Firm Finder at any time.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p>The materials on Prop Firm Finder's Website are provided on an 'as is' basis. Prop Firm Finder makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <p>Further, Prop Firm Finder does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site. Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Limitations</h3>
          <p>In no event shall Prop Firm Finder or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prop Firm Finder's Website, even if Prop Firm Finder or a Prop Firm Finder authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Affiliate Links</h3>
          <p>This Website contains affiliate links, which means we may earn a commission if you click on a link and make a purchase or sign up. This comes at no additional cost to you. Our editorial content is not influenced by affiliate partnerships. Please see our <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more information.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h3>
          <p>Prop Firm Finder reserves the right to revise these Terms at any time without notice. By using this Website you are agreeing to be bound by the then current version of these Terms.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p>If you have any questions about these Terms, please <a href="/contact">contact us</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
