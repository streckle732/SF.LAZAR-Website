import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 120 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} select-none`}
      aria-label="Logo S.C. Sf. Lazăr S.R.L."
    >
      <defs>
        {/* Metallic Gold Gradient for text and borders */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E5AB" /> {/* Soft cream gold */}
          <stop offset="30%" stopColor="#D4AF37" /> {/* Classic gold */}
          <stop offset="50%" stopColor="#FFFDD0" /> {/* Highlight cream */}
          <stop offset="70%" stopColor="#AA7C11" /> {/* Dark bronze gold */}
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        {/* Central Dark Sphere Gradient */}
        <radialGradient id="darkCentralGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#252119" /> {/* Deep warm charcoal gray */}
          <stop offset="70%" stopColor="#0B0907" /> {/* Almost black */}
          <stop offset="100%" stopColor="#020202" /> {/* Pure black */}
        </radialGradient>

        {/* Soft Shadow Filter for the central sphere & cross */}
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.75" />
        </filter>

        {/* Text Paths - adjusted radius to place text precisely in the ring */}
        <path
          id="textPathTop"
          d="M 28 100 A 72 72 0 1 1 172 100"
          fill="none"
        />
        <path
          id="textPathBottom"
          d="M 172 100 A 72 72 0 1 1 28 100"
          fill="none"
        />
      </defs>

      {/* 1. Outer Thin Gold Border */}
      <circle cx="100" cy="100" r="96" stroke="url(#goldGradient)" strokeWidth="1.2" fill="none" />

      {/* 2. Beaded/Dotted Inner Ring (Orthodox/Classical detail) */}
      <circle cx="100" cy="100" r="91" stroke="url(#goldGradient)" strokeWidth="1.5" strokeDasharray="1, 3" fill="none" opacity="0.85" />

      {/* 3. Middle Thin Gold Border */}
      <circle cx="100" cy="100" r="86" stroke="url(#goldGradient)" strokeWidth="1" fill="none" opacity="0.6" />

      {/* 4. Text Ring Spacer */}
      <circle cx="100" cy="100" r="85" fill="none" />

      {/* 5. Curved Text - Top (Company Name) */}
      <text font-family="'Cinzel', 'Playfair Display', 'Times New Roman', serif" font-size="14.5" font-weight="600" letter-spacing="1.2">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle" fill="url(#goldGradient)">
          S.C. SF. LAZĂR S.R.L.
        </textPath>
      </text>

      {/* 6. Curved Text - Bottom (Services & Location) */}
      <text font-family="'Cinzel', 'Playfair Display', 'Times New Roman', serif" font-size="10.5" font-weight="600" letter-spacing="2">
        {/* Using dys attribute to push text outside/inside properly on path bottom */}
        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle" fill="url(#goldGradient)" dy="-4">
          SERVICII FUNERARE IAȘI
        </textPath>
      </text>

      {/* 7. Symmetrical Wheat Leaf Elements (Left & Right) */}
      {/* Left wheat branch */}
      <g transform="translate(14, 100) rotate(-90) scale(0.35)" fill="url(#goldGradient)" opacity="0.85">
        <path d="M 0 0 C 3 -10, 10 -15, 10 -25 C 10 -15, 3 -10, 0 0" />
        <path d="M 0 -10 C -5 -20, -12 -25, -12 -35 C -12 -25, -5 -20, 0 -10" />
        <path d="M 0 -20 C 5 -30, 12 -35, 12 -45 C 12 -35, 5 -30, 0 -20" />
        <path d="M 0 -30 C -5 -40, -12 -45, -12 -55 C -12 -45, -5 -40, 0 -30" />
        <path d="M 0 -40 C 5 -50, 12 -55, 12 -65 C 12 -55, 5 -50, 0 -40" />
        <path d="M 0 -50 C -3 -60, -8 -65, -8 -75 C -8 -65, -3 -60, 0 -50" />
        <line x1="0" y1="0" x2="0" y2="-80" stroke="url(#goldGradient)" strokeWidth="2" />
      </g>
      {/* Right wheat branch */}
      <g transform="translate(186, 100) rotate(90) scale(0.35)" fill="url(#goldGradient)" opacity="0.85">
        <path d="M 0 0 C 3 -10, 10 -15, 10 -25 C 10 -15, 3 -10, 0 0" />
        <path d="M 0 -10 C -5 -20, -12 -25, -12 -35 C -12 -25, -5 -20, 0 -10" />
        <path d="M 0 -20 C 5 -30, 12 -35, 12 -45 C 12 -35, 5 -30, 0 -20" />
        <path d="M 0 -30 C -5 -40, -12 -45, -12 -55 C -12 -45, -5 -40, 0 -30" />
        <path d="M 0 -40 C 5 -50, 12 -55, 12 -65 C 12 -55, 5 -50, 0 -40" />
        <path d="M 0 -50 C -3 -60, -8 -65, -8 -75 C -8 -65, -3 -60, 0 -50" />
        <line x1="0" y1="0" x2="0" y2="-80" stroke="url(#goldGradient)" strokeWidth="2" />
      </g>

      {/* 8. Central Dark Sphere with Golden Border */}
      <circle cx="100" cy="100" r="63" fill="url(#darkCentralGradient)" stroke="url(#goldGradient)" strokeWidth="1.8" filter="url(#logoShadow)" />

      {/* 9. Elegant Golden Cross at the Center (Orthodox Byzantium / stylized loop curves) */}
      <g transform="translate(100, 100)" filter="url(#logoShadow)">
        {/* Center core glow */}
        <circle cx="0" cy="0" r="4" fill="url(#goldGradient)" opacity="0.9" />

        {/* Elegant cross arms composed of curves/loops */}
        {/* Vertical Top Arm */}
        <path
          d="M 0 0 C -12 -20, -8 -38, 0 -42 C 8 -38, 12 -20, 0 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2.2"
        />
        <path
          d="M 0 -8 C -6 -20, -4 -32, 0 -35 C 4 -32, 6 -20, 0 -8"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Vertical Bottom Arm */}
        <path
          d="M 0 0 C -12 20, -8 38, 0 42 C 8 38, 12 20, 0 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2.2"
        />
        <path
          d="M 0 8 C -6 20, -4 32, 0 35 C 4 32, 6 20, 0 8"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Horizontal Left Arm */}
        <path
          d="M 0 0 C -20 -12, -38 -8, -42 0 C -38 8, -20 12, 0 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2.2"
        />
        <path
          d="M -8 0 C -20 -6, -32 -4, -35 0 C -32 4, -20 6, -8 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Horizontal Right Arm */}
        <path
          d="M 0 0 C 20 -12, 38 -8, 42 0 C 38 8, 20 12, 0 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2.2"
        />
        <path
          d="M 8 0 C 20 -6, 32 -4, 35 0 C 32 4, 20 6, 8 0"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Elegant central diagonal leaf-accents */}
        <path d="M -3 -3 L -10 -10 Q -12 -12, -15 -10 Q -17 -8, -15 -6 L -3 -3" fill="url(#goldGradient)" opacity="0.75" />
        <path d="M 3 -3 L 10 -10 Q 12 -12, 15 -10 Q 17 -8, 15 -6 L 3 -3" fill="url(#goldGradient)" opacity="0.75" />
        <path d="M -3 3 L -10 10 Q -12 12, -15 10 Q -17 8, -15 6 L -3 3" fill="url(#goldGradient)" opacity="0.75" />
        <path d="M 3 3 L 10 10 Q 12 12, 15 10 Q 17 8, 15 6 L 3 3" fill="url(#goldGradient)" opacity="0.75" />
      </g>
    </svg>
  );
}
