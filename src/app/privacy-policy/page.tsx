import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const metadata = {
  title: 'Privacy Policy | Prop Firm Finder',
  description: 'Read the Privacy Policy for Prop Firm Finder.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center py-10 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
        <Shield className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">Privacy Policy</h1>
        <p className="text-lg text-primary-foreground/90">Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>Welcome to Prop Firm Finder ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.</p>
          <p>This privacy notice describes how we might use your information if you:</p>
          <ul>
            <li>Visit our website at [Your Website URL]</li>
            <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
          </ul>
          <p>In this privacy notice, if we refer to:</p>
          <ul>
            <li><strong>"Website"</strong>, we are referring to any website of ours that references or links to this policy</li>
            <li><strong>"Services"</strong>, we are referring to our Website, and other related services, including any sales, marketing, or events</li>
          </ul>
          <p>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
          <p>We do not collect personal information as user accounts are not part of this version. We may collect non-personal information such as browser type, operating system, and website usage data through analytics tools like Google Analytics to improve our services.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <p>Any non-personal information collected is used to:</p>
          <ul>
            <li>Analyze website traffic and user behavior to improve our Website and Services.</li>
            <li>Understand user preferences to enhance user experience.</li>
            <li>Monitor the effectiveness of our affiliate partnerships.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Cookies and Tracking Technologies</h3>
          <p>We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
          <p>Our affiliate partners may also use cookies to track referrals from our Website.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Affiliate Disclosure</h3>
          <p>Prop Firm Finder participates in affiliate marketing programs. This means we may earn a commission if you click on an affiliate link and make a purchase or sign up for a service. This does not affect the price you pay. Please see our <a href="/affiliate-disclosure">Affiliate Disclosure</a> page for more details.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h3>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please <a href="/contact">contact us</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
