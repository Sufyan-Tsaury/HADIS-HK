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
      <div className="rounded-2xl border border-[#D9D0C4] bg-white p-8 text-center space-y-3.5 my-4 shadow-xs">
        <div className="w-12 h-12 rounded-full bg-[#F7F3EF] border border-[#D9D0C4] text-[#301A05] flex items-center justify-center mx-auto">
          <Bookmark className="w-5 h-5 text-[#B09768]" />
        </div>
        <h2 className="text-base font-bold font-display text-[#352719] tracking-wide">
          Belum Ada Hadis Tersimpan
        </h2>
        <p className="text-xs text-[#6B5B49] max-w-xs mx-auto leading-relaxed">
          Tekan ikon marka buku pada riwayat hadis yang sedang Anda kaji untuk menyimpannya di koleksi ini.
        </p>
        <button
          type="button"
          onClick={onBrowseLibrary}
          className="btn-heritage-primary min-h-[44px] px-5 text-xs inline-flex items-center gap-2 shadow-xs"
        >
          <BookOpen className="w-4 h-4" />
          <span>Telusuri Perpustakaan Hadis</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-[#6B5B49] text-center pb-1">
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
            className="rounded-xl border border-[#D9D0C4] bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:border-[#B09768] transition shadow-xs"
          >
            <button
              type="button"
              onClick={() => onSelectHadith(hadith)}
              className="flex items-start gap-3 text-left flex-1 min-w-0 group"
            >
              <span className="px-2.5 py-1 rounded-lg bg-[#F7F3EF] border border-[#D9D0C4] text-xs font-mono font-bold text-[#301A05] shrink-0 mt-0.5">
                #{canonicalIdx}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-[#301A05] mb-0.5">
                  {stageLabel}
                </span>
                <h3 className="text-sm font-bold text-[#352719] group-hover:text-[#301A05] truncate transition">
                  {hadith.title}
                </h3>
                <span className="block text-xs text-[#6B5B49] mt-0.5 truncate">
                  {hadith.kitab} • {hadith.noHadis}
                </span>
              </div>
            </button>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => onRemoveSaved(hadith.id)}
                aria-label={`Hapus hadis #${canonicalIdx} dari tersimpan`}
                className="min-w-[40px] min-h-[40px] rounded-lg text-[#6B5B49] hover:text-rose-700 hover:bg-rose-50 flex items-center justify-center transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectHadith(hadith)}
                aria-label={`Buka detail hadis #${canonicalIdx}`}
                className="min-w-[40px] min-h-[40px] rounded-lg text-[#301A05] hover:bg-[#F7F3EF] flex items-center justify-center transition"
              >
                <ChevronRight className="w-5 h-5 text-[#B09768]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
