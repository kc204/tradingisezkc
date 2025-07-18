
'use client'; 

import FirmCard from '@/components/propfirms/FirmCard';
import ArticleCard from '@/components/shared/ArticleCard';
import FreeResourceCard from '@/components/shared/FreeResourceCard';
import { mockArticles, mockPropFirms, mockFreeResources } from '@/lib/mockData';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { StarBorder } from "@/components/ui/star-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useMemo, useRef } from 'react';
import type { PropFirm } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import FirmMiniDetail from '@/components/propfirms/FirmMiniDetail';
import { ChevronsUpDown, ExternalLink, Star } from 'lucide-react';


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
          paymentType: 'One Time',
          promoDiscountPercent: tier.discountPercentage ? tier.discountPercentage * 100 : 0,
          activationFee: tier.activationFee,
          profitTarget: tier.profitTargetPercentage ? [tier.profitTargetPercentage] : [0],
          dailyLoss: tier.dailyLossLimitPercentage,
          maxLoss: tier.drawdownPercentage,
          profitSplit: parseInt(firm.profitSplit || '80', 10),
          payoutFrequency: 'Varies',
          affiliateLink: firm.affiliateLink,
          challengeType: firm.instrumentTypes?.includes('Futures') ? 'futures' : 'cfd',
          rawFirmData: firm, 
        });
      });
    }
  });
  return challenges;
};

// --- Helper Formatting Functions ---
const formatCurrency = (value: any) => value == null ? 'N/A' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatPercentage = (value: any) => value == null ? 'N/A' : `${value}%`;


// --- Snapshot Table Components (for Homepage) ---
const ChallengeTableSnapshot = ({ challenges }: any) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        { key: 'price', label: 'Prices', sticky: 'right' },
    ];

    return (
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-black/20 relative">
            <div ref={scrollContainerRef} className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="border-b border-white/10">
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} scope="col" className={`px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-black/20 backdrop-blur-sm' : 'right-0 bg-gray-900'}` : 'bg-gray-800/95'}`}>
                                    <button className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                                        {col.label}
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {challenges.map((challenge: any) => <ChallengeRowSnapshot key={challenge.id} challenge={challenge} isScrolled={isScrolled} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ChallengeRowSnapshot = ({ challenge, isScrolled }: any) => {
    const finalPrice = challenge.promoDiscountPercent > 0 ? challenge.price * (1 - challenge.promoDiscountPercent / 100) : challenge.price;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <tr className="group hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                    <td className="px-4 py-3 whitespace-nowrap sticky left-0 z-0 bg-black/20 group-hover:bg-gray-800/80 backdrop-blur-sm">
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
                            <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: `${challenge.profitSplit}%`}}></div></div>
                        </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap sticky right-0 z-0 bg-gray-900 group-hover:bg-gray-800">
                        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                            <div className="text-right">
                                 {challenge.promoDiscountPercent > 0 ? (
                                    <>
                                        <p className="font-semibold text-green-400">{formatCurrency(finalPrice)}</p>
                                        <p className="text-xs text-gray-500 line-through">{formatCurrency(challenge.price)}</p>
                                    </>
                                ) : (
                                    <p className="font-semibold text-white">{formatCurrency(finalPrice)}</p>
                                )}
                                <p className="text-xs text-gray-500">{challenge.paymentType}</p>
                            </div>
                            <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600">
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


export default function Home() {
  const featuredFirms = mockPropFirms.filter(f => f.isFeatured);
  const recentArticles = mockArticles.slice(0, 3);
  const featuredFreeResources = mockFreeResources.filter(r => r.isFeatured).slice(0, 3);
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const allChallenges = useMemo(() => flattenFirmsToChallenges(mockPropFirms), []);

  const homepageChallenges = useMemo(() => {
      // Default to 100k futures challenges, sorted by price
      let filtered = allChallenges.filter(c => c.challengeType === 'futures' && c.accountSize === 100000);
      
      filtered.sort((a, b) => {
          const aPrice = a.price * (1 - (a.promoDiscountPercent / 100));
          const bPrice = b.price * (1 - (b.promoDiscountPercent / 100));
          return aPrice - bPrice;
      });

      return filtered.slice(0, 8); // Take top 8
  }, [allChallenges]);


  return (
    <div className="space-y-16">
      {/* Hero Section */}
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

      {/* Featured Prop Firms Section START */}
      {featuredFirms.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Featured Prop Firms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredFirms.map(firm => (
                <FirmCard key={firm.id} firm={firm} />
              ))}
            </div>
            
          </div>
        </section>
      )}
      {/* Featured Prop Firms Section END */}

      {/* Comparison Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-2">Compare Prop Firms</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">A snapshot of the best value for $100K Futures Challenges.</p>
            
            {isClient && <ChallengeTableSnapshot challenges={homepageChallenges} />}
            
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

      {/* Featured Free Resources Section START */}
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
      {/* Featured Free Resources Section END */}

    </div>
  );
}
