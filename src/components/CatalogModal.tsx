import React, { useEffect, useRef } from 'react';
import { flowerVarieties, horticultureProducts } from '../data/flowerData';
import { X, Download, FileText, Plane, Phone, Mail } from 'lucide-react';
import { SebbyLogo } from './SebbyLogo';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRFQ: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose, onOpenRFQ }) => {
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector<HTMLElement>('button')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const controls = Array.from(dialog.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea') || []);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); previousFocus?.focus({ preventScroll: true }); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const content = `SEBBY LOGISTICS LTD - EXPORT FLORICULTURE & FREIGHT CATALOG
"For Purchase of Flowers from Kenya including Freight"
Location: Jomo Kenyatta International Airport JKIA, 1st Freight Lane Avenue (Cargo), Nairobi, Kenya
Standard Agricultural & Export Compliance Framework

========================================================================
1. T-HYBRID & SPRAY ROSES SPECIFICATIONS
========================================================================
${flowerVarieties.map(f => `
Variety: ${f.name} (${f.botanicalName})
- Origin: ${f.originRegion}
- Stem Lengths: ${f.stemLengths.join(', ')}
- Head Aperture: ${f.headSize} | Petal Count: ${f.petalCount}
- Vase Life Indication: ${f.vaseLife}
- Packaging: ${f.bunchesPerBox} bunches/box (${f.bunchesPerBox * f.stemsPerBunch} stems)
- Grade: ${f.grade} | Availability: ${f.availability}
`).join('\n')}

========================================================================
2. FRESH HORTICULTURE EXPORT LINE
========================================================================
${horticultureProducts.map(h => `
Product: ${h.name} (${h.botanicalName})
- Varieties: ${h.varieties.join(', ')}
- Origin: ${h.originRegion}
- Standard Packaging: ${h.packaging}
- Grading / Counts: ${h.netWeight}
- Transit Temperature: ${h.storageTemp}
- Seasonality: ${h.seasonality}
`).join('\n')}

========================================================================
3. AIR FREIGHT PALLETIZATION AT JKIA NAIROBI
========================================================================
- Aircraft Pallet (PMC / P6P): Standard Master Carton Contours (~2,000-2,300kg gross)
- LD3 / AKE Container: Standard Unit Load Device Packing
- Master Carton Dimensions: 100cm (L) x 30cm (W) x 20cm (H)
- Average Carton Gross Weight: ~14.5 kg

DIRECT COMMERCIAL & FREIGHT INQUIRIES:
Tel / WhatsApp: +254 719707003
General Support: support@sebbylogistics.com
Sales & Quotes: sales@sebbylogistics.com
Invoicing & Accounts: invoices@sebbylogistics.com
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SebbyLogistics_Kenya_Export_Catalog.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div ref={dialog} role="dialog" aria-modal="true" aria-label="Sebby Logistics product catalog" className="relative w-full max-w-4xl max-h-[90svh] overflow-y-auto overscroll-contain rounded-2xl bg-white border border-[#D9E1DC] p-6 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D9E1DC] pb-6">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-full p-1 bg-[#F8FAF8] border border-[#D9E1DC] flex items-center justify-center shrink-0">
              <SebbyLogo className="h-full w-full" />
            </div>
            <div className="relative top-4">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Technical Export Brochure
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0B110E] mt-0.5">
                SEBBY LOGISTICS LTD Catalog
              </h2>
              <p className="text-xs font-serif-luxury italic text-[#007A3D] font-medium mt-0.5">
                &quot;For Purchase of Flowers from Kenya including Freight&quot;
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4F5752] hover:text-[#0B110E] rounded-lg hover:bg-[#F2F6F3]"
            aria-label="Close catalog modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Contact Strip */}
        <div className="mt-4 p-3 rounded-lg bg-[#0B0F0D] text-white flex flex-wrap items-center justify-between gap-3 text-xs font-data">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-[#009E49]" />
            <span>Tel / WhatsApp: +254 719707003</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E]">sales@sebbylogistics.com</span>
            <span className="text-white/40">|</span>
            <span className="text-[#009E49]">support@sebbylogistics.com</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#4F5752]">
            Comprehensive variety specifications, packaging parameters, and airfreight palletizing guidelines.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#007A3D] hover:bg-[#009E49] rounded-md transition-colors shadow-sm"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Text Spec Sheet</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#C8102E] hover:bg-[#A30922] rounded-md transition-colors shadow-sm"
            >
              <span>Request Wholesale RFQ</span>
            </button>
          </div>
        </div>

        {/* Section 1: Roses Specifications Table */}
        <div className="mt-8">
          <h3 className="text-base font-serif-luxury font-bold text-[#0B110E] mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#C8102E]" />
            <span>Export Rose Varieties & Technical Specifications</span>
          </h3>
          <div className="overflow-x-auto border border-[#D9E1DC] rounded-xl">
            <table className="w-full text-left text-xs font-sans-clean">
              <thead className="bg-[#F8FAF8] text-[#0B110E] font-semibold border-b border-[#D9E1DC]">
                <tr>
                  <th className="p-3">Variety</th>
                  <th className="p-3">Botanical Class</th>
                  <th className="p-3">Lengths</th>
                  <th className="p-3">Head Size</th>
                  <th className="p-3">Box Pack</th>
                  <th className="p-3">Vase Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9E1DC]">
                {flowerVarieties.map((f) => (
                  <tr key={f.id} className="hover:bg-[#F2F6F3]/60 transition-colors">
                    <td className="p-3 font-semibold text-[#0B110E]">{f.name}</td>
                    <td className="p-3 text-[#4F5752] italic">{f.botanicalName}</td>
                    <td className="p-3 font-data text-[#0B110E]">{f.stemLengths.join(', ')}</td>
                    <td className="p-3 font-data text-[#C8102E] font-bold">{f.headSize}</td>
                    <td className="p-3 font-data text-[#4F5752]">{f.bunchesPerBox * f.stemsPerBunch} stems</td>
                    <td className="p-3 text-[#007A3D] font-bold">{f.vaseLife}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Horticulture Specifications Table */}
        <div className="mt-8">
          <h3 className="text-base font-serif-luxury font-bold text-[#0B110E] mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-[#007A3D]" />
            <span>Kenya Horticulture Produce Export Line</span>
          </h3>
          <div className="overflow-x-auto border border-[#D9E1DC] rounded-xl">
            <table className="w-full text-left text-xs font-sans-clean">
              <thead className="bg-[#F8FAF8] text-[#0B110E] font-semibold border-b border-[#D9E1DC]">
                <tr>
                  <th className="p-3">Produce</th>
                  <th className="p-3">Target Varieties</th>
                  <th className="p-3">Standard Packaging</th>
                  <th className="p-3">Grading / Net Wt</th>
                  <th className="p-3">Transit Temp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9E1DC]">
                {horticultureProducts.map((h) => (
                  <tr key={h.id} className="hover:bg-[#F2F6F3]/60 transition-colors">
                    <td className="p-3 font-semibold text-[#0B110E]">{h.name}</td>
                    <td className="p-3 text-[#4F5752]">{h.varieties.join(', ')}</td>
                    <td className="p-3 text-[#4F5752]">{h.packaging}</td>
                    <td className="p-3 font-data text-[#C8102E] font-medium">{h.netWeight}</td>
                    <td className="p-3 font-data text-[#007A3D] font-bold">{h.storageTemp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Aircraft Palletizing Guidelines */}
        <div className="mt-8 p-5 rounded-xl bg-[#F8FAF8] border border-[#D9E1DC] text-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B110E] mb-2 flex items-center gap-2">
            <Plane className="h-4 w-4 text-[#C8102E]" />
            <span>Aircraft ULD Pallet Guidelines (JKIA Nairobi)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-[#4F5752] font-data">
            <div>
              <div className="text-[#0B110E] font-semibold">Master Box Dims:</div>
              <div className="text-[#007A3D] font-medium mt-0.5">100cm × 30cm × 20cm (0.06m³)</div>
            </div>
            <div>
              <div className="text-[#0B110E] font-semibold">Standard PMC Pallet:</div>
              <div className="text-[#C8102E] font-medium mt-0.5">140 - 160 Boxes (~2,250 kg)</div>
            </div>
            <div>
              <div className="text-[#0B110E] font-semibold">LD3 Lower Deck:</div>
              <div className="text-[#0B110E] font-medium mt-0.5">38 - 42 Boxes (~600 kg)</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D9E1DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#0B110E] hover:bg-[#F2F6F3] border border-[#D9E1DC] rounded-md bg-white transition-colors"
          >
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
