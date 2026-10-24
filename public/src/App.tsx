import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ContractModel } from './components/ContractModel';
import { Services } from './components/Services';
import { StaffingDirectory } from './components/StaffingDirectory';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { TIEAgentChat } from './components/TIEAgentChat';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Manpower & Workforce Solutions');

  const scrollToQuote = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToQuote();
  };

  const handleSelectRole = (roleTitle: string) => {
    setSelectedService(roleTitle);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-tie-navy-950 text-slate-100 flex flex-col relative selection:bg-tie-cyan selection:text-tie-navy-950">
      {/* Navigation */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onQuoteClick={scrollToQuote} 
          onExploreClick={scrollToServices} 
        />

        {/* Flexible Engagement & Contract Model Banner */}
        <ContractModel onQuoteClick={scrollToQuote} />

        {/* About Us, Mission, Vision & Core Values */}
        <About />

        {/* Our Core Services (8 Interactive 3D Cards) */}
        <Services onSelectService={handleSelectService} />

        {/* Dedicated Staffing Directory (Filterable Grid) */}
        <StaffingDirectory onSelectRole={handleSelectRole} />

        {/* Why Choose Us (6 3D Feature Blocks) */}
        <WhyChooseUs onQuoteClick={scrollToQuote} />

        {/* Interactive "Get a Quote / Book Staff" WhatsApp Form & Contact */}
        <QuoteForm selectedServicePreset={selectedService} />
      </main>

      {/* Footer */}
      <Footer onQuoteClick={scrollToQuote} />

      {/* Floating 3D TIE Agent AI Chatbot Button */}
      <TIEAgentChat />
    </div>
  );
}

export default App;
