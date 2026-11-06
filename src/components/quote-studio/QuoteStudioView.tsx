import React, { useState } from 'react';
import type { HadithItem } from '../../data/hadiths';
import { SubpageHeader } from '../layout/AppHeader';
import { Download, Share2, Copy, Check, CheckCircle2, AlertCircle } from 'lucide-react';

interface QuoteStudioViewProps {
  hadith: HadithItem;
  onBack: () => void;
}

type AspectRatio = 'story' | 'square';
type ThemePalette = 'academic-light' | 'manuscript' | 'ink';

export const QuoteStudioView: React.FC<QuoteStudioViewProps> = ({ hadith, onBack }) => {
  const [aspect, setAspect] = useState<AspectRatio>('story');
  const [theme, setTheme] = useState<ThemePalette>('manuscript');
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const wrapTextByWidth = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill = true,
    stroke = true
  ) => {
    ctx.beginPath();
    if (typeof (ctx as any).roundRect === 'function') {
      (ctx as any).roundRect(x, y, width, height, radius);
    } else {
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  };

  // Pure HTML5 Canvas 2D Generator (1080p Studio Output — Zero html2canvas)
  const renderCardToBlob = async (): Promise<Blob> => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Konteks grafis Canvas 2D tidak tersedia pada browser ini.');
    }

    const isStory = aspect === 'story';
    const width = 1080;
    const height = isStory ? 1920 : 1080;
    canvas.width = width;
    canvas.height = height;

    const palette = {
      'academic-light': {
        outerBg: '#FDF9F5',
        cardBg: '#FFFFFF',
        cardBorder: '#D9D0C4',
        brandBox: '#301A05',
        brandText: '#352719',
        mutedText: '#6B5B49',
        quoteText: '#352719',
        arabicText: '#301A05',
        ornamentFill: '#F7F3EF',
        mosquePrimary: '#301A05',
        mosqueSecondary: '#B09768',
      },
      'manuscript': {
        outerBg: '#C8B69F',
        cardBg: '#F8F3EC',
        cardBorder: '#C7B39C',
        brandBox: '#301A05',
        brandText: '#220B02',
        mutedText: '#6B5B49',
        quoteText: '#220B02',
        arabicText: '#4C2605',
        ornamentFill: '#E5DCCF',
        mosquePrimary: '#4C2605',
        mosqueSecondary: '#B09768',
      },
      'ink': {
        outerBg: '#1A0802',
        cardBg: '#220B02',
        cardBorder: '#6B5133',
        brandBox: '#B09768',
        brandText: '#FFF9F5',
        mutedText: '#D9D0C4',
        quoteText: '#FFF9F5',
        arabicText: '#C7B39C',
        ornamentFill: '#301A05',
        mosquePrimary: '#4C2605',
        mosqueSecondary: '#B09768',
      },
    }[theme];

    // 1. Background
    ctx.fillStyle = palette.outerBg;
    ctx.fillRect(0, 0, width, height);

    const marginX = isStory ? 64 : 54;
    const marginY = isStory ? 76 : 54;
    const cardW = width - marginX * 2;
    const cardH = height - marginY * 2;

    ctx.fillStyle = palette.cardBg;
    ctx.strokeStyle = palette.cardBorder;
    ctx.lineWidth = 3;
    drawRoundedRect(ctx, marginX, marginY, cardW, cardH, 36, true, true);

    // 2. Subtle Botanical / Arch Ornament in Top-Right & Bottom-Right (Mosque Silhouette)
    ctx.save();
    ctx.beginPath();
    drawRoundedRect(ctx, marginX, marginY, cardW, cardH, 36, false, false);
    ctx.clip();

    // Soft top-right botanical arc
    ctx.fillStyle = palette.ornamentFill;
    ctx.beginPath();
    ctx.arc(marginX + cardW - 40, marginY + 40, isStory ? 190 : 140, 0, Math.PI * 2);
    ctx.fill();

    // Architectural Mosque Silhouette at Bottom-Right
    const baseBottom = marginY + cardH;
    const mosqueRight = marginX + cardW - 40;

    // Minaret
    ctx.fillStyle = palette.mosquePrimary;
    ctx.fillRect(mosqueRight - 56, baseBottom - (isStory ? 260 : 190), 28, isStory ? 260 : 190);
    ctx.beginPath();
    ctx.moveTo(mosqueRight - 42, baseBottom - (isStory ? 305 : 225));
    ctx.lineTo(mosqueRight - 22, baseBottom - (isStory ? 260 : 190));
    ctx.lineTo(mosqueRight - 62, baseBottom - (isStory ? 260 : 190));
    ctx.closePath();
    ctx.fill();

    // Main Dome
    const domeCenterX = mosqueRight - 155;
    const domeBaseY = baseBottom - (isStory ? 115 : 85);
    ctx.fillStyle = palette.mosqueSecondary;
    ctx.beginPath();
    ctx.arc(domeCenterX, domeBaseY, isStory ? 82 : 62, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = palette.mosquePrimary;
    ctx.fillRect(domeCenterX - (isStory ? 95 : 72), domeBaseY, isStory ? 190 : 144, isStory ? 115 : 85);
    ctx.restore();

    // 3. Brand Lockup (Top-Left inside Card)
    const padX = isStory ? 76 : 68;
    const leftX = marginX + padX;
    const rightX = marginX + cardW - padX;
    const contentW = rightX - leftX;

    const headerY = marginY + (isStory ? 74 : 60);
    ctx.fillStyle = palette.brandBox;
    drawRoundedRect(ctx, leftX, headerY, 64, 64, 16, true, false);

    ctx.fillStyle = theme === 'ink' ? '#231F1C' : '#FFFFFF';
    ctx.font = 'bold 26px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HK', leftX + 32, headerY + 41);

    ctx.textAlign = 'left';
    ctx.fillStyle = palette.brandText;
    ctx.font = 'bold 28px Inter, system-ui, sans-serif';
    ctx.fillText('Hadis HK', leftX + 82, headerY + 30);

    ctx.fillStyle = palette.mutedText;
    ctx.font = '500 18px Inter, system-ui, sans-serif';
    ctx.fillText('Riset Hadis • Hukum Keluarga Islam', leftX + 82, headerY + 56);

    // 4. Centered Arabic Matn (if Story or concise) & Main Quote
    const centerX = width / 2;
    let cursorY = isStory ? marginY + 310 : marginY + 215;

    if (isStory) {
      ctx.font = "40px 'Amiri', 'Traditional Arabic', serif";
      ctx.fillStyle = palette.arabicText;
      ctx.textAlign = 'center';
      const arabLines = wrapTextByWidth(ctx, hadith.matnArab, contentW - 30).slice(0, 4);
      for (const line of arabLines) {
        ctx.fillText(line, centerX, cursorY);
        cursorY += 80;
      }
      cursorY += 48;
    }

    // Main Indonesian Quote
    const quoteDisplay = `“${hadith.terjemahan.length <= 210 ? hadith.terjemahan : hadith.quoteSnippet}”`;
    ctx.font = isStory
      ? "600 44px 'Amiri', Georgia, serif"
      : "600 36px 'Amiri', Georgia, serif";
    ctx.fillStyle = palette.quoteText;
    ctx.textAlign = 'center';

    const quoteLineHeight = isStory ? 66 : 52;
    const quoteLines = wrapTextByWidth(ctx, quoteDisplay, contentW - 20).slice(0, isStory ? 9 : 7);

    if (!isStory) {
      const blockH = quoteLines.length * quoteLineHeight;
      cursorY = Math.max(marginY + 210, (height - blockH) / 2 - 20);
    }

    for (const line of quoteLines) {
      ctx.fillText(line, centerX, cursorY);
      cursorY += quoteLineHeight;
    }

    // 5. Source Citation
    cursorY += isStory ? 44 : 32;
    ctx.font = isStory ? '600 26px Inter, system-ui, sans-serif' : '600 22px Inter, system-ui, sans-serif';
    ctx.fillStyle = palette.arabicText;
    ctx.fillText(`— ${hadith.kitab}`, centerX, cursorY);

    ctx.font = isStory ? '500 22px Inter, system-ui, sans-serif' : '500 19px Inter, system-ui, sans-serif';
    ctx.fillStyle = palette.mutedText;
    ctx.fillText(hadith.noHadis, centerX, cursorY + 34);

    // 6. Subtle Footer URL on Bottom-Left
    ctx.textAlign = 'left';
    ctx.font = '500 18px Inter, system-ui, sans-serif';
    ctx.fillStyle = palette.mutedText;
    ctx.fillText('Hadis Hukum Keluarga Islam • Qira’ah Mubadalah', leftX, marginY + cardH - 48);

    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Gagal membuat berkas gambar PNG dari Canvas.'));
      }, 'image/png');
    });
  };

  const handleDownload = async () => {
    setIsExporting(true);
    setErrorMessage(null);
    try {
      const blob = await renderCardToBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `hadis-hk-${hadith.id}-${aspect}-${theme}.png`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsExporting(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 2600);
      }, 150);
    } catch (err: any) {
      setIsExporting(false);
      setErrorMessage(err?.message || 'Terjadi kendala saat mengunduh gambar.');
    }
  };

  const handleShare = async () => {
    setErrorMessage(null);
    setShareFeedback(null);
    try {
      const blob = await renderCardToBlob();
      const file = new File([blob], `hadis-hk-${hadith.id}.png`, { type: 'image/png' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: hadith.title,
          text: `"${hadith.quoteSnippet}" — ${hadith.kitab} (${hadith.noHadis})`,
          files: [file],
        });
        setShareFeedback('Kartu berhasil dibagikan!');
      } else if (navigator.share) {
        await navigator.share({
          title: hadith.title,
          text: `"${hadith.terjemahan}" — ${hadith.kitab} (${hadith.noHadis})`,
        });
        setShareFeedback('Tautan kutipan dibagikan!');
      } else {
        await navigator.clipboard.writeText(
          `"${hadith.terjemahan}"\n— ${hadith.kitab} (${hadith.noHadis})\n\nHadis HK`
        );
        setShareFeedback('Browser belum mendukung share file; teks kutipan disalin ke clipboard.');
      }
      setTimeout(() => setShareFeedback(null), 3000);
    } catch (err: any) {
      if (err?.name !== 'AbortError') {
        setErrorMessage('Gagal membagikan kartu secara langsung. Silakan gunakan tombol Unduh Gambar.');
      }
    }
  };

  const handleCopyText = () => {
    const text = `${hadith.title}\n\n${hadith.matnArab}\n\n"${hadith.terjemahan}"\n\n— ${hadith.kitab}, ${hadith.noHadis} (Perawi: ${hadith.rawi})\n\nRefleksi Mubadalah:\n${hadith.pemaknaanMubadalah.ringkasan}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const previewThemeClass = {
    'academic-light': 'bg-white text-[#352719] border-[#D9D0C4]',
    'manuscript': 'bg-[#F8F3EC] text-[#220B02] border-[#C7B39C]',
    'ink': 'bg-[#220B02] text-[#FFF9F5] border-[#6B5133]',
  }[theme];

  const previewQuote =
    hadith.terjemahan.length <= 190 ? hadith.terjemahan : hadith.quoteSnippet;

  return (
    <div className="min-h-dvh lg:min-h-0 bg-[#FDF9F5] flex flex-col pb-24 lg:pb-8">
      <SubpageHeader title="Kartu Kutipan" onBack={onBack} />

      <div className="max-w-xl w-full mx-auto px-4 pt-4 space-y-5 flex-1">
        {/* 1. Segmented Ratio Toggle (Story 9:16 | Post 1:1) */}
        <div
          role="group"
          aria-label="Pilih Rasio Gambar"
          className="bg-[#F7F3EF] p-1 rounded-full grid grid-cols-2 border border-[#D9D0C4]"
        >
          <button
            type="button"
            onClick={() => setAspect('story')}
            className={`min-h-[42px] rounded-full text-xs font-semibold transition ${
              aspect === 'story'
                ? 'bg-[#301A05] text-[#FFF9F5] shadow-xs'
                : 'text-[#6B5B49] hover:text-[#352719]'
            }`}
          >
            Story 9:16
          </button>
          <button
            type="button"
            onClick={() => setAspect('square')}
            className={`min-h-[42px] rounded-full text-xs font-semibold transition ${
              aspect === 'square'
                ? 'bg-[#301A05] text-[#FFF9F5] shadow-xs'
                : 'text-[#6B5B49] hover:text-[#352719]'
            }`}
          >
            Post 1:1
          </button>
        </div>

        {/* Status Messages */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {shareFeedback && (
          <div className="p-3 rounded-xl bg-[#F7F3EF] border border-[#B09768] text-xs text-[#301A05] font-medium text-center">
            {shareFeedback}
          </div>
        )}

        {/* 2. Live Card Preview */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[310px] sm:max-w-[330px] rounded-2xl border-2 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden transition-all shadow-sm ${previewThemeClass} ${
              aspect === 'story' ? 'min-h-[350px] sm:min-h-[430px]' : 'aspect-square min-h-[290px]'
            }`}
          >
            {/* Subtle Decorative Top-Right Circle */}
            <div
              aria-hidden="true"
              className={`w-28 h-28 rounded-full absolute -top-8 -right-8 pointer-events-none ${
                theme === 'ink' ? 'bg-white/5' : 'bg-[#C7B39C]/35'
              }`}
            />

            {/* Card Brand Header */}
            <div className="flex items-center gap-2 z-10">
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                  theme === 'ink'
                    ? 'bg-[#B09768] text-[#220B02]'
                    : 'bg-[#301A05] text-[#FFF9F5]'
                }`}
              >
                HK
              </span>
              <div className="leading-tight">
                <span className="block text-xs font-bold font-display tracking-wide">Hadis HK</span>
                <span
                  className={`block text-[9px] ${
                    theme === 'ink' ? 'text-[#D9D0C4]' : 'text-[#6B5B49]'
                  }`}
                >
                  Riset Hadis • Hukum Keluarga
                </span>
              </div>
            </div>

            {/* Center Quote Body */}
            <div className="my-auto py-5 text-center space-y-3 z-10 px-1">
              {aspect === 'story' && (
                <p
                  dir="rtl"
                  className={`font-arabic text-sm line-clamp-2 ${
                    theme === 'ink' ? 'text-[#C7B39C]' : 'text-[#301A05]'
                  }`}
                >
                  {hadith.matnArab}
                </p>
              )}

              <p className="font-arabic text-lg sm:text-xl font-bold leading-relaxed">
                &ldquo;{previewQuote}&rdquo;
              </p>

              <div className="pt-1">
                <span
                  className={`block text-xs font-semibold ${
                    theme === 'ink' ? 'text-[#C7B39C]' : 'text-[#301A05]'
                  }`}
                >
                  — {hadith.kitab}
                </span>
                <span
                  className={`block text-[11px] ${
                    theme === 'ink' ? 'text-[#D9D0C4]' : 'text-[#6B5B49]'
                  }`}
                >
                  {hadith.noHadis}
                </span>
              </div>
            </div>

            {/* Bottom Mosque Silhouette Ornament */}
            <div className="flex items-end justify-between z-10 pt-2">
              <span
                className={`text-[9px] ${
                  theme === 'ink' ? 'text-[#D9D0C4]' : 'text-[#6B5B49]'
                }`}
              >
                Qira&apos;ah Mubadalah
              </span>

              <svg
                width="74"
                height="48"
                viewBox="0 0 90 58"
                fill="none"
                aria-hidden="true"
                className="-mb-5 -mr-3 opacity-85"
              >
                <rect
                  x="70"
                  y="10"
                  width="9"
                  height="48"
                  fill={theme === 'ink' ? '#B09768' : '#301A05'}
                />
                <path
                  d="M74.5 2L80 10H69L74.5 2Z"
                  fill={theme === 'ink' ? '#C7B39C' : '#4C2605'}
                />
                <path
                  d="M24 38C24 24 36 17 44 15C52 17 64 24 64 38H24Z"
                  fill={theme === 'ink' ? '#4C2605' : '#B09768'}
                />
                <rect
                  x="18"
                  y="38"
                  width="52"
                  height="20"
                  fill={theme === 'ink' ? '#301A05' : '#4C2605'}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. Theme Thumbnail Selector */}
        <div className="space-y-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-[#352719]">Tema Tampilan:</span>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setTheme('academic-light')}
              className={`min-h-[68px] p-2 rounded-xl border-2 flex flex-col items-center justify-between bg-white transition ${
                theme === 'academic-light'
                  ? 'border-[#301A05] ring-2 ring-[#B09768]/40 shadow-xs'
                  : 'border-[#D9D0C4] hover:border-[#B09768]'
              }`}
            >
              <span className="w-full h-7 rounded bg-white border border-[#D9D0C4] flex items-center justify-center text-[10px] font-bold text-[#301A05]">
                Aa
              </span>
              <span className="text-[11px] font-semibold text-[#352719] mt-1">
                Putih Bersih
              </span>
            </button>

            <button
              type="button"
              onClick={() => setTheme('manuscript')}
              className={`min-h-[68px] p-2 rounded-xl border-2 flex flex-col items-center justify-between bg-[#F8F3EC] transition ${
                theme === 'manuscript'
                  ? 'border-[#301A05] ring-2 ring-[#B09768]/40 shadow-xs'
                  : 'border-[#D9D0C4] hover:border-[#B09768]'
              }`}
            >
              <span className="w-full h-7 rounded bg-[#F8F3EC] border border-[#C7B39C] flex items-center justify-center text-[10px] font-bold text-[#4C2605]">
                Aa
              </span>
              <span className="text-[11px] font-semibold text-[#352719] mt-1">
                Kertas Naskah
              </span>
            </button>

            <button
              type="button"
              onClick={() => setTheme('ink')}
              className={`min-h-[68px] p-2 rounded-xl border-2 flex flex-col items-center justify-between bg-[#220B02] text-[#FFF9F5] transition ${
                theme === 'ink'
                  ? 'border-[#B09768] ring-2 ring-[#B09768]/40 shadow-xs'
                  : 'border-[#6B5133] hover:border-[#B09768]'
              }`}
            >
              <span className="w-full h-7 rounded bg-[#1A0802] border border-[#6B5133] flex items-center justify-center text-[10px] font-bold text-[#B09768]">
                Aa
              </span>
              <span className="text-[11px] font-semibold text-[#FFF9F5] mt-1">
                Tinta Gelap
              </span>
            </button>
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="space-y-2.5 pt-1">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isExporting}
            className={`w-full min-h-[48px] px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition ${
              downloadSuccess ? 'bg-emerald-700 text-white' : 'btn-heritage-primary shadow-sm'
            }`}
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Gambar PNG Berhasil Diunduh</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{isExporting ? 'Menyiapkan Gambar 1080p...' : 'Unduh Gambar (PNG)'}</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleShare}
              className="btn-heritage-outline min-h-[46px] px-3 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-[#301A05]" />
              <span>Bagikan</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="btn-heritage-outline min-h-[46px] px-3 text-xs font-semibold flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#301A05]" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
