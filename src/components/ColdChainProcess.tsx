import React, { useState } from 'react';
import { coldChainSteps } from '../data/logisticsData';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

import packhouseImg from '../assets/images/kenya_cold_chain_packhouse_1791289277218.jpg';
import airfreightImg from '../assets/images/jkia_cargo_airfreight_export_1791289288100.jpg';

export const ColdChainProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = coldChainSteps[activeStepIndex];

  return (
    <section id="journey" className="relative py-20 sm:py-24 bg-white border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E] mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#007A3D]"></span>
            <span>Disciplined Post-Harvest Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            The Farm-to-Global-Market Journey
          </h2>
          <p className="mt-4 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            Perishable cut flowers require swift and unbroken temperature management from harvest to arrival. Sebby Logistics conditions stems immediately post-harvest and protects them in a chilled envelope connecting high-altitude estates to international flights at JKIA Nairobi.
          </p>
        </div>

        {/* Storytelling Timeline Steps Nav */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {coldChainSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-[#174D3B] text-white border-[#174D3B] shadow-sm'
                    : 'bg-white text-[#4F5752] border-[#D8DED8] hover:border-[#174D3B]/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-data mb-2">
                  <span className={isActive ? 'text-[#C6A15B] font-bold' : 'text-[#C6A15B]'}>
                    Stage {step.step}
                  </span>
                  <span className={`text-[11px] ${isActive ? 'text-white/80' : 'text-[#4F5752]/70'}`}>
                    {step.duration.split(' ')[0]}
                  </span>
                </div>
                <div className={`text-xs font-medium line-clamp-2 ${isActive ? 'text-white' : 'text-[#174D3B]'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Storytelling Featured Card */}
        <div className="mt-8 rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative Prose */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-data text-[#C6A15B] mb-2 font-medium">
                <span>Stage {activeStep.step} of 05</span>
                <span aria-hidden="true" className="text-[#D8DED8]">·</span>
                <span className="text-[#174D3B] flex items-center gap-1 font-sans-clean font-medium">
                  <MapPin className="h-3.5 w-3.5 text-[#174D3B]" />
                  {activeStep.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#174D3B]">
                {activeStep.title}
              </h3>

              <p className="mt-4 text-[#4F5752] text-sm leading-relaxed">
                {activeStep.description}
              </p>

              {/* Quality Focus Narrative */}
              <div className="mt-6 p-4 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#174D3B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B]">
                      Post-Harvest Quality Standard
                    </div>
                    <div className="mt-1 text-xs text-[#4F5752] leading-relaxed">
                      {activeStep.criticalControlPoint}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Editorial Attributes */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8]">
                  <div className="text-[11px] text-[#C6A15B] font-semibold uppercase tracking-wider">Conditioning</div>
                  <div className="text-xs font-medium text-[#174D3B] mt-0.5">{activeStep.tempRange}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8]">
                  <div className="text-[11px] text-[#C6A15B] font-semibold uppercase tracking-wider">Environment</div>
                  <div className="text-xs font-medium text-[#174D3B] mt-0.5">{activeStep.rhLevel}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8]">
                  <div className="text-[11px] text-[#C6A15B] font-semibold uppercase tracking-wider">Window</div>
                  <div className="text-xs font-medium text-[#174D3B] mt-0.5">{activeStep.duration}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Large Photography Asset */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D8DED8] shadow-sm">
                <img
                  src={activeStepIndex >= 3 ? airfreightImg : packhouseImg}
                  alt={activeStep.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="bg-black/50 px-2.5 py-1 rounded backdrop-blur border border-white/20">
                      {activeStep.location}
                    </span>
                    <span className="text-[#C6A15B] font-semibold font-data">
                      {activeStep.tempRange.split('(')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
