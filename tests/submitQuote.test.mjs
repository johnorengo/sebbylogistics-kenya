import test from 'node:test';
import assert from 'node:assert/strict';
import { submitQuote, WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '../src/utils/submitQuote.ts';

const request = {
  reference: 'INQ-123456', date: 'Oct 13, 2026', name: 'Test Buyer', company: 'Test Company',
  email: 'buyer@example.com', phone: '+254700000000', country: 'Netherlands', airport: 'AMS',
  varieties: 'Red roses 60cm', quantity: '100 boxes', frequency: 'Weekly standing order',
  arrivalDate: '2026-11-01', notes: 'CIF quote requested',
};

test('submits every quote field, reference and buyer reply address', async () => {
  let calls = 0;
  await submitQuote(request, async (url, options) => {
    calls++;
    assert.equal(url, WEB3FORMS_ENDPOINT);
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    assert.ok(options.signal instanceof AbortSignal);
    const payload = JSON.parse(options.body);
    for (const [key, value] of Object.entries(request)) assert.equal(payload[key], value);
    assert.equal(payload.access_key, WEB3FORMS_ACCESS_KEY);
    assert.equal(payload.replyto, request.email);
    assert.equal(payload.botcheck, false);
    assert.ok(payload.subject.includes(request.reference));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  });
  assert.equal(calls, 1);
});

test('rejects API failure even if HTTP status is 200', async () => {
  await assert.rejects(submitQuote(request, async () => new Response(JSON.stringify({ success: false }), { status: 200 })), /could not be submitted/);
});

test('explains rate limits without reporting success', async () => {
  await assert.rejects(submitQuote(request, async () => new Response(JSON.stringify({ success: false }), { status: 429 })), /Too many requests/);
});

test('rejects malformed responses and network failures', async () => {
  await assert.rejects(submitQuote(request, async () => new Response('<html>Error</html>', { status: 502 })), /could not be submitted/);
  await assert.rejects(submitQuote(request, async () => { throw new Error('Network failure'); }), /could not confirm submission/);
});

test('rejects oversized or malformed input before transmitting it', async () => {
  let calls = 0;
  const fetcher = async () => { calls++; return new Response('{"success":true}'); };
  await assert.rejects(submitQuote({ ...request, notes: 'x'.repeat(3001) }, fetcher), /shorten/);
  await assert.rejects(submitQuote({ ...request, email: 'buyer@example.com\r\nBcc:other@example.com' }, fetcher), /check/);
  assert.equal(calls, 0);
});

test('ignores unrecognized fields that would override delivery configuration', async () => {
  await submitQuote({ ...request, access_key: 'other-key', subject: 'spoof', redirect: 'https://example.com' }, async (_url, options) => {
    const body = JSON.parse(options.body);
    assert.equal(body.access_key, WEB3FORMS_ACCESS_KEY);
    assert.ok(body.subject.includes(request.reference));
    assert.ok(!('redirect' in body));
    return new Response('{"success":true}');
  });
});
