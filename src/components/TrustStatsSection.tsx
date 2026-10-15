import React from 'react';
import { Award, Globe2, Layers, Users } from 'lucide-react';

const STATS = [
  {
    value: '100%',
    title: 'Quality Sourced Flowers',
    subtitle: 'Direct from vetted high-altitude partner farms in the Rift Valley',
    icon: Award,
    color: 'text-[#007A3D]',
    borderColor: 'border-[#007A3D]/20 hover:border-[#007A3D]',
  },
  {
    value: 'Global',
    title: 'Worldwide Delivery',
    subtitle: 'Widebody cold-chain scheduled cargo flights directly from JKIA',
    icon: Globe2,
    color: 'text-[#C8102E]',
    borderColor: 'border-[#C8102E]/20 hover:border-[#C8102E]',
  },
  {
    value: 'End-to-End',
    title: 'Procurement & Logistics',
    subtitle: 'Single point of contact for ordering, farm inspection & airfreight',
    icon: Layers,
    color: 'text-[#007A3D]',
    borderColor: 'border-[#007A3D]/20 hover:border-[#007A3D]',
  },
  {
    value: 'Trusted',
    title: 'Farm Network Partners',
    subtitle: 'Dedicated relationships delivering consistent export grade stems',
    icon: Users,
    color: 'text-[#C8102E]',
    borderColor: 'border-[#C8102E]/20 hover:border-[#C8102E]',
  },
];

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="relative py-4 sm:py-5 bg-[#EEF1EB] border-b border-[#D8DED8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Proper heading explaining the cards below */}
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#007A3D]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
              Why Buyers Choose Sebby
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            Farm Prices, Handled Freight — One Accountable Partner
          </h2>
          <p className="mt-2 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            We buy directly from vetted Kenyan farms and fly your flowers cold-chain from JKIA
            to any airport worldwide — purchase and logistics under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-white border-2 ${stat.borderColor} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl sm:text-4xl font-serif-luxury font-bold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-[#F7F6F1] flex items-center justify-center text-[#174D3B]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#174D3B] font-serif-luxury leading-snug">
                    {stat.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#4F5752] leading-relaxed">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
