import React from 'react';

interface SebbyLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const SebbyLogo: React.FC<SebbyLogoProps> = ({
  className = 'h-10 w-10',
  size,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm select-none"
        style={size ? { width: size, height: size } : undefined}
        aria-label="Sebby Logistics Flower Logo"
      >
        {/* Outer concentric petals - Layer 1 (24 Petals) */}
        {/* Petal 0: Red */}
        <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
        <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        {/* Petal 1: White */}
        <g transform="rotate(15 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 2: Red */}
        <g transform="rotate(30 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 3: White */}
        <g transform="rotate(45 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 4: Red */}
        <g transform="rotate(60 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 5: White */}
        <g transform="rotate(75 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 6: Red */}
        <g transform="rotate(90 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 7: White */}
        <g transform="rotate(105 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 8: Red */}
        <g transform="rotate(120 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 9: White */}
        <g transform="rotate(135 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 10: Red */}
        <g transform="rotate(150 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 11: White */}
        <g transform="rotate(165 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 12: Red */}
        <g transform="rotate(180 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 13: White */}
        <g transform="rotate(195 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 14: Red */}
        <g transform="rotate(210 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 15: White */}
        <g transform="rotate(225 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 16: Red */}
        <g transform="rotate(240 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 17: White */}
        <g transform="rotate(255 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 18: Red */}
        <g transform="rotate(270 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 19: White */}
        <g transform="rotate(285 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 20: Red */}
        <g transform="rotate(300 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 21: White */}
        <g transform="rotate(315 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 22: Red */}
        <g transform="rotate(330 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#C8102E" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Petal 23: White */}
        <g transform="rotate(345 200 200)">
          <path d="M 200 135 C 172 135 152 70 178 30 C 200 0 200 0 222 30 C 248 70 228 135 200 135 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M 200 40 L 200 100" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Middle concentric layer - 24 smaller offset petals for depth */}
        {[...Array(24)].map((_, i) => {
          const isRed = i % 2 === 1;
          return (
            <g key={`mid-${i}`} transform={`rotate(${i * 15 + 7.5} 200 200)`}>
              <path
                d="M 200 145 C 178 145 165 95 182 62 C 200 40 200 40 218 62 C 235 95 222 145 200 145 Z"
                fill={isRed ? '#C8102E' : '#FFFFFF'}
                stroke="#000000"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path d="M 200 68 L 200 120" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </g>
          );
        })}

        {/* Inner concentric layer - 20 petals tucked around the center */}
        {[...Array(20)].map((_, i) => {
          const isRed = i % 2 === 0;
          return (
            <g key={`in-${i}`} transform={`rotate(${i * 18 + 4.5} 200 200)`}>
              <path
                d="M 200 150 C 182 150 174 115 186 88 C 200 72 200 72 214 88 C 226 115 218 150 200 150 Z"
                fill={isRed ? '#C8102E' : '#FFFFFF'}
                stroke="#000000"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </g>
          );
        })}

        {/* Center Green Disc */}
        <circle cx="200" cy="200" r="64" fill="#009E49" stroke="#000000" strokeWidth="5.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#000000" strokeWidth="1.5" opacity="0.25" />

        {/* Center Text "SEBBY" */}
        <text
          x="200"
          y="215"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="900"
          fontSize="44"
          fill="#000000"
          letterSpacing="2"
        >
          SEBBY
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-lg font-serif-luxury font-bold tracking-tight text-[#111814] leading-tight">
            SEBBY LOGISTICS LTD
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#C8102E] font-semibold">
            Fresh Flowers & Freight · Kenya
          </span>
        </div>
      )}
    </div>
  );
};
