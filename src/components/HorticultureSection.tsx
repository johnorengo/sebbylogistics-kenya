import React, { useState } from 'react';
import { horticultureProducts } from '../data/flowerData';
import { HorticultureProduct } from '../types';
import { ShieldCheck, ArrowUpRight, Leaf } from 'lucide-react';

interface HorticultureSectionProps {
  onSelectProductForRFQ: (productName: string) => void;
}

export const HorticultureSection: React.FC<HorticultureSectionProps> = ({ onSelectProductForRFQ }) => {
  const [selectedProduct, setSelectedProduct] = useState<HorticultureProduct>(horticultureProducts[0]);

  return (
    <section id="horticulture" className="relative py-20 sm:py-24 bg-[#F8FAF8] border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D] mb-2 flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5 text-[#007A3D]" />
            <span>High-Value Fresh Produce</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            Kenya Horticulture Export Line
          </h2>
          <p className="mt-4 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            In addition to fresh flowers, Sebby Logistics handles select high-grade horticultural produce sourced from regional partner farms in Kenya. Consignments are conditioned under strict temperature-controlled standards and prepared for international airfreight dispatch.
          </p>
        </div>

        {/* Product Selector Bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {horticultureProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`text-left p-5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#0B0F0D] text-white border-2 border-[#007A3D] shadow-md'
                    : 'bg-white text-[#3A453F] border-[#D9E1DC] hover:border-[#007A3D]'
                }`}
              >
                <div className={`text-[11px] font-data uppercase tracking-wider mb-1 ${isSelected ? 'text-[#009E49]' : 'text-[#C8102E]'}`}>
                  {prod.seasonality}
                </div>
                <div className={`text-base font-serif-luxury font-bold ${isSelected ? 'text-white' : 'text-[#0B110E]'}`}>
                  {prod.name}
                </div>
                <div className={`mt-2 text-xs line-clamp-2 ${isSelected ? 'text-white/80' : 'text-[#4F5752]'}`}>
                  {prod.varieties.join(' · ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Product Deep Dive Container */}
        <div className="mt-10 rounded-2xl bg-white border border-[#D8DED8] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Image & Key Attributes */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EEF1EB] border border-[#D8DED8]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-data text-white bg-black/50 backdrop-blur px-3 py-1 rounded">
                  Origin: {selectedProduct.originRegion}
                </div>
              </div>

              {/* Certifications row */}
              <div className="mt-6 pt-6 border-t border-[#D8DED8]">
                <div className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold mb-3">
                  Compliance Guidelines
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 text-xs text-[#174D3B] font-medium bg-[#EEF1EB] px-2.5 py-1 rounded border border-[#D8DED8]"
                    >
                      <ShieldCheck className="h-3 w-3 text-[#285F4A]" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications & Commercial Table */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#C6A15B] font-data uppercase tracking-wider font-semibold">
                  Botanical: {selectedProduct.botanicalName}
                </div>
                <h3 className="mt-1 text-2xl sm:text-3xl font-serif-luxury font-medium text-[#174D3B]">
                  {selectedProduct.name}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#4F5752] leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="mt-8 rounded-xl bg-[#F7F6F1] border border-[#D8DED8] overflow-hidden">
                  <div className="divide-y divide-[#D8DED8] text-xs">
                    <div className="flex justify-between p-3.5">
                      <span className="text-[#4F5752] font-medium">Commercial Varieties:</span>
                      <span className="text-[#174D3B] font-semibold text-right font-data">{selectedProduct.varieties.join(', ')}</span>
                    </div>
                    <div className="flex justify-between p-3.5">
                      <span className="text-[#4F5752] font-medium">Export Packaging:</span>
                      <span className="text-[#174D3B] font-semibold text-right font-data">{selectedProduct.packaging}</span>
                    </div>
                    <div className="flex justify-between p-3.5">
                      <span className="text-[#4F5752] font-medium">Standard Grading / Counts:</span>
                      <span className="text-[#174D3B] font-semibold text-right font-data">{selectedProduct.netWeight}</span>
                    </div>
                    <div className="flex justify-between p-3.5">
                      <span className="text-[#4F5752] font-medium">Storage & Transit Temp:</span>
                      <span className="text-[#174D3B] text-right font-data font-semibold">{selectedProduct.storageTemp}</span>
                    </div>
                    <div className="flex justify-between p-3.5">
                      <span className="text-[#4F5752] font-medium">Annual Supply Window:</span>
                      <span className="text-[#174D3B] font-semibold text-right font-data">{selectedProduct.seasonality}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#D9E1DC] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectProductForRFQ(selectedProduct.name)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md transition-colors shadow-sm"
                >
                  Request Produce Rate Card
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </button>
                <div className="text-xs text-[#4F5752] font-sans-clean">
                  *Scheduled air cargo allocations subject to harvest availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
