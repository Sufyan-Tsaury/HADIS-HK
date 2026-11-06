import React from 'react';
import { STAGES } from '../../data/hadiths';
import { SHORT_STAGE_LABELS } from './stageLabels';

interface ChapterStripProps {
  selectedStageId: string;
  totalCount: number;
  onSelectStage: (stageId: string) => void;
}

export const ChapterStrip: React.FC<ChapterStripProps> = ({
  selectedStageId,
  totalCount,
  onSelectStage,
}) => {
  return (
    <nav
      aria-label="Navigasi Bab Siklus Kehidupan"
      className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5 px-4 bg-[#FDF9F5] border-b border-[#D9D0C4]"
    >
      <button
        type="button"
        onClick={() => onSelectStage('all')}
        className={`shrink-0 min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex flex-col items-center justify-center leading-tight border ${
          selectedStageId === 'all'
            ? 'bg-[#301A05] text-[#FFF9F5] border-[#6B5133] shadow-xs'
            : 'bg-[#F7F3EF] text-[#352719] border-[#D9D0C4] hover:border-[#B09768] hover:bg-white'
        }`}
      >
        <span>Semua</span>
        <span className={`text-[10px] ${selectedStageId === 'all' ? 'text-[#C7B39C]' : 'text-[#6B5B49]'}`}>
          ({totalCount})
        </span>
      </button>

      {STAGES.map((stage) => {
        const isActive = selectedStageId === stage.id;
        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => onSelectStage(stage.id)}
            className={`shrink-0 min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap border ${
              isActive
                ? 'bg-[#301A05] text-[#FFF9F5] border-[#6B5133] font-semibold shadow-xs'
                : 'bg-[#F7F3EF] text-[#352719] border-[#D9D0C4] hover:border-[#B09768] hover:bg-white'
            }`}
          >
            {SHORT_STAGE_LABELS[stage.id] || stage.title}
          </button>
        );
      })}
    </nav>
  );
};
