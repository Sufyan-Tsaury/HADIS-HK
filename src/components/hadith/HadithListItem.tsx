import React from 'react';
import type { HadithItem } from '../../data/hadiths';
import { STAGES } from '../../data/hadiths';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { Bookmark, ChevronRight } from 'lucide-react';

interface HadithListItemProps {
  hadith: HadithItem;
  canonicalNumber: number;
  isSaved: boolean;
  isActiveDesktop?: boolean;
  onSelect: (hadith: HadithItem) => void;
  onToggleSave: (id: string) => void;
}

export const HadithListItem: React.FC<HadithListItemProps> = ({
  hadith,
  canonicalNumber,
  isSaved,
  isActiveDesktop = false,
  onSelect,
  onToggleSave,
}) => {
  const stage = STAGES.find((s) => s.id === hadith.stageId);
  const stageNumber = STAGES.findIndex((s) => s.id === hadith.stageId) + 1;
  const shortLabel = SHORT_STAGE_LABELS[hadith.stageId] || stage?.title || hadith.stageId;

  return (
    <article
      className={`rounded-xl border transition ${
        isActiveDesktop
          ? 'bg-[#F6F1EA] border-[#795A3F]'
          : 'bg-white border-[#E5E7EB] hover:border-[#C6A17B]'
      }`}
    >
      <div className="p-3.5 sm:p-4 flex flex-col gap-2">
        {/* Top Metadata & Bookmark */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F6F1EA] text-[#795A3F] text-[11px] font-semibold">
              <span aria-hidden="true">◆</span>
              <span>{stageNumber}. {shortLabel}</span>
            </span>
            <span className="text-[11px] font-medium text-[#6B7280] truncate">
              #{canonicalNumber} • {hadith.kitab}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(hadith.id);
            }}
            aria-label={isSaved ? 'Hapus dari tersimpan' : 'Simpan hadis'}
            className="min-w-[40px] min-h-[40px] -mr-2 -my-1.5 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#795A3F] hover:bg-[#F9F7F5] transition shrink-0"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`}
            />
          </button>
        </div>

        {/* Clickable Content Area */}
        <button
          type="button"
          onClick={() => onSelect(hadith)}
          className="text-left group space-y-2 w-full"
        >
          <h3 className="text-sm sm:text-[15px] font-bold text-[#111827] group-hover:text-[#795A3F] leading-snug transition">
            {hadith.title}
          </h3>

          <p
            dir="rtl"
            className="font-arabic text-base text-[#374151] line-clamp-1 text-right"
          >
            {hadith.matnArab}
          </p>

          <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed">
            &ldquo;{hadith.terjemahan}&rdquo;
          </p>

          <div className="pt-1 flex items-center justify-between text-[11px] text-[#795A3F] font-semibold">
            <span className="text-[#6B7280] font-normal truncate pr-2">
              {hadith.noHadis} • {hadith.rawi}
            </span>
            <span className="inline-flex items-center gap-0.5 shrink-0">
              <span>Baca Lengkap</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </button>
      </div>
    </article>
  );
};
