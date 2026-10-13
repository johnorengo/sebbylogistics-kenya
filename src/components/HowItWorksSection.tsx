import React from 'react';
import { FileText, Calculator, CheckSquare, SearchCheck, Plane } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    label: 'Step 1',
    title: 'Send Requirements',
    description: 'Tell us the flowers, stem lengths, quantities, and destination airport you need.',
    icon: FileText,
    accent: 'bg-[#007A3D]',
  },
  {
    step: '02',
    label: 'Step 2',
    title: 'Receive Quote',
    description: 'We source from our partner farms and prepare the best pricing and airfreight options.',
    icon: Calculator,
    accent: 'bg-[#C8102E]',
  },
  {
    step: '03',
    label: 'Step 3',
    title: 'Confirm Order',
    description: 'Once approved, we coordinate and manage the entire purchasing process directly with growers.',
    icon: CheckSquare,
    accent: 'bg-[#174D3B]',
  },
  {
    step: '04',
    label: 'Step 4',
    title: 'Quality Inspection',
    description: 'Stems undergo grading, pest inspection, cold hydration, and export packaging at the packhouse.',
    icon: SearchCheck,
    accent: 'bg-[#007A3D]',
  },
  {
    step: '05',
    label: 'Step 5',
    title: 'Shipment & Delivery',
    description: 'Palletized cartons are transferred airside at JKIA and flown on scheduled flights to your destination.',
    icon: Plane,
    accent: 'bg-[#C8102E]',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#D8DED8]">
            <span className="h-2 w-2 rounded-full bg-[#007A3D]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-tight">
            Simple 5-Step Process · Farm to Flight Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4F5752] leading-relaxed">
            From your initial request to doorstep arrival at your international airport, we deliver total transparency and uncompromised cold-chain integrity.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop & Tablet) / Stepped Cards (Mobile) */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-1 bg-gradient-to-r from-[#007A3D] via-[#C8102E] to-[#174D3B] opacity-30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border-2 border-[#D8DED8] hover:border-[#174D3B] transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Step Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`h-12 w-12 rounded-xl ${item.accent} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-data font-bold uppercase tracking-wider text-[#4F5752]/70">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-[#174D3B] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4F5752] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EEF1EB] flex items-center justify-between text-[11px] font-data text-[#174D3B] font-semibold">
                    <span>Phase {item.step}</span>
                    <span className="text-[#007A3D]">Active Desk</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
