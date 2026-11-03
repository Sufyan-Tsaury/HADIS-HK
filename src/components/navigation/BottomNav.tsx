import React from 'react';
import { BookOpen, SlidersHorizontal, Scale, Bookmark } from 'lucide-react';

export type MobileNavTab = 'bacaan' | 'filter' | 'edukasi' | 'tersimpan';

interface BottomNavProps {
  activeTab: MobileNavTab;
  savedCount: number;
  hasActiveFilter: boolean;
  onSelectBacaan: () => void;
  onOpenFilter: () => void;
  onOpenEdukasi: () => void;
  onSelectTersimpan: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  savedCount,
  hasActiveFilter,
  onSelectBacaan,
  onOpenFilter,
  onOpenEdukasi,
  onSelectTersimpan,
}) => {
  return (
    <nav
      aria-label="Navigasi Utama Mobile"
      className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[#E5E7EB] lg:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-4 max-w-lg mx-auto">
        <button
          type="button"
          onClick={onSelectBacaan}
          className={`min-h-[56px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'bacaan' ? 'text-[#795A3F] font-semibold' : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'bacaan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#795A3F] rounded-full" />
          )}
          <BookOpen className="w-5 h-5" />
          <span>Bacaan</span>
        </button>

        <button
          type="button"
          onClick={onOpenFilter}
          className={`min-h-[56px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'filter' || hasActiveFilter
              ? 'text-[#795A3F] font-semibold'
              : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          <div className="relative">
            <SlidersHorizontal className="w-5 h-5" />
            {hasActiveFilter && (
              <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#795A3F]" />
            )}
          </div>
          <span>Filter</span>
        </button>

        <button
          type="button"
          onClick={onOpenEdukasi}
          className={`min-h-[56px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'edukasi' ? 'text-[#795A3F] font-semibold' : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'edukasi' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#795A3F] rounded-full" />
          )}
          <Scale className="w-5 h-5" />
          <span>Edukasi</span>
        </button>

        <button
          type="button"
          onClick={onSelectTersimpan}
          className={`min-h-[56px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'tersimpan' ? 'text-[#795A3F] font-semibold' : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'tersimpan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#795A3F] rounded-full" />
          )}
          <div className="relative">
            <Bookmark className={`w-5 h-5 ${activeTab === 'tersimpan' ? 'fill-[#795A3F]' : ''}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#795A3F] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                {savedCount}
              </span>
            )}
          </div>
          <span>Tersimpan</span>
        </button>
      </div>
    </nav>
  );
};
