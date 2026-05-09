'use client';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glasses frame */}
      <path
        d="M15 45C15 38 20 33 27 33H38C42 33 45 36 45 40V50C45 56 40 61 34 61H27C20 61 15 56 15 50V45Z"
        fill="url(#gradient1)"
        stroke="url(#gradient2)"
        strokeWidth="2"
      />
      <path
        d="M55 45C55 38 60 33 67 33H78C82 33 85 36 85 40V50C85 56 80 61 74 61H67C60 61 55 56 55 50V45Z"
        fill="url(#gradient1)"
        stroke="url(#gradient2)"
        strokeWidth="2"
      />

      {/* Bridge */}
      <path
        d="M45 43C45 43 47 40 50 40C53 40 55 43 55 43"
        stroke="url(#gradient2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Temples */}
      <path
        d="M15 43L8 43C5 43 3 45 3 48"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M85 43L92 43C95 43 97 45 97 48"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* AR Display effect - left lens */}
      <circle cx="30" cy="47" r="3" fill="#60A5FA" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="47" r="6" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* AR Display effect - right lens */}
      <circle cx="70" cy="47" r="3" fill="#A78BFA" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="70" cy="47" r="6" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.4">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>

      {/* Subtitle lines in left lens */}
      <line x1="22" y1="52" x2="38" y2="52" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
      <line x1="22" y1="56" x2="35" y2="56" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
