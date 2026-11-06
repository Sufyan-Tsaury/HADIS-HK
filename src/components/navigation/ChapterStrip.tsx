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
      className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5 px-4 bg-white border-b border-[#E5E7EB]"
    >
      <button
        type="button"
        onClick={() => onSelectStage('all')}
        className={`shrink-0 min-h-[42px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex flex-col items-center justify-center leading-tight border ${
          selectedStageId === 'all'
            ? 'bg-[#795A3F] text-white border-[#795A3F] shadow-xs'
            : 'bg-[#F9F7F5] text-[#111827] border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-white'
        }`}
      >
        <span>Semua</span>
        <span className={`text-[10px] ${selectedStageId === 'all' ? 'text-white/80' : 'text-[#6B7280]'}`}>
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
            className={`shrink-0 min-h-[42px] px-3.5 py-2 rounded-xl text-xs font-medium transition whitespace-nowrap border ${
              isActive
                ? 'bg-[#795A3F] text-white border-[#795A3F] font-semibold shadow-xs'
                : 'bg-[#F9F7F5] text-[#111827] border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-white'
            }`}
          >
            {SHORT_STAGE_LABELS[stage.id] || stage.title}
          </button>
        );
      })}
    </nav>
  );
};
