
'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';

interface FirmMiniDetailProps {
    firm: PropFirm;
}

const FirmMiniDetail: React.FC<FirmMiniDetailProps> = ({ firm }) => {
    // Content has been cleared as requested.
    // This component now renders an empty div.
    return (
        <div></div>
    );
};

export default FirmMiniDetail;
