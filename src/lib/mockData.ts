
import type { GlobalOffer, PropFirm, Article, TradingResource, FreeResourceItem, VideoLesson, BookListing, AccountTier } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'Take Profit Trader: 30% off, No Activation Fee', affiliateLink: '#', isActive: true },
  { id: '2', text: 'DayTraders.com: 90% off, 100% profit split', affiliateLink: '#', isActive: true },
  { id: '3', text: 'Tradeify: 33% off', affiliateLink: '#', isActive: true }, // VERIFY CURRENT VALIDITY OF THIS PROMO CODE with Tradeify.co
];

const tptAccountTiers: AccountTier[] = [
  { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 6, dailyLossLimitPercentage: 2, discountPercentage: 0.30 }, // $1500 target, $1500 max loss, $500 daily
  { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // $3000 target, $2000 max loss, $1100 daily
  { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.13, discountPercentage: 0.30 }, // $4500 target, $2500 max loss, $1600 daily
  { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // $6000 target, $3000 max loss, $2200 daily
  { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 2.2, discountPercentage: 0.30 }, // $9000 target, $4500 max loss, $3300 daily
];

const myFundedFuturesAccountTiers: AccountTier[] = [
  // Starter Plan
  { id: 'mff-starter-50k', name: '$50K Starter Plan', size: 50000, evaluationFee: 97, activationFee: 0, resetFee: 97, profitTargetPercentage: 6, drawdownPercentage: 5, dailyLossLimitPercentage: 2.5, drawdownRules: '$2,500 Trailing Drawdown' },
  // Starter Plus Plan
  { id: 'mff-starter-plus-50k', name: '$50K Starter Plus Plan', size: 50000, evaluationFee: 127, activationFee: 0, resetFee: 127, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null, drawdownRules: '$2,000 End-of-Day Trailing Drawdown' },
  { id: 'mff-starter-plus-100k', name: '$100K Starter Plus Plan', size: 100000, evaluationFee: 267, activationFee: 0, resetFee: 267, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null, drawdownRules: '$3,000 End-of-Day Trailing Drawdown' },
  { id: 'mff-starter-plus-150k', name: '$150K Starter Plus Plan', size: 150000, evaluationFee: 377, activationFee: 0, resetFee: 377, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null, drawdownRules: '$4,500 End-of-Day Trailing Drawdown' },
  // Expert Plan
  { id: 'mff-expert-50k', name: '$50K Expert Plan', size: 50000, evaluationFee: 165, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownRules: 'Trailing Drawdown with Buffer Zone', dailyLossLimitPercentage: null },
  { id: 'mff-expert-100k', name: '$100K Expert Plan', size: 100000, evaluationFee: 265, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownRules: 'Trailing Drawdown with Buffer Zone', dailyLossLimitPercentage: null },
  { id: 'mff-expert-150k', name: '$150K Expert Plan', size: 150000, evaluationFee: 375, activationFee: 0, resetFee: 0, profitTargetPercentage: null, drawdownRules: 'Trailing Drawdown with Buffer Zone', dailyLossLimitPercentage: null },
  // Eval to Live Plan
  { id: 'mff-1step-eval-live-50k', name: '$50K 1-Step Eval to Live', size: 50000, evaluationFee: 444, activationFee: 0, resetFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 1, drawdownRules: '$1,500 End-of-Day Max Loss (Eval), $500 Daily Loss (Live)' },
  { id: 'mff-2step-eval-live-50k', name: '$50K 2-Step Eval to Live', size: 50000, evaluationFee: 197, activationFee: 0, resetFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 1, drawdownRules: '$1,500 End-of-Day Max Loss (Eval), $500 Daily Loss (Live)' },
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

const bulenoxAccountTiers: AccountTier[] = [
  { id: 'bulenox-qual-25k', name: '$25K Qualification', size: 25000, evaluationFee: 145, activationFee: 148, drawdownPercentage: 6, profitTargetPercentage: 6 }, // $1500 target, $1500 max drawdown
  { id: 'bulenox-qual-50k', name: '$50K Qualification', size: 50000, evaluationFee: 175, activationFee: 148, drawdownPercentage: 5, profitTargetPercentage: 6 }, // $3000 target, $2500 max drawdown
  { id: 'bulenox-qual-100k', name: '$100K Qualification', size: 100000, evaluationFee: 215, activationFee: 248, drawdownPercentage: 3, profitTargetPercentage: 6 }, // $6000 target, $3000 max drawdown
  { id: 'bulenox-qual-150k', name: '$150K Qualification', size: 150000, evaluationFee: 325, activationFee: 498, drawdownPercentage: 3, profitTargetPercentage: 6 }, // $9000 target, $4500 max drawdown
  { id: 'bulenox-qual-250k', name: '$250K Qualification', size: 250000, evaluationFee: 535, activationFee: 898, drawdownPercentage: 2.2, profitTargetPercentage: 6 }, // $15000 target, $5500 max drawdown
];

export const mockPropFirms: PropFirm[] = [
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://takeprofittrader.com/assets/desktop-logo.svg',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/tradingisez',
    briefDescription: 'Futures prop firm with a 1-step evaluation, daily payouts, and a path to a live PRO+ account with a 90% profit split.',
    fullReview: `Take Profit Trader (TPT) provides a straightforward path for futures traders with its 1-step evaluation. After passing the Test account (which has an EOD trailing drawdown), traders pay a one-time $130 fee to access a PRO account. PRO accounts feature daily payouts from day one and an 80% profit split, but use a more restrictive intraday trailing drawdown. For a higher 90% split and a return to the more flexible EOD drawdown, traders can upgrade to a PRO+ account, which operates in a live market environment. A key rule to note is the news trading restriction on all funded (PRO and PRO+) accounts.`,
    tradingRules: `<h3>Test Account (The Evaluation)</h3>
<p>This is the initial step to prove you can trade profitably and manage risk.</p>
<ul>
    <li><strong>Environment:</strong> You trade in a simulated (SIM) environment.</li>
    <li><strong>Drawdown:</strong> Your maximum loss is calculated at the End of the Day (EOD).</li>
    <li><strong>Consistency Rule:</strong> You must follow a consistency rule, where your best day's profit cannot be a disproportionately large part of your total profit.</li>
    <li><strong>Daily Loss Limit:</strong> A daily loss limit applies during the Test phase.</li>
    <li><strong>News Trading:</strong> You are allowed to trade during news events.</li>
    <li><strong>Scaling:</strong> There is no scaling plan, so you can use the maximum number of contracts allowed for your account from day one.</li>
</ul>

<h3>PRO Account (Your First Funded Level)</h3>
<p>After you pass the test, you get a PRO Account.</p>
<ul>
    <li><strong>Environment:</strong> This is a simulated (SIM) account, but you are paid real money from your simulated profits.</li>
    <li><strong>Profit Split:</strong> You keep 80% of the profits.</li>
    <li><strong>Withdrawals:</strong> You can request a withdrawal starting from day one.</li>
    <li><strong>Drawdown:</strong> This changes to an Intraday trailing drawdown, which means it updates as your account balance increases during the day.</li>
    <li><strong>Buffer Requirement:</strong> You must maintain a minimum profit buffer in your account before you can withdraw.</li>
    <li><strong>News Trading:</strong> You are <strong>not</strong> allowed to trade during major news events.</li>
    <li><strong>Max Accounts:</strong> You can have up to 5 PRO accounts.</li>
</ul>

<h3>PRO+ Account (Upgraded Funded Level)</h3>
<p>You can upgrade your PRO account to a PRO+ account.</p>
<ul>
    <li><strong>Environment:</strong> This is a LIVE market account, where your trades are sent to the actual exchange.</li>
    <li><strong>Profit Split:</strong> Your profit share increases to 90%.</li>
    <li><strong>Drawdown:</strong> This reverts back to an End of Day calculation, giving you more flexibility.</li>
    <li><strong>Buffer Requirement:</strong> There is no buffer requirement.</li>
    <li><strong>News Trading:</strong> The news trading restriction still applies.</li>
</ul>`,
    pros: [
        'Daily Payouts available from day one on PRO accounts',
        'Simple 1-Step Evaluation process',
        'Choice of PRO (sim) or PRO+ (live) funded accounts',
        '90% profit split available with PRO+ account',
        'News trading is allowed during the evaluation phase'
    ],
    cons: [
        'Consistency rule during evaluation',
        'News trading is restricted on all funded accounts (PRO and PRO+)',
        'PRO account has a more restrictive Intraday trailing drawdown',
        'One-time activation fee required after passing evaluation'
    ],
    keyFeatures: [
        '1-Step Evaluation with EOD Drawdown',
        'Daily Payouts',
        'PRO Account with 80% split and Intraday Drawdown',
        'PRO+ Account with 90% split and EOD Drawdown',
        'Supports Tradovate, NinjaTrader, TradingView'
    ],
      keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (PRO) / 90% (PRO+)' },
      { label: 'Payouts', value: 'Daily from Day 1' },
      { label: 'Funded Drawdown', value: 'Intraday (PRO) / EOD (PRO+)' },
      { label: 'Activation Fee', value: '$130 (One-Time)'}
 ],
    promo: 'No activation fee',
    offerBadgeLabel: 'Daily Payouts!',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '80% (PRO) / 90% (PRO+)',
    drawdownRules: 'EOD Trailing (Evaluation & PRO+) / Intraday Trailing (PRO)',
    profitTarget: '6%',
    tradableInstruments: ['Futures'],
    platforms: ['Tradovate', 'NinjaTrader', 'TradingView'],
    rating: 4.6,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150, 
    maxChallengeCost: 360,
    activationFee: '$130 (PRO Account)',
    challengeType: '1-Step Evaluation', 
    accountTiers: tptAccountTiers,
  },
  {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaa7I9uipZeRoUofIMr2QMJQ-HJv_hNF5FA&s',
    websiteUrl: 'https://myfundedfutures.com/', 
    affiliateLink: 'https://myfundedfutures.com/?aff_id=1030', 
    briefDescription: 'Offers a diverse range of futures funding plans including Starter, Expert, and direct-to-live evaluations with generous profit splits.',
    fullReview: `My Funded Futures provides a comprehensive suite of funding options for futures traders, featuring plans like Starter, Starter Plus, Expert, and Eval to Live. A standout benefit across most plans is the 100% profit split on the first $10,000 earned, which then adjusts to a 90/10 split. The firm emphasizes flexibility, with no minimum or maximum trading day requirements for evaluations, allowing traders to get funded in as little as one day. With 24/7 live support and a clear 4-step process (Choose, Challenge, Verify, Fund), they aim to provide a supportive environment for traders to succeed and eventually gain access to a live trading account with daily payouts.`,
    tradingRules: `<h3>How to Get Funded (The 4-Step Process)</h3>
<p>
  <strong>1. Choose Your Account:</strong> Select the account type and size that fits your strategy.
</p>
<p>
  <strong>2. Take the 1-Step Challenge:</strong> Pass the evaluation by meeting the specified trading objectives to prove your skills.
</p>
<p>
  <strong>3. Get Verified:</strong> After passing the challenge, you go through a verification step to demonstrate consistency.
</p>
<p>
  <strong>4. Get Funded:</strong> Once you are verified, you will receive a simulated funded account and can start earning based on the profit split rules.
</p>

<h3>Rules for the Evaluation Phase (The Challenge)</h3>
<p>To pass the challenge and get a sim-funded account, you must follow these rules:</p>
<ul>
    <li><strong>Achieve the Profit Target:</strong> You must reach your account's specific profit goal without hitting your maximum loss limit.</li>
    <li><strong>Complete 5 Trading Sessions:</strong> You need to place at least one trade in five different trading sessions.</li>
    <li><strong>40% Consistency Rule (for Starter plans):</strong> No single trading day can account for more than 40% of your total profits.</li>
    <li><strong>No Weekend Positions:</strong> All trades must be closed before the weekend.</li>
    <li><strong>No Vacation Pauses:</strong> You cannot pause an evaluation account for vacation.</li>
</ul>

<h3>Rules for Sim-Funded Accounts (After Passing)</h3>
<p>Once you are funded, the rules are divided between Starter and Expert accounts.</p>
<h4>Rules for All Funded Accounts</h4>
<ul>
    <li><strong>Stay Active:</strong> You must place at least one trade every seven days.</li>
    <li><strong>Notify for Vacation:</strong> If you need to be away, you must email support to avoid deactivation.</li>
    <li><strong>Max Accounts:</strong> You can have up to three sim-funded accounts per household.</li>
    <li><strong>End-of-Day Drawdown:</strong> You must not let your account value exceed the maximum trailing loss limit, which is calculated at the end of the day.</li>
</ul>

<h4>Starter Account Rules</h4>
<ul>
    <li><strong>Payouts:</strong> You can request a payout after every 5 winning days.</li>
    <li><strong>Scaling:</strong> You must follow the firm's scaling rules, which limit the number of contracts you can trade based on your account balance.</li>
    <li><strong>Consistency:</strong> The 40% consistency rule still applies to each payout cycle.</li>
    <li><strong>Minimum Withdrawal:</strong> $250.</li>
    <li><strong>Resets:</strong> These accounts are eligible to be reset if a rule is broken.</li>
</ul>

<h4>Expert Account Rules</h4>
<ul>
    <li><strong>Payouts:</strong> You can request a payout every 14 calendar days.</li>
    <li><strong>Scaling:</strong> There are no scaling restrictions.</li>
    <li><strong>Consistency:</strong> There is no consistency rule.</li>
    <li><strong>Minimum Withdrawal:</strong> $1,000.</li>
    <li><strong>Resets:</strong> These accounts cannot be reset.</li>
</ul>`,
    pros: [
        'Multiple account plans to suit different trading styles (Starter, Expert, Eval-to-Live)',
        '100% profit split on first $10,000, then 90/10 on most plans',
        'No minimum or maximum trading day requirements for evaluation',
        'Weekly payout options available on Starter plans',
        'Path to a true live account with daily payouts',
        '24/7 Live Support'
    ],
    cons: [
        '40% consistency rule applies to Starter plans',
        'Maximum of 3 accounts per household',
        'Expert accounts are not resettable',
        'Inactivity rules require frequent trading'
    ],
    keyFeatures: [
        '100% profit split up to $10K, then 90/10',
        'Variety of plans: Monthly (Starter/Expert) and one-time fee (Eval to Live)',
        'EOD Trailing Drawdown on most plans',
        'No daily loss limit on Starter Plus and Expert plans',
        'No minimum trading days to pass evaluation'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: 'Up to 100% on first $10k, then 90%' },
      { label: 'Drawdown Type', value: 'EOD Trailing / Trailing' },
      { label: 'Platforms', value: 'TradingView, NinjaTrader, Tradovate' },
      { label: 'Account Types', value: 'Starter, Expert, Eval-to-Live'},
    ],
    offerBadgeLabel: '100% up to $10K Profit',
    fundingModels: ['Monthly Subscription', 'One-Time Payment'],
    profitSplit: '100% on first $10,000, then 90% (80% on Eval-to-Live)',
    drawdownRules: 'End-of-Day Trailing or Trailing Drawdown (varies by plan)',
    profitTarget: 'Varies by plan',
    tradableInstruments: ['Futures'],
    platforms: ['TradingView', 'NinjaTrader', 'Tradovate'],
    rating: 4.7,
    isFeatured: false,
    minAccountSize: 50000, 
    maxAccountSize: 150000,
    minChallengeCost: 97, 
    maxChallengeCost: 444, 
    activationFee: 'None', 
    challengeType: '1-Step or 2-Step Evaluation',
    accountTiers: myFundedFuturesAccountTiers,
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
  },
  {
    id: '5',
    slug: 'bulenox',
    name: 'Bulenox',
    logoUrl: 'https://bulenox.com/wa-data/public/site/themes/bulenox/img/logo-2.png',
    websiteUrl: 'https://bulenox.com/',
    affiliateLink: 'https://bulenox.com/?ref=YOUR-AFFILIATE-ID', // REPLACE WITH YOUR ACTUAL BULENOX AFFILIATE LINK
    isFeatured: false,
    briefDescription: 'Futures prop firm with a Qualification to Master account path, choice of drawdown models, and a 100% profit split on the first $10,000.',
    fullReview: `Bulenox offers a structured career path for futures traders, starting with a Qualification Account and advancing to a Master Account. A key feature is the choice between two evaluation models: a "No Scaling" account with a trailing drawdown and no daily loss limit, or an "EOD" account with an end-of-day drawdown, daily loss limit, and a contract scaling plan. After a minimum 5-day evaluation, traders pay a one-time activation fee for a Master Account, which boasts a 100% profit split on the first $10,000, then 90/10. Consistent traders may eventually be invited to a fully-funded real capital account.`,
    tradingRules: `<h3>Step 1: The Qualification Account</h3>
<p>This is the first step for all traders. The goal is to prove your trading skill by meeting a profit target without breaking any rules.</p>
<h4>Choose Your Trading Style: Account Options</h4>
<p>You must choose one of two account types for your qualification.</p>
<h5>Option 1: No Scaling Account</h5>
<ul>
  <li><strong>Drawdown Type:</strong> Trailing Drawdown.</li>
  <li><strong>How it Works:</strong> Your maximum loss level follows your highest achieved account balance. For example, if your $100k account reaches a balance of $101,000, your new liquidation level becomes $98,000 (with a $3k drawdown). This level stops trailing up once it reaches your initial starting balance.</li>
  <li><strong>Key Feature:</strong> No Daily Loss Limit.</li>
</ul>
<h5>Option 2: EOD (End-of-Day) Account</h5>
<ul>
  <li><strong>Drawdown Type:</strong> End-of-Day Drawdown.</li>
  <li><strong>How it Works:</strong> Your maximum loss level is only adjusted at the end of the trading day (5:00 PM CT), not during live trades.</li>
  <li><strong>Key Features:</strong> This account includes both a Daily Loss Limit (which suspends, but doesn't break, the account for the day if hit) and a Scaling Plan, where the number of contracts you can trade increases as your account balance grows.</li>
</ul>
<h4>General Rules for Qualification</h4>
<ul>
  <li><strong>Minimum Trading Days:</strong> You must trade for at least 5 days.</li>
  <li><strong>Multiple Accounts:</strong> You can have multiple qualification accounts.</li>
  <li><strong>Account Reset:</strong> If you break a rule, you can pay a fee to reset your account and try again.</li>
</ul>

<h3>Step 2: The Master Account (First Level of Funding)</h3>
<p>After passing the qualification, you advance to a Master Account.</p>
<h4>Transition & Activation</h4>
<ul>
  <li><strong>Process:</strong> After passing, your account is reviewed. You will then sign a contract and other documents to activate your Master Account.</li>
  <li><strong>Fee:</strong> There is no monthly subscription. Instead, you pay a one-time activation fee that varies by account size (e.g., $248 for a $100k account).</li>
</ul>
<h4>Master Account Rules</h4>
<ul>
  <li><strong>No Resets:</strong> You cannot reset a Master Account. If you break a rule, the account is closed.</li>
  <li><strong>Drawdown:</strong> The drawdown rule (Trailing or EOD) continues from your qualification, but it stops moving up once your account balance is $100 above the starting balance.</li>
  <li><strong>Multiple Accounts:</strong> You can have up to 11 active Master Accounts, but you may need to meet certain performance milestones to activate more than three.</li>
</ul>
<h4>Payouts & Withdrawals</h4>
<ul>
  <li><strong>Profit Split:</strong> You keep 100% of the first $10,000 you make. After that, the profit split is 90% for you and 10% for Bulenox.</li>
  <li><strong>First Withdrawal:</strong> You need at least 10 active trading days before your first payout request.</li>
  <li><strong>Consistency Rule:</strong> No single trading day can represent more than 40% of your total profit.</li>
  <li><strong>Withdrawal Limits:</strong> For your first three payouts, there are maximum withdrawal amounts to encourage account stability. These limits are removed after the third payout.</li>
  <li><strong>Safety Reserve:</strong> A minimum account balance (safety reserve) must be maintained to make a withdrawal.</li>
</ul>

<h3>Step 3: The Funded Account (Real Capital)</h3>
<p>This is the final stage, where consistent traders may be invited to trade real capital.</p>
<ul>
    <li><strong>Requirement:</strong> A trader with three successful payouts from a Master Account may be invited to transition to a Funded Account at the discretion of the Risk Management team.</li>
    <li><strong>Account Consolidation:</strong> All of a trader's active Master Accounts are merged into a single Funded Account.</li>
    <li><strong>Payout Request:</strong> You must complete at least five individual trading days before requesting a payout.</li>
</ul>

<h3>Important Trading Policies & Warnings</h3>
<ul>
    <li><strong>Market Halts:</strong> Trading during market halts is high-risk. Bulenox is not responsible for software interruptions, delays, or data feed errors that may occur during these periods.</li>
    <li><strong>Holding Positions:</strong> You are generally required to close all positions before 3:59 PM CST. Holding positions overnight is not permitted, except on the specific $10,000 account.</li>
    <li><strong>Technical Issues:</strong> If you experience technical problems, you must contact the support team immediately with a detailed description of the issue.</li>
</ul>`,
    pros: [
      "Keep 100% of the first $10,000 in profits",
      "Choice between Trailing or EOD drawdown models",
      "No daily loss limit on 'No Scaling' accounts",
      "One-time activation fee for funded accounts (no monthly fees)",
      "Supports a wide range of trading platforms"
    ],
    cons: [
      "40% consistency rule for payouts",
      "Master Accounts cannot be reset",
      "Withdrawal limits apply for the first three payouts"
    ],
    keyFeatures: [
      'Multi-stage career path (Qualification -> Master -> Funded)',
      '100% profit split on first $10k, then 90/10',
      'Choice of Trailing Drawdown or EOD Drawdown',
      'No monthly fees on funded Master accounts',
      'Supports Rithmic/CQG compatible platforms'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $10k), then 90%' },
      { label: 'Drawdown Models', value: 'Trailing or EOD' },
      { label: 'Funded Fee', value: 'One-Time Activation' },
      { label: 'Platforms', value: 'Rithmic/CQG Compatible' },
    ],
    promo: '90% off all accounts',
    offerBadgeLabel: '100% of First $10k Profit',
    fundingModels: ['Evaluation (Monthly Subscription)'],
    profitSplit: '100% of first $10k, then 90/10',
    drawdownRules: 'Trailing or EOD (stops at initial balance)',
    profitTarget: 'Varies by account size (e.g., $1,500 on $25k)',
    tradableInstruments: ['Futures (CME, COMEX, NYMEX, CBOT)'],
    platforms: ['NinjaTrader', 'Tradovate', 'TradingView', 'Rithmic Trader Pro', 'MultiCharts', 'Bookmap', 'Jigsaw Daytrader', 'Sierra Chart', 'MotiveWave', 'VolSys', 'Quantower', 'ATAS Order Flow Trading', 'RTrader Pro', 'Investor RT'],
    rating: 4.7,
    minAccountSize: 25000,
    maxAccountSize: 250000,
    minChallengeCost: 145, 
    maxChallengeCost: 535,
    activationFee: 'One-time fee, varies by account size',
    challengeType: '1-Step Evaluation',
    accountTiers: bulenoxAccountTiers,
  },
  {
    id: '6',
    slug: 'daytraders',
    name: 'Daytraders',
    logoUrl: 'https://daytraders.com/assets/images/logo/logo.svg', 
    websiteUrl: 'https://daytraders.com/',
    affiliateLink: 'https://daytraders.com/?aff_id=YOUR-AFFILIATE-ID', // Replace with your actual Daytraders affiliate link
    briefDescription: 'Offers "Straight to Funded" (S2F) accounts with a 100% profit split, alongside Trail and Static evaluations.',
    fullReview: `This proprietary trading firm offers "Straight to Funded" (S2F) accounts, meaning you can start trading with their capital after paying a one-time fee. There are no profit splits; you keep 100% of your earnings. Daytraders also offers "Trail" and "Static" evaluation accounts. Trading is done exclusively on their proprietary ProjectX platform.`,
    tradingRules: `<h3>Rules for Evaluation Accounts</h3>
<h4>Permitted and Prohibited Trading Practices</h4>
<ul>
    <li><strong>Dollar-Cost Averaging (DCA):</strong> Allowed in both evaluation and Pro accounts.</li>
    <li><strong>News Trading:</strong> Allowed, but traders should be cautious due to potentially high volatility and low liquidity.</li>
    <li><strong>Hedging:</strong> Not permitted at any point during the evaluation phase.</li>
    <li><strong>High-Frequency Trading (HFT):</strong> Automated high-frequency trading is strictly prohibited.</li>
</ul>
<h4>Rules for Passing the Evaluation</h4>
<p>To successfully pass your evaluation and move to a Pro account, you must adhere to the following rules:</p>
<ul>
    <li><strong>Profit Goal and Drawdown:</strong> You must reach the profit goal for your specific account size without ever letting your balance fall to the maximum drawdown limit.</li>
    <li><strong>Minimum Trading Days:</strong> A minimum of 4 trading days is required. These days do not need to be consecutive.</li>
    <li><strong>Minimum Daily Profit:</strong> For a day to count toward the 4-day minimum, it must meet a specific profit threshold ($25k: $100, $50k-$75k: $200, $100k-$250k: $300, $300k: $400).</li>
    <li><strong>Consistency Rule (50%):</strong> To ensure consistent trading, no single trading day can account for more than 50% of your total profit. <em>Note: If you fail to meet this rule, you can continue trading to balance out your profit distribution.</em></li>
    <li><strong>Stop Trading After Passing:</strong> Once all evaluation criteria are met, you must stop trading immediately. Continuing to trade could cause you to fall below the profit target and invalidate your pass.</li>
</ul>
<h4>General Account Management</h4>
<ul>
    <li><strong>Daily Cut-Off:</strong> All trades must be closed, and pending orders canceled, by 4:59 PM ET.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade every 30 days to keep your account active.</li>
    <li><strong>Account Limit:</strong> You are allowed to have a maximum of 15 evaluation accounts at one time.</li>
    <li><strong>Code of Conduct:</strong> You are expected to be respectful when interacting with support agents and must not share your account login information.</li>
    <li><strong>Commissions:</strong> Commissions are applied to all trades.</li>
</ul>

<h3>Rules for Funded Accounts (Pro & S2F)</h3>
<h4>General Trading Rules (All Funded Accounts)</h4>
<ul>
    <li><strong>Account Limit:</strong> A maximum of 5 active funded accounts are allowed per trader. This can be a mix of up to 2 Pro Accounts and up to 3 S2F Accounts.</li>
    <li><strong>Permitted Strategies:</strong> Dollar-Cost Averaging (DCA) and News Trading are allowed.</li>
    <li><strong>Prohibited Strategies:</strong> Hedging (being long and short on the same asset across different accounts) and High-Frequency Trading (HFT) are not allowed.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade every 30 days to keep the account active.</li>
</ul>

<h4>Specific Account Rules</h4>
<table>
  <thead>
    <tr>
      <th>Rule</th>
      <th>Pro Accounts</th>
      <th>S2F Accounts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Consistency</strong></td>
      <td>No single trading day can exceed 30% of total profit.</td>
      <td>No single trading day can exceed 20% of total profit.</td>
    </tr>
    <tr>
      <td><strong>Min. Trading Days</strong></td>
      <td>Requires 8 qualifying trading days for a payout.</td>
      <td>Requires 10 qualifying trading days for a payout.</td>
    </tr>
    <tr>
      <td><strong>Drawdown Type</strong></td>
      <td>Follows the evaluation rule (Static or Intraday Trailing).</td>
      <td>Uses an End-of-Day (EOD) trailing drawdown.</td>
    </tr>
    <tr>
      <td><strong>Account Failure</strong></td>
      <td>Must pass another evaluation to get a new account.</td>
      <td>Requires a re-purchase of the account.</td>
    </tr>
  </tbody>
</table>

<h4>Payout Rules & Requirements</h4>
<h5>Minimum Daily Profit</h5>
<p>For a trading day to qualify for payouts, it must meet the following minimum profit:</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Account Size</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Minimum Daily Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">25k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$100</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">50k - 75k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$200</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">100k - 250k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$300</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">300k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$400</td>
    </tr>
  </tbody>
</table>
<h5>Full & Static Pro Account Payouts</h5>
<p>These accounts require a profit buffer before withdrawal. The minimum payout request is $500.</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Account Size</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Min. Balance for Payout</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Min. Balance After Withdrawal</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Max Withdrawal per Request</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">25k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$27,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$26,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">50k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$52,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$52,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">75k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$77,850</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$77,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">100k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$103,100</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$103,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">150k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$155,100</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$153,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">250k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$256,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$254,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$4,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">300k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$307,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$305,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$5,000</td>
    </tr>
  </tbody>
</table>
<h5>S2F Account Payouts</h5>
<p>S2F accounts use profit targets that must be met before each withdrawal.</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Payout Targets</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">25k Account</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">50k Account</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">150k Account</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 1</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$10,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 2</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$5,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 3+</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Max. Payout Request</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
    </tr>
  </tbody>
</table>
<h5>Maximum Withdrawal and Live Accounts</h5>
<ul>
    <li><strong>Overall Limit:</strong> The total withdrawal cap per trader is $150,000 across all their accounts.</li>
    <li><strong>Transition to Live:</strong> After reaching the payout max or completing 6 payout milestones, your performance will be evaluated for a transition to a live funded account.</li>
</ul>`,
    pros: [
        '100% profit split on all funded accounts.',
        '"Straight to Funded" option for immediate trading.',
        'Multiple account models (S2F, Trail, Static) to fit different styles.',
        'No daily drawdown on Trail accounts.',
        'No trailing drawdown on Static accounts.',
        'Free real-time data.'
    ],
    cons: [
        'Trading is restricted to their proprietary ProjectX platform.',
        'No scaling plans available.',
        'Activation fee required for funded accounts from Trail and Static evaluations.'
    ],
    keyFeatures: [
        '100% Profit Split',
        'Straight to Funded (S2F) accounts available',
        'Trail and Static evaluation paths',
        'End-of-Day and Static drawdown options',
        'Proprietary ProjectX trading platform'
    ],
    keyInfoSnippets: [
        { label: 'Profit Split', value: '100%' },
        { label: 'Account Types', value: 'S2F, Trail, Static' },
        { label: 'Platforms', value: 'ProjectX (Proprietary)' },
        { label: 'Drawdown', value: 'EOD, Trailing, or Static' }
    ],
    offerBadgeLabel: '100% Profit Split!',
    fundingModels: ['Straight to Funded', 'Evaluation (Trail)', 'Evaluation (Static)'],
    profitSplit: '100%',
    drawdownRules: 'Varies by account type (End-of-Day, Trailing, or Static)',
    profitTarget: 'Varies for evaluation accounts, none for S2F',
    tradableInstruments: ['Futures'],
    platforms: ['ProjectX'],
    rating: 4.7,
    isFeatured: false,
    minAccountSize: 25000,
    maxAccountSize: 150000, 
    minChallengeCost: 150, 
    maxChallengeCost: 825, 
    activationFee: 'None (S2F) / $130 (Trail/Static)',
    challengeType: 'Evaluation or Direct Funding',
    accountTiers: [
        // S2F Accounts
        { id: 'dt-s2f-25k', name: '25K S2F Account', size: 25000, evaluationFee: 370, activationFee: 0, drawdownRules: '$1,000 (End of Day)', dailyLossLimitPercentage: null, profitTargetPercentage: null },
        { id: 'dt-s2f-50k', name: '50K S2F Account', size: 50000, evaluationFee: 570, activationFee: 0, drawdownRules: '$2,500 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null },
        { id: 'dt-s2f-150k', name: '150K S2F Account', size: 150000, evaluationFee: 825, activationFee: 0, drawdownRules: '$6,000 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null },
        // Trail Accounts
        { id: 'dt-trail-25k', name: '25K TRAIL Account', size: 25000, evaluationFee: 249, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,500 Trailing Threshold', dailyLossLimitPercentage: null },
        { id: 'dt-trail-50k', name: '50K TRAIL Account', size: 50000, evaluationFee: 379, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$2,500 Trailing Threshold', dailyLossLimitPercentage: null },
        { id: 'dt-trail-75k', name: '75K TRAIL Account', size: 75000, evaluationFee: 449, activationFee: 130, profitTargetPercentage: 5.67, drawdownRules: '$2,750 Trailing Threshold', dailyLossLimitPercentage: null },
        // Static Accounts
        { id: 'dt-static-25k', name: '25K STATIC Account', size: 25000, evaluationFee: 150, activationFee: 130, profitTargetPercentage: 10, drawdownRules: '$750 Total Drawdown', dailyLossLimitPercentage: null },
        { id: 'dt-static-50k', name: '50K STATIC Account', size: 50000, evaluationFee: 200, activationFee: 130, profitTargetPercentage: 7.5, drawdownRules: '$1,000 Total Drawdown', dailyLossLimitPercentage: null },
        { id: 'dt-static-75k', name: '75K STATIC Account', size: 75000, evaluationFee: 250, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,250 Total Drawdown', dailyLossLimitPercentage: null },
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

    

    



  


