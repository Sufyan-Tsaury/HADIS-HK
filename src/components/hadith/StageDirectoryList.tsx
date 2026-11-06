import React, { useState } from 'react';
import { STAGES, HADITHS_DATA } from '../../data/hadiths';
import { StageIcon } from '../navigation/StageIcon';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { ArrowRight, ChevronUp } from 'lucide-react';

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

  const displayedStages = showAll ? STAGES : STAGES.slice(0, 4);

  return (
    <section aria-labelledby="siklus-heading" className="space-y-3">
      <h2 id="siklus-heading" className="text-sm font-bold text-[#111827] tracking-wide">
        8 Siklus Kehidupan
      </h2>

      {/* Vertical Clean List Matching Screen 1 */}
      <div className="space-y-2">
        {displayedStages.map((stage, idx) => {
          const isSelected = selectedStageId === stage.id;
          const count = stageCounts[stage.id] || 0;
          const shortLabel = SHORT_STAGE_LABELS[stage.id] || stage.title;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`w-full min-h-[56px] p-3 rounded-2xl border flex items-center justify-between text-left transition ${
                isSelected
                  ? 'bg-[#F9F7F5] border-[#C6A17B] shadow-xs'
                  : 'bg-white border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-[#F9F7F5]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-10 h-10 rounded-full bg-[#C6A17B] text-white flex items-center justify-center shrink-0 shadow-xs"
                >
                  <StageIcon stageId={stage.id} className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-[#111827] leading-snug truncate">
                    {idx + 1}. {shortLabel}
                  </span>
                  <span className="block text-xs text-[#6B7280]">
                    {count} hadis
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Button "Lihat Semua Bab →" Matching Screen 1 */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="w-full min-h-[46px] px-4 py-2.5 rounded-2xl bg-[#F9F7F5] border border-[#E5E7EB] hover:bg-[#F3EFEA] text-[#111827] text-xs font-semibold flex items-center justify-center gap-2 transition"
        >
          {showAll ? (
            <>
              <span>Tampilkan 4 Bab Inti</span>
              <ChevronUp className="w-4 h-4 text-[#795A3F]" />
            </>
          ) : (
            <>
              <span>Lihat Semua Bab</span>
              <ArrowRight className="w-4 h-4 text-[#795A3F]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
