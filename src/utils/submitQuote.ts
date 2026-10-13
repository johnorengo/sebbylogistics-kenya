export interface QuoteFields {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  airport: string;
  varieties: string;
  quantity: string;
  frequency: string;
  arrivalDate: string;
  notes: string;
}

export type QuoteSubmission = QuoteFields & { reference: string; date: string };

// Web3Forms public form key, registered to support@sebbylogistics.com.
export const WEB3FORMS_ACCESS_KEY = 'b5f8dd63-3745-4d72-a0b9-112987198edf';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const QUOTE_LIMITS = {
  name: 120, company: 160, email: 254, phone: 60, country: 100, airport: 100,
  varieties: 1000, quantity: 100, frequency: 100, arrivalDate: 32, notes: 3000,
  reference: 64, date: 64,
} as const;

export function validateQuote(request: QuoteSubmission) {
  for (const [field, limit] of Object.entries(QUOTE_LIMITS)) {
    const value = request[field as keyof QuoteSubmission];
    if (typeof value !== 'string' || value.length > limit) throw new Error('Please shorten your form entries and try again.');
  }
  if (!request.name.trim() || !request.country.trim() || !request.varieties.trim()
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email)
    || !/^[A-Z0-9-]+$/.test(request.reference)) {
    throw new Error('Please check your name, email, destination and flower requirements.');
  }
}

export async function submitQuote(request: QuoteSubmission, fetcher: typeof fetch = fetch) {
  validateQuote(request);
  const fields = Object.fromEntries(Object.keys(QUOTE_LIMITS).map(field => [field, request[field as keyof QuoteSubmission]]));
  let response: Response;
  try {
    response = await fetcher(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Sebby Logistics quote request — ${request.reference}`,
        from_name: 'Sebby Logistics Website',
        ...fields,
        replyto: request.email,
        botcheck: false,
      }),
    });
  } catch {
    throw new Error('We could not confirm submission. Please check your connection and try again, or email support@sebbylogistics.com.');
  }
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    throw new Error(response.status === 429
      ? 'Too many requests. Please wait a moment and try again, or email support@sebbylogistics.com.'
      : 'Your request could not be submitted. Please try again, or email support@sebbylogistics.com.');
  }
}
