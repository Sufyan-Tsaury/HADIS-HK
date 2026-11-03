import React, { useState } from 'react';
import { SubpageHeader } from '../layout/AppHeader';
import { ArrowRight, RotateCcw, BookOpen } from 'lucide-react';

interface RelationQuizViewProps {
  onBack: () => void;
  onExploreTopic: (tag: string) => void;
  onOpenPillars: () => void;
}

interface QuizQuestion {
  id: number;
  pilar: string;
  question: string;
  options: {
    label: string;
    score: number;
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pilar: 'Tasyawur & Taradhin (Keputusan Keuangan)',
    question: 'Siapa yang paling tepat mengambil keputusan keuangan keluarga?',
    options: [
      { label: 'Satu pihak saja secara sepihak', score: 1 },
      { label: 'Bersama setelah musyawarah terbuka', score: 3 },
      { label: 'Mengikuti intervensi pihak luar tanpa diskusi pasutri', score: 1 },
      { label: 'Dibebankan seluruhnya ke satu pasangan saja', score: 2 },
    ],
  },
  {
    id: 2,
    pilar: "Mu'asyarah bi al-Ma'ruf (Kerja Domestik)",
    question: 'Bagaimana pembagian pekerjaan domestik rumah tangga ketika sama-sama lelah?',
    options: [
      { label: 'Saling membantu tanpa gengsi sebagaimana keteladanan Nabi ﷺ', score: 3 },
      { label: 'Dibantu sesekali hanya jika diminta berulang kali', score: 2 },
      { label: 'Dianggap mutlak urusan istri semata tanpa keterlibatan suami', score: 1 },
      { label: 'Dibiarkan menjadi sumber pertengkaran berlarut-larut', score: 1 },
    ],
  },
  {
    id: 3,
    pilar: 'Zawaj & Taradhin (Keintiman Suami Istri)',
    question: 'Ketika salah satu pasangan sedang sakit atau kelelahan untuk berhubungan intim:',
    options: [
      { label: 'Memahami dengan empati dan mencari kenyamanan bersama tanpa paksaan', score: 3 },
      { label: 'Menerima dengan berat hati dan mendiamkan pasangan', score: 2 },
      { label: 'Memaksa atau mengancam dengan dalih agama secara sepihak', score: 1 },
      { label: 'Mengumbar keluhan urusan ranjang kepada orang lain', score: 1 },
    ],
  },
  {
    id: 4,
    pilar: 'Kaff al-Adza (Manajemen Emosi & Anti-KDRT)',
    question: 'Apa sikap utama saat terjadi perselisihan tajam dalam rumah tangga?',
    options: [
      { label: 'Mengambil jeda tenang, berdialog santun, dan menolak kekerasan fisik/verbal', score: 3 },
      { label: 'Saling mendiamkan (silent treatment) selama berhari-hari', score: 2 },
      { label: 'Membentak dengan kata-kata merendahkan martabat pasangan', score: 1 },
      { label: 'Memukul, melempar barang, atau mengancam talak seketika', score: 1 },
    ],
  },
  {
    id: 5,
    pilar: 'Keadilan Pengasuhan & Hadhanah',
    question: 'Bagaimana peran ayah dan ibu dalam pengasuhan serta pendidikan anak?',
    options: [
      { label: 'Ayah dan ibu hadir hangat bersama serta adil pada anak laki-laki & perempuan', score: 3 },
      { label: 'Ayah fokus mencari nafkah saja, urusan emosional anak diserahkan ke ibu', score: 2 },
      { label: 'Membedakan kesempatan pendidikan antara anak laki-laki dan perempuan', score: 1 },
      { label: 'Menjadikan anak sebagai alat tarik-menarik saat orang tua berkonflik', score: 1 },
    ],
  },
];

export const RelationQuizView: React.FC<RelationQuizViewProps> = ({
  onBack,
  onExploreTopic,
  onOpenPillars,
}) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[stepIdx];

  const handleNext = () => {
    if (selectedOptionIdx === null) return;
    const chosenScore = currentQ.options[selectedOptionIdx].score;
    const updatedScores = [...scores, chosenScore];
    setScores(updatedScores);
    setSelectedOptionIdx(null);

    if (stepIdx + 1 < QUIZ_QUESTIONS.length) {
      setStepIdx(stepIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setStepIdx(0);
    setSelectedOptionIdx(null);
    setScores([]);
    setIsCompleted(false);
  };

  const totalScore = scores.reduce((acc, s) => acc + s, 0);

  const getEvaluation = () => {
    if (totalScore >= 13) {
      return {
        category: 'Relasi Selaras & Resiprokal (Mubadalah)',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        summary:
          'Prinsip kesalingan (mubadalah), musyawarah (tasyawur), dan perlakuan bermartabat (mu’asyarah bil ma’ruf) telah terwujud kuat dalam pandangan dan praktik relasi Anda.',
        recommendedTag: 'Kerja Domestik',
        recommendationLabel: 'Perdalam Keteladanan Nabi di Rumah',
      };
    }
    if (totalScore >= 9) {
      return {
        category: 'Relasi Moderat — Perlu Penguatan Dialog & Empati',
        badgeColor: 'bg-[#F6F1EA] text-[#795A3F] border-[#C6A17B]',
        summary:
          'Fondasi kebersamaan sudah baik, namun masih terdapat ruang penting untuk menyeimbangkan beban domestik, keterbukaan finansial, dan komunikasi saat lelah.',
        recommendedTag: 'Nafkah Wajib',
        recommendationLabel: 'Kaji Hadis Kemitraan Nafkah & Kesalingan',
      };
    }
    return {
      category: 'Perlu Evaluasi Serius & Perlindungan Martabat Pasangan',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
      summary:
        'Terdeteksi pola relasi sepihak yang berisiko melahirkan ketidakadilan atau luka batin. Sangat dianjurkan mengkaji prinsip kaff al-adza (anti-kekerasan) dan musyawarah setara.',
      recommendedTag: 'Anti-KDRT',
      recommendationLabel: 'Pelajari Hadis Pencegahan KDRT & Resolusi Konflik',
    };
  };

  const evaluation = getEvaluation();
  const progressPercent = ((stepIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-dvh lg:min-h-0 bg-white flex flex-col pb-24 lg:pb-8">
      <SubpageHeader
        title="Kuis Evaluasi Relasi"
        onBack={onBack}
        rightSlot={
          <button
            type="button"
            onClick={onOpenPillars}
            className="min-h-[38px] px-2.5 py-1 rounded-lg bg-[#F6F1EA] text-[#795A3F] text-xs font-semibold hover:bg-[#EFE6DA] transition"
          >
            5 Pilar
          </button>
        }
      />

      <div className="max-w-xl w-full mx-auto px-4 pt-5 flex-1 flex flex-col justify-between">
        {!isCompleted ? (
          <>
            <div className="space-y-5">
              {/* Warm Progress Pill Bar (Matches Screen 6 Reference) */}
              <div className="space-y-2">
                <div className="h-9 rounded-full bg-[#F6F1EA] border border-[#E5DCD0] relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#E6D7C3] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                  <span className="relative z-10 text-xs font-bold text-[#795A3F]">
                    {stepIdx + 1} / {QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <span className="block text-[11px] font-semibold text-[#795A3F] text-center">
                  Aspek: {currentQ.pilar}
                </span>
              </div>

              {/* Question Heading */}
              <h2 className="text-lg sm:text-xl font-bold text-[#111827] leading-snug pt-1">
                {currentQ.question}
              </h2>

              {/* Radio Option Buttons */}
              <div className="space-y-2.5" role="radiogroup" aria-label={currentQ.question}>
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOptionIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedOptionIdx(idx)}
                      className={`w-full min-h-[56px] p-4 rounded-xl border text-left flex items-center gap-3.5 transition ${
                        isSelected
                          ? 'bg-[#F6F1EA] border-[#795A3F] ring-1 ring-[#795A3F]'
                          : 'bg-white border-[#E5E7EB] hover:border-[#C6A17B] hover:bg-[#F9F7F5]'
                      }`}
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
                        className={`text-sm leading-snug ${
                          isSelected ? 'font-semibold text-[#111827]' : 'text-[#374151]'
                        }`}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Continue Button */}
            <div className="pt-6">
              <button
                type="button"
                disabled={selectedOptionIdx === null}
                onClick={handleNext}
                className="btn-brown-solid w-full min-h-[50px] px-5 text-sm flex items-center justify-center gap-2"
              >
                <span>{stepIdx + 1 === QUIZ_QUESTIONS.length ? 'Lihat Hasil Evaluasi' : 'Lanjutkan'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* Evaluation Results Screen */
          <div className="space-y-5 my-auto py-4">
            <div className="rounded-2xl border border-[#E5DCD0] bg-[#F9F7F5] p-5 text-center space-y-3">
              <span className="inline-block text-xs font-mono font-bold text-[#795A3F] uppercase tracking-wider">
                Skor Refleksi Kesalingan: {totalScore} / {QUIZ_QUESTIONS.length * 3}
              </span>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${evaluation.badgeColor}`}
                >
                  {evaluation.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#374151] leading-relaxed max-w-md mx-auto">
                {evaluation.summary}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 space-y-3">
              <span className="block text-xs font-bold text-[#111827]">
                Rekomendasi Pembelajaran Hadis:
              </span>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Telusuri riwayat hadis pada topik <strong>#{evaluation.recommendedTag}</strong> lengkap dengan analisis Mubadalah dan perbandingan 4 Mazhab &amp; KHI.
              </p>

              <button
                type="button"
                onClick={() => onExploreTopic(evaluation.recommendedTag)}
                className="btn-brown-solid w-full min-h-[48px] px-4 text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{evaluation.recommendationLabel}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="btn-soft w-full min-h-[46px] px-4 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis Evaluasi</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
