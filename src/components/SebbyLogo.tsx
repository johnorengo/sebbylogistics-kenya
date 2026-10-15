import React from 'react';

interface SebbyLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const SebbyLogo: React.FC<SebbyLogoProps> = ({ className = 'h-20 w-auto', size }) => (
  <img
    src="/images/sebby-logo.png"
    alt="Sebby Logistics Company Ltd ? star and flower logo"
    width={1333}
    height={1181}
    className={`object-contain ${className}`}
    style={size ? { width: size, height: 'auto' } : undefined}
    decoding="async"
  />
);
