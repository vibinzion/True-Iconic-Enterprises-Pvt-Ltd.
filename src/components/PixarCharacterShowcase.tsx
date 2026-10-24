import React from 'react';

export const PixarCharacterShowcase: React.FC = () => {
  const characters = [
    {
      role: 'Janitorial Specialist',
      title: 'Trained Housekeeping Steward',
      attire: 'Teal uniform with inspection clipboard',
      avatar: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
      badgeColor: 'border-teal-400 bg-teal-50 text-teal-800',
      badgeText: 'Hygienic Care',
      gradient: 'from-teal-500 to-cyan-600',
      tag: 'Sanitation Pro',
      emojiIcon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Sparkles.png'
    },
    {
      role: 'Operations Director',
      title: 'Business Manager',
      attire: 'Tailored navy suit & silk tie',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      badgeColor: 'border-blue-400 bg-blue-50 text-blue-900',
      badgeText: 'Executive Lead',
      gradient: 'from-blue-600 to-tie-navy-800',
      tag: 'Account Manager',
      featured: true,
      emojiIcon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Briefcase.png'
    },
    {
      role: 'Chief Technical Lead',
      title: 'Certified Engineer & Technician',
      attire: 'Orange safety vest & white safety helmet',
      avatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
      badgeColor: 'border-amber-400 bg-amber-50 text-amber-900',
      badgeText: 'Safety First',
      gradient: 'from-amber-500 to-orange-600',
      tag: 'Master Technician',
      emojiIcon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png'
    },
    {
      role: 'Client Relations Head',
      title: 'Corporate Executive',
      attire: 'Navy corporate blazer & lanyard',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      badgeColor: 'border-sky-400 bg-sky-50 text-sky-900',
      badgeText: 'Client Care',
      gradient: 'from-sky-500 to-blue-600',
      tag: 'Front Office Lead',
      emojiIcon: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png'
    },
  ];

  return (
    <div className="relative w-full py-6">
      {/* 4 Pixar-Style Character Cards in Studio Stage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {characters.map((char, index) => (
          <div
            key={index}
            className={`clay-card-white p-5 flex flex-col items-center text-center relative group hover:border-sky-400 hover:shadow-clay-studio-hover transition-all duration-300 ${
              char.featured ? 'border-2 border-blue-400 ring-4 ring-blue-500/10' : ''
            }`}
          >
            {/* Top 3D Floating Mini Badge */}
            <div className="absolute -top-3.5 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm border flex items-center gap-1.5 bg-white">
              <img src={char.emojiIcon} alt="" className="w-3.5 h-3.5 object-contain" />
              <span className="text-slate-800">{char.badgeText}</span>
            </div>

            {/* 3D Character Avatar Circle with Studio Lighting */}
            <div className="relative mt-2 mb-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-sky-200 via-white to-blue-300 shadow-clay-circle flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-inner">
                  <img
                    src={char.avatar}
                    alt={char.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Status Pill */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">
                ✓
              </div>
            </div>

            {/* Character Info */}
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-tie-blue mb-1">
              {char.role}
            </span>

            <h4 className="text-base font-extrabold font-['Outfit'] text-tie-navy-800 mb-1 leading-snug">
              {char.title}
            </h4>

            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {char.attire}
            </p>

            {/* Bottom Tag */}
            <div className="mt-auto pt-3 border-t border-slate-100 w-full flex items-center justify-center">
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                100% Vetted & Certified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
