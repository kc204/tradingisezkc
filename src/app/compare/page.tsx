
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, setDoc, getDocs, writeBatch } from 'firebase/firestore';
import { Search, Star, ChevronsUpDown, ExternalLink, Info, ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockPropFirms } from '@/lib/mockData';
import { AccountTier, PropFirm } from '@/lib/types';

// --- Helper function to flatten firms into challenges ---
const flattenFirmsToChallenges = (firms: PropFirm[]) => {
  const challenges: any[] = [];
  firms.forEach(firm => {
    if (firm.accountTiers && firm.accountTiers.length > 0) {
      firm.accountTiers.forEach(tier => {
        challenges.push({
          id: `${firm.id}-${tier.id}`,
          firmId: firm.id,
          firmName: firm.name,
          logoUrl: firm.logoUrl,
          trustpilotRating: firm.rating || 0,
          trustpilotReviewCount: Math.floor((firm.rating || 3.5) * 150),
          accountSize: tier.size,
          maxAllocation: firm.maxAccountSize || 0,
          steps: firm.challengeType?.includes('1-Step') ? 1 : firm.challengeType?.includes('2-Step') ? 2 : 1,
          isInstant: firm.challengeType?.toLowerCase().includes('instant') || false,
          price: tier.evaluationFee,
          paymentType: 'One Time', // Defaulting, can be customized
          promoDiscountPercent: tier.discountPercentage ? tier.discountPercentage * 100 : 0,
          activationFee: tier.activationFee,
          profitTarget: [tier.profitTargetPercentage],
          dailyLoss: tier.dailyLossLimitPercentage,
          maxLoss: tier.drawdownPercentage,
          profitSplit: parseInt(firm.profitSplit || '80', 10),
          payoutFrequency: 'Varies',
          affiliateLink: firm.affiliateLink,
          challengeType: firm.instrumentTypes?.includes('Futures') ? 'futures' : 'cfd',
        });
      });
    }
  });
  return challenges;
};

const ALL_MOCK_DATA = flattenFirmsToChallenges(mockPropFirms);


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


let app: any;
let db: any;

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
const formatCurrency = (value: any) => value == null ? 'N/A' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatShortCurrency = (value: any) => value == null ? 'N/A' : `$${value/1000}K`;
const formatPercentage = (value: any) => value == null ? 'N/A' : `${value}%`;

// --- Child Components ---
const ControlBar = ({ filters, setFilters, searchTerm, setSearchTerm, filteredCount, totalCount }: any) => {
    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev: any) => ({ ...prev, [key]: value }));
    };
    
    const handleDiscountToggle = () => {
        setFilters((prev: any) => ({...prev, applyDiscount: !prev.applyDiscount}));
    };

    const toggleSizeFilter = (size: number) => {
        const currentSizes = filters.accountSize;
        const newSizes = currentSizes.includes(size)
            ? currentSizes.filter((s: number) => s !== size)
            : [...currentSizes, size];
        handleFilterChange('accountSize', newSizes);
    };

    const toggleStepFilter = (step: number | string) => {
        const currentSteps = filters.steps;
        const newSteps = currentSteps.includes(step)
            ? currentSteps.filter((s: any) => s !== step)
            : [...currentSteps, step];
        handleFilterChange('steps', newSteps);
    };

    const handleChallengeTypeChange = (type: string) => {
        if (type === 'futures') {
            setFilters((prev: any) => ({
                ...prev,
                challengeType: 'futures',
                accountSize: [100000],
                steps: [1],
            }));
        } else { // cfd
            setFilters((prev: any) => ({
                ...prev,
                challengeType: 'cfd',
                accountSize: [100000],
                steps: [2],
            }));
        }
    };

    const sizes = [25000, 50000, 100000, 150000, 200000];
    const stepsOptions: (number | string)[] = [1, 2, 3, 4, 'Instant'];

    return (
        <div className="space-y-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center p-1 bg-white/5 rounded-full">
                        <button onClick={() => handleChallengeTypeChange('futures')} className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filters.challengeType === 'futures' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                            Futures
                        </button>
                        <button onClick={() => handleChallengeTypeChange('cfd')} className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${filters.challengeType === 'cfd' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                            CFD
                        </button>
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-muted-foreground mr-2">Sizes:</span>
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => toggleSizeFilter(size)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${filters.accountSize.includes(size) ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' : 'bg-card text-card-foreground hover:bg-muted'}`}
                            >
                                {formatShortCurrency(size)}
                            </button>
                        ))}
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-muted-foreground mr-2">Steps:</span>
                        {stepsOptions.map(step => (
                            <button
                                key={step}
                                onClick={() => toggleStepFilter(step)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${filters.steps.includes(step) ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' : 'bg-card text-card-foreground hover:bg-muted'}`}
                            >
                                {typeof step === 'number' ? `${step} Step${step > 1 ? 's' : ''}` : step}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2">
                        <button type="button" role="switch" aria-checked={filters.applyDiscount} onClick={handleDiscountToggle} className={`peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors h-6 w-11 ${filters.applyDiscount ? 'bg-accent' : 'bg-muted'}`}>
                            <span className={`pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform h-5 w-5 ${filters.applyDiscount ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                        <label className="text-sm font-semibold text-muted-foreground">Apply Discount</label>
                    </div>
                </div>
                <div className="relative flex-grow w-full md:flex-grow-0 md:w-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input type="text" placeholder="Search firms..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-64 bg-card border-border rounded-full h-11 pl-12 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground/90">
                {filters.challengeType === 'futures' ? 'Futures' : 'CFD'} Prop Firm Challenges <span className="ml-2 text-primary font-medium bg-primary/10 px-2 py-1 rounded-md text-base">Showing {filteredCount} of {totalCount}</span>
            </h2>
        </div>
    );
};

const ChallengeTable = ({ challenges, requestSort, sortConfig, applyDiscount }: any) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getSortIndicator = (key: string) => {
        if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />;
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (container) {
                setIsScrolled(container.scrollLeft > 10);
            }
        };

        container.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
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
        <div className="bg-card backdrop-blur-sm rounded-xl border border-border/50 shadow-2xl shadow-black/20 relative">
            <div ref={scrollContainerRef} className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="border-b border-border">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} scope="col" className={`px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-card backdrop-blur-sm' : 'right-0 bg-card'}` : 'bg-card/95'}`}>
                                    <button onClick={() => requestSort(col.key)} className="flex items-center gap-2 hover:text-foreground transition-colors">
                                        {col.label}
                                        <span>{getSortIndicator(col.key)}</span>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {challenges.map((challenge: any) => <ChallengeRow key={challenge.id} challenge={challenge} applyDiscount={applyDiscount} isScrolled={isScrolled} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ChallengeRow = ({ challenge, applyDiscount, isScrolled }: any) => {
    const finalPrice = applyDiscount && challenge.promoDiscountPercent > 0 ? challenge.price * (1 - challenge.promoDiscountPercent / 100) : challenge.price;

    return (
        <tr className="group hover:bg-muted transition-colors duration-200">
            <td className="px-4 py-3 whitespace-nowrap sticky left-0 z-0 bg-card group-hover:bg-muted/80 backdrop-blur-sm">
                <div className="flex items-center">
                    <img className="h-11 w-11 rounded-lg object-contain border-2 border-border flex-shrink-0" src={challenge.logoUrl} alt={`${challenge.firmName} logo`} />
                    <div className={`ml-4 flex-shrink-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
                        <div className="text-sm font-medium text-foreground truncate">{challenge.firmName}</div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                            {challenge.trustpilotRating} ({challenge.trustpilotReviewCount})
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground font-medium">{formatCurrency(challenge.accountSize)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{challenge.isInstant ? 'Instant' : `${challenge.steps} Step`}</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{formatCurrency(challenge.activationFee)}</td>
            <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">{challenge.profitSplit}%</span>
                    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary" style={{width: `${challenge.profitSplit}%`}}></div></div>
                </div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{formatCurrency(challenge.maxAllocation)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{challenge.profitTarget?.join('% / ')}%</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{formatPercentage(challenge.dailyLoss)}</td>
            <td className="px-4 py-3 whitespace-nowrap text-foreground">{formatPercentage(challenge.maxLoss)}</td>
            <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate" title={challenge.payoutFrequency}>{challenge.payoutFrequency}</td>
            <td className="px-4 py-3 whitespace-nowrap sticky right-0 z-0 bg-card group-hover:bg-muted">
                <div className="flex items-center gap-3">
                    <div className="text-right">
                         {applyDiscount && challenge.promoDiscountPercent > 0 ? (
                            <>
                                <p className="font-semibold text-success">{formatCurrency(finalPrice)}</p>
                                <p className="text-xs text-muted-foreground line-through">{formatCurrency(challenge.price)}</p>
                            </>
                        ) : (
                            <p className="font-semibold text-foreground">{formatCurrency(finalPrice)}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{challenge.paymentType}</p>
                    </div>
                    <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-accent-foreground bg-accent hover:bg-accent/90">
                        Buy
                    </a>
                </div>
            </td>
        </tr>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center items-center space-x-2 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-card text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
            >
                Previous
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentPage === number ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'}`}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-card text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
            >
                Next
            </button>
        </nav>
    );
};


// --- Main App Component ---
export default function ComparePage() {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ accountSize: [100000], steps: [1], applyDiscount: true, challengeType: 'futures' });
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

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
        else { aValue = a[(key as keyof typeof a)] ?? -Infinity; bValue = b[(key as keyof typeof b)] ?? -Infinity; }
        
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
    });
    return filtered;
  }, [challenges, searchTerm, filters, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedChallenges.length / rowsPerPage);
  const paginatedChallenges = filteredAndSortedChallenges.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);


  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center text-foreground font-sans p-4">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading Challenge Data...
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-foreground tracking-tight">Compare Prop Firms</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">The EZ-iest Way to Compare Prop Firm Challenges.</p>
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
            challenges={paginatedChallenges} 
            requestSort={requestSort}
            sortConfig={sortConfig}
            applyDiscount={filters.applyDiscount}
          />
           {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>
    </div>
  );
}
