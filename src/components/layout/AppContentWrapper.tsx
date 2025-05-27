
'use client';

import { useDegenMode } from "@/contexts/DegenModeContext";
import GlobalOfferBar from "./GlobalOfferBar";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "../ui/toaster"; // Make sure Toaster is included if needed globally

export default function AppContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDegenMode } = useDegenMode();

  if (isDegenMode) {
    // In Degen Mode, DegenPageWrapper will handle its own layout, including Toaster if needed
    return <>{children}</>;
  }

  // Normal site layout
  return (
    <>
      <GlobalOfferBar />
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>
        {children}
      </main>
      <Footer />
      {/* Toaster is part of the normal layout; DegenPageWrapper can include its own if desired */}
    </>
  );
}
