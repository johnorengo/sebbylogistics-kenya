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
  // Solid dark background ONLY once the hero image has truly scrolled away.
  // While over the hero the header stays fully transparent (no bg, no lines)
  // so the background photo shows through cleanly.
  const [isSolid, setIsSolid] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const media = window.matchMedia('(min-width: 640px)');
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
        setIsSolid(y > 24);
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

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(e, id);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        // Transparent only at landing; solid color background as soon as
        // the bar compacts so nav text never overlays hero text/photo.
        isSolid || mobileMenuOpen
          ? 'bg-[#0B0F0D]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* 1. Kenyan National Flag Accent Ribbon — always sticky */}
      <div className="h-1 w-full kenya-ribbon-bar" />

      {/* 2. Contact strip — above the centered logo, without a divider. */}
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
            <span className="truncate   ">Jomo Kenyatta International Airport JKIA · 1st Freight Lane Avenue (Cargo)</span>
          </a>
          {/* Right group: phone + email (spread edge-to-edge on mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 max-sm:flex-1 max-sm:justify-between">
            <a
              href="tel:+254719707003"
              title="Call the dispatch desk"
              className="group flex items-center gap-1.5 text-white/90 hover:text-white transition-all duration-200 shrink-0 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] rounded-md px-2 py-0.5 hover:bg-white/15"
            >
              <Phone className="h-3.5 w-3.5 text-[#00E575] group-hover:scale-125 transition-transform duration-200 shrink-0" />
              <span className="font-data whitespace-nowrap   ">+254 719 707 003</span>
            </a>
            <a
              href="mailto:support@sebbylogistics.com"
              title="Email support"
              className="group flex items-center gap-2 text-white/90 hover:text-white transition-all duration-200 shrink-0 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] min-w-0 rounded-md px-2 py-0.5 hover:bg-white/15"
            >
              <Mail className="h-3.5 w-3.5 text-[#009E49] group-hover:text-[#00E575] group-hover:scale-125 transition-all duration-200 shrink-0" />
              <span className="font-data truncate   ">support@sebbylogistics.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Nav row — sits ABOVE the centered logo. No logo, no quote at
          landing: just the centered menu. Transparent + lineless while
          over the hero; solid only once the hero is truly gone. */}
      <div
        data-header-navigation
        className={`relative z-10 transition-colors duration-200 ${
          isSolid || mobileMenuOpen
            ? 'bg-[#0B0F0D]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="relative mx-auto max-w-7xl flex items-center px-4 sm:px-8 lg:px-12 h-14 md:h-16 transition-all duration-500">
          {/* Compact TOP-LEFT brand + FULL tagline — invisible at landing,
              fades in while the big logo travels up-left toward it.
              Offset clear of the hamburger + contact strip: no overlap. */}
          <div
            // NOTE: vertical centering comes ONLY from the inline
            // translateY(-50%) below — Tailwind v4 `-translate-y-1/2` uses
            // the separate `translate` property, which would stack on top
            // of it and shove the logo up over the contact strip.
            className="absolute left-12 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2"
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center gap-3 group shrink-0"
              title="Return to top"
            >
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full p-1 bg-white/10 border border-white/25 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <SebbyLogo className="h-full w-full" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-serif-luxury font-bold text-sm sm:text-base tracking-tight text-white leading-tight">
                  SEBBY LOGISTICS
                </span>
                {/* Same full tagline as the centered hero brand — not shortened */}
                <span className="hidden lg:block whitespace-nowrap text-xs text-[#00E575] font-sans-clean leading-snug">
                  &quot;For Purchase of Flowers from Kenya including Freight&quot;
                </span>
              </div>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButton}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 -ml-2 text-white sm:hidden focus:outline-none drop-shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>

          {/* Menu links — centered at landing, gliding to the farthest
              right as the logo travels center → left. The two spacers are
              driven by the SAME scroll progress `p`, so the glide happens
              simultaneously with the logo move (smooth, no jump). */}
          <div className="flex-1 hidden sm:flex items-center min-w-0">
            <div aria-hidden className="flex-1" />
            <nav className="flex items-center gap-8 md:gap-10 lg:gap-12 shrink-0">
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
        <div ref={drawer} id="mobile-navigation" className="bg-[#0B0F0D]/98 backdrop-blur-xl px-6 py-5 sm:hidden text-white max-h-[calc(100svh-7rem)] overflow-y-auto">
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
    <div className="absolute top-[120px] sm:top-[132px] left-0 right-0 z-20 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center will-change-transform">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="inline-flex flex-col items-center group transition-transform duration-300"
          >
            <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full p-1 sm:p-1.5 bg-black/25 border border-white/30 flex items-center justify-center group-hover:scale-105 transition-all duration-300 drop-shadow-2xl backdrop-blur-[2px]">
              <SebbyLogo className="h-full w-full" />
            </div>
            <span className="mt-1.5 sm:mt-2 text-xl sm:text-3xl md:text-4xl font-serif-luxury font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              SEBBY LOGISTICS LTD
            </span>
            <span className="mt-0.5 sm:mt-1 text-xs sm:text-base md:text-lg font-serif-luxury font-semibold italic text-[#00E575] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              &quot;For Purchase of Flowers from Kenya including Freight&quot;
            </span>
          </a>
        </div>
    </div>
    </>
  );
};
