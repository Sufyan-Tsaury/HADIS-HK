import React from 'react';
import type { HadithItem } from '../data/hadiths';
import { HADITHS_DATA } from '../data/hadiths';
import { HadithReader } from '../components/hadith/HadithReader';
import { ChevronLeft, ChevronRight, Bookmark, Share2 } from 'lucide-react';

interface HadithDetailPageProps {
  hadith: HadithItem;
  isSaved: boolean;
  onBack: () => void;
  onToggleSave: (id: string) => void;
  onOpenQuote: (hadith: HadithItem) => void;
  onSelectHadith: (hadith: HadithItem) => void;
  onSelectTag: (tag: string) => void;
}

export const HadithDetailPage: React.FC<HadithDetailPageProps> = ({
  hadith,
  isSaved,
  onBack,
  onToggleSave,
  onOpenQuote,
  onSelectHadith,
  onSelectTag,
}) => {
  const currentIdx = HADITHS_DATA.findIndex((h) => h.id === hadith.id);
  const canonicalNumber = currentIdx >= 0 ? currentIdx + 1 : 1;
  const prevHadith = currentIdx > 0 ? HADITHS_DATA[currentIdx - 1] : null;
  const nextHadith =
    currentIdx >= 0 && currentIdx < HADITHS_DATA.length - 1
      ? HADITHS_DATA[currentIdx + 1]
      : null;

  return (
    <div className="min-h-dvh bg-white pb-24">
      {/* Top Bar Matching Reference Screen 2 */}
      <header className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB] px-3 h-14 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali ke daftar hadis"
          className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:bg-[#F9F7F5] transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-xs font-semibold text-[#6B7280] truncate">
          Hadis #{canonicalNumber} dari {HADITHS_DATA.length}
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onToggleSave(hadith.id)}
            aria-label={isSaved ? 'Hapus dari tersimpan' : 'Simpan hadis'}
            className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:bg-[#F9F7F5] transition"
          >
            <Bookmark
              className={`w-5 h-5 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`}
            />
          </button>

          <button
            type="button"
            onClick={() => onOpenQuote(hadith)}
            aria-label="Buka Studio Kartu Kutipan"
            className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:bg-[#F9F7F5] transition"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Reader Content */}
      <main className="max-w-2xl mx-auto px-4 pt-4 space-y-6">
        <HadithReader
          key={hadith.id}
          hadith={hadith}
          canonicalNumber={canonicalNumber}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          onOpenQuote={onOpenQuote}
          onSelectTag={onSelectTag}
        />

        {/* Sequential Hadith Prev / Next Navigation */}
        <nav
          aria-label="Navigasi Hadis Sebelumnya dan Selanjutnya"
          className="pt-4 border-t border-[#E5E7EB] grid grid-cols-2 gap-3"
        >
          <button
            type="button"
            disabled={!prevHadith}
            onClick={() => {
              if (prevHadith) {
                onSelectHadith(prevHadith);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="btn-outline min-h-[48px] px-3 text-xs font-semibold flex items-center justify-center gap-1.5 disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="truncate">Hadis Sebelumnya</span>
          </button>

          <button
            type="button"
            disabled={!nextHadith}
            onClick={() => {
              if (nextHadith) {
                onSelectHadith(nextHadith);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="btn-soft min-h-[48px] px-3 text-xs font-semibold flex items-center justify-center gap-1.5 disabled:opacity-40"
          >
            <span className="truncate">Hadis Selanjutnya</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </nav>
      </main>
    </div>
  );
};
