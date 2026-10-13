import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { TrustStatsSection } from './components/TrustStatsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  const handleOpenRFQ = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#4F5752] selection:bg-[#174D3B] selection:text-white relative">
      {/* Dynamic Header with Transparent Top & Sleek Scrolled State */}
      <Header
        onOpenCatalog={() => setCatalogModalOpen(true)}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Floating WhatsApp Widget Sticky Across All Pages */}
      <FloatingWhatsApp />

      <main id="main-content">
        {/* 1. Cinematic Hero Section with Storytelling Slideshow */}
        <HeroVideo onOpenRFQ={handleOpenRFQ} />

        {/* 2. Trust / Statistics Section */}
        <TrustStatsSection />

        {/* 3. About Us Section */}
        <AboutUsSection />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 5. Official Contact & Cargo Dispatch Desk */}
        <ContactSection />
      </main>

      {/* Footer with Kenya Flag Artwork Watermark & Social Icons */}
      <Footer
        onOpenCatalog={() => setCatalogModalOpen(true)}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Comprehensive Product Catalog Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        onOpenRFQ={handleOpenRFQ}
      />
    </div>
  );
}
