
'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useDegenMode } from '@/contexts/DegenModeContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface DegenEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DegenEntryModal: React.FC<DegenEntryModalProps> = ({ isOpen, onClose }) => {
  const { setIsDegenMode } = useDegenMode();
  const router = useRouter(); // Initialize useRouter

  const handleEnterDegenMode = () => {
    setIsDegenMode(true);
    onClose(); // Close the modal
    router.push('/degen'); // Navigate to /degen
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(openState) => {
      if (!openState) {
        onClose();
      }
    }}>
      <AlertDialogContent className="bg-black text-white border-2 border-[hsl(var(--degen-neon-pink))] font-pixelify max-w-md rounded-none shadow-[0_0_10px_hsl(var(--degen-neon-pink)),_0_0_20px_hsl(var(--degen-neon-pink)),_0_0_30px_hsl(var(--degen-neon-pink)_/_0.7)]">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="font-press-start text-[hsl(var(--degen-direct-neon-lime-green))] text-2xl"> {/* Corrected var */}
            Yo Degen!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[hsl(var(--degen-text-main-hsl))] space-y-3 mt-2 text-sm">
            <span className="block">18+ Recommended / Enter at Your Own Risk!</span>
            <span className="block font-bold text-[hsl(var(--degen-direct-neon-hot-pink))] text-md mt-3"> {/* Corrected var */}
              WARNING / DISCLAIMER:
            </span>
            <span className="block mt-1">
              You&apos;re about to dive into the deep end. This ain&apos;t financial advice (NFA),
              we ain&apos;t responsible if you get rekt. It&apos;s all for the lulz and alpha leaks.
              Proceed with caution &amp; a sense of humor. WAGMI?
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <AlertDialogCancel
            asChild
            // onClick={onClose} // Removed explicit onClick as Radix handles cancel via onOpenChange
          >
            <Button
              variant="outline"
              className="font-pixelify text-[hsl(var(--degen-direct-neon-electric-blue))] border-[hsl(var(--degen-direct-neon-electric-blue))] hover:bg-[hsl(var(--degen-direct-neon-electric-blue))] hover:text-black rounded-none w-full sm:w-auto bg-transparent"
            >
              Nah, Keep Me Safe
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction
            asChild
            onClick={handleEnterDegenMode} // Use the combined handler
          >
            <Button
              variant="default"
              className="font-pixelify bg-[hsl(var(--degen-direct-neon-lime-green))] text-black hover:bg-white hover:shadow-[0_0_15px_hsl(var(--degen-direct-neon-lime-green))] rounded-none w-full sm:w-auto" // Corrected var
            >
              Enter Degen Zone
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
