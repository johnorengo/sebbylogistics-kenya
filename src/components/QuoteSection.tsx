import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    airport: '',
    varieties: '',
    quantity: '',
    frequency: 'One-time consignment',
    arrivalDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<any | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required';
    if (!form.country.trim()) errs.country = 'Destination country is required';
    if (!form.varieties.trim()) errs.varieties = 'Please tell us which flowers you need';
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted({
      reference: `INQ-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      ...form,
      phone: form.phone.trim() || 'Not provided',
      company: form.company.trim() || '—',
      airport: form.airport.trim() || '—',
      quantity: form.quantity.trim() || '—',
      arrivalDate: form.arrivalDate || 'Flexible',
      notes: form.notes.trim() || '—',
    });
  };

  const reset = () => {
    setSubmitted(null);
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      airport: '',
      varieties: '',
      quantity: '',
      frequency: 'One-time consignment',
      arrivalDate: '',
      notes: '',
    });
    setErrors({});
  };

  const inputClass =
    'w-full rounded-md border border-[#D9E1DC] bg-white px-3 py-2.5 text-sm text-[#0B110E] focus:outline-none focus:border-[#007A3D]';
  const errorClass = 'border-[#C8102E] bg-red-50';

  return (
    <div id="quote" className="mt-10 scroll-mt-28">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
              Request a Quote
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            Get Farm Prices Including Airfreight
          </h2>
          <p className="mt-3 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            Fill in what you need below and our sales desk will reply with confirmed farm prices
            plus airfreight to your airport.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl bg-white border border-[#D9E1DC] p-6 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF6F0] mb-4">
                <CheckCircle2 className="h-8 w-8 text-[#007A3D]" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#0B110E]">
                Quote Request Received
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3A453F] max-w-md leading-relaxed">
                Thank you, <strong>{submitted.name}</strong>. Your request{' '}
                <strong className="font-data">{submitted.reference}</strong> ({submitted.date}) is with our
                sales desk — expect a reply at <strong>{submitted.email}</strong> shortly.
              </p>

              <div className="mt-6 w-full rounded-xl bg-[#F7F6F1] border border-[#D8DED8] p-5 font-data text-xs text-left space-y-2.5">
                <div className="flex justify-between gap-4 border-b border-[#D8DED8] pb-2">
                  <span className="text-[#4F5752] shrink-0">Client:</span>
                  <span className="text-[#174D3B] font-semibold text-right">{submitted.company} ({submitted.name})</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#D8DED8] pb-2">
                  <span className="text-[#4F5752] shrink-0">Contact:</span>
                  <span className="text-[#174D3B] text-right">{submitted.email} · {submitted.phone}</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#D8DED8] pb-2">
                  <span className="text-[#4F5752] shrink-0">Destination:</span>
                  <span className="text-[#174D3B] text-right">{submitted.country}{submitted.airport !== '—' ? ` (${submitted.airport})` : ''}</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#D8DED8] pb-2">
                  <span className="text-[#4F5752] shrink-0">Flowers:</span>
                  <span className="text-[#174D3B] text-right">{submitted.varieties}</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#D8DED8] pb-2">
                  <span className="text-[#4F5752] shrink-0">Quantity:</span>
                  <span className="text-[#174D3B] text-right">{submitted.quantity} · {submitted.frequency}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#4F5752] shrink-0">Target arrival:</span>
                  <span className="text-[#174D3B] text-right">{submitted.arrivalDate}</span>
                </div>
              </div>

              <button
                onClick={reset}
                className="mt-6 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md transition-colors shadow-sm"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Robert Van Der Meer"
                    className={`${inputClass} ${errors.name ? errorClass : ''}`}
                  />
                  {errors.name && <span className="text-[10px] text-[#C8102E] mt-0.5 block">{errors.name}</span>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. European Flower Importers BV"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="buyer@floraldistributor.com"
                    className={`${inputClass} ${errors.email ? errorClass : ''}`}
                  />
                  {errors.email && <span className="text-[10px] text-[#C8102E] mt-0.5 block">{errors.email}</span>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+31 6 12345678"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Destination Country *</label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="e.g. Netherlands"
                    className={`${inputClass} ${errors.country ? errorClass : ''}`}
                  />
                  {errors.country && <span className="text-[10px] text-[#C8102E] mt-0.5 block">{errors.country}</span>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Destination Airport</label>
                  <input
                    type="text"
                    value={form.airport}
                    onChange={(e) => setForm({ ...form, airport: e.target.value })}
                    placeholder="e.g. AMS Amsterdam"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111814] mb-1">Flower Varieties Needed *</label>
                <input
                  type="text"
                  value={form.varieties}
                  onChange={(e) => setForm({ ...form, varieties: e.target.value })}
                  placeholder="e.g. Red roses 60cm, pink spray roses"
                  className={`${inputClass} ${errors.varieties ? errorClass : ''}`}
                />
                {errors.varieties && <span className="text-[10px] text-[#C8102E] mt-0.5 block">{errors.varieties}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Quantity</label>
                  <input
                    type="text"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    placeholder="e.g. 100 boxes"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Frequency</label>
                  <select
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="One-time consignment">One-time</option>
                    <option value="Weekly standing order">Weekly</option>
                    <option value="Twice-weekly standing order">Twice-weekly</option>
                    <option value="Monthly program">Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1">Target Arrival</label>
                  <input
                    type="date"
                    value={form.arrivalDate}
                    onChange={(e) => setForm({ ...form, arrivalDate: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111814] mb-1">Additional Notes</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Packaging, stem lengths, FOB or CIF preference, anything else…"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-[#C8102E] hover:bg-[#A30922] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95"
              >
                <Send className="h-4 w-4 text-white" />
                Submit Quote Request
              </button>
              <div className="text-center text-[11px] text-[#4F5752]">
                Handled personally by <span className="font-semibold text-[#0B110E]">Sales@sebbylogistics.com</span> · WhatsApp: <span className="font-semibold text-[#007A3D]">+254 719707003</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
