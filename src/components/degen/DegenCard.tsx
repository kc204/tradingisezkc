
'use client';

import type { FC } from 'react';

interface DegenCardProps {
  title: string;
  description: string;
}

const DegenCard: FC<DegenCardProps> = ({ title, description }) => {
  return (
    <div className="bg-black/60 p-6 border-2 border-[var(--degen-direct-neon-pink)] shadow-[0_0_10px_var(--degen-direct-neon-pink),_0_0_15px_var(--degen-direct-neon-pink)_/_0.7] rounded-none font-pixelify text-white">
      <h3 className="text-xl md:text-2xl font-press-start text-[var(--degen-direct-neon-lime-green)] mb-4">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DegenCard;

