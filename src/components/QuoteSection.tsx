import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { submitQuote, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT, type QuoteSubmission } from '../utils/submitQuote';

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

  const [submitted, setSubmitted] = useState<QuoteSubmission | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const inFlight = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const errorMessage = useRef<HTMLParagraphElement>(null);
  useEffect(() => { if (submitted) confirmation.current?.focus(); }, [submitted]);
  useEffect(() => { if (submissionError) errorMessage.current?.focus(); }, [submissionError]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current || new FormData(e.currentTarget).get('botcheck')) return;
    setSubmissionError('');
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Valid email is required';
    if (!form.country.trim()) errs.country = 'Destination country is required';
    if (!form.varieties.trim()) errs.varieties = 'Please tell us which flowers you need';
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    setErrors({});
    const request: QuoteSubmission = {
      reference: `INQ-${Array.from(crypto.getRandomValues(new Uint8Array(6)), byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase()}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      country: form.country.trim(),
      varieties: form.varieties.trim(),
      phone: form.phone.trim() || 'Not provided',
      company: form.company.trim() || '—',
      airport: form.airport.trim() || '—',
      quantity: form.quantity.trim() || '—',
      arrivalDate: form.arrivalDate || 'Flexible',
      notes: form.notes.trim() || '—',
    };
    inFlight.current = true;
    setIsSubmitting(true);
    try {
      await submitQuote(request);
      setSubmitted(request);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Please try again, or email support@sebbylogistics.com.');
    } finally {
      inFlight.current = false;
      setIsSubmitting(false);
    }
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
    setSubmissionError('');
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
            <div ref={confirmation} tabIndex={-1} role="status" className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF6F0] mb-4">
                <CheckCircle2 className="h-8 w-8 text-[#007A3D]" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#0B110E]">
                Quote Request Received
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#3A453F] max-w-md leading-relaxed">
                Thank you, <strong>{submitted.name}</strong>. Your request{' '}
                <strong className="font-data">{submitted.reference}</strong> ({submitted.date}) is with our
                support team — we will reply at <strong>{submitted.email}</strong>.
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
            <form action={WEB3FORMS_ENDPOINT} method="POST" noValidate onSubmit={handleSubmit} className="space-y-4" aria-busy={isSubmitting}>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Sebby Logistics quote request" />
              <input type="hidden" name="from_name" value="Sebby Logistics Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
              <fieldset disabled={isSubmitting} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-semibold text-[#111814] mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    name="name"
                    id="quote-name"
                    autoComplete="name"
                    maxLength={120}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'quote-name-error' : undefined}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Robert Van Der Meer"
                    className={`${inputClass} ${errors.name ? errorClass : ''}`}
                  />
                  {errors.name && <span id="quote-name-error" className="text-xs text-[#C8102E] mt-0.5 block">{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="quote-company" className="block text-xs font-semibold text-[#111814] mb-1">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    name="company"
                    id="quote-company"
                    autoComplete="organization"
                    maxLength={160}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. European Flower Importers BV"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-semibold text-[#111814] mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    name="email"
                    id="quote-email"
                    autoComplete="email"
                    maxLength={254}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'quote-email-error' : undefined}
                    required
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="buyer@floraldistributor.com"
                    className={`${inputClass} ${errors.email ? errorClass : ''}`}
                  />
                  {errors.email && <span id="quote-email-error" className="text-xs text-[#C8102E] mt-0.5 block">{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#111814] mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={form.phone}
                    name="phone"
                    id="quote-phone"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={60}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+31 6 12345678"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-country" className="block text-xs font-semibold text-[#111814] mb-1">Destination Country *</label>
                  <input
                    type="text"
                    value={form.country}
                    name="country"
                    id="quote-country"
                    autoComplete="country-name"
                    maxLength={100}
                    aria-invalid={!!errors.country}
                    aria-describedby={errors.country ? 'quote-country-error' : undefined}
                    required
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="e.g. Netherlands"
                    className={`${inputClass} ${errors.country ? errorClass : ''}`}
                  />
                  {errors.country && <span id="quote-country-error" className="text-xs text-[#C8102E] mt-0.5 block">{errors.country}</span>}
                </div>
                <div>
                  <label htmlFor="quote-airport" className="block text-xs font-semibold text-[#111814] mb-1">Destination Airport</label>
                  <input
                    type="text"
                    value={form.airport}
                    name="airport"
                    id="quote-airport"
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, airport: e.target.value })}
                    placeholder="e.g. AMS Amsterdam"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-varieties" className="block text-xs font-semibold text-[#111814] mb-1">Flower Varieties Needed *</label>
                <input
                  type="text"
                  value={form.varieties}
                  name="varieties"
                  id="quote-varieties"
                  maxLength={1000}
                  aria-invalid={!!errors.varieties}
                  aria-describedby={errors.varieties ? 'quote-varieties-error' : undefined}
                  required
                  onChange={(e) => setForm({ ...form, varieties: e.target.value })}
                  placeholder="e.g. Red roses 60cm, pink spray roses"
                  className={`${inputClass} ${errors.varieties ? errorClass : ''}`}
                />
                {errors.varieties && <span id="quote-varieties-error" className="text-xs text-[#C8102E] mt-0.5 block">{errors.varieties}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="quote-quantity" className="block text-xs font-semibold text-[#111814] mb-1">Quantity</label>
                  <input
                    type="text"
                    value={form.quantity}
                    name="quantity"
                    id="quote-quantity"
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    placeholder="e.g. 100 boxes"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="quote-frequency" className="block text-xs font-semibold text-[#111814] mb-1">Frequency</label>
                  <select
                    value={form.frequency}
                    name="frequency"
                    id="quote-frequency"
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
                  <label htmlFor="quote-arrivalDate" className="block text-xs font-semibold text-[#111814] mb-1">Target Arrival</label>
                  <input
                    type="date"
                    value={form.arrivalDate}
                    name="arrivalDate"
                    id="quote-arrivalDate"
                    onChange={(e) => setForm({ ...form, arrivalDate: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-notes" className="block text-xs font-semibold text-[#111814] mb-1">Additional Notes</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  name="notes"
                  id="quote-notes"
                  maxLength={3000}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Packaging, stem lengths, FOB or CIF preference, anything else…"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-[#C8102E] hover:bg-[#A30922] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-wait"
              >
                <Send className="h-4 w-4 text-white" />
                {isSubmitting ? 'Sending request…' : 'Submit Quote Request'}
              </button>
              </fieldset>
              {submissionError && <p ref={errorMessage} tabIndex={-1} role="alert" className="text-sm text-[#C8102E]">{submissionError}</p>}
              <p role="status" className="sr-only">{isSubmitting ? 'Sending your quote request. Please wait.' : ''}</p>
              <div className="text-center text-[11px] text-[#4F5752]">
                Handled personally by <span className="font-semibold text-[#0B110E]">support@sebbylogistics.com</span> · WhatsApp: <span className="font-semibold text-[#007A3D]">+254 719707003</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
