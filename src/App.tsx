import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { CompanyIntro } from './components/CompanyIntro';
import { FlowerCatalog } from './components/FlowerCatalog';
import { HorticultureSection } from './components/HorticultureSection';
import { ColdChainProcess } from './components/ColdChainProcess';
import { WhyKenyanFlowers } from './components/WhyKenyanFlowers';
import { Certifications } from './components/Certifications';
import { GlobalRoutesMap } from './components/GlobalRoutesMap';
import { WholesaleRFQCalculator } from './components/WholesaleRFQCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';

export default function App() {
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [rfqSelectedVariety, setRfqSelectedVariety] = useState<string | undefined>();
  const [rfqSelectedStemLength, setRfqSelectedStemLength] = useState<string | undefined>();

  const handleOpenRFQ = () => {
    const el = document.getElementById('wholesale');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVarietyForRFQ = (varietyName: string, stemLength?: string) => {
    setRfqSelectedVariety(varietyName);
    if (stemLength) {
      setRfqSelectedStemLength(stemLength);
    }
    const el = document.getElementById('wholesale');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduceForRFQ = (produceName: string) => {
    setRfqSelectedVariety(produceName);
    const el = document.getElementById('wholesale');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#4F5752] selection:bg-[#174D3B] selection:text-white">
      {/* 3-Zone Editorial Top Bar */}
      <Header
        onOpenCatalog={() => setCatalogModalOpen(true)}
        onOpenRFQ={handleOpenRFQ}
      />

      <main id="main-content">
        {/* 1. Cinematic full-width flower/farm video hero */}
        <HeroVideo onOpenRFQ={handleOpenRFQ} />

        {/* 2. Short company introduction */}
        <CompanyIntro />

        {/* 3. Flower portfolio & horticulture line */}
        <FlowerCatalog
          onSelectForRFQ={handleSelectVarietyForRFQ}
          onOpenFullCatalog={() => setCatalogModalOpen(true)}
        />
        <HorticultureSection
          onSelectProductForRFQ={handleSelectProduceForRFQ}
        />

        {/* 4. Farm-to-global-market journey */}
        <ColdChainProcess />

        {/* 5. Why Kenyan flowers */}
        <WhyKenyanFlowers />

        {/* 6. Quality and export process */}
        <Certifications />

        {/* 7. Global markets */}
        <GlobalRoutesMap />

        {/* 8. Final wholesale inquiry CTA & Operations desk */}
        <WholesaleRFQCalculator
          initialVariety={rfqSelectedVariety}
          initialStemLength={rfqSelectedStemLength}
        />
        <ContactSection />
      </main>

      {/* Deep Botanical Green Editorial Footer */}
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
