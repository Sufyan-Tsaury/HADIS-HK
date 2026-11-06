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
      className="hidden lg:flex lg:w-[248px] xl:w-[272px] shrink-0 h-dvh sticky top-0 bg-[#FDF9F5] border-r border-[#D9D0C4] flex-col justify-between overflow-y-auto"
    >
      <div className="p-4 space-y-5">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={onOpenLibrary}
          className="flex items-center gap-2.5 text-left w-full group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#301A05] text-[#FFF9F5] border border-[#6B5133] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            HK
          </div>
          <div className="min-w-0">
            <span className="block text-base font-bold font-display text-[#352719] leading-tight group-hover:text-[#301A05] transition tracking-wide">
              Hadis HK
            </span>
            <span className="block text-[11px] text-[#6B5B49] truncate">
              Riset Hadis • Hukum Keluarga
            </span>
          </div>
        </button>

        {/* Desktop Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6B5B49] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (activeDesktopView !== 'library') onOpenLibrary();
            }}
            placeholder="Cari hadis, perawi, bab..."
            aria-label="Cari hadis"
            className="w-full min-h-[40px] bg-white border border-[#D9D0C4] rounded-xl pl-9 pr-8 py-1.5 text-xs text-[#352719] placeholder-[#8A8177] focus:outline-none focus:bg-white focus:border-[#B09768] transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Hapus kata kunci"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#6B5B49] hover:text-[#352719]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 8 Siklus Kehidupan */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#352719]">
              8 Siklus Kehidupan
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={onResetAll}
                className="text-[10px] text-[#301A05] hover:underline flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="space-y-1">
            <button
              type="button"
              onClick={() => {
                onSelectStage('all');
                if (activeDesktopView !== 'library') onOpenLibrary();
              }}
              className={`w-full min-h-[38px] px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs transition ${
                selectedStageId === 'all' && activeDesktopView === 'library'
                  ? 'bg-[#301A05] text-[#FFF9F5] font-semibold shadow-xs'
                  : 'text-[#352719] hover:bg-[#F7F3EF]'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 shrink-0 opacity-70" />
                <span>Semua Bab</span>
              </div>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  selectedStageId === 'all' && activeDesktopView === 'library'
                    ? 'bg-[#4C2605] text-[#C7B39C]'
                    : 'bg-[#F7F3EF] text-[#6B5B49]'
                }`}
              >
                {HADITHS_DATA.length}
              </span>
            </button>

            {STAGES.map((stage, idx) => {
              const isSelected = selectedStageId === stage.id && activeDesktopView === 'library';
              const count = stageCounts[stage.id] || 0;
              const shortLabel = SHORT_STAGE_LABELS[stage.id] || stage.title;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    onSelectStage(stage.id);
                    if (activeDesktopView !== 'library') onOpenLibrary();
                  }}
                  className={`w-full min-h-[36px] px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs transition ${
                    isSelected
                      ? 'bg-[#301A05] text-[#FFF9F5] font-semibold shadow-xs'
                      : 'text-[#352719] hover:bg-[#F7F3EF]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <StageIcon
                      stageId={stage.id}
                      className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#C7B39C]' : 'text-[#6B5B49]'}`}
                    />
                    <span className="truncate">
                      {idx + 1}. {shortLabel}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md shrink-0 ml-1.5 ${
                      isSelected ? 'bg-[#4C2605] text-[#C7B39C]' : 'bg-[#F7F3EF] text-[#6B5B49]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Tag Isu Keluarga */}
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-[#352719] mb-2">
            Tag Permasalahan
          </span>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_TAGS.map((tag) => {
              const isSelected = selectedTag === tag && activeDesktopView === 'library';
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    onSelectTag(isSelected ? null : tag);
                    if (activeDesktopView !== 'library') onOpenLibrary();
                  }}
                  className={`min-h-[28px] px-2.5 py-1 rounded-full text-[11px] transition ${
                    isSelected
                      ? 'bg-[#301A05] text-[#FFF9F5] font-medium shadow-xs'
                      : 'bg-[#F7F3EF] text-[#352719] border border-[#D9D0C4] hover:border-[#B09768]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Sticky Section in Sidebar (5 Pilar, Kuis, Tersimpan) */}
      <div className="p-4 border-t border-[#D9D0C4] space-y-2 bg-[#F7F3EF]">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B5B49]">
          Pilar Sakinah &amp; Edukasi
        </span>

        <button
          type="button"
          onClick={onOpenPillars}
          className={`w-full min-h-[40px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
            activeDesktopView === 'pillars'
              ? 'bg-[#301A05] text-[#FFF9F5] shadow-xs'
              : 'bg-white border border-[#D9D0C4] text-[#352719] hover:border-[#B09768]'
          }`}
        >
          <BookOpen className="w-4 h-4 text-[#B09768]" />
          <span>5 Pilar Keluarga</span>
        </button>

        <button
          type="button"
          onClick={onOpenQuiz}
          className={`w-full min-h-[40px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
            activeDesktopView === 'quiz'
              ? 'bg-[#301A05] text-[#FFF9F5] shadow-xs'
              : 'bg-white border border-[#D9D0C4] text-[#352719] hover:border-[#B09768]'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-[#B09768]" />
          <span>Kuis Evaluasi Relasi</span>
        </button>

        <button
          type="button"
          onClick={onOpenSaved}
          className={`w-full min-h-[40px] px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
            activeDesktopView === 'saved'
              ? 'bg-[#301A05] text-[#FFF9F5] shadow-xs'
              : 'bg-white border border-[#D9D0C4] text-[#352719] hover:border-[#B09768]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-4 h-4 text-[#B09768]" />
            <span>Koleksi Tersimpan</span>
          </div>
          {savedCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#B09768] text-[#220B02] font-bold">
              {savedCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
