
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Star, ChevronsUpDown, ExternalLink, Info, ChevronDown, Zap } from 'lucide-react';

// --- MOCK DATA (for initial population if Firestore is empty) ---
const MOCK_FUTURES_CHALLENGES_DATA = [
  {
    id: 'mff-starter-100k',
    firmId: 'my-funded-futures',
    firmName: 'My Funded Futures',
    logoUrl: 'https://placehold.co/100x100/101521/FFFFFF?text=MFF',
    trustpilotRating: 4.4,
    trustpilotReviewCount: 693,
    accountSize: 100000,
    maxAllocation: 400000,
    steps: 1,
    isInstant: false,
    price: 267,
    paymentType: 'Monthly',
    promoDiscountPercent: 50,
    activationFee: null,
    profitTarget: [6], // Percentage
    dailyLoss: null, // Percentage
    maxLoss: 3, // Percentage
    profitSplit: 90,
    payoutFrequency: '5 winning days of $200 min',
    affiliateLink: '#',
    challengeType: 'futures',
  },
  {
    id: 'apex-static-100k',
    firmName: 'Apex Trader Funding',
    logoUrl: 'https://placehold.co/100x100/292929/FFFFFF?text=ATF',
    trustpilotRating: 3.6,
    trustpilotReviewCount: 37,
    accountSize: 100000,
    maxAllocation: 300000,
    steps: 1,
    isInstant: false,
    price: 137,
    paymentType: 'Monthly',
    promoDiscountPercent: 80,
    activationFee: 220,
    profitTarget: [2], // Percentage
    dailyLoss: null, // Percentage
    maxLoss: 0.625, // Percentage
    profitSplit: 100,
    payoutFrequency: '8 active days, 5 days >$50 profit',
    affiliateLink: '#',
    challengeType: 'futures',
  },
  {
    id: 'topstep-100k',
    firmName: 'Topstep',
    logoUrl: 'https://placehold.co/100x100/000000/FFFFFF?text=TS',
    trustpilotRating: 4.4,
    trustpilotReviewCount: 47,
    accountSize: 100000,
    maxAllocation: 150000,
    steps: 1,
    isInstant: false,
    price: 149,
    paymentType: 'Monthly',
    promoDiscountPercent: 0,
    activationFee: 149,
    profitTarget: [6], // Percentage
    dailyLoss: 2, // Percentage
    maxLoss: 3, // Percentage
    profitSplit: 90,
    payoutFrequency: '5 winning days >$200 profit',
    affiliateLink: '#',
    challengeType: 'futures',
  },
  {
    id: 'elite-trader-100k-instant',
    firmName: 'Elite Trader',
    logoUrl: 'https://placehold.co/100x100/457b9d/FFFFFF?text=ET',
    trustpilotRating: 4.5,
    trustpilotReviewCount: 300,
    accountSize: 100000,
    maxAllocation: 100000,
    steps: 1,
    isInstant: true,
    price: 750,
    paymentType: 'One Time',
    promoDiscountPercent: 0,
    activationFee: 0,
    profitTarget: [5], // Percentage
    dailyLoss: 2, // Percentage
    maxLoss: 4, // Percentage
    profitSplit: 80,
    payoutFrequency: 'On-Demand',
    affiliateLink: '#',
    challengeType: 'futures',
  }
];

const MOCK_CFD_CHALLENGES_DATA = [
 {
    id: 'ftmo-challenge-100k',
    firmName: 'FTMO',
    logoUrl: 'https://placehold.co/100x100/2a2a2a/FFFFFF?text=FT',
    trustpilotRating: 4.8,
    trustpilotReviewCount: 1500,
    accountSize: 100000,
    maxAllocation: 400000,
    steps: 2,
    isInstant: false,
    price: 540,
    paymentType: 'One Time',
    promoDiscountPercent: 0,
    activationFee: null,
    profitTarget: [10, 5], // Step 1: 10%, Step 2: 5%
    dailyLoss: 5, // Percentage
    maxLoss: 10, // Percentage
    profitSplit: 90,
    payoutFrequency: 'On-Demand after 14 days',
    affiliateLink: '#',
    challengeType: 'cfd',
  },
  {
    id: 'the-funded-trader-100k',
    firmName: 'The Funded Trader',
    logoUrl: 'https://placehold.co/100x100/1e293b/FFFFFF?text=TFT',
    trustpilotRating: 4.6,
    trustpilotReviewCount: 1200,
    accountSize: 100000,
    maxAllocation: 600000,
    steps: 2,
    isInstant: false,
    price: 549,
    paymentType: 'One Time',
    promoDiscountPercent: 10,
    activationFee: null,
    profitTarget: [8, 5], // Step 1: 8%, Step 2: 5%
    dailyLoss: 6, // Percentage
    maxLoss: 12, // Percentage
    profitSplit: 80,
    payoutFrequency: 'Bi-Weekly',
    affiliateLink: '#',
    challengeType: 'cfd',
  },
  {
    id: 'true-forex-funds-100k-instant',
    firmName: 'True Forex Funds',
    logoUrl: 'https://placehold.co/100x100/0077b6/FFFFFF?text=TFF',
    trustpilotRating: 4.7,
    trustpilotReviewCount: 1800,
    accountSize: 100000,
    maxAllocation: 400000,
    steps: 1,
    isInstant: true,
    price: 998,
    paymentType: 'One Time',
    promoDiscountPercent: 5,
    activationFee: null,
    profitTarget: [0], // Percentage
    dailyLoss: 5, // Percentage
    maxLoss: 10, // Percentage
    profitSplit: 80,
    payoutFrequency: 'On-Demand',
    affiliateLink: '#',
    challengeType: 'cfd',
  }
];

const ALL_MOCK_DATA = [...MOCK_FUTURES_CHALLENGES_DATA, ...MOCK_CFD_CHALLENGES_DATA];


// --- Firebase Configuration ---
// NOTE: These environment variables are placeholders and will be replaced by your actual Firebase config.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


let app;
let db;

// This function ensures Firebase is initialized only once.
function getFirebase() {
    if (app && db) {
        return { app, db };
    }
    try {
        if (!firebaseConfig.projectId) {
            console.warn("Firebase config is missing. Using mock data.");
            return { app: null, db: null };
        }
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        return { app, db };
    } catch (error) {
        console.error("Firebase initialization error:", error);
        // Fallback or error handling
        return { app: null, db: null };
    }
}


// --- Helper Functions ---
const formatCurrency = (value) => value == null ? 'N/A' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatShortCurrency = (value) => value == null ? 'N/A' : `$${value/1000}K`;
const formatPercentage = (value) => value == null ? 'N/A' : `${value}%`;

// --- Child Components ---
const ControlBar = ({ filters, setFilters, searchTerm, setSearchTerm, filteredCount, totalCount }) => {
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };
    
    const handleDiscountToggle = () => {
        setFilters(prev => ({...prev, applyDiscount: !prev.applyDiscount}));
    };

    const toggleSizeFilter = (size) => {
        const currentSizes = filters.accountSize;
        const newSizes = currentSizes.includes(size)
            ? currentSizes.filter(s => s !== size)
            : [...currentSizes, size];
        handleFilterChange('accountSize', newSizes);
    };

    const toggleStepFilter = (step) => {
        const currentSteps = filters.steps;
        const newSteps = currentSteps.includes(step)
            ? currentSteps.filter(s => s !== step)
            : [...currentSteps, step];
        handleFilterChange('steps', newSteps);
    };

    const handleChallengeTypeChange = (type) => {
        if (type === 'futures') {
            setFilters(prev => ({
                ...prev,
                challengeType: 'futures',
                accountSize: [100000],
                steps: [1],
            }));
        } else { // cfd
            setFilters(prev => ({
                ...prev,
                challengeType: 'cfd',
                accountSize: [100000],
                steps: [2],
            }));
        }
    };

    const sizes = [25000, 50000, 100000, 150000, 200000];
    const stepsOptions = [1, 2, 3, 4, 'Instant'];

    return (
        <div className="space-y-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center p-1 bg-white/5 rounded-full">
                        <button onClick={() => handleChallengeTypeChange('futures')} className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filters.challengeType === 'futures' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                            Futures
                        </button>
                        <button onClick={() => handleChallengeTypeChange('cfd')} className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filters.challengeType === 'cfd' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                            CFD
                        </button>
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2">Sizes:</span>
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => toggleSizeFilter(size)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${filters.accountSize.includes(size) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                            >
                                {formatShortCurrency(size)}
                            </button>
                        ))}
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2">Steps:</span>
                        {stepsOptions.map(step => (
                            <button
                                key={step}
                                onClick={() => toggleStepFilter(step)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${filters.steps.includes(step) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                            >
                                {typeof step === 'number' ? `${step} Step${step > 1 ? 's' : ''}` : step}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2">
                        <button type="button" role="switch" aria-checked={filters.applyDiscount} onClick={handleDiscountToggle} className={`peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors h-6 w-11 ${filters.applyDiscount ? 'bg-blue-600' : 'bg-gray-600'}`}>
                            <span className={`pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform h-5 w-5 ${filters.applyDiscount ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                        <label className="text-sm font-semibold text-gray-300">Apply Discount</label>
                    </div>
                </div>
                <div className="relative flex-grow w-full md:flex-grow-0 md:w-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input type="text" placeholder="Search firms..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-64 bg-black/20 border border-white/10 rounded-full h-11 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white/90">
                {filters.challengeType === 'futures' ? 'Futures' : 'CFD'} Prop Firm Challenges <span className="ml-2 text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded-md text-base">Showing {filteredCount} of {totalCount}</span>
            </h2>
        </div>
    );
};

const ChallengeTable = ({ challenges, requestSort, sortConfig, applyDiscount }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef(null);

    const getSortIndicator = (key) => {
        if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-gray-500" />;
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            setIsScrolled(container.scrollLeft > 10);
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => container.removeEventListener('scroll', handleScroll);
    }, [challenges]);
    
    const columns = [
        { key: 'firm', label: 'Firm / Rank', sticky: 'left' },
        { key: 'accountsize', label: 'Account Size' },
        { key: 'steps', label: 'Steps' },
        { key: 'activationfee', label: 'Activation Fee' },
        { key: 'profitsplit', label: 'Profit Split' },
        { key: 'maxallocation', label: 'Max Allocation' },
        { key: 'profittarget', label: 'Profit Target' },
        { key: 'dailyloss', label: 'Daily Loss' },
        { key: 'maxloss', label: 'Max Loss' },
        { key: 'payoutfrequency', label: 'Payout Freq.' },
        { key: 'price', label: 'Prices', sticky: 'right' },
    ];

    return (
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-black/20 relative">
            <div ref={scrollContainerRef} className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="border-b border-white/10">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} scope="col" className={`px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-black/20 backdrop-blur-sm' : 'right-0 bg-black/20 backdrop-blur-sm'}` : 'bg-gray-800/95'}`}>
                                    <button onClick={() => requestSort(col.key)} className="flex items-center gap-2 hover:text-white transition-colors">
                                        {col.label}
                                        <span>{getSortIndicator(col.key)}</span>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {challenges.map(challenge => <ChallengeRow key={challenge.id} challenge={challenge} applyDiscount={applyDiscount} isScrolled={isScrolled} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ChallengeRow = ({ challenge, applyDiscount, isScrolled }) => {
    const finalPrice = applyDiscount && challenge.promoDiscountPercent > 0 ? challenge.price * (1 - challenge.promoDiscountPercent / 100) : challenge.price;

    return (
        <tr className="group hover:bg-white/5 transition-colors duration-200">
            <td className="px-4 py-3 whitespace-nowrap sticky left-0 z-0 bg-black/20 backdrop-blur-sm group-hover:bg-gray-800/80">
                <div className="flex items-center">
                    <img className="h-11 w-11 rounded-lg object-cover border-2 border-white/10 flex-shrink-0" src={challenge.logoUrl} alt={`${challenge.firmName} logo`} />
                    <div className={`ml-4 flex-shrink-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
                        <div className="text-sm font-medium text-white truncate">{challenge.firmName}</div>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                            {challenge.trustpilotRating} ({challenge.trustpilotReviewCount})
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-white font-medium">{formatCurrency(challenge.accountSize)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{challenge.isInstant ? 'Instant' : `${challenge.steps} Step`}</td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{formatCurrency(challenge.activationFee)}</td>
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-white">{challenge.profitSplit}%</span>
                    <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: `${challenge.profitSplit}%`}}></div></div>
                </div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{formatCurrency(challenge.maxAllocation)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{challenge.profitTarget.join('% / ')}%</td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{formatPercentage(challenge.dailyLoss)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-white">{formatPercentage(challenge.maxLoss)}</td>
            <td className="px-4 py-3 text-xs text-gray-300 max-w-[200px] truncate" title={challenge.payoutFrequency}>{challenge.payoutFrequency}</td>
            <td className="px-4 py-3 whitespace-nowrap sticky right-0 z-0 bg-black/20 backdrop-blur-sm group-hover:bg-gray-800/80">
                <div className="flex items-center gap-3">
                    <div className="text-right">
                         {applyDiscount && challenge.promoDiscountPercent > 0 ? (
                            <>
                                <p className="font-semibold text-green-400">{formatCurrency(finalPrice)}</p>
                                <p className="text-xs text-gray-500 line-through">{formatCurrency(challenge.price)}</p>
                            </>
                        ) : (
                            <p className="font-semibold text-white">{formatCurrency(finalPrice)}</p>
                        )}
                        <p className="text-xs text-gray-500">{challenge.paymentType}</p>
                    </div>
                    <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        Buy
                    </a>
                </div>
            </td>
        </tr>
    );
};

// --- Main App Component ---
export default function ComparePage() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ accountSize: [100000], steps: [1], applyDiscount: true, challengeType: 'futures' });
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'ascending' });

  useEffect(() => {
    const { db } = getFirebase();
    if (!db) {
        console.log("Using mock data as Firebase is not available.");
        setChallenges(ALL_MOCK_DATA);
        setLoading(false);
        return;
    }
    const challengesCollectionRef = collection(db, 'challenges');
    const populateDataIfNeeded = async () => {
        const snapshot = await getDocs(challengesCollectionRef);
        if (snapshot.empty) {
            console.log("Firestore 'challenges' collection is empty. Populating with mock data.");
            const batch = writeBatch(db);
            ALL_MOCK_DATA.forEach((challenge) => {
                const docRef = doc(db, "challenges", challenge.id);
                batch.set(docRef, challenge);
            });
            await batch.commit();
            console.log("Finished populating data.");
        }
    };
    
    populateDataIfNeeded();

    const unsubscribe = onSnapshot(challengesCollectionRef, (snapshot) => {
      const challengesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChallenges(challengesData);
      setLoading(false);
    }, (error) => {
        console.error("Error fetching data from Firestore:", error);
        console.log("Falling back to mock data.");
        setChallenges(ALL_MOCK_DATA);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredAndSortedChallenges = useMemo(() => {
    let filtered = challenges.filter(c => c.challengeType === filters.challengeType);

    if (searchTerm) {
      filtered = filtered.filter(c => c.firmName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (filters.accountSize.length > 0) {
        filtered = filtered.filter(c => filters.accountSize.includes(c.accountSize));
    }

    if (filters.steps.length > 0) {
        filtered = filtered.filter(c => {
            const stepMatch = filters.steps.includes(c.steps);
            const instantMatch = filters.steps.includes('Instant') && c.isInstant;
            return stepMatch || instantMatch;
        });
    }
    
    filtered.sort((a, b) => {
        let aValue, bValue;
        const key = sortConfig.key;

        if (key === 'firm') { aValue = a.firmName; bValue = b.firmName; }
        else if (key === 'price') { aValue = a.price * (1 - (filters.applyDiscount ? a.promoDiscountPercent / 100 : 0)); bValue = b.price * (1 - (filters.applyDiscount ? b.promoDiscountPercent / 100 : 0)); }
        else if (key === 'profittarget') { aValue = a.profitTarget[0]; bValue = b.profitTarget[0]; }
        else { aValue = a[key] ?? -Infinity; bValue = b[key] ?? -Infinity; }
        
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
    });
    return filtered;
  }, [challenges, searchTerm, filters, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex items-center justify-center text-white font-sans">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading Challenge Data...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-4 sm:p-6 lg:p-8 font-sans text-white">
      <div className="max-w-full mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Tradingis<span className="text-blue-400">EZ</span></h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">The EZ-iest Way to Compare Prop Firm Challenges.</p>
        </header>
        <main>
          <ControlBar 
            filters={filters}
            setFilters={setFilters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredCount={filteredAndSortedChallenges.length}
            totalCount={challenges.filter(c => c.challengeType === filters.challengeType).length}
          />
          <ChallengeTable 
            challenges={filteredAndSortedChallenges} 
            requestSort={requestSort}
            sortConfig={sortConfig}
            applyDiscount={filters.applyDiscount}
          />
        </main>
      </div>
    </div>
  );
}
