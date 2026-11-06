import React from 'react';
import type { HadithItem } from '../../data/hadiths';
import { STAGES } from '../../data/hadiths';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { Bookmark, ArrowRight } from 'lucide-react';

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
      className={`rounded-2xl border transition ${
        isActiveDesktop
          ? 'bg-[#F9F7F5] border-[#C6A17B] shadow-xs'
          : 'bg-white border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-[#F9F7F5]/40 hover:shadow-xs'
      }`}
    >
      <div className="p-3.5 sm:p-4 flex flex-col gap-2">
        {/* Top Metadata & Bookmark Matching Reference Screen 8 */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F9F7F5] border border-[#E5E7EB] text-[#795A3F] text-[11px] font-semibold">
              <span className="text-[#C6A17B]" aria-hidden="true">◆</span>
              <span>{stageNumber}. {shortLabel}</span>
            </span>
            <span className="text-[11px] font-medium text-[#6B7280] truncate">
              #{canonicalNumber} • {hadith.kitab} • {hadith.noHadis}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(hadith.id);
            }}
            aria-label={isSaved ? 'Hapus dari tersimpan' : 'Simpan hadis'}
            className="min-w-[36px] min-h-[36px] -mr-1.5 -my-1 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#795A3F] hover:bg-[#F9F7F5] transition shrink-0"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`}
            />
          </button>
        </div>

        {/* Clickable Content Area: Title & Primary Scholar Info */}
        <button
          type="button"
          onClick={() => onSelect(hadith)}
          className="text-left group space-y-2 w-full pt-0.5"
        >
          <h3 className="text-sm sm:text-[15px] font-bold text-[#111827] group-hover:text-[#795A3F] leading-snug transition">
            {hadith.title}
          </h3>

          <div className="pt-1.5 flex items-center justify-between text-[11px] text-[#6B7280] border-t border-[#F3EFEA]">
            <span className="font-normal truncate pr-2">
              Perawi: <strong className="font-medium text-[#374151]">{hadith.rawi}</strong>
            </span>
            <span className="inline-flex items-center gap-1 shrink-0 text-[#795A3F] font-semibold group-hover:text-[#5C432E] transition">
              <span>Baca Hadis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </button>
      </div>
    </article>
  );
};
