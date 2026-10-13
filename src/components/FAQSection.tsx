import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Which countries do you ship to?',
    answer: 'We arrange airfreight shipments to destinations worldwide.',
  },
  {
    question: 'Can you source specific flower varieties?',
    answer: 'Yes. We work with multiple farms and can source flowers based on your requirements and market preferences.',
  },
  {
    question: 'Do you handle logistics and freight?',
    answer: 'Yes. We manage sourcing, purchasing, export documentation, and freight coordination.',
  },
  {
    question: 'Can I order regularly?',
    answer: 'Absolutely. We support both recurring supply programs and one-time purchases.',
  },
  {
    question: 'How do I request pricing?',
    answer: 'Simply contact us with your flower requirements and destination details, and our team will prepare a customized quotation.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // First two open by default

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#EEF1EB] border-b border-[#D8DED8] scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#D8DED8]">
            <HelpCircle className="h-4 w-4 text-[#007A3D]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007A3D]">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#174D3B] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4F5752] leading-relaxed max-w-2xl mx-auto">
            Clear answers on worldwide shipping, farm assortment options, recurring contracts, and airfreight pricing.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-[#D8DED8] transition-all duration-200 overflow-hidden shadow-sm hover:border-[#174D3B]"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-serif-luxury font-bold text-lg sm:text-xl text-[#174D3B] gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-data font-bold text-[#C8102E] shrink-0">
                      Q{idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full bg-[#F7F6F1] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#174D3B] text-white' : 'text-[#174D3B]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-[#4F5752] text-base leading-relaxed border-t border-[#F7F6F1] pt-4 font-sans-clean animate-in fade-in duration-200">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#007A3D] mt-2 shrink-0" />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#D8DED8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-lg font-serif-luxury font-bold text-[#174D3B]">
              Have a custom flower consignment request?
            </h3>
            <p className="text-sm text-[#4F5752] mt-1">
              Our dispatch desk can provide immediate availability and airport freight rate cards.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/254719707003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#174D3B] hover:bg-[#285F4A] text-white text-xs font-bold transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
