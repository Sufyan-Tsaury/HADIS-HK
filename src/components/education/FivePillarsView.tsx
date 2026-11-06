import React, { useState } from 'react';
import { PILAR_SAKINAH } from '../../data/hadiths';
import type { HadithItem } from '../../data/hadiths';
import { SubpageHeader } from '../layout/AppHeader';
import { ChevronLeft, ChevronRight, CheckCircle2, HelpCircle, BookOpen } from 'lucide-react';

interface FivePillarsViewProps {
  onBack: () => void;
  onOpenQuiz: () => void;
  onExploreStage: (stageId: HadithItem['stageId']) => void;
}

export const FivePillarsView: React.FC<FivePillarsViewProps> = ({
  onBack,
  onOpenQuiz,
  onExploreStage,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PILAR_SAKINAH[activeIdx];

  return (
    <div className="min-h-dvh lg:min-h-0 bg-white text-[#111827] flex flex-col pb-24 lg:pb-8">
      <SubpageHeader
        title="5 Pilar Keluarga Sakinah"
        onBack={onBack}
        rightAction={
          <button
            type="button"
            onClick={onOpenQuiz}
            className="min-h-[38px] px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] text-xs font-medium flex items-center gap-1.5 hover:bg-gray-50 transition"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#795A3F]" />
            <span>Kuis</span>
          </button>
        }
      />

      {/* Horizontal Pillar Tabs */}
      <nav
        aria-label="Pilih Pilar Keluarga Sakinah"
        className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 py-2.5 border-b border-[#E5E7EB] bg-white"
      >
        {PILAR_SAKINAH.map((pilar, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={pilar.title}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`shrink-0 min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium border transition whitespace-nowrap ${
                isSelected
                  ? 'bg-[#795A3F] text-white border-[#795A3F]'
                  : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:bg-gray-50 hover:text-[#111827]'
              }`}
            >
              {pilar.shortLabel}
            </button>
          );
        })}
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl w-full mx-auto px-4 pt-4 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-5">
          {/* Editorial Illustration Card: Open Mushaf on Wooden Rehal */}
          <div className="rounded-2xl overflow-hidden border border-[#D9D0C4] bg-[#F7F3EF] aspect-[16/9] flex items-center justify-center relative shadow-xs">
            <svg
              viewBox="0 0 400 225"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              {/* Warm Ambient Backdrop */}
              <rect width="400" height="225" fill="#F7F3EF" />
              <circle cx="200" cy="95" r="88" fill="#FDF9F5" fillOpacity="0.85" />
              <rect y="170" width="400" height="55" fill="#E8DEC\-B" />

              {/* Wooden Rehal (X-Stand Book Rest) */}
              <path d="M136 196L254 128L262 138L144 206L136 196Z" fill="#301A05" />
              <path d="M264 196L146 128L138 138L256 206L264 196Z" fill="#4C2605" />

              {/* Open Mushaf Pages */}
              <path
                d="M95 112L198 136V90L98 68C95 82 95 98 95 112Z"
                fill="#FFFFFF"
                stroke="#B09768"
                strokeWidth="2"
              />
              <path
                d="M305 112L202 136V90L302 68C305 82 305 98 305 112Z"
                fill="#FCF9F5"
                stroke="#B09768"
                strokeWidth="2"
              />
              {/* Mushaf Leather Cover */}
              <path d="M90 116L200 142L310 116L305 122L200 149L95 122L90 116Z" fill="#301A05" />
              {/* Subtle Calligraphy Lines on Pages */}
              <line x1="118" y1="86" x2="180" y2="100" stroke="#B09768" strokeWidth="2" strokeLinecap="round" />
              <line x1="118" y1="98" x2="176" y2="111" stroke="#D9D0C4" strokeWidth="2" strokeLinecap="round" />
              <line x1="220" y1="100" x2="282" y2="86" stroke="#B09768" strokeWidth="2" strokeLinecap="round" />
              <line x1="224" y1="111" x2="282" y2="98" stroke="#D9D0C4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Title & Qur'anic Foundation */}
          <div className="text-center space-y-2 px-1">
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#111827] tracking-tight">
              {current.title}
            </h2>
            <p className="text-xs font-semibold text-[#795A3F]">
              {current.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-lg mx-auto">
              {current.meaning}
            </p>
          </div>

          {/* Dalil Al-Qur'an Card */}
          <div className="rounded-xl bg-[#F9F7F5] border border-[#E5E7EB] p-4 sm:p-5 text-center space-y-2.5">
            <p
              dir="rtl"
              className="font-arabic text-2xl sm:text-3xl font-bold text-[#111827] leading-[2.15]"
            >
              {current.ayatArab}
            </p>
            <p className="text-xs sm:text-sm text-[#374151] italic leading-relaxed">
              &ldquo;{current.terjemahanAyat}&rdquo;
            </p>
            <span className="inline-block text-xs font-semibold text-[#795A3F]">
              ({current.surah})
            </span>
          </div>

          {/* Implementasi dalam Kehidupan Rumah Tangga */}
          <div className="rounded-xl bg-white border border-[#E5E7EB] p-4 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Implementasi dalam Rumah Tangga:
            </h3>
            <div className="space-y-2">
              {current.implementasi.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                  <CheckCircle2 className="w-4 h-4 text-[#795A3F] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onExploreStage(current.relatedStageId)}
                className="text-xs font-medium text-[#795A3F] hover:underline inline-flex items-center gap-1.5 min-h-[36px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#795A3F]" />
                <span>Telusuri Hadis Terkait Pilar {current.shortLabel} →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots & Prev/Next Controls */}
        <div className="pt-4 space-y-4">
          <div className="flex items-center justify-center gap-2" aria-label="Indikator Halaman Pilar">
            {PILAR_SAKINAH.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={`Pilar ${i + 1}: ${p.title}`}
                className={`h-2 rounded-full transition-all ${
                  activeIdx === i ? 'w-6 bg-[#795A3F]' : 'w-2 bg-[#E5E7EB]'
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled={activeIdx === 0}
              onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
              className="min-h-[44px] px-4 text-xs sm:text-sm font-medium rounded-lg border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 flex items-center justify-center gap-1.5 disabled:opacity-40 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {activeIdx < PILAR_SAKINAH.length - 1 ? (
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => Math.min(PILAR_SAKINAH.length - 1, prev + 1))}
                className="min-h-[44px] px-4 text-xs sm:text-sm font-medium rounded-lg bg-[#795A3F] text-white hover:bg-[#674A32] flex items-center justify-center gap-1.5 transition"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenQuiz}
                className="min-h-[44px] px-4 text-xs sm:text-sm font-medium rounded-lg bg-[#795A3F] text-white hover:bg-[#674A32] flex items-center justify-center gap-1.5 transition"
              >
                <span>Mulai Kuis Relasi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
