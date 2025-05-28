
'use client';

import Image from 'next/image';

const NeonAstronautTrigger = () => {
  const handleClick = () => {
    console.log('Neon Astronaut Trigger clicked!');
    // Later, this will open the DegenEntryModal
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer inline-block p-2 border-2 border-transparent hover:border-pink-500 rounded-lg transition-all"
      title="What's this?"
    >
      <Image
        src="https://placehold.co/80x80.png"
        alt="Neon Astronaut - Degen Mode Trigger"
        width={80}
        height={80}
        className="rounded-md"
        data-ai-hint="neon astronaut"
      />
      <p className="text-xs text-center mt-1 text-muted-foreground">??</p>
    </div>
  );
};

export default NeonAstronautTrigger;
