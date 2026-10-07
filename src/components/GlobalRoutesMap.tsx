import React, { useState } from 'react';
import { flightRoutes } from '../data/logisticsData';
import { FlightRoute } from '../types';
import { Shield, CheckCircle2, Globe2 } from 'lucide-react';

export const GlobalRoutesMap: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<FlightRoute>(flightRoutes[0]);

  return (
    <section id="markets" className="relative py-24 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] mb-2 flex items-center gap-2">
            <Globe2 className="h-3.5 w-3.5 text-[#174D3B]" />
            <span>Airside Logistics & Global Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#174D3B] tracking-tight">
            Connecting JKIA Nairobi to the World’s Floral Centers
          </h2>
          <p className="mt-4 text-[#4F5752] text-sm sm:text-base leading-relaxed">
            Operating from the air cargo staging area at Jomo Kenyatta International Airport (JKIA), our consignments connect directly onto scheduled widebody flights serving European auctions, British retail distributors, and Middle Eastern hubs.
          </p>
        </div>

        {/* Route Selector Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {flightRoutes.map((route) => {
            const isSelected = selectedRoute.id === route.id;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-[#174D3B] text-white border-[#174D3B] shadow-sm'
                    : 'bg-white text-[#4F5752] border-[#D8DED8] hover:border-[#174D3B]/40'
                }`}
              >
                <div className={`text-[11px] font-data uppercase tracking-wider mb-1 font-semibold ${isSelected ? 'text-[#C6A15B]' : 'text-[#C6A15B]'}`}>
                  {route.destination}
                </div>
                <div className={`text-base font-serif-luxury font-semibold ${isSelected ? 'text-white' : 'text-[#174D3B]'}`}>
                  {route.city}
                </div>
                <div className={`mt-2 text-xs font-data ${isSelected ? 'text-white/80' : 'text-[#4F5752]'}`}>
                  {route.airportCode.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Deep Dive Card */}
        <div className="mt-8 rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-data text-[#C6A15B] mb-2 font-semibold">
                <span>NBO (JKIA Nairobi)</span>
                <span>⟶</span>
                <span className="text-[#174D3B]">{selectedRoute.airportCode}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#174D3B]">
                Nairobi to {selectedRoute.city}, {selectedRoute.destination}
              </h3>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-data">
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8]">
                  <div className="text-[#C6A15B] uppercase tracking-wider font-semibold text-[10px]">Flight Transit</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-1">{selectedRoute.transitHours}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8]">
                  <div className="text-[#C6A15B] uppercase tracking-wider font-semibold text-[10px]">Frequency</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-1">{selectedRoute.weeklyFrequencies} Weekly Departures</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7F6F1] border border-[#D8DED8] col-span-2 sm:col-span-1">
                  <div className="text-[#C6A15B] uppercase tracking-wider font-semibold text-[10px]">Aircraft Profile</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-1 truncate">{selectedRoute.aircraftType}</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#EEF1EB] border border-[#D8DED8] p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B] mb-1">
                  Cargo Partner Network
                </div>
                <div className="text-sm text-[#4F5752] font-medium">
                  {selectedRoute.carrier}
                </div>
                <div className="mt-3 text-xs text-[#4F5752] border-t border-[#D8DED8] pt-2 flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-[#174D3B] shrink-0" />
                  <span>{selectedRoute.coldChainGuarantee}</span>
                </div>
              </div>
            </div>

            {/* Flight Route Diagram & JKIA Facts */}
            <div className="lg:col-span-5 rounded-xl bg-[#F7F6F1] border border-[#D8DED8] p-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B] mb-4">
                  Airside Logistics Handling
                </div>

                <ul className="space-y-3 text-xs text-[#4F5752]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#174D3B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#174D3B]">Cold Staging:</strong> Refrigerated cargo holding areas maintain continuous product cooling prior to apron transfer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#174D3B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#174D3B]">Export Inspection:</strong> Formal phytosanitary documentation and clearance completed in accordance with destination import standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#174D3B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#174D3B]">Aircraft Palletizing:</strong> Standard PMC and ULD aircraft build-ups conducted with protective thermal foil coverings.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8DED8] flex items-center justify-between text-xs font-data text-[#4F5752]">
                <span>Origin Hub: NBO (Nairobi)</span>
                <span className="text-[#174D3B] font-medium">JKIA Freight Terminal Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
