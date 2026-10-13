export interface FlowerVariety {
  id: string;
  name: string;
  botanicalName: string;
  category: 'roses' | 'spray-roses' | 'fillers' | 'horticulture';
  colors: string[];
  stemLengths: string[]; // e.g. ["50cm", "60cm", "70cm", "80cm"]
  headSize: string; // e.g. "5.5 - 6.8 cm"
  petalCount: string; // e.g. "45 - 55 petals"
  vaseLife: string; // e.g. "14 - 18 days"
  stemsPerBunch: number;
  bunchesPerBox: number;
  originRegion: string; // e.g. "Lake Naivasha (2,050m)"
  description: string;
  bestFor: string[];
  image: string;
  availability: 'Year-Round' | 'Peak Seasonal';
  grade: 'A1 Export' | 'Select Supreme';
}

export interface HorticultureProduct {
  id: string;
  name: string;
  botanicalName: string;
  category: 'horticulture';
  varieties: string[];
  packaging: string;
  netWeight: string;
  storageTemp: string;
  originRegion: string;
  certifications: string[];
  seasonality: string;
  description: string;
  image: string;
}
