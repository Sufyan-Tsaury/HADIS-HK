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
      <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 text-center space-y-3.5 my-4">
        <div className="w-12 h-12 rounded-full bg-[#F9F7F5] border border-[#E5E7EB] text-[#795A3F] flex items-center justify-center mx-auto">
          <Bookmark className="w-5 h-5 text-[#795A3F]" />
        </div>
        <h2 className="text-base font-semibold text-[#111827]">
          Belum Ada Hadis Tersimpan
        </h2>
        <p className="text-xs text-[#6B7280] max-w-xs mx-auto leading-relaxed">
          Tekan ikon marka buku pada riwayat hadis yang sedang Anda kaji untuk menyimpannya di koleksi ini.
        </p>
        <button
          type="button"
          onClick={onBrowseLibrary}
          className="min-h-[44px] px-5 text-xs font-medium rounded-lg bg-[#795A3F] text-white hover:bg-[#674A32] inline-flex items-center gap-2 transition"
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
            className="rounded-xl border border-[#E5E7EB] bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-gray-300 transition"
          >
            <button
              type="button"
              onClick={() => onSelectHadith(hadith)}
              className="flex items-start gap-3 text-left flex-1 min-w-0 group"
            >
              <span className="px-2.5 py-1 rounded-md bg-[#F9F7F5] border border-[#E5E7EB] text-xs font-mono font-medium text-[#795A3F] shrink-0 mt-0.5">
                #{canonicalIdx}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-[#795A3F] mb-0.5">
                  {stageLabel}
                </span>
                <h3 className="text-sm font-semibold text-[#111827] group-hover:text-[#795A3F] truncate transition">
                  {hadith.title}
                </h3>
                <span className="block text-xs text-[#6B7280] mt-0.5 truncate">
                  {hadith.kitab} • {hadith.noHadis}
                </span>
              </div>
            </button>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => onRemoveSaved(hadith.id)}
                aria-label={`Hapus hadis #${canonicalIdx} dari tersimpan`}
                className="min-w-[40px] min-h-[40px] rounded-lg text-[#6B7280] hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectHadith(hadith)}
                aria-label={`Buka detail hadis #${canonicalIdx}`}
                className="min-w-[40px] min-h-[40px] rounded-lg text-[#111827] hover:bg-gray-100 flex items-center justify-center transition"
              >
                <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
