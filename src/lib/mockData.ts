import type { GlobalOffer, PropFirm, Article, TradingResource, FreeResourceItem, VideoLesson, BookListing, AccountTier } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'VISIBLE OFFER TEXT TEST', affiliateLink: '#', isActive: true },
  { id: '2', text: 'Take Profit Trader: Up to 90% profit split!', affiliateLink: '#', isActive: true },
  { id: '3', text: 'Tradeify: 10% bonus on payout with code FINDER10', affiliateLink: '#', isActive: true }, // VERIFY CURRENT VALIDITY OF THIS PROMO CODE with Tradeify.co
];

const apexAccountTiers: AccountTier[] = [
  { id: 'apex-25k', size: 25000, name: '$25K Account', evaluationFee: 137, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-50k', size: 50000, name: '$50K Account', evaluationFee: 167, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-100k', size: 100000, name: '$100K Account', evaluationFee: 207, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-150k', size: 150000, name: '$150K Account', evaluationFee: 297, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
  { id: 'apex-300k', size: 300000, name: '$300K Account', evaluationFee: 657, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null },
];

const tptAccountTiers: AccountTier[] = [
  { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: 2 },
  { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.2 },
  { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.13 },
  { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 },
  { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 },
];

const myFundedFuturesAccountTiers: AccountTier[] = [
  { id: 'mff-starter-50k', name: '$50K Starter Plan', size: 50000, evaluationFee: 92, activationFee: 0, resetFee: 97, profitTargetPercentage: 6, drawdownPercentage: 5, dailyLossLimitPercentage: 2.4 },
  { id: 'mff-starter-plus-50k', name: '$50K Starter Plus Plan', size: 50000, evaluationFee: 92, activationFee: 0, resetFee: 127, profitTargetPercentage: 6, drawdownPercentage: 5, dailyLossLimitPercentage: null }, // This plan's current standard existence is uncertain; verify on MFFU's site.
  { id: 'mff-expert-50k', name: '$50K Expert Plan', size: 50000, evaluationFee: 227, activationFee: 0, resetFee: 227, profitTargetPercentage: 8, drawdownPercentage: 4, dailyLossLimitPercentage: null },
  { id: 'mff-expert-100k', name: '$100K Expert Plan', size: 100000, evaluationFee: 344, activationFee: 0, resetFee: 344, profitTargetPercentage: 8, drawdownPercentage: 3, dailyLossLimitPercentage: null },
  { id: 'mff-expert-150k', name: '$150K Expert Plan', size: 150000, evaluationFee: 477, activationFee: 0, resetFee: 477, profitTargetPercentage: 8, drawdownPercentage: 3, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-25k', name: '$25K Milestone Plan', size: 25000, evaluationFee: 200, activationFee: 0, resetFee: 200, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-50k', name: '$50K Milestone Plan', size: 50000, evaluationFee: 445, activationFee: 0, resetFee: 445, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-100k', name: '$100K Milestone Plan', size: 100000, evaluationFee: 555, activationFee: 0, resetFee: 555, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-150k', name: '$150K Milestone Plan', size: 150000, evaluationFee: 665, activationFee: 0, resetFee: 665, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
];

const tradeifyAccountTiers: AccountTier[] = [
  // Advanced Challenge (Intraday Trailing DD, 35% Consistency for Sim-Funded Payouts, $125 Activation for Sim-Funded)
  // EVALUATION FEES (Monthly Subscription) NEED VERIFICATION FROM TRADEIFY.CO MAIN SITE.
  { 
    id: 'tradeify-adv-50k', 
    name: '$50K Advanced Challenge', 
    size: 50000, 
    evaluationFee: 99, // VERIFY THIS PRICE
    activationFee: 125, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $2000 IDD
    dailyLossLimitPercentage: null, 
  },
  { 
    id: 'tradeify-adv-100k', 
    name: '$100K Advanced Challenge', 
    size: 100000, 
    evaluationFee: 179, // VERIFY THIS PRICE
    activationFee: 125, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $4000 IDD
    dailyLossLimitPercentage: null, 
  },
  { 
    id: 'tradeify-adv-150k', 
    name: '$150K Advanced Challenge', 
    size: 150000, 
    evaluationFee: 229, // VERIFY THIS PRICE
    activationFee: 125, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $6000 IDD
    dailyLossLimitPercentage: null, 
  },
  
  // Growth Challenge (EOD Trailing DD, 35% Consistency for Sim-Funded Payouts, No Activation Fee for Sim-Funded, Soft DLL)
  // EVALUATION FEES (Monthly Subscription) NEED VERIFICATION FROM TRADEIFY.CO MAIN SITE.
  { 
    id: 'tradeify-growth-50k', 
    name: '$50K Growth Challenge', 
    size: 50000, 
    evaluationFee: 139, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $2000 EOD DD
    dailyLossLimitPercentage: 2.5, // Soft DLL ($1250). If hit, stop for day, no breach.
  },
  { 
    id: 'tradeify-growth-100k', 
    name: '$100K Growth Challenge', 
    size: 100000, 
    evaluationFee: 179, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $4000 EOD DD
    dailyLossLimitPercentage: 2.5, // Soft DLL ($2500)
  },
  { 
    id: 'tradeify-growth-150k', 
    name: '$150K Growth Challenge', 
    size: 150000, 
    evaluationFee: 339, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 100, // VERIFY RESET POLICY/FEE
    profitTargetPercentage: 6, 
    drawdownPercentage: 4, // $6000 EOD DD
    dailyLossLimitPercentage: 2.5, // Soft DLL ($3750)
  },
  
  // Straight to Sim Funded (EOD Trailing DD, 20% Consistency, 10 Min Trading Days for 1st Payout)
  // ONE-TIME FEES NEED VERIFICATION FROM TRADEIFY.CO MAIN SITE.
  { 
    id: 'tradeify-sim-25k', 
    name: '$25K Straight to Sim', 
    size: 25000, 
    evaluationFee: 375, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 0, // VERIFY RESET POLICY (likely repurchase)
    profitTargetPercentage: null, 
    drawdownPercentage: 4, // $1000 EOD DD
    dailyLossLimitPercentage: null, // Verify if Soft DLL applies or if none.
  },
  { 
    id: 'tradeify-sim-50k', 
    name: '$50K Straight to Sim', 
    size: 50000, 
    evaluationFee: 549, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 0, // VERIFY
    profitTargetPercentage: null,
    drawdownPercentage: 4, // $2000 EOD DD
    dailyLossLimitPercentage: 2.5, // Assumed Soft DLL from Growth; VERIFY if applies to Sim and exact %.
  },
  { 
    id: 'tradeify-sim-100k', 
    name: '$100K Straight to Sim', 
    size: 100000, 
    evaluationFee: 629, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 0, // VERIFY
    profitTargetPercentage: null,
    drawdownPercentage: 4, // $4000 EOD DD
    dailyLossLimitPercentage: 2.5, // Assumed Soft DLL; VERIFY.
  },
  { 
    id: 'tradeify-sim-150k', 
    name: '$150K Straight to Sim', 
    size: 150000, 
    evaluationFee: 700, // VERIFY THIS PRICE
    activationFee: 0, 
    resetFee: 0, // VERIFY
    profitTargetPercentage: null,
    drawdownPercentage: 4, // $6000 EOD DD
    dailyLossLimitPercentage: 2.5, // Assumed Soft DLL; VERIFY.
  },
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
    minChallengeCost: 137,
    maxChallengeCost: 657,
    activationFee: 'None',
    challengeType: '1-Step Evaluation',
    accountTiers: apexAccountTiers,
  },
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://storage.googleapis.com/idx-images/take_profit_trader_logo_transparent.png',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/onlypropfirms',
    briefDescription: 'Futures prop firm with one-step evaluations and choice of PRO or PRO+ funded accounts.',
    fullReview: `Take Profit Trader (TPT) offers a one-step evaluation for futures traders. Account sizes range from $25K to $150K. Upon passing (min 5 trading days, EOD trailing drawdown, daily loss limits, and a consistency rule - typically 30-40%), traders choose between a PRO account (simulated, $130 one-time activation, 80% split, trailing DD) or a PRO+ account (live data, $135/month data fee, 90% split, no trailing DD). Both have news trading restrictions. TPT prohibits copy trading. Withdrawals via methods like PayPal and Wise (verify current options and any minimums/fees with TPT). Supports Tradovate, NinjaTrader, TradingView with CQG/Rithmic.`,
    pros: [
        'Daily Payouts!',
        'One-step evaluation process',
        'Choice of PRO (sim) or PRO+ (live data) funded accounts',
        '90% profit split option with PRO+ account',
        'No trailing drawdown on PRO+ account',
        'Free licenses for NinjaTrader and Tradovate'
    ],
    cons: [
        'Consistency rule (typically 30-40% - verify exact current % with TPT) during evaluation',
        'News trading restrictions on funded accounts',
        'Copy trading not permitted',
        'PRO+ account has a monthly data fee ($135)',
        'Trailing drawdown on PRO account can be challenging'
    ],
    keyFeatures: [
        'One-step evaluation (min 5 trading days, consistency rule - verify current % with TPT)',
        'PRO (80% split) & PRO+ (90% split) funded options',
        'Platforms: Tradovate, NinjaTrader, TradingView',
        'Data via CQG and Rithmic',
        'Payout options like PayPal, Wise (verify current methods with TPT)'
    ],
      keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (PRO) / 90% (PRO+)' },
      { label: 'Max Drawdown', value: 'Trailing (Eval & PRO) / None (PRO+)' },
      { label: 'Platforms', value: 'NinjaTrader, Tradovate, TradingView' },
      { label: 'Activation Fee', value: '$130 (PRO) / $135 monthly (PRO+ data)'}
    ],
    offerBadgeLabel: 'Daily Payouts!',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '80% (PRO) / 90% (PRO+)',
    drawdownRules: 'Trailing (Evaluation & PRO) / No Trailing Drawdown (PRO+)',
    profitTarget: '6%',
    tradableInstruments: ['Futures'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.6,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150, 
    maxChallengeCost: 360, 
    activationFee: '$130 (PRO Account) / $135 monthly (PRO+ data)',
    challengeType: '1-Step Evaluation', 
    accountTiers: tptAccountTiers,
  },
  {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: 'https://placehold.co/100x50.png?text=MFF',
    websiteUrl: 'https://myfundedfutures.com/', 
    affiliateLink: 'https://myfundedfutures.com/?aff_id=1030', 
    briefDescription: 'Futures prop firm with various plans (Starter, Expert, Milestone) and EOD trailing drawdown.',
    fullReview: `My Funded Futures offers several plans (Starter, Expert, Milestone) for futures traders, primarily featuring an End-of-Day (EOD) trailing drawdown.
    The Starter Plan includes daily loss limits and a consistency rule for its funded stage.
    The Expert Plan offers no daily loss limit or consistency rule.
    The Milestone Plan is a one-time fee program.
    A key feature is the 100% profit split on the first $10,000, then 90/10. Supports TradingView, NinjaTrader, Tradovate.`,
    pros: [
        'Multiple account plans (Starter, Expert, Milestone)',
        '100% profit split on first $10,000, then 90/10',
        'End-of-Day (EOD) trailing drawdown on most plans',
        'Expert Plan offers no daily loss limit or consistency rules',
        'Compatible with TradingView, NinjaTrader, Tradovate',
        'No minimum trading days for Expert plan'
    ],
    cons: [
        'Consistency rule for Starter Plan funded stage (40%)',
        'Monthly fees for Starter and Expert plans',
        'Inactivity rule for funded accounts',
        'Buffer zone required before payouts'
    ],
    keyFeatures: [
        '100% profit split up to $10K, then 90/10',
        'EOD Trailing Drawdown',
        'Starter, Expert, and Milestone plans',
        'No daily loss limit option (Expert plan)',
        'Bi-weekly payouts (Expert plan)'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $10k), then 90%' },
      { label: 'Drawdown Type', value: 'EOD Trailing' },
      { label: 'Platforms', value: 'TradingView, NinjaTrader, Tradovate' },
      { label: 'Account Types', value: 'Starter, Expert, Milestone'},
    ],
    offerBadgeLabel: '100% up to $10K Profit',
    fundingModels: ['Monthly Subscription (Starter, Expert)', 'One-Time Payment (Milestone)'],
    profitSplit: '100% on first $10,000, then 90/10',
    drawdownRules: 'EOD Trailing Drawdown (varies by plan)',
    profitTarget: 'Varies by plan (e.g., Starter: 6%, Expert: 8%)',
    tradableInstruments: ['Futures'],
    platforms: ['TradingView', 'NinjaTrader', 'Tradovate'],
    rating: 4.5,
    isFeatured: false,
    minAccountSize: 25000, 
    maxAccountSize: 150000,
    minChallengeCost: 92, 
    maxChallengeCost: 665, 
    activationFee: 'None', 
    challengeType: 'Evaluation (monthly or one-time fee)',
    accountTiers: myFundedFuturesAccountTiers,
  },
  {
    id: '4',
    name: 'Tradeify',
    slug: 'tradeify', 
    logoUrl: 'https://placehold.co/100x50.png?text=Tradeify', 
    websiteUrl: 'https://tradeify.co/', 
    affiliateLink: 'https://tradeify.co/YOUR-AFFILIATE-ID', // REPLACE WITH YOUR ACTUAL TRADEIFY.CO AFFILIATE LINK
    isFeatured: true, 
    briefDescription: 'Futures prop firm with Advanced (IDD), Growth (EOD DD) Challenges, and Straight to Sim Funded accounts. Offers 100% profit split on first $15K.', 
    fullReview: `Tradeify provides futures traders with three main paths:
    1. Advanced Challenge: Features an intraday trailing drawdown, a 35% consistency rule for the Sim-Funded stage, and a $125 activation fee for the Sim-Funded account after passing. Profit target is 6%. Max contracts scale with account size (e.g., 5 for $50K). (Monthly fees need verification on Tradeify.co).
    2. Growth Challenge: Uses an end-of-day trailing drawdown, a 35% consistency rule for the Sim-Funded stage, and has no activation fee after passing. It includes a soft daily loss limit (trader must stop for the day if hit, not a breach). Profit target is 6%. (Monthly fees need verification on Tradeify.co).
    3. Straight to Sim Funded: Offers instant EOD trailing drawdown Sim-Funded accounts for a one-time fee (verify prices on Tradeify.co). It has a 20% consistency rule and requires 10 minimum trading days for the first payout. No profit target for initial funding.
    All Sim-Funded accounts (from Challenges or Straight to Sim) offer a 100% profit split on the first $15,000, then 90/10. Payouts are processed on the 1st and 15th of each month, with tiered minimums (e.g., $250 for $25K, $500 for $50K). After four payouts from a Sim-Funded account, traders can transition to a True Live Funded account, which has no consistency rule and maintains the same profit split.
    Tradeify supports Tradovate, NinjaTrader, and TradingView. News trading and EAs (if compliant with other rules) are allowed. Traders can have up to 7 Sim-Funded accounts (3 True Live). Copy trading is permitted between a trader's own Tradeify accounts or from an external personal account to their Tradeify account(s); third-party signal copying is not allowed. Tradable instruments include futures from CME, COMEX, NYMEX, CBOT, and Coinbase Digital (Nano Bitcoin & Ether).`,
    pros: [
      "Multiple account types (Advanced, Growth, Straight to Sim)",
      "100% profit split on first $15,000, then 90/10", 
      "Supports Tradovate, NinjaTrader, TradingView",
      "News trading allowed; EAs permitted (under conditions)",
      "Up to 7 active Sim-Funded accounts; specific copy trading allowed", 
      "Transition to True Live Funded accounts with no consistency rule",
      "End-of-day drawdown option available (Growth & Sim)",
      "Instant funding option (Straight to Sim)"
    ],
    cons: [
      "Consistency rules apply (35% for Advanced/Growth Sim-Funded, 20% for Straight to Sim)", 
      "Activation fee for Advanced Challenge Sim-Funded account ($125)",
      "Monthly fees for Challenge accounts (Advanced & Growth) - Verify current pricing on Tradeify.co",
      "One-time fees for Straight to Sim accounts - Verify current pricing on Tradeify.co",
      "Minimum 10 trading days for first payout from Straight to Sim accounts"
    ],
    keyFeatures: [
      '100% profit split up to $15K, then 90/10',
      'News trading and EAs permitted (under conditions)',
      'Copy trading allowed (specific conditions apply)',
      'Advanced (Intraday DD) & Growth (EOD DD) Challenges',
      'Straight to Sim (instant EOD DD funding) option',
      'Transition to True Live accounts (no consistency rule)',
      'Up to 7 Sim-Funded accounts'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $15k), then 90%' }, 
      { label: 'Platforms', value: 'Tradovate, NinjaTrader, TradingView' },
      { label: 'Max Sim Accounts', value: '7 (True Live: 3)' }, 
      { label: 'Funding Types', value: 'Challenges (IDD/EOD), Instant Sim'}
    ],
    offerBadgeLabel: '100% First $15K Profit!', 
    fundingModels: ["Advanced Challenge (Intraday DD)", "Growth Challenge (EOD DD)", "Straight to Sim Funded (EOD DD)"],
    profitSplit: '100% on first $15,000, then 90/10', 
    drawdownRules: 'Advanced: Intraday trailing. Growth: End-of-day trailing. Sim: End-of-day trailing. (All confirmed values like $2K for $50K accounts)',
    profitTarget: 'Challenges: 6%. Sim Funded: None for initial funding.',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT, Coinbase Digital - Nano BTC/ETH)'], 
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'], 
    rating: 4.5, // Adjust rating based on verified info and user experience.
    minAccountSize: 25000, 
    maxAccountSize: 150000, 
    minChallengeCost: 99, // User data; VERIFY THIS PRICE on Tradeify.co
    maxChallengeCost: 700, // User data; VERIFY THIS PRICE on Tradeify.co
    activationFee: '$125 (Advanced Sim-Funded), None (Growth Sim-Funded / Straight to Sim initial)', 
    challengeType: 'Evaluation Challenges (Advanced/Growth), Direct Sim Funding',
    accountTiers: tradeifyAccountTiers, 
  },
];

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'understanding-prop-firm-rules',
    title: 'Understanding Prop Firm Rules: A Beginner\'s Guide',
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
    websiteUrl: 'https://www.tradingview.com/',
    affiliateLink: 'https://www.tradingview.com/?aff_id=152856',
    description: 'Popular charting platform and social network for traders and investors.',
    resourceType: 'Tool',
  },
  {
    id: 'tr2',
    name: 'Babypips School of Pipsology',
    slug: 'babypips',
    logoUrl: 'https://placehold.co/100x50.png?text=BP',
    websiteUrl: 'https://www.babypips.com/learn', 
    affiliateLink: '#', 
    description: 'Free online course to learn Forex trading from beginner to advanced.',
    resourceType: 'Course',
  },
];

export const mockGlobalOffersTestData: GlobalOffer[] = [
  { id: 'g1', text: 'Apex Trader Funding: 50% OFF Lifetime Discount!', affiliateLink: '#', isActive: true },
  { id: 'g2', text: 'Take Profit Trader: Pass Guarantee or Free Retry!', affiliateLink: '#', isActive: true },
  { id: 'g3', text: 'Tradeify: Get a 10% bonus on your first payout with code EZ10!', affiliateLink: '#', isActive: true }, // VERIFY CURRENT VALIDITY OF THIS PROMO CODE with Tradeify.co
];

const alBrooksSampleLessons: VideoLesson[] = [
  {
    lessonTitle: "Brooks Trading Course Sample: 12A Market Cycle",
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/_wQ5CRIQ6mc", 
    lessonDescription: "Learn the fundamentals of how Al Brooks perceives market structure and its importance in price action trading.",
    lessonKeyTakeaways: ["Key Trendlines", "Support & Resistance", "Market Cycles"],
    lessonCTAText: "Watch All 5 Lessons Free",
    lessonCTALink: "https://www.brookstradingcourse.com/free-sample-price-action-trading-videos/ref/uuc5l/", 
  },
  {
    lessonTitle: "Lesson 2: Bar-by-Bar Analysis Introduction",
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    lessonDescription: "An introduction to Al Brooks' detailed bar-by-bar analysis technique for making trading decisions.",
    lessonKeyTakeaways: ["Candlestick signals", "Volume interpretation", "Context is key"],
    lessonCTAText: "Explore More Samples",
    lessonCTALink: "https://www.brookstradingcourse.com/free-sample-price-action-trading-videos/ref/uuc5l/", 
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
    mainAffiliateLink: "https://www.brookstradingcourse.com/testimonials/ref/uuc5l/", 
    mainCTAText: "Access Full Al Brooks Course",
    resourceType: "Free Video Course Series",
    isFeatured: true,
    videoLessons: alBrooksSampleLessons,
    concludingCTASection: "Ready to dive deeper? The full Al Brooks Trading Course offers comprehensive insights into mastering price action. Click here to learn more and enroll!"
  },
  {
    id: "fr2",
    title: "Free Trading Audiobooks",
    slug: "audiobooks",
    coverImage: "https://placehold.co/600x400.png?text=Trading+Audiobooks",
    pageIntroduction: "Expand your trading knowledge on the go! Listen to essential trading books for free. Explore classics on psychology, strategy, and market history.",
    mainAffiliateLink: "#audible-trial-signup", 
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
    mainAffiliateLink: "#", 
    mainCTAText: "Download Free PDF Guide",
    resourceType: "PDF Guide",
    isFeatured: true,
    concludingCTASection: "Arm yourself with the knowledge to make an informed decision. Download the checklist now!"
  },
];