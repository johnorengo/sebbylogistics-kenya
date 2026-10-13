import React from 'react';

interface KenyaFlagWordmarkProps {
  className?: string;
  opacity?: number;
}

export const KenyaFlagWordmark: React.FC<KenyaFlagWordmarkProps> = ({
  className = "w-full max-w-4xl h-auto",
  opacity = 1
}) => {
  return (
    <svg
      viewBox="0 0 1000 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        {/* Flag Stripes Pattern */}
        <clipPath id="kenya-letters-clip">
          {/* Letter K */}
          <path d="M 40 40 H 125 V 170 L 210 40 H 295 L 180 185 L 305 320 H 215 L 125 205 V 320 H 40 Z" />
          {/* Letter E */}
          <path d="M 330 40 H 510 V 105 H 410 V 145 H 495 V 205 H 410 V 255 H 515 V 320 H 330 Z" />
          {/* Letter N */}
          <path d="M 545 40 H 625 L 705 205 V 40 H 775 V 320 H 695 L 615 155 V 320 H 545 Z" />
          {/* Letter Y */}
          <path d="M 800 40 H 885 L 940 160 L 995 40 H 1080 L 980 210 V 320 H 900 V 210 Z" transform="translate(-10, 0)" />
          {/* Letter A */}
          <path d="M 1090 40 H 1175 L 1255 320 H 1175 L 1155 245 H 1075 L 1055 320 H 975 Z M 1115 125 L 1088 200 H 1142 Z" transform="translate(-160, 0)" />
        </clipPath>

        {/* Maasai Shield Clip */}
        <clipPath id="shield-clip">
          <path d="M 470 70 C 420 120 410 210 470 285 C 530 210 520 120 470 70 Z" />
        </clipPath>
      </defs>

      {/* Flag Bands Clipped to the KENYA Wordmark */}
      <g clipPath="url(#kenya-letters-clip)">
        {/* Black Top Band */}
        <rect x="0" y="30" width="1000" height="90" fill="#000000" />
        {/* White Upper Border */}
        <rect x="0" y="118" width="1000" height="16" fill="#FFFFFF" />
        {/* Kenyan Red Middle Band */}
        <rect x="0" y="132" width="1000" height="96" fill="#C8102E" />
        {/* White Lower Border */}
        <rect x="0" y="226" width="1000" height="16" fill="#FFFFFF" />
        {/* Kenyan Green Bottom Band */}
        <rect x="0" y="240" width="1000" height="90" fill="#007A3D" />
      </g>

      {/* Central Traditional Maasai Shield & Crossed Spears on Letter N */}
      <g transform="translate(185, 5)">
        {/* Left Spear (Back) */}
        <g stroke="#FFFFFF" strokeWidth="6" fill="#FFFFFF">
          <line x1="390" y1="45" x2="550" y2="310" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
          {/* Spearhead Top-Left */}
          <polygon points="385,38 375,65 397,60" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
          {/* Spear butt Bottom-Right */}
          <polygon points="555,315 540,300 562,305" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
        </g>

        {/* Right Spear (Back) */}
        <g stroke="#FFFFFF" strokeWidth="6" fill="#FFFFFF">
          <line x1="550" y1="45" x2="390" y2="310" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
          {/* Spearhead Top-Right */}
          <polygon points="555,38 565,65 543,60" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
          {/* Spear butt Bottom-Left */}
          <polygon points="385,315 400,300 378,305" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
        </g>

        {/* Maasai Shield Base */}
        <path
          d="M 470 65 C 415 125 405 220 470 290 C 535 220 525 125 470 65 Z"
          fill="#C8102E"
          stroke="#FFFFFF"
          strokeWidth="6"
        />

        {/* Traditional Shield Face Markings */}
        {/* Left White Crescent Flank */}
        <path
          d="M 470 70 C 430 130 420 215 470 285 C 440 215 448 135 470 70 Z"
          fill="#FFFFFF"
        />
        {/* Right White Crescent Flank */}
        <path
          d="M 470 70 C 510 130 520 215 470 285 C 500 215 492 135 470 70 Z"
          fill="#FFFFFF"
        />

        {/* Black inner arcs */}
        <path
          d="M 470 85 C 445 135 440 205 470 270 C 452 205 456 140 470 85 Z"
          fill="#000000"
        />
        <path
          d="M 470 85 C 495 135 500 205 470 270 C 488 205 484 140 470 85 Z"
          fill="#000000"
        />

        {/* Central Spine (Spur) & Central Circle */}
        <ellipse cx="470" cy="177" rx="14" ry="32" fill="#FFFFFF" stroke="#000" strokeWidth="2.5" />
        <ellipse cx="470" cy="177" rx="7" ry="16" fill="#C8102E" />
        
        {/* Spine line through center */}
        <line x1="470" y1="70" x2="470" y2="285" stroke="#FFFFFF" strokeWidth="4" />
      </g>
    </svg>
  );
};
