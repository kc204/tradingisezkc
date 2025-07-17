
import type { GlobalOffer, PropFirm, Article, TradingResource, FreeResourceItem, VideoLesson, BookListing, AccountTier } from './types';

export const mockGlobalOffers: GlobalOffer[] = [
  { id: '1', text: 'Take Profit Trader: 40% OFF + NO ACTIVATION FEE', affiliateLink: 'https://takeprofittrader.com/if/tradingisez', isActive: true },
  { id: '2', text: 'DayTraders.com: 90% off, 100% profit split', affiliateLink: '#', isActive: true },
  { id: '3', text: 'Tradeify: 33% off', affiliateLink: '#', isActive: true }, // VERIFY CURRENT VALIDITY OF THIS PROMO CODE with Tradeify.co
];

const tptAccountTiers: AccountTier[] = [
    { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 6, activationFee: 130 },
    { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 4, activationFee: 130 },
    { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.13, drawdownPercentage: 3.33, activationFee: 130 },
    { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, activationFee: 130 },
    { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, activationFee: 130 },
];

const myFundedFuturesAccountTiers: AccountTier[] = [
    // Starter Plus Plan
    { id: 'mff-starter-plus-50k', name: '$50K Starter Plus Plan', size: 50000, evaluationFee: 127, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null },
    { id: 'mff-starter-plus-100k', name: '$100K Starter Plus Plan', size: 100000, evaluationFee: 267, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null },
    { id: 'mff-starter-plus-150k', name: '$150K Starter Plus Plan', size: 150000, evaluationFee: 377, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null },
    // Expert Plan
    { id: 'mff-expert-50k', name: '$50K Expert Plan', size: 50000, evaluationFee: 165, drawdownRules: 'Trailing Drawdown with Buffer Zone', profitTargetPercentage: null, dailyLossLimitPercentage: null },
    { id: 'mff-expert-100k', name: '$100K Expert Plan', size: 100000, evaluationFee: 265, drawdownRules: 'Trailing Drawdown with Buffer Zone', profitTargetPercentage: null, dailyLossLimitPercentage: null },
    { id: 'mff-expert-150k', name: '$150K Expert Plan', size: 150000, evaluationFee: 375, drawdownRules: 'Trailing Drawdown with Buffer Zone', profitTargetPercentage: null, dailyLossLimitPercentage: null },
    // Starter Plan
    { id: 'mff-starter-50k-single', name: '$50K Starter Plan', size: 50000, evaluationFee: 97, profitTargetPercentage: 6, drawdownPercentage: 5, drawdownRules: '$2,500 Trailing Drawdown', dailyLossLimitPercentage: null }, // Assuming soft daily loss
    // Eval to Live Plan
    { id: 'mff-1step-eval-live-50k', name: '$50K 1-Step Eval to Live', size: 50000, evaluationFee: 444, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 1 },
    { id: 'mff-2step-eval-live-50k', name: '$50K 2-Step Eval to Live', size: 50000, evaluationFee: 197, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: 1 },
];

const tradeifyAccountTiers: AccountTier[] = [
  // Advanced Plan (Evaluation)
  { id: 'tradeify-adv-50k', name: '$50K Advanced Plan', size: 50000, evaluationFee: 69, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null },
  { id: 'tradeify-adv-100k', name: '$100K Advanced Plan', size: 100000, evaluationFee: 109, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null },
  { id: 'tradeify-adv-150k', name: '$150K Advanced Plan', size: 150000, evaluationFee: 129, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null },
  // Growth Plan (Evaluation)
  { id: 'tradeify-growth-50k', name: '$50K Growth Plan', size: 50000, evaluationFee: 139, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 },
  { id: 'tradeify-growth-100k', name: '$100K Growth Plan', size: 100000, evaluationFee: 249, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3.5, dailyLossLimitPercentage: 2.5 },
  { id: 'tradeify-growth-150k', name: '$150K Growth Plan', size: 150000, evaluationFee: 339, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.5 },
  // Straight to Sim Funded
  { id: 'tradeify-sim-25k', name: '$25K Straight to Sim', size: 25000, evaluationFee: 349, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: null },
  { id: 'tradeify-sim-50k', name: '$50K Straight to Sim', size: 50000, evaluationFee: 509, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 },
  { id: 'tradeify-sim-100k', name: '$100K Straight to Sim', size: 100000, evaluationFee: 629, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 },
  { id: 'tradeify-sim-150k', name: '$150K Straight to Sim', size: 150000, evaluationFee: 729, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5 },
];

const bulenoxAccountTiers: AccountTier[] = [
  { id: 'bulenox-qual-25k', name: '$25K Qualification', size: 25000, evaluationFee: 145, activationFee: 148, drawdownPercentage: 6, profitTargetPercentage: 6 }, // $1500 target, $1500 max drawdown
  { id: 'bulenox-qual-50k', name: '$50K Qualification', size: 50000, evaluationFee: 175, activationFee: 148, drawdownPercentage: 5, profitTargetPercentage: 6 }, // $3000 target, $2500 max drawdown
  { id: 'bulenox-qual-100k', name: '$100K Qualification', size: 100000, evaluationFee: 215, activationFee: 248, drawdownPercentage: 3, profitTargetPercentage: 6 }, // $6000 target, $3000 max drawdown
  { id: 'bulenox-qual-150k', name: '$150K Qualification', size: 150000, evaluationFee: 325, activationFee: 498, drawdownPercentage: 3, profitTargetPercentage: 6 }, // $9000 target, $4500 max drawdown
  { id: 'bulenox-qual-250k', name: '$250K Qualification', size: 250000, evaluationFee: 535, activationFee: 898, drawdownPercentage: 2.2, profitTargetPercentage: 6 }, // $15000 target, $5500 max drawdown
];

const fundingticksAccountTiers: AccountTier[] = [
  // 1-Step Accounts (Monthly Fee) / Pro+
  { id: 'ft-pro-25k', name: '25k Pro+ (Evaluation)', size: 25000, evaluationFee: 99, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
  { id: 'ft-pro-50k', name: '50k Pro+ (Evaluation)', size: 50000, evaluationFee: 125, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
  { id: 'ft-pro-100k', name: '100k Pro+ (Evaluation)', size: 100000, evaluationFee: 199, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
  // Instant Accounts (One-Time Fee) / Zero
  { id: 'ft-zero-25k', name: '25k Zero (Instant)', size: 25000, evaluationFee: 333, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
  { id: 'ft-zero-50k', name: '50k Zero (Instant)', size: 50000, evaluationFee: 499, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
  { id: 'ft-zero-100k', name: '100k Zero (Instant)', size: 100000, evaluationFee: 599, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing' },
];

const topstepAccountTiers: AccountTier[] = [
    { id: 'topstep-50k', name: '$50K Challenge Account', size: 50000, evaluationFee: 49, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 4 },
    { id: 'topstep-100k', name: '$100K Challenge Account', size: 100000, evaluationFee: 99, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
    { id: 'topstep-150k', name: '$150K Challenge Account', size: 150000, evaluationFee: 149, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
];

const alphaCapitalAccountTiers: AccountTier[] = [
  // Alpha Pro (2 Steps)
  { id: 'ac-pro-5k', name: '$5,000 Alpha Pro', size: 5000, evaluationFee: 50.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-pro-10k', name: '$10,000 Alpha Pro', size: 10000, evaluationFee: 97.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-pro-25k', name: '$25,000 Alpha Pro', size: 25000, evaluationFee: 197.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-pro-50k', name: '$50,000 Alpha Pro', size: 50000, evaluationFee: 297.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-pro-100k', name: '$100,000 Alpha Pro', size: 100000, evaluationFee: 497.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-pro-200k', name: '$200,000 Alpha Pro', size: 200000, evaluationFee: 997.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  // Alpha Swing (2 Steps)
  { id: 'ac-swing-5k', name: '$5,000 Alpha Swing', size: 5000, evaluationFee: 70.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-swing-10k', name: '$10,000 Alpha Swing', size: 10000, evaluationFee: 147.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-swing-100k', name: '$100,000 Alpha Swing', size: 100000, evaluationFee: 577.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ac-swing-200k', name: '$200,000 Alpha Swing', size: 200000, evaluationFee: 1097.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
];

const the5ersAccountTiers: AccountTier[] = [
  // High Stakes (2-Step)
  { id: '5ers-hs-5k', name: '$5,000 High Stakes', size: 5000, evaluationFee: 39, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: '5ers-hs-10k', name: '$10,000 High Stakes', size: 10000, evaluationFee: 78, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: '5ers-hs-20k', name: '$20,000 High Stakes', size: 20000, evaluationFee: 165, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: '5ers-hs-60k', name: '$60,000 High Stakes', size: 60000, evaluationFee: 329, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: '5ers-hs-100k', name: '$100,000 High Stakes', size: 100000, evaluationFee: 545, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  // Hyper-Growth (1-Step)
  { id: '5ers-hg-5k', name: '$5,000 Hyper-Growth', size: 5000, evaluationFee: 260, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6 },
  { id: '5ers-hg-10k', name: '$10,000 Hyper-Growth', size: 10000, evaluationFee: 450, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6 },
  { id: '5ers-hg-20k', name: '$20,000 Hyper-Growth', size: 20000, evaluationFee: 850, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6 },
  // Bootcamp (3-Step)
  { id: '5ers-bc-100k', name: '$100,000 Bootcamp', size: 100000, evaluationFee: 95, activationFee: 215, profitTargetPercentage: 6, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: '5ers-bc-250k', name: '$250,000 Bootcamp', size: 250000, evaluationFee: 225, activationFee: 350, profitTargetPercentage: 6, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
];

const ftmoAccountTiers: AccountTier[] = [
  // Normal and Swing have the same price, just different rules.
  // We can represent this with a `name` property.
  { id: 'ftmo-normal-10k', name: '€10,000 Normal', size: 10000, evaluationFee: 155, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-normal-25k', name: '€25,000 Normal', size: 25000, evaluationFee: 250, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-normal-50k', name: '€50,000 Normal', size: 50000, evaluationFee: 345, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-normal-100k', name: '€100,000 Normal', size: 100000, evaluationFee: 540, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-normal-200k', name: '€200,000 Normal', size: 200000, evaluationFee: 1080, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-swing-10k', name: '€10,000 Swing', size: 10000, evaluationFee: 155, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-swing-25k', name: '€25,000 Swing', size: 25000, evaluationFee: 250, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-swing-50k', name: '€50,000 Swing', size: 50000, evaluationFee: 345, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-swing-100k', name: '€100,000 Swing', size: 100000, evaluationFee: 540, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
  { id: 'ftmo-swing-200k', name: '€200,000 Swing', size: 200000, evaluationFee: 1080, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10 },
];

export const mockPropFirms: PropFirm[] = [
  {
    id: '12',
    slug: 'ftmo',
    name: 'FTMO',
    logoUrl: 'https://placehold.co/100x50.png?text=FTMO',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Otakar Suffner',
    dateCreated: 'January 2015',
    briefDescription: 'A pioneering CFD prop firm from the Czech Republic offering 2-step evaluations with no consistency rules and a scaling plan up to $2M.',
    fullReview: 'FTMO is one of the most recognized names in the prop trading industry, established in 2015. They offer a robust 2-step evaluation process (Challenge and Verification) for CFD traders. Key advantages include the absence of consistency rules, a wide range of tradable assets, and a clear scaling plan that can increase a trader\'s capital to $2M and their profit split to 90%. They provide traders with popular platforms like MT4, MT5, and cTrader. While news trading is restricted on standard funded accounts, they offer a "Swing" account type that allows holding trades over weekends and during news events, providing flexibility for different trading styles.',
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:100</li>
  <li><strong>Metals:</strong> 1:30</li>
  <li><strong>Indices:</strong> 1:50</li>
  <li><strong>Energy:</strong> 1:30</li>
  <li><strong>Crypto:</strong> 1:3</li>
  <li><strong>Stocks:</strong> 1:3</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>FX:</strong> $3 per lot</li>
  <li><strong>Metals:</strong> 0.0010% of Volume</li>
  <li><strong>Indices:</strong> $0</li>
  <li><strong>Energy:</strong> $0</li>
  <li><strong>Crypto:</strong> $0</li>
  <li><strong>Stocks:</strong> 0.0040% of Volume</li>
</ul>
<h3>Firm Rules</h3>
<h4>General Policies</h4>
<ul>
  <li><strong>Consistency Rules:</strong> FTMO does not have consistency rules.</li>
  <li><strong>Minimum Trading Days:</strong> You must trade for a minimum of 4 days in both the Challenge and Verification stages.</li>
  <li><strong>Capital Allocation Limit:</strong> A maximum of $400,000 in capital can be allocated per trader or per strategy.</li>
  <li><strong>News Trading:</strong> Allowed for Swing accounts. For standard accounts, it's allowed during evaluation but restricted within 2 minutes of news on funded accounts.</li>
  <li><strong>Weekend Trades:</strong> Prohibited for standard funded accounts but allowed for Swing accounts.</li>
  <li><strong>Inactivity Rule:</strong> At least one trade must be placed every 30 days.</li>
  <li><strong>Forbidden Practices:</strong> Prohibits inconsistent position sizing and third-party account management. Copy trading from your own external accounts is permitted.</li>
  <li><strong>Multiple Profiles:</strong> Not allowed.</li>
</ul>
<h3>Payout Policy & Scaling Plan</h3>
<p>The default profit split is 80% for the trader. A scaling plan is available to increase the profit split to 90% and grow the account balance.</p>
<h4>Scaling Plan Requirements:</h4>
<ul>
    <li>Complete a minimum of 4 monthly cycles.</li>
    <li>Achieve at least 10% total net profit in those 4 months.</li>
    <li>Process at least 2 payouts.</li>
    <li>Maintain a positive account balance.</li>
</ul>
<h4>Scaling Plan Benefits:</h4>
<ul>
    <li>Profit split increases to 90%.</li>
    <li>Account balance increases by 25% every 4 months if criteria are met.</li>
    <li>The scaling cap is $2,000,000.</li>
</ul>`,
    pros: [
      'No consistency rules',
      'Clear and generous scaling plan up to $2M and 90% split',
      'Established and reputable firm (since 2015)',
      'Offers Swing accounts for news and weekend trading',
      'Wide range of CFD instruments including stocks and crypto'
    ],
    cons: [
      'News and weekend trading restrictions on standard funded accounts',
      'Higher evaluation fees compared to some competitors',
      'Strict rules against inconsistent position sizing'
    ],
    keyFeatures: [
      '2-Step Evaluation (Normal & Swing)',
      '80% default profit split, scalable to 90%',
      'No consistency rules',
      'Scaling plan up to $2,000,000',
      'CFDs on FX, Indices, Stocks, Crypto, and more'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (Scales to 90%)' },
      { label: 'Evaluation', value: '2-Step (Normal/Swing)' },
      { label: 'Platforms', value: 'MT4, MT5, cTrader' },
      { label: 'Assets', value: 'CFDs (FX, Stocks, Crypto, etc.)' }
    ],
    fundingModels: ['2-Step Evaluation'],
    profitSplit: '80% (Scales to 90%)',
    drawdownRules: '10% Max Loss, 5% Daily Loss',
    profitTarget: '10% (Step 1), 5% (Step 2)',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Crypto', 'Stocks'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'DXTrade', 'MT4', 'MT5'],
    broker: 'Institutional Liquidity Provider',
    paymentMethods: ['Apple Pay', 'Bank Transfer', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'Nuvei', 'PayPal', 'Skrill'],
    payoutMethods: ['Bank Transfer', 'Crypto', 'Mastercard', 'Skrill', 'Visa Direct'],
    rating: 4.8,
    minAccountSize: 10000,
    maxAccountSize: 200000,
    minChallengeCost: 155,
    maxChallengeCost: 1080,
    challengeType: '2-Step Evaluation (Normal/Swing)',
    accountTiers: ftmoAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Anguilla", code: "AI" }, { name: "Antarctica", code: "AQ" }, { name: "Antigua and Barbuda", code: "AG" },
      { name: "Belarus", code: "BY" }, { name: "Belize", code: "BZ" }, { name: "Bhutan", code: "BT" }, { name: "Bouvet Island", code: "BV" },
      { name: "Burundi", code: "BI" }, { name: "Cape Verde", code: "CV" }, { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
      { name: "Comoros", code: "KM" }, { name: "Cook Islands", code: "CK" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
      { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Equatorial Guinea", code: "GQ" }, { name: "Eritrea", code: "ER" },
      { name: "Eswatini", code: "SZ" }, { name: "Fiji", code: "FJ" }, { name: "Guinea", code: "GN" }, { name: "Guinea-Bissau", code: "GW" },
      { name: "India", code: "IN" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Kazakhstan", code: "KZ" }, { name: "Kiribati", code: "KI" }, { name: "Kosovo", code: "XK" }, { name: "Kyrgyzstan", code: "KG" },
      { name: "Lesotho", code: "LS" }, { name: "Liberia", code: "LR" }, { name: "Malawi", code: "MW" }, { name: "Mali", code: "ML" },
      { name: "Marshall Islands", code: "MH" }, { name: "Mauritania", code: "MR" }, { name: "Micronesia", code: "FM" }, { name: "Nauru", code: "NR" },
      { name: "Niger", code: "NE" }, { name: "Niue", code: "NU" }, { name: "Papua New Guinea", code: "PG" }, { name: "Donetsk", code: "UA-14" },
      { name: "Luhansk", code: "UA-09" }, { name: "Zaporizhzhia", code: "UA-23" }, { name: "Republic of the Congo", code: "CG" }, { name: "Russia", code: "RU" },
      { name: "Saint Barthélemy", code: "BL" }, { name: "Saint Kitts and Nevis", code: "KN" }, { name: "Saint Lucia", code: "LC" }, { name: "Saint Vincent and the Grenadines", code: "VC" },
      { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" }, { name: "Sao Tome and Principe", code: "ST" }, { name: "Seychelles", code: "SC" },
      { name: "Sierra Leone", code: "SL" }, { name: "Solomon Islands", code: "SB" }, { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" },
      { name: "Sudan", code: "SD" }, { name: "Suriname", code: "SR" }, { name: "Syria", code: "SY" }, { name: "Tajikistan", code: "TJ" },
      { name: "Timor-Leste", code: "TL" }, { name: "Tokelau", code: "TK" }, { name: "Tonga", code: "TO" }, { name: "Turkmenistan", code: "TM" },
      { name: "Tuvalu", code: "TV" }, { name: "United States of America", code: "US" }, { name: "Uzbekistan", code: "UZ" }, { name: "Vanuatu", code: "VU" },
      { name: "Vatican City", code: "VA" }, { name: "Venezuela", code: "VE" }, { name: "Western Sahara", code: "EH" }
    ]
  },
  {
    id: '11',
    slug: 'the5ers',
    name: 'The5ers',
    logoUrl: 'https://placehold.co/100x50.png?text=5ers',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Saul Lokier',
    dateCreated: 'January 2016',
    briefDescription: 'A well-established prop firm from Israel offering diverse programs like Hyper-Growth (Instant Funding), High Stakes (2-Step), and a low-cost Bootcamp (3-Step) challenge for CFD traders on MT5.',
    fullReview: `Founded in 2016, The5ers is one of the more established firms in the industry, offering a variety of programs to suit different trader profiles. Their main offerings include the Hyper-Growth program for instant funding, the High Stakes 2-step challenge for experienced traders seeking high leverage, and the unique low-cost Bootcamp 3-step challenge. They operate exclusively on the MT5 platform and provide access to a wide range of CFD instruments including FX, Metals, Indices, and Crypto. Profit splits are scalable, starting from 50%-80% and going up to 100%. The firm has specific rules regarding EAs, copy trading, and news trading, which vary between programs, emphasizing a tailored risk management approach for each funding path.`,
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:30 (Instant), 1:100 (2-Steps), 1:10 (3-Steps)</li>
  <li><strong>Metals:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Indices:</strong> 1:8 (Instant), 1:25 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Energy:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Crypto:</strong> 1:1 (Instant), 1:2 (2-Steps), N/A (3-Steps)</li>
  <li><strong>Other Commodities:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>FX & Metals:</strong> $4 per Standard Lot</li>
  <li><strong>Indices, Energy, Crypto, Other Commodities:</strong> No Commissions</li>
</ul>
<h3>Firm Rules</h3>
<h4>News Trading</h4>
<ul>
  <li>Allowed in Hyper-Growth and Bootcamp programs, but using bracket strategies around news is prohibited.</li>
  <li>Prohibited in the High Stakes program from 2 minutes before until 2 minutes after high-impact news.</li>
</ul>
<h4>Copy Trading</h4>
<ul>
  <li>Allowed for High Stakes and Hyper-Growth programs.</li>
  <li>Not permitted to take same trades if managing over $500,000.</li>
  <li>Copying from an external account is only allowed if it belongs to the same trader.</li>
  <li>Third-party copy trading is not allowed.</li>
  <li>Copy trading between two Bootcamp accounts is not allowed.</li>
</ul>
<h4>Expert Advisors (EAs)</h4>
<ul>
  <li>Allowed only if they set a Stop Loss (SL) on every position.</li>
  <li>Prohibited EAs include those that copy signals, perform tick scalping, latency/reverse/hedge arbitrage, or use emulators.</li>
</ul>
<h4>High Stakes Program Specific Rules</h4>
<p>A minimum of 3 profitable days is required. A profitable day is defined as a day where closed positions generate a profit of at least 0.5% of the initial balance.</p>
<h4>Bootcamp Program Specific Rules</h4>
<ul>
    <li>A stop-loss is mandatory for all positions.</li>
    <li>The stop-loss must not risk more than 2% of the account balance per position.</li>
    <li>A 3% daily pause (soft breach) applies during the funded stage.</li>
    <li>5 risk violations (e.g., no SL, or risking more than 2%) lead to automatic account termination.</li>
</ul>
<h4>Prohibited Practices</h4>
<p>Taking consistent one-sided bets, exploiting price discrepancies (arbitrage), using bracket strategies around news, and exploiting system errors are all prohibited.</p>
<h4>Inactivity Rule</h4>
<p>Accounts with no new orders for over 30 consecutive calendar days will expire.</p>
<h3>Payout Policy</h3>
<ul>
  <li><strong>Payout Frequency:</strong> Bi-weekly.</li>
  <li><strong>Profit Split:</strong> Starts at 50% for Bootcamp/Hyper-Growth and 80% for High Stakes, with scaling plans to reach 100%.</li>
</ul>`,
    pros: [
      'Multiple diverse funding programs (Instant, 2-Step, 3-Step)',
      'Long-standing firm with a solid reputation (since 2016)',
      'Scalable profit split up to 100%',
      'Wide range of tradable CFD assets including crypto',
      'Low-cost entry option with the Bootcamp program'
    ],
    cons: [
      'Complex rules that vary significantly between programs',
      'Mandatory Stop Loss on all trades in the Bootcamp program',
      'News trading restrictions on the High Stakes program',
      'Only MT5 platform is available'
    ],
    keyFeatures: [
      'Hyper-Growth (Instant Funding)',
      'High Stakes (2-Step Challenge)',
      'Bootcamp (Low-cost 3-Step Challenge)',
      'Scalable profit split up to 100%',
      'CFDs on FX, Metals, Indices, Crypto'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '50%-100% (Scaling)' },
      { label: 'Funding Models', value: 'Instant, 2-Step, 3-Step' },
      { label: 'Platform', value: 'MT5' },
      { label: 'Assets', value: 'CFDs (FX, Indices, Crypto, etc.)' }
    ],
    fundingModels: ['Instant Funding', '2-Step Evaluation', '3-Step Evaluation'],
    profitSplit: 'Scales from 50-80% up to 100%',
    drawdownRules: 'Varies by program (5%-10% max loss)',
    profitTarget: 'Varies by program (6-10%)',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Crypto', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['MT5'],
    broker: 'Commercial Liquidity Provider',
    paymentMethods: ['Apple Pay', 'Bank Transfer', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'PayPal'],
    payoutMethods: ['Crypto', 'Riseworks'],
    rating: 4.9,
    minAccountSize: 5000,
    maxAccountSize: 250000,
    minChallengeCost: 39,
    maxChallengeCost: 850,
    challengeType: 'Instant, 2-Step, or 3-Step',
    accountTiers: the5ersAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" },
      { name: "Congo (Congo-Brazzaville)", code: "CG" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Eritrea", code: "ER" }, { name: "Guinea", code: "GN" },
      { name: "Guinea-Bissau", code: "GW" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Israel", code: "IL" }, { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" },
      { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Myanmar", code: "MM" },
      { name: "North Korea", code: "KP" }, { name: "Palestinian Territory", code: "PS" }, { name: "Papua New Guinea", code: "PG" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "United States of America", code: "US" }, { name: "Vanuatu", code: "VU" },
      { name: "Venezuela", code: "VE" }, { name: "Yemen", code: "YE" }
    ]
  },
  {
    id: '10',
    slug: 'alpha-capital',
    name: 'Alpha Capital',
    logoUrl: 'https://placehold.co/100x50.png?text=AC',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Andrew Blaylock and George Kohler',
    dateCreated: 'November 2021',
    briefDescription: 'UK-based prop firm offering multi-step CFD trading evaluations with flexible payout options and a wide range of platforms.',
    fullReview: `Alpha Capital, established in the UK, provides comprehensive evaluation programs for CFD traders across FX, Metals, Indices, and other commodities. They offer various multi-step evaluation plans, including the Alpha Pro (2-step) and Alpha Swing (2-step), catering to different trading strategies. A key feature is their flexible payout system, allowing traders to choose between biweekly payouts or on-demand withdrawals once a 2% profit is achieved (subject to consistency rules). They support popular trading platforms like MT5, cTrader, DXTrade, and TradeLocker. Alpha Capital enforces specific rules regarding inactivity, average trade duration, and news trading on funded accounts to promote disciplined risk management. Successful traders can manage up to $300,000 in a qualified analyst account.`,
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:30 (1-Step), 1:100 (2-Steps), 1:50 (3-Steps)</li>
  <li><strong>Metals:</strong> 1:9 (1-Step & 3-Steps), 1:30 (2-Steps)</li>
  <li><strong>Indices:</strong> 1:10 (1-Step & 3-Steps), 1:20 (2-Steps)</li>
  <li><strong>Other Commodities:</strong> 1:10 (All plans)</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>Raw Accounts:</strong> $5 per lot on FX, Metals, Indices, and Commodities.</li>
  <li><strong>Standard Accounts:</strong> $0 commission.</li>
</ul>
<h3>Key Firm Rules</h3>
<h4>Consistency Rule</h4>
<p>The on-demand payout option requires that no single trading day's profit accounts for more than 40% of the total profit. A minimum of 2% gross profit is also required for withdrawal.</p>
<h4>General Policies</h4>
<ul>
  <li><strong>Inactivity:</strong> All accounts are deactivated after 30 days of inactivity and cannot be restored.</li>
  <li><strong>All or Nothing:</strong> "All or nothing" high-risk trading practices are prohibited.</li>
  <li><strong>Average Trade Duration:</strong> The average duration of all trades must be over 2 minutes. At least 50% of any requested profit must come from trades lasting longer than 2 minutes.</li>
  <li><strong>Order Block Spamming:</strong> Placing multiple orders in a very short period is prohibited.</li>
  <li><strong>Risk Management:</strong> Consistently risking or losing 2% or more on a single trade is not allowed.</li>
  <li><strong>Qualified Analyst Allocation:</strong> Maximum allocation per trading strategy is $300,000.</li>
</ul>
<h4>News Trading on Qualified Analyst Accounts</h4>
<ul>
  <li><strong>Swing accounts:</strong> Allowed, but trades opened within 2 minutes of a news release must be held for longer than 2 minutes.</li>
  <li><strong>Alpha Pro accounts:</strong> Restricted for 2 minutes before and after high-impact news.</li>
  <li><strong>Alpha One, Alpha Pro 6%, Alpha Three accounts:</strong> Restricted for 5 minutes before and after high-impact news.</li>
  <li><strong>Evaluation Programs:</strong> News trading is permitted without restriction.</li>
</ul>
<h4>Drawdown on Alpha One Accounts</h4>
<p>If your 6% trailing maximum drawdown resets to the initial balance after achieving a 6% profit, you must maintain a profit buffer to continue trading. Withdrawing all profits will lead to account closure.</p>
<h4>Maximum Lot Sizes on Funded Accounts</h4>
<ul>
    <li><strong>Alpha Swing:</strong> $5k: 1.25 lots; $10k: 2.5; $25k: 5; $50k: 10; $100k: 20; $200k: 40; $300k: 60.</li>
    <li><strong>Alpha One, Pro, Pro 6%, Three:</strong> $5k: 2.5 lots; $10k: 5; $25k: 10; $50k: 20; $100k: 40; $200k: 80; $300k: 120.</li>
</ul>
<h3>Payout Policy</h3>
<p>You can choose between Biweekly Payouts or 2% On-Demand Payouts for the Alpha Pro, Alpha Pro 6%, and Alpha Three plans. The Alpha Swing and Alpha One plans only offer the 2% On-Demand option.</p>
<ul>
    <li><strong>Biweekly Payouts:</strong> Processed every 14 days with a minimum withdrawal of $100 in gross profits.</li>
    <li><strong>2% On-Demand Payouts:</strong> Request a payout anytime if you have met the 40% Best Day Rule and have at least 2% gross profits in your account.</li>
</ul>`,
    pros: [
      'Multiple evaluation programs (2-step, 3-step, etc.)',
      'Flexible payout options (Biweekly or On-Demand)',
      'Supports a wide range of trading platforms (MT5, cTrader, DXTrade, TradeLocker)',
      'Allows news trading during evaluation phases',
      'Clear leverage and commission structures'
    ],
    cons: [
      'Strict inactivity rule (30 days)',
      'Consistency rules apply to on-demand payouts',
      'Specific restrictions on news trading for different funded account types',
      'Average trade duration rule may not suit all strategies'
    ],
    keyFeatures: [
      'CFD Trading (FX, Metals, Indices)',
      '2-Step Evaluation Programs (Alpha Pro, Alpha Swing)',
      'Biweekly and On-Demand Payouts',
      'Supports MT5, cTrader, DXTrade, TradeLocker',
      'Clear risk management and news trading rules'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80%' },
      { label: 'Instruments', value: 'CFDs (FX, Metals, Indices)' },
      { label: 'Platforms', value: 'cTrader, DXTrade, MT5, TradeLocker' },
      { label: 'Payouts', value: 'Biweekly or On-Demand' }
    ],
    fundingModels: ['2-Step Evaluation', '3-Step Evaluation'],
    profitSplit: '80%',
    drawdownRules: '5% Daily Loss, 10% Max Loss',
    profitTarget: '10% (Phase 1), 5% (Phase 2)',
    assets: ['FX', 'Metals', 'Indices', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'DXTrade', 'MT5', 'TradeLocker'],
    broker: 'ACG Markets',
    paymentMethods: ['Credit/Debit Card', 'Crypto', 'PayPal'],
    payoutMethods: ['Bank Transfer', 'Riseworks', 'Wise'],
    rating: 4.6,
    minAccountSize: 5000,
    maxAccountSize: 200000,
    minChallengeCost: 50,
    maxChallengeCost: 1097,
    challengeType: '2-Step Evaluation',
    accountTiers: alphaCapitalAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Belarus", code: "BY" }, { name: "Burundi", code: "BI" },
      { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Eritrea", code: "ER" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Libya", code: "LY" }, { name: "Myanmar", code: "MM" },
      { name: "North Korea", code: "KP" }, { name: "Region of Crimea", code: "UA-43" }, { name: "Russia", code: "RU" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
      { name: "Yemen", code: "YE" }
    ],
  },
  {
    id: '8',
    slug: 'topstep',
    name: 'Topstep',
    logoUrl: 'https://assets-global.website-files.com/645cf84923a8054a856d3935/65957d19e0321a42637b83f3_topstep-logo.svg',
    websiteUrl: 'https://www.topstep.com/',
    affiliateLink: 'https://www.topstep.com/&affiliate_id=YOUR-AFFILIATE-ID', // REPLACE
    isFeatured: true,
    ceo: 'Michael Patak',
    dateCreated: 'January 2012',
    briefDescription: 'A pioneer in the prop firm industry, Topstep offers a simple 1-step Trading Combine with a 90% profit split and their proprietary TopstepX platform.',
    fullReview: `As one of the original firms in the space, Topstep has a long-standing reputation. They offer a straightforward 1-step evaluation called the Trading Combine. Traders who pass the Combine can get funded in as little as two days. A major incentive is their payout policy, where traders keep 100% of their first $10,000 in profits, which then moves to a 90% split. Topstep also offers a unique path to a 100% profit split for traders who accumulate 30 winning trading days. All trading is done on their proprietary TopstepX platform, and they allow for a high degree of flexibility with no restrictions on news trading or automated strategies.`,
    tradingRules: `<h3>Leverage (Max Contracts)</h3>
<ul>
    <li><strong>$50k Account:</strong> Up to 5 Contracts</li>
    <li><strong>$100k Account:</strong> Up to 10 Contracts</li>
    <li><strong>$150k Account:</strong> Up to 15 Contracts</li>
</ul>
<h3>Commissions and Fees</h3>
<ul>
    <li><strong>Trading Combine:</strong> <a href="https://support.topstep.com/hc/en-us/articles/360045143994-Commissions-and-Fees" target="_blank" rel="noopener noreferrer">Commissions and Fees Details</a></li>
    <li><strong>Live Funded Account:</strong> <a href="https://support.topstep.com/hc/en-us/articles/360057287233-Live-Funded-Account-Commissions-and-Fees" target="_blank" rel="noopener noreferrer">Commissions and Fees Details</a></li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rule</h4>
<ul>
    <li><strong>50% Rule:</strong> Applies to Combine Accounts (evaluation) only. Profits made during one single trading day cannot exceed 50% of the total profit target.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>News Trading & Copy Trading:</strong> Allowed with no restrictions during both Evaluation and Funded stages.</li>
    <li><strong>Automated Strategies and EAs:</strong> Allowed with no restrictions.</li>
    <li><strong>Inactivity Rule:</strong> Express Funded Accounts must execute at least one trade every 30 days to remain open.</li>
    <li><strong>Post-Payout Rule:</strong> After a payout is processed, the maximum loss limit on the account is set to $0. The remaining capital in the account becomes the new maximum allowable loss.</li>
    <li><strong>Prohibited Conduct:</strong> For more details, refer to the <a href="https://www.topstep.com/prohibited-conduct/" target="_blank" rel="noopener noreferrer">Prohibited Conduct page</a>.</li>
</ul>
<h3>Payout Policy</h3>
<h4>Profit Split</h4>
<ul>
    <li>Traders receive 100% of their first $10,000 in profits.</li>
    <li>After the first $10,000, the profit split becomes 90/10 (90% to the trader).</li>
    <li>Traders can also become eligible for a 100% profit split after accumulating 30 winning trading days.</li>
</ul>
<h4>Payout Conditions</h4>
<ul>
    <li>For both Express and Live Funded Accounts, traders can request a payout after accumulating five winning trading days per request.</li>
    <li>A "winning trading day" is defined as any day where the Net PNL is $200 or more.</li>
</ul>
<h4>Payout Amounts</h4>
<ul>
    <li><strong>Express Funded Account:</strong> Can request a payout of up to $5,000 or 50% of the account balance.</li>
    <li><strong>Live Funded Account:</strong> Can request a payout of up to 50% of the account balance.</li>
    <li>For complete details, please review the official <a href="https://support.topstep.com/hc/en-us/articles/360054593853-Payout-Policy" target="_blank" rel="noopener noreferrer">Topstep Payout Policy</a>.</li>
</ul>`,
    pros: [
      'Keep 100% of the first $10,000 in profits',
      'Simple 1-step evaluation process (Trading Combine)',
      'Potential to earn a 100% profit split after 30 winning days',
      'No restrictions on news trading or automated strategies',
      'Long-standing and reputable firm (founded in 2012)'
    ],
    cons: [
      'Trading is limited to their proprietary TopstepX platform',
      'Post-payout rule resets max loss limit to $0',
      'Winning day for payout qualification requires a $200+ profit'
    ],
    keyFeatures: [
      '1-Step Trading Combine',
      '100% Profit Split on first $10,000',
      'Proprietary TopstepX Platform',
      'Path to 100% Lifetime Payouts',
      'No restrictions on news or automated trading'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $10k), then 90%' },
      { label: 'Platform', value: 'TopstepX' },
      { label: 'Evaluation', value: '1-Step Trading Combine' },
      { label: 'Founded', value: '2012' }
    ],
    fundingModels: ['1-Step Evaluation (Monthly Subscription)'],
    profitSplit: '100% on first $10,000, then 90%',
    drawdownRules: 'Trailing Drawdown',
    profitTarget: '6%',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['TopstepX'],
    broker: 'CQC, Dorman, Ninjatrader, Plus500',
    paymentMethods: ['Credit/Debit Card', 'PayPal'],
    payoutMethods: ['ACH', 'Bank Wire Transfer', 'Wise'],
    rating: 4.3,
    minAccountSize: 50000,
    maxAccountSize: 150000,
    minChallengeCost: 49,
    maxChallengeCost: 149,
    activationFee: '$149',
    challengeType: '1-Step Evaluation',
    accountTiers: topstepAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" },
      { name: "Burma (Myanmar)", code: "MM" }, { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
      { name: "Cote D'Ivoire", code: "CI" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" }, { name: "Democratic Republic of the Congo", code: "CD" },
      { name: "Ethiopia", code: "ET" }, { name: "Haiti", code: "HT" }, { name: "Hong Kong", code: "HK" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Jamaica", code: "JM" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" },
      { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mali", code: "ML" },
      { name: "Monaco", code: "MC" }, { name: "Montenegro", code: "ME" }, { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" },
      { name: "Namibia", code: "NA" }, { name: "Nicaragua", code: "NI" }, { name: "Nigeria", code: "NG" }, { name: "North Korea", code: "KP" },
      { name: "North Macedonia", code: "MK" }, { name: "Pakistan", code: "PK" }, { name: "Philippines", code: "PH" }, { name: "Romania", code: "RO" },
      { name: "Russia", code: "RU" }, { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Tanzania", code: "TZ" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Turkey", code: "TR" },
      { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: "Yemen", code: "YE" },
      { name: "Zimbabwe", code: "ZW" }
    ]
  },
  {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: 'https://takeprofittrader.com/assets/desktop-logo.svg',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/tradingisez',
    ceo: 'James Sixsmith',
    dateCreated: 'March 2021',
    briefDescription: 'Futures prop firm with a 1-step evaluation, daily payouts, and a path to a live PRO+ account with a 90% profit split.',
    fullReview: `Take Profit Trader (TPT) offers a direct route for futures traders with its 1-step evaluation. Upon passing the Test account, which utilizes a flexible End-of-Day (EOD) trailing drawdown, traders pay a one-time $130 activation fee to get a PRO account. PRO accounts are notable for offering daily payouts from the very first day and an 80% profit split. However, they switch to a more restrictive intraday trailing drawdown based on peak balance. For traders seeking a higher 90% profit share and a return to the EOD drawdown, an upgrade to a PRO+ account is available, which operates in a live market environment. A critical rule for funded traders is the restriction on trading during major news events in both PRO and PRO+ accounts.`,
    tradingRules: `<h3>Leverage (Maximum Contracts)</h3>
<ul>
    <li><strong>$25,000 Account:</strong> 3 Contracts / 30 Micros</li>
    <li><strong>$50,000 Account:</strong> 6 Contracts / 60 Micros</li>
    <li><strong>$75,000 Account:</strong> 9 Contracts / 90 Micros</li>
    <li><strong>$100,000 Account:</strong> 12 Contracts / 120 Micros</li>
    <li><strong>$150,000 Account:</strong> 15 Contracts / 150 Micros</li>
</ul>
<h3>Commissions</h3>
<ul>
    <li><strong>Standard Contracts:</strong> $5.00 per round trip</li>
    <li><strong>Micro Contracts:</strong> $0.50 per round trip</li>
</ul>
<h3>Trading Rules & Policies</h3>
<h4>Consistency Rules</h4>
<ul>
    <li>A minimum of 5 trading days is required.</li>
    <li><strong>Test Phase:</strong> A 50% consistency rule applies, meaning no single trading day can account for more than 50% of your total profits.</li>
    <li><strong>Pro and Pro+ Accounts:</strong> There is no consistency rule.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>Max Loss Limit (Drawdown):</strong>
        <ul>
            <li><strong>Test Phase:</strong> Trailing drawdown is based on your End-of-Day balance.</li>
            <li><strong>Pro and Pro+ Accounts:</strong> Trailing drawdown is based on your peak balance (includes realized and unrealized gains).</li>
        </ul>
    </li>
    <li><strong>News Trading:</strong>
        <ul>
            <li><strong>Test Phase:</strong> Allowed without restrictions.</li>
            <li><strong>Pro and Pro+ Accounts:</strong> Trading is restricted for 1 minute before and 1 minute after specific high-impact news events, including:
                <ul>
                    <li>FOMC meeting minutes/announcements</li>
                    <li>Non-Farm Payroll (NFP)</li>
                    <li>Consumer Price Index (CPI)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Instrument-Specific News Restrictions:</strong>
        <ul>
            <li><strong>Crude Oil Inventories:</strong> Prohibits trading Crude Oil.</li>
            <li><strong>Bond Auctions:</strong> Prohibits trading 10-Year Note and 30-Year Bond.</li>
        </ul>
    </li>
    <li><strong>Expert Advisors (EAs):</strong> Not allowed.</li>
    <li><strong>Copy Trading:</strong> Allowed. Can be used for up to 5 accounts on a PRO+ account.</li>
</ul>
<h3>Account Types & Payout Policy</h3>
<h4>PRO Account</h4>
<ul>
    <li><strong>Profit Split:</strong> 80%</li>
    <li><strong>Payouts:</strong> On-demand, available from day one.</li>
    <li><strong>Buffer Zone:</strong> Traders can withdraw profits at 80% once they reach the maximum drawdown level (the "buffer zone"). Withdrawing profits from within the buffer zone is possible but will result in the termination of the account.</li>
    <li><strong>Upgrading to PRO+:</strong> A trader can be upgraded to PRO+ by either making $10,000 in profit in a single day or by demonstrating consistent profitability.</li>
</ul>
<h4>PRO+ Account (Live Account)</h4>
<ul>
    <li><strong>Status:</strong> Trader is directly routed to the exchange (not SIM or copy traded).</li>
    <li><strong>Profit Split:</strong> 90%</li>
    <li><strong>Buffer Zone:</strong> No buffer zone requirement.</li>
    <li><strong>Restrictions:</strong> No payout restrictions, no consistency rule, no daily loss limit.</li>
    <li><strong>Drawdown:</strong> End-of-day drawdown.</li>
</ul>
<h3>Important Tech & Payout Updates (As of May 15, 2025)</h3>
<ul>
    <li><strong>Bank Identity Verification:</strong> The legal name provided during KYC (Know Your Customer) must match the legal owner of the bank account used for payouts.</li>
    <li><strong>LLC Payouts:</strong> Payouts to an LLC bank account must now be processed through Wise or PayPal.</li>
    <li><strong>Plaid Reconnection:</strong> Existing Plaid connections were disconnected during a tech update. Users must reconnect their personal banking information via Plaid before their next payout request.</li>
</ul>`,
    pros: [
        'Daily Payouts available from day one on PRO accounts',
        'Simple 1-Step Evaluation process',
        'Choice of PRO (sim) or PRO+ (live) funded accounts',
        '90% profit split available with PRO+ account',
        'News trading is allowed during the evaluation phase'
    ],
    cons: [
        '50% consistency rule during evaluation',
        'News trading is restricted on all funded accounts',
        'PRO account has a more restrictive peak balance trailing drawdown',
        'EAs are not allowed'
    ],
    keyFeatures: [
        '1-Step Evaluation with EOD Drawdown',
        'Daily Payouts',
        'PRO Account with 80% split',
        'PRO+ Account (Live) with 90% split',
        'Supports Tradovate, Rithmic, and CQG platforms'
    ],
      keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (PRO) / 90% (PRO+)' },
      { label: 'Payouts', value: 'Daily from Day 1' },
      { label: 'Evaluation Drawdown', value: 'End-of-Day Trailing' },
      { label: 'Activation Fee', value: '$130 (One-Time)'}
 ],
    promo: 'Code: EZ',
    offerBadgeLabel: '40% OFF + No Activation Fee',
    fundingModels: ['1-Step Evaluation'],
    profitSplit: '80% (PRO) / 90% (PRO+)',
    drawdownRules: 'EOD Trailing (Evaluation) / Peak Balance Trailing (Funded)',
    profitTarget: '6%',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['Atas Orderflow Trading', 'Bookmap', 'Finamark', 'Investor/RT', 'Jigsaw Daytradr', 'MotiveWave', 'MultiCharts', 'NinjaTrader', 'Quantower', 'R Trader', 'Trade Navigator', 'TradingView', 'Tradovate', 'VolFix'],
    broker: 'CQG, Rithmic, Tradovate',
    paymentMethods: ['Credit/Debit Card', 'PayPal', 'Wise'],
    payoutMethods: ['Bank Wire Transfer', 'PayPal', 'Plaid', 'Wise'],
    rating: 4.3,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150, 
    maxChallengeCost: 360,
    activationFee: '$130 (One-Time)',
    challengeType: '1-Step Evaluation', 
    accountTiers: tptAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Belize", code: "BZ" }, { name: "Benin", code: "BJ" },
      { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" }, { name: "Burundi", code: "BI" },
      { name: "Cameroon", code: "CM" }, { name: "Cape Verde", code: "CV" }, { name: "Cocos Islands", code: "CC" }, { name: "Comoros", code: "KM" },
      { name: "Cook Islands", code: "CK" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Equatorial Guinea", code: "GQ" },
      { name: "Eritrea", code: "ER" }, { name: "Ethiopia", code: "ET" }, { name: "Falkland Islands", code: "FK" }, { name: "Fiji", code: "FJ" },
      { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" }, { name: "Gibraltar", code: "GI" }, { name: "Guinea", code: "GN" },
      { name: "Guinea-Bissau", code: "GW" }, { name: "Guyana", code: "GY" }, { name: "Haiti", code: "HT" }, { name: "Heard Islands", code: "HM" },
      { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Ivory Coast", code: "CI" }, { name: "Jamaica", code: "JM" },
      { name: "Jordan", code: "JO" }, { name: "Kenya", code: "KE" }, { name: "Kiribati", code: "KI" }, { name: "Kosovo", code: "XK" },
      { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" }, { name: "Liberia", code: "LR" },
      { name: "Libya", code: "LY" }, { name: "Malawi", code: "MW" }, { name: "Mali", code: "ML" }, { name: "Malta", code: "MT" },
      { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" }, { name: "Mayotte", code: "YT" }, { name: "Micronesia", code: "FM" },
      { name: "Monaco", code: "MC" }, { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Montserrat", code: "MS" },
      { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" }, { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" },
      { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" }, { name: "Northern Mariana Islands", code: "MP" }, { name: "North Korea", code: "KP" },
      { name: "North Macedonia", code: "MK" }, { name: "Pakistan", code: "PK" }, { name: "Papua New Guinea", code: "PG" }, { name: "Philippines", code: "PH" },
      { name: "Qatar", code: "QA" }, { name: "Romania", code: "RO" }, { name: "Russia", code: "RU" }, { name: "Rwanda", code: "RW" },
      { name: "Saint Vincent and the Grenadines", code: "VC" }, { name: "Sao Tome and Principe", code: "ST" }, { name: "Serbia", code: "RS" }, { name: "Seychelles", code: "SC" },
      { name: "Sierra Leone", code: "SL" }, { name: "Slovenia", code: "SI" }, { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" },
      { name: "South Georgia Islands", code: "GS" }, { name: "South Korea", code: "KR" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
      { name: "Suriname", code: "SR" }, { name: "Svalbard", code: "SJ" }, { name: "Syria", code: "SY" }, { name: "Tajikistan", code: "TJ" },
      { name: "Tanzania", code: "TZ" }, { name: "Timor-Leste", code: "TL" }, { name: "Togo", code: "TG" }, { name: "Trinidad and Tobago", code: "TT" },
      { name: "Turkey", code: "TR" }, { name: "Turkmenistan", code: "TM" }, { name: "Tuvalu", code: "TV" }, { name: "Uganda", code: "UG" },
      { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: "Western Sahara", code: "EH" },
      { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" }, { name: "Zimbabwe", code: "ZW" }
    ]
  },
  {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaa7I9uipZeRoUofIMr2QMJQ-HJv_hNF5FA&s', 
    websiteUrl: 'https://myfundedfutures.com/', 
    affiliateLink: 'https://myfundedfutures.com/?aff_id=1030', 
    ceo: 'Matthew Leech',
    dateCreated: 'November 2023',
    briefDescription: 'Offers a diverse range of futures funding plans including Starter, Expert, and direct-to-live evaluations with generous profit splits.',
    fullReview: `My Funded Futures provides a comprehensive suite of funding options for futures traders, featuring plans like Starter, Starter Plus, Expert, and Eval to Live. A standout benefit across most plans is the 100% profit split on the first $10,000 earned, which then adjusts to a 90/10 split. The firm emphasizes flexibility, with no minimum or maximum trading day requirements for evaluations, allowing traders to get funded in as little as one day. With 24/7 live support and a clear 4-step process (Choose, Challenge, Verify, Fund), they aim to provide a supportive environment for traders to succeed and eventually gain access to a live trading account with daily payouts.`,
    tradingRules: `<h3>Leverage (Max Contract Size)</h3>
<ul>
    <li><strong>Starter Plus Plan:</strong>
        <ul>
            <li>$50,000 Account: Up to 3 Contracts (30 Micros)</li>
            <li>$100,000 Account: Up to 6 Contracts (60 Micros)</li>
            <li>$150,000 Account: Up to 9 Contracts (90 Micros)</li>
        </ul>
    </li>
    <li><strong>Expert Plan:</strong>
        <ul>
            <li>$50,000 Account: Up to 5 Contracts (50 Micros)</li>
            <li>$100,000 Account: Up to 10 Contracts (100 Micros)</li>
            <li>$150,000 Account: Up to 15 Contracts (150 Micros)</li>
        </ul>
    </li>
    <li><strong>Commissions:</strong> Details available at <a href="https://intercom.help/myfundedfutures/en/articles/8271708-commissions" target="_blank" rel="noopener noreferrer">My Funded Futures Commissions Page</a>.</li>
</ul>
<h3>Key Rules and Policies</h3>
<h4>Consistency Rules:</h4>
<ul>
    <li><strong>Starter Plus:</strong> 50% rule during the evaluation stage only.</li>
    <li><strong>Starter Plan:</strong> No consistency rule in evaluation; 40% rule on Sim-Funded accounts.</li>
    <li><strong>Milestone Plan:</strong> 20% rule applies to all phases.</li>
    <li><strong>Eval to Live Plan (1-Step):</strong> 20% rule during evaluation only.</li>
    <li><strong>Eval to Live Plan (2-Steps):</strong> 40% rule in Phase 1; 50% rule in Phase 2.</li>
</ul>
<h4>Firm-Wide Rules:</h4>
<ul>
    <li><strong>News Trading:</strong> Allowed during the evaluation stage for all accounts. On funded Starter and Expert accounts, traders must not trade for 2 minutes before and after Tier 1 high-impact news. Milestone, Eval to Live, and Starter Plus accounts are exempt from news trading restrictions.</li>
    <li><strong>Automated Trading:</strong> The use of AI, bots, or any fully automated trading systems is strictly prohibited. Semi-automated trading is permitted if the trader is actively managing the system.</li>
    <li><strong>Copy Trading:</strong> Allowed across all My Funded Futures accounts.</li>
    <li><strong>Inactivity:</strong> At least one trade must be placed every 7 days to keep a Sim-Funded account active. Traders must notify support if they plan to be inactive for a longer period.</li>
    <li><strong>Extension Fee:</strong> A fee of $99/month applies to extend an active Eval to Live Phase 1 account.</li>
</ul>
<h3>Payout Policy</h3>
<ul>
    <li><strong>Profit Split:</strong> Traders keep 100% of the first $10,000 in profits. After that, the split is 90/10 (90% to the trader).</li>
    <li><strong>Payout Eligibility:</strong>
        <ul>
            <li><strong>Milestone Accounts:</strong> Eligible upon reaching the profit target while respecting the consistency rule.</li>
            <li><strong>Starter and Starter Plus Accounts:</strong> Eligible after achieving 5 winning trading days.</li>
            <li><strong>Expert Accounts:</strong> Eligible for a payout every 14 days.</li>
            <li><strong>Eval To Live:</strong> 80% profit split with daily payouts available. The minimum withdrawal is $200 on the Live Funded Account.</li>
        </ul>
    </li>
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
        'Consistency rules vary significantly between plans',
        'Maximum of 3 accounts per household',
        'News trading restrictions on some funded accounts',
        'Inactivity rules require weekly trading'
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
      { label: 'Platforms', value: 'TradingView, NinjaTrader, Tradovate & more' },
      { label: 'Account Types', value: 'Starter, Expert, Eval-to-Live'},
    ],
    offerBadgeLabel: '100% up to $10K Profit',
    fundingModels: ['Monthly Subscription', 'One-Time Payment'],
    profitSplit: '100% on first $10,000, then 90% (80% on Eval-to-Live)',
    drawdownRules: 'End-of-Day Trailing or Trailing Drawdown (varies by plan)',
    profitTarget: 'Varies by plan',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['Atas Orderflow Trading', 'NinjaTrader', 'Quantower', 'TradingView', 'Tradovate', 'Volbook', 'Volsys', 'Volumetrica Trading'],
    broker: 'DXFeed, Tradovate',
    paymentMethods: ['Credit/Debit Card', 'Crypto', 'Plaid'],
    payoutMethods: ['ACH', 'Riseworks'],
    rating: 4.9,
    isFeatured: false,
    minAccountSize: 50000, 
    maxAccountSize: 150000,
    minChallengeCost: 97, 
    maxChallengeCost: 444, 
    activationFee: 'None', 
    challengeType: '1-Step or 2-Step Evaluation',
    accountTiers: myFundedFuturesAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" }, { name: "Myanmar", code: "MM" },
      { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" }, { name: "Central African Republic", code: "CF" },
      { name: "China", code: "CN" }, { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Croatia", code: "HR" },
      { name: "Cuba", code: "CU" }, { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" },
      { name: "Ghana", code: "GH" }, { name: "Gibraltar", code: "GI" }, { name: "Haiti", code: "HT" }, { name: "Hong Kong", code: "HK" },
      { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Jamaica", code: "JM" }, { name: "Jordan", code: "JO" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" },
      { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" },
      { name: "North Macedonia", code: "MK" }, { name: "Malaysia", code: "MY" }, { name: "Mali", code: "ML" }, { name: "Mauritius", code: "MU" },
      { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Mozambique", code: "MZ" }, { name: "Namibia", code: "NA" },
      { name: "Nicaragua", code: "NI" }, { name: "Nigeria", code: "NG" }, { name: "Pakistan", code: "PK" }, { name: "Panama", code: "PA" },
      { name: "Papua New Guinea", code: "PG" }, { name: "Philippines", code: "PH" }, { name: "Qatar", code: "QA" }, { name: "Romania", code: "RO" },
      { name: "Russia", code: "RU" }, { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "South Korea", code: "KR" }, { name: "South Sudan", code: "SS" },
      { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" }, { name: "Tanzania", code: "TZ" },
      { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" }, { name: "Uganda", code: "UG" },
      { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
      { name: "Yemen", code: "YE" }, { name: "Zimbabwe", code: "ZW" }
    ],
  },
  {
    id: '4',
    name: 'Tradeify',
    slug: 'tradeify', 
    logoUrl: 'https://tradeify.co/wp-content/uploads/2021/06/horizontal-logo.svg', 
    websiteUrl: 'https://tradeify.co/', 
    affiliateLink: 'https://tradeify.co/YOUR-AFFILIATE-ID',
    isFeatured: true, 
    ceo: 'Brett Simberkoff',
    dateCreated: 'June 2024',
    briefDescription: 'Futures prop firm with multiple plans including Advanced (Intraday DD), Growth (EOD DD), and Straight to Sim Funded accounts.', 
    fullReview: `Tradeify offers several distinct paths for futures traders, catering to different risk tolerances and preferences. Their programs are built on the NinjaTrader brokerage and support NinjaTrader, TradingView, and Tradovate platforms. Payouts are handled via Plane and Riseworks. The main funding routes are the Advanced Plan, Growth Plan, and a Straight to Sim Funded option. The Advanced and Growth plans are 1-step evaluations with a 35% consistency rule, but differ in their drawdown models (Intraday vs. End-of-Day). The Straight to Sim plan allows traders to bypass evaluation for a one-time fee, but comes with a stricter 20% consistency rule and requires achieving specific profit goals before payouts. Across all funded accounts, traders can keep 100% of their first $15,000 in profits, after which the split is 90/10. Tradeify has specific rules regarding EAs/bots (must be self-owned, no HFT), microscalping (50% of profit from trades > 5 seconds), and allows for news trading and copy trading between a trader's own accounts.`,
    tradingRules: `<h3>Instruments and Assets</h3>
<ul>
    <li><strong>Type of Instruments:</strong> Futures</li>
    <li><strong>Leverage (Max Contracts):</strong>
        <ul>
            <li>$25k Accounts: Up to 1 Contract (10 micros)</li>
            <li>$50k Accounts: Up to 5 Contracts (50 Micros)</li>
            <li>$100k Accounts: Up to 10 Contracts (100 Micros)</li>
            <li>$150k Accounts: Up to 15 Contracts (150 Micros)</li>
        </ul>
    </li>
    <li><strong>Commissions:</strong> A list of product commissions can be found at <a href="https://help.tradeify.co/en/articles/10468315-trading-commission-fees" target="_blank" rel="noopener noreferrer">this link</a>.</li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rules</h4>
<ul>
    <li><strong>35% Rule:</strong> Applies to all Advanced/Growth Sim funded accounts. The maximum profit made in a single trading day cannot exceed 35% of the total profit.</li>
    <li><strong>20% Rule:</strong> Applies to all Straight to Sim funded accounts. The maximum profit made in a single trading day cannot exceed 20% of the total profit.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>Good Faith Policy:</strong> Traders are prohibited from using strategies that exploit errors within the platform, such as price discrepancies or technical glitches.</li>
    <li><strong>Daily Loss Limit (DLL):</strong> For Growth and Straight to Sim Funded accounts, the DLL is removed once a certain profit target is met:
        <ul>
            <li>$25k accounts: No DLL.</li>
            <li>$50k accounts: DLL removed when End-of-Day balance is above $3,000 profit.</li>
            <li>$100k accounts: DLL removed when End-of-Day balance is above $6,000 profit.</li>
            <li>$150k accounts: DLL removed when End-of-Day balance is above $9,000 profit.</li>
        </ul>
    </li>
    <li><strong>EA/Bots/Algorithmic Trading:</strong> Allowed only under these conditions:
        <ul>
            <li>You must be the sole owner of the bot/strategy.</li>
            <li>The bot must be used exclusively within Tradeify (not other firms).</li>
            <li>High-Frequency Trading (HFT) bots are not allowed.</li>
            <li>The firm reserves the right to request verification.</li>
        </ul>
    </li>
    <li><strong>Microscalping:</strong> 50% or more of your total profit must come from trades held for longer than 5 seconds.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade per week (Monday-Friday) to keep an account active.</li>
    <li><strong>Copy Trading:</strong> Allowed for up to 5 accounts that you own and manage.</li>
    <li><strong>News Trading/DCA/Flipping/Scaling:</strong> There are no rules against these strategies. However, "averaging into oblivion" (continuously adding to a losing position without a clear strategy) is discouraged.</li>
</ul>
<h3>Payout Policy</h3>
<h4>Advanced and Growth Payouts</h4>
<ul>
    <li><strong>Payout Conditions:</strong>
        <ul>
            <li>Abide by the 35% Consistency Rule.</li>
            <li>A minimum of 10 Trading Days is required.</li>
            <li>At least 5 of those days must show a profit greater than: $150 for 50k accounts, $200 for 100k accounts, $250 for 150k accounts.</li>
            <li>Maintain an account balance of at least $100 over the Trailing Max Drawdown limit.</li>
        </ul>
    </li>
    <li><strong>Minimum Payouts:</strong> $500 for 50k, $1,000 for 100k, $1,500 for 150k accounts.</li>
    <li><strong>Maximum Payout Tiers:</strong>
        <ul>
            <li>1st Payout: up to $1,500 ($50k), $2,000 ($100k), $2,500 ($150k)</li>
            <li>2nd Payout: up to $1,750 ($50k), $2,500 ($100k), $3,000 ($150k)</li>
            <li>3rd Payout: up to $2,000 ($50k), $3,000 ($100k), $3,500 ($150k)</li>
            <li>4th Payout: up to $2,250 ($50k), $3,500 ($100k), $4,000 ($150k)</li>
            <li>5th Payout: up to $2,500 ($50k), $4,000 ($100k), $4,500 ($150k)</li>
            <li>6th Payout: up to $3,000 ($50k), $5,000 ($100k), $5,500 ($150k)</li>
            <li>After 6th Payout: All future payouts can be up to $25,000.</li>
        </ul>
    </li>
</ul>
<h4>Straight to Sim Funded Payouts</h4>
<ul>
    <li><strong>Payout Conditions:</strong>
        <ul>
            <li>Abide by the 20% Consistency Rule.</li>
            <li>A minimum of 10 Trading Days is required.</li>
            <li>Must meet Payout Profit Goals between requests.</li>
        </ul>
    </li>
    <li><strong>Payout Profit Goals (% of starting balance):</strong>
        <ul>
            <li>$25k Account: 1st Payout: 6%; 2nd: 4%; 3rd: 4%.</li>
            <li>$50k Account: 1st Payout: 6%; 2nd: 4%; 3rd+: 4%.</li>
            <li>$100k Account: 1st Payout: 6%; 2nd: 3%; 3rd+: 2.5%.</li>
            <li>$150k Account: 1st Payout: 6%; 2nd: 3%; 3rd+: 2%.</li>
        </ul>
    </li>
    <li><strong>Minimum Payout:</strong> $1,000</li>
    <li><strong>Payout Tiers:</strong>
        <ul>
            <li>Payouts 1 to 3: $1,000 ($25k), $2,000 ($50k), $2,500 ($100k), $3,000 ($150k)</li>
            <li>4th Payout and Beyond: $1,000 ($25k), $2,500 ($50k), $3,000 ($100k), $3,500 ($150k)</li>
        </ul>
    </li>
</ul>
<h4>Max SimFunded Profit Rule</h4>
<p>The maximum amount a trader can earn from a SimFunded account is $80,000. After reaching this amount, you are moved to a live account with a maximum starting balance of $20,000. The total combined amount a trader can generate from Simulated Funded Payouts and the Live Transition is $100,000.</p>`,
    pros: [
      "Multiple plans: Intraday, EOD, and Instant Funding",
      "100% profit split on first $15,000, then 90/10", 
      "Supports NinjaTrader, Tradovate, TradingView",
      "No restrictions on news trading or DCA",
      "Allows EAs/bots and copy trading under specific conditions"
    ],
    cons: [
      "Consistency rules apply to all plans",
      "Activation fee for Advanced Plan funded account",
      "Tiered and capped payout structure",
      "Inactivity rule requires weekly trading"
    ],
    keyFeatures: [
      '100% profit split up to $15K, then 90/10',
      'Advanced (Intraday DD) & Growth (EOD DD) evaluations',
      'Straight to Sim (instant EOD DD funding) option',
      'Tiered payout system with specific requirements',
      'Allows EAs and specific copy trading'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $15k), then 90%' }, 
      { label: 'Platforms', value: 'NinjaTrader, Tradovate, TradingView' },
      { label: 'Funding Types', value: 'Advanced (IDD), Growth (EOD), Instant Sim'}
    ],
    offerBadgeLabel: '35% OFF ALL ACCOUNTS', 
    promo: 'Code: EZ',
    fundingModels: ["Advanced Plan (Intraday DD)", "Growth Plan (EOD DD)", "Straight to Sim Funded"],
    profitSplit: '100% on first $15,000, then 90/10', 
    drawdownRules: 'Advanced: Intraday trailing. Growth & Sim: End-of-day trailing.',
    profitTarget: 'Challenges: 6%. Sim Funded: Payout-based goals.',
    assets: ['Futures'], 
    instrumentTypes: ['Futures'],
    platforms: ['NinjaTrader', 'TradingView', 'Tradovate'], 
    payoutMethods: ['Plane', 'Riseworks'],
    paymentMethods: ['Credit Card'],
    broker: 'Ninjatrader',
    rating: 4.8,
    minAccountSize: 25000, 
    maxAccountSize: 150000, 
    minChallengeCost: 69,
    maxChallengeCost: 729,
    activationFee: '$125 (Advanced Plan), $0 (Growth/Sim)', 
    challengeType: 'Evaluation or Direct Funding',
    accountTiers: tradeifyAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" }, { name: "Burma", code: "MM" }, { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" }, 
      { name: "Central African Republic", code: "CF" }, { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" }, { name: "Ghana", code: "GH" },
      { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Jamaica", code: "JM" }, { name: "Kosovo", code: "XK" }, { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" },
      { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mauritius", code: "MU" }, { name: "Mongolia", code: "MN" },
      { name: "Montenegro", code: "ME" }, { name: "Nicaragua", code: "NI" }, { name: "North Korea", code: "KP" }, { name: "Pakistan", code: "PK" },
      { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" }, { name: "Russia", code: "RU" }, { name: "Somalia", code: "SO" },
      { name: "South Sudan", code: "SS" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" },
      { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" }, { name: "Uganda", code: "UG" },
      { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: "Yemen", code: "YE" },
      { name: "Zimbabwe", code: "ZW" }
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
    briefDescription: 'Futures prop firm with a Qualification to Master account path, choice of drawdown models, and a 100% profit split on the first $10,000.',
    fullReview: `Bulenox provides a structured career path for futures traders, starting with a Qualification Account and progressing to a Master Account. A key differentiator is the choice between two evaluation models: a "No Scaling" account with a trailing drawdown and no daily loss limit, or an "EOD" account with an end-of-day drawdown, a daily loss limit, and a contract scaling plan. After a minimum of 5 trading days, successful traders pay a one-time activation fee to receive a Master Account. This funded account features a 100% profit split on the first $10,000, after which the split becomes 90/10. Traders who demonstrate consistent success on a Master Account may be invited to trade a real capital funded account.`,
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
    fundingModels: ['Evaluation (Monthly Subscription)'],
    profitSplit: '100% of first $10k, then 90/10',
    drawdownRules: 'Trailing or EOD (stops at initial balance)',
    profitTarget: 'Varies by account size (e.g., $1,500 on $25k)',
    assets: ['Futures (CME, COMEX, NYMEX, CBOT)'],
    instrumentTypes: ['Futures'],
    platforms: ['NinjaTrader', 'Tradovate', 'TradingView', 'Rithmic Trader Pro', 'MultiCharts', 'Bookmap', 'Jigsaw Daytrader', 'Sierra Chart', 'MotiveWave', 'VolSys', 'Quantower', 'ATAS Order Flow Trading', 'RTrader Pro', 'Investor RT'],
    broker: 'Rithmic, CQG',
    paymentMethods: ['Credit/Debit Card', 'Crypto'],
    payoutMethods: ['Bank Wire', 'Crypto', 'Zelle'],
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
    briefDescription: 'Offers "Straight to Funded" (S2F) accounts with a 100% profit split, alongside Trail and Static evaluations, on their proprietary platform.',
    fullReview: `Daytraders offers a unique proposition with its "Straight to Funded" (S2F) accounts, allowing traders to bypass evaluations and start trading with firm capital after a one-time fee. A major draw is the 100% profit split, meaning traders keep all their earnings. For those who prefer a trial period, Daytraders also provides "Trail" (trailing drawdown) and "Static" (fixed drawdown) evaluation accounts. All trading activities are conducted exclusively on their proprietary ProjectX platform.`,
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
      <td>No single trading day can exceed 30% of your total profit.</td>
      <td>No single trading day can exceed 20% of your total profit.</td>
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
      <td>Must pass another evaluation to get a new one.</td>
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
    isFeatured: false,
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
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['ProjectX'],
    broker: 'Proprietary',
    paymentMethods: ['Credit/Debit Card', 'Crypto'],
    payoutMethods: ['Bank Wire', 'Crypto', 'ACH'],
    rating: 4.7,
    minAccountSize: 25000,
    maxAccountSize: 300000, 
    minChallengeCost: 150, 
    maxChallengeCost: 825, 
    activationFee: 'None (S2F) / $130 (Trail/Static)',
    challengeType: 'Evaluation or Direct Funding',
    accountTiers: [
        // S2F Accounts
        { id: 'dt-s2f-25k', name: '25K S2F Account', size: 25000, evaluationFee: 370, activationFee: 0, drawdownRules: '$1,000 (End of Day)', profitTargetPercentage: null },
        { id: 'dt-s2f-50k', name: '50K S2F Account', size: 50000, evaluationFee: 570, activationFee: 0, drawdownRules: '$2,500 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null },
        { id: 'dt-s2f-150k', name: '150K S2F Account', size: 150000, evaluationFee: 825, activationFee: 0, drawdownRules: '$6,000 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null },
        // Trail Accounts
        { id: 'dt-trail-25k', name: '25K TRAIL Account', size: 25000, evaluationFee: 249, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,500 Trailing Threshold' },
        { id: 'dt-trail-50k', name: '50K TRAIL Account', size: 50000, evaluationFee: 379, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$2,500 Trailing Threshold' },
        { id: 'dt-trail-75k', name: '75K TRAIL Account', size: 75000, evaluationFee: 449, activationFee: 130, profitTargetPercentage: 5.67, drawdownRules: '$2,750 Trailing Threshold' },
        // Static Accounts
        { id: 'dt-static-25k', name: '25K STATIC Account', size: 25000, evaluationFee: 150, activationFee: 130, profitTargetPercentage: 10, drawdownRules: '$750 Total Drawdown' },
        { id: 'dt-static-50k', name: '50K STATIC Account', size: 50000, evaluationFee: 200, activationFee: 130, profitTargetPercentage: 7.5, drawdownRules: '$1,000 Total Drawdown' },
        { id: 'dt-static-75k', name: '75K STATIC Account', size: 75000, evaluationFee: 250, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,250 Total Drawdown' },
    ],
  },
  {
    id: '7',
    slug: 'fundingticks',
    name: 'FundingTicks',
    logoUrl: 'https://placehold.co/100x50.png?text=FT', // Placeholder logo
    websiteUrl: '#', // Placeholder
    affiliateLink: '#', // Placeholder
    isFeatured: false,
    ceo: 'Khaled Ayesh',
    dateCreated: 'March 2025',
    briefDescription: 'Futures firm from the UAE offering 1-step evaluations and direct funding with a 90% profit split.',
    fullReview: `FundingTicks, based in the United Arab Emirates, presents two primary funding paths for futures traders: a "Pro+" 1-step evaluation and a "Zero" direct-to-funded plan. Both routes offer a generous 90% profit split and utilize an End-of-Day trailing drawdown, a feature favored by many traders for its flexibility. The firm operates on the Tradovate brokerage, providing access to popular platforms like NinjaTrader and TradingView. For those preferring an evaluation, the Pro+ plan requires trading for a minimum of 5 qualifying days to pass. While news trading is allowed during evaluation, it becomes restricted in the funded Master account. Payouts from a Master account can be requested every 5 trading days. The Zero plan allows traders to bypass evaluation for a one-time fee, moving directly to a simulated funded account. This path has a stricter consistency rule (25%) and a payout structure based on hitting specific "Reward Targets." Payouts can be requested every 7 days. A notable rule for Zero accounts is that only EAs that function as risk managers are permitted, and inactivity for 7 days leads to account suspension.`,
    tradingRules: `<h3>Leverage & Commissions</h3>
<ul>
  <li><strong>FundingTicks Zero Model (Max Contracts):</strong>
    <ul>
      <li>$25,000 Account: 1 mini or 10 micros</li>
      <li>$50,000 Account: 3 minis or 30 micros</li>
      <li>$100,000 Account: 5 minis or 50 micros</li>
    </ul>
  </li>
  <li><strong>FundingTicks Pro+ Model (Max Contracts):</strong>
    <ul>
      <li>$25,000 Account: 2 minis or 20 micros</li>
      <li>$50,000 Account: 4 minis or 40 micros</li>
      <li>$100,000 Account: 8 minis or 80 micros</li>
    </ul>
  </li>
  <li><strong>Commissions:</strong> Details available at <a href="https://help.fundingticks.com/hc/en-us/articles/33733389327377-Tradovate-Tradable-Instruments-and-Commissions" target="_blank" rel="noopener noreferrer">FundingTicks Commissions Page</a>.</li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rules</h4>
<ul>
    <li><strong>FundingTicks Pro+ Model:</strong> A 40% consistency rule applies during the evaluation period only. This means no single day can account for more than 40% of your total profit.</li>
    <li><strong>FundingTicks Zero Model:</strong> A 25% consistency rule applies for rewards. This means no single day can account for more than 25% of your total profits.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>News Trading:</strong>
        <ul>
            <li>Evaluation Accounts: Allowed.</li>
            <li>Master Accounts: Restricted for 5 minutes before and 5 minutes after high-impact news events or speeches.</li>
        </ul>
    </li>
    <li><strong>Copy Trading:</strong> Allowed without restrictions.</li>
    <li><strong>Expert Advisors (EAs):</strong> Only EAs that function as risk managers are permitted. The use of any other type of third-party EA is strictly prohibited.</li>
    <li><strong>Inactivity Rule:</strong> Any trading account that is inactive for 7 consecutive days will be automatically suspended.</li>
</ul>
<h3>Payout Policy</h3>
<h4>FundingTicks Pro+</h4>
<ul>
    <li><strong>Profit Split:</strong> 90/10 (90% to the trader).</li>
    <li><strong>Payout Cycle:</strong> Traders can request 60% of their profit (up to $5,000 per account) every 5 trading days. The remaining 40% is transferred to the live account upon qualification.</li>
    <li><strong>Minimum Daily Profit for a "Trading Day" to Count:</strong>
        <ul>
            <li>$25k Account: $100</li>
            <li>$50k Account: $150</li>
            <li>$100k Account: $200</li>
        </ul>
    </li>
    <li><strong>Minimum Reward Withdrawal:</strong>
        <ul>
            <li>$25k Account: $250</li>
            <li>$50k Account: $500</li>
            <li>$100k Account: $1,000</li>
        </ul>
    </li>
</ul>
<h4>FundingTicks Zero</h4>
<ul>
    <li><strong>Payout Cycle:</strong> Rewards can be requested every 7 days at a 90/10 profit split.</li>
    <li><strong>Reward Caps per Cycle:</strong>
        <ul>
            <li>$25K Account: First Reward: $1,000; Second Reward: $1,000; Third Reward: $1,000; Fourth Reward: $1,000.</li>
            <li>$50K Account: First Reward: $2,000; Second Reward: $2,000; Third Reward: $2,000; Fourth Reward: $2,500.</li>
            <li>$100K Account: First Reward: $2,500; Second Reward: $2,500; Third Reward: $2,500; Fourth Reward: $3,000.</li>
        </ul>
    </li>
    <li><strong>Reward Target per Cycle:</strong>
        <ul>
            <li>$25K Account: First Reward Target: $1,500; Second Reward Target: $1,250; Third+ Reward Target: $1,000.</li>
            <li>$50K Account: First Reward Target: $3,000; Second Reward Target: $2,500; Third+ Reward Target: $2,000.</li>
            <li>$100K Account: First Reward Target: $6,000; Second Reward Target: $4,000; Third+ Reward Target: $2,000.</li>
        </ul>
    </li>
    <li><strong>Minimum Reward Withdrawal:</strong>
        <ul>
            <li>$25k Account: $250</li>
            <li>$50k Account: $500</li>
            <li>$100k Account: $1,000</li>
        </ul>
    </li>
</ul>`,
    pros: [
      "90% profit split",
      "Offers both 1-step evaluation and direct funding",
      "No daily loss limit on accounts",
      "Uses flexible End-of-Day trailing drawdown",
      "Frequent payout cycles (every 5 or 7 days)"
    ],
    cons: [
      "Strict consistency rules for payouts/rewards",
      "News trading restrictions on funded accounts",
      "Inactivity rule can lead to quick suspension",
      "Only risk-manager EAs are allowed on Zero accounts"
    ],
    keyFeatures: [
      '90% Profit Split',
      '1-Step (Pro+) and Direct (Zero) funding models',
      'End-of-Day Trailing Drawdown',
      'No Daily Loss Limit',
      'Payouts every 5-7 days'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '90%' },
      { label: 'Funding Models', value: '1-Step Evaluation, Direct Funded' },
      { label: 'Drawdown', value: 'EOD Trailing' },
      { label: 'Platforms', value: 'Tradovate, NinjaTrader, TradingView' }
    ],
    offerBadgeLabel: '35% OFF all accounts',
    fundingModels: ["1-Step Evaluation (Pro+)", "Direct Funded (Zero)"],
    profitSplit: '90%',
    drawdownRules: 'End-of-Day trailing drawdown',
    profitTarget: '5 qualifying days (Pro+), Reward Targets (Zero)',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['NinjaTrader', 'TradingView', 'Tradovate'],
    broker: 'Tradovate',
    paymentMethods: ['Apple Pay', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'Neteller', 'Paysafe Card', 'Skrill', 'Wire Transfer'],
    payoutMethods: ['Bank Wire Transfer', 'Crypto', 'Riseworks'],
    rating: 4.0,
    minAccountSize: 25000,
    maxAccountSize: 100000,
    minChallengeCost: 99,
    maxChallengeCost: 599,
    activationFee: 'Not specified',
    challengeType: '1-Step or Direct',
    accountTiers: fundingticksAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" }, { name: "Bulgaria", code: "BG" }, { name: "Burma", code: "MM" }, { name: "Burundi", code: "BI" },
      { name: "Cambodia", code: "KH" }, { name: "Central African Republic", code: "CF" }, { name: "China", code: "CN" }, { name: "Colombia", code: "CO" },
      { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" }, { name: "Ghana", code: "GH" },
      { name: "Hong Kong", code: "HK" }, { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Jamaica", code: "JM" }, { name: "Kosovo", code: "XK" }, { name: "Laos", code: "LA" },
      { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mauritius", code: "MU" },
      { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Myanmar", code: "MM" }, { name: "Nicaragua", code: "NI" },
      { name: "North Korea", code: "KP" }, { name: "Pakistan", code: "PK" }, { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" },
      { name: "Romania", code: "RO" }, { name: "Russia", code: "RU" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" },
      { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "Venezuela", code: "VE" },
      { name: "Vietnam", code: "VN" }, { name: "Yemen", code: "YE" }, { name: "Zimbabwe", code: "ZW" }
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

    

    



  









  




    



  

    


  
