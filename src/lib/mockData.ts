
import type { GlobalOffer, PropFirm, Article, TradingResource } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'VISIBLE OFFER TEXT TEST', affiliateLink: '#', isActive: true },
  { id: '2', text: 'Take Profit Trader: Up to 90% profit split!', affiliateLink: '#', isActive: true },
  { id: '3', text: 'NewFirmX: 10% bonus on payout with code FINDER10', affiliateLink: '#', isActive: true },
];

export const mockPropFirms: PropFirm[] = [
  {
    id: '1',
    slug: 'apex-trader-funding',
    name: 'Apex Trader Funding',
    logoUrl: 'https://placehold.co/100x50.png?text=ApexTF',
    websiteUrl: 'https://apextraderfunding.com/',
    affiliateLink: '#',
    briefDescription: 'Popular choice for futures traders, offering straightforward evaluation and scaling.',
    fullReview: 'Apex Trader Funding is well-regarded in the futures trading community for its simple evaluation process and generous profit splits. They primarily focus on futures contracts and offer a variety of account sizes to suit different trader needs. Their Rithmic-based connection is standard for futures platforms.',
    pros: ["Simple 1-step evaluation", "No daily drawdown limit on many accounts", "Trade on actual market data during evaluation", "Quick funding after passing"],
    cons: ["Primarily futures-focused", "Monthly fee for evaluation accounts until passed", "Trailing drawdown can be tricky for some"],
    keyFeatures: ['Pass in as few as 7 days', 'Up to 20 accounts allowed', 'Trade on NinjaTrader, Tradovate, Rithmic'],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '90% (first $25k per account), then 80%' },
      { label: 'Max Drawdown', value: 'Trailing Threshold' },
      { label: 'Platforms', value: 'NinjaTrader, Rithmic, Tradovate' },
    ],
    offerBadgeLabel: 'Pass in 7 Days!',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '90% (first $25k), then 80%',
    drawdownRules: 'Trailing Threshold Drawdown (varies by account size)',
    profitTarget: '6% - 7% (varies by account size)',
    tradableInstruments: ['Futures (E-mini, Micro, etc.)'],
    platforms: ['NinjaTrader', 'Rithmic', 'Tradovate', 'TradingView (via Tradovate)'],
    rating: 4.7,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 300000,
    minChallengeCost: 137,
    maxChallengeCost: 657,
    activationFee: 'None (for PA accounts)',
    challengeType: '1-Step Evaluation',
  },
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://placehold.co/100x50.png?text=TPT',
    websiteUrl: '#',
    affiliateLink: '#',
    briefDescription: 'Futures trading prop firm with multiple evaluation options and fast payouts.',
    fullReview: 'Take Profit Trader offers various funding paths for futures traders, including different challenge types and account sizes. They emphasize quick payout processing and provide access to popular futures trading platforms. Their rules are generally straightforward, focusing on consistency and risk management.',
    pros: ['Multiple challenge types (1-step, 2-step)', 'Fast payout process', 'No scaling targets required for payout'],
    cons: ['Relatively newer in the space', 'Some rules can be strict depending on challenge type'],
    keyFeatures: ['Payouts in as little as 5 days', 'NinjaTrader and Tradovate support', 'End-of-Day drawdown option'],
     keyInfoSnippets: [
      { label: 'Profit Split', value: 'Up to 90%' },
      { label: 'Max Drawdown', value: 'Varies (EOD or Trailing)' },
      { label: 'Platforms', value: 'NinjaTrader, Tradovate' },
    ],
    offerBadgeLabel: 'Fast Payouts',
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    profitSplit: '80% - 90%',
    drawdownRules: 'Varies by challenge: EOD or Trailing Drawdown',
    profitTarget: '6% - 10% (varies)',
    tradableInstruments: ['Futures'],
    platforms: ['NinjaTrader', 'Tradovate', 'TradingView (via Tradovate)'],
    rating: 4.6,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150,
    maxChallengeCost: 360,
    activationFee: 'None (for PA accounts)',
    challengeType: '1-Step, 2-Step',
  },
  {
    id: '3',
    slug: 'elite-trader-funding',
    name: 'EliteTraderFunding',
    logoUrl: 'https://placehold.co/100x50.png?text=Elite',
    websiteUrl: '#',
    affiliateLink: '#',
    briefDescription: 'Premium firm for experienced traders seeking large capital and advanced tools.',
    fullReview: 'EliteTraderFunding offers a premium experience geared towards seasoned traders who require significant capital and sophisticated trading tools. Their evaluation processes are rigorous, reflecting the high stakes involved. They often provide dedicated support and access to a wider range of markets and instruments.',
    pros: ['Very high funding limits (up to $5M+ reported)', 'Access to advanced trading platforms and analytics', 'Dedicated account manager for high-tier traders'],
    cons: ['Higher challenge costs compared to standard firms', 'More stringent qualification requirements', 'May not be suitable for novice traders'],
    keyFeatures: ['Up to $5M funding achievable through scaling', 'Customizable trading conditions for pro accounts', 'Potential for API access and algorithmic trading support'],
    keyInfoSnippets: [
      { label: 'Profit Split', value: 'Up to 90%' },
      { label: 'Max Drawdown', value: 'Often static (e.g., 8% overall)' },
      { label: 'Platforms', value: 'Proprietary, MT5, Quantower' },
    ],
    offerBadgeLabel: 'For Pros',
    fundingModels: ['Instant Funding (Pro Tier)', 'Multi-Step Challenge (Standard)'],
    profitSplit: '70% - 90% (tier-dependent)',
    drawdownRules: 'Typically 4-5% daily, 8-10% static overall (varies by program)',
    profitTarget: 'Varies; e.g., 10% for Phase 1, 5% for Phase 2',
    tradableInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Options', 'Futures'],
    platforms: ['Proprietary Platform', 'MetaTrader 5 (MT5)', 'Quantower', 'cTrader'],
    rating: 4.9,
    isFeatured: false,
    minAccountSize: 25000,
    maxAccountSize: 5000000,
    minChallengeCost: 250,
    maxChallengeCost: 2500,
    activationFee: 'Varies (may be included or separate)',
    challengeType: '3-Step, Instant Funding',
  },
  {
    id: '4',
    slug: 'tradify-funding',
    name: 'Tradify',
    logoUrl: 'https://placehold.co/100x50.png?text=Tradify',
    websiteUrl: '#', // Replace with actual if known
    affiliateLink: '#', // Replace with actual affiliate link
    briefDescription: 'Futures prop firm with multiple account types, 100% profit split up to $15K, and flexible trading conditions.',
    fullReview: "Tradify offers a range of account types including Advanced Challenges, Growth Challenges, and Straight to Sim Funded Accounts, catering to different trader preferences. They provide a generous 100% profit split on the first $15,000, then 90% to the trader. Key features include allowing news trading, EAs, and supporting popular platforms like Tradovate, NinjaTrader, and TradingView. After four successful payouts from a Sim Funded account, traders can transition to a Live Funded account with potentially uncapped, same-day payouts.",
    pros: [
      "Multiple account types (Advanced, Growth, Straight to Sim)",
      "100% profit split on first $15,000, then 90%",
      "Supports Tradovate, NinjaTrader, TradingView",
      "News trading and EAs allowed",
      "Transition to Live Funded accounts with favorable terms"
    ],
    cons: [
      "Consistency rules apply (35% or 20% depending on account)",
      "Activation fee for Advanced Challenge accounts ($125)",
      "Minimum trading day requirements for payouts and Live transition"
    ],
    keyFeatures: [
      '100% profit split up to $15K',
      'News trading and EAs permitted',
      'Supports Tradovate, NinjaTrader, TradingView',
      'Transition to Live accounts after 4 payouts'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $15k), then 90%' },
      { label: 'Platforms', value: 'Tradovate, NinjaTrader, TradingView' },
      { label: 'Max Accounts', value: '7 active funded' }
    ],
    offerBadgeLabel: '100% up to $15K',
    fundingModels: ["Advanced Challenge", "Growth Challenge", "Straight to Sim Funded"],
    profitSplit: '100% on first $15,000, then 90/10',
    drawdownRules: 'Intraday trailing (Advanced), EOD trailing (Growth, Sim)',
    profitTarget: '6% (Challenges) / None (Direct Sim)',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT, Coinbase Derivatives)'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.3,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 69, // Monthly for Advanced $50K
    maxChallengeCost: 729, // One-time for Straight to Sim $150K
    activationFee: '$125 (Advanced) / None (Others)',
    challengeType: 'Evaluation Challenges, Direct Funding',
  },
];

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'understanding-prop-firm-rules',
    title: 'Understanding Prop Firm Rules: A Beginner&apos;s Guide',
    publishedDate: '2024-05-20',
    category: 'Guides',
    featuredImageUrl: 'https://placehold.co/600x400.png',
    excerpt: 'Navigating the complex rules of prop firms can be daunting. This guide breaks it down for you.'
  },
  {
    id: '2',
    slug: 'top-5-mistakes-traders-make-in-challenges',
    title: 'Top 5 Mistakes Traders Make in Prop Firm Challenges',
    publishedDate: '2024-05-15',
    category: 'Trading Tips',
    featuredImageUrl: 'https://placehold.co/600x400.png',
    excerpt: 'Avoid these common pitfalls to increase your chances of getting funded.'
  },
  {
    id: '3',
    slug: 'crypto-prop-firms-the-new-frontier',
    title: 'Crypto Prop Firms: The New Frontier for Digital Asset Traders',
    publishedDate: '2024-05-28',
    category: 'Crypto',
    featuredImageUrl: 'https://placehold.co/600x400.png',
    excerpt: 'Explore how proprietary trading is expanding into the cryptocurrency market.'
  },
];

export const mockTradingResources: TradingResource[] = [
  {
    id: 'tr1',
    name: 'TradingView',
    slug: 'tradingview',
    logoUrl: 'https://placehold.co/100x50.png?text=TV',
    websiteUrl: '#',
    affiliateLink: '#',
    description: 'The best charting platform and social network for traders and investors.',
    resourceType: 'Tool',
  },
  {
    id: 'tr2',
    name: 'Babypips School of Pipsology',
    slug: 'babypips',
    logoUrl: 'https://placehold.co/100x50.png?text=BP',
    websiteUrl: '#',
    affiliateLink: '#',
    description: 'Free online course to learn Forex trading from beginner to advanced.',
    resourceType: 'Course',
  },
  {
    id: 'tr3',
    name: 'CoinDesk',
    slug: 'coindesk',
    logoUrl: 'https://placehold.co/100x50.png?text=CD',
    websiteUrl: '#',
    affiliateLink: '#',
    description: 'Leading news source for cryptocurrency, blockchain and digital assets.',
    resourceType: 'News',
  },
];

export const mockGlobalOffersTestData: GlobalOffer[] = [ 
  { id: 'g1', text: 'Apex Trader Funding: 50% OFF Lifetime Discount!', affiliateLink: '#', isActive: true },
  { id: 'g2', text: 'Take Profit Trader: Pass Guarantee or Free Retry!', affiliateLink: '#', isActive: true },
  { id: 'g3', text: 'Tradify: Get a 10% bonus on your first payout with code EZ10!', affiliateLink: '#', isActive: true },
];
