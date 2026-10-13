const REVEAL_TARGETS = [
  '#hero h1', '#hero h1 + p', 'main h2', 'main h2 + p',
  'main > section:not(#hero):not(#about):not(#contact) > div > .grid > div',
  '#about .space-y-4', '#about img',
  '#contact > div > .mt-12.grid > div',
  '#partners h3', '#partners > .grid > div',
].join(',');

// Progressive enhancement: content stays visible without JavaScript or animation support.
export function observeScrollReveals(root: ParentNode) {
  if (typeof IntersectionObserver === 'undefined') return () => {};
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set<Animation>();
  const seen = new WeakSet<Element>();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || seen.has(entry.target)) continue;
      seen.add(entry.target);
      observer.unobserve(entry.target);
      const element = entry.target as HTMLElement;
      if (preference.matches || entry.boundingClientRect.bottom <= 0 || typeof element.animate !== 'function') continue;
      const siblings = Array.from(element.parentElement?.children || []);
      const delay = element.parentElement?.classList.contains('grid') ? Math.min(siblings.indexOf(element), 3) * 70 : 0;
      const animation = element.animate([
        { opacity: 0.4, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: element.matches('h1, h2, h3') ? 750 : 600, delay, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' });
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  const onPreferenceChange = () => {
    if (preference.matches) for (const animation of animations) animation.cancel();
  };
  preference.addEventListener('change', onPreferenceChange);
  for (const element of root.querySelectorAll(REVEAL_TARGETS)) observer.observe(element);
  return () => {
    observer.disconnect();
    preference.removeEventListener('change', onPreferenceChange);
    for (const animation of animations) animation.cancel();
    animations.clear();
  };
}
