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
import { scrollToElement } from './utils/scroll';

export default function App() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  const handleOpenRFQ = () => {
    scrollToElement('quote');
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#4F5752] selection:bg-[#174D3B] selection:text-white relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-[#174D3B]">
        Skip to main content
      </a>
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

        {/* 5. Official Contact & Cargo Dispatch Desk (quote form on top) */}
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
