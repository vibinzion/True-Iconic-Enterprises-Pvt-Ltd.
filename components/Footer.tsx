import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { CORE_SERVICES } from '../data/services';
import { PixarWaveRibbon } from './PixarWaveRibbon';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-tie-navy-950 text-white overflow-hidden">
      {/* 3D Wave Ribbon on top of Footer */}
      <PixarWaveRibbon position="bottom" tagline="Building a Better Tomorrow Together" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md flex items-center justify-center border-2 border-tie-sky/40">
                <img
                  src="/tie-logo.png"
                  alt="True Iconic Enterprises Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <span className="font-black text-base sm:text-lg tracking-wider text-white font-['Outfit'] block">
                  TRUE ICONIC <span className="text-tie-sky">ENTERPRISES</span>
                </span>
                <span className="text-[11px] font-bold text-slate-300 tracking-widest uppercase">
                  (Pvt) Ltd.
                </span>
              </div>
            </div>

            {/* Corporate Registration Hero Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-tie-sky" />
              <span>SECP No: <strong className="text-sky-300 font-mono">0359617</strong></span>
            </div>

            {/* Slogans */}
            <div className="space-y-1 text-sm">
              <p className="text-sky-300 font-bold italic">
                "Service with Excellence."
              </p>
              <p className="text-slate-200 font-medium">
                "Building a Better Tomorrow Together."
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Premier one-window provider of enterprise manpower, comprehensive facility management, warehousing, and logistics solutions across Pakistan.
            </p>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#hero" className="hover:text-tie-sky transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-tie-sky transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-tie-sky transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#staffing" className="hover:text-tie-sky transition-colors">Staffing Roles</a>
              </li>
              <li>
                <a href="#contract-model" className="hover:text-tie-sky transition-colors">Contract Model</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-tie-sky transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tie-sky transition-colors">Contact & Quote</a>
              </li>
            </ul>
          </div>

          {/* Core Services Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {CORE_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-tie-sky transition-colors line-clamp-1">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-['Outfit']">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-200">
              
              {/* Google Maps Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Super+Market+Plaza+Church+Road,+Sahiwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-tie-sky transition-colors group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-tie-sky flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Office No. 43, 1st Floor, Super Market, Church Road, Sahiwal, Pakistan</span>
              </a>

              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/923212350012" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>03212350012</span>
              </a>

              {/* Gmail Compose Link */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=trueiconic.ent@gmail.com&su=Service%20Inquiry%20-%20True%20Iconic%20Enterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-tie-sky transition-colors break-all group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>trueiconic.ent@gmail.com</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn"
              >
                Instant WhatsApp Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">True Iconic Enterprises (Pvt) Ltd.</strong> All rights reserved. | SECP No: 0359617.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 hover:border-sky-400 hover:text-white text-slate-200 transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
