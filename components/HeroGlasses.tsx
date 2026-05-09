'use client';

export default function HeroGlasses({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background glow effects */}
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      {/* Glow circles */}
      <circle cx="250" cy="300" r="150" fill="url(#glow1)">
        <animate attributeName="r" values="150;180;150" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="550" cy="300" r="150" fill="url(#glow2)">
        <animate attributeName="r" values="150;180;150" dur="4s" repeatCount="indefinite" begin="2s" />
      </circle>

      {/* Main glasses frame */}
      <g transform="translate(400, 300)">
        {/* Left lens */}
        <rect
          x="-280"
          y="-80"
          width="180"
          height="160"
          rx="20"
          fill="url(#glassGradient)"
          stroke="url(#frameGradient)"
          strokeWidth="6"
        />

        {/* Right lens */}
        <rect
          x="100"
          y="-80"
          width="180"
          height="160"
          rx="20"
          fill="url(#glassGradient)"
          stroke="url(#frameGradient)"
          strokeWidth="6"
        />

        {/* Bridge */}
        <path
          d="M -100 0 Q 0 -20 100 0"
          stroke="url(#frameGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left temple */}
        <path
          d="M -280 -10 L -350 -10 Q -380 -10 -380 20"
          stroke="url(#frameGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right temple */}
        <path
          d="M 280 -10 L 350 -10 Q 380 -10 380 20"
          stroke="url(#frameGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* AR Display - Left Lens */}
        <g opacity="0.9">
          {/* Subtitle text lines */}
          <rect x="-260" y="20" width="140" height="8" rx="4" fill="#60A5FA" opacity="0.8">
            <animate attributeName="width" values="0;140;140" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="-260" y="35" width="120" height="8" rx="4" fill="#60A5FA" opacity="0.6">
            <animate attributeName="width" values="0;120;120" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </rect>
          <rect x="-260" y="50" width="100" height="8" rx="4" fill="#60A5FA" opacity="0.4">
            <animate attributeName="width" values="0;100;100" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </rect>

          {/* Emoji indicator */}
          <circle cx="-200" cy="-40" r="15" fill="#FCD34D">
            <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
          <text x="-200" y="-35" fontSize="20" textAnchor="middle" fill="#000">😊</text>
        </g>

        {/* AR Display - Right Lens */}
        <g opacity="0.9">
          {/* Audio wave visualization */}
          <rect x="120" y="-20" width="8" height="40" rx="4" fill="#A78BFA">
            <animate attributeName="height" values="20;60;20" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="-10;-30;-10" dur="1s" repeatCount="indefinite" />
          </rect>
          <rect x="135" y="-30" width="8" height="60" rx="4" fill="#A78BFA">
            <animate attributeName="height" values="40;80;40" dur="1s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="-20;-40;-20" dur="1s" repeatCount="indefinite" begin="0.2s" />
          </rect>
          <rect x="150" y="-15" width="8" height="30" rx="4" fill="#A78BFA">
            <animate attributeName="height" values="30;50;30" dur="1s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="y" values="-15;-25;-15" dur="1s" repeatCount="indefinite" begin="0.4s" />
          </rect>
          <rect x="165" y="-25" width="8" height="50" rx="4" fill="#A78BFA">
            <animate attributeName="height" values="35;70;35" dur="1s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="y" values="-17.5;-35;-17.5" dur="1s" repeatCount="indefinite" begin="0.6s" />
          </rect>

          {/* Language indicator */}
          <rect x="120" y="30" width="140" height="25" rx="12" fill="#8B5CF6" opacity="0.3" />
          <text x="190" y="48" fontSize="14" textAnchor="middle" fill="#A78BFA" fontWeight="600">EN → UR</text>
        </g>

        {/* Scanning effect */}
        <line x1="-280" y1="-80" x2="280" y2="-80" stroke="#60A5FA" strokeWidth="2" opacity="0.5">
          <animate attributeName="y1" values="-80;80;-80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y2" values="-80;80;-80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Floating particles */}
      <circle cx="150" cy="150" r="3" fill="#6366F1" opacity="0.6">
        <animate attributeName="cy" values="150;100;150" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="650" cy="450" r="3" fill="#8B5CF6" opacity="0.6">
        <animate attributeName="cy" values="450;400;450" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="500" r="2" fill="#EC4899" opacity="0.6">
        <animate attributeName="cy" values="500;450;500" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="600" cy="100" r="2" fill="#60A5FA" opacity="0.6">
        <animate attributeName="cy" values="100;50;100" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
