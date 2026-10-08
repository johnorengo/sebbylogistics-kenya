import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';

interface HeaderProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCatalog, onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F0D]/85 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* 1. Kenyan National Flag Accent Ribbon */}
      <div className="h-1 w-full kenya-ribbon-bar" />

      {/* 2. Top Micro-Bar with Official Contact Channels */}
      <div
        className={`transition-all duration-300 hidden md:block ${
          isScrolled
            ? 'bg-[#0B0F0D]/90 border-b border-white/10 text-white/90 px-6 lg:px-12 py-1'
            : 'bg-black/25 backdrop-blur-xs border-b border-white/10 text-white px-6 lg:px-12 py-1.5'
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between text-[11px] font-sans-clean">
          <div className="flex items-center gap-4">
            <span className="text-white font-data flex items-center gap-1.5 drop-shadow-sm">
              <MapPin className="h-3 w-3 text-[#C8102E]" />
              <span className="font-semibold text-white">Location:</span>
              <span className="text-white/90">Jomo Kenyatta International Airport JKIA · 1st Freight Lane Avenue (Cargo)</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#009E49] font-medium flex items-center gap-1.5 drop-shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#009E49] animate-pulse"></span>
              Fresh Daily Harvest & Airfreight Logistics
            </span>
          </div>

          <div className="flex items-center gap-5 text-white/80 font-data">
            <a
              href="https://wa.me/254719707003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-[#009E49] transition-colors"
            >
              <MessageCircle className="h-3 w-3 text-[#009E49]" />
              <span>WhatsApp: +254 719707003</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:info@sebbylogistics.com"
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-[#C8102E]" />
              <span>info@sebbylogistics.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Glass Navigation Bar Flowing Seamlessly with the Video Hero */}
      <div
        className={`transition-all duration-300 text-white ${
          isScrolled
            ? 'bg-[#0B0F0D]/85 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Zone 1: Sebby Flower Logo & Company Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group transition-transform shrink-0"
          >
            <div className="h-12 w-12 rounded-full p-0.5 bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform backdrop-blur-xs shadow-sm">
              <SebbyLogo className="h-11 w-11" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif-luxury font-bold tracking-tight text-white leading-tight drop-shadow-sm">
                SEBBY LOGISTICS LTD
              </span>
              <span className="text-[10px] sm:text-xs font-serif-luxury italic text-[#009E49] tracking-wide max-w-[260px] sm:max-w-none truncate drop-shadow-sm">
                &quot;For Purchase of Flowers from Kenya including Freight&quot;
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links - Crisp White Text */}
          <nav className="hidden items-center gap-5 lg:gap-6 xl:gap-7 xl:flex">
            <a
              href="#flowers"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Floral Portfolio
            </a>
            <a
              href="#horticulture"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Horticulture
            </a>
            <a
              href="#journey"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Export Journey
            </a>
            <a
              href="#why-kenya"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Why Kenya
            </a>
            <a
              href="#quality"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Quality
            </a>
            <a
              href="#markets"
              className="text-xs lg:text-sm font-semibold text-white transition-colors hover:text-[#009E49] drop-shadow-sm"
            >
              Global Markets
            </a>
            <a
              href="#contact"
              className="text-xs lg:text-sm font-bold text-white hover:text-[#C8102E] transition-colors flex items-center gap-1.5 drop-shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#C8102E]"></span>
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden items-center gap-2.5 lg:gap-3 md:flex">
            <a
              href="https://wa.me/254719707003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#007A3D] hover:bg-[#009E49] transition-all rounded-md shadow-md whitespace-nowrap active:scale-95"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+254 719707003</span>
            </a>

            <button
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white hover:text-white transition-colors bg-white/10 hover:bg-white/20 border border-white/20 rounded-md whitespace-nowrap backdrop-blur-xs"
            >
              <FileText className="h-3.5 w-3.5 text-[#009E49]" />
              Catalog
            </button>

            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] transition-all rounded-md shadow-md whitespace-nowrap active:scale-95"
            >
              Wholesale RFQ
              <ChevronRight className="h-3.5 w-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white xl:hidden focus:outline-none drop-shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0B0F0D]/95 backdrop-blur-xl px-6 py-6 xl:hidden shadow-2xl animate-in fade-in duration-150 text-white">
          <div className="flex flex-col space-y-3.5">
            {/* Mobile Header Branding */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <SebbyLogo className="h-10 w-10 shrink-0" />
              <div>
                <div className="font-serif-luxury font-bold text-base text-white">SEBBY LOGISTICS LTD</div>
                <div className="text-[11px] text-[#009E49] italic">&quot;For Purchase of Flowers from Kenya including Freight&quot;</div>
              </div>
            </div>

            {/* Mobile Specific Location */}
            <div className="flex items-start gap-2 py-1 text-xs text-white">
              <MapPin className="h-3.5 w-3.5 text-[#C8102E] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Location:</span>
                <span className="text-white/95">Jomo Kenyatta International Airport JKIA.</span><br />
                <span className="text-white/95">1st Freight Lane Avenue (Cargo).</span>
              </div>
            </div>

            <a
              href="#flowers"
              onClick={() => handleNavClick('flowers')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Floral Portfolio
            </a>
            <a
              href="#horticulture"
              onClick={() => handleNavClick('horticulture')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Fresh Horticulture
            </a>
            <a
              href="#journey"
              onClick={() => handleNavClick('journey')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Export Journey
            </a>
            <a
              href="#why-kenya"
              onClick={() => handleNavClick('why-kenya')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Why Kenyan Flowers
            </a>
            <a
              href="#quality"
              onClick={() => handleNavClick('quality')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Quality Standards
            </a>
            <a
              href="#markets"
              onClick={() => handleNavClick('markets')}
              className="text-base font-semibold text-white hover:text-[#009E49]"
            >
              Global Markets
            </a>

            {/* Direct Contact In Menu */}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#C8102E]/15 border border-[#C8102E]/40 text-sm font-semibold text-white"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#C8102E]" />
                  <span>Contact Us & Flight Dispatch</span>
                </div>
                <ChevronRight className="h-4 w-4 text-white" />
              </a>
            </div>

            {/* Contact numbers */}
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1.5 font-data">
              <div className="text-white/60">Direct Trade Line:</div>
              <a href="tel:+254719707003" className="flex items-center gap-1.5 text-white font-semibold hover:text-[#009E49]">
                <Phone className="h-3.5 w-3.5 text-[#009E49]" />
                +254 719707003
              </a>
              <div className="flex items-center gap-1.5 text-white/80">
                <Mail className="h-3 w-3 text-[#C8102E]" />
                info@sebbylogistics.com
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md shadow-md transition-colors"
              >
                Wholesale Pricing Inquiry
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalog();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white border border-white/20 rounded-md bg-white/10 hover:bg-white/15 transition-colors"
              >
                <FileText className="h-4 w-4 text-[#009E49]" />
                Download Export Catalog Spec Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
