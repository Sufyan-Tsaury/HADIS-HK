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
    <header className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB] lg:hidden">
      <div className="px-4 pt-3 pb-2.5 space-y-3">
        {/* Brand Row */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 text-left min-h-[44px]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#795A3F] text-white flex items-center justify-center font-bold text-sm tracking-tight shrink-0">
              HK
            </div>
            <div>
              <span className="block text-base font-bold text-[#111827] leading-tight">
                Hadis HK
              </span>
              <span className="block text-[11px] text-[#6B7280] leading-tight mt-0.5">
                Riset Hadis • Hukum Keluarga Islam
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenSaved}
            aria-label={`Koleksi Tersimpan (${savedCount})`}
            className="min-w-[44px] min-h-[44px] rounded-xl border border-[#E5E7EB] bg-white hover:bg-[#F9F7F5] flex items-center justify-center relative text-[#111827] transition"
          >
            <Bookmark className={`w-5 h-5 ${savedCount > 0 ? 'text-[#795A3F] fill-[#795A3F]' : 'text-[#6B7280]'}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#795A3F] text-white text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Input Row (text-base prevents iOS Safari forced auto-zoom on focus) */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari hadis, perawi, atau topik..."
            aria-label="Cari hadis, perawi, atau topik"
            className="w-full min-h-[44px] bg-[#F9F7F5] border border-[#E5E7EB] rounded-xl pl-10 pr-10 py-2 text-base sm:text-sm text-[#111827] placeholder-[#6B7280] focus:outline-none focus:bg-white focus:border-[#795A3F] transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Bersihkan pencarian"
              className="min-w-[40px] min-h-[40px] flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111827]"
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
  rightSlot?: React.ReactNode;
}

export const SubpageHeader: React.FC<SubpageHeaderProps> = ({
  title,
  onBack,
  rightSlot,
}) => {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB] px-3 h-14 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={onBack}
        aria-label="Kembali"
        className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:bg-[#F9F7F5] transition shrink-0"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <h1 className="text-sm sm:text-base font-bold text-[#111827] truncate text-center flex-1">
        {title}
      </h1>

      <div className="flex items-center justify-end gap-1 min-w-[44px] shrink-0">
        {rightSlot}
      </div>
    </header>
  );
};
