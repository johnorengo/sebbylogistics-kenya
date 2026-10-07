import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Floral Import Wholesale',
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
    <section id="contact" className="relative py-24 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] mb-2">
            Operations & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#174D3B] tracking-tight">
            Connect with Export Operations & Logistics
          </h2>
          <p className="mt-4 text-[#4F5752] text-sm sm:text-base leading-relaxed">
            Reach our trade coordinators and airfreight dispatchers for seasonal volume allocations, packaging options, and logistics scheduling from Nairobi to destination markets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Operations Centers Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* JKIA Facility Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8DED8] shadow-sm">
              <div className="flex items-center gap-3 text-[#174D3B] mb-3">
                <MapPin className="h-5 w-5 text-[#C6A15B]" />
                <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                  JKIA Airside Dispatch & Logistics Office
                </h3>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed font-sans-clean">
                Perishable Cargo Logistics Zone<br />
                Jomo Kenyatta International Airport (JKIA)<br />
                Nairobi, Kenya
              </p>
              <div className="mt-4 pt-4 border-t border-[#D8DED8] text-xs font-data text-[#4F5752] space-y-1">
                <div>Airside Operations Desk: <span className="text-[#174D3B] font-semibold">+254 20 000 0000</span></div>
                <div>Export Documentation: <span className="text-[#174D3B] font-semibold">+254 700 000 000</span></div>
              </div>
            </div>

            {/* Farm Packhouse Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8DED8] shadow-sm">
              <div className="flex items-center gap-3 text-[#174D3B] mb-3">
                <MapPin className="h-5 w-5 text-[#C6A15B]" />
                <h3 className="text-base font-serif-luxury font-semibold text-[#174D3B]">
                  Regional Packhouse Operations
                </h3>
              </div>
              <p className="text-xs text-[#4F5752] leading-relaxed font-sans-clean">
                Rift Valley Horticultural Growing Basin<br />
                Naivasha & Central Highlands Region<br />
                Kenya
              </p>
            </div>

            {/* Direct Dispatch Hours & Contacts */}
            <div className="p-6 rounded-2xl bg-[#F7F6F1] border border-[#D8DED8] text-xs">
              <div className="flex items-center gap-2 text-[#174D3B] font-semibold mb-3">
                <Clock className="h-4 w-4 text-[#C6A15B]" />
                <span>Scheduled Cargo Dispatch Windows</span>
              </div>
              <p className="text-[#4F5752] leading-relaxed">
                Airfreight palletizing and ramp handover are coordinated to align with scheduled international flight departures from Nairobi.
              </p>
              <div className="mt-4 flex flex-col gap-2 font-data text-[#174D3B]">
                <a href="mailto:dispatch@sebbylogistics.co.ke" className="flex items-center gap-2 hover:text-[#285F4A] text-xs font-medium">
                  <Mail className="h-3.5 w-3.5 text-[#C6A15B]" />
                  dispatch@sebbylogistics.co.ke
                </a>
                <a href="mailto:wholesale@sebbylogistics.co.ke" className="flex items-center gap-2 hover:text-[#285F4A] text-xs font-medium">
                  <Mail className="h-3.5 w-3.5 text-[#C6A15B]" />
                  wholesale@sebbylogistics.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1EB] text-[#174D3B] mb-4">
                  <CheckCircle2 className="h-8 w-8 text-[#174D3B]" />
                </div>
                <h3 className="text-2xl font-serif-luxury font-medium text-[#174D3B]">
                  Inquiry Received
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#4F5752] max-w-md leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your message has been routed to our export operations team. We will respond with specifications and availability shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      inquiryType: 'Floral Import Wholesale',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 text-xs font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] rounded-md transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B] pb-2 border-b border-[#D8DED8]">
                  Direct Inquiries & Wholesale Desk
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Liam Sterling"
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    />
                    {errors.name && <span className="text-[10px] text-rose-600 mt-0.5 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="buyer@globalflora.com"
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    />
                    {errors.email && <span className="text-[10px] text-rose-600 mt-0.5 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Flower Import B.V."
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1">
                      Phone / Messaging
                    </label>
                    <input
                      type="text"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+44 20 0000 0000"
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4F5752] mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                  >
                    <option value="Floral Import Wholesale">Fresh Cut Roses & Flowers (Wholesale Import)</option>
                    <option value="Horticulture Produce Consignment">Kenyan Hass Avocados / Herbs / Vegetables</option>
                    <option value="Contract Farming & Fixed Allocation">Year-Round Contract Program & Air Cargo Planning</option>
                    <option value="Cold-Chain Logistics Audit">General Logistics & Export Staging Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4F5752] mb-1">
                    Consignment Requirements & Details *
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Specify target varieties, weekly volume requirements, stem lengths, destination airport, or scheduling questions..."
                    className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                  />
                  {errors.message && <span className="text-[10px] text-rose-600 mt-0.5 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-[#174D3B] hover:bg-[#285F4A] text-white font-semibold text-xs tracking-wider transition-colors shadow-sm"
                  >
                    <Send className="h-4 w-4 text-[#C6A15B]" />
                    Send Inquiry to Operations Desk
                  </button>
                  <div className="mt-2 text-center text-[11px] text-[#4F5752]">
                    Inquiries are reviewed by regional export coordinators during standard business windows.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
