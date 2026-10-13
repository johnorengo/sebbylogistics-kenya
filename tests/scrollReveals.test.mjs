import test from 'node:test';
import assert from 'node:assert/strict';
import { observeScrollReveals } from '../src/utils/scrollReveals.ts';

test('reveals content once, cancels motion on preference change and cleans up', async () => {
  const previousWindow = globalThis.window, previousObserver = globalThis.IntersectionObserver;
  let callback, preferenceListener;
  let motionCount = 0, cancelled = 0, disconnected = false, unobserved = 0;
  const preference = { matches: false, addEventListener: (_name, fn) => { preferenceListener = fn; }, removeEventListener() {} };
  const element = { parentElement: null, matches: () => true, animate: () => { motionCount++; return { finished: new Promise(() => {}), cancel: () => { cancelled++; } }; } };
  try {
    globalThis.window = { matchMedia: () => preference };
    globalThis.IntersectionObserver = class {
      constructor(fn) { callback = fn; }
      observe() {}
      unobserve() { unobserved++; }
      disconnect() { disconnected = true; }
    };
    const cleanup = observeScrollReveals({ querySelectorAll: () => [element] });
    const entry = { target: element, isIntersecting: true, boundingClientRect: { bottom: 200 } };
    callback([entry]); callback([entry]);
    assert.equal(motionCount, 1);
    assert.equal(unobserved, 1);
    preference.matches = true;
    preferenceListener();
    assert.equal(cancelled, 1);
    cleanup();
    assert.ok(disconnected);
    const reducedElement = { ...element };
    const reducedCleanup = observeScrollReveals({ querySelectorAll: () => [reducedElement] });
    callback([{ ...entry, target: reducedElement }]);
    assert.equal(motionCount, 1);
    reducedCleanup();
  } finally { globalThis.window = previousWindow; globalThis.IntersectionObserver = previousObserver; }
});
