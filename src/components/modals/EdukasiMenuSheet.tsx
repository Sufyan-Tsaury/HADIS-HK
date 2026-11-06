import React, { useEffect, useRef } from 'react';
import { BookOpen, HelpCircle, X, ChevronRight } from 'lucide-react';

interface EdukasiMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPillars: () => void;
  onSelectQuiz: () => void;
}

export const EdukasiMenuSheet: React.FC<EdukasiMenuSheetProps> = ({
  isOpen,
  onClose,
  onSelectPillars,
  onSelectQuiz,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

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
        const isInside =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isInside) dialog.close();
      };
      dialog.addEventListener('click', handleBackdropClick);
      cleanupFallback = () => dialog.removeEventListener('click', handleBackdropClick);
    }

    return () => {
      dialog.removeEventListener('close', handleCloseEvent);
      if (cleanupFallback) cleanupFallback();
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as any)}
      aria-labelledby="edukasi-sheet-title"
      className="bottom-sheet-dialog shadow-2xl"
    >
      <div className="pt-2.5 pb-1 flex justify-center sm:hidden">
        <span className="w-10 h-1 rounded-full bg-[#D9D0C4]" />
      </div>

      <div className="px-5 py-3.5 border-b border-[#D9D0C4] flex items-center justify-between bg-[#FDF9F5]">
        <h2 id="edukasi-sheet-title" className="text-base font-bold font-display text-[#352719] tracking-wide">
          Edukasi &amp; Evaluasi Sakinah
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup menu edukasi"
          className="min-w-[44px] min-h-[44px] -mr-2 rounded-xl flex items-center justify-center text-[#6B5B49] hover:text-[#352719] hover:bg-[#F7F3EF]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-5 space-y-3 pb-[calc(1.25rem+env(safe-area-inset-bottom))] bg-[#FDF9F5]">
        <button
          type="button"
          onClick={() => {
            onClose();
            onSelectPillars();
          }}
          className="w-full min-h-[68px] p-4 rounded-xl border border-[#D9D0C4] bg-white hover:border-[#B09768] hover:bg-[#F7F3EF] flex items-center justify-between gap-3 text-left transition shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#301A05] text-[#FFF9F5] border border-[#6B5133] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-[#C7B39C]" />
            </div>
            <div>
              <span className="block text-sm font-bold font-display text-[#352719] tracking-wide">
                5 Pilar Keluarga Sakinah
              </span>
              <span className="block text-xs text-[#6B5B49] mt-0.5">
                Fondasi Al-Qur&apos;an &amp; implementasi kesalingan rumah tangga
              </span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#B09768] shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => {
            onClose();
            onSelectQuiz();
          }}
          className="w-full min-h-[68px] p-4 rounded-xl border border-[#D9D0C4] bg-white hover:border-[#B09768] hover:bg-[#F7F3EF] flex items-center justify-between gap-3 text-left transition shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#4C2605] text-[#FFF9F5] border border-[#6B5133] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#C7B39C]" />
            </div>
            <div>
              <span className="block text-sm font-bold font-display text-[#352719] tracking-wide">
                Kuis Evaluasi Relasi
              </span>
              <span className="block text-xs text-[#6B5B49] mt-0.5">
                5 soal refleksi mandiri kualitas musyawarah &amp; kesalingan
              </span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#B09768] shrink-0" />
        </button>
      </div>
    </dialog>
  );
};
