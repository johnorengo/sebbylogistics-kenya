import { FlightRoute } from '../types';

export const flightRoutes: FlightRoute[] = [
  {
    id: 'ams-route',
    destination: 'Netherlands',
    city: 'Amsterdam',
    airportCode: 'AMS (Schiphol)',
    carrier: 'Major Commercial Cargo Partners',
    transitHours: 'Direct Cargo Route (~8-9 hrs)',
    weeklyFrequencies: 14,
    aircraftType: 'Widebody Cargo Freighter',
    coldChainGuarantee: 'Temperature-managed hold protocols',
  },
  {
    id: 'lhr-route',
    destination: 'United Kingdom',
    city: 'London',
    airportCode: 'LHR (Heathrow)',
    carrier: 'International Air Cargo Services',
    transitHours: 'Direct Route (~9 hrs)',
    weeklyFrequencies: 10,
    aircraftType: 'Commercial Passenger & Cargo Flights',
    coldChainGuarantee: 'Thermal protection staging guidelines',
  },
  {
    id: 'dxb-route',
    destination: 'United Arab Emirates',
    city: 'Dubai',
    airportCode: 'DXB / DWC',
    carrier: 'Middle East Regional Carriers',
    transitHours: 'Direct Route (~5-6 hrs)',
    weeklyFrequencies: 12,
    aircraftType: 'Widebody Scheduled Aircraft',
    coldChainGuarantee: 'Dedicated cool-chain transfer facility',
  },
  {
    id: 'fra-route',
    destination: 'Germany',
    city: 'Frankfurt',
    airportCode: 'FRA (Frankfurt Main)',
    carrier: 'European Freight Network',
    transitHours: 'Direct Route (~8-9 hrs)',
    weeklyFrequencies: 7,
    aircraftType: 'Freighter Services',
    coldChainGuarantee: 'Perishables transit center procedures',
  },
  {
    id: 'lgg-route',
    destination: 'Belgium',
    city: 'Liège',
    airportCode: 'LGG (Liège Airport)',
    carrier: 'Dedicated Cargo Operators',
    transitHours: 'Scheduled Freight Route',
    weeklyFrequencies: 6,
    aircraftType: 'Charter & Scheduled Freighters',
    coldChainGuarantee: 'Airside perishable cargo procedures',
  },
  {
    id: 'ruh-route',
    destination: 'Saudi Arabia',
    city: 'Riyadh',
    airportCode: 'RUH (King Khalid)',
    carrier: 'Regional Middle East Flights',
    transitHours: 'Direct Route (~5 hrs)',
    weeklyFrequencies: 5,
    aircraftType: 'Scheduled Commercial Aircraft',
    coldChainGuarantee: 'Perishables customs clearance handling',
  },
];

export interface ColdChainStep {
  step: string;
  title: string;
  location: string;
  duration: string;
  tempRange: string;
  rhLevel: string;
  description: string;
  criticalControlPoint: string;
}

export const coldChainSteps: ColdChainStep[] = [
  {
    step: '01',
    title: 'Morning Harvest & Initial Field Sorting',
    location: 'Rift Valley Regional Farms',
    duration: 'Early Morning Harvest Cycle',
    tempRange: 'Target: Ambient Field to Shadow Transfer',
    rhLevel: 'Standard Morning Humidity',
    description: 'Stems are carefully cut at designated bud maturity stages and placed into hydration buckets to protect vascular structure before transfer to on-site packing areas.',
    criticalControlPoint: 'Timely transfer to shaded collection points to preserve stem moisture.',
  },
  {
    step: '02',
    title: 'Packhouse Hydration & Temperature Conditioning',
    location: 'On-Farm Packhouse Facilities',
    duration: 'Post-Harvest Protocol',
    tempRange: 'Target: 2°C - 4°C Controlled Cold Room',
    rhLevel: 'High Humidity Cold Storage',
    description: 'Flowers undergo clean hydration treatment and grading by length and aperture before being packed into standard export cartons with protective cushioning.',
    criticalControlPoint: 'Inspection and verification of stem quality prior to packaging.',
  },
  {
    step: '03',
    title: 'Refrigerated Road Transit',
    location: 'Highway Corridor to JKIA Cargo Area',
    duration: 'Scheduled Road Transfer',
    tempRange: 'Target: 2°C - 4°C Temperature-Regulated',
    rhLevel: 'Controlled Reefer Environment',
    description: 'Enclosed refrigerated trucks transfer packed master cartons along regional transit corridors directly toward the airport logistics zone.',
    criticalControlPoint: 'Maintenance of vehicle refrigeration units throughout transit.',
  },
  {
    step: '04',
    title: 'Airport Cargo Reception & Export Inspection',
    location: 'JKIA Freight Logistics Zone',
    duration: 'Pre-Flight Staging Window',
    tempRange: 'Target: Refrigerated Airside Holding',
    rhLevel: 'Climate-Monitored Facility',
    description: 'Consignments arrive at the airport cargo facility for regulatory inspection, documentation verification, and flight palletization.',
    criticalControlPoint: 'Thermal blanket protection and swift cargo pallet staging.',
  },
  {
    step: '05',
    title: 'Airfreight Transfer & International Departure',
    location: 'JKIA Nairobi (NBO) International Apron',
    duration: 'International Flight Duration',
    tempRange: 'Target: Regulated Cargo Hold Envelope',
    rhLevel: 'Airline Controlled',
    description: 'Consignments are loaded into scheduled commercial aircraft holds for departure to European, Middle Eastern, and regional auction and distribution centers.',
    criticalControlPoint: 'Coordinated ramp handover minimizing ambient tarmac dwell time.',
  },
];
