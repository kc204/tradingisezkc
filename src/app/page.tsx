

'use client'; 

import FirmCard from '@/components/propfirms/FirmCard';
import FreeResourceCard from '@/components/shared/FreeResourceCard';
import { mockPropFirms, mockFreeResources, ALL_CHALLENGES_DATA } from '@/lib/mockData';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { PropFirm } from '@/lib/types';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDocs, writeBatch } from 'firebase/firestore';
import { Search, Star, ChevronsUpDown, ExternalLink, Info, ChevronDown, Zap, ChevronLeft, ChevronRight, Briefcase, CreditCard, Banknote, CandlestickChart, ShieldCheck, FileText, Ban } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import OfferBox from '@/components/propfirms/OfferBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import FirmMiniDetail from '@/components/propfirms/FirmMiniDetail';
import { Slider } from '@/components/ui/slider';


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
try {
    if (!firebaseConfig.projectId) {
      throw new Error("Firebase project ID is missing");
    }
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (error) {
    console.warn("Firebase initialization failed or config is missing, will use mock data.", error);
    db = null;
}

const formatCurrency = (value: any) => value == null ? 'N/A' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatShortCurrency = (value: any) => value == null ? 'N/A' : `$${value/1000}K`;

const ControlBar = ({ filters, setFilters, searchTerm, setSearchTerm, filteredCount, totalCount }: any) => {
    const [isCustomSizeActive, setIsCustomSizeActive] = useState(false);
    const [customSize, setCustomSize] = useState([50000, 500000]);

    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev: any) => ({ ...prev, [key]: value }));
    };
    
    const handleDiscountToggle = () => {
        setFilters((prev: any) => ({...prev, applyDiscount: !prev.applyDiscount}));
    };

    const toggleSizeFilter = (size: number) => {
        setIsCustomSizeActive(false);
        const currentSizes = filters.accountSize;
        const newSizes = currentSizes.includes(size)
            ? currentSizes.filter((s: number) => s !== size)
            : [...currentSizes, size];
        handleFilterChange('accountSize', newSizes);
    };
    
    const handleCustomSizeToggle = () => {
        const newActiveState = !isCustomSizeActive;
        setIsCustomSizeActive(newActiveState);
        if(newActiveState) {
            handleFilterChange('accountSize', []); // Clear standard sizes when custom is active
            handleFilterChange('customSizeRange', customSize);
        } else {
            handleFilterChange('customSizeRange', null); // Clear custom size when deactivated
        }
    };
    
    const handleSliderChange = (value: number[]) => {
        setCustomSize(value);
        if(isCustomSizeActive) {
            handleFilterChange('customSizeRange', value);
        }
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
        } else {
            setFilters((prev: any) => ({
                ...prev,
                challengeType: 'cfd',
                accountSize: [100000],
                steps: [2],
            }));
        }
         setIsCustomSizeActive(false);
    };

    const sizes = [25000, 50000, 100000, 150000, 200000];
    const stepsOptions: (number | string)[] = [1, 2, 3, 'Instant'];

    return (
        <div className="space-y-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center p-1 bg-white/5 rounded-full">
                        <button onClick={() => handleChallengeTypeChange('futures')} className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${filters.challengeType === 'futures' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                            Futures
                        </button>
                        <button onClick={() => handleChallengeTypeChange('cfd')} className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${filters.challengeType === 'cfd' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                            CFD
                        </button>
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2">Sizes:</span>
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => toggleSizeFilter(size)}
                                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${!isCustomSizeActive && filters.accountSize.includes(size) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                            >
                                {formatShortCurrency(size)}
                            </button>
                        ))}
                         <button onClick={handleCustomSizeToggle} className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${isCustomSizeActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                            Custom
                        </button>
                    </div>
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2">Steps:</span>
                        {stepsOptions.map(step => (
                            <button
                                key={step}
                                onClick={() => toggleStepFilter(step)}
                                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${filters.steps.includes(step) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
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
            {isCustomSizeActive && (
                <div className="flex items-center gap-4 pt-2">
                    <span className="font-semibold text-gray-400">Size Range:</span>
                    <Slider
                        value={customSize}
                        onValueChange={handleSliderChange}
                        max={1000000}
                        step={1000}
                        className="w-[250px]"
                    />
                    <span className="font-semibold text-white w-[200px] text-center">{formatCurrency(customSize[0])} - {formatCurrency(customSize[1])}</span>
                </div>
            )}
            <h2 className="text-xl font-bold tracking-tight text-white/90">
                {filters.challengeType === 'futures' ? 'Futures' : 'CFD'} Prop Firm Challenges <span className="ml-2 text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded-md text-base">Showing {filteredCount} of {totalCount}</span>
            </h2>
        </div>
    );
};

const ChallengeTable = ({ challenges, requestSort, sortConfig, applyDiscount }: any) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableElement>(null);

    const getSortIndicator = (key: string) => {
        if (!sortConfig || sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-gray-500" />;
        return sortConfig.direction === 'ascending' ? '▲' : '▼';
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        const table = tableRef.current;
        if (!container || !table) return;

        const handleScroll = () => {
            if (container.scrollLeft > 10) {
                table.classList.add('scrolled');
            } else {
                table.classList.remove('scrolled');
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on initial render
        return () => container.removeEventListener('scroll', handleScroll);
    }, [challenges]); // Rerun if challenges data changes
    
    const columns = [
        { key: 'firm', label: 'Firm / Rating', sticky: 'left' },
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
                <table ref={tableRef} className="min-w-full text-sm group">
                    <thead className="border-b border-white/10">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} scope="col" className={`px-2 py-3 sm:px-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-black/20 backdrop-blur-sm' : 'right-0 bg-gray-900'}` : 'bg-gray-800/95'}`}>
                                    <button onClick={() => requestSort(col.key)} className="flex items-center gap-2 hover:text-white transition-colors">
                                        {col.key === 'firm' ? (
                                             <div className="flex items-center gap-1 group-[.scrolled]:md:flex-row group-[.scrolled]:items-start group-[.scrolled]:md:items-center group-[.scrolled]:gap-0 group-[.scrolled]:md:gap-1 group-[.scrolled]:flex-col">
                                                <span>Firm</span>
                                                <span className="group-[.scrolled]:leading-3 group-[.scrolled]:md:leading-normal group-[.scrolled]:text-[10px] group-[.scrolled]:md:text-xs">/</span>
                                                <span className="group-[.scrolled]:leading-3 group-[.scrolled]:md:leading-normal">Rating</span>
                                            </div>
                                        ) : (
                                            col.label
                                        )}
                                        <span>{getSortIndicator(col.key)}</span>
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {challenges.map((challenge: any) => <ChallengeRow key={challenge.id} challenge={challenge} applyDiscount={applyDiscount} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ChallengeRow = ({ challenge, applyDiscount }: any) => {
    const finalPrice = applyDiscount && challenge.promoDiscountPercent > 0 ? challenge.price * (1 - challenge.promoDiscountPercent / 100) : challenge.price;
    const firm = mockPropFirms.find(f => f.slug === challenge.firmId) || null;
    
    if (!firm) {
        return (
            <tr className="group/row hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                <td colSpan={11}>Firm data not found for challenge ID {challenge.id}</td>
            </tr>
        );
    }
    
    return (
        <FirmMiniDetail firm={firm}>
            <tr className="group/row hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap sticky left-0 z-0 bg-black/20 group-hover/row:bg-gray-800/80 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 relative flex-shrink-0">
                            <Image data-ai-hint="logo" className="rounded-lg object-contain border-2 border-white/10" src={challenge.logoUrl} alt={`${challenge.firmName} logo`} layout="fill"/>
                        </div>
                        <div className="flex flex-col justify-center flex-shrink-0 group-[.scrolled]:opacity-0 group-[.scrolled]:w-0 transition-all duration-300">
                            <div className="text-sm font-medium text-white truncate">{challenge.firmName}</div>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                                <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                                {challenge.trustpilotRating} ({challenge.trustpilotReviewCount})
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white font-medium">{formatCurrency(challenge.accountSize)}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{challenge.isInstant ? 'Instant' : `${challenge.steps} Step`}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{formatCurrency(challenge.activationFee)}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-white">{challenge.profitSplit}%</span>
                        <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: `${challenge.profitSplit}%`}}></div></div>
                    </div>
                </td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{formatCurrency(challenge.maxAllocation)}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{formatCurrency(challenge.profitTarget)}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{formatCurrency(challenge.dailyLoss)}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white">{formatCurrency(challenge.maxLoss)}</td>
                <td className="px-2 py-3 sm:px-4 text-xs text-gray-300 max-w-[200px] truncate" title={challenge.payoutFrequency}>{challenge.payoutFrequency}</td>
                <td className="px-2 py-3 sm:px-4 whitespace-nowrap sticky right-0 z-0 bg-gray-900 group-hover/row:bg-gray-800">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                        <div className="text-right">
                           {applyDiscount && challenge.promoDiscountPercent > 0 ? (
                                <>
                                    <p className="font-semibold text-green-400 text-sm sm:text-base">{formatCurrency(finalPrice)}</p>
                                    <p className="text-xs text-gray-500 line-through">{formatCurrency(challenge.price)}</p>
                                </>
                            ) : (
                                <p className="font-semibold text-white text-sm sm:text-base">{formatCurrency(finalPrice)}</p>
                            )}
                        </div>
                        <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-full sm:w-auto inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600">
                            Buy
                        </a>
                    </div>
                </td>
            </tr>
        </FirmMiniDetail>
    );
};


const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-6 flex justify-center">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 ml-0 leading-tight text-gray-400 bg-white/5 border border-gray-700 rounded-l-lg hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronLeft className="w-4 h-4"/>
                    </button>
                </li>
                {pageNumbers.map(number => (
                     <li key={number}>
                        <button onClick={() => onPageChange(number)} className={`px-3 py-2 leading-tight border border-gray-700 ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 leading-tight text-gray-400 bg-white/5 border border-gray-700 rounded-r-lg hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronRight className="w-4 h-4"/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

const FullCompareSection = () => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ accountSize: [100000], steps: [1], applyDiscount: true, challengeType: 'futures', customSizeRange: null });
  const [sortConfig, setSortConfig] = useState<{key: string, direction: string}>({ key: 'price', direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const ROWS_PER_PAGE = 8;

  useEffect(() => {
    if (!db) {
        setChallenges(ALL_CHALLENGES_DATA);
        setLoading(false);
        return;
    }
    const challengesCollectionRef = collection(db, 'challenges');
    const populateDataIfNeeded = async () => {
        const snapshot = await getDocs(challengesCollectionRef);
        if (snapshot.empty) {
            console.log("Firestore 'challenges' collection is empty. Populating with mock data.");
            const batch = writeBatch(db);
            ALL_CHALLENGES_DATA.forEach((challenge) => {
                const docRef = doc(db, "challenges", challenge.id);
                batch.set(docRef, challenge);
            });
            await batch.commit();
            console.log("Finished populating data.");
        }
    };
    
    populateDataIfNeeded().catch(console.error);

    const unsubscribe = onSnapshot(challengesCollectionRef, (snapshot) => {
      const challengesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChallenges(challengesData);
      setLoading(false);
    }, (error) => {
        console.error("Error fetching data from Firestore:", error);
        console.log("Falling back to mock data.");
        setChallenges(ALL_CHALLENGES_DATA);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredAndSortedChallenges = useMemo(() => {
    let filtered = challenges.filter(c => c.challengeType === filters.challengeType);

    if (searchTerm) {
      filtered = filtered.filter(c => c.firmName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (filters.customSizeRange) {
      const [min, max] = filters.customSizeRange;
      filtered = filtered.filter(c => c.accountSize >= min && c.accountSize <= max);
    } else if (filters.accountSize.length > 0) {
        filtered = filtered.filter(c => filters.accountSize.includes(c.accountSize));
    }

    if (filters.steps.length > 0) {
        filtered = filtered.filter(c => {
            if (!c) return false;
            const stepMatch = filters.steps.includes(c.steps);
            const instantMatch = filters.steps.includes('Instant') && c.isInstant;
            return stepMatch || instantMatch;
        });
    }
    
    filtered.sort((a, b) => {
        if (!a || !b) return 0;
        let aValue, bValue;
        const key = sortConfig.key;

        if (key === 'firm') { aValue = a.firmName; bValue = b.firmName; }
        else if (key === 'price') { aValue = a.price * (1 - (filters.applyDiscount ? (a.promoDiscountPercent || 0) / 100 : 0)); bValue = b.price * (1 - (filters.applyDiscount ? (b.promoDiscountPercent || 0) / 100 : 0)); }
        else { aValue = a[key as keyof typeof a] ?? -Infinity; bValue = b[key as keyof typeof b] ?? -Infinity; }
        
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
    });
    return filtered;
  }, [challenges, searchTerm, filters, sortConfig]);

  useEffect(() => {
      setCurrentPage(1);
  }, [filters, searchTerm]);

  const paginatedChallenges = useMemo(() => {
      const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
      return filteredAndSortedChallenges.slice(startIndex, startIndex + ROWS_PER_PAGE);
  }, [currentPage, filteredAndSortedChallenges]);

  const totalPages = Math.ceil(filteredAndSortedChallenges.length / ROWS_PER_PAGE);

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
    <div className="font-sans text-white">
      <div className="max-w-full mx-auto">
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


export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured);
  const featuredFreeResources = mockFreeResources.filter(r => r.isFeatured).slice(0, 3);
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-16">
      <div className="h-96 relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className={cn("text-2xl md:text-4xl text-foreground relative z-20 text-center px-4")}>
          Unlock Your Trading Potential: Find the Perfect Prop Firm &amp; Get Funded.
        </h1>
        <p className="text-center mt-4 text-muted-foreground relative z-20 max-w-2xl px-4 text-sm md:text-base">
          Tired of risking your own capital or sifting through confusing prop firm options? Discover top-rated firms, master the rules, access exclusive deals, and secure your funded account with confidence.
        </p>
        <div className="mt-8 relative z-20">
          <StarBorder<typeof Link>
            as={Link}
            href="/compare"
          >
            Compare All Prop Firms
          </StarBorder>
        </div>
      </div>
      
      {featuredFirms.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Featured Prop Firms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredFirms.map(firm => (
                <FirmCard key={firm.id} firm={firm} />
              ))}
            </div>
             <div className="text-center mt-10">
              <StarBorder<typeof Link>
                  as={Link}
                  href="/firms"
              >
                  View All Prop Firms
              </StarBorder>
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">Compare Prop Firms</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">The EZ-iest Way to Compare Prop Firm Challenges.</p>
            
            {isClient && <FullCompareSection />}
            
            <div className="text-center mt-10">
              <StarBorder<typeof Link>
                  as={Link}
                  href="/compare"
              >
                  Go to Full Comparison Page
              </StarBorder>
          </div>
        </div>
      </section>

      {featuredFreeResources.length > 0 && (
        <section className="py-12 bg-card rounded-xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Explore Our Free Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredFreeResources.map(resource => (
                <FreeResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
            <div className="text-center mt-10">
              <StarBorder<typeof Link>
                as={Link}
                href="/free-resources"
              >
                View All Free Resources
              </StarBorder>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
