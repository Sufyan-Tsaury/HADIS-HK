import React from 'react';

export const EditorialBanner: React.FC = () => {
  return (
    <section
      aria-label="Pengantar Perpustakaan Hadis HK"
      className="rounded-2xl bg-[#F6F1EA] border border-[#E5DCD0] p-4 sm:p-5 flex items-center justify-between gap-3 overflow-hidden relative"
    >
      <div className="z-10 max-w-[66%] space-y-1">
        <h2 className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
          Hadis untuk Keluarga Sakinah
        </h2>
        <p className="text-xs text-[#6B7280] leading-relaxed">
          Membangun rumah tangga bermartabat berdasarkan sunnah Nabi ﷺ
        </p>
      </div>

      {/* Inline Architectural Mosque Silhouette SVG (Crisp, Zero External Network Dependency) */}
      <div className="shrink-0 self-end -mb-4 -mr-2 pointer-events-none select-none" aria-hidden="true">
        <svg
          width="116"
          height="88"
          viewBox="0 0 140 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 sm:w-28 h-auto"
        >
          {/* Soft warm halo */}
          <circle cx="96" cy="48" r="38" fill="#E8DCCB" fillOpacity="0.6" />
          {/* Tall Minaret */}
          <rect x="112" y="24" width="12" height="81" rx="2" fill="#795A3F" />
          <path d="M118 10L125 24H111L118 10Z" fill="#795A3F" />
          <circle cx="118" cy="8" r="2" fill="#C6A17B" />
          <rect x="110" y="38" width="16" height="3" rx="1.5" fill="#C6A17B" />
          <rect x="115" y="30" width="6" height="7" rx="3" fill="#F6F1EA" />
          {/* Main Central Dome */}
          <path
            d="M46 68C46 47 64 34 76 30C88 34 106 47 106 68H46Z"
            fill="#9E744A"
          />
          <path d="M76 21V30" stroke="#795A3F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="76" cy="19" r="2.5" fill="#795A3F" />
          {/* Base Arcade Building */}
          <rect x="38" y="68" width="76" height="37" fill="#795A3F" />
          {/* Secondary Small Left Dome */}
          <path d="M18 78C18 65 28 58 35 55C42 58 52 65 52 78H18Z" fill="#C6A17B" />
          <rect x="14" y="78" width="40" height="27" fill="#8C6849" />
          {/* Arched Windows */}
          <path d="M60 105V83C60 79.5 63 77 66 77C69 77 72 79.5 72 83V105H60Z" fill="#F6F1EA" />
          <path d="M80 105V83C80 79.5 83 77 86 77C89 77 92 79.5 92 83V105H80Z" fill="#F6F1EA" />
          <path d="M29 105V89C29 86.5 31 85 33.5 85C36 85 38 86.5 38 89V105H29Z" fill="#F6F1EA" />
        </svg>
      </div>
    </section>
  );
};
