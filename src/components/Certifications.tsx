import React from 'react';
import { ShieldCheck, Award, Leaf, HeartHandshake, FileCheck, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    {
      title: 'Kenya Flower Council Guidelines',
      level: 'Industry Best Practices',
      icon: Award,
      description: 'Partner farms align with established floriculture standards, focusing on responsible water management and safe agronomic practices.',
    },
    {
      title: 'Fair Trade Principles',
      level: 'Social Responsibility Guidelines',
      icon: HeartHandshake,
      description: 'Support for fair labor conditions, safe workplace environments, and sustainable community empowerment across growing areas.',
    },
    {
      title: 'GLOBALG.A.P. Standard Alignment',
      level: 'Agricultural Quality Assurance',
      icon: Leaf,
      description: 'Framework covering agricultural integrity, worker safety, product traceability, and integrated pest management systems.',
    },
    {
      title: 'Phytosanitary Export Clearance',
      level: 'Regulatory Plant Health Protocols',
      icon: ShieldCheck,
      description: 'Inspection and electronic phytosanitary certificate documentation handled in compliance with official destination customs regulations.',
    },
    {
      title: 'Environmental Benchmarks',
      level: 'Sustainability Guidelines',
      icon: FileCheck,
      description: 'Implementation of biological pest control methods, efficient drip irrigation, and responsible fertilizer optimization.',
    },
    {
      title: 'Ethical Trade & Workplace Audits',
      level: 'Ethical Labor Standards',
      icon: CheckCircle2,
      description: 'Independent evaluation principles ensuring safe packhouse environments, fair treatment, and adherence to labor laws.',
    },
  ];

  return (
    <section id="quality" className="relative py-20 sm:py-24 bg-white border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D] mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C8102E]"></span>
            <span>Quality Assurance & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            International Trade Standards & Export Governance
          </h2>
          <p className="mt-4 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            Our partner estates and export packing operations align with recognized international floriculture, environmental, and ethical trade benchmarks to ensure seamless clearance at destination auction houses and supermarkets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#D8DED8] hover:border-[#174D3B]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF1EB] border border-[#D8DED8] text-[#174D3B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-data text-[#C6A15B] uppercase tracking-wider font-semibold">
                      {c.level}
                    </div>
                    <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B] mt-0.5">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#4F5752] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
