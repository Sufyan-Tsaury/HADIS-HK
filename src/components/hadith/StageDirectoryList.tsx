import React, { useState } from 'react';
import { STAGES, HADITHS_DATA } from '../../data/hadiths';
import { StageIcon } from '../navigation/StageIcon';
import { ArrowRight, ChevronRight, ChevronUp } from 'lucide-react';

interface StageDirectoryListProps {
  selectedStageId: string;
  onSelectStage: (stageId: string) => void;
}

export const StageDirectoryList: React.FC<StageDirectoryListProps> = ({
  selectedStageId,
  onSelectStage,
}) => {
  const [showAll, setShowAll] = useState(false);

  const stageCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (const h of HADITHS_DATA) {
      counts[h.stageId] = (counts[h.stageId] || 0) + 1;
    }
    return counts;
  }, []);

  const visibleStages = showAll ? STAGES : STAGES.slice(0, 4);

  return (
    <section aria-labelledby="siklus-heading" className="space-y-2.5">
      <div className="flex items-center justify-between">
        <h2 id="siklus-heading" className="text-sm font-bold text-[#111827]">
          8 Siklus Kehidupan
        </h2>
        <span className="text-xs text-[#6B7280]">
          {HADITHS_DATA.length} hadis kanonik
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {visibleStages.map((stage) => {
          const isSelected = selectedStageId === stage.id;
          const count = stageCounts[stage.id] || 0;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`w-full min-h-[60px] p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition ${
                isSelected
                  ? 'bg-[#F6F1EA] border-[#795A3F]'
                  : 'bg-white border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-[#F9F7F5]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#795A3F] text-white flex items-center justify-center shrink-0">
                  <StageIcon stageId={stage.id} className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-[#111827] truncate">
                    {stage.title}
                  </span>
                  <span className="block text-xs text-[#6B7280] mt-0.5">
                    {count} hadis
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7280] shrink-0" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setShowAll(!showAll)}
        className="btn-soft w-full min-h-[44px] py-2.5 px-4 text-xs flex items-center justify-center gap-1.5"
      >
        {showAll ? (
          <>
            <span>Ringkas Daftar Bab</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Lihat Semua Bab (8 Siklus)</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </section>
  );
};
