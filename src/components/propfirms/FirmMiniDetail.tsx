
'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';
import { useIsMobile } from '@/hooks/use-mobile';
import FirmMiniDetailDesktop from './FirmMiniDetailDesktop';
import FirmMiniDetailMobile from './FirmMiniDetailMobile';

interface FirmMiniDetailProps {
    firm: PropFirm;
}

const FirmMiniDetail: React.FC<FirmMiniDetailProps> = ({ firm }) => {
    const isMobile = useIsMobile();

    // Render a loading skeleton or null until the hook determines the device type
    if (isMobile === undefined) {
        return null; // Or a loading spinner
    }

    if (isMobile) {
        return <FirmMiniDetailMobile firm={firm} />;
    }

    return <FirmMiniDetailDesktop firm={firm} />;
};

export default FirmMiniDetail;
