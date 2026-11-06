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
      <div className="px-5 py-3.5 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 bg-white">
        <h2 id="filter-sheet-title" className="text-base font-bold text-[#111827] tracking-wide">
          Filter Topik
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Filter Topik"
          className="min-w-[44px] min-h-[44px] -mr-2 rounded-xl flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#F9F7F5] transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="px-5 py-4 overflow-y-auto space-y-6 flex-1 bg-white">
        {/* 8 Bab Siklus Kehidupan */}
        <div>
          <h3 className="text-xs font-bold text-[#111827] mb-2.5">
            8 Bab Siklus Kehidupan
          </h3>
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setDraftStageId('all')}
              className="w-full min-h-[44px] px-2 py-2 rounded-xl flex items-center gap-3 text-left hover:bg-[#F9F7F5] transition"
            >
              <span
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  draftStageId === 'all' ? 'border-[#795A3F]' : 'border-[#D1D5DB]'
                }`}
              >
                {draftStageId === 'all' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#795A3F]" />
                )}
              </span>
              <span
                className={`text-sm ${
                  draftStageId === 'all' ? 'font-bold text-[#111827]' : 'text-[#4B5563]'
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
                  className="w-full min-h-[44px] px-2 py-2 rounded-xl flex items-center gap-3 text-left hover:bg-[#F9F7F5] transition"
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#795A3F]' : 'border-[#D1D5DB]'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#795A3F]" />
                    )}
                  </span>
                  <span
                    className={`text-sm ${
                      isSelected ? 'font-bold text-[#111827]' : 'text-[#4B5563]'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tag Populer (Academic Chips without #) */}
        <div>
          <h3 className="text-xs font-bold text-[#111827] mb-2.5">
            Tag Populer
          </h3>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => {
              const isSelected = draftTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setDraftTag(isSelected ? null : tag)}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-medium border transition ${
                    isSelected
                      ? 'bg-[#795A3F] text-white border-[#795A3F] font-semibold shadow-xs'
                      : 'bg-[#F3F4F6] text-[#374151] border-[#E5E7EB] hover:border-[#C6A17B]'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="px-5 py-3.5 border-t border-[#E5E7EB] bg-white flex items-center gap-3 pb-[calc(0.875rem+env(safe-area-inset-bottom))] shrink-0">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 min-h-[48px] px-4 rounded-xl border border-[#E5E7EB] bg-[#F9F7F5] hover:bg-[#F3EFEA] text-sm font-semibold text-[#111827] transition"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="flex-[1.4] min-h-[48px] px-5 rounded-xl bg-[#795A3F] hover:bg-[#5C432E] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition"
        >
          <span>Terapkan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </dialog>
  );
};
