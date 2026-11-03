import React from 'react';
import type { HadithItem } from '../data/hadiths';
import { STAGES, HADITHS_DATA } from '../data/hadiths';
import { AppHeader } from '../components/layout/AppHeader';
import { ChapterStrip } from '../components/navigation/ChapterStrip';
import { EditorialBanner } from '../components/hadith/EditorialBanner';
import { StageDirectoryList } from '../components/hadith/StageDirectoryList';
import { HadithListItem } from '../components/hadith/HadithListItem';
import { SlidersHorizontal, RotateCcw, BookOpen } from 'lucide-react';

interface LibraryPageProps {
  filteredHadiths: HadithItem[];
  selectedStageId: string;
  selectedTag: string | null;
  searchQuery: string;
  savedIds: string[];
  onSearchChange: (q: string) => void;
  onSelectStage: (stageId: string) => void;
  onSelectTag: (tag: string | null) => void;
  onResetFilters: () => void;
  onSelectHadith: (hadith: HadithItem) => void;
  onToggleSave: (id: string) => void;
  onOpenFilterSheet: () => void;
  onOpenSaved: () => void;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({
  filteredHadiths,
  selectedStageId,
  selectedTag,
  searchQuery,
  savedIds,
  onSearchChange,
  onSelectStage,
  onSelectTag,
  onResetFilters,
  onSelectHadith,
  onToggleSave,
  onOpenFilterSheet,
  onOpenSaved,
}) => {
  const isUnfilteredHome =
    selectedStageId === 'all' && selectedTag === null && searchQuery.trim() === '';

  const activeStage = STAGES.find((s) => s.id === selectedStageId);

  return (
    <div className="min-h-dvh bg-white pb-24">
      {/* Mobile Header + Search */}
      <AppHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        savedCount={savedIds.length}
        onOpenSaved={onOpenSaved}
        onLogoClick={onResetFilters}
      />

      {/* Horizontal Chapter Strip */}
      <ChapterStrip
        selectedStageId={selectedStageId}
        totalCount={HADITHS_DATA.length}
        onSelectStage={onSelectStage}
      />

      {/* Main Content Feed */}
      <main className="px-4 pt-4 space-y-5 max-w-2xl mx-auto">
        {isUnfilteredHome && (
          <>
            <EditorialBanner />
            <StageDirectoryList
              selectedStageId={selectedStageId}
              onSelectStage={onSelectStage}
            />
          </>
        )}

        {/* Hadith List Section */}
        <section aria-labelledby="daftar-hadis-heading" className="space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <h2 id="daftar-hadis-heading" className="text-sm font-bold text-[#111827]">
                {activeStage
                  ? activeStage.title
                  : isUnfilteredHome
                  ? 'Daftar Hadis Pilihan & Kanonik'
                  : 'Hasil Penelusuran Hadis'}
              </h2>
              {activeStage && (
                <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">
                  {activeStage.tagline}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-[#795A3F] bg-[#F6F1EA] px-2.5 py-1 rounded-lg border border-[#E5DCD0]">
                {filteredHadiths.length} hadis
              </span>
              <button
                type="button"
                onClick={onOpenFilterSheet}
                aria-label="Buka Filter Topik"
                className="min-h-[38px] px-2.5 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-xs font-medium text-[#374151] hover:border-[#C6A17B] flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#795A3F]" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Active Tag / Filter Pill Notice */}
          {!isUnfilteredHome && (
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#F9F7F5] border border-[#E5E7EB]">
              <div className="flex items-center gap-1.5 flex-wrap text-xs text-[#4B5563]">
                <span>Filter aktif:</span>
                {activeStage && (
                  <span className="px-2 py-0.5 rounded bg-[#F6F1EA] text-[#795A3F] font-semibold">
                    {activeStage.title}
                  </span>
                )}
                {selectedTag && (
                  <button
                    type="button"
                    onClick={() => onSelectTag(null)}
                    className="px-2 py-0.5 rounded bg-[#795A3F] text-white font-semibold"
                  >
                    #{selectedTag} ×
                  </button>
                )}
                {searchQuery.trim() && (
                  <span className="px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[#111827] font-medium">
                    &ldquo;{searchQuery.trim()}&rdquo;
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onResetFilters}
                className="min-h-[34px] px-2.5 py-1 rounded-lg text-xs font-semibold text-[#795A3F] hover:bg-[#F6F1EA] flex items-center gap-1 shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          )}

          {filteredHadiths.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9F7F5] p-8 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-[#9CA3AF] mx-auto" />
              <h3 className="text-sm font-bold text-[#111827]">
                Tidak Ditemukan Riwayat yang Sesuai
              </h3>
              <p className="text-xs text-[#6B7280] max-w-xs mx-auto leading-relaxed">
                Silakan ubah kata kunci pencarian atau atur ulang filter bab siklus kehidupan keluarga.
              </p>
              <button
                type="button"
                onClick={onResetFilters}
                className="btn-brown-solid min-h-[44px] px-5 text-xs inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tampilkan Semua 23 Hadis</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredHadiths.map((hadith) => {
                const canonicalNum =
                  HADITHS_DATA.findIndex((h) => h.id === hadith.id) + 1;
                return (
                  <HadithListItem
                    key={hadith.id}
                    hadith={hadith}
                    canonicalNumber={canonicalNum}
                    isSaved={savedIds.includes(hadith.id)}
                    onSelect={onSelectHadith}
                    onToggleSave={onToggleSave}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
