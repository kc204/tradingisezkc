'use client';

import React from 'react';
import type { PropFirm } from '@/lib/types';

interface FirmMiniDetailProps {
    firm: PropFirm;
}

const FirmMiniDetailMobile: React.FC<FirmMiniDetailProps> = ({ firm }) => {
    return (
        <div>
            {/* Mobile content will be rebuilt here. */}
        </div>
    );
};

export default FirmMiniDetailMobile;
