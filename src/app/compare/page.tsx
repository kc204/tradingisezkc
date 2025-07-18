

'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDocs, writeBatch } from 'firebase/firestore';
import { Search, Star, ChevronsUpDown, ExternalLink, Info, ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockPropFirms } from '@/lib/mockData';
import type { PropFirm } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import FirmMiniDetail from '@/components/propfirms/FirmMiniDetail';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';


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
          steps: firm.challengeType?.includes('1-Step') ? 1 : firm.challengeType?.includes('2-Step') ? 2 : (firm.challengeType?.includes('3-Step') ? 3 : 1),
          isInstant: firm.challengeType?.toLowerCase().includes('instant') || false,
          price: tier.evaluationFee,
          paymentType: 'One Time', // Defaulting, can be customized
          promoDiscountPercent: tier.discountPercentage ? tier.discountPercentage * 100 : 0,
          activationFee: tier.activationFee,
          profitTarget: tier.profitTargetPercentage ? [tier.profitTargetPercentage] : [0],
          dailyLoss: tier.dailyLossLimitPercentage,
          maxLoss: tier.drawdownPercentage,
          profitSplit: parseInt(firm.profitSplit || '80', 10),
          payoutFrequency: 'Varies',
          affiliateLink: firm.affiliateLink,
          challengeType: firm.instrumentTypes?.includes('Futures') ? 'futures' : 'cfd',
          rawFirmData: firm, // Pass full firm data
        });
      });
    }
  });
  return challenges;
};

const ALL_MOCK_DATA = flattenFirmsToChallenges(mockPropFirms);


// --- Firebase Configuration ---
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
                        <button type="button" role="switch" aria-checked={filters.applyDiscount} onClick={handleDiscountToggle} className={`peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors h-6 w-11 ${filters.applyDiscount ? 'bg-orange-500' : 'bg-gray-600'}`}>
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

const ChallengeTable = ({ challenges, requestSort, sortConfig, applyDiscount, tableContainerRef, isScrolled }: any) => {
    const columns = [
        { key: 'firm', label: 'Firm / Rank', sticky: 'left', className: 'min-w-[200px] md:min-w-[250px]' },
        { key: 'accountsize', label: 'Size', sticky: '', className: '' },
        { key: 'steps', label: 'Steps', sticky: '', className: '' },
        { key: 'activationfee', label: 'Activation Fee', sticky: '', className: 'hidden sm:table-cell' },
        { key: 'profitsplit', label: 'Split', sticky: '', className: '' },
        { key: 'maxallocation', label: 'Max Allocation', sticky: '', className: 'hidden md:table-cell' },
        { key: 'profittarget', label: 'Target', sticky: '', className: 'hidden sm:table-cell' },
        { key: 'dailyloss', label: 'Daily Loss', sticky: '', className: 'hidden sm:table-cell' },
        { key: 'maxloss', label: 'Max Loss', sticky: '', className: '' },
        { key: 'payoutfrequency', label: 'Payout Freq.', sticky: '', className: 'hidden md:table-cell' },
        { key: 'price', label: 'Price', sticky: 'right', className: 'min-w-[110px]' },
    ];

    const getSortIndicator = (key: string) => {
        if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-gray-500" />;
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };

    return (
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-black/20 relative -mx-4 sm:mx-0">
            <div ref={tableContainerRef} className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="border-b border-white/10">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} scope="col" className={`px-2 md:px-4 py-3 text-left text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-black/20 backdrop-blur-sm' : 'right-0 bg-gray-900'}` : 'bg-gray-800/95'} ${col.className}`}>
                                    <button onClick={() => requestSort(col.key)} className="flex items-center gap-1 md:gap-2 hover:text-white transition-colors">
                                        {col.label}
                                        <span className="hidden md:inline">{getSortIndicator(col.key)}</span>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
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
        <Dialog>
            <DialogTrigger asChild>
                <tr className="group hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap sticky left-0 z-0 bg-black/20 group-hover:bg-gray-800/80 backdrop-blur-sm">
                        <div className="flex items-center">
                            <img className="h-11 w-11 rounded-lg object-contain border-2 border-white/10 flex-shrink-0" src={challenge.logoUrl} alt={`${challenge.firmName} logo`} />
                            <div className={cn(
                                'flex-shrink-0 overflow-hidden transition-all duration-300',
                                isScrolled ? 'w-0 opacity-0 ml-0' : 'w-40 opacity-100 ml-3'
                            )}>
                                <div className="text-sm font-medium text-white truncate">{challenge.firmName}</div>
                                <div className="flex items-center text-xs text-gray-400 mt-1">
                                    <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                                    {challenge.trustpilotRating} ({challenge.trustpilotReviewCount})
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white font-medium">{formatCurrency(challenge.accountSize)}</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white">{challenge.isInstant ? 'Instant' : `${challenge.steps} Step`}</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white hidden sm:table-cell">{formatCurrency(challenge.activationFee)}</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-white">{challenge.profitSplit}%</span>
                            <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: `${challenge.profitSplit}%`}}></div></div>
                        </div>
                    </td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white hidden md:table-cell">{formatCurrency(challenge.maxAllocation)}</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white hidden sm:table-cell">{challenge.profitTarget?.join('% / ')}%</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white hidden sm:table-cell">{formatPercentage(challenge.dailyLoss)}</td>
                    <td className="px-2 md:px-4 py-3 whitespace-nowrap text-white">{formatPercentage(challenge.maxLoss)}</td>
                    <td className="px-2 md:px-4 py-3 text-xs text-gray-300 max-w-[200px] truncate hidden md:table-cell" title={challenge.payoutFrequency}>{challenge.payoutFrequency}</td>
                    <td className="px-2 py-3 whitespace-nowrap sticky right-0 z-0 bg-gray-900 group-hover:bg-gray-800">
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3" onClick={(e) => e.stopPropagation()}>
                            <div className="text-center sm:text-right mb-2 sm:mb-0">
                                 {applyDiscount && challenge.promoDiscountPercent > 0 ? (
                                    <>
                                        <p className="font-semibold text-green-400 text-sm sm:text-base">{formatCurrency(finalPrice)}</p>
                                        <p className="text-xs text-gray-500 line-through">{formatCurrency(challenge.price)}</p>
                                    </>
                                ) : (
                                    <p className="font-semibold text-white text-sm sm:text-base">{formatCurrency(finalPrice)}</p>
                                )}
                                <p className="text-xs text-gray-500 hidden sm:block">{challenge.paymentType}</p>
                            </div>
                            <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600">
                                Buy
                            </a>
                        </div>
                    </td>
                </tr>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] bg-background p-0">
                <DialogHeader className="p-4 border-b">
                    <DialogTitle className="text-2xl">{challenge.firmName} Details</DialogTitle>
                    <DialogDescription>
                        An overview of {challenge.firmName}'s offerings and rules.
                    </DialogDescription>
                </DialogHeader>
                 <FirmMiniDetail firm={challenge.rawFirmData} />
            </DialogContent>
        </Dialog>
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
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10"
            >
                Previous
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10"
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
  
  const [isScrolled, setIsScrolled] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

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
                // We need to remove rawFirmData before saving to Firestore
                const { rawFirmData, ...challengeToSave } = challenge;
                batch.set(docRef, challengeToSave);
            });
            await batch.commit();
            console.log("Finished populating data.");
        }
    };
    
    populateDataIfNeeded();

    const unsubscribe = onSnapshot(challengesCollectionRef, (snapshot) => {
      const challengesData = snapshot.docs.map(doc => {
          const data = doc.data();
          // Find the full firm data from mockPropFirms to add back
          const firm = mockPropFirms.find(f => f.id === data.firmId);
          return { id: doc.id, ...data, rawFirmData: firm };
      });
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
  
  // Scroll handler for collapsing firm name
  useEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    const handleScroll = () => setIsScrolled(container.scrollLeft > 20);

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [loading]); // Rerun when loading is finished and ref is set

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
      <div className="flex items-center justify-center text-white font-sans p-4">
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
    <div className="font-sans text-white -mx-4 sm:mx-0 sm:p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <header className="mb-10 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Compare Prop Firms</h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">The EZ-iest Way to Compare Prop Firm Challenges.</p>
        </header>
        <main className="px-1 md:px-0">
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
            tableContainerRef={tableContainerRef}
            isScrolled={isScrolled}
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

    
