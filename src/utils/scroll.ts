import type React from 'react';

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const navigation = document.querySelector('[data-header-navigation]');
  const offset = navigation ? navigation.getBoundingClientRect().bottom + 16 : 112;
  const top = id === 'hero' ? 0 : Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset);
  if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1');
  element.focus({ preventScroll: true });
  window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}

/**
 * Smooth-scroll to a page section WITHOUT exposing a hash in the URL.
 * Plain <a href="#id"> links make the browser set location.hash (visible as
 * /#about etc.). preventDefault() stops that; scrollIntoView does the glide.
 */
export function scrollToSection(e: React.MouseEvent, id: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  scrollToElement(id);
}
