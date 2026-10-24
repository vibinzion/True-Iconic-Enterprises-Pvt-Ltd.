import React, { useState } from 'react';
import { STAFFING_CATEGORIES } from '../data/staffing';
import { 
  CheckCircle, 
  ArrowRight, 
  UserCheck, 
  Briefcase, 
  Sparkles, 
  Wrench, 
  Utensils, 
  Home, 
  GraduationCap 
} from 'lucide-react';

interface StaffingDirectoryProps {
  onSelectRole: (roleTitle: string) => void;
}

export const StaffingDirectory: React.FC<StaffingDirectoryProps> = ({ onSelectRole }) => {
  const [activeTab, setActiveTab] = useState<string>(STAFFING_CATEGORIES[0].id);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return Briefcase;
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      case 'Utensils': return Utensils;
      case 'Home': return Home;
      case 'GraduationCap': return GraduationCap;
      default: return Briefcase;
    }
  };

  const selectedCategory = STAFFING_CATEGORIES.find((cat) => cat.id === activeTab) || STAFFING_CATEGORIES[0];
  const SelectedIcon = getCategoryIcon(selectedCategory.iconName);

  return (
    <section id="staffing" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>Dedicated Human Capital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            Staffing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">Directory</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Browse our categorized roster of verified, background-checked, and skilled professionals ready for short-term duty or long-term corporate deployment.
          </p>
        </div>

        {/* 3D Glossy Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {STAFFING_CATEGORIES.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0D254C] via-[#0052D4] to-[#00A8E8] text-white shadow-clay-btn scale-105 border border-white'
                    : 'bg-white text-slate-700 border-2 border-[#D0E4FA] hover:border-[#0052D4] hover:text-[#0052D4] shadow-sm'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isActive ? 'text-white' : 'text-[#0052D4]'}`}>
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="hidden md:inline">{category.name}</span>
                <span className="md:hidden">{category.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="clay-card-hero p-6 sm:p-7 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full icon-sphere-pixar flex-shrink-0">
              <SelectedIcon className="w-7 h-7 text-white stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#0A192F] font-['Outfit']">
                {selectedCategory.name}
              </h3>
              <p className="text-xs text-slate-600">
                {selectedCategory.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF4FF] border border-[#D0E4FA] text-xs font-bold text-[#0052D4]">
            <CheckCircle className="w-4 h-4 text-[#0052D4]" />
            <span>100% Background Checked</span>
          </div>
        </div>

        {/* Active Roles 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCategory.roles.map((role, idx) => (
            <div
              key={idx}
              className="clay-card-hero p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* 3D Blue Avatar/Role Badge */}
                  <div className="w-10 h-10 rounded-full icon-sphere-pixar flex items-center justify-center text-white">
                    <UserCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  
                  {/* Glowing Green "AVAILABLE" 3D Pill */}
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>

                <h4 className="text-base font-black text-[#0A192F] mb-2 font-['Outfit'] group-hover:text-[#0052D4] transition-colors">
                  {role.title}
                </h4>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {role.description}
                </p>

                {/* Soft Ice-Blue Skill Tags (#E8F2FF with #0052D4 text) */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {role.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#E8F2FF] text-[10px] font-bold text-[#0052D4] border border-[#D0E4FA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glossy Blue "Book This Role" Button */}
              <button
                onClick={() => onSelectRole(`${selectedCategory.name} - ${role.title}`)}
                className="w-full py-2.5 px-3 rounded-full text-xs font-bold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-1.5 group/btn transition-all"
              >
                <span>Book This Role</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
