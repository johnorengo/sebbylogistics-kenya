import test from 'node:test';
import assert from 'node:assert/strict';
import { scrollToElement, scrollToSection } from '../src/utils/scroll.ts';

test('scrolls below the fixed menu and focuses the destination without a hash', () => {
  const oldWindow = globalThis.window, oldDocument = globalThis.document;
  const calls = [];
  const attributes = new Map();
  const element = { getBoundingClientRect: () => ({ top: 600 }), hasAttribute: key => attributes.has(key), setAttribute: (key, value) => attributes.set(key, value), focus: options => calls.push(['focus', options]) };
  try {
    globalThis.window = { scrollY: 200, matchMedia: () => ({ matches: false }), scrollTo: options => calls.push(['scroll', options]) };
    globalThis.document = { getElementById: () => element, querySelector: () => ({ getBoundingClientRect: () => ({ bottom: 96 }) }) };
    scrollToElement('quote');
    assert.deepEqual(calls, [['focus', { preventScroll: true }], ['scroll', { top: 688, behavior: 'smooth' }]]);
    assert.equal(attributes.get('tabindex'), '-1');
    globalThis.window.matchMedia = () => ({ matches: true });
    scrollToElement('hero');
    assert.deepEqual(calls.at(-1), ['scroll', { top: 0, behavior: 'instant' }]);
    let prevented = false;
    scrollToSection({ ctrlKey: true, button: 0, preventDefault: () => { prevented = true; } }, 'quote');
    assert.equal(prevented, false);
  } finally { globalThis.window = oldWindow; globalThis.document = oldDocument; }
});
