import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { FormData } from '../types';

interface QuoteFormProps {
  selectedServicePreset?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    organization: '',
    phone: '',
    category: 'Manpower & Workforce Solutions',
    duration: 'Annual Contract',
    staffCount: '1-5 Staff',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({
        ...prev,
        category: selectedServicePreset,
      }));
    }
  }, [selectedServicePreset]);

  const serviceCategories = [
    // 8 Core Services
    'Manpower & Workforce Solutions',
    'Janitorial & Housekeeping Services',
    'Facility Management',
    'Transport & Logistics',
    'Warehousing',
    'Civil Work & Maintenance',
    'Packing, Loading & Unloading',
    'General Order Supplies',
    // Staffing Roles
    'Corporate - Administrative Staff',
    'Corporate - Receptionist',
    'Corporate - Clerk & Data Operator',
    'Corporate - Customer Service Rep',
    'Janitorial - Office Sweeper / Cleaner',
    'Janitorial - Housekeeping Attendant',
    'Technical - Certified Electrician',
    'Technical - Expert Plumber',
    'Technical - HVAC & AC Technician',
    'Hospitality - Retail Sales Staff',
    'Hospitality - Event Support Crew',
    'Hospitality - Cook / Chef',
    'General - Professional Driver',
    'General - Office Peon / Runner',
    'General - Gardener',
    'General - Domestic Support',
    'Specialized - Qualified Teacher',
    'Specialized - Lab Attendant',
    'Specialized - Trained Nurse / Caregiver',
  ];

  const durationOptions = [
    'Annual Contract',
    'Special Duty - 1 Day',
    'Special Duty - Weekly/Monthly',
    'Custom Requirement',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide your Full Name and Phone / WhatsApp Number.');
      return;
    }

    // Build formatted message for WhatsApp
    const message = `*NEW INQUIRY - TRUE ICONIC ENTERPRISES (PVT) LTD.*
-----------------------------------
📋 *Client Name:* ${formData.fullName}
🏢 *Organization/Home:* ${formData.organization || 'Individual / Private Client'}
📱 *Phone / WhatsApp:* ${formData.phone}
🛠️ *Requested Service/Role:* ${formData.category}
⏱️ *Requirement Type:* ${formData.duration}
👥 *Estimated Staff Count:* ${formData.staffCount}
📝 *Project Details:* ${formData.details || 'None provided'}
-----------------------------------
_Sent via official corporate portal (SECP No: 0359617)_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923212350012?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#EEF4FA] via-[#F5F9FF] to-[#E6F0FA] overflow-hidden">
      {/* Soft Ambient Ice-Blue Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D0E4FA] text-xs font-bold text-[#0A192F] tracking-wider uppercase shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#0052D4]" />
            <span>Direct WhatsApp Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-[#0A192F]">
            Get a Quote / <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D4] to-[#00A8E8]">Book Staff</span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Fill in your requirements below for an instant quotation directly via WhatsApp with our executive operational team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Card (7 Columns) - Premium White 3D Claymorphic Container */}
          <div className="lg:col-span-7">
            <div className="clay-card-hero p-7 sm:p-10 border-2 border-[#D0E4FA]">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#EEF4FA]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-extrabold text-[#0A192F] uppercase tracking-wider">
                    Operational Team Active Now
                  </span>
                </div>
                <span className="text-xs text-[#0052D4] font-bold">Response time &lt; 15 mins</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Full Name <span className="text-[#0052D4]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Company / Organization / Home Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nexus Textiles / Private Residence"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone & Service Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Phone / WhatsApp Number <span className="text-[#0052D4]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03212350012"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Select Service / Staff Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium cursor-pointer"
                    >
                      {serviceCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Requirement Duration & Staff Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Requirement Duration / Type
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium cursor-pointer"
                    >
                      {durationOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 tracking-wide">
                      Estimated Number of Staff
                    </label>
                    <select
                      value={formData.staffCount}
                      onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all font-medium cursor-pointer"
                    >
                      <option value="1-2 Staff">1 - 2 Staff Members</option>
                      <option value="3-5 Staff">3 - 5 Staff Members</option>
                      <option value="6-15 Staff">6 - 15 Staff Members</option>
                      <option value="15+ Enterprise Team">15+ Enterprise Team</option>
                      <option value="Equipment & Supplies Only">Supplies & Equipment Only</option>
                    </select>
                  </div>
                </div>

                {/* Details Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 tracking-wide">
                    Project Details & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your schedule, location, or specialized skills required..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F4F8FD] border border-[#D0E4FA] focus:border-[#0052D4] focus:ring-2 focus:ring-[#0052D4]/20 text-slate-800 text-sm outline-none transition-all resize-none font-medium"
                  />
                </div>

                {/* Submit to WhatsApp Button Matching Hero CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-sm font-extrabold text-white uppercase tracking-wider clay-btn-blue shadow-clay-btn flex items-center justify-center gap-3 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Send Quotation Request via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span>WhatsApp chat opened! If the tab was blocked, please click above to proceed.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Direct Contact Details Cards (5 Columns) - Matching White 3D Claymorphic Cards with Exact Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Corporate Registration Hero Card */}
            <div className="clay-card-hero p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl icon-sphere-pixar flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#0052D4] uppercase tracking-wider">
                    Government Registered Entity
                  </div>
                  <div className="text-base font-black text-[#0A192F] font-['Outfit']">
                    SECP No: <span className="font-mono text-[#0052D4]">0359617</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Official corporate registration in Pakistan. Backed by legally binding contracts, standard tax documentation, and full commercial compliance.
              </p>
            </div>

            {/* 1. Call & WhatsApp Quick-Desk Card */}
            <a
              href="https://wa.me/923212350012"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card-hero p-6 flex items-start justify-between gap-4 cursor-pointer group block transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full icon-sphere-pixar flex-shrink-0">
                  <Phone className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-[#0052D4] tracking-wider uppercase bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Call & WhatsApp Quick-Desk
                  </span>
                  <div className="text-lg font-black text-[#0A192F] group-hover:text-[#0052D4] transition-colors">
                    03212350012
                  </div>
                  <p className="text-xs text-slate-600">
                    Instant response for quotes, urgent staffing replacements, and contract consultations.
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052D4] group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* 2. Official Email Inquiries Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=trueiconic.ent@gmail.com&su=Service%20Inquiry%20-%20True%20Iconic%20Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card-hero p-6 flex items-start justify-between gap-4 cursor-pointer group block transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full icon-sphere-pixar flex-shrink-0">
                  <Mail className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-[#0052D4] tracking-wider uppercase bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Official Email Inquiries
                  </span>
                  <div className="text-base font-black text-[#0A192F] group-hover:text-[#0052D4] transition-colors break-all">
                    trueiconic.ent@gmail.com
                  </div>
                  <p className="text-xs text-slate-600">
                    Open Gmail compose with our email and inquiry subject pre-filled.
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052D4] group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* 3. Head Office Location Card */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Super+Market+Plaza+Church+Road,+Sahiwal"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card-hero p-6 flex items-start justify-between gap-4 cursor-pointer group block transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full icon-sphere-pixar flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold text-[#0052D4] tracking-wider uppercase bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Head Office Location
                  </span>
                  <div className="text-sm font-black text-[#0A192F] leading-snug group-hover:text-[#0052D4] transition-colors">
                    Office No. 43, 1st Floor, Super Market, Church Road, Sahiwal
                  </div>
                  <p className="text-xs text-slate-600">
                    Click to open exact Google Maps location (Church Road, Sahiwal, Punjab).
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052D4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052D4] group-hover:text-white transition-colors">
                <Navigation className="w-4 h-4" />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
