import React, { useEffect, useRef, useState } from 'react';
import { STAGES, POPULAR_TAGS } from '../../data/hadiths';
import { X, ArrowRight } from 'lucide-react';

interface FilterBottomSheetProps {
  isOpen: boolean;
  selectedStageId: string;
  selectedTag: string | null;
  onApply: (stageId: string, tag: string | null) => void;
  onClose: () => void;
}

export const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  isOpen,
  selectedStageId,
  selectedTag,
  onApply,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [draftStageId, setDraftStageId] = useState<string>(selectedStageId);
  const [draftTag, setDraftTag] = useState<string | null>(selectedTag);
  const [prevOpen, setPrevOpen] = useState<boolean>(isOpen);

  if (isOpen !== prevOpen) {
    setPrevOpen(isOpen);
    if (isOpen) {
      setDraftStageId(selectedStageId);
      setDraftTag(selectedTag);
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Fallback for browsers without native closedby="any" support (e.g., Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCloseEvent = () => {
      dialog.returnValue = '';
      onClose();
    };

    dialog.addEventListener('close', handleCloseEvent);

    let cleanupFallback: (() => void) | undefined;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isDialogContent) {
          dialog.close();
        }
      };
      dialog.addEventListener('click', handleBackdropClick);
      cleanupFallback = () => dialog.removeEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleCloseEvent);
      if (cleanupFallback) cleanupFallback();
    };
  }, [onClose]);

  const handleReset = () => {
    setDraftStageId('all');
    setDraftTag(null);
  };

  const handleApply = () => {
    onApply(draftStageId, draftTag);
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as any)}
      aria-labelledby="filter-sheet-title"
      className="bottom-sheet-dialog shadow-2xl"
    >
      {/* Drag Handle Visual Indicator */}
      <div className="pt-2.5 pb-1 flex justify-center sm:hidden">
        <span className="w-10 h-1 rounded-full bg-[#D9D0C4]" />
      </div>

      {/* Header */}
      <div className="px-5 py-3.5 border-b border-[#D9D0C4] flex items-center justify-between shrink-0 bg-[#FDF9F5]">
        <h2 id="filter-sheet-title" className="text-base font-bold font-display text-[#352719] tracking-wide">
          Filter Topik Hadis
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Filter Topik"
          className="min-w-[44px] min-h-[44px] -mr-2 rounded-xl flex items-center justify-center text-[#6B5B49] hover:text-[#352719] hover:bg-[#F7F3EF] transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="px-5 py-4 overflow-y-auto space-y-6 flex-1 bg-[#FDF9F5]">
        {/* 8 Bab Siklus Kehidupan */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#352719] mb-2.5">
            8 Bab Siklus Kehidupan
          </h3>
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setDraftStageId('all')}
              className="w-full min-h-[44px] px-2 py-2 rounded-xl flex items-center gap-3 text-left hover:bg-[#F7F3EF] transition"
            >
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  draftStageId === 'all' ? 'border-[#301A05]' : 'border-[#D9D0C4]'
                }`}
              >
                {draftStageId === 'all' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#301A05]" />
                )}
              </span>
              <span
                className={`text-sm ${
                  draftStageId === 'all' ? 'font-bold text-[#352719]' : 'text-[#6B5B49]'
                }`}
              >
                Semua Bab
              </span>
            </button>

            {STAGES.map((stage) => {
              const isSelected = draftStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setDraftStageId(stage.id)}
                  className="w-full min-h-[44px] px-2 py-2 rounded-xl flex items-center gap-3 text-left hover:bg-[#F7F3EF] transition"
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#301A05]' : 'border-[#D9D0C4]'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#301A05]" />
                    )}
                  </span>
                  <span
                    className={`text-sm ${
                      isSelected ? 'font-bold text-[#352719]' : 'text-[#6B5B49]'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Tag Permasalahan Keluarga */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#352719] mb-2.5">
            Tag Populer (12 Isu Keluarga)
          </h3>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => {
              const isSelected = draftTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setDraftTag(isSelected ? null : tag)}
                  className={`min-h-[40px] px-3.5 py-1.5 rounded-full text-xs font-medium border transition ${
                    isSelected
                      ? 'bg-[#301A05] text-[#FFF9F5] border-[#301A05] font-semibold shadow-xs'
                      : 'bg-white text-[#352719] border-[#D9D0C4] hover:border-[#B09768]'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="px-5 py-3.5 border-t border-[#D9D0C4] bg-[#FDF9F5] flex items-center gap-3 pb-[calc(0.875rem+env(safe-area-inset-bottom))] shrink-0">
        <button
          type="button"
          onClick={handleReset}
          className="btn-heritage-soft flex-1 min-h-[48px] px-4 text-sm"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="btn-heritage-primary flex-[1.4] min-h-[48px] px-5 text-sm flex items-center justify-center gap-2 shadow-sm"
        >
          <span>Terapkan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </dialog>
  );
};
