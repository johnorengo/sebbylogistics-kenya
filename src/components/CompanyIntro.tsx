import React from 'react';
import { SunMedium, Mountain, PlaneTakeoff, ShieldCheck, CheckCircle2, MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#D9E1DC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Editorial Brand Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#D9E1DC]">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full p-1 bg-[#F8FAF8] border-2 border-[#111814] flex items-center justify-center shrink-0 shadow-md">
              <SebbyLogo className="h-full w-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C8102E]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8102E] font-bold">
                  Kenya Floriculture & Freight
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-[#0B110E] tracking-tight mt-0.5">
                SEBBY LOGISTICS LTD
              </h2>
              <p className="text-sm sm:text-base font-serif-luxury italic text-[#007A3D] font-medium mt-0.5">
                &quot;For Purchase of Flowers from Kenya including Freight&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/254719707003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#007A3D] hover:bg-[#009E49] rounded-md transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us: +254 719707003</span>
            </a>
            <a
              href="mailto:support@sebbylogistics.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B110E] bg-[#F2F6F3] hover:bg-[#E5ECE7] border border-[#D9E1DC] rounded-md transition-all"
            >
              <Mail className="h-4 w-4 text-[#C8102E]" />
              <span>support@sebbylogistics.com</span>
            </a>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Customer Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF8] border-l-4 border-l-[#C8102E] border border-[#D9E1DC] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#0B110E] leading-snug">
                We offer you to buy flowers from good farms at the best prices.
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#1F2823] leading-relaxed font-sans-clean">
                We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined national efforts we are better and cheaper than your current suppliers.
              </p>
              <p className="mt-3.5 text-sm sm:text-base text-[#3A453F] leading-relaxed">
                Contact us to discover which assortment we offer from our selected farms, for which stunning prices, and for what airfreight rates we can send your orders to your airport of choice.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[#0B0F0D] text-white shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1.5 kenya-ribbon-bar" />
              <div className="text-xs uppercase tracking-[0.2em] text-[#009E49] font-bold mb-2">
                Our Corporate Mission
              </div>
              <blockquote className="text-base sm:text-lg font-serif-luxury italic text-white/95 leading-relaxed">
                &quot;It is our mission to give all international buyers of Kenyan flowers a far better, cheaper and easier alternative. We work only with the best national partners who are determined to grow the Kenyan flower industry by joined efforts.&quot;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm font-semibold text-[#FFFFFF] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C8102E]"></span>
                  <span>Contact us today, and let us please show you how to benefit!</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] px-4 py-2 rounded transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Overview of Department Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#D9E1DC] text-xs">
                <div className="font-bold text-[#0B110E] mb-1">General Inquiries</div>
                <a href="mailto:support@sebbylogistics.com" className="text-[#007A3D] font-data hover:underline">
                  support@sebbylogistics.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D9E1DC] text-xs">
                <div className="font-bold text-[#0B110E] mb-1">Sales & Purchasing</div>
                <a href="mailto:Sales@sebbylogistics.com" className="text-[#C8102E] font-data hover:underline">
                  Sales@sebbylogistics.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D9E1DC] text-xs">
                <div className="font-bold text-[#0B110E] mb-1">Invoices & Billing</div>
                <a href="mailto:Invoices@sebbylogistics.com" className="text-[#0B110E] font-data hover:underline">
                  Invoices@sebbylogistics.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Operational Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-[#F8FAF8] border border-[#D9E1DC] hover:border-[#007A3D] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-[#EBF6F0] flex items-center justify-center text-[#007A3D]">
                  <Mountain className="h-5 w-5" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                  Selected Local Farms
                </h4>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed">
                Direct partnerships with established Rift Valley & Mount Kenya estates growing high-altitude stems with large bud diameters and long vase longevity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF8] border border-[#D9E1DC] hover:border-[#C8102E] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-[#FDF1F2] flex items-center justify-center text-[#C8102E]">
                  <PlaneTakeoff className="h-5 w-5" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                  End-to-End Freight
                </h4>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed">
                We handle the complete purchase and chilled airfreight logistics directly through JKIA Nairobi to your destination airport worldwide.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF8] border border-[#D9E1DC] hover:border-[#007A3D] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-[#EBF6F0] flex items-center justify-center text-[#007A3D]">
                  <SunMedium className="h-5 w-5" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                  Cheaper & Better Pricing
                </h4>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed">
                Combined local volumes and direct farm contracts allow us to offer international buyers stunning pricing that outperforms traditional brokers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF8] border border-[#D9E1DC] hover:border-[#C8102E] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-[#FDF1F2] flex items-center justify-center text-[#C8102E]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                  Hassle-Free Process
                </h4>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed">
                Full export phytosanitary clearance, cold-chain monitoring, master carton packing, and responsive flight tracking for every order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
