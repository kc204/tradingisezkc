
'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import FirmMiniDetailDesktop from './FirmMiniDetailDesktop';
import FirmMiniDetailMobile from './FirmMiniDetailMobile';

interface FirmMiniDetailProps {
    firm: PropFirm;
    children: React.ReactNode;
}

const FirmMiniDetail: React.FC<FirmMiniDetailProps> = ({ firm, children }) => {
    const isMobile = useIsMobile();

    if (isMobile === undefined) {
        return <>{children}</>; // Render trigger while determining device type
    }

    if (isMobile) {
        return (
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent 
                    side="bottom" 
                    className="h-[90vh] w-[95vw] max-w-xl mx-auto rounded-t-lg p-0 border-none"
                >
                    <FirmMiniDetailMobile firm={firm} />
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="w-[95vw] md:max-w-4xl h-[90vh] p-0 flex flex-col">
                <FirmMiniDetailDesktop firm={firm} />
            </DialogContent>
        </Dialog>
    );
};

export default FirmMiniDetail;
