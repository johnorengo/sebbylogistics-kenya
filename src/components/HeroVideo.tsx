import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, FileText, Pause, Play } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const pic1Img = '/images/kenyan-roses.jpg';
import pic2Img from '../assets/images/pic2_kenya_airways_cargo.jpg';
import pic3Img from '../assets/images/pic3_red_pink_roses_harvest.jpg';
import pic4Img from '../assets/images/pic4_klm_cargo_airside.jpg';

const HERO_IMAGES = [
  {
    id: 1,
    title: 'High-Altitude Greenhouse Harvest',
    caption: 'Hand-Cut Orange & Peach Roses from Naivasha Partner Farms',
    image: pic1Img,
  },
  {
    id: 2,
    title: 'Kenya Airways Cargo Airfreight',
    caption: 'Scheduled Widebody Airfreight from JKIA Nairobi to Global Destinations',
    image: pic2Img,
  },
  {
    id: 3,
    title: 'Premium Long-Stem Kenyan Roses',
    caption: 'Vibrant Crimson Red & Delicate Pink Export-Grade Blooms',
    image: pic3Img,
  },
  {
    id: 4,
    title: 'Airside Cold-Chain Loading at JKIA',
    caption: 'KLM Cargo Widebody Palletized Cartons Flown Direct to European Hubs',
    image: pic4Img,
  },
];

interface HeroVideoProps {
  onOpenRFQ: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onOpenRFQ }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [loadedImages, setLoadedImages] = useState([0]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (activeImageIndex === 0) return;
    setLoadedImages(previous => Array.from(new Set([...previous, activeImageIndex, (activeImageIndex + 1) % HERO_IMAGES.length])));
  }, [activeImageIndex]);

  useEffect(() => {
    if (paused || interacting || reducedMotion) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setActiveImageIndex((curr) => (curr + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [paused, interacting, reducedMotion]);

  const goToPrevious = () => {
    setPaused(true);
    setActiveImageIndex((curr) => (curr - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const goToNext = () => {
    setPaused(true);
    setActiveImageIndex((curr) => (curr + 1) % HERO_IMAGES.length);
  };

  return (
    <section id="hero" aria-label="Kenyan flower sourcing and airfreight" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setInteracting(false); }} className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B0F0D] flex flex-col justify-between pt-[264px] sm:pt-[304px] md:pt-[336px] pb-8 sm:pb-12 scroll-mt-20">
      {/* Full-bleed Cinematic Visual Story Canvas - Featuring 4 Uploaded Hero Pictures */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeImageIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
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
              className="h-full w-full object-cover"
            />
            {/* Luminous, Airy Overlays: Enhancing Light while Preserving Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/90 via-black/25 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D]/80 via-[#0B0F0D]/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-18rem)] max-w-7xl flex-col justify-between px-6 py-4 sm:py-6 lg:px-12 w-full">
        {/* Center Editorial Hero - Direct Heading & Customer Copy */}
        <div className="my-auto max-w-4xl py-6 sm:py-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08] text-balance drop-shadow-md">
            Buy Premium Kenyan Flowers Direct from Farms, Including Worldwide Airfreight.
          </h1>

          {/* Customer Copy from Brief */}
          <p className="mt-5 text-base sm:text-lg text-white/95 leading-relaxed font-sans-clean max-w-3xl font-normal drop-shadow-sm">
            We offer you to buy flowers from good farms at the best prices. We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined national efforts we are better and cheaper than your current suppliers.
          </p>

          {/* 4 Feature Items Under 'We Offer' Copy */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-3xl">
            {[
              { label: 'Premium Quality Flowers', color: 'text-[#009E49]' },
              { label: 'Competitive Farm Prices', color: 'text-[#C8102E]' },
              { label: 'Worldwide Shipping', color: 'text-[#009E49]' },
              { label: 'End-to-End Logistics', color: 'text-[#C8102E]' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-black/60 border border-white/20 backdrop-blur-md shadow-md"
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
        <div className="mt-8 border-t border-white/15 pt-5 flex flex-col gap-5">
          {/* Row 1: current story caption (left) + Request Quote CTA (right) */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div key={activeImageIndex} className="max-w-2xl animate-in fade-in duration-500">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#00E575]">
                {HERO_IMAGES[activeImageIndex].title}
              </p>
              <p className="mt-1 text-sm sm:text-base text-white/85 font-sans-clean">
                {HERO_IMAGES[activeImageIndex].caption}
              </p>
            </div>

            <div className="flex shrink-0">
              <button
                onClick={onOpenRFQ}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] transition-all rounded-lg shadow-[0_8px_30px_rgba(200,16,46,0.45)] hover:shadow-[0_8px_36px_rgba(200,16,46,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Row 2: slide indicators (left) + arrows (right) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* 4 Interactive Slide Indicator Tabs */}
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {HERO_IMAGES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { setPaused(true); setActiveImageIndex(idx); }}
                  className={`group flex items-center gap-2 py-1.5 px-3 rounded-lg transition-all text-left ${
                    activeImageIndex === idx
                      ? 'bg-white/20 border border-white/40 shadow-md backdrop-blur-sm'
                      : 'bg-black/40 border border-white/10 hover:bg-white/10'
                  }`}
                  title={item.title}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={activeImageIndex === idx}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeImageIndex === idx
                        ? 'w-6 bg-[#00E575]'
                        : 'w-2 bg-white/40 group-hover:bg-white/70'
                    }`}
                  />
                  <span className={`text-xs font-medium font-sans-clean hidden md:inline ${
                    activeImageIndex === idx ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    0{item.id}
                  </span>
                </button>
              ))}
            </div>

            {/* Prev / Next Navigation Arrows */}
            <div className="flex items-center gap-2 ml-auto">
            <button type="button" onClick={() => setPaused(!paused)} disabled={reducedMotion} aria-label={reducedMotion ? 'Automatic slideshow disabled by reduced-motion preference' : paused ? 'Resume slideshow' : 'Pause slideshow'} aria-pressed={paused || reducedMotion} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 disabled:opacity-50">
              {paused || reducedMotion ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
              <button
                onClick={goToPrevious}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full bg-black/50 border border-white/20 hover:bg-white/20 text-white transition-colors backdrop-blur-sm active:scale-95"
                aria-label="Previous slide"
                title="Previous picture"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full bg-black/50 border border-white/20 hover:bg-white/20 text-white transition-colors backdrop-blur-sm active:scale-95"
                aria-label="Next slide"
                title="Next picture"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
