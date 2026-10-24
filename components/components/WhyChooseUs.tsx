import React from 'react';
import { CORE_STRENGTHS } from '../data/strengths';
import { 
  Users, 
  Settings, 
  Clock, 
  ShieldCheck, 
  Coins, 
  Handshake, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onQuoteClick }) => {
  const getStrengthIcon = (name: string) => {
    switch (name) {
      case 'Users': return Users;
      case 'Settings': return Settings;
      case 'Clock': return Clock;
      case 'ShieldCheck': return ShieldCheck;
      case 'Coins': return Coins;
      case 'Handshake': return Handshake;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>The TIE Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">Us?</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Our unwavering commitment to operational excellence, rigorous standards, and customer-first execution sets us apart.
          </p>
        </div>

        {/* 6 3D Feature Blocks in Hero White Clay Style with Floating Blue Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CORE_STRENGTHS.map((strength, index) => {
            const Icon = getStrengthIcon(strength.iconName);
            return (
              <div
                key={index}
                className="clay-card-hero p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Floating 3D Blue Circular Badge */}
                    <div className="w-16 h-16 rounded-full icon-sphere-pixar flex-shrink-0 shadow-md">
                      <Icon className="w-8 h-8 text-white stroke-[2.2]" />
                    </div>
                    
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#EBF4FF] text-[#0052D4] border border-[#D0E4FA] uppercase tracking-wider">
                      {strength.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-['Outfit'] text-[#0A192F] mb-3 group-hover:text-[#0052D4] transition-colors leading-snug">
                    {strength.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EEF4FA] flex items-center gap-2 text-xs font-bold text-[#0052D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#0052D4]" />
                  <span>Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner: Sleek Rounded-3xl Royal-Blue-to-Deep-Navy 3D Gradient Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border-2 border-sky-400/40 shadow-2xl bg-gradient-to-r from-[#0A2246] via-[#0052D4] to-[#0088CC] text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Floating Badges on the Edges */}
          <div className="hidden lg:block absolute -top-3 left-10 z-20 clay-badge-pixar w-12 h-12 animate-float">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0052D4] to-[#00A8E8] flex items-center justify-center text-white">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-3 right-12 z-20 clay-badge-pixar w-12 h-12 animate-float-slow">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0D254C] to-[#0052D4] flex items-center justify-center text-white">
              <Handshake className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#38BDF8]">
                Strategic Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Outfit'] text-white">
                "Let’s Work Together — <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-300 to-white">Your business is unique, so are our solutions."</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-200">
                Partner with True Iconic Enterprises for transparent, dependable, and high-performance workforce and facility management.
              </p>
            </div>

            {/* Glossy White/Cyan 3D Button */}
            <button
              onClick={onQuoteClick}
              className="px-8 py-4 rounded-full text-sm font-extrabold text-[#0A2246] uppercase tracking-wider bg-white hover:bg-[#EEF4FA] shadow-[0_12px_28px_rgba(0,0,0,0.25)] border-2 border-white/80 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 flex-shrink-0 group"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0052D4] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
