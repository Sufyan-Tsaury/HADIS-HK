import React from 'react';
import { STAGES, HADITHS_DATA } from '../../data/hadiths';
import { StageIcon } from '../navigation/StageIcon';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { Search, X, BookOpen, HelpCircle, Bookmark, ChevronRight } from 'lucide-react';

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
  savedCount,
  activeDesktopView,
  onOpenLibrary,
  onOpenPillars,
  onOpenQuiz,
  onOpenSaved,
}) => {
  const stageCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (const h of HADITHS_DATA) {
      counts[h.stageId] = (counts[h.stageId] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <aside
      aria-label="Navigasi Perpustakaan Hadis HK"
      className="hidden lg:flex lg:w-[248px] xl:w-[272px] shrink-0 h-dvh sticky top-0 bg-[#FFFFFF] border-r border-[#E5E7EB] flex-col justify-between overflow-y-auto"
    >
      <div className="p-4 space-y-4">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={onOpenLibrary}
          className="flex items-center gap-2.5 text-left w-full group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#795A3F] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            HK
          </div>
          <div className="min-w-0">
            <span className="block text-base font-bold text-[#111827] leading-tight group-hover:text-[#795A3F] transition tracking-wide">
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
            placeholder="Cari hadis..."
            aria-label="Cari hadis"
            className="w-full min-h-[38px] bg-[#F9F7F5] border border-[#E5E7EB] rounded-xl pl-9 pr-8 py-1.5 text-xs text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#C6A17B] transition"
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

        {/* 8 Siklus Kehidupan Section Matching Screen 8 */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1">
              <span>8 Siklus Kehidupan</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
            </span>
          </div>

          <div className="space-y-1">
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
                  className={`w-full min-h-[38px] px-2.5 py-1.5 rounded-xl flex items-center justify-between text-xs transition ${
                    isSelected
                      ? 'bg-[#C6A17B] text-white font-semibold shadow-xs'
                      : 'text-[#111827] hover:bg-[#F9F7F5]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#C6A17B] text-white'
                      }`}
                    >
                      <StageIcon
                        stageId={stage.id}
                        className="w-3 h-3 text-white"
                      />
                    </div>
                    <span className="truncate">
                      {idx + 1}. {shortLabel}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] shrink-0 ml-1.5 ${
                      isSelected ? 'text-white/90 font-bold' : 'text-[#6B7280]'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Pilar Sakinah Matching Screen 8 */}
        <div className="pt-2 space-y-2">
          <span className="block text-xs font-bold text-[#111827] px-1">
            Pilar Sakinah
          </span>

          <button
            type="button"
            onClick={onOpenPillars}
            className={`w-full min-h-[42px] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
              activeDesktopView === 'pillars'
                ? 'bg-[#795A3F] text-white shadow-xs'
                : 'bg-[#C6A17B] hover:bg-[#795A3F] text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-white" />
            <span>5 Pilar Keluarga</span>
          </button>

          <button
            type="button"
            onClick={onOpenQuiz}
            className={`w-full min-h-[42px] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
              activeDesktopView === 'quiz'
                ? 'bg-[#795A3F] text-white shadow-xs'
                : 'bg-[#C6A17B] hover:bg-[#795A3F] text-white'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-white" />
            <span>Kuis Evaluasi</span>
          </button>
        </div>
      </div>

      {/* Bottom Bookmark Section in Sidebar */}
      <div className="p-4 border-t border-[#E5E7EB] bg-[#F9F7F5]">
        <button
          type="button"
          onClick={onOpenSaved}
          className={`w-full min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
            activeDesktopView === 'saved'
              ? 'bg-[#795A3F] text-white shadow-xs'
              : 'bg-white border border-[#E5E7EB] text-[#111827] hover:border-[#C6A17B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <Bookmark className={`w-4 h-4 ${activeDesktopView === 'saved' ? 'text-white' : 'text-[#795A3F]'}`} />
            <span>Koleksi Tersimpan</span>
          </div>
          {savedCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#795A3F] text-white font-bold">
              {savedCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
