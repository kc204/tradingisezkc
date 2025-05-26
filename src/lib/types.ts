
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

// New types for Free Resources Section
export interface VideoLesson {
  lessonTitle: string;
  videoEmbedCodeOrURL: string;
  lessonDescription: string; // Assuming simplified string, not Block Content for mock
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
  bookSampleLink?: string;
}

export type FreeResourceType = 
  | "Free Video Course Series"
  | "Audiobook Trial Offer"
  | "PDF Guide"
  | "Free Tool/Trial";

export interface FreeResourceItem {
  id: string; // Added for key prop
  title: string;
  slug: string;
  author?: string;
  coverImage?: string;
  pageIntroduction?: string; // Assuming simplified string for mock
  mainAffiliateLink: string;
  mainCTAText?: string;
  resourceType: FreeResourceType;
  isFeatured?: boolean;
  concludingCTASection?: string; // Assuming simplified string for mock
  videoLessons?: VideoLesson[];
  bookListings?: BookListing[];
}
