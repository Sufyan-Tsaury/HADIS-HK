import React from 'react';

export const EditorialBanner: React.FC = () => {
  return (
    <section
      aria-label="Pengantar Perpustakaan Hadis HK"
      className="rounded-2xl bg-[#F9F7F5] border border-[#E5E7EB] p-4 sm:p-5 relative overflow-hidden text-[#111827] min-h-[105px] flex items-center"
    >
      <div className="z-10 max-w-[70%] space-y-1 pr-2">
        <h2 className="text-sm sm:text-base font-bold text-[#111827] leading-snug">
          Hadis untuk Keluarga Sakinah
        </h2>
        <p className="text-xs text-[#6B7280] leading-relaxed">
          Membangun rumah tangga berdasarkan sunnah Nabi ﷺ
        </p>
      </div>

      {/* Heritage Mosque Minaret & Silhouette in Rich Heritage Brown Matching Screen 1 */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none z-10" aria-hidden="true">
        <svg
          viewBox="0 0 140 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-24 opacity-85"
        >
          {/* Elegant Tall Minaret */}
          <rect x="112" y="22" width="10" height="83" rx="1.5" fill="#795A3F" />
          <path d="M117 8L124 22H110L117 8Z" fill="#8B6F55" />
          <circle cx="117" cy="6" r="2" fill="#795A3F" />
          <rect x="109" y="36" width="16" height="3" rx="1" fill="#5C432E" />
          <rect x="114" y="28" width="6" height="5" rx="1" fill="#F9F7F5" />

          {/* Central Dome */}
          <path
            d="M48 68C48 48 64 36 75 32C86 36 102 48 102 68H48Z"
            fill="#8B6F55"
          />
          <path d="M75 22V32" stroke="#5C432E" strokeWidth="2" strokeLinecap="round" />
          <circle cx="75" cy="20" r="2" fill="#795A3F" />

          {/* Base Building Arcade */}
          <rect x="42" y="68" width="70" height="37" fill="#795A3F" />

          {/* Left Dome */}
          <path d="M20 78C20 66 28 60 35 57C42 60 50 66 50 78H20Z" fill="#8B6F55" />
          <rect x="16" y="78" width="34" height="27" fill="#795A3F" />

          {/* Arched Windows */}
          <path d="M60 105V84C60 80.5 63 78 66 78C69 78 72 80.5 72 84V105H60Z" fill="#F9F7F5" />
          <path d="M80 105V84C80 80.5 83 78 86 78C89 78 92 80.5 92 84V105H80Z" fill="#F9F7F5" />
          <path d="M28 105V90C28 87.5 30 86 32.5 86C35 86 37 87.5 37 90V105H28Z" fill="#F9F7F5" />
        </svg>
      </div>
    </section>
  );
};
