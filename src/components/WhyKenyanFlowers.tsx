import React from 'react';
import rosesImg from '../assets/images/premium_roses_collection_1791289297118.jpg';
import { Sun, Mountain, Sparkles, Clock } from 'lucide-react';

export const WhyKenyanFlowers: React.FC = () => {
  const advantages = [
    {
      title: 'Equatorial Light Spectrum',
      description: 'Positioned right on the equator, Kenyan estates experience twelve hours of uninterrupted natural sunlight every day of the year, yielding dense petal layers and intense pigmentation without artificial lighting.',
      icon: Sun,
    },
    {
      title: 'High-Altitude Microclimates',
      description: 'Farms situated between 2,000m and 2,500m elevation benefit from warm daytime temperatures and crisp mountain nights. This diurnal variance slows stem respiration, producing robust heads and long straight stems.',
      icon: Mountain,
    },
    {
      title: 'Volcanic Loam Soil',
      description: 'The ancient soils of the Great Rift Valley and Mount Kenya foothills are packed with organic matter, natural phosphorus, and trace minerals that nourish deep root structures and resilient flower foliage.',
      icon: Sparkles,
    },
    {
      title: 'Proven Vase Longevity',
      description: 'Dense cellular structures and thick stem cuticles allow Kenyan flowers to endure transcontinental air transit with minimal transpiration, opening gradually and gracefully over a 14 to 21 day vase period.',
      icon: Clock,
    },
  ];

  return (
    <section id="why-kenya" className="py-24 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image-led visual showcase */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#D8DED8] shadow-md bg-white">
              <img
                src={rosesImg}
                alt="Kenyan export roses"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold mb-1">
                  High-Altitude Terroir
                </div>
                <div className="text-xl font-serif-luxury font-medium">
                  Naturally Grown at 2,200m Above Sea Level
                </div>
                <div className="text-xs text-white/80 mt-1">
                  Great Rift Valley & Mount Kenya Highlands
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & 4 Key Advantages */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] mb-2">
              Natural Geographic Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#174D3B] tracking-tight leading-[1.15]">
              Why the World Chooses Kenyan Blooms
            </h2>
            <p className="mt-6 text-base text-[#4F5752] leading-relaxed">
              Kenya is one of the world's most celebrated origins for premium cut flowers. The combination of high-altitude growing zones and year-round equatorial sunshine creates optimal agronomic conditions that cannot be replicated elsewhere.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-[#D8DED8] shadow-sm">
                    <div className="h-9 w-9 rounded-lg bg-[#EEF1EB] flex items-center justify-center text-[#174D3B] mb-3">
                      <Icon className="h-4.5 w-4.5 text-[#174D3B]" />
                    </div>
                    <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
