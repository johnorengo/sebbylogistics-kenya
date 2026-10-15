import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';
import { scrollToSection } from '../utils/scroll';

interface HeaderProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Keep navigation readable after scrolling or when the mobile menu opens.
  const [isSolid, setIsSolid] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const media = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (media.matches) setMobileMenuOpen(false); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [menuButton.current, ...Array.from(drawer.current?.querySelectorAll<HTMLElement>('a, button') || [])].filter(Boolean) as HTMLElement[];
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    drawer.current?.querySelector<HTMLElement>('a')?.focus();
    media.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', onKey);
    return () => {
      media.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let frame: number | null = null;
    const handleScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrollY(Math.min(Math.max(y, 0), 160));
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          const rect = heroElement.getBoundingClientRect();
          setIsSolid(rect.bottom <= 90);
        } else {
          setIsSolid(y > (window.innerHeight || 800) - 140);
        }
        frame = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const collapsed = scrollY >= 160;

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(e, id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        // Transparent only at landing; solid color background as soon as
        // page scrolls so navigation stays readable over the content.
        isSolid || collapsed || mobileMenuOpen
          ? 'bg-[#0B0F0D]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* 1. Kenyan National Flag Accent Ribbon — always sticky */}
      <div className="h-1 w-full kenya-ribbon-bar" />

      {/* 2. Contact strip — above the brand and navigation, without a divider. */}
      <div
        className="px-4 sm:px-8 lg:px-12 py-1.5 bg-transparent"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-3 text-[11px] sm:text-[13px] font-sans-clean">
          {/* Left: location (roomy screens only so nothing wraps) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=JKIA+Cargo+1st+Freight+Lane+Avenue+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
            title="Open cargo desk location in Maps"
            className="group hidden md:flex items-center gap-2 text-white/90 hover:text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] truncate min-w-0 rounded-md px-2 -ml-2 py-0.5 hover:bg-white/15 transition-all duration-200"
          >
            <MapPin className="h-4 w-4 text-[#C8102E] group-hover:text-[#ff4d6a] group-hover:scale-125 transition-all duration-200 shrink-0" />
            <span className="truncate no-underline group-hover:underline underline-offset-4 decoration-white/40">Jomo Kenyatta International Airport JKIA · 1st Freight Lane Avenue (Cargo)</span>
          </a>
          {/* Right group: phone + email (spread edge-to-edge on mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 max-sm:flex-1 max-sm:justify-between">
            <a
              href="tel:+254719707003"
              title="Call the dispatch desk"
              className="group flex items-center gap-1.5 text-white/90 hover:text-white shrink-0 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] rounded-md px-2 py-0.5 hover:bg-white/15 transition-all duration-200"
            >
              <Phone className="h-3.5 w-3.5 text-[#00E575] group-hover:scale-125 transition-transform duration-200 shrink-0" />
              <span className="font-data whitespace-nowrap no-underline group-hover:underline underline-offset-4 decoration-[#00E575]/70">+254 719 707 003</span>
            </a>
            <a
              href="mailto:support@sebbylogistics.com"
              title="Email support"
              className="group flex items-center gap-2 text-white/90 hover:text-white shrink-0 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] min-w-0 rounded-md px-2 py-0.5 hover:bg-white/15 transition-all duration-200"
            >
              <Mail className="h-3.5 w-3.5 text-[#009E49] group-hover:text-[#00E575] group-hover:scale-125 transition-all duration-200 shrink-0" />
              <span className="font-data truncate no-underline group-hover:underline underline-offset-4 decoration-[#00E575]/70">support@sebbylogistics.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Brand and navigation share a single row at every scroll position. */}
      <div
        data-header-navigation
        className={`relative z-10 transition-colors duration-200 ${
          isSolid || collapsed || mobileMenuOpen
            ? 'bg-[#0B0F0D]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="relative mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 min-h-24 md:min-h-28 py-3">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex min-w-0 items-center gap-3 sm:gap-4 rounded-md"
            title="Sebby Logistics - return to top"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 rounded-full p-1 bg-black/25 border border-white/25 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <SebbyLogo className="h-full w-full" />
            </div>
            <div className="min-w-0 max-w-[14rem] sm:max-w-[21rem] lg:max-w-[28rem] text-left">
              <span className="block font-serif-luxury font-bold text-lg sm:text-2xl lg:text-3xl tracking-tight text-white leading-tight drop-shadow-md">
                SEBBY LOGISTICS LTD
              </span>
              <span className="mt-1 block text-[11px] sm:text-sm lg:text-base text-[#00E575] font-serif-luxury font-semibold italic leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                &quot;For Purchase of Flowers from Kenya including Freight&quot;
              </span>
            </div>
          </a>

          {/* Mobile hamburger */}
          <button
            ref={menuButton}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shrink-0 p-2 -mr-2 rounded-md text-white md:hidden drop-shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>

          <div className="hidden md:flex shrink-0 items-center">
            <nav className="flex items-center gap-6 lg:gap-10 shrink-0">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="text-sm md:text-base font-bold text-white hover:text-[#00E575] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-sm md:text-base font-bold text-white hover:text-[#00E575] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-sm md:text-base font-bold text-white hover:text-[#C8102E] transition-colors tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] uppercase"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Request a Quote lives at the hero bottom + mobile drawer —
              intentionally nothing else on this bar. */}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div ref={drawer} id="mobile-navigation" className="bg-[#0B0F0D]/98 backdrop-blur-xl px-6 py-5 md:hidden text-white max-h-[calc(100svh-9rem)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="text-base font-bold text-white hover:text-[#00E575] uppercase tracking-wide py-1 border-b border-white/5"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-base font-bold text-white hover:text-[#00E575] uppercase tracking-wide py-1 border-b border-white/5"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-base font-bold text-white hover:text-[#C8102E] uppercase tracking-wide py-1 flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
                Contact
              </a>
            </nav>

            <div className="flex items-start gap-2 pt-2 text-xs text-white/90 border-t border-white/10">
              <MapPin className="h-4 w-4 text-[#C8102E] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Jomo Kenyatta International Airport JKIA</span><br />
                <span className="text-white/80">1st Freight Lane Avenue (Cargo)</span>
              </div>
            </div>

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
