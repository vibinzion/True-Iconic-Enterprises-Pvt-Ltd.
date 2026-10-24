import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const handleWhatsAppClick = () => {
    const greeting = encodeURIComponent(
      "Hello True Iconic Enterprises! I am interested in inquiring about your manpower and facility management services."
    );
    window.open(`https://wa.me/923212350012?text=${greeting}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {/* Tooltip speech bubble */}
      {tooltipOpen && (
        <div className="mb-3 relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-slate-900 to-tie-navy-900 border border-emerald-400/40 shadow-clay-card text-xs text-white backdrop-blur-md animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat with our Operations Desk</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipOpen(false);
            }}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-tie-navy-900 border-r border-b border-emerald-400/40 transform rotate-45" />
        </div>
      )}

      {/* 3D Pixar Styled Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-0.5 shadow-[0_12px_30px_rgba(16,185,129,0.55),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        {/* Glow Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm animate-pulse" />
        
        {/* Inner Icon */}
        <div className="w-full h-full rounded-full flex items-center justify-center text-white">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20 stroke-white stroke-[2.2] group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </button>
    </div>
  );
};
