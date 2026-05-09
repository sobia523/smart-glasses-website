'use client';

export default function ImpactIllustration({ type }: { type: 'global' | 'students' | 'professionals' | 'seniors' | 'children' }) {
  const illustrations = {
    global: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Globe */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="url(#globeGradient)" strokeWidth="3" />

        {/* Latitude lines */}
        <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.5" />
        <ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.5" />

        {/* Longitude lines */}
        <ellipse cx="100" cy="100" rx="20" ry="60" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.5" />
        <ellipse cx="100" cy="100" rx="40" ry="60" fill="none" stroke="url(#globeGradient)" strokeWidth="1" opacity="0.5" />

        {/* Connection points */}
        <circle cx="80" cy="70" r="4" fill="#60A5FA">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="90" r="4" fill="#60A5FA">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="90" cy="130" r="4" fill="#60A5FA">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="130" cy="110" r="4" fill="#60A5FA">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </circle>

        {/* Connecting lines */}
        <path d="M 80 70 Q 100 80 120 90" stroke="#60A5FA" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 120 90 Q 110 100 90 130" stroke="#60A5FA" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </path>
      </svg>
    ),
    students: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="studentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Graduation cap */}
        <polygon points="100,60 60,80 100,100 140,80" fill="url(#studentGradient)" />
        <rect x="95" y="100" width="10" height="30" fill="url(#studentGradient)" />
        <circle cx="100" cy="130" r="3" fill="#EC4899" />

        {/* Book */}
        <rect x="70" y="120" width="60" height="50" rx="3" fill="none" stroke="url(#studentGradient)" strokeWidth="2" />
        <line x1="100" y1="120" x2="100" y2="170" stroke="url(#studentGradient)" strokeWidth="2" />

        {/* Subtitle lines on book */}
        <line x1="75" y1="135" x2="95" y2="135" stroke="#60A5FA" strokeWidth="2" opacity="0.7">
          <animate attributeName="x2" values="75;95;95" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="105" y1="135" x2="125" y2="135" stroke="#60A5FA" strokeWidth="2" opacity="0.7">
          <animate attributeName="x2" values="105;125;125" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </line>
        <line x1="75" y1="145" x2="95" y2="145" stroke="#60A5FA" strokeWidth="2" opacity="0.5">
          <animate attributeName="x2" values="75;95;95" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </line>
      </svg>
    ),
    professionals: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="profGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Briefcase */}
        <rect x="60" y="90" width="80" height="60" rx="5" fill="none" stroke="url(#profGradient)" strokeWidth="3" />
        <rect x="90" y="80" width="20" height="15" fill="url(#profGradient)" />
        <line x1="60" y1="110" x2="140" y2="110" stroke="url(#profGradient)" strokeWidth="2" />

        {/* Meeting chart */}
        <rect x="70" y="100" width="60" height="40" rx="3" fill="#6366F1" opacity="0.1" />

        {/* Bar chart */}
        <rect x="75" y="125" width="8" height="10" fill="#60A5FA" opacity="0.7">
          <animate attributeName="height" values="10;15;10" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y" values="125;120;125" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="88" y="120" width="8" height="15" fill="#60A5FA" opacity="0.7">
          <animate attributeName="height" values="15;20;15" dur="2s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="y" values="120;115;120" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </rect>
        <rect x="101" y="118" width="8" height="17" fill="#60A5FA" opacity="0.7">
          <animate attributeName="height" values="17;22;17" dur="2s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="y" values="118;113;118" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </rect>
        <rect x="114" y="122" width="8" height="13" fill="#60A5FA" opacity="0.7">
          <animate attributeName="height" values="13;18;13" dur="2s" repeatCount="indefinite" begin="0.9s" />
          <animate attributeName="y" values="122;117;122" dur="2s" repeatCount="indefinite" begin="0.9s" />
        </rect>
      </svg>
    ),
    seniors: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="seniorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Heart shape */}
        <path d="M 100 140 C 100 140 60 110 60 85 C 60 70 70 60 85 60 C 95 60 100 65 100 65 C 100 65 105 60 115 60 C 130 60 140 70 140 85 C 140 110 100 140 100 140 Z"
              fill="none" stroke="url(#seniorGradient)" strokeWidth="3" />

        {/* Pulse line */}
        <path d="M 70 100 L 80 100 L 85 90 L 90 110 L 95 100 L 130 100"
              stroke="#EC4899" strokeWidth="2" fill="none">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Connection symbols */}
        <circle cx="100" cy="85" r="3" fill="#60A5FA">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="85" r="8" fill="none" stroke="#60A5FA" strokeWidth="1">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    children: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="childGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* Toy blocks */}
        <rect x="60" y="100" width="30" height="30" rx="3" fill="url(#childGradient)" opacity="0.7" />
        <rect x="95" y="100" width="30" height="30" rx="3" fill="url(#childGradient)" opacity="0.8" />
        <rect x="110" y="70" width="30" height="30" rx="3" fill="url(#childGradient)" opacity="0.9" />

        {/* ABC letters */}
        <text x="75" y="120" fontSize="16" fill="#fff" fontWeight="bold">A</text>
        <text x="110" y="120" fontSize="16" fill="#fff" fontWeight="bold">B</text>
        <text x="125" y="90" fontSize="16" fill="#fff" fontWeight="bold">C</text>

        {/* Speech bubbles */}
        <circle cx="80" cy="60" r="15" fill="#60A5FA" opacity="0.3">
          <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="50" r="12" fill="#A78BFA" opacity="0.3">
          <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        {/* Subtitle lines */}
        <rect x="65" y="145" width="70" height="3" rx="1.5" fill="#60A5FA" opacity="0.7">
          <animate attributeName="width" values="0;70;70" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="65" y="152" width="60" height="3" rx="1.5" fill="#60A5FA" opacity="0.5">
          <animate attributeName="width" values="0;60;60" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </rect>
      </svg>
    ),
  };

  return <div className="w-full h-full">{illustrations[type]}</div>;
}
