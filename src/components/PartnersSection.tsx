import React from 'react';
import { NcbaOfficialLogo } from './NcbaOfficialLogo';
import { StanbicOfficialLogo } from './StanbicOfficialLogo';

// Official vector logo for NCBA Group
const NcbaLogo: React.FC = () => (
  <NcbaOfficialLogo className="h-11 w-auto max-w-[175px]" />
);

// Official vector logo for Stanbic Bank
const StanbicLogo: React.FC = () => (
  <StanbicOfficialLogo className="h-12 w-auto max-w-[195px]" />
);

// Authoritative emblem for Legal Team (to be updated with custom logo later)
const LegalTeamLogo: React.FC = () => (
  <svg viewBox="0 0 210 52" className="h-12 w-auto max-w-[170px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scales of Justice Emblem */}
    <g transform="translate(6, 4)">
      <circle cx="22" cy="22" r="22" fill="#0F172A" />
      <path
        d="M22 10V34M14 14H30M14 14L10 23M30 14L34 23M8 23C8 25 12 25 12 23M32 23C32 25 36 25 36 23M18 34H26"
        stroke="#E5A823"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    {/* Text: LEGAL TEAM */}
    <text
      x="58"
      y="27"
      fill="#0F172A"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="20"
      fontWeight="800"
      letterSpacing="0.8"
    >
      LEGAL TEAM
    </text>
    <text
      x="59"
      y="39"
      fill="#64748B"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="8"
      fontWeight="600"
      letterSpacing="1.2"
    >
      CORPORATE ADVISORY
    </text>
  </svg>
);

export const PartnersSection: React.FC = () => {
  return (
    <div id="partners" className="mt-16 sm:mt-20 pt-14 border-t border-[#D9E1DC]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-[#007A3D]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
            Strategic Alliances
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
          Our Partners
        </h3>
      </div>

      {/* 3 Partner Tabs matching the Contact Cards design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* 1. NCBA GROUP */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#D9E1DC] hover:border-[#38302E] transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group flex flex-col items-center justify-center text-center min-h-[160px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#38302E]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-center py-2">
            <NcbaLogo />
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 w-full">
            <span className="text-sm sm:text-base font-bold font-serif-luxury text-[#0B110E] tracking-tight block">
              NCBA GROUP
            </span>
          </div>
        </div>

        {/* 2. STANBIC BANK */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#D9E1DC] hover:border-[#0033A0] transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group flex flex-col items-center justify-center text-center min-h-[160px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#0033A0]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-center py-2">
            <StanbicLogo />
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 w-full">
            <span className="text-sm sm:text-base font-bold font-serif-luxury text-[#0B110E] tracking-tight block">
              STANBIC BANK
            </span>
          </div>
        </div>

        {/* 3. LEGAL TEAM */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#D9E1DC] hover:border-[#0F172A] transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group flex flex-col items-center justify-center text-center min-h-[160px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#0F172A]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
          <div className="flex items-center justify-center py-2">
            <LegalTeamLogo />
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 w-full">
            <span className="text-sm sm:text-base font-bold font-serif-luxury text-[#0B110E] tracking-tight block">
              LEGAL TEAM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
