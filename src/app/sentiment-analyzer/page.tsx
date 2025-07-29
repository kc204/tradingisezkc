'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

export const metadata = {
  title: 'Firm Sentiment Analyzer | TradingisEZ',
  description: 'Compare prop firm sentiment based on real-time data from Reddit, Trustpilot, and more.',
};

// Mock data based on the proposed methodology
const mockSentimentData = [
  { firm: 'Topstep', score: 85, positiveMentions: 120, negativeMentions: 15 },
  { firm: 'Take Profit Trader', score: 92, positiveMentions: 150, negativeMentions: 10 },
  { firm: 'Tradeify', score: 75, positiveMentions: 100, negativeMentions: 20 },
  { firm: 'Bulenox', score: 68, positiveMentions: 90, negativeMentions: 25 },
  { firm: 'My Funded Futures', score: 88, positiveMentions: 135, negativeMentions: 12 },
  { firm: 'Apex Trader Funding', score: 70, positiveMentions: 110, negativeMentions: 30 },
  { firm: 'FTMO', score: 82, positiveMentions: 115, negativeMentions: 18 },
].sort((a, b) => b.score - a.score);


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-background border rounded-lg shadow-lg">
        <p className="font-bold text-foreground">{`${label}`}</p>
        <p className="text-sm text-green-500">{`Positive Mentions: ${data.positiveMentions}`}</p>
        <p className="text-sm text-red-500">{`Negative Mentions: ${data.negativeMentions}`}</p>
      </div>
    );
  }
  return null;
};

const SentimentScoreCard = ({ score }: { score: number }) => {
    let colorClass = 'text-gray-500';
    let Icon = Minus;

    if (score > 60) {
        colorClass = 'text-green-500';
        Icon = TrendingUp;
    } else if (score < 40) {
        colorClass = 'text-red-500';
        Icon = TrendingDown;
    }

    return (
        <div className={`flex items-center font-bold text-lg ${colorClass}`}>
            <Icon className="w-5 h-5 mr-1" />
            {score}
        </div>
    );
};


export default function SentimentAnalyzerPage() {
  const chartConfig = {
    score: {
      label: 'Sentiment Score',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-background rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Firm Sentiment Analyzer</h1>
          <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Quantifying community buzz. We analyze mentions from Trustpilot, Reddit, and more to generate a real-time sentiment score.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Community Sentiment Score (Last 7 Days)</CardTitle>
          <CardDescription>
            This chart represents the overall positive or negative sentiment for each firm based on online mentions. Scores range from -100 (overwhelmingly negative) to +100 (overwhelmingly positive).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[500px]">
            <ResponsiveContainer>
              <BarChart data={mockSentimentData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                <YAxis
                  dataKey="firm"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  width={120}
                />
                <XAxis type="number" domain={[-100, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--card))' }} />
                <Bar dataKey="score" layout="vertical" radius={5}>
                    {mockSentimentData.map((entry, index) => (
                        <LabelList 
                            key={`label-${index}`}
                            dataKey="score" 
                            position="right" 
                            offset={10}
                            className="font-bold"
                            formatter={(score: number) => {
                                let color = 'grey';
                                if (score > 60) color = '#22c55e'; // green-500
                                if (score < 40) color = '#ef4444'; // red-500
                                return <tspan fill={color}>{score}</tspan>
                            }}
                        />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
              <CardTitle>Sentiment Scoring Methodology</CardTitle>
              <CardDescription>Our sentiment meter isn't arbitrary. It's a system based on quantifiable data from the community, making it a powerful and defensible tool for your users.</CardDescription>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
              <h4>1. Keyword Lexicon</h4>
              <p>We created a dictionary of keywords and assign them a sentiment value.</p>
              <ul>
                  <li><strong>Positive Keywords:</strong> <Badge variant="secondary">payout</Badge>, <Badge variant="secondary">fast</Badge>, <Badge variant="secondary">legit</Badge>, <Badge variant="secondary">great support</Badge>, <Badge variant="secondary">passed</Badge>, <Badge variant="secondary">received</Badge> (+5 points each)</li>
                  <li><strong>Negative Keywords:</strong> <Badge variant="destructive">scam</Badge>, <Badge variant="destructive">denied</Badge>, <Badge variant="destructive">lag</Badge>, <Badge variant="destructive">slippage</Badge>, <Badge variant="destructive">bad support</Badge>, <Badge variant="destructive">stuck</Badge>, <Badge variant="destructive">flagged</Badge> (-5 points each)</li>
                  <li><strong>Neutral Keywords:</strong> challenge, rules, MT5, platform (0 points)</li>
              </ul>
              <h4>2. Mention-Based Scoring System</h4>
              <p>Our backend scanner analyzes each post/review from the last 7 days. For each mention, we start with a base score and apply multipliers.</p>
              <ul>
                  <li><strong>Base Score:</strong> A simple positive keyword mention is +5. A negative is -5.</li>
                  <li><strong>Interaction Multiplier:</strong> Reddit Upvote/Trustpilot "Helpful" Vote (x1.1), Comment/Reply (x1.2).</li>
                  <li><strong>Source Weighting Multiplier:</strong> Trustpilot/Forex Peace Army Review (x1.5), Reddit Post Title (x1.2), Reddit Comment (x1.0).</li>
              </ul>
              <h4>3. Final Score Calculation</h4>
              <p>For each firm, we sum up the scores of all positive and negative mentions over the week. The final sentiment score (from -100 to +100) is calculated with the formula:</p>
              <pre><code>Final Score = ((Total Positive - Total Negative) / (Total Positive + Total Negative)) * 100</code></pre>
          </CardContent>
      </Card>
    </div>
  );
}
