'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';

interface FirmMiniDetailProps {
    firm: PropFirm;
}

const FirmMiniDetailDesktop: React.FC<FirmMiniDetailProps> = ({ firm }) => {
    return (
        <div>
            {/* Desktop content will be rebuilt here. */}
        </div>
    );
};

export default FirmMiniDetailDesktop;
