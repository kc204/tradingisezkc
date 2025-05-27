
'use client';

// This component no longer manages its own Header/Footer.
// It's now a content wrapper for pages within the Degen Mode.
// The global Header/Footer will adapt to Degen Mode styling.

import { cn } from '@/lib/utils';

interface DegenPageWrapperProps {
  children: React.ReactNode;
}

export default function DegenPageWrapper({ children }: DegenPageWrapperProps) {
  return (
    // This div primarily sets Degen-specific styling for the content area
    // of Degen pages. The overall page background, header, and footer
    // styling is handled by the .degen-mode class on <html> and
    // conditional styling within the Header and Footer components.
    <div className={cn(
      "font-pixelify" // Ensures Degen font for content
      // Add any Degen-specific content area styling here if needed,
      // e.g., specific padding, borders for the content block itself.
      // The main background is already applied by .degen-mode on <html>.
    )}>
      {children}
    </div>
  );
}
