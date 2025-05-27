
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
import { Button }
from "@/components/ui/button"; // For styling Degen buttons
import { useDegenMode } from "@/contexts/DegenModeContext";
import { cn } from "@/lib/utils";

interface DegenEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DegenEntryModal({ isOpen, onClose }: DegenEntryModalProps) {
  const { setIsDegenMode } = useDegenMode();

  const handleEnterDegen = () => {
    setIsDegenMode(true);
    onClose();
  };

  const handleReturnToSafe = () => {
    setIsDegenMode(false); // Ensure it's set to false
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className={cn(
        "bg-[hsl(var(--degen-bg-main-hsl))] text-[hsl(var(--degen-text-main-hsl))]",
        "border-2 border-[hsl(var(--degen-electric-blue-hsl))] shadow-[0_0_15px_hsl(var(--degen-electric-blue-hsl))]",
        "font-pixelify"
      )}>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-press-start text-[hsl(var(--degen-lime-green-hsl))] text-2xl">Yo Degen!</AlertDialogTitle>
          <AlertDialogDescription className="text-[hsl(var(--degen-text-main-hsl))] space-y-3 mt-2 text-sm">
            <div>18+ Recommended / Enter at Your Own Risk!</div>
            <div className="font-bold text-[hsl(var(--degen-hot-pink-hsl))] text-md">WARNING / DISCLAIMER:</div>
            <div>
              You're about to dive into the deep end. This ain't financial advice (NFA),
              we ain't responsible if you get rekt. It's all for the lulz and alpha leaks.
              Proceed with caution & a sense of humor. WAGMI?
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6 sm:justify-around">
          <Button
            onClick={handleReturnToSafe}
            className={cn(
                "font-pixelify bg-transparent text-[hsl(var(--degen-electric-blue-hsl))]",
                "border-2 border-[hsl(var(--degen-electric-blue-hsl))] hover:bg-[hsl(var(--degen-electric-blue-hsl))] hover:text-[hsl(var(--degen-bg-main-hsl))]",
                "px-6 py-3 text-lg"
            )}
          >
            Nah, Keep Me Safe
          </Button>
          <Button
            onClick={handleEnterDegen}
            className={cn(
                "font-pixelify bg-[hsl(var(--degen-lime-green-hsl))] text-[hsl(var(--degen-bg-main-hsl))]",
                "border-2 border-[hsl(var(--degen-lime-green-hsl))] hover:bg-transparent hover:text-[hsl(var(--degen-lime-green-hsl))]",
                "px-6 py-3 text-lg"
            )}
          >
            Enter Degen Zone
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
