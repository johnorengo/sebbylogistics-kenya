import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const pic1Img = '/images/kenyan-roses.jpg';
import pic2Img from '../assets/images/pic2_kenya_airways_cargo.jpg';
import pic3Img from '../assets/images/pic3_red_pink_roses_harvest.jpg';
import pic4Img from '../assets/images/pic4_klm_cargo_airside.jpg';

const HERO_IMAGES = [
  {
    id: 1,
    title: 'High-Altitude Greenhouse Harvest',
    caption: 'Hand-Cut Orange & Peach Roses from Growers in Kenya',
    image: pic1Img,
    mobileImage: '/images/mobile/kenyan-roses-portrait.webp',
  },
  {
    id: 2,
    title: 'Kenya Airways Cargo Airfreight',
    caption: 'Scheduled Widebody Airfreight from JKIA Nairobi to Global Destinations',
    image: pic2Img,
    mobileImage: '/images/mobile/kenya-airways-cargo-portrait.webp',
  },
  {
    id: 3,
    title: 'Premium Long-Stem Kenyan Roses',
    caption: 'Vibrant Crimson Red & Delicate Pink Export-Grade Blooms',
    image: pic3Img,
    mobileImage: '/images/mobile/red-pink-roses-portrait.webp',
  },
  {
    id: 4,
    title: 'Airside Cold-Chain Loading at JKIA',
    caption: 'KLM Cargo Widebody Palletized Boxes Flown Direct to European Hubs',
    image: pic4Img,
    mobileImage: '/images/mobile/klm-cargo-portrait.webp',
  },
];

interface HeroVideoProps {
  onOpenRFQ: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onOpenRFQ }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([0]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (activeImageIndex === 0) return;
    setLoadedImages(previous => Array.from(new Set([...previous, activeImageIndex, (activeImageIndex + 1) % HERO_IMAGES.length])));
  }, [activeImageIndex]);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setActiveImageIndex((curr) => (curr + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section id="hero" aria-label="Kenyan flower sourcing and airfreight" className="hero-shell relative min-h-[100svh] w-full overflow-hidden bg-[#0B0F0D] flex flex-col pt-[184px] sm:pt-[200px] md:pt-[216px] pb-6 scroll-mt-20">
      {/* Full-bleed Cinematic Visual Story Canvas - Featuring 4 Uploaded Hero Pictures */}
      <div className="hero-visual absolute inset-0 z-0">
        {HERO_IMAGES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeImageIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={idx === activeImageIndex || loadedImages.includes(idx) ? item.mobileImage : undefined}
                width={841}
                height={1870}
              />
              <img
              src={idx === activeImageIndex || loadedImages.includes(idx) ? item.image : undefined}
              onLoad={() => { if (idx === activeImageIndex) setLoadedImages(previous => previous.includes((idx + 1) % HERO_IMAGES.length) ? previous : [...previous, (idx + 1) % HERO_IMAGES.length]); }}
              alt={item.title}
              width={1376}
              height={768}
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchPriority={idx === 0 ? 'high' : 'low'}
              decoding="async"
              referrerPolicy="no-referrer"
              className={`h-full w-full object-cover transition-transform duration-[12000ms] ease-out ${
                activeImageIndex === idx ? 'md:scale-105 filter brightness-[1.02] contrast-[1.02] saturate-[1.06]' : 'scale-100'
              }`}
            />
            </picture>
            {/* Luminous, Airy Overlays: Enhancing Light while Preserving Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/70 via-black/20 to-black/30 md:from-[#0B0F0D]/90 md:via-black/25 md:to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D]/35 via-[#0B0F0D]/10 to-transparent md:from-[#0B0F0D]/80 md:via-[#0B0F0D]/30" />
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="hero-layout relative z-20 mx-auto flex flex-1 max-w-7xl flex-col justify-between gap-5 px-6 lg:px-12 w-full">
        {/* Keep copy close to the bottom caption, leaving the image open above. */}
        <div className="hero-copy mt-auto max-w-5xl">
          <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08] text-balance drop-shadow-md">
            Buy Premium Kenyan Flowers Direct from Farms, Including Worldwide Airfreight.
          </h1>

          {/* Customer Copy from Brief */}
          <p className="hero-description mt-3 text-sm sm:text-base text-white/95 leading-relaxed font-sans-clean max-w-5xl font-normal drop-shadow-sm">
            We offer you to buy flowers from good farms at the best prices. We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined national efforts we are better and cheaper than your current suppliers.
          </p>

          {/* 4 Feature Items Under 'We Offer' Copy */}
          <div className="hero-features mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-4xl">
            {[
              { label: 'Premium Quality Flowers', color: 'text-[#009E49]' },
              { label: 'Competitive Farm Prices', color: 'text-[#C8102E]' },
              { label: 'Worldwide Shipping', color: 'text-[#009E49]' },
              { label: 'End-to-End Logistics', color: 'text-[#C8102E]' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="hero-feature flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md shadow-md"
              >
                <CheckCircle2 className={`h-4 w-4 ${item.color} shrink-0`} />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide font-sans-clean">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Zone: Request a Quote + current slide + carousel controls */}
        <div className="hero-bottom border-t border-white/15 pt-3 flex flex-col gap-3">
          {/* Row 1: current story caption (left) + Request Quote CTA (right) */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div key={activeImageIndex} className="max-w-2xl animate-in fade-in duration-500">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00E575]">
                {HERO_IMAGES[activeImageIndex].title}
              </p>
              <p className="hero-slide-caption mt-1 text-sm text-white/85 font-sans-clean">
                {HERO_IMAGES[activeImageIndex].caption}
              </p>
            </div>

            {/* Both hero actions share the same row and vertical alignment. */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenRFQ}
                className="inline-flex min-w-0 flex-1 sm:flex-none sm:w-auto items-center justify-center gap-2 px-3 sm:px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] transition-all rounded-lg shadow-[0_8px_30px_rgba(200,16,46,0.45)] hover:shadow-[0_8px_36px_rgba(200,16,46,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
                <ChevronRight className="h-4 w-4" />
              </button>
              <span id="hero-whatsapp-anchor" aria-hidden="true" className="h-14 w-14 shrink-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
