import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCatalog, onOpenRFQ }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8DED8] bg-[#174D3B] text-[#EEF1EB] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand & Overview */}
          <div className="lg:col-span-2">
            <a href="#hero" className="text-2xl font-serif-luxury font-semibold text-white tracking-tight">
              SebbyLogistics
            </a>
            <p className="mt-4 text-xs text-[#EEF1EB]/80 leading-relaxed font-sans-clean max-w-sm">
              Sourcing and exporting high-altitude fresh cut flowers and horticulture produce from Kenya to international wholesale markets, auction houses, and commercial distributors.
            </p>
            <div className="mt-6 text-xs text-[#C6A15B] font-data font-medium">
              Export Operations Desk · JKIA Cargo Zone, Nairobi
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-4">
              Products
            </div>
            <ul className="space-y-2.5 text-xs text-[#EEF1EB]/80">
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">T-Hybrid Cut Roses</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">Multi-Head Spray Roses</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">Gypsophila & Fillers</a>
              </li>
              <li>
                <a href="#horticulture" className="hover:text-white transition-colors">Export Hass Avocados</a>
              </li>
              <li>
                <a href="#horticulture" className="hover:text-white transition-colors">Fresh Culinary Herbs</a>
              </li>
            </ul>
          </div>

          {/* Logistics & Journey */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-4">
              Logistics & Ports
            </div>
            <ul className="space-y-2.5 text-xs text-[#EEF1EB]/80">
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Export Journey</a>
              </li>
              <li>
                <a href="#why-kenya" className="hover:text-white transition-colors">Why Kenya</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">Quality Standards</a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">Amsterdam Schiphol (AMS)</a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">London Heathrow (LHR)</a>
              </li>
            </ul>
          </div>

          {/* Commercial & Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-4">
              Commercial Desk
            </div>
            <ul className="space-y-2.5 text-xs text-[#EEF1EB]/80">
              <li>
                <button onClick={onOpenRFQ} className="hover:text-white transition-colors text-left">
                  Request Rate Card (RFQ)
                </button>
              </li>
              <li>
                <button onClick={onOpenCatalog} className="hover:text-white transition-colors text-left flex items-center gap-1.5">
                  <FileText className="h-3 w-3 text-[#C6A15B]" />
                  Product Spec Sheets
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">JKIA Airside Office</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Regional Packhouse Desk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEF1EB]/70 font-sans-clean">
          <div>
            © {new Date().getFullYear()} SebbyLogistics Kenya. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-data">Nairobi · JKIA Cargo Staging Area</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C6A15B] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
