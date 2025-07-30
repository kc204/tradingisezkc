
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Edit } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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

const calculateWeightedScore = (data: { trustpilotRating: number; redditSentiment: number; youtubeSentiment: number; }) => {
    const trustpilotScore = (data.trustpilotRating - 1) * 25; // Scale 1-5 to 0-100
    const weightedScore = (trustpilotScore * 0.45) + (data.redditSentiment * 0.35) + (data.youtubeSentiment * 0.20);
    return Math.round(Math.max(0, weightedScore));
};

const generateInitialData = () => {
  const trendData: TrendData[] = [];
  const weeklyData: WeeklyData = {};
  const firmNames = allFirms.map(f => f.name);

  for (let i = 4; i > 0; i--) {
    const weekEntry: TrendData = { week: i === 1 ? 'Last Week' : `${i} Weeks Ago` };
    firmNames.forEach(name => {
      weekEntry[name] = Math.floor(Math.random() * 80) + 10;
    });
    trendData.unshift(weekEntry);
  }

  firmNames.forEach(name => {
    const firm = mockPropFirms.find(f => f.name === name);
    weeklyData[name] = {
      summary: `This is a sample summary for ${name} for the last week, highlighting recent community feedback and platform performance discussions.`,
      positivePoints: ["Good community feedback noted on social channels.", "Platform reported as stable with minimal downtime.", "Fast response times from customer support."],
      negativePoints: ["Some users reported concerns about payout processing times.", "Minor slippage reported during high-volatility news events."],
      trustpilotRating: firm?.rating || parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
      redditSentiment: Math.floor(Math.random() * 70) + 20,
      youtubeSentiment: Math.floor(Math.random() * 70) + 20,
      score: 0, // Initial score
    };
  });
  
  const lastWeekIndex = trendData.length - 1;
  Object.keys(weeklyData).forEach(firmName => {
      const score = calculateWeightedScore(weeklyData[firmName]);
      weeklyData[firmName].score = score;
      if(lastWeekIndex >= 0) {
          trendData[lastWeekIndex][firmName] = score;
      }
  });

  return { trendData, weeklyData };
};

const { trendData: INITIAL_TREND_DATA, weeklyData: INITIAL_WEEKLY_DATA } = generateInitialData();


export default function SentimentAnalyzerPage() {
  const [selectedFirms, setSelectedFirms] = useState([mockPropFirms[0]?.name || 'FTMO', mockPropFirms[1]?.name || 'Topstep']);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  const [trendData, setTrendData] = useState<TrendData[]>(INITIAL_TREND_DATA);
  const [weeklyData, setWeeklyData] = useState<WeeklyData>(INITIAL_WEEKLY_DATA);

  const handleFirmSelection = (firmName: string) => {
    setSelectedFirms(prev => {
      const isSelected = prev.includes(firmName);
      if (isSelected) {
        if (prev.length === 1) return prev; // Must keep at least one selected
        return prev.filter(name => name !== firmName);
      } else {
        if (prev.length >= 4) { // Max 4 firms
            const newSelection = prev.slice(1);
            return [...newSelection, firmName];
        }
        return [...prev, firmName];
      }
    });
  };

  const handleSaveData = (newWeeklyDataFromAdmin: WeeklyData) => {
      const updatedWeeklyData = { ...newWeeklyDataFromAdmin };
      const updatedTrendData = [...trendData];
      const lastWeekIndex = updatedTrendData.length - 1;
      
      Object.keys(updatedWeeklyData).forEach(firmName => {
          const score = calculateWeightedScore(updatedWeeklyData[firmName]);
          updatedWeeklyData[firmName].score = score;
          if(lastWeekIndex >= 0 && updatedTrendData[lastWeekIndex]) {
              updatedTrendData[lastWeekIndex][firmName] = score;
          }
      });

      setWeeklyData(updatedWeeklyData);
      setTrendData(updatedTrendData);
      setIsAdminOpen(false);
  };

  return (
    <div className="space-y-12">
      <header className="text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
            Prop Firm Sentiment Trends
        </h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
            Tracking community sentiment for top prop firms over the last 4 weeks.
        </p>
        <AdminPanel 
            weeklyData={weeklyData} 
            onSave={handleSaveData}
            allFirms={allFirms}
            calculateWeightedScore={calculateWeightedScore}
        >
            <Button variant="ghost" size="icon" className="absolute top-0 right-0 mt-2 mr-2">
                <Edit className="w-4 h-4" />
            </Button>
        </AdminPanel>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Trend Comparison</CardTitle>
            <CardDescription>Select up to 4 firms to compare their sentiment scores over the past month.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <FirmSelectionDropdown 
                allFirms={allFirms}
                selectedFirms={selectedFirms}
                onFirmSelect={handleFirmSelection}
             />
            <SentimentTrendChart data={trendData} firms={allFirms} selectedFirms={selectedFirms} firmColors={firmColors} />
          </CardContent>
        </Card>
      </section>

      <section>
          <h2 className="text-2xl font-bold text-center mb-6">Detailed Weekly Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allFirms.filter(firm => selectedFirms.includes(firm.name)).slice(0, 2).map(firm => (
                <FirmSentimentCard key={firm.name} firm={firm} data={weeklyData[firm.name]} />
            ))}
        </div>
        {selectedFirms.length > 2 && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {allFirms.filter(firm => selectedFirms.includes(firm.name)).slice(2, 4).map(firm => (
                    <FirmSentimentCard key={firm.name} firm={firm} data={weeklyData[firm.name]} />
                ))}
            </div>
        )}
      </section>
    </div>
  );
}
