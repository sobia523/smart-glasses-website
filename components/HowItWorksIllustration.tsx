'use client';

export default function HowItWorksIllustration({ step }: { step: 1 | 2 | 3 }) {
  const illustrations = {
    1: (
      // Microphone capturing speech
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="micGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id="soundWave" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sound waves */}
        <circle cx="100" cy="100" r="60" fill="url(#soundWave)">
          <animate attributeName="r" values="60;80;60" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="40" fill="url(#soundWave)">
          <animate attributeName="r" values="40;60;40" dur="2s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>

        {/* Microphone body */}
        <rect x="85" y="80" width="30" height="50" rx="15" fill="url(#micGradient)" />
        <rect x="85" y="75" width="30" height="10" rx="5" fill="url(#micGradient)" opacity="0.6" />

        {/* Microphone stand */}
        <rect x="97" y="130" width="6" height="30" fill="url(#micGradient)" />
        <ellipse cx="100" cy="160" rx="20" ry="5" fill="url(#micGradient)" />

        {/* Sound indicator */}
        <g opacity="0.8">
          <rect x="120" y="90" width="4" height="20" rx="2" fill="#60A5FA">
            <animate attributeName="height" values="20;35;20" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="y" values="90;82.5;90" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="128" y="85" width="4" height="30" rx="2" fill="#60A5FA">
            <animate attributeName="height" values="30;45;30" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="y" values="85;77.5;85" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
          </rect>
          <rect x="136" y="92" width="4" height="16" rx="2" fill="#60A5FA">
            <animate attributeName="height" values="16;28;16" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="y" values="92;86;92" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
          </rect>
        </g>
      </svg>
    ),
    2: (
      // AI processing
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        {/* Brain/AI chip outline */}
        <circle cx="100" cy="100" r="50" fill="none" stroke="url(#aiGradient)" strokeWidth="3" />

        {/* Neural network nodes */}
        <circle cx="100" cy="70" r="6" fill="#8B5CF6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="100" r="6" fill="#8B5CF6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="120" cy="100" r="6" fill="#8B5CF6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle cx="90" cy="130" r="6" fill="#8B5CF6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.9s" />
        </circle>
        <circle cx="110" cy="130" r="6" fill="#8B5CF6">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="1.2s" />
        </circle>

        {/* Connections */}
        <line x1="100" y1="70" x2="80" y2="100" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="70" x2="120" y2="100" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />
        <line x1="80" y1="100" x2="90" y2="130" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />
        <line x1="80" y1="100" x2="110" y2="130" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />
        <line x1="120" y1="100" x2="90" y2="130" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />
        <line x1="120" y1="100" x2="110" y2="130" stroke="#A78BFA" strokeWidth="2" opacity="0.5" />

        {/* Processing particles */}
        <circle cx="60" cy="80" r="2" fill="#EC4899">
          <animateMotion path="M 0 0 Q 20 -10 40 0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="120" r="2" fill="#EC4899">
          <animateMotion path="M 0 0 Q -20 10 -40 0" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Text output */}
        <rect x="70" y="155" width="60" height="6" rx="3" fill="#A78BFA" opacity="0.7">
          <animate attributeName="width" values="0;60;60" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="70" y="165" width="50" height="6" rx="3" fill="#A78BFA" opacity="0.5">
          <animate attributeName="width" values="0;50;50" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </rect>
      </svg>
    ),
    3: (
      // AR display
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        {/* Glasses frame */}
        <rect x="30" y="80" width="60" height="50" rx="8" fill="url(#lensGradient)" stroke="url(#frameGradient)" strokeWidth="3" />
        <rect x="110" y="80" width="60" height="50" rx="8" fill="url(#lensGradient)" stroke="url(#frameGradient)" strokeWidth="3" />
        <path d="M 90 100 Q 100 95 110 100" stroke="url(#frameGradient)" strokeWidth="3" fill="none" />

        {/* Subtitle text appearing */}
        <g opacity="0.9">
          <rect x="35" y="100" width="50" height="4" rx="2" fill="#60A5FA">
            <animate attributeName="width" values="0;50;50" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="35" y="108" width="45" height="4" rx="2" fill="#60A5FA" opacity="0.7">
            <animate attributeName="width" values="0;45;45" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </rect>
          <rect x="35" y="116" width="40" height="4" rx="2" fill="#60A5FA" opacity="0.5">
            <animate attributeName="width" values="0;40;40" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </rect>
        </g>

        {/* Emoji in right lens */}
        <circle cx="140" cy="95" r="12" fill="#FCD34D">
          <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <text x="140" y="100" fontSize="16" textAnchor="middle" fill="#000">😊</text>

        {/* Glow effect */}
        <circle cx="100" cy="105" r="80" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  };

  return <div className="w-full h-full">{illustrations[step]}</div>;
}
