import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { siteUrl } from './seo.mjs';
import { securityPolicy } from './security.mjs';

const output = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Page must contain exactly one H1');
for (const id of ['hero', 'about', 'why-choose-us', 'contact', 'quote']) {
  assert.ok(html.includes(`id="${id}"`), `Missing pre-rendered section ${id}`);
}
assert.ok(html.includes('Buy Premium Kenyan Flowers'), 'Missing visible landing-page content');
assert.ok(html.includes(`rel="canonical" href="${siteUrl}"`), 'Canonical URL mismatch');
assert.ok(!/noindex|<!-- seo-head -->|\/src\//.test(html), 'Unprocessed source or indexing block');
assert.equal((html.split('</head>')[0].match(/<title>/g) || []).length, 1, 'Duplicate page titles');
const data = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(data['@graph'].find(item => item['@type'] === 'Organization').url, siteUrl);
const robots = await readFile(new URL('robots.txt', output), 'utf8');
const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
assert.ok(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), 'Incorrect sitemap declaration');
assert.ok(sitemap.includes(`<loc>${siteUrl}</loc>`), 'Incorrect sitemap URL');
assert.ok(!sitemap.includes('#'), 'Section anchors must not be separate sitemap URLs');
for (const match of html.matchAll(/(?:src|href)="(\/(?:assets|images)\/[^"?]+)(?:\?[^" ]*)?"/g)) {
  await access(new URL(match[1].slice(1), output));
}
for (const asset of ['images/sebby-logo.png', 'images/kenyan-roses.jpg']) {
  await access(new URL(asset, output));
}
console.log('SEO checks passed: rendered content, metadata, structured data, sitemap and asset URLs.');
const headers = await readFile(new URL('.htaccess', output), 'utf8');
assert.ok(headers.includes(securityPolicy(html)), 'Hosting CSP does not match the page scripts');
assert.ok(html.includes('http-equiv="Content-Security-Policy"'), 'Missing browser CSP fallback');
for (const label of html.matchAll(/<label\b[^>]*\bfor="([^"]+)"/g)) {
  assert.ok(html.includes(`id="${label[1]}"`), `Label has no matching form control: ${label[1]}`);
}
assert.equal((html.match(/<label\b/g) || []).length, 11, 'Missing quote form labels');
assert.ok(html.includes('G-PZCH170K9E'), 'Missing Analytics tag');
console.log('Security policy and accessible form markup checks passed.');
