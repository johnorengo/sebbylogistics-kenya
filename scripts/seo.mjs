export const siteUrl = new URL(process.env.SITE_URL || 'https://sebbylogistics.com/').origin + '/';
const title = 'Kenyan Flower Exports & Airfreight | Sebby Logistics';
const description = 'Source premium flowers directly from Kenyan farms with Sebby Logistics. We manage purchasing, quality control and worldwide airfreight from JKIA, Nairobi.';
const image = new URL('images/kenyan-roses.jpg', siteUrl).href;
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function seoHead() {
  const organization = {
    '@type': 'Organization', '@id': siteUrl + '#organization',
    name: 'Sebby Logistics Ltd', url: siteUrl, description,
    sameAs: ['https://www.facebook.com/profile.php?id=61576578089104', 'https://www.instagram.com/sebbylogistics/'],
    logo: { '@type': 'ImageObject', url: new URL('images/sebby-logo.svg', siteUrl).href, width: 400, height: 400 },
    telephone: '+254719707003', email: 'support@sebbylogistics.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Jomo Kenyatta International Airport, 1st Freight Lane Avenue (Cargo)', addressLocality: 'Nairobi', addressCountry: 'KE' },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'sales', telephone: '+254719707003', email: 'sales@sebbylogistics.com', availableLanguage: 'English' },
      { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@sebbylogistics.com' },
    ],
  };
  const graph = { '@context': 'https://schema.org', '@graph': [
    organization,
    { '@type': 'WebSite', '@id': siteUrl + '#website', name: 'Sebby Logistics Ltd', url: siteUrl, publisher: { '@id': organization['@id'] }, inLanguage: 'en' },
    { '@type': 'WebPage', '@id': siteUrl + '#webpage', url: siteUrl, name: title, description, isPartOf: { '@id': siteUrl + '#website' }, about: { '@id': organization['@id'] }, primaryImageOfPage: { '@type': 'ImageObject', url: image, width: 1376, height: 768 }, inLanguage: 'en' },
    { '@type': 'Service', name: 'Kenyan flower sourcing and worldwide airfreight', serviceType: 'Flower procurement and international airfreight logistics', provider: { '@id': organization['@id'] }, url: siteUrl, areaServed: 'Worldwide', description },
  ] };
  return `<title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${escape(siteUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sebby Logistics Ltd" />
    <meta property="og:locale" content="en_KE" />
    <meta property="og:url" content="${escape(siteUrl)}" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:image" content="${escape(image)}" />
    <meta property="og:image:width" content="1376" />
    <meta property="og:image:height" content="768" />
    <meta property="og:image:alt" content="Fresh orange and peach roses harvested at a Kenyan flower farm" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />
    <meta name="twitter:image" content="${escape(image)}" />
    <meta name="twitter:image:alt" content="Fresh orange and peach roses harvested at a Kenyan flower farm" />
    ${process.env.GOOGLE_SITE_VERIFICATION ? `<meta name="google-site-verification" content="${escape(process.env.GOOGLE_SITE_VERIFICATION)}" />` : ''}
    <script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>`;
}

export function seoPlugin() {
  return {
    name: 'sebby-seo',
    transformIndexHtml(html) { return html.replace('<!-- seo-head -->', seoHead()); },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n` });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(siteUrl)}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>\n` });
    },
  };
}
