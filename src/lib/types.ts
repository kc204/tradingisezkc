
export interface GlobalOffer {
  id: string;
  text: string;
  affiliateLink: string;
  isActive: boolean;
}

export interface PropFirm {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  affiliateLink: string;
  briefDescription: string;
  fullReview?: string; // Block content typically, simplified to string
  pros?: string[]; // Simplified
  cons?: string[]; // Simplified
  keyFeatures?: string[];
  keyInfoSnippets?: { label: string; value: string }[];
  offerBadgeLabel?: string;
  fundingModels?: string[];
  profitSplit?: string;
  drawdownRules?: string;
  profitTarget?: string;
  tradableInstruments?: string[];
  platforms?: string[];
  rating?: number; // e.g., 1-5
  isFeatured?: boolean;
  minAccountSize?: number;
  maxAccountSize?: number;
  minChallengeCost?: number;
  maxChallengeCost?: number;
  activationFee?: string; // e.g., "Free", "$99", "N/A"
  challengeType?: string; // e.g., 1-step, 2-step
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  publishedDate: string;
  category: string; // Simplified, could be an object with id/name
  featuredImageUrl?: string;
  excerpt: string;
  // mainContent: string; // Block content, simplified
}

export type TradingResource = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  websiteUrl: string;
  affiliateLink: string;
  description: string;
  resourceType: 'Guide' | 'Tool' | 'News' | 'Course';
};
