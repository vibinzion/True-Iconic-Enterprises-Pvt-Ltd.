import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ShieldCheck,
  Clock,
  Headset
} from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden flex items-center">
      
      {/* Soft, Dignified Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-sky-200/40 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-blue-200/30 rounded-full blur-[140px]" />
      </div>

      {/* Large Subtle 3D Handshake Watermark Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0">
        <img 
          src="/handshake-bg.png" 
          alt="" 
          aria-hidden="true"
          className="w-[900px] sm:w-[1250px] lg:w-[1600px] max-w-none opacity-10 mix-blend-multiply filter contrast-125 transform -translate-y-2 pointer-events-none"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Top Floating 3D Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-[#D0E4FA] shadow-[0_8px_24px_rgba(14,58,115,0.08)] animate-float">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052D4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0052D4]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#0A192F]">
            Registered Corporate Entity <span className="text-slate-300">|</span> SECP No: <strong className="text-[#0052D4] font-mono">0359617</strong> <span className="text-slate-300">|</span> <span className="text-[#0052D4] font-bold">Your Trust, Our Commitment</span>
          </span>
        </div>

        {/* Main 3D Extruded Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Outfit'] tracking-tight text-[#0A192F] leading-[1.12] max-w-4xl mx-auto mt-6">
          One-Window <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] via-blue-600 to-[#00A8E8]">Manpower</span>, Facility Management & Logistics Solutions
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed max-w-3xl mx-auto mt-6">
          <strong className="text-[#0A192F] font-bold">Service with Excellence. Building a Better Tomorrow Together.</strong> Get 100% trained, verified, and reliable staff or enterprise solutions at highly cost-effective rates.
        </p>

        {/* Key Highlight Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 py-2.5 px-6 rounded-2xl bg-white border border-[#D0E4FA] text-xs sm:text-sm text-slate-700 shadow-[0_8px_20px_rgba(14,58,115,0.06)] mt-6">
          <div className="flex items-center gap-1.5 font-bold text-[#0052D4]">
            <Calendar className="w-4 h-4 text-[#0052D4]" />
            <span>Annual Contracts Available</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-slate-600 font-medium">
            Special On-Demand Duties <strong className="text-[#0A192F] font-bold">(1 Day to 1 Month)</strong> Supported
          </span>
        </div>

        {/* Centered 3D CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-3 group"
          >
            <span>Book Staff / Get a Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-bold clay-btn-secondary flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Services</span>
            <span className="w-2 h-2 rounded-full bg-[#0052D4] group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* 4 Balanced 3D Trust Cards */}
        <div className="pt-10 mt-10 w-full max-w-4xl border-t border-[#D0E4FA]/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="clay-card-hero p-4 flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full icon-sphere-pixar flex items-center justify-center mb-2.5 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0A192F]">100% Vetted Staff</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Verified credentials</div>
          </div>

          <div className="clay-card-hero p-4 flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full icon-sphere-pixar flex items-center justify-center mb-2.5 shadow-sm">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0A192F]">Rapid Deployment</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Quick shift mobilization</div>
          </div>

          <div className="clay-card-hero p-4 flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full icon-sphere-pixar flex items-center justify-center mb-2.5 shadow-sm">
              <Headset className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0A192F]">24/7 Operations</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Round-the-clock support</div>
          </div>

          <div className="clay-card-hero p-4 flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full icon-sphere-pixar flex items-center justify-center mb-2.5 shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0A192F]">Flexible Contracts</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Annual & short-term</div>
          </div>
        </div>

      </div>
    </section>
  );
};
