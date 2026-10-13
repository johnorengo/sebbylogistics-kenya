import { build } from 'vite';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { hardenHtml, hostingHeaders } from './security.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
await build();
const result = await build({
  build: { ssr: 'src/entry-server.tsx', write: false },
});
const entry = result.output.find(item => item.type === 'chunk' && item.isEntry);
if (!entry) throw new Error('Pre-render entry was not generated');
const temporaryModule = path.join(root, '.prerender.mjs');
try {
  await writeFile(temporaryModule, entry.code);
  const { render, renderLogo } = await import(pathToFileURL(temporaryModule).href);
  const htmlPath = path.join(root, 'dist/index.html');
  const html = await readFile(htmlPath, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing pre-render mount point');
  const renderedHtml = hardenHtml(html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`));
  await writeFile(htmlPath, renderedHtml);
  await writeFile(path.join(root, 'dist/.htaccess'), hostingHeaders(renderedHtml));
  await writeFile(path.join(root, 'dist/images/sebby-logo.svg'), renderLogo());
  console.log('Landing page pre-rendered for search engines and visitors.');
} finally {
  await unlink(temporaryModule);
}
await import('./check-seo.mjs');
