import React from 'react';

export type LogoConcept = 'sanctuary' | 'mubadalah' | 'monogram';

interface BrandLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  subtitle?: string;
  concept?: LogoConcept;
  dark?: boolean;
}

export const BrandLogoMark: React.FC<{ size?: number; className?: string; concept?: LogoConcept }> = ({
  size = 40,
  className = '',
  concept = 'sanctuary'
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`shrink-0 flex items-center justify-center rounded-xl shadow-xs overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 44 44"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        {/* Base Container Squircle */}
        <rect width="44" height="44" rx="11" fill="#795A3F" />
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="10"
          stroke="#C6A17B"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />

        {concept === 'sanctuary' && (
          <>
            {/* Kubah Sakinah / Naungan Rumah Tangga */}
            <path
              d="M22 7C23.5 10.5 28 13.5 31 16V22.5C31 22.5 26.5 21.5 22 22.5C17.5 21.5 13 22.5 13 22.5V16C16 13.5 20.5 10.5 22 7Z"
              fill="#C6A17B"
              fillOpacity="0.25"
              stroke="#C6A17B"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            {/* Bintang Petunjuk 8 Penjuru (Khatam Ilmu & Hidayah) di Tengah Kubah */}
            <path
              d="M22 11.5L23.2 13.8L25.5 15L23.2 16.2L22 18.5L20.8 16.2L18.5 15L20.8 13.8L22 11.5Z"
              fill="#FFFFFF"
            />
            {/* Kitab Hadis Terbuka (Open Manuscript) di Pijakan */}
            <path
              d="M22 23V34.5M22 23C19 21.5 14 22 10.5 23.5V32.5C14 31 19 31 22 33.5M22 23C25 21.5 30 22 33.5 23.5V32.5C30 31 25 31 22 33.5"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Garis Aksen Naskah Emas */}
            <path
              d="M12.5 26.5C15.5 25.5 19 25.5 21 27M31.5 26.5C28.5 25.5 25 25.5 23 27"
              stroke="#C6A17B"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}

        {concept === 'mubadalah' && (
          <>
            {/* Gerbang Mihrab Rumah Tangga */}
            <path
              d="M12 32V19C12 13.5 16.5 9 22 9C27.5 9 32 13.5 32 19V32"
              stroke="#C6A17B"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Dua Sayap Kesalingan Simetris (Mubadalah Flow) */}
            <path
              d="M22 13C19 15.5 16 18 18 21.5C20 23.5 22 22 22 22C22 22 24 23.5 26 21.5C28 18 25 15.5 22 13Z"
              fill="#C6A17B"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <circle cx="22" cy="11.5" r="1.5" fill="#FFFFFF" />
            {/* Kitab Hadis Terbuka */}
            <path
              d="M22 24V34M22 24C19 22.5 14 23 11 24.5V32.5C14 31 19 31 22 33M22 24C25 22.5 30 23 33 24.5V32.5C30 31 25 31 22 33"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {concept === 'monogram' && (
          <>
            <path d="M22 8L27 13H17L22 8Z" fill="#C6A17B" />
            <circle cx="22" cy="6" r="1.5" fill="#FFFFFF" />
            <path
              d="M15 15V24M29 15V24M15 19.5H22M22 15V24M22 19.5L28.5 15M22 19.5L28.5 24"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 25.5V35M22 25.5C19 24 14 24.5 10.5 26V33.5C14 32 19 32 22 34.5M22 25.5C25 24 30 24.5 33.5 26V33.5C30 32 25 32 22 34.5"
              stroke="#C6A17B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 40,
  className = '',
  showText = true,
  subtitle = 'Riset Hadis • Hukum Keluarga Islam',
  concept = 'sanctuary',
  dark = false
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <BrandLogoMark size={size} concept={concept} />
      {showText && (
        <div className="min-w-0">
          <span
            className={`block text-base font-bold leading-tight tracking-tight ${
              dark ? 'text-white' : 'text-[#111827]'
            }`}
          >
            Hadis HK
          </span>
          <span
            className={`block text-[11px] leading-tight mt-0.5 truncate ${
              dark ? 'text-[#C6A17B]' : 'text-[#6B7280]'
            }`}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
