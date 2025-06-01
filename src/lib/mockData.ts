
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
  // Evaluation Accounts
  { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: 2 }, // $500 DLL from $25K * 6% DD = $1500 possible loss. Daily Loss = $25k * 2% = $500
  { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.2 }, // $1100 DLL from $50k * 4% DD = $2000 possible loss. Daily Loss = $50k * 2.2% = $1100
  { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.13 }, // $1600 DLL approx from $75k * 3.33% DD = $2497.5. Daily Loss = $75k * 2.13% = $1597.5
  { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 }, // $2200 DLL from $100k * 3% DD = $3000. Daily Loss = $100k * 2.2% = $2200
  { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2 }, // $3300 DLL from $150k * 3% DD = $4500. Daily Loss = $150k * 2.2% = $3300
  // Note: Activation fees apply when choosing PRO or PRO+ after evaluation.
];

const myFundedFuturesAccountTiers: AccountTier[] = [
  // Starter Plan
  { id: 'mff-starter-50k', name: '$50K Starter Plan', size: 50000, evaluationFee: 92, activationFee: 0, resetFee: 97, profitTargetPercentage: 6, drawdownPercentage: 5, dailyLossLimitPercentage: 2.4 }, // $3k target, $2.5k max loss, $1.2k daily loss
  // Starter Plus Plan
  { id: 'mff-starter-plus-50k', name: '$50K Starter Plus Plan', size: 50000, evaluationFee: 92, activationFee: 0, resetFee: 127, profitTargetPercentage: 6, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  // Expert Plan
  { id: 'mff-expert-50k', name: '$50K Expert Plan', size: 50000, evaluationFee: 227, activationFee: 0, resetFee: 227, profitTargetPercentage: 8, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $4k target
  { id: 'mff-expert-100k', name: '$100K Expert Plan', size: 100000, evaluationFee: 344, activationFee: 0, resetFee: 344, profitTargetPercentage: 8, drawdownPercentage: 3, dailyLossLimitPercentage: null }, // $8k target
  { id: 'mff-expert-150k', name: '$150K Expert Plan', size: 150000, evaluationFee: 477, activationFee: 0, resetFee: 477, profitTargetPercentage: 8, drawdownPercentage: 3, dailyLossLimitPercentage: null }, // $12k target
  // Milestone Plan (One-time payment for evaluationFee)
  { id: 'mff-milestone-25k', name: '$25K Milestone Plan', size: 25000, evaluationFee: 200, activationFee: 0, resetFee: 200, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-50k', name: '$50K Milestone Plan', size: 50000, evaluationFee: 445, activationFee: 0, resetFee: 445, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-100k', name: '$100K Milestone Plan', size: 100000, evaluationFee: 555, activationFee: 0, resetFee: 555, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
  { id: 'mff-milestone-150k', name: '$150K Milestone Plan', size: 150000, evaluationFee: 665, activationFee: 0, resetFee: 665, profitTargetPercentage: null, drawdownPercentage: 5, dailyLossLimitPercentage: null },
];


const tradifyAccountTiers: AccountTier[] = [
  // Advanced Challenge
  { id: 'tradify-adv-50k', name: '$50K Advanced Challenge', size: 50000, evaluationFee: 99, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $3k target, $2k IDD
  { id: 'tradify-adv-100k', name: '$100K Advanced Challenge', size: 100000, evaluationFee: 179, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $6k target, $4k IDD
  { id: 'tradify-adv-150k', name: '$150K Advanced Challenge', size: 150000, evaluationFee: 229, activationFee: 125, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $9k target, $6k IDD
  // Growth Challenge
  { id: 'tradify-growth-50k', name: '$50K Growth Challenge', size: 50000, evaluationFee: 139, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $3k target, $2k EOD DD, $1.25k soft DLL
  { id: 'tradify-growth-100k', name: '$100K Growth Challenge', size: 100000, evaluationFee: 179, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $6k target, $4k EOD DD, $2.5k soft DLL
  { id: 'tradify-growth-150k', name: '$150K Growth Challenge', size: 150000, evaluationFee: 339, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $9k target, $6k EOD DD, $3.75k soft DLL
  // Straight to Sim Funded
  { id: 'tradify-sim-25k', name: '$25K Straight to Sim', size: 25000, evaluationFee: 375, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: null }, // $1k EOD DD, no DLL
  { id: 'tradify-sim-50k', name: '$50K Straight to Sim', size: 50000, evaluationFee: 549, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $2k EOD DD, $1.25k soft DLL
  { id: 'tradify-sim-100k', name: '$100K Straight to Sim', size: 100000, evaluationFee: 629, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $4k EOD DD, $2.5k soft DLL
  { id: 'tradify-sim-150k', name: '$150K Straight to Sim', size: 150000, evaluationFee: 700, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 }, // $6k EOD DD, $3.75k soft DLL
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
    fullReview: `Take Profit Trader (TPT) offers a one-step evaluation for futures traders. Account sizes range from $25K to $150K with corresponding fees ($150-$360). Upon passing (min 5 trading days, 50% consistency rule, EOD trailing drawdown, daily loss limits), traders choose between a PRO account (simulated, $130 one-time activation, 80% split, trailing DD) or a PRO+ account (live, $135/month data fee, 90% split, no trailing DD). Both have news trading restrictions and no copy trading. Withdrawals via Plaid, PayPal, Wise (min $250, or $50 fee if less). Supports Tradovate, NinjaTrader, TradingView with CQG/Rithmic data and free licenses.`,
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
        'One-step evaluation (5-day min, 50% consistency)',
        'PRO (80% split, sim, $130 activation) & PRO+ (90% split, live, $135/mo data fee) funded options',
        'Platforms: Tradovate, NinjaTrader, TradingView',
        'Data via CQG and Rithmic',
        'Withdrawals via Plaid, PayPal, or Wise'
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
    profitTarget: '6% (Evaluation, e.g., $25K account: $1,500; $50K: $3,000; $75K: $4,500; $100K: $6,000; $150K: $9,000)',
    tradableInstruments: ['Futures'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.6,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150, // For $25K eval
    maxChallengeCost: 360, // For $150K eval
    activationFee: '$130 (PRO Account) / $135 monthly (PRO+ data)',
    challengeType: '1-Step Evaluation (5 day min, 50% consistency)',
    accountTiers: tptAccountTiers,
  },
  {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: 'https://placehold.co/100x50.png?text=MFF',
    websiteUrl: 'https://myfundedfutures.com/', // Placeholder
    affiliateLink: 'https://myfundedfutures.com/?aff_id=1030', // Placeholder
    briefDescription: 'Futures prop firm with various plans (Starter, Expert, Milestone) and EOD trailing drawdown.',
    fullReview: `My Funded Futures offers several plans for futures traders, all featuring an End-of-Day (EOD) trailing drawdown.
    Starter Plan ($50K account, ~$92/month): $3K profit target, $2.5K max loss, $1.2K daily loss. 40% consistency rule in funded stage, payouts after 5 winning days. No activation fee.
    Starter Plus Plan ($50K, similar monthly fee): No daily loss limit or consistency rule for payouts.
    Expert Plan ($50K-$150K, $227-$477/month): Higher profit targets (e.g., $4K for $50K), 3-4% trailing drawdown. No daily loss limit or consistency rule, bi-weekly payouts. Inactivity rule (1 trade/7 days).
    Milestone Plan ($25K-$150K, one-time fee): No daily loss cap, daily profit cap of 20%. Live account at phase 5.
    Profit split: 100% of first $10K, then 90/10. Reset fees vary. Supports TradingView, NinjaTrader, Tradovate.`,
    pros: [
        'Multiple account plans (Starter, Expert, Milestone)',
        '100% profit split on first $10,000, then 90/10',
        'End-of-Day (EOD) trailing drawdown on all plans',
        'Options with no daily loss limit or consistency rules (Starter Plus, Expert, Milestone)',
        'Compatible with TradingView, NinjaTrader, Tradovate',
        'No minimum trading days for some plans'
    ],
    cons: [
        'Consistency rule for Starter Plan funded stage (40%)',
        'Monthly fees for Starter and Expert plans',
        'Inactivity rule (one trade per 7 days for funded accounts)',
        'Buffer zone required before payouts'
    ],
    keyFeatures: [
        '100% profit split up to $10K, then 90/10',
        'EOD Trailing Drawdown',
        'Starter, Expert, and Milestone plans',
        'No daily loss limit options',
        'Payouts after 5 winning days (Starter) or bi-weekly (Expert)'
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
    drawdownRules: 'EOD Trailing Drawdown (varies by plan, e.g. $50K Starter: $2,500; $50K Expert: 4%; $100K Expert: 3%)',
    profitTarget: 'Varies (e.g., $50K Starter: $3,000; $50K Expert: $4,000; $100K Expert: $8,000; $150K Expert: $12,000)',
    tradableInstruments: ['Futures'],
    platforms: ['TradingView', 'NinjaTrader', 'Tradovate'],
    rating: 4.5,
    isFeatured: false,
    minAccountSize: 25000, // From Milestone Plan
    maxAccountSize: 150000,
    minChallengeCost: 92, // Starter Plan approx. monthly
    maxChallengeCost: 665, // Milestone $150K one-time/reset
    activationFee: 'None', // "No activation fee upon funding" for Starter
    challengeType: 'Evaluation (monthly or one-time fee)',
    accountTiers: myFundedFuturesAccountTiers,
  },
  {
    id: '4',
    name: 'Tradify',
    slug: 'tradify',
    logoUrl: 'https://placehold.co/100x50.png?text=Tradify',
    websiteUrl: 'https://tradify.com/', // Placeholder - use actual if known
    affiliateLink: 'https://tradify.com/onlypropfirms', // Placeholder - use actual if known
    isFeatured: true,
    briefDescription: 'Futures prop firm with Advanced (IDD), Growth (EOD DD) Challenges, and Straight to Sim Funded accounts. Offers 100% profit split up to $15K.',
    fullReview: `Tradify offers three main account paths: Advanced Challenge (intraday trailing drawdown, 35% consistency, $125 activation), Growth Challenge (end-of-day trailing drawdown, 35% consistency, no activation fee), and Straight to Sim Funded (instant funding, EOD trailing, 20% consistency).
    Advanced Challenge: $50K ($99/mo), $100K ($179/mo), $150K ($229/mo). 6% profit target (e.g., $3K for $50K). Max contracts 5-15 minis.
    Growth Challenge: Fees & targets same as Advanced. Soft daily loss limit.
    Straight to Sim: $25K ($375 one-time), $50K ($549), $100K ($629), $150K ($700). No profit target for funding. Requires 10 min trading days for payout.
    All plans: 100% profit split on first $15,000, then 90/10. Payouts twice monthly (1st-4th, 15th-18th for Challenges; 1st-4th, 11th-14th, 21st-24th for Sim) with minimums ($500-$1500 for Challenges, tiered for Sim) and profitable day requirements. After four Sim payouts, possible transition to a Live Funded account with better terms (no consistency rule, same-day payouts, 100% up to $15k then 90/10). Supports Tradovate, NinjaTrader, TradingView; allows news trading, EAs, up to 7 active accounts, and copy trading. Futures (CME, COMEX, NYMEX, CBOT, Coinbase Derivatives).`,
    pros: [
      "Multiple account types (Advanced Challenge, Growth Challenge, Straight to Sim)",
      "100% profit split on first $15,000, then 90/10",
      "Supports Tradovate, NinjaTrader, TradingView",
      "News trading and EAs allowed",
      "Up to 7 active funded accounts, copy trading permitted",
      "Transition to Live Funded accounts with favorable terms",
      "End-of-day drawdown option available (Growth & Sim)",
      "Instant funding option (Straight to Sim)"
    ],
    cons: [
      "Consistency rules apply (35% for Challenges, 20% for Sim)",
      "Activation fee for Advanced Challenge accounts ($125)",
      "Monthly fees for Challenge accounts (Advanced & Growth)",
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
      { label: 'Funding Types', value: 'Challenges (IDD/EOD), Instant Sim'}
    ],
    offerBadgeLabel: 'Instant Funding!',
    fundingModels: ["Advanced Challenge (Intraday DD)", "Growth Challenge (EOD DD)", "Straight to Sim Funded (EOD DD)"],
    profitSplit: '100% on first $15,000, then 90/10',
    drawdownRules: 'Advanced: Intraday trailing. Growth: End-of-day trailing. Sim: End-of-day trailing. (e.g., $50K Adv: $2K IDD; $50K Growth: $2K EOD; $25K Sim: $1K EOD)',
    profitTarget: 'Challenges: 6% (e.g., $50K: $3,000). Sim Funded: None for initial funding, payout tiers have profit goals.',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT, Coinbase Derivatives)'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.5, // Placeholder, adjust as needed
    minAccountSize: 25000, // From Straight to Sim
    maxAccountSize: 150000,
    minChallengeCost: 99, // Lowest monthly fee for $50K Advanced Challenge
    maxChallengeCost: 700, // Highest one-time fee for $150K Sim (before discount)
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
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for first lesson
    lessonDescription: "Learn the fundamentals of how Al Brooks perceives market structure and its importance in price action trading.",
    lessonKeyTakeaways: ["Key Trendlines", "Support & Resistance", "Market Cycles"],
    lessonCTAText: "Watch Full Series",
    lessonCTALink: "#", // To be updated with the actual full course link
  },
  {
    lessonTitle: "Lesson 2: Bar-by-Bar Analysis Introduction",
    videoEmbedCodeOrURL: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder, change to relevant if available
    lessonDescription: "An introduction to Al Brooks' detailed bar-by-bar analysis technique for making trading decisions.",
    lessonKeyTakeaways: ["Candlestick signals", "Volume interpretation", "Context is key"],
    lessonCTAText: "Explore More Samples",
    lessonCTALink: "#", // Could link to a page with more samples or full course
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
    mainAffiliateLink: "https://www.brookstradingcourse.com/buy-the-brooks-price-action-trading-course/ref/uuc5l/", // Link to the full paid course
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
