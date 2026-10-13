import React from 'react';
import { Sprout, DollarSign, ClipboardCheck, Plane, CheckCircle2, UserCheck } from 'lucide-react';

const REASONS = [
  {
    icon: Sprout,
    title: 'Direct Farm Sourcing',
    description: 'We work with carefully selected flower farms across Kenya to provide access to premium-quality products.',
    accent: 'text-[#007A3D]',
    border: 'border-[#007A3D]/20 hover:border-[#007A3D]',
    bg: 'bg-[#007A3D]/5',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Our combined national efforts allow us to offer better and more cost-effective solutions than many traditional suppliers.',
    accent: 'text-[#C8102E]',
    border: 'border-[#C8102E]/20 hover:border-[#C8102E]',
    bg: 'bg-[#C8102E]/5',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete Procurement Management',
    description: 'We handle purchasing, supplier coordination, documentation, and export logistics on your behalf.',
    accent: 'text-[#007A3D]',
    border: 'border-[#007A3D]/20 hover:border-[#007A3D]',
    bg: 'bg-[#007A3D]/5',
  },
  {
    icon: Plane,
    title: 'Global Airfreight Solutions',
    description: 'We arrange reliable airfreight services to destinations around the world.',
    accent: 'text-[#C8102E]',
    border: 'border-[#C8102E]/20 hover:border-[#C8102E]',
    bg: 'bg-[#C8102E]/5',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Every order is sourced from trusted farms committed to maintaining high production standards.',
    accent: 'text-[#007A3D]',
    border: 'border-[#007A3D]/20 hover:border-[#007A3D]',
    bg: 'bg-[#007A3D]/5',
  },
  {
    icon: UserCheck,
    title: 'Single Point of Contact',
    description: 'One partner handling your sourcing and shipping needs from start to finish.',
    accent: 'text-[#174D3B]',
    border: 'border-[#174D3B]/20 hover:border-[#174D3B]',
    bg: 'bg-[#174D3B]/5',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-10 sm:py-14 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-tight">
            Better Flowers. Better Prices. Better Logistics.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4F5752] leading-relaxed">
            By eliminating unnecessary middle-tiers and bundling airfreight volume directly out of JKIA, Sebby Logistics delivers superior stems at unrivaled commercial rates.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-white border-2 ${item.border} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group`}
              >
                <div>
                  <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center ${item.accent} mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#174D3B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[#4F5752] leading-relaxed">
                    {item.description}
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
