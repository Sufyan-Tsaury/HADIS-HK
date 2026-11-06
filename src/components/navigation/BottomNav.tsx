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
      className="fixed bottom-0 inset-x-0 z-30 bg-[#301A05] border-t border-[#4C2605] lg:hidden pb-[env(safe-area-inset-bottom)] shadow-lg"
    >
      <div className="grid grid-cols-4 max-w-lg mx-auto">
        <button
          type="button"
          onClick={onSelectBacaan}
          aria-label="Menu Bacaan Hadis"
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'bacaan'
              ? 'text-[#FFF9F5] font-semibold'
              : 'text-[#D9D0C4] hover:text-[#FFF9F5]'
          }`}
        >
          {activeTab === 'bacaan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C7B39C] rounded-full" />
          )}
          <BookOpen className="w-5 h-5" />
          <span>Bacaan</span>
        </button>

        <button
          type="button"
          onClick={onOpenFilter}
          aria-label="Buka Filter Topik"
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'filter' || hasActiveFilter
              ? 'text-[#FFF9F5] font-semibold'
              : 'text-[#D9D0C4] hover:text-[#FFF9F5]'
          }`}
        >
          <div className="relative">
            <SlidersHorizontal className="w-5 h-5" />
            {hasActiveFilter && (
              <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#B09768]" />
            )}
          </div>
          <span>Filter</span>
        </button>

        <button
          type="button"
          onClick={onOpenEdukasi}
          aria-label="Menu Edukasi Sakinah & Kuis"
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'edukasi'
              ? 'text-[#FFF9F5] font-semibold'
              : 'text-[#D9D0C4] hover:text-[#FFF9F5]'
          }`}
        >
          {activeTab === 'edukasi' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C7B39C] rounded-full" />
          )}
          <Scale className="w-5 h-5" />
          <span>Edukasi</span>
        </button>

        <button
          type="button"
          onClick={onSelectTersimpan}
          aria-label={`Koleksi Tersimpan (${savedCount})`}
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'tersimpan'
              ? 'text-[#FFF9F5] font-semibold'
              : 'text-[#D9D0C4] hover:text-[#FFF9F5]'
          }`}
        >
          {activeTab === 'tersimpan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C7B39C] rounded-full" />
          )}
          <div className="relative">
            <Bookmark className={`w-5 h-5 ${activeTab === 'tersimpan' ? 'fill-current' : ''}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-[#B09768] text-[#220B02] text-[10px] font-bold flex items-center justify-center">
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
