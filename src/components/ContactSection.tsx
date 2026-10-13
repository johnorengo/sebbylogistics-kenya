import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, Building2, Receipt, Phone, Clock } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';
import { PartnersSection } from './PartnersSection';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: 'Sales@sebbylogistics.com (Flower Purchase & Rates)',
    inquiryType: 'Floral Purchase & Freight',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Contact name is required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!form.message.trim()) errs.message = 'Please provide consignment requirements';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-[#F8FAF8] border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9E1DC]">
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

          <div className="flex items-center gap-3 shrink-0">
            <div className="h-14 w-14 rounded-full p-1 bg-white border border-[#D9E1DC] flex items-center justify-center shadow-sm">
              <SebbyLogo className="h-full w-full" />
            </div>
            <div className="text-left font-serif-luxury">
              <div className="font-bold text-base text-[#0B110E]">SEBBY LOGISTICS LTD</div>
              <div className="text-xs text-[#007A3D] font-medium">JKIA · 1st Freight Lane Avenue (Cargo)</div>
            </div>
          </div>
        </div>

        {/* 4 Official Contact & Desk Cards Bar */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              className="inline-flex items-center gap-2 text-sm font-bold text-[#007A3D] font-data hover:underline mt-auto"
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
              href="mailto:Sales@sebbylogistics.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] font-data hover:underline mt-auto"
            >
              <Mail className="h-4 w-4" />
              Sales@sebbylogistics.com
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
              className="inline-flex items-center gap-2 text-sm font-bold text-[#007A3D] font-data hover:underline mt-auto"
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
              href="mailto:Invoices@sebbylogistics.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B110E] font-data hover:underline mt-auto"
            >
              <Mail className="h-4 w-4" />
              Invoices@sebbylogistics.com
            </a>
          </div>
        </div>

        {/* Direct Trade Inquiries Form - Centered */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white border border-[#D9E1DC] p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF6F0] text-[#007A3D] mb-4">
                  <CheckCircle2 className="h-8 w-8 text-[#007A3D]" />
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#0B110E]">
                  Inquiry Received by Sebby Logistics
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3A453F] max-w-md leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your consignment inquiry has been dispatched to <strong>{form.department.split(' ')[0]}</strong>. One of our trade coordinators will respond promptly with confirmed pricing and harvest allocation.
                </p>
                <div className="mt-4 p-3 rounded-lg bg-[#F8FAF8] border border-[#D9E1DC] text-xs font-data text-[#0B110E]">
                  Urgent booking? WhatsApp us directly at <span className="font-bold text-[#007A3D]">+254 719707003</span>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      department: 'Sales@sebbylogistics.com (Flower Purchase & Rates)',
                      inquiryType: 'Floral Purchase & Freight',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md transition-colors shadow-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-[#D9E1DC] text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                    Direct Trade Inquiries
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#0B110E] mt-1">
                    Request Stems Assortment, Stunning Prices & Airfreight Rates
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Robert Van Der Meer"
                      className={`w-full rounded-md border px-3 py-2 text-xs focus:outline-none ${
                        errors.name ? 'border-[#C8102E] bg-red-50' : 'border-[#D9E1DC] focus:border-[#007A3D]'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-[#C8102E] mt-0.5">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="buyer@floraldistributor.com"
                      className={`w-full rounded-md border px-3 py-2 text-xs focus:outline-none ${
                        errors.email ? 'border-[#C8102E] bg-red-50' : 'border-[#D9E1DC] focus:border-[#007A3D]'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-[#C8102E] mt-0.5">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="text"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+31 6 12345678"
                      className="w-full rounded-md border border-[#D9E1DC] px-3 py-2 text-xs focus:border-[#007A3D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. European Flower Importers BV"
                      className="w-full rounded-md border border-[#D9E1DC] px-3 py-2 text-xs focus:border-[#007A3D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Target Department
                    </label>
                    <select
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className="w-full rounded-md border border-[#D9E1DC] px-3 py-2 text-xs bg-white focus:border-[#007A3D] focus:outline-none"
                    >
                      <option value="Sales@sebbylogistics.com (Flower Purchase & Rates)">Sales@sebbylogistics.com (Flower Purchase & Rates)</option>
                      <option value="support@sebbylogistics.com (General Inquiries & Support)">support@sebbylogistics.com (General Inquiries & Support)</option>
                      <option value="Invoices@sebbylogistics.com (Billing & Accounts)">Invoices@sebbylogistics.com (Billing & Accounts)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111814] mb-1">
                      Destination Airport / Market
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AMS (Amsterdam), LHR (London), DXB (Dubai)"
                      className="w-full rounded-md border border-[#D9E1DC] px-3 py-2 text-xs focus:border-[#007A3D] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">
                    Flower Assortment / Freight Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Please specify flower varieties (e.g. Rhodos roses 60cm, spray roses), required weekly volume/boxes, target delivery date, and whether you need FOB Nairobi or CIF destination airport..."
                    className={`w-full rounded-md border p-3 text-xs focus:outline-none ${
                      errors.message ? 'border-[#C8102E] bg-red-50' : 'border-[#D9E1DC] focus:border-[#007A3D]'
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-[#C8102E] mt-0.5">{errors.message}</span>}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#4F5752]">
                    <ShieldCheck className="h-4 w-4 text-[#007A3D]" />
                    <span>Direct response with stunning farm prices</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md transition-colors shadow-md active:scale-95"
                  >
                    <span>Send Consignment Inquiry</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Our Partners Section - NCBA Group, Stanbic Bank, Legal Team */}
        <PartnersSection />
      </div>
    </section>
  );
};
