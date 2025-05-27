
'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button"; // Used for styling action/cancel

interface DegenEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterDegenMode: () => void;
}

export function DegenEntryModal({ isOpen, onClose, onEnterDegenMode }: DegenEntryModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="degen-modal-content bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))] border-[hsl(var(--degen-electric-blue-hsl))] font-pixelify">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-press-start text-[hsl(var(--degen-lime-green-hsl))]">Yo Degen!</AlertDialogTitle>
          <AlertDialogDescription className="text-[hsl(var(--degen-text-main-hsl))] space-y-2">
            <div>18+ Recommended / Enter at Your Own Risk!</div>
            <div className="font-bold text-[hsl(var(--degen-hot-pink-hsl))]">WARNING / DISCLAIMER:</div>
            <div>
              You're about to dive into the deep end. This ain't financial advice (NFA),
              we ain't responsible if you get rekt. It's all for the lulz and alpha leaks.
              Proceed with caution & a sense of humor. WAGMI?
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel
            onClick={onClose}
            className="degen-button cancel font-pixelify border-[hsl(var(--degen-hot-pink-hsl))] text-[hsl(var(--degen-hot-pink-hsl))] hover:bg-[hsl(var(--degen-hot-pink-hsl))] hover:text-black"
          >
            Nah, Keep Me Safe
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onEnterDegenMode}
            className="degen-button enter font-pixelify bg-[hsl(var(--degen-electric-blue-hsl))] text-black hover:bg-[hsl(var(--degen-lime-green-hsl))]"
          >
            Enter Degen Zone
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
