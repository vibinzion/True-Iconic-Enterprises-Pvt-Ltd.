import React from 'react';

interface PixarWaveRibbonProps {
  position?: 'top' | 'bottom';
  tagline?: string;
}

export const PixarWaveRibbon: React.FC<PixarWaveRibbonProps> = ({ 
  position = 'bottom',
  tagline = 'Building a Better Tomorrow Together' 
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${position === 'top' ? '-mb-1' : '-mt-1'}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-14 sm:h-20 md:h-24 object-cover ${position === 'top' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Deep Navy/Royal Gradient */}
          <linearGradient id="tieBlueRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A192F" />
            <stop offset="50%" stopColor="#1E56A0" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Cyan/Sky Blue Accent Ribbon */}
          <linearGradient id="tieSkyRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>
        </defs>

        {/* Back Light Cyan Ribbon */}
        <path
          d="M0,45 C320,120 420,-10 820,60 C1120,110 1340,30 1440,55 L1440,120 L0,120 Z"
          fill="url(#tieSkyRibbon)"
          opacity="0.35"
        />

        {/* Middle Royal Ribbon */}
        <path
          d="M0,60 C260,115 540,10 920,80 C1200,120 1380,50 1440,65 L1440,120 L0,120 Z"
          fill="#1E56A0"
          opacity="0.7"
        />

        {/* Front Deep Navy Ribbon */}
        <path
          d="M0,75 C300,130 620,35 980,95 C1240,135 1380,75 1440,85 L1440,120 L0,120 Z"
          fill="url(#tieBlueRibbon)"
        />
      </svg>

      {/* Script Tagline */}
      {position === 'bottom' && tagline && (
        <div className="absolute bottom-2 right-6 sm:bottom-3 sm:right-12 text-right">
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-sky-200 font-serif italic drop-shadow-md">
            "{tagline}"
          </span>
        </div>
      )}
    </div>
  );
};
