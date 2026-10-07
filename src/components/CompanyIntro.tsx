import React from 'react';
import { SunMedium, Mountain, PlaneTakeoff, ShieldCheck } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F6F1] border-b border-[#D8DED8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] mb-3">
              About Sebby Logistics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#174D3B] tracking-tight leading-[1.15]">
              Connecting Kenya’s Rich Floriculture with the World’s Leading Floral Markets.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#4F5752] leading-relaxed font-sans-clean">
              Sebby Logistics specializes in the sourcing, handling, and international export of premium high-altitude cut flowers and select horticultural produce from Kenya. Operating with direct airside staging access at Jomo Kenyatta International Airport (JKIA) in Nairobi, we bridge the gap between equatorial growers and global wholesale markets.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#4F5752] leading-relaxed">
              Our partner estates benefit from Kenya’s unique geographical advantage: twelve hours of natural equatorial daylight, high-altitude cooling nights, and rich volcanic soils. Every stem is harvested with care, conditioned under disciplined temperature controls, and airfreighted swiftly to preserve freshness, aperture, and vase longevity.
            </p>
          </div>

          {/* Right Column: Key Editorial Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
              <div className="h-10 w-10 rounded-lg bg-[#E3EAE3] flex items-center justify-center text-[#174D3B] mb-4">
                <Mountain className="h-5 w-5" />
              </div>
              <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                High-Altitude Farms
              </h3>
              <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                Grown above 2,000 meters elevation in the Great Rift Valley, yielding large head sizes and sturdy stems.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
              <div className="h-10 w-10 rounded-lg bg-[#E3EAE3] flex items-center justify-center text-[#174D3B] mb-4">
                <SunMedium className="h-5 w-5 text-[#C6A15B]" />
              </div>
              <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                Equatorial Climate
              </h3>
              <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                Consistent 365-day sunlight cycles ensuring stable year-round production for holiday and auction demands.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
              <div className="h-10 w-10 rounded-lg bg-[#E3EAE3] flex items-center justify-center text-[#174D3B] mb-4">
                <PlaneTakeoff className="h-5 w-5" />
              </div>
              <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                Direct Airside Access
              </h3>
              <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                Staging facilities at JKIA Nairobi minimize tarmac dwell time and expedite scheduled departures.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
              <div className="h-10 w-10 rounded-lg bg-[#E3EAE3] flex items-center justify-center text-[#174D3B] mb-4">
                <ShieldCheck className="h-5 w-5 text-[#285F4A]" />
              </div>
              <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                Quality Governance
              </h3>
              <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                Full documentation, standardized sorting, and export compliance to meet European and global buyer protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
