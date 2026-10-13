import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, MapPin } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';

interface HeaderProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if the visitor has scrolled past the hero section
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // When hero bottom is near or above header (e.g. within 120px from top or scrolled > 350px)
        const past = rect.bottom <= 140 || window.scrollY > 380;
        setIsPastHero(past);
      } else {
        setIsPastHero(window.scrollY > 380);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isPastHero
          ? 'bg-[#0B0F0D]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* 1. Kenyan National Flag Accent Ribbon */}
      <div className="h-1 w-full kenya-ribbon-bar" />

      {/* 2. Top Micro-Bar: Location on Left and Support Email on Right (Transparent on hero, solid when scrolled) */}
      <div
        className={`transition-all duration-300 ${
          isPastHero
            ? 'bg-[#0B0F0D]/90 border-b border-white/10 py-1 px-4 sm:px-8 lg:px-12'
            : 'bg-transparent border-b border-white/10 py-1.5 px-4 sm:px-8 lg:px-12'
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between text-xs sm:text-[13px] font-sans-clean">
          {/* Left: Location Only */}
          <div className="flex items-center gap-2 text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] truncate">
            <MapPin className="h-4 w-4 text-[#C8102E] shrink-0" />
            <span className="truncate">Jomo Kenyatta International Airport JKIA · 1st Freight Lane Avenue (Cargo)</span>
          </div>

          {/* Right: Support Email */}
          <a
            href="mailto:support@sebbylogistics.com"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-colors shrink-0 font-medium pl-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
          >
            <Mail className="h-3.5 w-3.5 text-[#009E49] shrink-0" />
            <span className="font-data">support@sebbylogistics.com</span>
          </a>
        </div>
      </div>

      {/* 3. Hero-State Large Centered Branding (Clean, transparent, seamlessly blending into hero image) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isPastHero
            ? 'max-h-0 opacity-0 pointer-events-none py-0'
            : 'max-h-72 opacity-100 pt-2.5 sm:pt-4 pb-2'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
          <a
            href="#hero"
            onClick={() => handleNavClick('hero')}
            className="inline-flex flex-col items-center group transition-transform duration-300"
          >
            {/* Proportionally scaled Sebby Flower Logo (Transparent container, no dark fill) */}
            <div className="h-16 w-16 sm:h-22 sm:w-22 md:h-28 md:w-28 rounded-full p-1 sm:p-1.5 bg-transparent border border-white/30 flex items-center justify-center group-hover:scale-105 transition-all duration-300 drop-shadow-2xl">
              <SebbyLogo className="h-full w-full" />
            </div>

            {/* Company Name */}
            <span className="mt-1.5 sm:mt-2 text-xl sm:text-3xl md:text-4xl font-serif-luxury font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              SEBBY LOGISTICS LTD
            </span>

            {/* Tagline: Clear, Visible & Prominent */}
            <span className="mt-0.5 sm:mt-1 text-xs sm:text-base md:text-lg font-serif-luxury font-semibold italic text-[#00E575] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              &quot;For Purchase of Flowers from Kenya including Freight&quot;
            </span>
          </a>
        </div>
      </div>

      {/* 4. Navigation Bar:
          - Transparent on hero section (zero black strip)
          - Solid dark background when scrolled past hero
      */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isPastHero
            ? 'bg-[#0B0F0D]/95 border-t border-white/10 backdrop-blur-md'
            : 'bg-transparent border-t border-white/10'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 lg:px-12 transition-all duration-500 ease-in-out ${
            isPastHero ? 'h-16' : 'h-14 sm:justify-center relative'
          }`}
        >
          {/* Left Side Container in Scrolled State: Compact Logo + Company Name */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${
              isPastHero
                ? 'opacity-100 translate-x-0 w-auto'
                : 'opacity-0 -translate-x-4 pointer-events-none w-0 overflow-hidden sm:absolute sm:left-4'
            }`}
          >
            <a
              href="#hero"
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-3 group shrink-0"
              title="Return to top"
            >
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full p-1 bg-white/10 border border-white/25 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <SebbyLogo className="h-full w-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury font-bold text-sm sm:text-base tracking-tight text-white leading-tight">
                  SEBBY LOGISTICS
                </span>
                <span className="text-[10px] sm:text-xs text-[#009E49] font-serif-luxury italic leading-none hidden md:inline">
                  &quot;Purchase & Freight&quot;
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle (Left on mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 text-white sm:hidden focus:outline-none drop-shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>

          {/* Navigation Links:
              - When Past Hero: Positioned to the right of the compact logo
              - When At Top Hero: Centered with readable drop-shadow
          */}
          <nav
            className={`hidden sm:flex items-center gap-8 md:gap-12 transition-all duration-500 ease-in-out ${
              isPastHero ? 'ml-6 mr-auto' : ''
            }`}
          >
            <a
              href="#hero"
              onClick={() => handleNavClick('hero')}
              className="text-sm md:text-base font-bold text-white hover:text-[#00E575] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about')}
              className="text-sm md:text-base font-bold text-white hover:text-[#00E575] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="text-sm md:text-base font-bold text-white hover:text-[#C8102E] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
            >
              Contact
            </a>
          </nav>

          {/* Request a Quote Button: Always prominent on the right */}
          <div
            className={`transition-all duration-500 ${
              isPastHero ? 'shrink-0' : 'sm:absolute sm:right-6 lg:right-12'
            }`}
          >
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] transition-all rounded-md shadow-lg active:scale-95 shrink-0"
            >
              REQUEST A QUOTE
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, non-repetitive navigation without duplicated logo) */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0B0F0D]/98 backdrop-blur-xl px-6 py-5 sm:hidden shadow-2xl animate-in fade-in duration-150 text-white">
          <div className="flex flex-col space-y-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#hero"
                onClick={() => handleNavClick('hero')}
                className="text-base font-bold text-white hover:text-[#00E575] uppercase tracking-wide py-1 border-b border-white/5"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => handleNavClick('about')}
                className="text-base font-bold text-white hover:text-[#00E575] uppercase tracking-wide py-1 border-b border-white/5"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className="text-base font-bold text-white hover:text-[#C8102E] uppercase tracking-wide py-1 flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
                Contact
              </a>
            </nav>

            {/* Mobile Location Info */}
            <div className="flex items-start gap-2 pt-2 text-xs text-white/90 border-t border-white/10">
              <MapPin className="h-4 w-4 text-[#C8102E] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Jomo Kenyatta International Airport JKIA</span><br />
                <span className="text-white/80">1st Freight Lane Avenue (Cargo)</span>
              </div>
            </div>

            {/* Mobile Support Email */}
            <div>
              <a
                href="mailto:support@sebbylogistics.com"
                className="flex items-center justify-center gap-2 w-full p-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold"
              >
                <Mail className="h-4 w-4 text-[#009E49]" />
                <span>support@sebbylogistics.com</span>
              </a>
            </div>

            <div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md shadow-md transition-colors"
              >
                REQUEST A QUOTE
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

