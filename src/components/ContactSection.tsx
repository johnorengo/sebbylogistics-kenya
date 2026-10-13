import React from 'react';
import { Mail, Phone, Clock, Building2, Receipt } from 'lucide-react';
import { PartnersSection } from './PartnersSection';
import { QuoteSection } from './QuoteSection';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-10 sm:py-14 bg-[#F8FAF8] border-b border-[#D9E1DC] scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="pb-6 border-b border-[#D9E1DC]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#C8102E]"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Official Contact & Dispatch Desk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
              Connect with Sebby Logistics Ltd
            </h2>
            <p className="mt-3 text-[#3A453F] text-sm sm:text-base leading-relaxed">
              &quot;For Purchase of Flowers from Kenya including Freight&quot; — Operating from our airside dispatch facilities at <strong>Jomo Kenyatta International Airport JKIA, 1st Freight Lane Avenue (Cargo)</strong>.
            </p>
          </div>
        </div>

        {/* Request a Quote form — on top */}
        <QuoteSection />

        {/* Dispatch Desk Cards — below the quote form */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Direct Phone Calls Card (First Tab) */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#007A3D]/30 hover:border-[#007A3D] transition-all shadow-sm relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#007A3D]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-[#EBF6F0] flex items-center justify-center text-[#007A3D]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#007A3D] block">
                    Voice Support Desk
                  </span>
                  <h3 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                    Direct Phone Calls
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed mb-3">
                Direct calls for urgent orders, harvest stock availability, and immediate flight coordination.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F2F6F3] border border-[#D9E1DC] text-[11px] font-medium text-[#174D3B] mb-4">
                <Clock className="h-3 w-3 text-[#007A3D] shrink-0" />
                <span>Monday to Friday 9am - 5pm EAT</span>
              </div>
            </div>
            <a
              href="tel:+254719707003"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#007A3D] font-data no-underline hover:no-underline mt-auto"
            >
              <Phone className="h-4 w-4" />
              +254 719 707 003
            </a>
          </div>

          {/* 2. Sales & Purchasing Card (Primary Department) */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#C8102E]/30 hover:border-[#C8102E] transition-all shadow-sm relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8102E]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-[#FDF1F2] flex items-center justify-center text-[#C8102E]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8102E] block">
                    Primary Department
                  </span>
                  <h3 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                    Sales & Purchasing
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed mb-4">
                Direct flower purchases, farm assortments, rate cards, and wholesale consignment contracts.
              </p>
            </div>
            <a
              href="mailto:sales@sebbylogistics.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] font-data no-underline hover:no-underline mt-auto"
            >
              <Mail className="h-4 w-4" />
              sales@sebbylogistics.com
            </a>
          </div>

          {/* 3. General Inquiries Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#007A3D]/30 hover:border-[#007A3D] transition-all shadow-sm relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#007A3D]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-[#EBF6F0] flex items-center justify-center text-[#007A3D]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#007A3D] block">
                    Information Desk
                  </span>
                  <h3 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                    General Inquiries
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed mb-4">
                General partner requests, flight schedule confirmations, and farm visits coordination.
              </p>
            </div>
            <a
              href="mailto:support@sebbylogistics.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#007A3D] font-data no-underline hover:no-underline mt-auto"
            >
              <Mail className="h-4 w-4" />
              support@sebbylogistics.com
            </a>
          </div>

          {/* 4. Invoices & Accounts Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#111814]/20 hover:border-[#111814] transition-all shadow-sm relative overflow-hidden group flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-[#F2F6F3] flex items-center justify-center text-[#111814]">
                  <Receipt className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#111814] block">
                    Finance & Accounts
                  </span>
                  <h3 className="text-base font-serif-luxury font-bold text-[#0B110E]">
                    Invoices & Accounts
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed mb-4">
                Commercial invoicing, phytosanitary charges, customs paperwork, and airway bill receipts.
              </p>
            </div>
            <a
              href="mailto:invoices@sebbylogistics.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B110E] font-data no-underline hover:no-underline mt-auto"
            >
              <Mail className="h-4 w-4" />
              invoices@sebbylogistics.com
            </a>
          </div>
        </div>

        {/* Our Partners Section - NCBA Group, Stanbic Bank, Legal Team */}
        <PartnersSection />
      </div>
    </section>
  );
};
