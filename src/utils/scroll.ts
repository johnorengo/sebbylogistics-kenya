import React from 'react';

/**
 * Smooth-scroll to a page section WITHOUT exposing a hash in the URL.
 * Plain <a href="#id"> links make the browser set location.hash (visible as
 * /#about etc.). preventDefault() stops that; scrollIntoView does the glide.
 */
export function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
