import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, Volume2, VolumeX, ArrowDown, Plane, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { soundscape } from '../utils/audio';
import { SebbyLogo } from './SebbyLogo';

import naivashaFarmImg from '../assets/images/kenya_rose_farm_naivasha_1791289265374.jpg';
import packhouseImg from '../assets/images/kenya_cold_chain_packhouse_1791289277218.jpg';
import airfreightImg from '../assets/images/jkia_cargo_airfreight_export_1791289288100.jpg';
import rosesImg from '../assets/images/premium_roses_collection_1791289297118.jpg';

interface ProcessChapter {
  id: number;
  chapter: string;
  location: string;
  title: string;
  caption: string;
  image: string;
}

const CHAPTERS: ProcessChapter[] = [
  {
    id: 1,
    chapter: '01 · Harvest',
    location: 'Rift Valley Highlands',
    title: 'Dawn Hand Harvest in High-Altitude Greenhouses',
    caption: 'Stems are hand-cut in the cool morning air at peak bud aperture, preserved immediately in hydration solutions to maintain vigor.',
    image: naivashaFarmImg,
  },
  {
    id: 2,
    chapter: '02 · Conditioning',
    location: 'On-Farm Packhouse Facilities',
    title: 'Grading, Hydration & Cold Conditioning',
    caption: 'Flowers are inspected for stem straightness and petal health, cooled to preserve shelf-life, and prepared in protective export packaging.',
    image: packhouseImg,
  },
  {
    id: 3,
    chapter: '03 · Transit',
    location: 'Escarpment Corridor',
    title: 'Temperature-Managed Road Transit',
    caption: 'Enclosed reefer vehicles transport sealed cartons along transit routes connecting high-altitude farms directly to Nairobi.',
    image: rosesImg,
  },
  {
    id: 4,
    chapter: '04 · Departure',
    location: 'JKIA Freight Terminal, Nairobi',
    title: 'Airside Staging & International Flight Departure',
    caption: 'Palletized consignments undergo export inspection and board scheduled widebody cargo flights destined for European and global markets.',
    image: airfreightImg,
  },
];

interface HeroVideoProps {
  onOpenRFQ: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onOpenRFQ }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTimelapseMode, setIsTimelapseMode] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  const currentChapter = CHAPTERS[activeChapterIndex];
  const chapterDuration = isTimelapseMode ? 2800 : 7000;

  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    lastTimeRef.current = Date.now();

    const loop = () => {
      const now = Date.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      setPlaybackProgress((prev) => {
        const next = prev + (delta / chapterDuration) * 100;
        if (next >= 100) {
          setActiveChapterIndex((curr) => (curr + 1) % CHAPTERS.length);
          return 0;
        }
        return next;
      });

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, isTimelapseMode, chapterDuration]);

  const handleToggleAudio = () => {
    const status = soundscape.toggle();
    setAudioEnabled(status);
  };

  const handleSelectChapter = (idx: number) => {
    setActiveChapterIndex(idx);
    setPlaybackProgress(0);
    lastTimeRef.current = Date.now();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0F0D]">
      {/* Full-bleed Cinematic Visual Story Canvas */}
      <div className="absolute inset-0 z-0">
        {CHAPTERS.map((chapter, idx) => (
          <div
            key={chapter.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeChapterIndex === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={chapter.image}
              alt={chapter.title}
              referrerPolicy="no-referrer"
              className={`h-full w-full object-cover transition-transform duration-[14000ms] ease-out ${
                activeChapterIndex === idx ? 'scale-105 filter brightness-[0.78] contrast-[1.05]' : 'scale-100'
              }`}
            />
            {/* Cinematic Kenyan Scrim: Rich Black & Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-[#0B0F0D]/60 to-[#0B0F0D]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0D]/90 via-[#0B0F0D]/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Atmospheric Accent in Time-Lapse Mode */}
      {isTimelapseMode && (
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#C8102E]/10 mix-blend-screen animate-pulse" />
      )}

      {/* Main Content Layout */}
      <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-8 sm:py-12 lg:px-12">
        {/* Top Status & Audio Control */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs tracking-wider text-white/90 font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <span className="h-2 w-2 rounded-full bg-[#009E49] animate-pulse"></span>
            <span className="uppercase tracking-[0.2em] text-[#009E49] font-bold">Kenya Direct Export</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-white/90">Airside Staging at JKIA Nairobi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors border ${
                audioEnabled
                  ? 'bg-[#007A3D] text-white border-[#009E49] font-medium'
                  : 'bg-black/40 text-white/80 border-white/20 hover:text-white hover:bg-black/60'
              }`}
              title="Toggle natural ambient soundscape"
            >
              {audioEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span>{audioEnabled ? 'Sound Active' : 'Soundscape'}</span>
            </button>
          </div>
        </div>

        {/* Center Editorial Hero & Customer Text */}
        <div className="my-auto max-w-4xl py-8">
          {/* Brand Logo & Name Banner Flow */}
          <div className="inline-flex items-center gap-3.5 mb-5 p-2 pr-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
            <div className="h-12 w-12 rounded-full bg-white/10 p-0.5 flex items-center justify-center">
              <SebbyLogo className="h-11 w-11" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider uppercase text-white font-serif-luxury">
                SEBBY LOGISTICS LTD
              </span>
              <span className="text-xs text-[#009E49] font-medium italic">
                &quot;For Purchase of Flowers from Kenya including Freight&quot;
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08] text-balance">
            Buy Premium Kenyan Flowers Direct from Farms, Including Worldwide Airfreight.
          </h1>

          {/* Customer Copy from Brief */}
          <p className="mt-5 text-base sm:text-lg text-white/95 leading-relaxed font-sans-clean max-w-3xl font-normal">
            We offer you to buy flowers from good farms at the best prices. We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined local efforts we are better and cheaper than your current suppliers.
          </p>

          {/* Key Value Points in Kenyan Colors */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-[#009E49] shrink-0" />
              <span>Assortment from selected farms at stunning prices</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-[#C8102E] shrink-0" />
              <span>Competitive airfreight rates to your airport of choice</span>
            </div>
          </div>

          {/* Action CTAs in Kenyan Colors */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] transition-all rounded-md shadow-xl shadow-[#C8102E]/30 whitespace-nowrap active:scale-95"
            >
              Wholesale Pricing Inquiry
              <Plane className="h-4 w-4 text-white" />
            </button>

            <a
              href="https://wa.me/254719707003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#007A3D] hover:bg-[#009E49] transition-all rounded-md shadow-lg shadow-black/40 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: +254 719707003</span>
            </a>

            <a
              href="#flowers"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white hover:text-white border border-white/30 hover:border-white rounded-md bg-black/35 backdrop-blur-sm transition-all whitespace-nowrap"
            >
              Browse Flowers
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsTimelapseMode(!isTimelapseMode)}
              className={`inline-flex items-center gap-2 px-4 py-3.5 text-xs font-medium rounded-md border transition-colors ${
                isTimelapseMode
                  ? 'bg-[#C8102E] text-white border-[#C8102E] font-semibold'
                  : 'bg-black/30 text-white/80 border-white/20 hover:text-white'
              }`}
            >
              <FastForward className="h-4 w-4" />
              <span>{isTimelapseMode ? 'Time-Lapse Active' : 'Airport Time-Lapse'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Storytelling Timeline Bar */}
        <div className="rounded-xl bg-black/75 backdrop-blur-md p-4 sm:p-5 border border-white/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#007A3D] text-white hover:bg-[#009E49] transition-colors shadow-md"
                aria-label={isPlaying ? 'Pause story presentation' : 'Play story presentation'}
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 ml-0.5 fill-current" />}
              </button>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#009E49]">
                  <span>{currentChapter.chapter}</span>
                  <span aria-hidden="true" className="text-white/30">·</span>
                  <span className="text-white font-serif-luxury text-sm">{currentChapter.title}</span>
                </div>
                <div className="text-xs text-white/70 mt-0.5 line-clamp-1">
                  {currentChapter.caption}
                </div>
              </div>
            </div>

            <div className="text-xs font-data text-white/80">
              <span className="text-[#C8102E] mr-2">Location:</span>
              <span>{currentChapter.location}</span>
            </div>
          </div>

          {/* Chapter Scrubber Nav */}
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(idx)}
                  className={`group relative text-left p-2.5 sm:p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'bg-white/15 border-[#009E49] ring-1 ring-[#009E49]/40'
                      : 'bg-black/30 border-white/10 hover:border-white/25'
                  }`}
                >
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#009E49] rounded-b transition-all"
                      style={{ width: `${playbackProgress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={`font-data ${isActive ? 'text-[#009E49] font-bold' : 'text-white/50'}`}>
                      0{ch.id}
                    </span>
                    <span className="text-[10px] text-white/60">{ch.chapter.split('·')[1]}</span>
                  </div>
                  <div className={`text-xs font-medium line-clamp-1 ${isActive ? 'text-white' : 'text-white/75 group-hover:text-white'}`}>
                    {ch.title.split(' in ')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
