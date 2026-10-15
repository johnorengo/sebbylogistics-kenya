import React from 'react';
import { KenyaFlagWordmark } from './KenyaFlagWordmark';
import { SebbyLogo } from './SebbyLogo';
import { scrollToSection } from '../utils/scroll';

interface FooterProps {
  onOpenCatalog?: () => void;
  onOpenRFQ?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#0E1C15] via-[#0B100D] to-[#08100B] text-white pt-0 pb-12 overflow-hidden">
      {/* 1. Kenyan National Flag Accent Ribbon */}
      <div className="h-1.5 w-full kenya-ribbon-bar relative z-10" />

      {/* 2. Kenya Flag Wordmark artwork — bottom-anchored and clearly visible,
          gently dissolving toward the top so text stays legible above it */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_40%)]">
        <KenyaFlagWordmark className="w-full max-w-7xl h-auto translate-y-[10%] drop-shadow-[0_0_60px_rgba(200,16,46,0.35)]" />
      </div>

      {/* Light uniform veil only — keeps text legible without burying the artwork */}
      <div className="absolute inset-0 z-0 bg-[#0B0F0D]/40 pointer-events-none" />

      {/* 3. Footer Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Brand & Overview (Col 1-8) */}
          <div className="md:col-span-8 space-y-4">
            {/* Logo lockup on top of the brand text */}
            <div className="flex items-center gap-4">
              <div className="h-24 w-[109px] sm:h-28 sm:w-32 flex items-center justify-center shadow-md shrink-0">
                <SebbyLogo className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <div className="font-serif-luxury font-bold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                  SEBBY LOGISTICS LTD
                </div>
                <div className="mt-0.5 text-xs sm:text-sm text-[#00E575] font-serif-luxury italic tracking-wide">
                  &quot;For Purchase of Flowers from Kenya including Freight&quot;
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans-clean max-w-2xl">
              We offer to buy flowers from good farms at the best prices. We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined national efforts we are better and cheaper than your current suppliers.
            </p>

            {/* Social Media Channels Icons - Facebook, Instagram & YouTube only */}
            <div className="pt-2">
              <div className="text-xs font-data uppercase tracking-wider text-white/60 mb-3 font-semibold">
                Follow Us
              </div>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61576578089104"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-11 w-11 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:scale-105 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sebbylogistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-11 w-11 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:scale-105 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-11 w-11 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:scale-105 shadow-sm"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Col 9-12) */}
          <div className="md:col-span-4 space-y-3 md:pl-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#009E49]">
              Quick Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => scrollToSection(e, 'why-choose-us')} className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#quote" onClick={(e) => scrollToSection(e, 'quote')} className="hover:text-white transition-colors">Request a Quote</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors font-semibold text-[#009E49]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Legal — centered at the very bottom of the footer.
            Dark blurred pill lifts the text off the watermark artwork behind it.
            (Back to Top now floats below the WhatsApp button) */}
        <div className="mt-8 flex justify-center">
          <div className="flex flex-col items-center text-center gap-1.5 text-xs font-sans-clean rounded-xl bg-black/55 backdrop-blur-sm border border-white/10 px-6 py-3.5 shadow-xl">
            <div className="text-white/85 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              © {new Date().getFullYear()} SEBBY LOGISTICS LTD. All rights reserved.
            </div>

            <div className="flex items-center gap-2 text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E] shrink-0" />
              <span className="tracking-wide">Fresh Flowers & Freight · Nairobi, Kenya</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#009E49] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
