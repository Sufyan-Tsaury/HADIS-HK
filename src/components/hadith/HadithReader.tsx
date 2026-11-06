import React, { useState } from 'react';
import type { HadithItem } from '../../data/hadiths';
import { STAGES } from '../../data/hadiths';
import { SHORT_STAGE_LABELS } from '../navigation/stageLabels';
import {
  Bookmark,
  Share2,
  Copy,
  Check,
  Volume2,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface HadithReaderProps {
  hadith: HadithItem;
  canonicalNumber: number;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenQuote: (hadith: HadithItem) => void;
  onSelectTag?: (tag: string) => void;
}

export const HadithReader: React.FC<HadithReaderProps> = ({
  hadith,
  canonicalNumber,
  isSaved,
  onToggleSave,
  onOpenQuote,
  onSelectTag,
}) => {
  const [activeTab, setActiveTab] = useState<'mubadalah' | 'mazhab' | 'konvensional'>('mubadalah');
  const [showSanad, setShowSanad] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  // rem-based step scale (1.5rem = 24px default, scalable from 1.15rem to 2.25rem)
  const [arabicScaleRem, setArabicScaleRem] = useState<number>(1.5);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const stageIdx = STAGES.findIndex((s) => s.id === hadith.stageId);
  const stage = stageIdx >= 0 ? STAGES[stageIdx] : undefined;
  const shortStage = SHORT_STAGE_LABELS[hadith.stageId] || stage?.title || hadith.stageId;

  const handleCopy = () => {
    let text = `${hadith.title}\n\n`;
    if (hadith.sanadArab) {
      text += `[Teks Sanad Arab]\n${hadith.sanadArab}\n\n`;
    }
    text += `[Teks Matn Arab]\n${hadith.matnArab}\n\n`;
    if (hadith.terjemahanSanad) {
      text += `Terjemahan Sanad:\n${hadith.terjemahanSanad}\n\n`;
    }
    text += `Terjemahan Sabda:\n"${hadith.terjemahan}"\n\n`;
    text += `Takhrij Sumber:\n• Kitab: ${hadith.kitab}\n• Bab: ${hadith.kitabBab}\n• Nomor Hadis: ${hadith.noHadis}\n• Perawi Utama: ${hadith.rawi}\n\n`;
    text += `Perbandingan 4 Mazhab & KHI:\n`;
    text += `• Mazhab Hanafi: ${hadith.perbandinganMazhab.hanafi}\n`;
    text += `• Mazhab Maliki: ${hadith.perbandinganMazhab.maliki}\n`;
    text += `• Mazhab Syafi'i: ${hadith.perbandinganMazhab.syafii}\n`;
    text += `• Mazhab Hanbali: ${hadith.perbandinganMazhab.hanbali}\n`;
    text += `• KHI & Konteks Indonesia: ${hadith.perbandinganMazhab.khiDanKonteks}\n\n`;
    text += `Pembacaan Mubadalah (Kesalingan):\n${hadith.pemaknaanMubadalah.ringkasan}\n\n`;
    text += `— Hadis HK (Platform Digital Hadis Hukum Keluarga Islam)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePlayAudio = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    window.speechSynthesis.cancel();
    const readText = `${hadith.title}. ${hadith.terjemahan}`;
    const utterance = new SpeechSynthesisUtterance(readText);
    utterance.lang = 'id-ID';
    utterance.rate = 0.94;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <article className="bg-white space-y-5">
      {/* 1. Category Badge, Number & Title */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F9F7F5] border border-[#E5E7EB] text-[#795A3F] text-xs font-semibold">
            <span className="text-[#C6A17B]" aria-hidden="true">◆</span>
            <span>
              {stageIdx >= 0 ? `${stageIdx + 1}. ` : ''}
              {shortStage}
            </span>
          </span>
          <span className="text-xs text-[#6B7280]">
            Perawi: <strong className="font-semibold text-[#111827]">{hadith.rawi}</strong>
          </span>
        </div>

        <p className="text-xs font-medium text-[#6B7280]">
          #{canonicalNumber} • {hadith.kitab} • No. {hadith.noHadis}
        </p>

        <h2 className="text-lg sm:text-xl font-bold text-[#111827] leading-snug tracking-wide">
          {hadith.title}
        </h2>
      </div>

      {/* 2. Reader Control Pill Bar (Single-Row Toolbar) */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9F7F5] px-2.5 sm:px-3 py-1 flex items-center justify-between gap-1 shadow-xs">
        {/* Toggle Switch Sanad */}
        <button
          type="button"
          role="switch"
          aria-checked={showSanad}
          onClick={() => setShowSanad(!showSanad)}
          className="min-h-[44px] px-1.5 sm:px-2 rounded-xl flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#111827] hover:bg-white transition shrink-0"
        >
          <span
            className={`w-8 sm:w-9 h-[18px] sm:h-5 rounded-full p-0.5 transition-colors flex items-center ${
              showSanad ? 'bg-[#795A3F] justify-end' : 'bg-[#D1D5DB] justify-start'
            }`}
          >
            <span className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-white shadow-xs" />
          </span>
          <span>Sanad</span>
        </button>

        {/* Action Buttons Group */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setArabicScaleRem((prev) => Math.max(1.15, Number((prev - 0.15).toFixed(2))))}
            aria-label="Perkecil ukuran teks Arab"
            title="Perkecil teks Arab"
            className="w-8 sm:w-10 min-h-[44px] rounded-xl text-xs font-bold text-[#111827] hover:text-[#795A3F] hover:bg-white transition flex items-center justify-center"
          >
            A-
          </button>
          <button
            type="button"
            onClick={() => setArabicScaleRem((prev) => Math.min(2.25, Number((prev + 0.15).toFixed(2))))}
            aria-label="Perbesar ukuran teks Arab"
            title="Perbesar teks Arab"
            className="w-8 sm:w-10 min-h-[44px] rounded-xl text-xs font-bold text-[#111827] hover:text-[#795A3F] hover:bg-white transition flex items-center justify-center"
          >
            A+
          </button>

          <span className="w-px h-4 sm:h-5 bg-[#E5E7EB] mx-0.5" aria-hidden="true" />

          <button
            type="button"
            onClick={handlePlayAudio}
            aria-label={isPlayingAudio ? 'Hentikan pembacaan audio' : 'Dengarkan audio terjemahan'}
            title="Audio TTS Bahasa Indonesia"
            className={`w-8 sm:w-10 min-h-[44px] rounded-xl flex items-center justify-center transition ${
              isPlayingAudio
                ? 'bg-[#795A3F] text-white'
                : 'text-[#111827] hover:text-[#795A3F] hover:bg-white'
            }`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Salin teks hadis dan takhrij lengkap"
            title="Salin kutipan lengkap"
            className="w-8 sm:w-10 min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:text-[#795A3F] hover:bg-white transition"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-700" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onOpenQuote(hadith)}
            aria-label="Buka Studio Kartu Kutipan"
            title="Ekspor Kartu Kutipan"
            className="w-8 sm:w-10 min-h-[44px] rounded-xl flex items-center justify-center text-[#795A3F] hover:bg-white transition"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onToggleSave(hadith.id)}
            aria-label={isSaved ? 'Hapus dari koleksi tersimpan' : 'Simpan ke koleksi'}
            title={isSaved ? 'Tersimpan' : 'Simpan hadis'}
            className="w-8 sm:w-10 min-h-[44px] rounded-xl flex items-center justify-center text-[#111827] hover:text-[#795A3F] hover:bg-white transition"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? 'text-[#795A3F] fill-[#795A3F]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* 3. Classical Editorial Arabic Section (Sanad + Matn) */}
      <div className="py-2 space-y-5">
        {showSanad && hadith.sanadArab && (
          <div className="space-y-2.5 pb-5 border-b border-dashed border-[#E5E7EB]">
            <div className="text-center">
              <span
                dir="rtl"
                className="font-arabic text-base sm:text-lg font-bold text-[#795A3F] inline-block tracking-wide"
              >
                سَنَدُ الرِّوَايَةِ
              </span>
            </div>
            <p
              dir="rtl"
              style={{ fontSize: `${Math.max(1.05, Number((arabicScaleRem - 0.22).toFixed(2)))}rem` }}
              className="font-arabic text-center sm:text-right text-[#4B5563] select-text px-1 leading-loose"
            >
              {hadith.sanadArab}
            </p>
          </div>
        )}

        <div className="space-y-2.5">
          <div className="text-center">
            <span
              dir="rtl"
              className="font-arabic text-base sm:text-lg font-bold text-[#795A3F] inline-block tracking-wide"
            >
              نَصُّ الْمَتْنِ
            </span>
          </div>
          <p
            dir="rtl"
            style={{ fontSize: `${arabicScaleRem}rem` }}
            className="font-arabic font-bold text-center text-[#111827] select-text px-1 leading-loose"
          >
            {hadith.matnArab}
          </p>
        </div>
      </div>

      {/* 4. Warm Translation Callout & Takhrij Matching Screen 2 */}
      <div className="space-y-3">
        <div className="rounded-2xl bg-[#F9F7F5] border border-[#E5E7EB] p-4 sm:p-5 space-y-2.5">
          {showSanad && hadith.terjemahanSanad && (
            <div className="pb-2 border-b border-[#E5E7EB]">
              <span className="block text-[11px] font-bold text-[#795A3F] mb-0.5">
                Terjemahan Sanad:
              </span>
              <p className="text-xs text-[#6B7280] italic leading-relaxed">
                {hadith.terjemahanSanad}
              </p>
            </div>
          )}

          <div>
            <span className="block text-xs font-bold text-[#795A3F] mb-1">
              Terjemahan:
            </span>
            <p className="text-sm sm:text-[15px] text-[#111827] leading-relaxed font-normal">
              &ldquo;{hadith.terjemahan}&rdquo;
            </p>
          </div>
        </div>

        <p className="text-xs text-[#6B7280] leading-relaxed">
          <strong className="font-bold text-[#111827]">Takhrij:</strong> {hadith.kitab},{' '}
          {hadith.kitabBab}, {hadith.noHadis}.
        </p>
      </div>

      {/* 5. 3-Tab Scholarly Analysis (Single Row Grid) */}
      <div className="pt-1">
        <div
          role="tablist"
          aria-label="Analisis Hadis"
          className="grid grid-cols-3 border-b border-[#E5E7EB]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'mubadalah'}
            onClick={() => setActiveTab('mubadalah')}
            className={`min-h-[44px] px-1.5 py-2 text-xs font-semibold text-center border-b-2 transition ${
              activeTab === 'mubadalah'
                ? 'border-[#795A3F] text-[#795A3F]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Mubadalah
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'mazhab'}
            onClick={() => setActiveTab('mazhab')}
            className={`min-h-[44px] px-1.5 py-2 text-xs font-semibold text-center border-b-2 transition ${
              activeTab === 'mazhab'
                ? 'border-[#795A3F] text-[#795A3F]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            4 Mazhab &amp; KHI
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'konvensional'}
            onClick={() => setActiveTab('konvensional')}
            className={`min-h-[44px] px-1.5 py-2 text-xs font-semibold text-center border-b-2 transition ${
              activeTab === 'konvensional'
                ? 'border-[#795A3F] text-[#795A3F]'
                : 'border-transparent text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Fiqh Arus Utama
          </button>
        </div>

        {/* Tab 1: Mubadalah */}
        {activeTab === 'mubadalah' && (
          <div className="py-4 space-y-3.5">
            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-4 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#795A3F]">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Makna Mubadalah (Kesalingan)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111827] leading-relaxed">
                {hadith.pemaknaanMubadalah.ringkasan}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F9F7F5] border border-[#E5E7EB] p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wide text-[#795A3F] mb-1">
                &lsquo;Illat Hukum &amp; Tujuan Etis:
              </span>
              <p className="text-xs text-[#111827] leading-relaxed">
                {hadith.pemaknaanMubadalah.illatHukum}
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-bold text-[#111827]">
                Prinsip Resiprokal Suami-Istri:
              </span>
              {hadith.pemaknaanMubadalah.poinKesalingan.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111827]">
                  <CheckCircle2 className="w-4 h-4 text-[#795A3F] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: 4 Mazhab & KHI */}
        {activeTab === 'mazhab' && (
          <div className="py-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Hanafi</span>
                  <span className="text-[10px] font-medium text-[#6B7280] bg-[#F9F7F5] px-2 py-0.5 rounded">
                    Abu Hanifah
                  </span>
                </div>
                <p className="text-xs text-[#111827] leading-relaxed">
                  {hadith.perbandinganMazhab.hanafi}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Maliki</span>
                  <span className="text-[10px] font-medium text-[#6B7280] bg-[#F9F7F5] px-2 py-0.5 rounded">
                    Malik bin Anas
                  </span>
                </div>
                <p className="text-xs text-[#111827] leading-relaxed">
                  {hadith.perbandinganMazhab.maliki}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Syafi&apos;i</span>
                  <span className="text-[10px] font-medium text-[#6B7280] bg-[#F9F7F5] px-2 py-0.5 rounded">
                    Asy-Syafi&apos;i
                  </span>
                </div>
                <p className="text-xs text-[#111827] leading-relaxed">
                  {hadith.perbandinganMazhab.syafii}
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#111827]">Mazhab Hanbali</span>
                  <span className="text-[10px] font-medium text-[#6B7280] bg-[#F9F7F5] px-2 py-0.5 rounded">
                    Ahmad bin Hanbal
                  </span>
                </div>
                <p className="text-xs text-[#111827] leading-relaxed">
                  {hadith.perbandinganMazhab.hanbali}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#C6A17B] bg-[#F9F7F5] space-y-1">
              <span className="block text-xs font-bold text-[#795A3F]">
                Kompilasi Hukum Islam (KHI) &amp; Konteks Indonesia
              </span>
              <p className="text-xs text-[#111827] leading-relaxed">
                {hadith.perbandinganMazhab.khiDanKonteks}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Tinjauan Fiqh Arus Utama */}
        {activeTab === 'konvensional' && (
          <div className="py-4 space-y-3">
            <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <p className="text-xs sm:text-sm text-[#111827] leading-relaxed">
                {hadith.pemaknaanKonvensional.ringkasan}
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-bold text-[#6B7280]">
                Catatan Karakteristik Pembacaan Tekstual:
              </span>
              {hadith.pemaknaanKonvensional.poin.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 6. Kaidah Operasional Pasutri Hari Ini */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 space-y-2.5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-[#795A3F]">
          <Lightbulb className="w-4 h-4 text-[#C6A17B] shrink-0" />
          <span>Kaidah Operasional Pasutri Hari Ini</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {hadith.pemaknaanMubadalah.aplikasiHariIni.map((app, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#111827]">
              <span className="font-mono font-bold text-[#795A3F] shrink-0">{idx + 1}.</span>
              <span className="leading-relaxed">{app}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Pilar Sakinah & Academic Tags */}
      <div className="pt-2 border-t border-[#E5E7EB] space-y-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-semibold text-[#6B7280] mr-1">Pilar Sakinah:</span>
          {hadith.pilarTerkait.map((pilar) => (
            <span
              key={pilar}
              className="px-2.5 py-1 rounded-full bg-[#F9F7F5] border border-[#E5E7EB] text-[11px] font-medium text-[#795A3F]"
            >
              {pilar}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {hadith.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag && onSelectTag(tag)}
              className="min-h-[32px] px-3 py-1 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[11px] text-[#374151] hover:border-[#C6A17B] hover:text-[#795A3F] transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Export CTA Bar inside Reader */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => onOpenQuote(hadith)}
          className="btn-heritage-soft w-full min-h-[46px] px-4 text-xs flex items-center justify-center gap-2"
        >
          <Share2 className="w-4 h-4 text-[#795A3F]" />
          <span>Buat &amp; Unduh Kartu Kutipan Hadis Ini</span>
        </button>
      </div>
    </article>
  );
};
