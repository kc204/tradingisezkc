

'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Edit, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdminPanel } from '@/components/sentiment/AdminPanel';
import SentimentTrendChart from '@/components/sentiment/SentimentTrendChart';
import FirmSentimentCard from '@/components/sentiment/FirmSentimentCard';
import FirmSelectionDropdown from '@/components/sentiment/FirmSelectionDropdown';
import type { FirmData, TrendData, WeeklyData } from '@/lib/types';
import { mockPropFirms } from '@/lib/mockData';


// --- MOCK DATA GENERATION ---

const generateColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

const allFirms: FirmData[] = mockPropFirms.map(firm => ({
  name: firm.name,
  logoUrl: firm.logoUrl,
}));

const firmColors = allFirms.reduce((acc, firm) => {
  acc[firm.name] = generateColor(firm.name);
  return acc;
}, {} as Record<string, string>);

const calculateWeightedScore = (data: { trustpilotRating: number; redditSentiment: number; youtubeSentiment: number; xSentiment: number; }) => {
    const trustpilotScore = (data.trustpilotRating - 1) * 25; // Scale 1-5 to 0-100
    const weightedScore = (trustpilotScore * 0.45) + (data.redditSentiment * 0.35) + (data.youtubeSentiment * 0.20) + (data.xSentiment * 0.10);
    return Math.round(Math.max(0, weightedScore));
};

const generateInitialData = () => {
  const trendData: TrendData[] = [];
  const weeklyData: WeeklyData = {};
  const firmNames = allFirms.map(f => f.name);

  // Generate for previous weeks first
    for (let i = 4; i > 0; i--) {
        const weekEntry: TrendData = { week: `${i} Weeks Ago` };
        firmNames.forEach(name => {
            weekEntry[name] = Math.floor(Math.random() * 80) + 10;
        });
        trendData.push(weekEntry);
    }

    // Now generate "Last Week"
    const lastWeekEntry: TrendData = { week: 'Last Week' };
     firmNames.forEach(name => {
      const firm = mockPropFirms.find(f => f.name === name);
      const tempWeeklyData = {
          trustpilotRating: firm?.rating || parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
          redditSentiment: Math.floor(Math.random() * 70) + 20, 
          youtubeSentiment: Math.floor(Math.random() * 70) + 20,
          xSentiment: Math.floor(Math.random() * 70) + 20,
      };
      const score = calculateWeightedScore(tempWeeklyData);
      lastWeekEntry[name] = score;

      weeklyData[name] = {
        summary: `This is a sample summary for ${name} for the last week, highlighting recent community feedback and platform performance discussions.`,
        positivePoints: ["Good community feedback noted on social channels.", "Platform reported as stable with minimal downtime.", "Fast response times from customer support."],
        negativePoints: ["Some users reported concerns about payout processing times.", "Minor slippage reported during high-volatility news events."],
        trustpilotRating: tempWeeklyData.trustpilotRating,
        redditSentiment: tempWeeklyData.redditSentiment,
        youtubeSentiment: tempWeeklyData.youtubeSentiment,
        xSentiment: tempWeeklyData.xSentiment,
        score: score,
        redditSources: [],
        youtubeSources: [],
        xSources: [],
      };
  });
  trendData.push(lastWeekEntry);


  trendData.sort((a,b) => {
    const weekA = a.week.toString();
    const weekB = b.week.toString();

    if (weekA.includes("Last")) return 1;
    if (weekB.includes("Last")) return -1;
    
    const numA = parseInt(weekA.split(" ")[0]);
    const numB = parseInt(weekB.split(" ")[0]);
    
    return numB - numA;
  });

  return { trendData, weeklyData };
};

const AdminPanelPortal = ({ children }: { children: React.ReactNode }) => {
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const node = document.getElementById('admin-panel-trigger-root');
        setMountNode(node);
    }, []);

    if (mountNode) {
        return createPortal(children, mountNode);
    }
    return null;
}

export default function SentimentAnalyzerPage() {
  const [initialData] = useState(generateInitialData());
  const [selectedFirms, setSelectedFirms] = useState(allFirms.slice(0,4).map(f => f.name));
  
  const [trendData, setTrendData] = useState<TrendData[]>(initialData.trendData);
  const [weeklyData, setWeeklyData] = useState<WeeklyData>(initialData.weeklyData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleFirmSelection = (firmName: string) => {
    setSelectedFirms(prev => {
      const isSelected = prev.includes(firmName);
      if (isSelected) {
        if (prev.length === 1) return prev; 
        return prev.filter(name => name !== firmName);
      } else {
        if (prev.length >= 4) { 
            const newSelection = [...prev.slice(1), firmName];
            return newSelection;
        }
        return [...prev, firmName];
      }
    });
  };

  const handleSaveData = (newWeeklyDataFromAdmin: WeeklyData) => {
      const updatedWeeklyData = { ...newWeeklyDataFromAdmin };
      const updatedTrendData = [...trendData];
      const lastWeekIndex = updatedTrendData.findIndex(d => d.week === 'Last Week');
      
      Object.keys(updatedWeeklyData).forEach(firmName => {
          const score = calculateWeightedScore(updatedWeeklyData[firmName]);
          updatedWeeklyData[firmName].score = score;
          if(lastWeekIndex >= 0 && updatedTrendData[lastWeekIndex]) {
              updatedTrendData[lastWeekIndex][firmName] = score;
          }
      });

      setWeeklyData(updatedWeeklyData);
      setTrendData(updatedTrendData);
  };
  
  if (loading) {
      return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
  }


  return (
    <div className="space-y-12 font-sans text-white">
      <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Prop Firm Sentiment Trends
          </h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
              Tracking community sentiment for top prop firms over the last 4 weeks.
          </p>
      </header>

      <main>
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
              <FirmSelectionDropdown 
                  allFirms={allFirms}
                  selectedFirms={selectedFirms}
                  onFirmSelect={handleFirmSelection}
              />
          </div>
            <SentimentTrendChart 
                data={trendData} 
                firms={allFirms} 
                selectedFirms={selectedFirms} 
                firmColors={firmColors}
            />
        </section>

        <section>
            <h2 className="text-2xl font-bold text-center mb-8 text-white/90">Detailed Weekly Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allFirms.map(firm => (
                  <FirmSentimentCard key={firm.name} firm={firm} data={weeklyData[firm.name]} />
              ))}
          </div>
        </section>
      </main>
      
      <AdminPanelPortal>
          <AdminPanel
              weeklyData={weeklyData}
              onSave={handleSaveData}
              allFirms={allFirms}
              calculateWeightedScore={calculateWeightedScore}
          >
              <div className="h-4 w-full opacity-0 cursor-pointer" aria-label="Open Admin Panel"></div>
          </AdminPanel>
      </AdminPanelPortal>
    </div>
  );
}
