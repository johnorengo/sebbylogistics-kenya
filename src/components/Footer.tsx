import React from 'react';
import { ArrowUp, FileText, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';

interface FooterProps {
  onOpenCatalog: () => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCatalog, onOpenRFQ }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0B0F0D] text-white pt-0 pb-12">
      {/* 1. Kenyan National Flag Accent Ribbon */}
      <div className="h-1.5 w-full kenya-ribbon-bar" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Overview (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full p-1 bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <SebbyLogo className="h-full w-full" />
              </div>
              <div>
                <a href="#hero" className="text-2xl font-serif-luxury font-bold text-white tracking-tight block">
                  SEBBY LOGISTICS LTD
                </a>
                <span className="text-xs font-serif-luxury italic text-[#009E49]">
                  &quot;For Purchase of Flowers from Kenya including Freight&quot;
                </span>
              </div>
            </div>

            <p className="text-xs text-white/75 leading-relaxed font-sans-clean max-w-md">
              We offer you to buy flowers from good farms at the best prices. We take care of the whole purchase process and the logistics, including airfreight to any destination worldwide. Because of combined local efforts we are better and cheaper than your current suppliers.
            </p>

            {/* Direct Contact Channels Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 max-w-md font-data">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MessageCircle className="h-3.5 w-3.5 text-[#009E49]" />
                <span>Tel / WhatsApp: </span>
                <a href="https://wa.me/254719707003" target="_blank" rel="noopener noreferrer" className="text-[#009E49] hover:underline">
                  +254 719707003
                </a>
              </div>
              <div className="flex flex-col gap-1 text-white/80 pt-1">
                <div>General Inquiries: <a href="mailto:info@sebbylogistics.com" className="text-white hover:text-[#009E49]">info@sebbylogistics.com</a></div>
                <div>Sales & Orders: <a href="mailto:Sales@sebbylogistics.com" className="text-[#C8102E] hover:underline">Sales@sebbylogistics.com</a></div>
                <div>Billing & Invoices: <a href="mailto:Invoices@sebbylogistics.com" className="text-white/90 hover:underline">Invoices@sebbylogistics.com</a></div>
              </div>
            </div>
          </div>

          {/* Floral & Produce Lines (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#009E49]">
              Products
            </div>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">T-Hybrid Cut Roses</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">Multi-Head Spray Roses</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-white transition-colors">Gypsophila & Fillers</a>
              </li>
              <li>
                <a href="#horticulture" className="hover:text-white transition-colors">Export Hass Avocados</a>
              </li>
              <li>
                <a href="#horticulture" className="hover:text-white transition-colors">Culinary Fresh Herbs</a>
              </li>
              <li>
                <a href="#horticulture" className="hover:text-white transition-colors">Fine French Beans</a>
              </li>
            </ul>
          </div>

          {/* Logistics & Ports (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
              Logistics & Ports
            </div>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Export Journey</a>
              </li>
              <li>
                <a href="#why-kenya" className="hover:text-white transition-colors">Why Kenyan Flowers</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">Quality Standards</a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">Amsterdam Schiphol (AMS)</a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">London Heathrow (LHR)</a>
              </li>
              <li>
                <a href="#markets" className="hover:text-white transition-colors">Dubai Cargo Hub (DXB)</a>
              </li>
            </ul>
          </div>

          {/* Commercial Desk (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Commercial Desk
            </div>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button
                  onClick={onOpenRFQ}
                  className="w-full text-left p-2.5 rounded-lg bg-[#C8102E] hover:bg-[#A30922] text-white font-bold transition-all shadow-sm"
                >
                  Request Rate Card (RFQ)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalog}
                  className="w-full text-left p-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-all flex items-center gap-2"
                >
                  <FileText className="h-3.5 w-3.5 text-[#009E49]" />
                  <span>Download Spec Sheets</span>
                </button>
              </li>
              <li className="pt-2 text-xs text-white/80 flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#009E49] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Location:</span>
                  <span className="text-white/90">Jomo Kenyatta International Airport JKIA.</span><br />
                  <span className="text-white/90">1st Freight Lane Avenue (Cargo).</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans-clean">
          <div>
            © {new Date().getFullYear()} SEBBY LOGISTICS LTD. All rights reserved. &quot;For Purchase of Flowers from Kenya including Freight&quot;
          </div>

          <div className="flex items-center gap-6">
            <span className="font-data text-white/70">Location: JKIA · 1st Freight Lane Avenue (Cargo), Nairobi</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#009E49] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
