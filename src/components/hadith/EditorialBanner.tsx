import React from 'react';

export const EditorialBanner: React.FC = () => {
  return (
    <section
      aria-label="Pengantar Perpustakaan Hadis HK"
      className="rounded-2xl bg-gradient-to-br from-[#301A05] via-[#3A2208] to-[#220B02] border border-[#6B5133] p-4.5 sm:p-5 flex items-center justify-between gap-3 overflow-hidden relative shadow-md text-[#FFF9F5]"
    >
      {/* Background Architectural Overlay Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 85% 20%, #B09768 0%, transparent 45%), radial-gradient(circle at 10% 90%, #C7B39C 0%, transparent 40%)`,
        }}
      />

      <div className="z-10 max-w-[68%] space-y-1.5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4C2605]/80 border border-[#B09768]/40 text-[#C7B39C] text-[10px] font-semibold tracking-wider uppercase">
          Kajian Fiqh al-Usrah
        </span>
        <h2 className="text-base sm:text-lg font-bold font-display text-[#FFF9F5] leading-snug tracking-wide">
          Hadis untuk Keluarga Sakinah
        </h2>
        <p className="text-xs text-[#E5DCCF] leading-relaxed">
          Membangun relasi rumah tangga bermartabat &amp; penuh kesalingan berdasarkan sunnah Nabi ﷺ
        </p>
      </div>

      {/* Heritage Mosque Minaret & Circular Ring Silhouette */}
      <div className="shrink-0 self-end -mb-4 -mr-2 pointer-events-none select-none z-10" aria-hidden="true">
        <svg
          width="128"
          height="96"
          viewBox="0 0 140 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 sm:w-28 h-auto"
        >
          {/* Subtle Golden Ring Halo */}
          <circle cx="94" cy="48" r="36" stroke="#B09768" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
          <circle cx="94" cy="48" r="28" fill="#4C2605" fillOpacity="0.5" />

          {/* Elegant Tall Minaret */}
          <rect x="110" y="22" width="12" height="83" rx="2" fill="#B09768" />
          <path d="M116 8L124 22H108L116 8Z" fill="#C7B39C" />
          <circle cx="116" cy="6" r="2" fill="#FFF9F5" />
          <rect x="107" y="36" width="18" height="3" rx="1.5" fill="#220B02" />
          <rect x="113" y="28" width="6" height="6" rx="2" fill="#FFF9F5" fillOpacity="0.75" />

          {/* Main Mihrab Central Dome */}
          <path
            d="M44 68C44 46 62 33 74 29C86 33 104 46 104 68H44Z"
            fill="#B09768"
          />
          <path d="M74 20V29" stroke="#C7B39C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="74" cy="18" r="2.5" fill="#FFF9F5" />

          {/* Base Arcade Building */}
          <rect x="36" y="68" width="78" height="37" fill="#4C2605" />

          {/* Left Dome */}
          <path d="M16 78C16 64 26 57 33 54C40 57 50 64 50 78H16Z" fill="#C7B39C" opacity="0.9" />
          <rect x="12" y="78" width="40" height="27" fill="#301A05" />

          {/* Classical Arched Windows */}
          <path d="M58 105V82C58 78.5 61 76 64 76C67 76 70 78.5 70 82V105H58Z" fill="#220B02" />
          <path d="M78 105V82C78 78.5 81 76 84 76C87 76 90 78.5 90 82V105H78Z" fill="#220B02" />
          <path d="M26 105V88C26 85.5 28 84 30.5 84C33 84 35 85.5 35 88V105H26Z" fill="#220B02" />
        </svg>
      </div>
    </section>
  );
};
