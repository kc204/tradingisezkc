
'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { FirmData, TrendData } from '@/lib/types';
import Image from 'next/image';

const FirmLogoDot = (props: any) => {
  const { cx, cy, dataKey, firms, stroke, trendData } = props;
  const isLastPoint = props.index === trendData.length - 1;

  if (!isLastPoint) return null;

  const firm = firms.find((f: FirmData) => f.name === dataKey);
  if (!firm) return null;

  const clipId = `clip-${dataKey.replace(/\s+/g, '-')}`;

  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <defs>
        <clipPath id={clipId}>
          <circle r="16" />
        </clipPath>
      </defs>
      <circle r="18" fill={stroke} />
      <circle r="16" fill="hsl(var(--card))" />
      <image href={firm.logoUrl} x="-16" y="-16" height="32" width="32" clipPath={`url(#${clipId})`} />
    </g>
  );
};

const ConditionalActiveDot = (props: any) => {
  const { cx, cy, stroke, index, dataLength } = props;
  if (index === dataLength - 1) {
    return null;
  }
  return <circle cx={cx} cy={cy} r={6} stroke={stroke} fill="hsl(var(--background))" strokeWidth={2} />;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-lg">
        <p className="font-bold text-white mb-2">{label}</p>
        {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }} className="text-sm font-semibold">{`${p.dataKey}: ${p.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

interface SentimentTrendChartProps {
  data: TrendData[];
  firms: FirmData[];
  selectedFirms: string[];
  firmColors: Record<string, string>;
}

const SentimentTrendChart: React.FC<SentimentTrendChartProps> = ({ data, firms, selectedFirms, firmColors }) => {
  return (
    <div className="h-96 w-full bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-black/20 p-4 sm:p-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }} />
          <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
          {selectedFirms.map(firmName => {
            const firm = firms.find(f => f.name === firmName);
            if (!firm) return null;
            return (
                <Line 
                    key={firm.name}
                    type="monotone" 
                    dataKey={firm.name} 
                    stroke={firmColors[firm.name]} 
                    strokeWidth={3}
                    dot={<FirmLogoDot firms={firms} dataKey={firm.name} stroke={firmColors[firm.name]} trendData={data} />} 
                    activeDot={(props) => <ConditionalActiveDot {...props} dataLength={data.length} />}
                />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentTrendChart;
