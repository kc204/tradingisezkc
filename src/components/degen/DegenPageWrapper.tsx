
'use client';

import { cn } from '@/lib/utils';

interface DegenPageWrapperProps {
  children: React.ReactNode;
}

// This component now primarily styles the *content area* within DegenAppLayout.
// DegenAppLayout handles the overall page structure (header, footer, background).
export default function DegenPageWrapper({ children }: DegenPageWrapperProps) {
  return (
    <div className={cn(
      "font-pixelify" 
      // Add any Degen-specific *content area* styling here, 
      // e.g., specific padding if different from DegenAppLayout's main area.
      // For now, it's simple to ensure the Degen font propagates correctly.
    )}>
      {children}
    </div>
  );
}
