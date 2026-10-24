import React from 'react';
import { Check, ArrowRight, Sparkles, CalendarRange, Zap } from 'lucide-react';

interface ContractModelProps {
  onQuoteClick: () => void;
}

export const ContractModel: React.FC<ContractModelProps> = ({ onQuoteClick }) => {
  return (
    <section id="contract-model" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>Unmatched Operational Agility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            Flexible Engagement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">Contract Model</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Whether you require a dedicated enterprise workforce for 365 days or a specialized technician for 24 hours, our contracting framework scales seamlessly to your needs.
          </p>
        </div>

        {/* 2 Column Elevated 3D White Claymorphic Cards Matching Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Annual Corporate Contracts */}
          <div className="clay-card-hero p-8 sm:p-10 flex flex-col justify-between relative group overflow-hidden">
            
            {/* Top Glossy Royal-Blue 3D Header Bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#0D254C] via-[#0052D4] to-[#38BDF8]" />

            {/* Corner Badge */}
            <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl bg-gradient-to-r from-[#0D254C] to-[#0052D4] text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
              Most Popular
            </div>

            {/* Floating 3D Blue-and-White Circular Badge on the Corner */}
            <div className="absolute -top-3 -left-3 z-20 clay-badge-pixar w-14 h-14 animate-float">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0052D4] to-[#00A8E8] flex items-center justify-center text-white shadow-sm">
                <CalendarRange className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
            </div>

            <div className="pt-4">
              <div className="space-y-2 mt-4">
                <span className="text-xs font-extrabold text-[#0052D4] tracking-wider uppercase">
                  Long-Term Operational Stability
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-[#0A192F]">
                  Annual Corporate Contracts
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Comprehensive year-round staffing, facility management, and operational outsourcing tailored for businesses, corporate institutions, educational campuses, and residential setups.
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="mt-8 pt-6 border-t border-[#EEF4FA] space-y-3.5">
                {[
                  'Dedicated workforce teams with guaranteed daily headcounts',
                  'Proactive supervision and single-point account management',
                  'Immediate replacements for sick leave or sudden absenteeism',
                  'Predictable operational budget with custom invoice billing',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EBF4FF] text-[#0052D4] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D0E4FA]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onQuoteClick}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-2 group"
              >
                <span>Request Annual Contract Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Special Duties & Short-Term Deployment */}
          <div className="clay-card-hero p-8 sm:p-10 flex flex-col justify-between relative group overflow-hidden">
            
            {/* Top Glossy Royal-Blue 3D Header Bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#0052D4] via-[#00A8E8] to-[#38BDF8]" />

            {/* Corner Badge */}
            <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl bg-gradient-to-r from-[#0052D4] to-[#00A8E8] text-[11px] font-extrabold uppercase tracking-widest text-white shadow-md">
              On-Demand Agility
            </div>

            {/* Floating 3D Blue-and-White Circular Badge on the Corner */}
            <div className="absolute -top-3 -left-3 z-20 clay-badge-pixar w-14 h-14 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0052D4] to-[#00A8E8] flex items-center justify-center text-white shadow-sm">
                <Zap className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
            </div>

            <div className="pt-4">
              <div className="space-y-2 mt-4">
                <span className="text-xs font-extrabold text-[#0052D4] tracking-wider uppercase">
                  Rapid Deployment Framework
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-[#0A192F]">
                  Special Duties & Short-Term Deployment
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#EBF4FF] border border-[#D0E4FA] text-xs font-bold text-[#0052D4]">
                  Duration: 1 Day to 1 Month
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Need a worker or specialized staff for a single day, a special event, urgent maintenance, or a 1-month project? Under our annual contract framework, we deploy trained professionals for special duties of any duration!
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="mt-8 pt-6 border-t border-[#EEF4FA] space-y-3.5">
                {[
                  'Deploy on 24-hour notice for emergency maintenance or events',
                  'Flexible shifts: Single day, weekend rush, or multi-week assignments',
                  'Zero hiring overheads or long-term employee liability',
                  'All personnel are fully vetted, equipped, and job-ready',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EBF4FF] text-[#0052D4] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D0E4FA]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onQuoteClick}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-2 group"
              >
                <span>Book Special Duty Staff Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
