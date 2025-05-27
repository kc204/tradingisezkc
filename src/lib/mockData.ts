
import type { GlobalOffer, PropFirm, Article, TradingResource, FreeResourceItem, VideoLesson, BookListing, AccountTier } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'VISIBLE OFFER TEXT TEST', affiliateLink: '#', isActive: true },
  { id: '2', text: 'Take Profit Trader: Up to 90% profit split!', affiliateLink: '#', isActive: true },
  { id: '3', text: 'Tradify: 10% bonus on payout with code FINDER10', affiliateLink: '#', isActive: true },
];

const apexAccountTiers: AccountTier[] = [
  { id: 'apex-25k', size: 25000, name: '$25K Account', evaluationFee: 137, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-50k', size: 50000, name: '$50K Account', evaluationFee: 167, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-100k', size: 100000, name: '$100K Account', evaluationFee: 207, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-150k', size: 150000, name: '$150K Account', evaluationFee: 297, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-300k', size: 300000, name: '$300K Account', evaluationFee: 657, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
];

const tptAccountTiers: AccountTier[] = [
  { id: 'tpt-25k-eval', name: '$25K Evaluation', size: 25000, evaluationFee: 150, activationFee: 130, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: 2 }, // DLL based on $500 for $25k
  { id: 'tpt-50k-eval', name: '$50K Evaluation', size: 50000, evaluationFee: 170, activationFee: 130, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.2 }, // DLL based on $1100 for $50k
  { id: 'tpt-75k-eval', name: '$75K Evaluation', size: 75000, evaluationFee: 245, activationFee: 130, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.13 }, // DLL for $75k
  { id: 'tpt-100k-eval', name: '$100K Evaluation', size: 100000, evaluationFee: 330, activationFee: 130, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 }, // DLL for $100k
  { id: 'tpt-150k-eval', name: '$150K Evaluation', size: 150000, evaluationFee: 360, activationFee: 130, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 }, // DLL for $150k
];


const eliteAccountTiers: AccountTier[] = [
  { id: 'elite-25k', size: 25000, name: '$25K Standard', evaluationFee: 250, activationFee: 99, resetFee: 125, profitTargetPercentage: 10, drawdownPercentage: 8, dailyLossLimitPercentage: 4 },
  { id: 'elite-100k', size: 100000, name: '$100K Standard', evaluationFee: 500, activationFee: 199, resetFee: 250, profitTargetPercentage: 10, drawdownPercentage: 8, dailyLossLimitPercentage: 4 },
  { id: 'elite-500k', size: 500000, name: '$500K Pro Instant', evaluationFee: 0, activationFee: 2500, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null }, // Example Instant
];

const tradifyAccountTiers: AccountTier[] = [
  // Advanced Challenge
  { id: 'tradify-50k-adv', name: '$50K Advanced Challenge', size: 50000, evaluationFee: 99, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $2K DD for $50K
  { id: 'tradify-100k-adv', name: '$100K Advanced Challenge', size: 100000, evaluationFee: 179, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // Assuming similar % for DD
  { id: 'tradify-150k-adv', name: '$150K Advanced Challenge', size: 150000, evaluationFee: 229, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // Assuming similar % for DD
  // Growth Challenge
  { id: 'tradify-50k-growth', name: '$50K Growth Challenge', size: 50000, evaluationFee: 139, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $1250 DLL for $50K
  { id: 'tradify-100k-growth', name: '$100K Growth Challenge', size: 100000, evaluationFee: 179, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // Assuming similar %
  { id: 'tradify-150k-growth', name: '$150K Growth Challenge', size: 150000, evaluationFee: 339, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // Assuming similar % for DLL / Fees changed based on user update
  // Straight to Sim Funded
  { id: 'tradify-25k-sim', name: '$25K Straight to Sim', size: 25000, evaluationFee: 375, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $1K DD for $25K
  { id: 'tradify-50k-sim', name: '$50K Straight to Sim', size: 50000, evaluationFee: 549, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $1250 DLL for $50K
  { id: 'tradify-100k-sim', name: '$100K Straight to Sim', size: 100000, evaluationFee: 629, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // Assuming similar %
  { id: 'tradify-150k-sim', name: '$150K Straight to Sim', size: 150000, evaluationFee: 700, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // Assuming similar %
];


export const mockPropFirms: PropFirm[] = [
  {
    id: '1',
    slug: 'apex-trader-funding',
    name: 'Apex Trader Funding',
    logoUrl: 'https://placehold.co/100x50.png?text=ApexTF',
    websiteUrl: 'https://apextraderfunding.com/',
    affiliateLink: 'https://apextraderfunding.com/member/aff/go/onlypropfirms?c=DEFAULT',
    briefDescription: 'Popular choice for futures traders, offering straightforward evaluation and scaling.',
    fullReview: 'Apex Trader Funding is well-regarded in the futures trading community for its simple evaluation process and generous profit splits. They primarily focus on futures contracts and offer a variety of account sizes to suit different trader needs. Their Rithmic-based connection is standard for futures platforms. They allow up to 20 Performance Accounts.',
    pros: ["Simple 1-step evaluation", "No daily drawdown limit on evaluation accounts (trailing threshold applies)", "Trade on actual market data during evaluation", "Quick funding after passing", "Allows up to 20 Performance Accounts"],
    cons: ["Primarily futures-focused", "Monthly fee for evaluation accounts until passed", "Trailing drawdown can be tricky for some"],
    keyFeatures: ['Pass in as few as 7 days', 'Up to 20 accounts allowed', 'Trade on NinjaTrader, Tradovate, Rithmic', '90% profit split on first $25k per account, then 80%'],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '90% (first $25k per account), then 80%' },
      { label: 'Max Drawdown', value: 'Trailing Threshold (varies)' },
      { label: 'Platforms', value: 'NinjaTrader, Rithmic, Tradovate' },
    ],
    offerBadgeLabel: 'Pass in 7 Days!',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '90% (first $25k), then 80%',
    drawdownRules: 'Trailing Threshold Drawdown (varies by account size)',
    profitTarget: '6% - 7%',
    tradableInstruments: ['Futures (E-mini, Micro, etc.)'],
    platforms: ['NinjaTrader', 'Rithmic', 'Tradovate', 'TradingView (via Tradovate)'],
    rating: 4.7,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 300000,
    minChallengeCost: 137, // Smallest PA eval
    maxChallengeCost: 657, // Largest PA eval
    activationFee: 'None (for PA accounts)',
    challengeType: '1-Step Evaluation',
    accountTiers: apexAccountTiers,
  },
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://placehold.co/100x50.png?text=TPT',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/onlypropfirms',
    briefDescription: 'Futures prop firm with one-step evaluations and choice of PRO or PRO+ funded accounts.',
    fullReview: `Take Profit Trader (TPT) provides a one-step evaluation for futures traders. After passing, traders can choose between a PRO account (simulated, 80% split, trailing drawdown) or a PRO+ account (live, 90% split, no trailing drawdown, monthly data fee).
Evaluation rules include a minimum of 5 trading days, a 50% consistency rule (no single day's profit over 50% of total profit target), and EOD trailing drawdown. Daily loss limits also apply during evaluation.
PRO accounts have a $130 one-time activation fee and continue with a trailing drawdown. PRO+ accounts have a $135 monthly data fee but no trailing drawdown. Both funded account types have news trading restrictions and do not permit copy trading.`,
    pros: [
        'One-step evaluation process',
        'Choice of PRO (sim) or PRO+ (live) funded accounts',
        '90% profit split option with PRO+ account',
        'No trailing drawdown on PRO+ account',
        'Free licenses for NinjaTrader and Tradovate'
    ],
    cons: [
        'Consistency rule (50%) during evaluation',
        'News trading restrictions on funded accounts',
        'Copy trading not permitted',
        'PRO+ account has a monthly data fee ($135)',
        'Trailing drawdown on PRO account can be challenging'
    ],
    keyFeatures: [
        'One-step evaluation with 5-day minimum',
        'PRO (80% split, sim) & PRO+ (90% split, live) funded options',
        'Platforms: Tradovate, NinjaTrader, TradingView',
        'Data via CQG and Rithmic',
        'Withdrawals via Plaid, PayPal, or Wise'
    ],
     keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (PRO) / 90% (PRO+)' },
      { label: 'Max Drawdown', value: 'Trailing (Eval & PRO) / None (PRO+)' },
      { label: 'Platforms', value: 'NinjaTrader, Tradovate, TradingView' },
      { label: 'Activation Fee', value: '$130 (PRO) / $135 monthly data (PRO+)'}
    ],
    offerBadgeLabel: 'PRO or PRO+ Funded',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '80% (PRO) / 90% (PRO+)',
    drawdownRules: 'Trailing (Evaluation & PRO) / No Trailing Drawdown (PRO+)',
    profitTarget: '6% (Evaluation)',
    tradableInstruments: ['Futures'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.6,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150,
    maxChallengeCost: 360,
    activationFee: '$130 (PRO Account)', 
    challengeType: '1-Step Evaluation (5 day min, 50% consistency)',
    accountTiers: tptAccountTiers,
  },
  {
    id: '3',
    slug: 'elite-trader-funding',
    name: 'EliteTraderFunding',
    logoUrl: 'https://placehold.co/100x50.png?text=Elite',
    websiteUrl: '#',
    affiliateLink: 'https://www.elitetraderfunding.com/?ref=onlypropfirms',
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
    profitTarget: '10% / 5%',
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
    accountTiers: eliteAccountTiers,
  },
  {
    id: '4',
    name: 'Tradify',
    slug: 'tradify',
    logoUrl: 'https://placehold.co/100x50.png?text=Tradify',
    websiteUrl: 'https://tradify.com/', // Placeholder
    affiliateLink: 'https://tradify.com/onlypropfirms', // Placeholder
    isFeatured: true,
    briefDescription: 'Futures prop firm with multiple account types, 100% profit split up to $15K, and flexible trading conditions.',
    fullReview: `Tradify offers three main account paths: Advanced Challenge, Growth Challenge, and Straight to Sim Funded.
    Advanced Challenge: Monthly fees ($99-$229), intraday trailing drawdown, 35% consistency rule, $125 activation fee post-evaluation. 100% profit up to $15K, then 90%.
    Growth Challenge: Monthly fees ($99-$229, slightly different structure than advanced per user info - this data uses $139-$339), end-of-day trailing drawdown, 35% consistency, no activation fee. 100% profit up to $15K, then 90%. Soft daily loss limit.
    Straight to Sim Funded: One-time fee ($375-$700, discounts available), EOD trailing drawdown, 20% consistency. No activation fee. Payouts are tiered. 100% profit up to $15K, then 90%.
    All types support Tradovate, NinjaTrader, TradingView, allow news trading & EAs. Max 7 active accounts, copy trading allowed. Transition to Live Funded accounts possible after four Sim payouts, offering better terms like no consistency rule and same-day payouts. Minimum payout $1000.`,
    pros: [
      "Multiple account types (Advanced, Growth, Straight to Sim)",
      "100% profit split on first $15,000, then 90%",
      "Supports Tradovate, NinjaTrader, TradingView",
      "News trading and EAs allowed",
      "Up to 7 active funded accounts, copy trading permitted",
      "Transition to Live Funded accounts with favorable terms",
      "End-of-day drawdown option available (Growth & Sim)"
    ],
    cons: [
      "Consistency rules apply (35% for Challenges, 20% for Sim)",
      "Activation fee for Advanced Challenge accounts ($125)",
      "Monthly fees for Challenge accounts",
      "Tiered payout structure and specific requirements for Straight to Sim accounts",
      "Minimum trading day requirements for payouts for Sim accounts (10 days)"
    ],
    keyFeatures: [
      '100% profit split up to $15K, then 90/10',
      'News trading and EAs permitted',
      'Supports Tradovate, NinjaTrader, TradingView',
      'Transition to Live accounts after 4 Sim payouts',
      'Maximum of 7 active funded accounts',
      'Copy trading allowed',
      'Advanced (intraday DD) & Growth (EOD DD) Challenges',
      'Straight to Sim (instant funding) option'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $15k), then 90%' },
      { label: 'Platforms', value: 'Tradovate, NinjaTrader, TradingView' },
      { label: 'Max Accounts', value: '7 active funded' },
      { label: 'Funding Types', value: 'Challenges, Instant Sim'}
    ],
    offerBadgeLabel: '100% up to $15K',
    fundingModels: ["Advanced Challenge", "Growth Challenge", "Straight to Sim Funded"],
    profitSplit: '100% on first $15,000, then 90/10',
    drawdownRules: 'Intraday trailing (Advanced), EOD trailing (Growth, Sim)',
    profitTarget: '6% (Challenges), Varies by tier (Sim Funded)',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT, Coinbase Derivatives)'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.5, 
    minAccountSize: 25000, 
    maxAccountSize: 150000, 
    minChallengeCost: 99, // Lowest monthly fee for $50K Advanced Challenge
    maxChallengeCost: 700, // Highest one-time fee for $150K Sim
    activationFee: '$125 (Advanced Challenge), None (Growth/Sim)',
    challengeType: 'Evaluation Challenges (Advanced/Growth), Direct Sim Funding',
    accountTiers: tradifyAccountTiers,
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
    affiliateLink: 'https://www.tradingview.com/?aff_id=152856',
    description: 'Popular charting platform and social network for traders and investors.',
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
];

export const mockGlobalOffersTestData: GlobalOffer[] = [
  { id: 'g1', text: 'Apex Trader Funding: 50% OFF Lifetime Discount!', affiliateLink: '#', isActive: true },
  { id: 'g2', text: 'Take Profit Trader: Pass Guarantee or Free Retry!', affiliateLink: '#', isActive: true },
  { id: 'g3', text: 'Tradify: Get a 10% bonus on your first payout with code EZ10!', affiliateLink: '#', isActive: true },
];


// Mock Data for Free Resources
const alBrooksSampleLessons: VideoLesson[] = [
  {
    lessonTitle: "Brooks Trading Course Sample: 12A Market Cycle",
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    lessonDescription: "Learn the fundamentals of how Al Brooks perceives market structure and its importance in price action trading.",
    lessonKeyTakeaways: ["Key Trendlines", "Support & Resistance", "Market Cycles"],
    lessonCTAText: "Watch Full Series",
    lessonCTALink: "#",
  },
  {
    lessonTitle: "Lesson 2: Bar-by-Bar Analysis Introduction",
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder, change to relevant if available
    lessonDescription: "An introduction to Al Brooks' detailed bar-by-bar analysis technique for making trading decisions.",
    lessonKeyTakeaways: ["Candlestick signals", "Volume interpretation", "Context is key"],
    lessonCTAText: "Explore More Samples",
    lessonCTALink: "#",
  },
];

const sampleBookListings: BookListing[] = [
  {
    bookTitle: "Trading in the Zone",
    bookAuthor: "Mark Douglas",
    bookCoverImage: "https://placehold.co/300x450.png?text=Trading+In+Zone",
    bookDescription: "Master the mental game of trading with this classic guide to trading psychology.",
    bookAudibleAffiliateLink: "#audible-trading-in-zone",
    bookSampleLink: "#audible-sample-trading-in-zone",
  },
  {
    bookTitle: "Reminiscences of a Stock Operator",
    bookAuthor: "Edwin Lefèvre",
    bookCoverImage: "https://placehold.co/300x450.png?text=Stock+Operator",
    bookDescription: "A fictionalized biography of Jesse Livermore, one of the greatest stock traders of all time.",
    bookAudibleAffiliateLink: "#audible-stock-operator",
    bookSampleLink: "#audible-sample-stock-operator",
  },
  {
    bookTitle: "Market Wizards: Interviews with Top Traders",
    bookAuthor: "Jack D. Schwager",
    bookCoverImage: "https://placehold.co/300x450.png?text=Market+Wizards",
    bookDescription: "Insights from the minds of Wall Street's most successful traders.",
    bookAudibleAffiliateLink: "#audible-market-wizards",
    bookSampleLink: "#audible-sample-market-wizards",
  },
];

export const mockFreeResources: FreeResourceItem[] = [
  {
    id: "fr1",
    title: "Al Brooks Price Action: Free Video Lessons",
    slug: "al-brooks-course",
    author: "Al Brooks",
    coverImage: "https://placehold.co/600x400.png?text=Al+Brooks+Course",
    pageIntroduction: "Get a taste of Al Brooks' renowned price action trading methodology with these free sample video lessons. Understand how a professional trader reads charts bar by bar.",
    mainAffiliateLink: "#al-brooks-full-course", // Link to the full paid course
    mainCTAText: "Access Full Al Brooks Course",
    resourceType: "Free Video Course Series",
    isFeatured: true,
    videoLessons: alBrooksSampleLessons,
    concludingCTASection: "Ready to dive deeper? The full Al Brooks Trading Course offers comprehensive insights into mastering price action. Click here to learn more and enroll!"
  },
  {
    id: "fr2",
    title: "Free Trading Audiobooks with Audible Trial",
    slug: "audiobooks",
    coverImage: "https://placehold.co/600x400.png?text=Trading+Audiobooks",
    pageIntroduction: "Expand your trading knowledge on the go! Listen to essential trading books for free. Explore classics on psychology, strategy, and market history.",
    mainAffiliateLink: "#audible-trial-signup", // General Audible trial signup
    mainCTAText: "Start Your Audible Free Trial",
    resourceType: "Audiobook Trial Offer",
    isFeatured: true,
    bookListings: sampleBookListings,
    concludingCTASection: "Your first audiobook is free with an Audible trial. Sign up today and start listening to these invaluable trading resources!"
  },
  {
    id: "fr3",
    title: "Ultimate Prop Firm Checklist (PDF Guide)",
    slug: "prop-firm-checklist-pdf",
    author: "TradingisEZ Team",
    coverImage: "https://placehold.co/600x400.png?text=PDF+Checklist",
    pageIntroduction: "Download our free PDF checklist to help you evaluate and choose the right proprietary trading firm. Covers key criteria, red flags, and questions to ask.",
    mainAffiliateLink: "#", // Link to the PDF download or a landing page for it
    mainCTAText: "Download Free PDF Guide",
    resourceType: "PDF Guide",
    isFeatured: true, 
    concludingCTASection: "Arm yourself with the knowledge to make an informed decision. Download the checklist now!"
  },
];
