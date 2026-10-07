import React from 'react';
import { flowerVarieties, horticultureProducts } from '../data/flowerData';
import { X, Download, FileText, Plane } from 'lucide-react';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRFQ: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose, onOpenRFQ }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const content = `SEBBYLOGISTICS KENYA - EXPORT FLORICULTURE & HORTICULTURE CATALOG
Nairobi Logistics Operations & JKIA Airside Staging Desk, Kenya
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

Direct Commercial Inquiries:
JKIA Operations Desk: dispatch@sebbylogistics.co.ke
Commercial Planning: wholesale@sebbylogistics.co.ke
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D8DED8] pb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
              Technical Export Brochure
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#174D3B] mt-1">
              SebbyLogistics Master Product Catalog
            </h2>
            <p className="mt-1 text-xs text-[#4F5752]">
              Indicative export specifications, packaging parameters, and airfreight palletizing guidelines.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#4F5752] hover:text-[#174D3B] rounded-lg hover:bg-[#EEF1EB]"
            aria-label="Close catalog modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Action bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#EEF1EB] border border-[#D8DED8]">
          <div className="flex items-center gap-3 text-xs text-[#4F5752]">
            <FileText className="h-4 w-4 text-[#174D3B] shrink-0" />
            <span className="font-medium text-[#174D3B]">Export Specification & Packaging Guide</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#174D3B] border border-[#D8DED8] bg-white rounded-md hover:bg-[#F7F6F1] transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-[#C6A15B]" />
              Download Spec Sheet
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] rounded-md transition-colors shadow-sm"
            >
              Inquire Pricing
            </button>
          </div>
        </div>

        {/* Section 1: Flowers Table */}
        <div className="mt-8">
          <h3 className="text-lg font-serif-luxury font-semibold text-[#174D3B] mb-3">
            1. Fresh Cut Floral Specifications
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#D8DED8]">
            <table className="w-full text-left text-xs font-data">
              <thead className="bg-[#EEF1EB] text-[#174D3B] border-b border-[#D8DED8]">
                <tr>
                  <th className="p-3">Variety</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Stem Lengths</th>
                  <th className="p-3">Head Size</th>
                  <th className="p-3">Vase Life</th>
                  <th className="p-3">Box Packing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8DED8] bg-white text-[#4F5752]">
                {flowerVarieties.map((f) => (
                  <tr key={f.id} className="hover:bg-[#F7F6F1]">
                    <td className="p-3 font-semibold text-[#174D3B]">{f.name}</td>
                    <td className="p-3 capitalize text-[#4F5752]">{f.category.replace('-', ' ')}</td>
                    <td className="p-3">{f.stemLengths.join(', ')}</td>
                    <td className="p-3">{f.headSize}</td>
                    <td className="p-3 text-[#174D3B] font-semibold">{f.vaseLife}</td>
                    <td className="p-3">{f.bunchesPerBox} bunches / box</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Horticulture Table */}
        <div className="mt-8">
          <h3 className="text-lg font-serif-luxury font-semibold text-[#174D3B] mb-3">
            2. Fresh Horticulture Export Specifications
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#D8DED8]">
            <table className="w-full text-left text-xs font-data">
              <thead className="bg-[#EEF1EB] text-[#174D3B] border-b border-[#D8DED8]">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Commercial Varieties</th>
                  <th className="p-3">Packaging Specs</th>
                  <th className="p-3">Transit Temp</th>
                  <th className="p-3">Guidelines</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8DED8] bg-white text-[#4F5752]">
                {horticultureProducts.map((h) => (
                  <tr key={h.id} className="hover:bg-[#F7F6F1]">
                    <td className="p-3 font-semibold text-[#174D3B]">{h.name}</td>
                    <td className="p-3">{h.varieties.join(', ')}</td>
                    <td className="p-3">{h.packaging} ({h.netWeight})</td>
                    <td className="p-3 text-[#174D3B] font-semibold">{h.storageTemp}</td>
                    <td className="p-3 text-[#4F5752]">{h.certifications.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Aircraft Palletizing Guidelines */}
        <div className="mt-8 p-5 rounded-xl bg-[#F7F6F1] border border-[#D8DED8] text-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B] mb-2 flex items-center gap-2">
            <Plane className="h-4 w-4 text-[#C6A15B]" />
            <span>Aircraft ULD Pallet Guidelines (JKIA Nairobi)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-[#4F5752] font-data">
            <div>
              <div className="text-[#C6A15B] font-semibold">Master Box Dims:</div>
              <div className="text-[#174D3B] font-medium mt-0.5">100cm × 30cm × 20cm (0.06m³)</div>
            </div>
            <div>
              <div className="text-[#C6A15B] font-semibold">Standard PMC Pallet:</div>
              <div className="text-[#174D3B] font-medium mt-0.5">140 - 160 Boxes (~2,250 kg)</div>
            </div>
            <div>
              <div className="text-[#C6A15B] font-semibold">LD3 Lower Deck:</div>
              <div className="text-[#174D3B] font-medium mt-0.5">38 - 42 Boxes (~600 kg)</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D8DED8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-medium text-[#4F5752] hover:text-[#174D3B] border border-[#D8DED8] rounded-md bg-white hover:bg-[#EEF1EB]"
          >
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
