import React, { useState } from 'react';
import { STAGES, HADITHS_DATA } from '../../data/hadiths';
import { StageIcon } from '../navigation/StageIcon';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import { ChevronRight, ChevronUp, Layers } from 'lucide-react';

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

  const firstFourStages = STAGES.slice(0, 4);
  const remainingStages = STAGES.slice(4);

  return (
    <section aria-labelledby="siklus-heading" className="space-y-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#301A05]" />
          <h2 id="siklus-heading" className="text-sm font-bold text-[#352719] font-display tracking-wide">
            8 Siklus Kehidupan Keluarga
          </h2>
        </div>
        <span className="text-xs text-[#6B5B49] font-medium">
          {HADITHS_DATA.length} Hadis Kanonik
        </span>
      </div>

      {/* 4-Column Feature Shortcut Grid (From DESIGN.md §5.4) */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {firstFourStages.map((stage) => {
          const isSelected = selectedStageId === stage.id;
          const count = stageCounts[stage.id] || 0;
          const shortLabel = SHORT_STAGE_LABELS[stage.id] || stage.title;

          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`min-h-[72px] sm:min-h-[78px] p-2 rounded-xl border flex flex-col items-center justify-center text-center gap-1.5 transition ${
                isSelected
                  ? 'bg-[#301A05] text-[#FFF9F5] border-[#4C2605] shadow-xs'
                  : 'bg-white text-[#352719] border-[#D9D0C4] hover:border-[#B09768] hover:bg-[#F7F3EF]'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#4C2605] text-[#C7B39C]' : 'bg-[#F7F3EF] text-[#301A05]'
                }`}
              >
                <StageIcon stageId={stage.id} className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                {shortLabel}
              </span>
              <span
                className={`text-[10px] leading-none ${
                  isSelected ? 'text-[#C7B39C]' : 'text-[#6B5B49]'
                }`}
              >
                {count} hadis
              </span>
            </button>
          );
        })}
      </div>

      {/* Remaining 4 Stages (Toggleable or Expandable List) */}
      {showAll && (
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 pt-1 animate-fadeIn">
          {remainingStages.map((stage) => {
            const isSelected = selectedStageId === stage.id;
            const count = stageCounts[stage.id] || 0;
            const shortLabel = SHORT_STAGE_LABELS[stage.id] || stage.title;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelectStage(stage.id)}
                className={`min-h-[72px] sm:min-h-[78px] p-2 rounded-xl border flex flex-col items-center justify-center text-center gap-1.5 transition ${
                  isSelected
                    ? 'bg-[#301A05] text-[#FFF9F5] border-[#4C2605] shadow-xs'
                    : 'bg-white text-[#352719] border-[#D9D0C4] hover:border-[#B09768] hover:bg-[#F7F3EF]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#4C2605] text-[#C7B39C]' : 'bg-[#F7F3EF] text-[#301A05]'
                  }`}
                >
                  <StageIcon stageId={stage.id} className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                  {shortLabel}
                </span>
                <span
                  className={`text-[10px] leading-none ${
                    isSelected ? 'text-[#C7B39C]' : 'text-[#6B5B49]'
                  }`}
                >
                  {count} hadis
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Expand / Collapse Button */}
      <div className="pt-0.5">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-[#D9D0C4] bg-[#F7F3EF] hover:bg-white hover:border-[#B09768] text-[#352719] text-xs font-semibold flex items-center justify-center gap-2 transition"
        >
          {showAll ? (
            <>
              <span>Tampilkan 4 Bab Inti Saja</span>
              <ChevronUp className="w-4 h-4 text-[#6B5B49]" />
            </>
          ) : (
            <>
              <span>Lihat Seluruh Bab (8 Siklus Kehidupan)</span>
              <ChevronRight className="w-4 h-4 text-[#B09768]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
