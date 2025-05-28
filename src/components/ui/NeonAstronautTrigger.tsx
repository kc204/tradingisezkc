'use client'; // This component needs to be interactive (clickable)

import React from 'react';

// Define the props: It needs a function to call when clicked.
interface NeonAstronautTriggerProps {
  onTriggerClick: () => void;
}

export const NeonAstronautTrigger: React.FC<NeonAstronautTriggerProps> = ({ onTriggerClick }) => {
  return (
    <button
      onClick={onTriggerClick} // Call the passed function when the button is clicked
      className="cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none group text-2xl" // Adjusted size for emoji
      aria-label="Activate Degen Mode" // Important for accessibility
      title="Feeling... Degen?" // Tooltip for fun
    >
      🚀
    </button>
  );
};