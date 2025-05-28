'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDegenMode } from '@/contexts/DegenModeContext'; // Import your context hook
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'; // Using AlertDialog for the warning
import { Button } from '@/components/ui/button'; // Import Button for styling consistency

interface DegenEntryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DegenEntryPopup: React.FC<DegenEntryPopupProps> = ({ isOpen, onClose }) => {
  const { setIsDegenMode } = useDegenMode();
  const router = useRouter();

  const handleEnterDegenMode = () => {
    setIsDegenMode(true); // Set the global state
    router.push('/degen');  // Navigate to the Degen page
    // onClose(); // AlertDialogAction usually handles closing, but we manage via 'open' prop
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="bg-black text-white border-2 border-[hsl(var(--degen-neon-pink))] font-pixelify shadow-lg shadow-[hsl(var(--degen-neon-pink))] max-w-md rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-press-start text-2xl text-[hsl(var(--degen-neon-pink))] drop-shadow-[0_0_5px_hsl(var(--degen-neon-pink))] text-center">
            !! WARNING !!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-gray-300 pt-4 text-center">
            You are about to enter the Degen Zone. This area contains highly speculative, potentially high-risk content and a lot of slang.
            <br /><br />
            <strong className="text-[hsl(var(--degen-neon-lime))]">This is NOT financial advice. ALWAYS do your own research (DYOR). 18+ Only.</strong>
            <br /><br />
            Proceed with caution (and maybe a sense of humor).
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <AlertDialogCancel
            asChild // Allows us to use our own Button for consistent styling
            onClick={onClose}
          >
              <Button 
                variant="outline" 
                className="bg-black text-[hsl(var(--degen-neon-blue))] border-[hsl(var(--degen-neon-blue))] hover:bg-[hsl(var(--degen-neon-blue))] hover:text-black rounded-none font-pixelify w-full sm:w-auto"
              >
                Keep Me Safe
              </Button>
          </AlertDialogCancel>
          <AlertDialogAction
             asChild // Allows us to use our own Button
             onClick={handleEnterDegenMode}
          >
            <Button 
              variant="default" 
              className="bg-[hsl(var(--degen-neon-lime))] text-black hover:bg-white hover:shadow-[0_0_15px_hsl(var(--degen-neon-lime))] rounded-none font-pixelify w-full sm:w-auto"
            >
              Enter Degen Zone
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};