import { createHash } from 'node:crypto';

export function securityPolicy(html) {
  const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => !/\bsrc\s*=/.test(match[1]))
    .map(match => `'sha256-${createHash('sha256').update(match[2]).digest('base64')}'`);
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(' ')} https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
    "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
    "object-src 'none'", "base-uri 'none'", "frame-src 'none'",
    "form-action 'self' https://api.web3forms.com", 'upgrade-insecure-requests',
  ].join('; ');
}

export function hardenHtml(html) {
  const policy = securityPolicy(html);
  return html.replace(/(<meta charset="UTF-8"\s*\/>)/i, `$1\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />\n    <meta name="referrer" content="strict-origin-when-cross-origin" />`);
}

export function hostingHeaders(html) {
  return `# Generated for this build. Merge with existing hosting rules; do not discard them.
<IfModule mod_headers.c>
  Header always set Content-Security-Policy "${securityPolicy(html)}; frame-ancestors 'none'"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
  Header always set Strict-Transport-Security "max-age=86400"
</IfModule>
<IfModule mod_autoindex.c>
  Options -Indexes
</IfModule>
<FilesMatch "(^\\.|\\.(env|log|map|zip)$|^(package|package-lock)\\.json$)">
  Require all denied
</FilesMatch>
`;
}
