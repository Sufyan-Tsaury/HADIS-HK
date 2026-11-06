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
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] lg:hidden">
      <div className="px-4 pt-3 pb-2.5 space-y-3">
        {/* Brand Row Matching Screen 1 */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 text-left min-h-[44px]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#795A3F] text-white flex items-center justify-center font-bold text-sm tracking-tight shrink-0 shadow-xs">
              HK
            </div>
            <div>
              <span className="block text-base font-bold text-[#111827] leading-tight tracking-wide">
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
            className="min-w-[44px] min-h-[44px] -mr-2 rounded-xl flex items-center justify-center relative text-[#111827] hover:bg-[#F9F7F5] transition"
          >
            <Bookmark className={`w-5 h-5 ${savedCount > 0 ? 'text-[#795A3F] fill-[#795A3F]' : 'text-[#6B7280]'}`} />
            {savedCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#795A3F]" />
            )}
          </button>
        </div>

        {/* Search Input Row Matching Screen 1 */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari hadis, tema, atau kata kunci..."
            aria-label="Pencarian Hadis"
            className="w-full min-h-[42px] pl-10 pr-10 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#C6A17B] focus:ring-1 focus:ring-[#C6A17B] transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Hapus pencarian"
              className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] flex items-center justify-center text-[#6B7280] hover:text-[#111827] rounded-lg"
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
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] px-4 py-2.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 min-w-0">
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali ke halaman sebelumnya"
          className="min-w-[44px] min-h-[44px] -ml-2 rounded-lg flex items-center justify-center text-[#111827] hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-bold text-[#111827] truncate font-sans tracking-tight">
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
