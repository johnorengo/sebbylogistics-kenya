import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, Send, Info } from 'lucide-react';

interface WholesaleRFQCalculatorProps {
  initialVariety?: string;
  initialStemLength?: string;
}

export const WholesaleRFQCalculator: React.FC<WholesaleRFQCalculatorProps> = ({
  initialVariety,
  initialStemLength,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialVariety || 'Rhodos Premium Red Rose');
  const [selectedLength, setSelectedLength] = useState(initialStemLength || '60cm');
  const [boxes, setBoxes] = useState(50);
  const [destinationAirport, setDestinationAirport] = useState('AMS (Schiphol, Amsterdam)');
  const [incoterm, setIncoterm] = useState<'FOB Nairobi (JKIA)' | 'CIF Destination Airport'>('CIF Destination Airport');

  const [formData, setFormData] = useState({
    buyerName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    targetArrivalDate: '',
    customNotes: '',
  });

  const [submittedRFQ, setSubmittedRFQ] = useState<any | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialVariety) {
      setSelectedProduct(initialVariety);
    }
    if (initialStemLength) {
      setSelectedLength(initialStemLength);
    }
  }, [initialVariety, initialStemLength]);

  // Pricing & Logistics Calculation Math (Indicative sample calculations)
  const stemsPerBox = 240;
  const totalStems = boxes * stemsPerBox;
  const kgPerBox = 14.5;
  const totalWeightKg = (boxes * kgPerBox).toFixed(1);
  const cbmPerBox = 0.082;
  const totalCbm = (boxes * cbmPerBox).toFixed(2);

  // Indicative Price estimates based on stem length
  const lengthPrices: { [key: string]: number } = {
    '50cm': 0.28,
    '60cm': 0.34,
    '70cm': 0.40,
    '80cm': 0.46,
    '90cm': 0.54,
  };
  const unitFob = lengthPrices[selectedLength] || 0.34;
  const freightPerStem = incoterm === 'CIF Destination Airport' ? 0.11 : 0.0;
  const estimatedUnitCost = (unitFob + freightPerStem).toFixed(2);
  const estimatedTotalUSD = (totalStems * (unitFob + freightPerStem)).toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.buyerName.trim()) errors.buyerName = 'Full Name is required';
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid corporate email is required';
    if (!formData.country.trim()) errors.country = 'Destination country is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const rfqNumber = `RFQ-EQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRFQ({
      rfqNumber,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      buyerName: formData.buyerName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone || '+31 20 000 0000',
      country: formData.country,
      selectedProduct,
      selectedLength,
      boxes,
      totalStems,
      destinationAirport,
      incoterm,
      totalWeightKg,
      totalCbm,
      estimatedUnitCost,
      estimatedTotalUSD,
      targetDate: formData.targetArrivalDate || 'Next Scheduled Flight Window',
    });
  };

  return (
    <section id="wholesale" className="relative py-20 sm:py-24 bg-[#F8FAF8] border-b border-[#D9E1DC] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E] mb-2 flex items-center gap-2">
            <Calculator className="h-3.5 w-3.5 text-[#007A3D]" />
            <span>Commercial Inquiries & Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0B110E] tracking-tight">
            Wholesale Pricing & Airfreight Calculator
          </h2>
          <p className="mt-4 text-[#3A453F] text-sm sm:text-base leading-relaxed">
            Configure sample flower consignment parameters to review indicative volumetric weights, FOB/CIF structures, and submit a formal Request for Quotation (RFQ) directly to our commercial sales desk.
          </p>
        </div>

        {/* Two-Column Grid: Configurator on Left, RFQ Form on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive Calculation Engine */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#D9E1DC] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B110E] mb-4 pb-2 border-b border-[#D9E1DC]">
                1. Consignment Parameters
              </div>

              {/* Product Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111814] mb-1.5">
                    Select Product / Variety
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#F8FAF8] border border-[#D9E1DC] rounded-lg px-3.5 py-2.5 text-sm text-[#0B110E] focus:outline-none focus:border-[#007A3D]"
                  >
                    <optgroup label="T-Hybrid & Premium Roses">
                      <option value="Rhodos Premium Red Rose">Rhodos Premium Red Rose</option>
                      <option value="Madam Red Supreme">Madam Red Supreme</option>
                      <option value="Athena Ivory White">Athena Ivory White Rose</option>
                      <option value="Ever Red Aristocrat">Ever Red Aristocrat</option>
                    </optgroup>
                    <optgroup label="Spray Roses & Fillers">
                      <option value="Babe Spray Rose">Babe Spray Rose</option>
                      <option value="Snowflake Pure White Spray">Snowflake Pure White Spray</option>
                      <option value="Gypsophila Million Stars®">Gypsophila Million Stars®</option>
                      <option value="Hypericum Coco Berries">Hypericum Coco Berries</option>
                      <option value="Standard Carnation Select">Standard Carnation Select</option>
                    </optgroup>
                    <optgroup label="Fresh Horticulture Line">
                      <option value="Kenyan Hass Avocado (Export Grade)">Kenyan Hass Avocado (Counts 12-26)</option>
                      <option value="Fresh Cut Culinary Herbs">Fresh Cut Culinary Herbs</option>
                      <option value="Extra-Fine French Beans & Mangetout">Extra-Fine French Beans & Mangetout</option>
                    </optgroup>
                  </select>
                </div>

                {/* Stem Length / Grade Selector */}
                <div>
                  <label className="block text-xs font-medium text-[#4F5752] mb-1.5">
                    Stem Length / Specification
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {['50cm', '60cm', '70cm', '80cm', '90cm'].map((len) => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setSelectedLength(len)}
                        className={`py-2 text-xs font-data rounded-md border transition-all ${
                          selectedLength === len
                            ? 'bg-[#174D3B] text-white font-bold border-[#174D3B]'
                            : 'bg-white text-[#4F5752] border-[#D8DED8] hover:border-[#174D3B]/40'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Box Count Slider & Input */}
                <div>
                  <div className="flex justify-between items-center text-xs text-[#4F5752] mb-1.5">
                    <label className="font-medium">Master Export Boxes: <strong className="text-[#174D3B] font-data">{boxes} cartons</strong></label>
                    <span className="font-data text-[#C6A15B] font-semibold">~{totalStems.toLocaleString()} stems</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={boxes}
                    onChange={(e) => setBoxes(Number(e.target.value))}
                    className="w-full accent-[#174D3B] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#4F5752]/70 font-data mt-1">
                    <span>10 Boxes</span>
                    <span>100 Boxes</span>
                    <span>250 Boxes</span>
                    <span>500+ Boxes</span>
                  </div>
                </div>

                {/* Destination Airport */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1.5">
                      Destination Airport
                    </label>
                    <select
                      value={destinationAirport}
                      onChange={(e) => setDestinationAirport(e.target.value)}
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    >
                      <option value="AMS (Schiphol, Amsterdam)">AMS · Amsterdam Schiphol</option>
                      <option value="LHR (Heathrow, London)">LHR · London Heathrow</option>
                      <option value="DXB (Dubai International)">DXB · Dubai International</option>
                      <option value="FRA (Frankfurt Main)">FRA · Frankfurt Main</option>
                      <option value="LGG (Liège Airport)">LGG · Liège Cargo Hub</option>
                      <option value="RUH (Riyadh, Saudi Arabia)">RUH · Riyadh King Khalid</option>
                      <option value="JFK (New York, USA)">JFK · New York JFK</option>
                      <option value="NRT (Narita, Tokyo)">NRT · Tokyo Narita</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4F5752] mb-1.5">
                      Incoterms Basis
                    </label>
                    <select
                      value={incoterm}
                      onChange={(e) => setIncoterm(e.target.value as any)}
                      className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                    >
                      <option value="CIF Destination Airport">CIF Destination Airport (Airfreight included)</option>
                      <option value="FOB Nairobi (JKIA)">FOB Nairobi (JKIA Airside Handover)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Cargo & Indicative Output Box */}
            <div className="mt-8 pt-6 border-t border-[#D8DED8] bg-[#EEF1EB] rounded-xl p-4 border border-[#D8DED8]">
              <div className="text-[11px] font-data text-[#174D3B] uppercase tracking-wider mb-2 flex items-center justify-between font-semibold">
                <span>Indicative Volumetric Planning</span>
                <span className="text-[#C6A15B]">JKIA Dispatch</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-data py-2 border-b border-[#D8DED8]">
                <div>
                  <div className="text-[#4F5752]">Est. Gross Weight</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-0.5">{totalWeightKg} kg</div>
                </div>
                <div>
                  <div className="text-[#4F5752]">Cargo Volume</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-0.5">{totalCbm} CBM</div>
                </div>
                <div>
                  <div className="text-[#4F5752]">Transit Envelope</div>
                  <div className="text-sm font-semibold text-[#174D3B] mt-0.5">2°C - 4°C Target</div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#4F5752]">
                    Indicative {incoterm === 'CIF Destination Airport' ? 'CIF' : 'FOB'} Rate:
                  </div>
                  <div className="text-xl font-data font-bold text-[#174D3B] mt-0.5">
                    ${estimatedUnitCost} <span className="text-xs text-[#C6A15B] font-normal">/ stem</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-[#4F5752]">Estimated Lot Value:</div>
                  <div className="text-xl font-data font-bold text-[#174D3B] mt-0.5">
                    ${estimatedTotalUSD}
                  </div>
                </div>
              </div>

              <div className="mt-2 text-[10px] text-[#4F5752] flex items-center gap-1">
                <Info className="h-3 w-3 shrink-0 text-[#C6A15B]" />
                <span>Indicative sample estimate. Formal quotation provided upon review of volume and scheduling requirements.</span>
              </div>
            </div>
          </div>

          {/* Right: RFQ Lead Capture Form or Quote Receipt Preview */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#D8DED8] p-6 sm:p-8 shadow-sm">
            {submittedRFQ ? (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[#174D3B] mb-2">
                    <CheckCircle2 className="h-6 w-6 text-[#174D3B] shrink-0" />
                    <div>
                      <h3 className="text-xl font-serif-luxury font-semibold text-[#174D3B]">
                        Wholesale RFQ Generated Successfully
                      </h3>
                      <div className="text-xs font-data text-[#C6A15B] font-semibold">
                        Reference: {submittedRFQ.rfqNumber} · {submittedRFQ.date}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#4F5752] leading-relaxed">
                    Your consignment parameters have been logged. A commercial specification overview will be dispatched to <strong>{submittedRFQ.email}</strong>.
                  </p>

                  {/* Summary Quotation Sheet */}
                  <div className="mt-6 rounded-xl bg-[#F7F6F1] border border-[#D8DED8] p-5 font-data text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-[#D8DED8] pb-2">
                      <span className="text-[#4F5752]">Client / Importer:</span>
                      <span className="text-[#174D3B] font-semibold">{submittedRFQ.companyName} ({submittedRFQ.buyerName})</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D8DED8] pb-2">
                      <span className="text-[#4F5752]">Floral Variety:</span>
                      <span className="text-[#174D3B]">{submittedRFQ.selectedProduct} ({submittedRFQ.selectedLength})</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D8DED8] pb-2">
                      <span className="text-[#4F5752]">Order Quantity:</span>
                      <span className="text-[#174D3B]">{submittedRFQ.boxes} Cartons ({submittedRFQ.totalStems.toLocaleString()} Stems)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D8DED8] pb-2">
                      <span className="text-[#4F5752]">Freight Route & Port:</span>
                      <span className="text-[#174D3B]">JKIA Nairobi ⟶ {submittedRFQ.destinationAirport}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D8DED8] pb-2">
                      <span className="text-[#4F5752]">Incoterms Basis:</span>
                      <span className="text-[#174D3B]">{submittedRFQ.incoterm}</span>
                    </div>
                    <div className="flex justify-between pt-1 text-sm font-bold">
                      <span className="text-[#4F5752]">Indicative Consignment Value:</span>
                      <span className="text-[#174D3B]">${submittedRFQ.estimatedTotalUSD} USD</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8DED8] flex flex-wrap gap-3">
                  <button
                    onClick={() => setSubmittedRFQ(null)}
                    className="flex-1 py-3 px-4 text-xs font-medium text-[#174D3B] border border-[#D8DED8] rounded-md hover:bg-[#EEF1EB] text-center"
                  >
                    Configure Another Consignment
                  </button>
                  <a
                    href="#contact"
                    className="py-3 px-4 text-xs font-semibold text-white bg-[#174D3B] hover:bg-[#285F4A] rounded-md text-center shadow-sm"
                  >
                    Direct Operations Desk
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#174D3B] mb-1 pb-2 border-b border-[#D8DED8]">
                    2. Buyer & Company Registration
                  </div>
                  <p className="text-xs text-[#4F5752] mb-4">
                    Direct accounts available for wholesale distributors, auction buyers, supermarket procurement desks, and event florists.
                  </p>

                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.buyerName}
                          onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                          placeholder="e.g. Liam Sterling"
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                        {formErrors.buyerName && (
                          <span className="text-[10px] text-rose-600 mt-0.5 block">{formErrors.buyerName}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Company / Import Business *
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Royal Flora Direct B.V."
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                        {formErrors.companyName && (
                          <span className="text-[10px] text-rose-600 mt-0.5 block">{formErrors.companyName}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@floralimport.com"
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-rose-600 mt-0.5 block">{formErrors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Phone / Messaging
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+31 6 1234 5678"
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Destination Country *
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. Netherlands / UK / UAE"
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                        {formErrors.country && (
                          <span className="text-[10px] text-rose-600 mt-0.5 block">{formErrors.country}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#4F5752] mb-1">
                          Target Arrival Date
                        </label>
                        <input
                          type="date"
                          value={formData.targetArrivalDate}
                          onChange={(e) => setFormData({ ...formData, targetArrivalDate: e.target.value })}
                          className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4F5752] mb-1">
                        Packaging or Quality Specifications
                      </label>
                      <textarea
                        rows={2}
                        value={formData.customNotes}
                        onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                        placeholder="Specify stem length requirements, sleeve packaging, barcoding, or scheduling window..."
                        className="w-full bg-[#F7F6F1] border border-[#D8DED8] rounded-lg px-3 py-2 text-xs text-[#174D3B] focus:outline-none focus:border-[#174D3B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9E1DC]">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-[#C8102E] hover:bg-[#A30922] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95"
                  >
                    <Send className="h-4 w-4 text-white" />
                    Submit Wholesale RFQ to Sales Desk
                  </button>
                  <div className="mt-2 text-center text-[11px] text-[#4F5752]">
                    Dispatched directly to <span className="font-semibold text-[#0B110E]">Sales@sebbylogistics.com</span> · WhatsApp support: <span className="font-semibold text-[#007A3D]">+254 719707003</span>
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
