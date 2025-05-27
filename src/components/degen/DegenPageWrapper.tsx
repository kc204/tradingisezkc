
// src/components/degen/DegenPageWrapper.tsx
import type { ReactNode } from 'react';

interface DegenPageWrapperProps {
  title: string;
  children: ReactNode;
}

export function DegenPageWrapper({ title, children }: DegenPageWrapperProps) {
  return (
    <div className="degen-page-container py-8 px-2 md:px-4 min-h-[calc(100vh-200px)]"> {/* Ensure it takes height */}
      <h1 className="text-3xl md:text-4xl font-press-start text-center mb-8 text-[hsl(var(--degen-electric-blue-hsl))]">
        {title}
      </h1>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
      <div className="fixed bottom-4 right-4 p-2 bg-[hsl(var(--degen-hot-pink-hsl))] text-black font-pixelify text-xs rounded shadow-lg z-50">
        DEGEN MODE ACTIVE - NFA/DYOR
      </div>
    </div>
  );
}
