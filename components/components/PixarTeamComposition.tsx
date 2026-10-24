import React from 'react';
import { ShieldCheck, Clock, Settings, Handshake, CheckSquare, MapPin } from 'lucide-react';

export const PixarTeamComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
      
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-tie-blue/20 via-sky-400/15 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

      {/* Main 3D Card Stage with Pixar Characters */}
      <div className="relative z-10 w-full rounded-3xl overflow-hidden bg-white border-2 border-tie-ice-300/80 shadow-[0_25px_60px_-15px_rgba(13,37,76,0.18)] p-2 sm:p-3">
        
        {/* The Pixar Team Image */}
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[9/14] sm:aspect-[4/5] bg-gradient-to-b from-slate-100 to-tie-ice-100">
          <img
            src="/tie-pixar-team.jpg"
            alt="True Iconic Enterprises 3D Pixar Operations Team"
            className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Bottom Gradient Fade for Prestige Branding */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-tie-navy-900/90 via-tie-navy-900/40 to-transparent flex items-end p-4 sm:p-5">
            <div className="w-full flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-tie-sky block">
                  100% Vetted Personnel
                </span>
                <span className="text-sm sm:text-base font-extrabold font-['Outfit'] block">
                  Enterprise Operations Team
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-[11px] font-bold">
                SECP No: 0359617
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating 3D Royal Blue & Glossy White Badges (Matching Reference Poster Exactly) */}

      {/* 1. Gear (Customized Solutions) - Top Left */}
      <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 z-20 clay-badge-pixar w-12 h-12 sm:w-14 sm:h-14 animate-float">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-tie-blue to-tie-navy-800 flex items-center justify-center text-white shadow-sm">
          <Settings className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* 2. Shield Check (Verified Quality) - Top Right */}
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 clay-badge-pixar w-12 h-12 sm:w-14 sm:h-14 animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-tie-blue to-sky-500 flex items-center justify-center text-white shadow-sm">
          <ShieldCheck className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* 3. Clock (Guaranteed Punctuality) - Center Right */}
      <div className="absolute top-1/3 -right-5 sm:-right-6 z-20 clay-badge-pixar w-11 h-11 sm:w-13 sm:h-13 animate-float">
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-tie-blue to-tie-navy-800 flex items-center justify-center text-white shadow-sm">
          <Clock className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* 4. Handshake (Integrity & Long-Term Trust) - Bottom Left */}
      <div className="absolute bottom-16 -left-5 sm:-left-6 z-20 clay-badge-pixar w-12 h-12 sm:w-14 sm:h-14 animate-float-slow">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-tie-navy-800 to-tie-blue flex items-center justify-center text-white shadow-sm">
          <Handshake className="w-4 h-4 text-sky-200" />
        </div>
      </div>

      {/* 5. Checklist (Turnkey Standards) - Bottom Right */}
      <div className="absolute -bottom-3 right-6 sm:-bottom-4 sm:right-10 z-20 clay-badge-pixar w-11 h-11 sm:w-12 sm:h-12 animate-float">
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-tie-blue flex items-center justify-center text-white shadow-sm">
          <CheckSquare className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* 6. Map Pin (Sahiwal & Nationwide) - Center Left */}
      <div className="absolute top-1/2 -left-4 sm:-left-5 z-20 clay-badge-pixar w-10 h-10 sm:w-11 sm:h-11 animate-float-slow">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-tie-navy-800 to-tie-blue flex items-center justify-center text-white shadow-sm">
          <MapPin className="w-3 h-3 text-white" />
        </div>
      </div>

    </div>
  );
};
