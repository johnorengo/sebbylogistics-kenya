import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, Volume2, VolumeX, ArrowDown, Plane } from 'lucide-react';
import { soundscape } from '../utils/audio';

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
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-[#151C18]">
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
                activeChapterIndex === idx ? 'scale-105 filter brightness-[0.82] contrast-[1.02]' : 'scale-100'
              }`}
            />
            {/* Cinematic Scrim for Warm Editorial Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Atmospheric Accent in Time-Lapse Mode */}
      {isTimelapseMode && (
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#C6A15B]/10 mix-blend-screen animate-pulse" />
      )}

      {/* Main Content Layout */}
      <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-12 lg:px-12">
        {/* Top Minimal Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2.5 text-xs tracking-wider text-white/80 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]"></span>
            <span className="uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">Equatorial Highlands</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-white/80">Direct Airside Link at JKIA Nairobi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors border ${
                audioEnabled
                  ? 'bg-[#C6A15B] text-black border-[#C6A15B] font-medium'
                  : 'bg-black/40 text-white/80 border-white/20 hover:text-white hover:bg-black/60'
              }`}
              title="Toggle natural ambient soundscape"
            >
              {audioEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span>{audioEnabled ? 'Sound Active' : 'Sound'}</span>
            </button>
          </div>
        </div>

        {/* Center Editorial Title & Value Proposition */}
        <div className="my-auto max-w-3xl py-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-3">
            Equatorial Floriculture & Produce
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium tracking-tight text-white leading-[1.08] text-balance">
            Cultivated in Kenya’s Volcanic Soil. Exported to Global Markets.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed font-sans-clean max-w-2xl font-normal">
            Sourced from high-altitude estates across the Great Rift Valley and Mount Kenya. Harvested at dawn, temperature-conditioned within hours, and routed directly through our airside logistics staging at JKIA Nairobi to international auctions and commercial buyers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] transition-all rounded-md shadow-lg shadow-black/30 whitespace-nowrap"
            >
              Request Rate Card
              <Plane className="h-4 w-4 text-[#C6A15B]" />
            </button>

            <a
              href="#flowers"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white hover:text-[#C6A15B] border border-white/25 hover:border-[#C6A15B] rounded-md bg-black/30 backdrop-blur-sm transition-all whitespace-nowrap"
            >
              Browse Flower Portfolio
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsTimelapseMode(!isTimelapseMode)}
              className={`inline-flex items-center gap-2 px-4 py-3.5 text-xs font-medium rounded-md border transition-colors ${
                isTimelapseMode
                  ? 'bg-[#C6A15B] text-black border-[#C6A15B] font-semibold'
                  : 'bg-black/30 text-white/80 border-white/20 hover:text-white'
              }`}
            >
              <FastForward className="h-4 w-4" />
              <span>{isTimelapseMode ? 'Time-Lapse Active' : 'Experience Airport Time-Lapse'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Editorial Storytelling Timeline */}
        <div className="rounded-xl bg-black/55 backdrop-blur-md p-5 border border-white/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#174D3B] hover:bg-[#C6A15B] hover:text-black transition-colors"
                aria-label={isPlaying ? 'Pause story presentation' : 'Play story presentation'}
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 ml-0.5 fill-current" />}
              </button>

              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#C6A15B]">
                  <span>{currentChapter.chapter}</span>
                  <span aria-hidden="true" className="text-white/30">·</span>
                  <span className="text-white font-serif-luxury text-sm">{currentChapter.title}</span>
                </div>
                <div className="text-xs text-white/70 mt-0.5 line-clamp-1">
                  {currentChapter.caption}
                </div>
              </div>
            </div>

            <div className="text-xs font-data text-white/70">
              <span className="text-[#C6A15B] mr-2">Location:</span>
              <span>{currentChapter.location}</span>
            </div>
          </div>

          {/* Chapter Scrubber Nav */}
          <div className="mt-3.5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(idx)}
                  className={`group relative text-left p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'bg-white/15 border-[#C6A15B] ring-1 ring-[#C6A15B]/30'
                      : 'bg-black/20 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Subtle active progress bar */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#C6A15B] rounded-b transition-all"
                      style={{ width: `${playbackProgress}%` }}
                    />
                  )}

                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={`font-data ${isActive ? 'text-[#C6A15B] font-semibold' : 'text-white/50'}`}>
                      0{ch.id}
                    </span>
                    <span className="text-[10px] text-white/60">{ch.chapter.split('·')[1]}</span>
                  </div>
                  <div className={`text-xs font-medium line-clamp-1 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
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
