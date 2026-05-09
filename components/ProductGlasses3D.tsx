'use client';

export default function ProductGlasses3D({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Premium metallic frame gradient */}
        <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="30%" stopColor="#6366F1" />
          <stop offset="60%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Lens glass effect */}
        <radialGradient id="lensGlass" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C7D2FE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.15" />
        </radialGradient>

        {/* Realistic highlight */}
        <radialGradient id="glassHighlight" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* AR display glow */}
        <radialGradient id="arGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        {/* Shadow filters */}
        <filter id="deepShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="8" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="innerShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        </filter>

        {/* Reflection pattern */}
        <pattern id="reflection" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#glassHighlight)" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="300" cy="340" rx="200" ry="25" fill="#000000" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.2;0.15" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Main glasses group */}
      <g transform="translate(300, 200)" filter="url(#deepShadow)">

        {/* LEFT LENS */}
        <g>
          {/* Lens glass with depth */}
          <ellipse
            cx="-100"
            cy="0"
            rx="65"
            ry="55"
            fill="url(#lensGlass)"
            stroke="url(#frameGradient)"
            strokeWidth="5"
          />

          {/* Inner frame detail */}
          <ellipse
            cx="-100"
            cy="0"
            rx="60"
            ry="50"
            fill="none"
            stroke="url(#frameGradient)"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Glass highlight */}
          <ellipse cx="-115" cy="-15" rx="30" ry="25" fill="url(#glassHighlight)" />
          <ellipse cx="-85" cy="10" rx="15" ry="12" fill="#FFFFFF" opacity="0.3" />

          {/* AR Display overlay */}
          <g opacity="0.8">
            <circle cx="-100" cy="0" r="35" fill="url(#arGlow)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Subtitle lines on lens */}
            <rect x="-120" y="-8" width="0" height="2" rx="1" fill="#60A5FA">
              <animate attributeName="width" values="0;40;40;0" dur="4s" repeatCount="indefinite" />
            </rect>
            <rect x="-120" y="-2" width="0" height="2" rx="1" fill="#60A5FA">
              <animate attributeName="width" values="0;35;35;0" dur="4s" begin="0.3s" repeatCount="indefinite" />
            </rect>
            <rect x="-120" y="4" width="0" height="2" rx="1" fill="#60A5FA">
              <animate attributeName="width" values="0;30;30;0" dur="4s" begin="0.6s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Tech indicator */}
          <circle cx="-130" cy="-25" r="3" fill="#3B82F6">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="-130" cy="-25" r="6" fill="none" stroke="#3B82F6" strokeWidth="1">
            <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* RIGHT LENS */}
        <g>
          {/* Lens glass with depth */}
          <ellipse
            cx="100"
            cy="0"
            rx="65"
            ry="55"
            fill="url(#lensGlass)"
            stroke="url(#frameGradient)"
            strokeWidth="5"
          />

          {/* Inner frame detail */}
          <ellipse
            cx="100"
            cy="0"
            rx="60"
            ry="50"
            fill="none"
            stroke="url(#frameGradient)"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Glass highlight */}
          <ellipse cx="85" cy="-15" rx="30" ry="25" fill="url(#glassHighlight)" />
          <ellipse cx="115" cy="10" rx="15" ry="12" fill="#FFFFFF" opacity="0.3" />

          {/* AR Display overlay */}
          <g opacity="0.8">
            <circle cx="100" cy="0" r="35" fill="url(#arGlow)">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>

            {/* Emoji display */}
            <text x="100" y="8" fontSize="24" textAnchor="middle" opacity="0">
              😊
              <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
            </text>
          </g>

          {/* Tech indicator */}
          <circle cx="130" cy="-25" r="3" fill="#A78BFA">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="130" cy="-25" r="6" fill="none" stroke="#A78BFA" strokeWidth="1">
            <animate attributeName="r" values="6;10;6" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* BRIDGE with microphone */}
        <g>
          {/* Main bridge */}
          <path
            d="M -35 0 Q -20 -8 0 -10 Q 20 -8 35 0"
            stroke="url(#frameGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Bridge detail line */}
          <path
            d="M -30 2 Q 0 -6 30 2"
            stroke="url(#frameGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Microphone housing */}
          <ellipse cx="0" cy="-10" rx="8" ry="6" fill="url(#frameGradient)" />
          <circle cx="0" cy="-10" r="4" fill="#1E293B" />
          <circle cx="0" cy="-10" r="2" fill="#EC4899">
            <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* Mic indicator lines */}
          <path d="M -2 -15 L -2 -18" stroke="#EC4899" strokeWidth="1" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
          </path>
          <path d="M 0 -16 L 0 -20" stroke="#EC4899" strokeWidth="1" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
          </path>
          <path d="M 2 -15 L 2 -18" stroke="#EC4899" strokeWidth="1" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* NOSE PADS */}
        <g>
          {/* Left pad */}
          <ellipse cx="-30" cy="25" rx="5" ry="10" fill="url(#frameGradient)" opacity="0.7" />
          <path d="M -30 15 L -35 5" stroke="url(#frameGradient)" strokeWidth="2" strokeLinecap="round" />

          {/* Right pad */}
          <ellipse cx="30" cy="25" rx="5" ry="10" fill="url(#frameGradient)" opacity="0.7" />
          <path d="M 30 15 L 35 5" stroke="url(#frameGradient)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* LEFT TEMPLE ARM */}
        <g>
          {/* Main arm */}
          <path
            d="M -165 -5 L -200 -5 Q -220 -5 -230 5 L -240 20"
            stroke="url(#frameGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Hinge detail */}
          <rect x="-170" y="-10" width="8" height="10" rx="2" fill="url(#frameGradient)" />
          <circle cx="-166" cy="-5" r="2" fill="#1E293B" />

          {/* Temple detail lines */}
          <path d="M -180 -5 L -220 -5" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
          <path d="M -180 -2 L -220 -2" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* RIGHT TEMPLE ARM */}
        <g>
          {/* Main arm */}
          <path
            d="M 165 -5 L 200 -5 Q 220 -5 230 5 L 240 20"
            stroke="url(#frameGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Hinge detail */}
          <rect x="162" y="-10" width="8" height="10" rx="2" fill="url(#frameGradient)" />
          <circle cx="166" cy="-5" r="2" fill="#1E293B" />

          {/* Temple detail lines */}
          <path d="M 180 -5 L 220 -5" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
          <path d="M 180 -2 L 220 -2" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* AI CHIP INDICATOR (on right temple) */}
        <g transform="translate(190, -5)">
          <rect x="-6" y="-4" width="12" height="8" rx="1" fill="#1E293B" stroke="#6366F1" strokeWidth="1" />
          <text x="0" y="2" fontSize="6" fill="#60A5FA" textAnchor="middle" fontFamily="monospace">AI</text>
          <circle cx="-4" cy="0" r="0.5" fill="#3B82F6">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="4" cy="0" r="0.5" fill="#3B82F6">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>

      </g>

      {/* FLOATING TECH PARTICLES */}
      <g opacity="0.5">
        <circle cx="100" cy="120" r="3" fill="#6366F1">
          <animate attributeName="cy" values="120;90;120" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="280" r="2.5" fill="#8B5CF6">
          <animate attributeName="cy" values="280;250;280" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="300" r="2" fill="#A855F7">
          <animate attributeName="cy" values="300;270;300" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="520" cy="150" r="2" fill="#EC4899">
          <animate attributeName="cy" values="150;120;150" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* SCANNING LINE EFFECT */}
      <line x1="150" y1="100" x2="450" y2="100" stroke="#60A5FA" strokeWidth="1" opacity="0.4">
        <animate attributeName="y1" values="100;300;100" dur="6s" repeatCount="indefinite" />
        <animate attributeName="y2" values="100;300;100" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.6;0" dur="6s" repeatCount="indefinite" />
      </line>

    </svg>
  );
}
