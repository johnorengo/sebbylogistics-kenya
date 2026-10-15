import React from 'react';
import { MapPin, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
const pic1Img = '/images/kenyan-roses.jpg';
import { SebbyLogo } from './SebbyLogo';

const farmLocations = [
  'Naivasha', 'Nakuru', 'Nyahururu', 'Rumuruti', 'Nanyuki & Timau',
  'Kiambu', 'Isinya', 'Mount Elgon', 'Eldoret', 'Kajiado',
];

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="relative pt-7 pb-14 sm:pt-10 sm:pb-20 bg-[#F7F6F1] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Eyebrow Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-2 w-2 rounded-full bg-[#007A3D]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
            About Us
          </span>
          <span className="text-[#D8DED8]">/</span>
          <span className="text-xs font-medium text-[#4F5752] font-data">
            SEBBY Logistics Ltd
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-[1.15]">
                Your Trusted Partner for Kenyan Flower Exports
              </h2>
              <div className="mt-3 inline-block text-base sm:text-lg font-serif-luxury italic text-[#285F4A] font-semibold">
                From Kenyan farms. To the world.
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#4F5752] leading-relaxed font-sans-clean font-normal">
              <p>
                At <strong>SEBBY Logistics Ltd</strong>, we connect international flower buyers with the finest flower farms in Kenya. Through strong national partnerships and an extensive network of growers, we provide access to premium flowers at better prices while simplifying the entire procurement and logistics process.
              </p>
              <p>
                Our team manages every stage of the supply chain, from farm selection and purchasing to quality control and international airfreight arrangements.
              </p>
              <p>
                Whether you are a wholesaler, distributor, florist, supermarket chain, or flower importer, we ensure a seamless sourcing experience from Kenya to your destination.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#D8DED8] bg-gradient-to-br from-white to-[#EEF1EB] p-5 sm:p-6 shadow-sm">
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#007A3D]" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#007A3D]">
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                    Our farm network
                  </p>
                  <h3 className="mt-1.5 text-2xl sm:text-3xl font-serif-luxury font-bold leading-tight text-[#174D3B]">
                    Rooted across Kenya
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-[#007A3D]/15 bg-white/80 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-[#285F4A]">
                  {farmLocations.length} growing areas
                </span>
              </div>
              <ul aria-label="Flower farm locations in Kenya" className="mt-4 grid grid-cols-2 gap-x-4 sm:gap-x-8">
                {farmLocations.map((location) => (
                  <li key={location} className="flex items-center gap-2.5 border-t border-[#174D3B]/10 py-3 text-xs sm:text-sm font-medium leading-snug text-[#285F4A]">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#007A3D]/65" />
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            {/* Short Company Story and Mission Callout */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-l-[#C8102E] border border-[#D8DED8] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-[#C8102E]" />
                <span className="text-xs uppercase tracking-wider font-bold text-[#C8102E]">
                  Company Story & Mission
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#174D3B] font-serif-luxury italic leading-relaxed">
                &quot;Our mission is to connect global flower buyers directly with Kenyan growers through transparent sourcing, dependable quality and seamless airfreight.&quot;
              </p>
            </div>

            {/* Trust Highlights Row */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#174D3B]">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#D8DED8]">
                <ShieldCheck className="h-4 w-4 text-[#007A3D]" />
                <span>Single Point of Contact</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#D8DED8]">
                <ShieldCheck className="h-4 w-4 text-[#C8102E]" />
                <span>Direct Grower Rates</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#D8DED8]">
                <ShieldCheck className="h-4 w-4 text-[#007A3D]" />
                <span>Scheduled Airfreight</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image (pic1.png fresh harvest roses) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src={pic1Img}
                alt="Fresh Harvest Orange Roses Hand-Cut in Kenya Greenhouse"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Warm Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge Over Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#007A3D] flex items-center justify-center shrink-0">
                    <Sprout className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#00E575]">
                      Direct Farm Harvest
                    </div>
                    <div className="text-sm font-serif-luxury font-semibold text-white">
                      Across Kenya's Flower-Growing Regions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full bg-white border border-[#D8DED8] shadow-md flex items-center justify-center p-2 hidden sm:flex">
              <SebbyLogo className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
