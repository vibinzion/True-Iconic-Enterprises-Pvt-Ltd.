import React from 'react';
import { 
  Building, 
  Award, 
  Target, 
  Compass, 
  Handshake, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Integrity',
      subtitle: 'Transparent & Honest',
      icon: Handshake,
      badge: 'Unwavering Ethics',
    },
    {
      title: 'Quality',
      subtitle: 'Highest Standards',
      icon: ShieldCheck,
      badge: 'Certified Delivery',
    },
    {
      title: 'Customer Satisfaction',
      subtitle: 'Client First Always',
      icon: Users,
      badge: 'Value Focused',
    },
    {
      title: 'Continuous Improvement',
      subtitle: 'Adaptive Excellence',
      icon: TrendingUp,
      badge: 'Constant Growth',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>Corporate Heritage & Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">True Iconic Enterprises</span>
          </h2>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
            <Building className="w-4 h-4 text-[#0052D4]" />
            <span>SECP No:</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-white border border-[#D0E4FA] text-[#0A192F] font-mono font-bold shadow-sm">
              0359617
            </span>
          </div>
        </div>

        {/* Symmetrical 2-Column Layout Without Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column (7 Columns): Main About Description Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="clay-card-hero p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden group">
              {/* Corner 3D Badge */}
              <div className="absolute top-6 right-6 clay-badge-pixar hidden sm:flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-[#0052D4]" />
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold uppercase tracking-widest text-[#0052D4]">
                  Service Provider of Choice
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  "<strong className="text-[#0A192F] font-bold">True Iconic Enterprises Pvt Limited</strong> is a trusted and reliable service provider, dedicated to supporting businesses with professional and efficient solutions. We specialize in manpower, facility management, logistics, and general support services to help our clients achieve their goals with ease and confidence. With a focus on quality, commitment, and customized solutions that meet the unique needs of every business, big or small."
                </p>

                {/* Key Pillars Chips */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-[#D0E4FA] text-xs font-semibold text-[#0052D4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D4]" /> SECP No: 0359617
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-[#D0E4FA] text-xs font-semibold text-[#0052D4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D4]" /> Rapid Deployment
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-[#D0E4FA] text-xs font-semibold text-[#0052D4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D4]" /> Verified Quality Standards
                  </span>
                </div>
              </div>

              {/* Tagline Footer Bar */}
              <div className="pt-6 mt-6 border-t border-[#E2ECF7] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-0.5 w-8 bg-gradient-to-r from-transparent to-[#0052D4]" />
                  <span className="text-xs uppercase tracking-widest text-[#0052D4] font-extrabold">Service with Excellence</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Building a Better Tomorrow Together
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 Columns): Our Mission & Our Vision Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Mission Card */}
            <div className="clay-card-hero p-7 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full icon-sphere-pixar flex-shrink-0 shadow-md">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-extrabold uppercase tracking-widest text-[#0052D4] border border-blue-200">
                    Our Purpose
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-[#0A192F]">Our Mission</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    "To provide reliable, high-quality customer satisfaction, and services that create value for our clients, employees, and society."
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="clay-card-hero p-7 flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full icon-sphere-pixar flex-shrink-0 shadow-md">
                  <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-extrabold uppercase tracking-widest text-[#0052D4] border border-blue-200">
                    Our Destination
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-[#0A192F]">Our Vision</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    "To become a leading service provider in the region, known for excellence, integrity, and long-term partnerships."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Principles Cards (With Bottom Blue Gradient Accent Bar) */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-[#0A192F]">
              Core Principles Guiding Every Operation
            </h3>
            <p className="text-sm text-slate-500 mt-1">Foundational tenets woven into every client contract</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="clay-card-hero p-7 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  {/* Subtle Blue Gradient Bottom Accent Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0052D4] via-[#00A8E8] to-[#38BDF8]" />

                  {/* Large Glossy 3D Royal-Blue & Cyan Circular Badge */}
                  <div className="w-16 h-16 rounded-full icon-sphere-pixar mb-5 shadow-lg">
                    <Icon className="w-8 h-8 text-white stroke-[2.2]" />
                  </div>
                  
                  <span className="text-[10px] font-extrabold tracking-wider uppercase mb-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-[#0052D4] border border-blue-200">
                    {value.badge}
                  </span>
                  <h4 className="text-lg font-black text-[#0A192F] mb-1 font-['Outfit']">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {value.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
