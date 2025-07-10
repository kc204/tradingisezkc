
import type { GlobalOffer, PropFirm, Article, TradingResource, FreeResourceItem, VideoLesson, BookListing, AccountTier } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'Take Profit Trader: 30% off, No Activation Fee', affiliateLink: '#', isActive: true },
  { id: '2', text: 'DayTraders.com: 90% off, 100% profit split', affiliateLink: '#', isActive: true },
  { id: '3', text: 'Tradeify: 33% off', affiliateLink: '#', isActive: true }, // VERIFY CURRENT VALIDITY OF THIS PROMO CODE with Tradeify.co
];

const tptAccountTiers: AccountTier[] = [
  { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: 2, discountPercentage: 0.30 }, // 30% discount
  { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, activationFee: undefined, resetFee: 75, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // 30% discount
  { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.13, discountPercentage: 0.30 }, // 30% discount
  { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // 30% discount
  { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, activationFee: undefined, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // 30% discount
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
// Adding a discount to one Tradeify tier for testing
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.10, // Adding a 10% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
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
    discountPercentage: 0.33, // 33% discount
  },
];
// Adding a discount to one Bulenox tier for testing
const bulenoxAccountTiers: AccountTier[] = [
 // Beginner (Non-Professional data feed - cheaper evaluation) - Applying 90% discount
 { id: 'bulenox-beginner-10k', name: '$10K Beginner', size: 10000, evaluationFee: 115, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 8, drawdownPercentage: 10, dailyLossLimitPercentage: 5, discountPercentage: 0.90 },
 { id: 'bulenox-beginner-25k', name: '$25K Beginner', size: 25000, evaluationFee: 145, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 6, drawdownPercentage: 8, dailyLossLimitPercentage: 4, discountPercentage: 0.90 },
 { id: 'bulenox-beginner-50k', name: '$50K Beginner', size: 50000, evaluationFee: 185, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 5, drawdownPercentage: 6, dailyLossLimitPercentage: 3, discountPercentage: 0.90 },
 { id: 'bulenox-beginner-100k', name: '$100K Beginner', size: 100000, evaluationFee: 265, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 4.5, drawdownPercentage: 5, dailyLossLimitPercentage: 2.5, discountPercentage: 0.90 },
 { id: 'bulenox-beginner-150k', name: '$150K Beginner', size: 150000, evaluationFee: 385, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 4, drawdownPercentage: 4, dailyLossLimitPercentage: 2, discountPercentage: 0.90 },
 { id: 'bulenox-beginner-250k', name: '$250K Beginner', size: 250000, evaluationFee: 545, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 3.5, drawdownPercentage: 3, dailyLossLimitPercentage: 1.5, discountPercentage: 0.90 },

 // Master (Professional data feed - more expensive evaluation) - Applying 90% discount
 // Note: Profit targets, drawdowns, and daily limits often mirror Beginner but with Professional data cost reflected in fee. Verify exact rules per Master account size on Bulenox site.
 { id: 'bulenox-master-10k', name: '$10K Master', size: 10000, evaluationFee: 175, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 8, drawdownPercentage: 10, dailyLossLimitPercentage: 5, discountPercentage: 0.90 }, // Example - Verify fees/rules
 { id: 'bulenox-master-25k', name: '$25K Master', size: 25000, evaluationFee: 205, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 6, drawdownPercentage: 8, dailyLossLimitPercentage: 4, discountPercentage: 0.90 }, // Example - Verify fees/rules
 // ... Add other Master tiers mirroring Beginner sizes with adjusted fees and verified rules, applying 90% discount

 // Start (Single Step, No Daily Limit) - Applying 90% discount
 { id: 'bulenox-start-10k', name: '$10K Start', size: 10000, evaluationFee: 145, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 10, drawdownPercentage: 10, dailyLossLimitPercentage: null, discountPercentage: 0.90 },
 { id: 'bulenox-start-25k', name: '$25K Start', size: 25000, evaluationFee: 195, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 8, drawdownPercentage: 8, dailyLossLimitPercentage: null, discountPercentage: 0.90 },
 { id: 'bulenox-start-50k', name: '$50K Start', size: 50000, evaluationFee: 275, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null, discountPercentage: 0.90 },
 { id: 'bulenox-start-100k', name: '$100K Start', size: 100000, evaluationFee: 375, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 5, drawdownPercentage: 5, dailyLossLimitPercentage: null, discountPercentage: 0.90 },
 { id: 'bulenox-start-150k', name: '$150K Start', size: 150000, evaluationFee: 485, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 4, drawdownPercentage: 4, dailyLossLimitPercentage: null, discountPercentage: 0.90 },
 { id: 'bulenox-start-250k', name: '$250K Start', size: 250000, evaluationFee: 695, activationFee: undefined, resetFee: undefined, profitTargetPercentage: 3.5, drawdownPercentage: 3, dailyLossLimitPercentage: null, discountPercentage: 0.90 },

  // Advanced (Two Step, No Daily Limit)
 // Note: Two phases with targets, drawdowns, and trailing rules. Verify exact rules per Advanced account size on Bulenox site.
 // ... Add Advanced tiers mirroring Beginner sizes with verified fees and rules, applying 90% discount
];

export const mockPropFirms: PropFirm[] = [
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://takeprofittrader.com/assets/desktop-logo.svg',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/tradingisez',
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
    promo: 'No activation fee',
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
 trustpilotReviews: [
      {
        reviewerName: 'Michael B.',
 rating: 5,
 reviewContent: 'Love the daily payouts and the PRO+ no trailing drawdown account. TPT is top-notch!',
        isVerified: true,
      },
      {
        reviewerName: 'Jessica R.',
 rating: 4,
 reviewContent: 'Consistency rule was a bit challenging, but the overall experience has been good. Fast support responses.',
 isVerified: true,
      },
      {
        reviewerName: 'Chris W.',
 rating: 5,
        reviewContent: 'Finally found a firm with daily payouts that works for me. The platform options are great.',
 isVerified: false,
      },
 ],


  },
  {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaa7I9uipZeRoUofIMr2QMJQ-HJv_hNF5FA&s',
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
    rating: 4.7,
    isFeatured: false,
    minAccountSize: 25000, 
    maxAccountSize: 150000,
    minChallengeCost: 92, 
    maxChallengeCost: 665, 
    activationFee: 'None', 
    challengeType: 'Evaluation (monthly or one-time fee)',
    accountTiers: myFundedFuturesAccountTiers,
 trustpilotReviews: [
      {
        reviewerName: 'Tom H.',
 rating: 4,
 reviewContent: 'The 100% profit split up to $10K is a great feature. EOD drawdown is much better for me than intraday.',
        isVerified: true,
      },
 {
 reviewerName: 'Emily J.',
 rating: 3,
 reviewContent: 'Decent firm, but the consistency rule on the Starter plan was a hurdle. Expert plan seems better.',
 isVerified: true,
      },
 {
 reviewerName: 'Robert D.',
 rating: 5,
 reviewContent: 'Milestone plan was perfect for my trading style. Quick and straightforward.',
 isVerified: true,
      },
 ],
  },
  {
    id: '4',
    name: 'Tradeify',
    slug: 'tradeify', 
    logoUrl: 'https://tradeify.co/wp-content/uploads/2021/06/horizontal-logo.svg', 
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
    rating: 4.8, // Adjust rating based on verified info and user experience.
    minAccountSize: 25000, 
    maxAccountSize: 150000, 
    minChallengeCost: 99, // User data; VERIFY THIS PRICE on Tradeify.co
    maxChallengeCost: 700, // User data; VERIFY THIS PRICE on Tradeify.co
    activationFee: '$125 (Advanced Sim-Funded), None (Growth Sim-Funded / Straight to Sim initial)', 
    challengeType: 'Evaluation Challenges (Advanced/Growth), Direct Sim Funding',
    accountTiers: tradeifyAccountTiers, 
 trustpilotReviews: [
      {
        reviewerName: 'Sophia M.',
 rating: 5,
 reviewContent: 'Tradeify\'s 100% split is fantastic! The Straight to Sim option was exactly what I needed.',
        isVerified: true,
      },
      {
        reviewerName: 'Liam P.',
 rating: 4,
 reviewContent: 'Good platforms and rules. The consistency rule took some adjustment, but manageable.',
 isVerified: true,
      },
 {
 reviewerName: 'Olivia T.',
 rating: 5,
 reviewContent: 'Happy with Tradeify. The transition to True Live without the consistency rule is a big plus.',
 isVerified: true,      },
 ],
  },
  {
    id: '5',
    slug: 'bulenox',
    name: 'Bulenox',
    logoUrl: 'https://bulenox.com/wa-data/public/site/themes/bulenox/img/logo-2.png',
    websiteUrl: 'https://bulenox.com/',
    affiliateLink: 'https://bulenox.com/?ref=YOUR-AFFILIATE-ID', // REPLACE WITH YOUR ACTUAL BULENOX AFFILIATE LINK
    isFeatured: false,
    briefDescription: 'Offers various account sizes and evaluation types (Beginner, Master, Start, Advanced) with different rules and data feed options.',
    fullReview: `Bulenox provides a range of futures trading evaluations and funded accounts. They offer several programs:
    1. Beginner Accounts: Use non-professional data feeds, resulting in lower evaluation fees. They feature daily loss limits and a trailing drawdown.
    2. Master Accounts: Utilize professional data feeds, leading to higher evaluation costs. Rules (profit target, daily limit, trailing drawdown) are often similar to Beginner accounts of the same size, but with the professional data.
    3. Start Accounts: A one-step evaluation without a daily loss limit. Features a trailing drawdown.
    4. Advanced Accounts: A two-step evaluation process, also without a daily loss limit. Involves hitting a profit target in Phase 1, then another in Phase 2.
    All accounts have a trailing drawdown. Payouts start after a minimum number of trading days (often 10-15, verify exact current rule) and meeting a minimum profit threshold. The profit split is 80/20, increasing to 90/10 after certain milestones (verify specific requirements on Bulenox site). They support a wide range of platforms compatible with Rithmic or CQG, including NinjaTrader, Tradovate, TradingView (via Integrations), and their own Bulenox platform. News trading is allowed without restrictions. EAs and copy trading are permitted under specific conditions (must be your own accounts, no third-party signals).
    Activation fees may apply upon receiving a funded account (verify current fees per plan on Bulenox site). Reset fees are also applicable during evaluations.`,
    pros: [
      "Multiple evaluation types and account sizes",
      "Beginner accounts offer lower entry cost with non-professional data",
      "Start accounts have no daily loss limit (one-step)",
      "News trading is allowed without restrictions",
      "Supports a wide range of platforms (Rithmic/CQG compatible)",
      "Copy trading and EAs permitted (under conditions)",
      "Profit split increases to 90/10 after milestones"
    ],
    cons: [
      "Trailing drawdown on all account types",
      "Consistency rule requires minimum trading days for payout (verify current rule)",
      "Activation fees apply upon funding (verify current fees)",
      "Reset fees apply during evaluations",
      "Master accounts are more expensive due to professional data"
    ],
    keyFeatures: [
      'Multiple Evaluation Programs (Beginner, Master, Start, Advanced)',
      'Beginner: Non-Pro Data, Lower Fee, Daily Limit, Trailing DD',
      'Master: Pro Data, Higher Fee, Daily Limit, Trailing DD',
      'Start: One-Step, No Daily Limit, Trailing DD',
      'Advanced: Two-Step, No Daily Limit, Trailing DD',
      'News Trading Allowed',
      'Platforms: Rithmic/CQG compatible (NinjaTrader, Tradovate, TradingView, etc.)',
      'Profit Split: 80/20 initially, scales to 90/10'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80/20 (scales to 90/10)' },
      { label: 'Drawdown Type', value: 'Trailing' },
      { label: 'Platforms', value: 'Rithmic/CQG Compatible' },
      { label: 'Account Types', value: 'Beginner, Master, Start, Advanced'},
    ],
    promo: '90% off all accounts',
    offerBadgeLabel: 'Accounts up to $250K',
    fundingModels: ['Evaluation (Various Programs)'],
    profitSplit: '80/20, scaling to 90/10',
    drawdownRules: 'Trailing Drawdown (specific values vary by account size/program)',
    profitTarget: 'Varies by program and account size (e.g., 8% on $10K Beginner)',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT)'],
    platforms: ['NinjaTrader', 'Tradovate', 'TradingView', 'Rithmic Trader Pro', 'MultiCharts', 'Bookmap', 'Jigsaw Daytrader', 'Sierra Chart', 'MotiveWave', 'VolSys', 'Quantower', 'ATAS Order Flow Trading', 'RTrader Pro', 'Investor RT'], // List commonly supported Rithmic/CQG platforms
    rating: 4.7, // Adjust rating based on verified info and user experience.
    minAccountSize: 10000,
    maxAccountSize: 250000,
    minChallengeCost: 115, // Verify min beginner cost
    maxChallengeCost: 695, // Verify max start cost (Advanced may be different)
    activationFee: 'Varies (Verify current fee per plan)',
    challengeType: 'Evaluation (1-Step or 2-Step)',
 accountTiers: bulenoxAccountTiers,
 trustpilotReviews: [
      {
        reviewerName: 'Ethan C.',
 rating: 4,
 reviewContent: 'Bulenox offers a lot of flexibility with their different account types. The 90% discount is great.',
        isVerified: true,
      },
 {
 reviewerName: 'Ava S.',
 rating: 3,
 reviewContent: 'Trailing drawdown on all accounts is the main challenge. Otherwise, a solid firm.',
 isVerified: true,
      },
 {
 reviewerName: 'Noah W.',
 rating: 5,
 reviewContent: 'Passed a Start account quickly with no daily limit. Payouts were straightforward.',
 isVerified: true,      },
 ],
  },
  {
    id: '6',
    slug: 'daytraders',
    name: 'Daytraders',
    logoUrl: 'https://daytraders.com/assets/images/logo/logo.svg', 
    websiteUrl: 'https://daytraders.com/', // Use the correct domain
    affiliateLink: 'https://daytraders.com/?aff_id=YOUR-AFFILIATE-ID', // Replace with your actual Daytraders affiliate link
    briefDescription: 'Prop firm offering the ProjectX program with Trail and Static evaluation paths and 100% profit split on funded accounts.',
    fullReview: `Daytraders offers their proprietary ProjectX funding program for futures traders. It features two distinct evaluation paths:
    1. Trail Evaluation: Offers account sizes from $25K to $250K. This path uses a trailing drawdown during the evaluation. Once passed, traders get a funded account with a static drawdown (meaning the drawdown is fixed at the starting balance).
    2. Static Evaluation: Available for $25K, $50K, and $100K accounts. This path features a static drawdown from the initial balance throughout both the evaluation and the funded account phase.

    Both evaluation types require meeting a profit target (varying by account size) with no minimum trading days. There are no daily loss limits. Upon successful completion of either evaluation, traders receive a funded account with a 100% profit split.

    Funded accounts with Daytraders have a 100% profit split with no funded account fees. Daily payouts are available with a $250 minimum withdrawal threshold. A crucial rule is the requirement to reach a certain profit buffer *above* the starting balance before the first payout is allowed (varies by account size, e.g., $1000 on a $25K account). There is no scaling plan; traders maintain the initial account size.

    Trading is done exclusively on their proprietary ProjectX platform, and only futures instruments are tradable. News trading is allowed without restrictions. Holding positions overnight and through weekends is also permitted. Traders can have a maximum of 3 accounts simultaneously. Copy trading is allowed only between accounts owned by the same trader within Daytraders; copying third-party signals is prohibited.

    Daytraders utilizes Velox as their backend trading technology. Reset fees are available if an evaluation account is breached.
    `,
    pros: [
        '100% profit split on funded accounts',
        'No funded account fees',
        'Daily payouts available ($250 minimum)',
        'Two evaluation paths (Trail and Static Drawdown)',
        'No daily loss limits',
        'No minimum trading days for evaluation',
        'News trading allowed',
        'Holding positions overnight/weekends allowed',
        'Proprietary ProjectX platform (Velox backend)',
        'Allows up to 3 accounts',
        'Copy trading allowed between own accounts'
    ],
    cons: [
        'Requires trading on proprietary ProjectX platform only',
        'Futures trading only',
        'Profit buffer required before first payout',
        'No scaling plan',
        'Static drawdown on funded accounts (for Trail path) can be challenging for some strategies',
        'Trailing drawdown on evaluation accounts (for Trail path)',
        'Static drawdown on both evaluation and funded (for Static path)'
    ],
    keyFeatures: [
        '100% Profit Split',
        'No Funded Account Fees',
        'Daily Payouts ($250 Min)',
        'Trail (Eval Trailing, Funded Static) & Static (Eval Static, Funded Static) Paths',
        'No Daily Loss Limit',
        'No Minimum Trading Days',
        'ProjectX Platform (Velox)',
        'Max 3 Accounts',
        'News Trading & Overnight/Weekend Holding Allowed'
    ],
    keyInfoSnippets: [
        { label: 'Profit Split', value: '100%' },
        { label: 'Drawdown Type', value: 'Eval Trail/Static, Funded Static' },
        { label: 'Platforms', value: 'ProjectX (Proprietary)' },
        { label: 'Max Accounts', value: '3' },
        { label: 'Payouts', value: 'Daily ($250 Min, buffer required)' }
    ],
    offerBadgeLabel: '100% Profit Split!',
    fundingModels: ['Evaluation (Trail)', 'Evaluation (Static)'],
    profitSplit: '100%',
    drawdownRules: 'Trail Path: Evaluation (Trailing), Funded (Static). Static Path: Evaluation (Static), Funded (Static). Specific values vary by account size.',
    profitTarget: 'Varies by account size',
    tradableInstruments: ['Futures'],
    platforms: ['ProjectX'],
    rating: 4.7, // Placeholder - Adjust based on research and user feedback.
    isFeatured: false,
    minAccountSize: 25000,
    maxAccountSize: 250000, // Max for Trail path, Static max is $100K
    minChallengeCost: 137, // Placeholder - Verify actual minimum cost for 25k Trail/Static
    maxChallengeCost: 657, // Placeholder - Verify actual maximum cost for 250k Trail
    activationFee: 'None',
    challengeType: 'Evaluation (1-Step)',
    accountTiers: [
        // ProjectX Trail Accounts (Evaluation Trailing DD, Funded Static DD)
        { id: 'daytraders-trail-25k', name: '$25K Trail Account', size: 25000, evaluationFee: 137, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null }, // Verify exact fees/rules
        { id: 'daytraders-trail-50k', name: '$50K Trail Account', size: 50000, evaluationFee: 167, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null, discountPercentage: 0.90 }, // 90% discount on Trail accounts
        { id: 'daytraders-trail-100k', name: '$100K Trail Account', size: 100000, evaluationFee: 207, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null, discountPercentage: 0.90 }, // 90% discount on Trail accounts
        { id: 'daytraders-trail-150k', name: '$150K Trail Account', size: 150000, evaluationFee: 297, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null, discountPercentage: 0.90 }, // 90% discount on Trail accounts
        { id: 'daytraders-trail-250k', name: '$250K Trail Account', size: 250000, evaluationFee: 657, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null, discountPercentage: 0.90 }, // 90% discount on Trail accounts

        // ProjectX Static Accounts (Evaluation Static DD, Funded Static DD)
        { id: 'daytraders-static-25k', name: '$25K Static Account', size: 25000, evaluationFee: 137, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null }, // Verify exact fees/rules
        { id: 'daytraders-static-50k', name: '$50K Static Account', size: 50000, evaluationFee: 167, activationFee: 0, resetFee: 80, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null }, // Verify exact fees/rules
        { id: 'daytraders-static-100k', name: '$100K Static Account', size: 100000, evaluationFee: 207, activationFee: 0, resetFee: 100, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: null }, // Verify exact fees/rules
        // Static path might not have 150k/250k tiers, verify on site.
    ],
 trustpilotReviews: [
      {
        reviewerName: 'Lucas A.',
 rating: 5,
 reviewContent: '100% profit split and no funded fees is a major win. Daily payouts are very convenient.',
        isVerified: true,
      },
      {
        reviewerName: 'Isabella B.',
 rating: 4,
 reviewContent: 'ProjectX platform is unique but easy to learn. The profit buffer before the first payout was unexpected but understandable.',
        isVerified: true,
      },
 {
 reviewerName: 'James F.',
 rating: 5,
 reviewContent: 'No daily limits and the option for a static drawdown evaluation suits my strategy perfectly. Great firm!',
 isVerified: true,      },
 ],
  }
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
    bookCoverImage: "https://m.media-amazon.com/images/I/91h1hHF7awL.jpg",
    bookDescription: "Master the mental game of trading with this classic guide to trading psychology.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B00512D15U",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B00512D15U&isSample=true",
  },
  {
    bookTitle: "Reminiscences of a Stock Operator",
    bookAuthor: "Edwin Lefèvre",
    bookCoverImage: "https://m.media-amazon.com/images/I/61v5E5KJlfL._AC_UF1000,1000_QL80_.jpg",
    bookDescription: "A fictionalized biography of Jesse Livermore, one of the greatest stock traders of all time.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B00HF22VYU",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B00HF22VYU&isSample=true",
  },
  {
    bookTitle: "Best Loser Wins",
    bookAuthor: "Tom Hougaard",
    bookCoverImage: "https://m.media-amazon.com/images/I/71Ip3kl9eML.jpg",
    bookDescription: "Focuses on the crucial mindset and psychological aspects required for successful trading, emphasizing the importance of managing losses.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B0B6Y29Q2R",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B0B6Y29Q2R&isSample=true",
  },
  {
    bookTitle: "One Good Trade",
    bookAuthor: "Mike Bellafiore",
    bookCoverImage: "https://m.media-amazon.com/images/I/81nlPH61yeL.jpg",
    bookDescription: "Provides an inside look at the world of proprietary trading, focusing on the daily routines, strategies, and discipline of successful traders at a top firm.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B005CM0QAQ",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B005CM0QAQ&isSample=true",
  },
  {
    bookTitle: "Reading Price Charts Bar by Bar",
    bookAuthor: "Al Brooks",
    bookCoverImage: "https://m.media-amazon.com/images/I/618ic+WPLHL.jpg",
    bookDescription: "A comprehensive guide to understanding price action and trading decisions based on the analysis of individual bars and patterns.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B0046US38U",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B0046US38U&isSample=true",
  },
  {
    bookTitle: "A Complete Guide to Volume Price Analysis",
    bookAuthor: "Anna Coulling",
    bookCoverImage: "https://m.media-amazon.com/images/I/61DHRcQb0GL.jpg",
    bookDescription: "Explores the relationship between volume and price to identify potential market movements and trading opportunities.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B00D5T32JA",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B00D5T32JA&isSample=true",
  },
  {
    bookTitle: "Mind over Markets (Updated Edition)",
    bookAuthor: "James F. Dalton, Eric T. Jones, Robert B. Dalton",
    bookCoverImage: "https://m.media-amazon.com/images/I/61KB1KqFz3L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    bookDescription: "Focuses on market profile analysis and the psychological aspects of trading, helping traders understand market dynamics and their own emotional responses.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B0B7Q9B7X2",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B0B7Q9B7X2&isSample=true",
  },
  {
    bookTitle: "Long-Term Secrets to Short-Term Trading",
    bookAuthor: "Larry Williams",
    bookCoverImage: "https://m.media-amazon.com/images/I/61ZkqtlPmdL.jpg",
    bookDescription: "Shares strategies and techniques for short-term trading based on market cycles and indicators, from a legendary trader.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B000SB2ADU",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B000SB2ADU&isSample=true",
  },
  {
    bookTitle: "Mastering the Mental Game of Trading",
    bookAuthor: "Steven Goldstein",
    bookCoverImage: "https://m.media-amazon.com/images/I/81-3nnl6JkL.jpg",
    bookDescription: "Provides practical exercises and techniques for developing the psychological discipline needed for consistent trading success.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B0BCPTX8R8",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B0BCPTX8R8&isSample=true",
  },
  {
    bookTitle: "Market Wizards: Interviews with Top Traders",
    bookAuthor: "Jack D. Schwager",
    bookCoverImage: "https://m.media-amazon.com/images/I/81BI5v5yBSL.jpg",
    bookDescription: "Insights from the minds of Wall Street's most successful traders.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B009477610",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B009477610&isSample=true",
  },
  {
    bookTitle: "Mastering the Market Cycle",
    bookAuthor: "Howard Marks",
    bookCoverImage: "https://m.media-amazon.com/images/I/61lzyZHp1vL.jpg",
    bookDescription: "Offers insights into recognizing and navigating investment cycles to improve long-term returns, from a renowned investor.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B07F9V8S6D",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B07F9V8S6D&isSample=true",
  },
  {
    bookTitle: "Trading for a Living",
    bookAuthor: "Alexander Elder",
    bookCoverImage: "https://m.media-amazon.com/images/I/61wWK11IHpL.jpg",
    bookDescription: "A comprehensive guide covering technical analysis, trading psychology, and money management for aspiring professional traders.",
    bookAudibleAffiliateLink: "https://www.audible.com/pd/B00KWE850G",
    bookSampleLink: "https://www.audible.com/webplayer?asin=B00KWE850G&isSample=true",
  },
];

export const mockFreeResources: FreeResourceItem[] = [
  {
    id: "fr1",
    title: "Al Brooks Price Action: Free Video Lessons",
    slug: "al-brooks-course",
    author: "Al Brooks",
    coverImage: "/images/FreeResourcesSectionAlBrooksCourse.png",
    pageIntroduction: "Get a taste of Al Brooks' renowned price action trading methodology with these free sample video lessons. Understand how a professional trader reads charts bar by bar.",
    mainAffiliateLink: "https://www.brookstradingcourse.com/testimonials/ref/uuc5l/", 
    mainCTAText: "Access Full Al Brooks Course",
    resourceType: "Free Video Course Series",
    isFeatured: true,
    videoLessons: alBrooksSampleLessons,
  },
  {
    id: "fr2",
    title: "Free Trading Audiobooks",
    slug: "audiobooks",
    coverImage: "/images/FreeResourcesSectionAudioBook.png",
    pageIntroduction: "Expand your trading knowledge on the go! Listen to essential trading books for free. Explore classics on psychology, strategy, and market history.",
    mainAffiliateLink: "#audible-trial-signup",
    mainCTAText: "Start Your Audible Free Trial",
    resourceType: "Audiobook Trial Offer",
    isFeatured: true,
    bookListings: sampleBookListings,
  },
];

    
