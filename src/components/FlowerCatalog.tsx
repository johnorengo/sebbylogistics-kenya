import React, { useState } from 'react';
import { FlowerVariety } from '../types';
import { flowerVarieties } from '../data/flowerData';
import { ArrowRight, Eye, X } from 'lucide-react';

interface FlowerCatalogProps {
  onSelectForRFQ: (varietyName: string, stemLength?: string) => void;
  onOpenFullCatalog: () => void;
}

export const FlowerCatalog: React.FC<FlowerCatalogProps> = ({ onSelectForRFQ, onOpenFullCatalog }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalVariety, setActiveModalVariety] = useState<FlowerVariety | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Portfolio' },
    { id: 'roses', label: 'T-Hybrid Roses' },
    { id: 'spray-roses', label: 'Spray Roses' },
    { id: 'fillers', label: 'Summer Flowers & Fillers' },
  ];

  const filteredVarieties = selectedCategory === 'all'
    ? flowerVarieties
    : flowerVarieties.filter((item) => item.category === selectedCategory);

  return (
    <section id="flowers" className="relative py-20 sm:py-24 bg-white border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9E1DC]">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D] mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#007A3D]"></span>
              <span>Floriculture Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
              Kenya&apos;s Floral Excellence
            </h2>
            <p className="mt-3 text-[#3A453F] text-base sm:text-lg leading-relaxed">
              Kenya is globally recognized as one of the world&apos;s leading flower-producing countries. Through our network of trusted farms, we provide access to fresh, high-quality flowers cultivated under ideal growing conditions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenFullCatalog}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#007A3D] hover:bg-[#009E49] rounded-md transition-colors shadow-sm"
            >
              Export Spec Sheet
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs rounded-md transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#007A3D] text-white shadow-sm font-bold'
                  : 'bg-[#F8FAF8] text-[#3A453F] hover:text-[#0B110E] border border-[#D9E1DC] hover:border-[#007A3D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flower Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVarieties.map((variety) => (
            <div
              key={variety.id}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-[#D8DED8] hover:border-[#174D3B]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Image Frame with Fallback and Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EEF1EB]">
                <img
                  src={variety.image}
                  alt={variety.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Grade and Availability Text */}
                <div className="absolute top-3 left-3 text-[11px] font-medium tracking-wide text-white drop-shadow bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  <span>{variety.grade}</span>
                  <span aria-hidden="true" className="mx-1.5 opacity-60">·</span>
                  <span>{variety.availability}</span>
                </div>

                <button
                  onClick={() => setActiveModalVariety(variety)}
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/90 text-[#174D3B] hover:bg-white text-xs font-medium shadow-sm border border-[#D8DED8] transition-colors"
                  aria-label={`Inspect ${variety.name} specifications`}
                >
                  <Eye className="h-3.5 w-3.5 text-[#C6A15B]" />
                  <span>Inspect Specs</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs text-[#C6A15B] font-data tracking-wide font-medium">
                  {variety.originRegion}
                </div>
                <h3 className="mt-1 text-xl font-serif-luxury font-medium text-[#174D3B] group-hover:text-[#285F4A] transition-colors">
                  {variety.name}
                </h3>
                <div className="text-xs italic text-[#4F5752]/80 font-serif-luxury mt-0.5">
                  {variety.botanicalName}
                </div>

                <p className="mt-3 text-xs text-[#4F5752] leading-relaxed line-clamp-2">
                  {variety.description}
                </p>

                {/* Technical Metadata */}
                <div className="mt-4 pt-4 border-t border-[#D8DED8] flex flex-wrap items-center gap-y-1.5 text-xs text-[#4F5752]">
                  <span className="font-data font-medium text-[#174D3B]">Head: {variety.headSize}</span>
                  <span aria-hidden="true" className="mx-2 text-[#D8DED8]">·</span>
                  <span className="font-data font-medium text-[#174D3B]">Vase: {variety.vaseLife}</span>
                  <span aria-hidden="true" className="mx-2 text-[#D8DED8]">·</span>
                  <span className="font-data font-medium text-[#174D3B]">Petals: {variety.petalCount}</span>
                </div>

                {/* Stem Length Options */}
                <div className="mt-3 flex items-center gap-2 text-xs text-[#4F5752]">
                  <span className="text-[#C6A15B] text-[11px] uppercase tracking-wider font-semibold">Stem Lengths:</span>
                  <span className="font-data text-[#174D3B] font-medium">{variety.stemLengths.join(', ')}</span>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-[#D9E1DC] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalVariety(variety)}
                    className="text-xs font-semibold text-[#0B110E] hover:text-[#007A3D] transition-colors"
                  >
                    Technical Data Sheet
                  </button>
                  <button
                    onClick={() => onSelectForRFQ(variety.name, variety.stemLengths[0])}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded transition-colors shadow-sm"
                  >
                    Inquire RFQ
                    <ArrowRight className="h-3 w-3 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector for Individual Flower */}
      {activeModalVariety && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveModalVariety(null)}
              className="absolute top-4 right-4 text-[#4F5752] hover:text-[#174D3B] p-2 rounded-full hover:bg-[#EEF1EB]"
              aria-label="Close variety details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-1/2 aspect-square rounded-xl overflow-hidden bg-[#EEF1EB] border border-[#D8DED8]">
                <img
                  src={activeModalVariety.image}
                  alt={activeModalVariety.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-[#C6A15B]">
                    {activeModalVariety.grade} · {activeModalVariety.originRegion}
                  </div>
                  <h3 className="text-2xl font-serif-luxury font-semibold text-[#174D3B] mt-1">
                    {activeModalVariety.name}
                  </h3>
                  <div className="text-xs italic text-[#4F5752] mb-3">
                    {activeModalVariety.botanicalName}
                  </div>
                  <p className="text-xs text-[#4F5752] leading-relaxed">
                    {activeModalVariety.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs border-t border-[#D8DED8] pt-3">
                    <div className="flex justify-between py-1 border-b border-[#D8DED8]/60">
                      <span className="text-[#4F5752]">Head Diameter:</span>
                      <span className="font-data font-semibold text-[#174D3B]">{activeModalVariety.headSize}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D8DED8]/60">
                      <span className="text-[#4F5752]">Petal Density:</span>
                      <span className="font-data font-semibold text-[#174D3B]">{activeModalVariety.petalCount}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D8DED8]/60">
                      <span className="text-[#4F5752]">Vase Life Indication:</span>
                      <span className="font-data font-semibold text-[#174D3B]">{activeModalVariety.vaseLife}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#D8DED8]/60">
                      <span className="text-[#4F5752]">Master Box Packing:</span>
                      <span className="font-data font-semibold text-[#174D3B]">{activeModalVariety.bunchesPerBox} bunches ({activeModalVariety.bunchesPerBox * activeModalVariety.stemsPerBunch} stems)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#4F5752]">Available Lengths:</span>
                      <span className="font-data font-semibold text-[#174D3B]">{activeModalVariety.stemLengths.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8DED8] flex gap-3">
                  <button
                    onClick={() => {
                      const varName = activeModalVariety.name;
                      const length = activeModalVariety.stemLengths[0];
                      setActiveModalVariety(null);
                      onSelectForRFQ(varName, length);
                    }}
                    className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] rounded-md transition-colors shadow-sm"
                  >
                    Request Pricing
                  </button>
                  <button
                    onClick={() => setActiveModalVariety(null)}
                    className="py-2.5 px-4 text-xs font-medium text-[#4F5752] border border-[#D8DED8] rounded-md hover:bg-[#EEF1EB]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
