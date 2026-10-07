import React, { useState } from 'react';
import { Menu, X, FileText, ChevronRight, Mail, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCatalog, onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D8DED8] bg-[#F7F6F1]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Zone 1: Single Text Element Brand Wordmark */}
        <a
          href="#hero"
          className="text-2xl font-serif-luxury font-semibold tracking-tight text-[#174D3B] transition-colors hover:text-[#285F4A] flex items-center gap-2"
        >
          <span>SebbyLogistics</span>
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden items-center gap-5 lg:gap-7 xl:gap-8 lg:flex">
          <a
            href="#flowers"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Floral Portfolio
          </a>
          <a
            href="#horticulture"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Horticulture
          </a>
          <a
            href="#journey"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Export Journey
          </a>
          <a
            href="#why-kenya"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Why Kenya
          </a>
          <a
            href="#quality"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Quality
          </a>
          <a
            href="#markets"
            className="text-xs lg:text-sm font-medium text-[#4F5752] transition-colors hover:text-[#174D3B]"
          >
            Global Markets
          </a>
          <a
            href="#contact"
            className="text-xs lg:text-sm font-semibold text-[#174D3B] hover:text-[#285F4A] transition-colors flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]"></span>
            Contact Us
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden items-center gap-2.5 lg:gap-3 md:flex">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide text-[#174D3B] hover:bg-[#EEF1EB] transition-colors border border-[#D8DED8] rounded-md whitespace-nowrap"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[#C6A15B]" />
            Contact Us
          </a>

          <button
            onClick={onOpenCatalog}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium tracking-wide text-[#4F5752] hover:text-[#174D3B] transition-colors hover:bg-[#EEF1EB] border border-[#D8DED8] rounded-md whitespace-nowrap"
          >
            <FileText className="h-3.5 w-3.5 text-[#C6A15B]" />
            Catalog
          </button>

          <button
            onClick={onOpenRFQ}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#174D3B] hover:bg-[#285F4A] transition-colors rounded-md shadow-sm whitespace-nowrap"
          >
            Wholesale RFQ
            <ChevronRight className="h-3.5 w-3.5 text-[#C6A15B]" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#4F5752] hover:text-[#174D3B] md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#D8DED8] bg-[#F7F6F1] px-6 py-6 md:hidden shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3.5">
            <a
              href="#flowers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Floral Portfolio
            </a>
            <a
              href="#horticulture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Fresh Horticulture
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Export Journey
            </a>
            <a
              href="#why-kenya"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Why Kenyan Flowers
            </a>
            <a
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Quality & Governance
            </a>
            <a
              href="#markets"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4F5752] hover:text-[#174D3B]"
            >
              Global Destinations
            </a>

            {/* Prominent Contact Us Section in Menu */}
            <div className="pt-2 border-t border-[#D8DED8]/60">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#EEF1EB] text-sm font-semibold text-[#174D3B] border border-[#D8DED8]"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#C6A15B]" />
                  <span>Contact Us & Flight Dispatch</span>
                </div>
                <ChevronRight className="h-4 w-4 text-[#174D3B]" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#D8DED8] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] rounded-md shadow-sm transition-colors"
              >
                Wholesale Pricing Inquiry
                <ChevronRight className="h-3.5 w-3.5 text-[#C6A15B]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#174D3B] border border-[#D8DED8] rounded-md bg-white hover:bg-[#EEF1EB] transition-colors"
              >
                <FileText className="h-4 w-4 text-[#C6A15B]" />
                View Export Catalog Spec Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
