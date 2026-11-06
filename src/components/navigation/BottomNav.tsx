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
      className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[#E5E7EB] lg:hidden pb-[env(safe-area-inset-bottom)] shadow-xs"
    >
      <div className="grid grid-cols-4 max-w-lg mx-auto">
        <button
          type="button"
          onClick={onSelectBacaan}
          aria-label="Menu Bacaan Hadis"
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'bacaan'
              ? 'text-[#795A3F] font-semibold'
              : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'bacaan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C6A17B] rounded-full" />
          )}
          <BookOpen className={`w-5 h-5 ${activeTab === 'bacaan' ? 'text-[#795A3F]' : 'text-[#6B7280]'}`} />
          <span>Bacaan</span>
        </button>

        <button
          type="button"
          onClick={onOpenFilter}
          aria-label="Buka Filter Topik"
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'filter' || hasActiveFilter
              ? 'text-[#795A3F] font-semibold'
              : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          <div className="relative">
            <SlidersHorizontal className={`w-5 h-5 ${activeTab === 'filter' || hasActiveFilter ? 'text-[#795A3F]' : 'text-[#6B7280]'}`} />
            {hasActiveFilter && (
              <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#C6A17B]" />
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
              ? 'text-[#795A3F] font-semibold'
              : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'edukasi' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C6A17B] rounded-full" />
          )}
          <Scale className={`w-5 h-5 ${activeTab === 'edukasi' ? 'text-[#795A3F]' : 'text-[#6B7280]'}`} />
          <span>Edukasi</span>
        </button>

        <button
          type="button"
          onClick={onSelectTersimpan}
          aria-label={`Koleksi Tersimpan (${savedCount})`}
          className={`min-h-[58px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition relative ${
            activeTab === 'tersimpan'
              ? 'text-[#795A3F] font-semibold'
              : 'text-[#6B7280] hover:text-[#111827]'
          }`}
        >
          {activeTab === 'tersimpan' && (
            <span className="absolute top-0 inset-x-6 h-0.5 bg-[#C6A17B] rounded-full" />
          )}
          <div className="relative">
            <Bookmark className={`w-5 h-5 ${activeTab === 'tersimpan' ? 'text-[#795A3F] fill-[#795A3F]' : 'text-[#6B7280]'}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-[#795A3F] text-white text-[10px] font-bold flex items-center justify-center">
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
