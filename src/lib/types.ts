

export interface GlobalOffer {
  id: string;
  text: string;
  affiliateLink: string;
  isActive: boolean;
}

export interface AccountTier {
  id: string;
  name?: string; // e.g., "$50K Advanced Challenge" or "100K Evaluation"
  size: number; // e.g., 50000, 100000
  evaluationFee: number;
  activationFee?: number; // Optional, as not all tiers/firms have it
  resetFee?: number; // Optional, typical cost for one reset
  // Future: could include tier-specific profit split, drawdown, etc.
  discountPercentage?: number; // Optional field for discounts
  profitTargetPercentage?: number | null;
  drawdownPercentage?: number | null;
  dailyLossLimitPercentage?: number | null;
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
  activationFee?: string; // General activation fee info for display in table, e.g., "Free", "$99", "N/A"
  challengeType?: string; // e.g., 1-step, 2-step
  accountTiers?: AccountTier[]; // Detailed tiers for the calculator
  promo?: string;
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

// Types for Free Resources

export type FreeResourceType =
  | "Free Video Course Series"
  | "Audiobook Trial Offer"
  | "PDF Guide"
  | "Free Tool/Trial";

export interface VideoLesson {
  lessonTitle: string;
  videoEmbedCodeOrURL?: string; // For YouTube embeds or similar
  lessonDescription: string; // Simplified from Block Content
  lessonKeyTakeaways?: string[];
  lessonCTAText?: string;
  lessonCTALink?: string;
}

export interface BookListing {
  bookTitle: string;
  bookAuthor?: string;
  bookCoverImage?: string;
  bookDescription?: string;
  bookAudibleAffiliateLink: string;
  bookSampleLink?: string; // Link to Audible sample player/page
}

export interface FreeResourceItem {
  id: string;
  title: string;
  slug: string;
  author?: string;
  coverImage?: string;
  pageIntroduction?: string; // Simplified from Block Content
  mainAffiliateLink?: string; // Required for some types, so optional here
  mainCTAText?: string;
  resourceType: FreeResourceType;
  isFeatured?: boolean;
  concludingCTASection?: string; // Simplified from Block Content
  videoLessons?: VideoLesson[];
  bookListings?: BookListing[];
}
