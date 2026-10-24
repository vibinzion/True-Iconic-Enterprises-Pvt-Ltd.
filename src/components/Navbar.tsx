import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Staffing Roles', href: '#staffing' },
    { label: 'Contract Model', href: '#contract-model' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-tie-navy-900/95 backdrop-blur-xl border-b border-tie-blue/40 shadow-[0_10px_30px_rgba(10,25,47,0.4)]'
          : 'py-4 bg-tie-navy-900/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: TIE Logo + Company Name + Tagline */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 shadow-md flex items-center justify-center border-2 border-tie-sky/40 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/tie-logo.png"
                  alt="True Iconic Enterprises Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-tie-sky rounded-full animate-ping opacity-75" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-sm sm:text-base md:text-lg tracking-wider text-white font-['Outfit'] group-hover:text-tie-sky transition-colors">
                TRUE ICONIC <span className="text-tie-sky">ENTERPRISES</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest uppercase">
                  (Pvt) Ltd.
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-tie-sky" />
                <span className="hidden sm:inline-block text-[11px] text-sky-200 font-medium italic">
                  "Service with Excellence."
                </span>
              </div>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 bg-white/10 p-1.5 rounded-full border border-white/15 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/15 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA + Reg Badge */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Registration Badge in Royal Blue & Glossy White */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-sky-400/30 text-[11px] font-bold text-white shadow-inner">
              <Shield className="w-3.5 h-3.5 text-tie-sky" />
              <span>SECP No: <strong className="text-white font-mono">0359617</strong></span>
            </div>

            {/* 3D Glossy Get a Quote Button */}
            <button
              onClick={onQuoteClick}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white uppercase tracking-wider clay-btn-blue group"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onQuoteClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-[11px] font-extrabold text-white uppercase clay-btn-blue"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-tie-navy-900/98 backdrop-blur-2xl border-b border-tie-blue/40 px-6 py-6 transition-all">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Shield className="w-4 h-4 text-tie-sky" />
              <span>SECP No: <strong className="text-white font-mono">0359617</strong></span>
            </div>
            <a
              href="tel:03212350012"
              className="text-xs text-sky-300 font-bold hover:text-white"
            >
              03212350012
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-tie-sky transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full py-3 rounded-2xl text-center text-sm font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn"
            >
              Get a Quote / Book Staff
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
