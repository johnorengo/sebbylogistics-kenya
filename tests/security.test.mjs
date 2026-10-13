import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { hardenHtml, hostingHeaders, securityPolicy } from '../scripts/security.mjs';

test('allows exact inline script hashes without unsafe script execution', () => {
  const code = "gtag('config', 'G-PZCH170K9E');";
  const html = `<html><head><meta charset="UTF-8" /><script>${code}</script></head></html>`;
  const policy = securityPolicy(html);
  const scriptRule = policy.split('; ').find(rule => rule.startsWith('script-src'));
  assert.ok(scriptRule.includes(`'sha256-${createHash('sha256').update(code).digest('base64')}'`));
  assert.ok(!scriptRule.includes('unsafe-inline') && !scriptRule.includes('unsafe-eval'));
  assert.ok(hardenHtml(html).indexOf('Content-Security-Policy') < hardenHtml(html).indexOf('<script>'));
  assert.ok(policy.includes('https://api.web3forms.com'));
  assert.ok(policy.includes("base-uri 'none'"));
  assert.ok(hostingHeaders(html).includes("frame-ancestors 'none'"));
  assert.ok(hostingHeaders(html).includes('X-Content-Type-Options "nosniff"'));
});

test('does not authorize extra inline scripts from external script elements', () => {
  const policy = securityPolicy('<script src="/app.js">injected()</script>');
  assert.ok(!policy.includes('sha256-'));
  assert.ok(policy.includes("form-action 'self' https://api.web3forms.com"));
});
