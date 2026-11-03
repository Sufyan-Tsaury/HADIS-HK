import React from 'react';
import type { HadithItem } from '../../data/hadiths';
import { STAGES, HADITHS_DATA } from '../../data/hadiths';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { Bookmark, Trash2, ChevronRight, BookOpen } from 'lucide-react';

interface SavedListProps {
  savedHadiths: HadithItem[];
  onSelectHadith: (hadith: HadithItem) => void;
  onRemoveSaved: (id: string) => void;
  onBrowseLibrary: () => void;
}

export const SavedList: React.FC<SavedListProps> = ({
  savedHadiths,
  onSelectHadith,
  onRemoveSaved,
  onBrowseLibrary,
}) => {
  if (savedHadiths.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9F7F5] p-8 text-center space-y-3 my-4">
        <div className="w-12 h-12 rounded-full bg-[#F6F1EA] text-[#795A3F] flex items-center justify-center mx-auto">
          <Bookmark className="w-5 h-5" />
        </div>
        <h2 className="text-sm font-bold text-[#111827]">
          Belum Ada Hadis Tersimpan
        </h2>
        <p className="text-xs text-[#6B7280] max-w-xs mx-auto leading-relaxed">
          Tekan ikon marka buku pada riwayat hadis yang sedang Anda kaji untuk menyimpannya di halaman ini.
        </p>
        <button
          type="button"
          onClick={onBrowseLibrary}
          className="btn-brown-solid min-h-[44px] px-5 text-xs inline-flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Telusuri Perpustakaan Hadis</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-[#6B7280] text-center pb-1">
        {savedHadiths.length} hadis tersimpan
      </p>

      {savedHadiths.map((hadith) => {
        const canonicalIdx = HADITHS_DATA.findIndex((h) => h.id === hadith.id) + 1;
        const stageIdx = STAGES.findIndex((s) => s.id === hadith.stageId);
        const stageLabel =
          stageIdx >= 0
            ? `${stageIdx + 1}. ${SHORT_STAGE_LABELS[hadith.stageId] || STAGES[stageIdx].title}`
            : hadith.stageId;

        return (
          <div
            key={hadith.id}
            className="rounded-xl border border-[#E5E7EB] bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#C6A17B] transition"
          >
            <button
              type="button"
              onClick={() => onSelectHadith(hadith)}
              className="flex items-start gap-3 text-left flex-1 min-w-0 group"
            >
              <span className="px-2.5 py-1 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] text-xs font-mono font-bold text-[#374151] shrink-0 mt-0.5">
                #{canonicalIdx}
              </span>

              <div className="min-w-0 space-y-1">
                <h3 className="text-sm font-bold text-[#111827] group-hover:text-[#795A3F] leading-snug transition">
                  {hadith.title}
                </h3>
                <span className="block text-xs text-[#6B7280]">
                  ({stageLabel}) • {hadith.kitab} {hadith.noHadis}
                </span>
              </div>
            </button>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => onRemoveSaved(hadith.id)}
                aria-label={`Hapus ${hadith.title} dari koleksi tersimpan`}
                title="Hapus bookmark"
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#6B7280] hover:text-red-700 hover:bg-red-50 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectHadith(hadith)}
                aria-label={`Baca detail ${hadith.title}`}
                className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#795A3F] hover:bg-[#F6F1EA] transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
