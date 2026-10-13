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

export async function submitQuote(request: QuoteSubmission, fetcher: typeof fetch = fetch) {
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
        ...request,
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
