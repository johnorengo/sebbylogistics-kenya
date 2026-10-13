import React, { useState } from 'react';
import { Image, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

import premiumRosesImg from '../assets/images/premium_roses_collection_1791289297118.jpg';
import mixedRosesImg from '../assets/images/mixed_roses_kenya_1791470092732.jpg';
import summerFlowersImg from '../assets/images/summer_flowers_kenya_1791470109303.jpg';
import packhouseImg from '../assets/images/kenya_cold_chain_packhouse_1791289277218.jpg';
import farmImg from '../assets/images/kenya_rose_farm_naivasha_1791289265374.jpg';
import airfreightImg from '../assets/images/jkia_cargo_airfreight_export_1791289288100.jpg';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Premium Roses',
    category: 'T-Hybrid & Spray Roses',
    location: 'Naivasha Highland Estates',
    description: 'Long-stemmed, high-aperture cut roses grown under equatorial sunlight.',
    image: premiumRosesImg,
  },
  {
    id: 2,
    title: 'Mixed Roses',
    category: 'Custom Color Assortments',
    location: 'Rift Valley Greenhouses',
    description: 'Freshly harvested yellow, red, orange, pink and bi-color stems prepared for export.',
    image: mixedRosesImg,
  },
  {
    id: 3,
    title: 'Summer Flowers',
    category: 'Gypsophila, Fillers & Carnations',
    location: 'Mount Kenya Foothills',
    description: 'Delicate gypsophila, hypericum berries and vibrant summer blooms graded for florists.',
    image: summerFlowersImg,
  },
  {
    id: 4,
    title: 'Packing Operations',
    category: 'Cold-Chain Conditioning',
    location: 'On-Farm Packhouses',
    description: 'Manual sorting, hydration dipping, stem length classification and protective sleeve boxing.',
    image: packhouseImg,
  },
  {
    id: 5,
    title: 'Flower Farms',
    category: 'High-Altitude Cultivation',
    location: 'Great Rift Valley Basin',
    description: 'State-of-the-art greenhouse climate control at 2,200m altitude above sea level.',
    image: farmImg,
  },
  {
    id: 6,
    title: 'Freight Handling',
    category: 'Airside Palletization',
    location: 'JKIA Perishable Cargo Terminal',
    description: 'Pre-cooled PMC air pallets built to master carton specifications and loaded onto widebody flights.',
    image: airfreightImg,
  },
];

export const FlowerGallerySection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIdx = GALLERY_ITEMS.findIndex((item) => item.id === activeModalItem.id);
    const nextIdx = (currentIdx + 1) % GALLERY_ITEMS.length;
    setActiveModalItem(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIdx = GALLERY_ITEMS.findIndex((item) => item.id === activeModalItem.id);
    const prevIdx = (currentIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveModalItem(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#F7F6F1] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Visual Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-tight">
              Flower Gallery
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4F5752] leading-relaxed">
              Explore our hand-cut varieties, greenhouse estates, on-site cold-chain sorting, and airside cargo logistics connecting Nairobi to global markets.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-data font-semibold text-[#174D3B] px-4 py-2 rounded-full bg-white border border-[#D8DED8]">
            <Image className="h-4 w-4 text-[#007A3D]" />
            <span>6 Featured Operations Chapters</span>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#D8DED8] hover:border-[#174D3B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/10">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-data font-semibold text-white border border-white/20">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-tight text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-sans-clean">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3.5 flex items-center justify-between text-xs font-data bg-white">
                <span className="text-[#007A3D] font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#007A3D]" />
                  {item.location}
                </span>
                <span className="text-[#4F5752] font-medium group-hover:text-[#174D3B]">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B0F0D] rounded-3xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev/Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Metadata */}
            <div className="p-6 sm:p-8 bg-[#0B0F0D] text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-data uppercase tracking-wider text-[#009E49] mb-1 font-bold">
                  {activeModalItem.category} · {activeModalItem.location}
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-white">
                  {activeModalItem.title}
                </h3>
                <p className="mt-1 text-sm text-white/80 max-w-xl">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-white/60 font-data block">Sebby Logistics Ltd</span>
                <span className="text-xs text-[#C8102E] font-semibold">JKIA Nairobi Airside</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
