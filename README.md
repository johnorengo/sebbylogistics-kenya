# Sebby Logistics Kenya

React + TypeScript landing page, built with Vite and pre-rendered for search engines.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000. Requires Node.js 22.12 or newer.

## Build and deploy

```powershell
npm run lint
npm run build
npm run preview
```

Upload **the contents of `dist/`** to the website's document root (for example, `public_html` in cPanel). The build includes the fully rendered page, scripts, styles, favicon, business logo, social preview image, `robots.txt`, and `sitemap.xml`. Keep all paths intact. A Git push alone does not deploy to cPanel unless an automatic deployment is configured.

SEO settings live in `scripts/seo.mjs`. The default canonical domain is `https://sebbylogistics.com/`. To build for a different public domain:

```powershell
$env:SITE_URL = 'https://your-final-domain.com/'
npm run build
```

Choose one canonical hostname. Configure hosting to redirect HTTP and the alternate www/non-www hostname to the canonical HTTPS URL using permanent redirects. Unrecognized page paths should return a real HTTP 404, rather than the landing page with a 200 response. Check there is no hosting-level `X-Robots-Tag: noindex`, authentication, or firewall rule blocking crawlers. Protect staging sites from indexing separately.

## Change delivery workflow

After each website change, run the TypeScript checks and production build, refresh `artifacts/sebbylogistics-cpanel.zip` from the contents of `dist/` (including `.htaccess`), then commit and push the source changes to GitHub. The ZIP is a local deployment artifact and is excluded from Git by `artifacts/` in `.gitignore`. Keep `index.html` at the archive root so it can be extracted directly into the cPanel document root.

## Google Search Console and indexing

1. Open https://search.google.com/search-console and add the **Domain property** `sebbylogistics.com` (or your final domain). Verify ownership using the DNS TXT value Google provides. This requires access to the domain's DNS settings.
2. Alternatively, add the HTTPS **URL-prefix property** and choose HTML meta-tag verification. Copy only Google's verification token into the build environment:

   ```powershell
   $env:GOOGLE_SITE_VERIFICATION = 'your-token-from-google'
   npm run build
   ```

   Deploy the complete `dist/` output, then click Verify in Search Console. Keep the token in subsequent builds. The build reads environment variables from the process; it does not read `.env` files for these settings.
3. After deployment, confirm the home page, `/robots.txt`, `/sitemap.xml`, `/images/sebby-logo.png`, and `/images/kenyan-roses.jpg` load publicly over HTTPS. Inspect View Page Source: the business copy and contact details should already be present, without waiting for JavaScript.
4. In Search Console → Sitemaps, submit `sitemap.xml`. It contains the single public landing-page URL; section anchors are not separate pages.
5. In URL Inspection, inspect `https://sebbylogistics.com/`, select **Test live URL**, confirm indexing is allowed and rendering works, then select **Request indexing**.
6. Validate the deployed page at https://search.google.com/test/rich-results. Review Search Console's Page indexing and Core Web Vitals reports as Google collects data.

Submission requests crawling; Google determines whether and when to index the page. There is no guaranteed indexing deadline or ranking. Do not use the Indexing API for this landing page: it is intended for supported job-posting and livestream content. Do not use the retired sitemap ping endpoint.

## Production security and accessibility

Every build generates a Content Security Policy in the HTML and Apache/LiteSpeed header rules in `dist/.htaccess`. Inline Analytics and structured-data scripts are allowed by their exact SHA-256 hashes; unrestricted inline scripts and `eval` are not allowed. The policy allows the existing Google Fonts, Analytics, and Web3Forms endpoints. React's inline styling requires the style-only `unsafe-inline` permission. Hosting rules add clickjacking protection, MIME-sniffing protection, restricted browser permissions, a referrer policy, and one-day HSTS on HTTPS. They also deny directory listings and direct downloads of hidden configuration, logs, source maps and ZIP files.

**If cPanel already has a `.htaccess`, back it up and merge the generated rules into it. Do not overwrite existing hosting, SSL, redirect or security rules.** Enable Show Hidden Files in cPanel so the generated file is visible. These header rules depend on the hosting server's supported Apache modules; verify the responses after deployment. This project does not modify hosting firewall or bot-protection settings.

The form limits accepted field lengths and excludes unexpected fields from the submitted payload. Its Web3Forms access key is intentionally public, not a server credential. Client-side validation and the honeypot do not replace Web3Forms' server-side validation and anti-spam controls. Configure domain restrictions and stronger spam protection in Web3Forms if supported by your account. No inbox-delivery claim is made without a real delivered test email.

Navigation respects reduced-motion preferences, offsets section headings below the fixed menu and moves keyboard focus to the destination. The mobile menu supports Escape and keyboard focus cycling. Slideshow autoplay pauses during interaction and in background tabs; users can pause it, and reduced-motion users receive manual slides. Form labels, field errors, status messages and modal focus are accessible to keyboard and screen-reader users. Verify the deployed site on desktop and mobile and inspect the browser console for CSP violations.

SEO metadata, pre-rendered content, canonical URLs, robots.txt and the sitemap are still validated automatically. Search Console sitemap success means Google read the sitemap; it does **not** prove the homepage has been indexed. Check URL Inspection for the actual indexing status. Host TLS, security headers, Google indexing and email delivery require separate live verification.

The quote form uses Web3Forms to deliver every quote field to `support@sebbylogistics.com`, the recipient registered to its public access key. The buyer's email is the reply-to address. Recipient changes must be made through Web3Forms by using a key registered to the intended mailbox. Submission errors preserve the form for retry; confirmation appears only after the API reports success. Run `npm test` for mocked submission tests (no email is sent). After deployment, submit a real quote and check the support inbox and spam folder to confirm delivery.

Every production build checks that the HTML contains one H1, all visible page sections, consistent canonical/structured-data URLs, a crawlable sitemap, and existing image/script/style assets. JavaScript hydrates the pre-rendered markup to enable the menu, carousel, and form interactions. Changes to components are automatically reflected in the next build.

Official references: [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), and [requesting a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).


## Scroll and motion behavior

Wheel and touch scrolling remain native. Section navigation accounts for the fixed header and moves keyboard focus to the destination. Navigation highlights the current section; floating quick actions stay at the bottom right with safe-area spacing. Content reveals once with a short stagger, and remains visible when JavaScript or animation support is unavailable. Reduced-motion preferences disable reveal motion and hero zoom. The hero background images rotate automatically without visible navigation controls; it pauses during hover, keyboard interaction, and while the tab is hidden. Sections use responsive spacing and short desktop viewports allow the hero to grow to fit its content.
