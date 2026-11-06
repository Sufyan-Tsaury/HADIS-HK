import React from 'react';
import { Search, Bookmark, X, ChevronLeft } from 'lucide-react';

interface AppHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onLogoClick?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  searchQuery,
  onSearchChange,
  savedCount,
  onOpenSaved,
  onLogoClick,
}) => {
  return (
    <header className="sticky top-0 z-20 bg-[#FDF9F5]/95 backdrop-blur-sm border-b border-[#D9D0C4] lg:hidden">
      <div className="px-4 pt-3 pb-2.5 space-y-3">
        {/* Brand Row */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 text-left min-h-[44px]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#301A05] text-[#FFF9F5] border border-[#6B5133] flex items-center justify-center font-bold text-sm tracking-tight shrink-0 shadow-xs">
              HK
            </div>
            <div>
              <span className="block text-base font-bold text-[#352719] font-display leading-tight tracking-wide">
                Hadis HK
              </span>
              <span className="block text-[11px] text-[#6B5B49] leading-tight mt-0.5">
                Riset Hadis • Hukum Keluarga Islam
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenSaved}
            aria-label={`Koleksi Tersimpan (${savedCount})`}
            className="min-w-[44px] min-h-[44px] rounded-xl border border-[#D9D0C4] bg-white hover:bg-[#F7F3EF] flex items-center justify-center relative text-[#352719] transition shadow-xs"
          >
            <Bookmark className={`w-5 h-5 ${savedCount > 0 ? 'text-[#301A05] fill-[#301A05]' : 'text-[#6B5B49]'}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#301A05] text-[#FFF9F5] text-[10px] font-bold flex items-center justify-center border border-[#B09768]">
                {savedCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Input Row */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6B5B49] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari hadis, tema, kitab, atau perawi..."
            aria-label="Pencarian Hadis"
            className="w-full min-h-[44px] pl-10 pr-10 rounded-xl border border-[#D9D0C4] bg-white text-base sm:text-sm text-[#352719] placeholder-[#8A8177] focus:outline-none focus:border-[#B09768] focus:ring-1 focus:ring-[#B09768] transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Hapus pencarian"
              className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] flex items-center justify-center text-[#6B5B49] hover:text-[#352719] rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

interface SubpageHeaderProps {
  title: string;
  onBack: () => void;
  rightAction?: React.ReactNode;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  title,
  onBack,
  rightAction,
}) => {
  return (
    <header className="sticky top-0 z-20 bg-[#FDF9F5]/95 backdrop-blur-sm border-b border-[#D9D0C4] px-4 py-2.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 min-w-0">
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          className="min-w-[44px] min-h-[44px] -ml-2 rounded-xl flex items-center justify-center text-[#352719] hover:bg-[#F7F3EF] transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-bold text-[#352719] truncate font-display tracking-wide">
          {title}
        </h1>
      </div>

      {rightAction && (
        <div className="flex items-center gap-1 shrink-0">
          {rightAction}
        </div>
      )}
    </header>
  );
};
