import React from 'react';
import { STAGES, HADITHS_DATA, POPULAR_TAGS } from '../../data/hadiths';
import { StageIcon } from '../navigation/StageIcon';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { Search, X, BookOpen, HelpCircle, Bookmark, RotateCcw } from 'lucide-react';

interface DesktopSidebarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedStageId: string;
  onSelectStage: (stageId: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  savedCount: number;
  activeDesktopView: 'library' | 'pillars' | 'quiz' | 'saved' | 'quote';
  onOpenLibrary: () => void;
  onOpenPillars: () => void;
  onOpenQuiz: () => void;
  onOpenSaved: () => void;
  onResetAll: () => void;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedStageId,
  onSelectStage,
  selectedTag,
  onSelectTag,
  savedCount,
  activeDesktopView,
  onOpenLibrary,
  onOpenPillars,
  onOpenQuiz,
  onOpenSaved,
  onResetAll,
}) => {
  const stageCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (const h of HADITHS_DATA) {
      counts[h.stageId] = (counts[h.stageId] || 0) + 1;
    }
    return counts;
  }, []);

  const hasFilters = selectedStageId !== 'all' || selectedTag !== null || searchQuery.trim() !== '';

  return (
    <aside
      aria-label="Navigasi Perpustakaan Hadis HK"
      className="hidden lg:flex lg:w-[248px] xl:w-[272px] shrink-0 h-dvh sticky top-0 bg-white border-r border-[#E5E7EB] flex-col justify-between overflow-y-auto"
    >
      <div className="p-4 space-y-5">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={onOpenLibrary}
          className="flex items-center gap-2.5 text-left w-full group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#795A3F] text-white flex items-center justify-center font-bold text-sm shrink-0">
            HK
          </div>
          <div className="min-w-0">
            <span className="block text-base font-bold text-[#111827] leading-tight group-hover:text-[#795A3F] transition">
              Hadis HK
            </span>
            <span className="block text-[11px] text-[#6B7280] truncate">
              Riset Hadis • Hukum Keluarga
            </span>
          </div>
        </button>

        {/* Desktop Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (activeDesktopView !== 'library') onOpenLibrary();
            }}
            placeholder="Cari hadis, perawi, bab..."
            aria-label="Cari hadis"
            className="w-full min-h-[40px] bg-[#F9F7F5] border border-[#E5E7EB] rounded-xl pl-9 pr-8 py-1.5 text-xs text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#795A3F] transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Hapus kata kunci"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#6B7280] hover:text-[#111827]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 8 Siklus Kehidupan */}
        <div>
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-bold text-[#111827]">
              8 Siklus Kehidupan
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={onResetAll}
                className="text-[11px] font-medium text-[#795A3F] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <nav className="space-y-1">
            <button
              type="button"
              onClick={() => {
                onSelectStage('all');
                onOpenLibrary();
              }}
              className={`w-full min-h-[38px] px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between gap-2 transition ${
                activeDesktopView === 'library' && selectedStageId === 'all'
                  ? 'bg-[#F6F1EA] text-[#795A3F] font-semibold border border-[#E5DCD0]'
                  : 'text-[#374151] hover:bg-[#F9F7F5] hover:text-[#111827]'
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <BookOpen className="w-3.5 h-3.5 shrink-0 text-[#795A3F]" />
                <span className="truncate">Semua Bab</span>
              </span>
              <span className="text-[11px] text-[#6B7280] font-mono">
                ({HADITHS_DATA.length})
              </span>
            </button>

            {STAGES.map((stage, idx) => {
              const isSelected = activeDesktopView === 'library' && selectedStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    onSelectStage(stage.id);
                    onOpenLibrary();
                  }}
                  className={`w-full min-h-[38px] px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between gap-2 transition ${
                    isSelected
                      ? 'bg-[#F6F1EA] text-[#795A3F] font-semibold border border-[#E5DCD0]'
                      : 'text-[#374151] hover:bg-[#F9F7F5] hover:text-[#111827]'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <StageIcon
                      stageId={stage.id}
                      className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#795A3F]' : 'text-[#6B7280]'}`}
                    />
                    <span className="truncate">
                      {idx + 1}. {SHORT_STAGE_LABELS[stage.id] || stage.title}
                    </span>
                  </span>
                  <span className="text-[11px] text-[#6B7280] font-mono shrink-0">
                    ({stageCounts[stage.id] || 0})
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* 12 Tag Permasalahan Keluarga */}
        <div>
          <span className="block text-xs font-bold text-[#111827] px-1 mb-2">
            Tag Permasalahan
          </span>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_TAGS.map((tag) => {
              const isTagActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    onSelectTag(isTagActive ? null : tag);
                    onOpenLibrary();
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition ${
                    isTagActive
                      ? 'bg-[#795A3F] text-white border-[#795A3F]'
                      : 'bg-[#F9F7F5] text-[#4B5563] border-[#E5E7EB] hover:border-[#C6A17B] hover:text-[#111827]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pilar Sakinah & Evaluasi */}
        <div className="pt-2 border-t border-[#E5E7EB] space-y-2">
          <span className="block text-xs font-bold text-[#111827] px-1">
            Pilar Sakinah & Edukasi
          </span>

          <button
            type="button"
            onClick={onOpenPillars}
            className={`w-full min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
              activeDesktopView === 'pillars'
                ? 'bg-[#634830] text-white ring-2 ring-[#C6A17B]'
                : 'bg-[#795A3F] hover:bg-[#634830] text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>5 Pilar Keluarga</span>
          </button>

          <button
            type="button"
            onClick={onOpenQuiz}
            className={`w-full min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
              activeDesktopView === 'quiz'
                ? 'bg-[#634830] text-white ring-2 ring-[#C6A17B]'
                : 'bg-[#9E744A] hover:bg-[#795A3F] text-white'
            }`}
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Kuis Evaluasi Relasi</span>
          </button>

          <button
            type="button"
            onClick={onOpenSaved}
            className={`w-full min-h-[42px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between border transition ${
              activeDesktopView === 'saved'
                ? 'bg-[#F6F1EA] text-[#795A3F] border-[#C6A17B]'
                : 'bg-white text-[#111827] border-[#E5E7EB] hover:bg-[#F9F7F5]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'text-[#795A3F] fill-[#795A3F]' : 'text-[#6B7280]'}`} />
              <span>Koleksi Tersimpan</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#F6F1EA] text-[#795A3F] text-[11px] font-bold">
              {savedCount}
            </span>
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-[#E5E7EB] text-[11px] text-[#6B7280]">
        Hadis Hukum Keluarga Islam • Fiqh al-Usrah & Qira&apos;ah Mubadalah
      </div>
    </aside>
  );
};
