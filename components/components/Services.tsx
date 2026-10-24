import React from 'react';
import { CORE_SERVICES } from '../data/services';
import { 
  Users, 
  Sparkles, 
  Building2, 
  Truck, 
  Warehouse, 
  Wrench, 
  PackageCheck, 
  Boxes, 
  ArrowRight, 
  Check 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return Users;
      case 'Sparkles': return Sparkles;
      case 'Building2': return Building2;
      case 'Truck': return Truck;
      case 'Warehouse': return Warehouse;
      case 'Wrench': return Wrench;
      case 'PackageCheck': return PackageCheck;
      case 'Boxes': return Boxes;
      default: return Users;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>Enterprise Service Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">Services</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Comprehensive corporate support infrastructure designed to optimize facilities, supply chains, and manpower deployment across Pakistan.
          </p>
        </div>

        {/* 8 Interactive 3D Feature Cards (Top Banner Header + Bottom Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch">
          {CORE_SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="clay-card-hero flex flex-col justify-between group overflow-hidden relative"
              >
                <div>
                  {/* Top Half: Illustrated Banner Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-b from-slate-100 to-[#E2ECF7]">
                    <img
                      src={service.headerImg}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Soft Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category Role Badge on Top Right */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-extrabold text-[#0052D4] shadow-sm uppercase tracking-wider">
                      {service.badge}
                    </div>

                    {/* Floating 3D Blue-and-White Circular Badge Overlapping Corner */}
                    <div className="absolute -bottom-5 left-4 z-20 clay-badge-pixar w-12 h-12 shadow-md">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0052D4] to-[#00A8E8] flex items-center justify-center text-white shadow-sm">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Half: Content Body */}
                  <div className="p-6 pt-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052D4] block mb-1">
                      {service.characterRole}
                    </span>

                    <h3 className="text-xl font-black font-['Outfit'] text-[#0A192F] mb-2 group-hover:text-[#0052D4] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Service Bullet Points with Glossy Blue 3D Checkmark Badges */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-[#EEF4FA]">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#EBF4FF] text-[#0052D4] flex items-center justify-center flex-shrink-0 border border-[#D0E4FA]">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-xs text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Full-Width Glossy Royal-Blue 3D "Book This Service" Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-full text-xs font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-2 group/btn transition-all"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
