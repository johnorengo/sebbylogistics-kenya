import React from 'react';
import { Flower2, BadgeDollarSign, PlaneTakeoff, Check, Sparkles } from 'lucide-react';

export const OurServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#F7F6F1] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#007A3D]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-tight">
            Comprehensive Flower Procurement & Global Freight
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4F5752] leading-relaxed">
            From initial greenhouse variety selection to cold-chain airside transfer at JKIA, we handle every link in the Kenyan flower export supply chain.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Service 1: Flower Sourcing */}
          <div className="rounded-2xl bg-white border-2 border-[#007A3D]/25 hover:border-[#007A3D] transition-all shadow-sm p-7 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="h-12 w-12 rounded-xl bg-[#007A3D]/10 text-[#007A3D] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Flower2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#174D3B] mb-3">
                Flower Sourcing
              </h3>
              <p className="text-sm sm:text-base text-[#4F5752] leading-relaxed mb-6">
                We identify and source flowers from reputable Kenyan farms based on your requirements and market demands.
              </p>

              <div className="pt-4 border-t border-[#D8DED8]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#007A3D] mb-3 font-data">
                  Available Flower Categories
                </div>
                <ul className="space-y-2.5 text-sm text-[#174D3B]">
                  {[
                    'Roses (T-Hybrid & Spray Varieties)',
                    'Summer Flowers',
                    'Cut Flowers',
                    'Specialty Flowers',
                    'Seasonal Varieties',
                    'Custom Assortments',
                  ].map((category, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#007A3D]/10 text-[#007A3D] flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2: Purchasing Management */}
          <div className="rounded-2xl bg-white border-2 border-[#C8102E]/25 hover:border-[#C8102E] transition-all shadow-sm p-7 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="h-12 w-12 rounded-xl bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <BadgeDollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#174D3B] mb-3">
                Purchasing Management
              </h3>
              <p className="text-sm sm:text-base text-[#4F5752] leading-relaxed mb-6">
                We negotiate and coordinate purchases directly with growers to secure the best possible value and quality.
              </p>

              <div className="pt-4 border-t border-[#D8DED8]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-3 font-data">
                  Services Include
                </div>
                <ul className="space-y-2.5 text-sm text-[#174D3B]">
                  {[
                    'Supplier selection',
                    'Price negotiation',
                    'Order coordination',
                    'Quality monitoring',
                    'Export preparation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: International Freight & Logistics */}
          <div className="rounded-2xl bg-white border-2 border-[#174D3B]/25 hover:border-[#174D3B] transition-all shadow-sm p-7 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="h-12 w-12 rounded-xl bg-[#174D3B]/10 text-[#174D3B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <PlaneTakeoff className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#174D3B] mb-3">
                International Freight & Logistics
              </h3>
              <p className="text-sm sm:text-base text-[#4F5752] leading-relaxed mb-6">
                Our logistics team organizes flowers for export and arranges airfreight to your destination.
              </p>

              <div className="pt-4 border-t border-[#D8DED8]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#174D3B] mb-3 font-data">
                  Services Include
                </div>
                <ul className="space-y-2.5 text-sm text-[#174D3B]">
                  {[
                    'Export documentation',
                    'Cargo handling',
                    'Airfreight booking',
                    'Shipment coordination',
                    'Delivery support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#174D3B]/10 text-[#174D3B] flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Banner */}
        <div className="rounded-3xl bg-[#0B0F0D] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-1.5 kenya-ribbon-bar" />
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#009E49] mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-bold text-white leading-snug">
              &quot;Our mission is to provide international buyers of Kenyan flowers with a better, more affordable, and easier purchasing experience. By working closely with trusted national partners, we contribute to the growth of Kenya&apos;s flower industry while delivering exceptional value to our clients worldwide.&quot;
            </h3>
            <div className="mt-4 text-xs sm:text-sm text-white/70 font-sans-clean">
              SEBBY Logistics Ltd · Nairobi & Jomo Kenyatta International Airport (JKIA) Cargo Desk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
