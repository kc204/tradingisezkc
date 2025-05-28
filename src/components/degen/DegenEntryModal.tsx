
'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // <-- Import useRouter
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

interface DegenEntryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DegenEntryModal: React.FC<DegenEntryPopupProps> = ({ isOpen, onClose }) => {
  const { setIsDegenMode } = useDegenMode();
  const router = useRouter(); // <-- Get router instance

  const handleEnterDegenMode = () => {
    setIsDegenMode(true);
    router.push('/degen'); // <-- Navigate to /degen
    // onClose(); // AlertDialogAction handles closing via onOpenChange
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] border-2 border-[hsl(var(--degen-neon-pink-hsl))] font-pixelify shadow-lg shadow-[hsl(var(--degen-neon-pink-hsl))] max-w-md rounded-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-press-start text-[hsl(var(--degen-neon-lime-hsl))] text-2xl text-center">
            Yo Degen!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[hsl(var(--degen-text-main-hsl))] space-y-3 mt-2 text-sm text-center">
            <span className="block">18+ Recommended / Enter at Your Own Risk!</span>
            <span className="block font-bold text-[hsl(var(--degen-neon-pink-hsl))] text-md mt-3">
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
            onClick={onClose}
          >
            <Button
              variant="outline"
              className="font-pixelify text-[hsl(var(--degen-neon-blue-hsl))] border-[hsl(var(--degen-neon-blue-hsl))] hover:bg-[hsl(var(--degen-neon-blue-hsl))] hover:text-black rounded-none w-full sm:w-auto bg-transparent"
            >
              Nah, Keep Me Safe
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction
            asChild
            onClick={handleEnterDegenMode}
          >
            <Button
              variant="default"
              className="font-pixelify bg-[hsl(var(--degen-neon-lime-hsl))] text-black hover:bg-white hover:shadow-[0_0_15px_hsl(var(--degen-neon-lime-hsl))] rounded-none w-full sm:w-auto"
            >
              Enter Degen Zone
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
