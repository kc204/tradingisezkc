
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleEnterDegenMode = () => {
    setIsDegenMode(true);
    onClose();
    router.push('/degen');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(openState) => {
      if (!openState) {
        onClose();
      }
    }}>
      <AlertDialogContent className="bg-black text-white border-2 border-[var(--degen-direct-neon-hot-pink)] font-pixelify max-w-md rounded-none shadow-[0_0_10px_var(--degen-direct-neon-hot-pink),_0_0_20px_var(--degen-direct-neon-hot-pink),_0_0_30px_var(--degen-direct-neon-hot-pink)_/_0.7]">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="font-press-start text-[var(--degen-direct-neon-lime-green)] text-2xl">
            Yo Degen!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[hsl(var(--degen-text-main-hsl))] space-y-3 mt-2 text-sm">
            <span className="block">18+ Recommended / Enter at Your Own Risk!</span>
            <span className="block font-bold text-[var(--degen-direct-neon-hot-pink)] text-md mt-3">
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
          >
            <Button
              variant="outline"
              className="font-pixelify text-[var(--degen-direct-neon-electric-blue)] border-[var(--degen-direct-neon-electric-blue)] hover:bg-[var(--degen-direct-neon-electric-blue)] hover:text-black rounded-none w-full sm:w-auto bg-transparent"
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
              className="font-pixelify bg-[var(--degen-direct-neon-lime-green)] text-black hover:bg-white hover:shadow-[0_0_15px_var(--degen-direct-neon-lime-green)] rounded-none w-full sm:w-auto"
            >
              Enter Degen Zone
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
