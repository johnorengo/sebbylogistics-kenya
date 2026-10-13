import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { siteUrl } from './seo.mjs';

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
for (const asset of ['favicon.svg', 'images/sebby-logo.svg', 'images/kenyan-roses.jpg']) {
  await access(new URL(asset, output));
}
console.log('SEO checks passed: rendered content, metadata, structured data, sitemap and asset URLs.');
