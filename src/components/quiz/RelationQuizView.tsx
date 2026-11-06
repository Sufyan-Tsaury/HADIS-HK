import React, { useState } from 'react';
import { SubpageHeader } from '../layout/AppHeader';
import { ChevronRight, RotateCcw, BookOpen } from 'lucide-react';

interface RelationQuizViewProps {
  onBack: () => void;
  onExploreTopic: (tag: string) => void;
  onOpenPillars: () => void;
}

interface QuizQuestion {
  id: number;
  pilar: string;
  question: string;
  options: { label: string; score: number }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pilar: 'Musyawarah & Finansial',
    question: 'Siapa yang paling tepat mengambil keputusan keuangan penting dalam keluarga?',
    options: [
      { label: 'Satu pihak saja tanpa perlu meminta pandangan pasangan', score: 1 },
      { label: 'Bersama setelah musyawarah dan saling memahami kebutuhan nyata', score: 3 },
      { label: 'Mengikuti sepenuhnya orang tua atau keluarga besar tanpa diskusi', score: 1 },
      { label: 'Menyerahkan beban keuangan sepihak tanpa saling transparan', score: 1 },
    ],
  },
  {
    id: 2,
    pilar: 'Mu’asyarah bil Ma’ruf & Kerja Domestik',
    question: 'Bagaimana pembagian peran pekerjaan rumah tangga saat kedua pihak sama-sama lelah?',
    options: [
      { label: 'Saling tolong-menolong (ta’awun) dan berbagi tugas sesuai kemampuan', score: 3 },
      { label: 'Menuntut pasangan menyelesaikan semuanya karena dianggap kodrat', score: 1 },
      { label: 'Membiarkan rumah terbengkalai tanpa komunikasi atau kesepakatan', score: 2 },
      { label: 'Hanya membantu bila diperintah atau ditegur berkali-kali', score: 2 },
    ],
  },
  {
    id: 3,
    pilar: 'Anti-KDRT & Pengelolaan Emosi',
    question: 'Ketika terjadi pertengkaran atau perbedaan pendapat yang memanas:',
    options: [
      { label: 'Menggunakan kekerasan fisik atau kata-kata hinaan yang merendahkan', score: 1 },
      { label: 'Memberi jeda meredakan amarah, lalu berbicara baik-baik tanpa melukai', score: 3 },
      { label: 'Melakukan silent treatment berhari-hari tanpa berniat mencari solusi', score: 2 },
      { label: 'Menyebarkan aib pasangan ke media sosial atau pihak luar', score: 1 },
    ],
  },
  {
    id: 4,
    pilar: 'Taradhin & Keintiman',
    question: 'Bagaimana etika menjaga relasi keintiman dan hak kesehatan reproduksi?',
    options: [
      { label: 'Berlandaskan kerelaan kedua pihak, kelembutan, dan komunikasi empati', score: 3 },
      { label: 'Pemaksaan sepihak tanpa memedulikan kondisi fisik atau psikologis pasangan', score: 1 },
      { label: 'Menganggap topik keintiman tabu untuk dibicarakan secara sehat', score: 2 },
      { label: 'Menjadikan keintiman sebagai alat tawar-menawar atau hukuman', score: 1 },
    ],
  },
  {
    id: 5,
    pilar: 'Pengasuhan Anak Bersama',
    question: 'Bagaimana peran pengasuhan dan pendidikan karakter anak dalam rumah tangga?',
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
        badgeColor: 'bg-[#F7F3EF] text-[#301A05] border-[#B09768]',
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
    <div className="min-h-dvh lg:min-h-0 bg-white text-[#111827] flex flex-col pb-24 lg:pb-8">
      <SubpageHeader
        title="Kuis Evaluasi Relasi"
        onBack={onBack}
        rightAction={
          <button
            type="button"
            onClick={onOpenPillars}
            className="min-h-[38px] px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] text-xs font-medium hover:bg-gray-50 transition"
          >
            5 Pilar
          </button>
        }
      />

      <div className="max-w-xl w-full mx-auto px-4 pt-5 flex-1 flex flex-col justify-between">
        {!isCompleted ? (
          <>
            <div className="space-y-5">
              {/* Clean Progress Pill Bar */}
              <div className="space-y-2">
                <div className="h-8 rounded-full bg-[#F9F7F5] border border-[#E5E7EB] relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#C6A17B] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                  <span className="relative z-10 text-xs font-semibold text-[#111827]">
                    {stepIdx + 1} / {QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <span className="block text-xs font-medium text-[#795A3F] text-center">
                  Aspek: {currentQ.pilar}
                </span>
              </div>

              {/* Question Heading */}
              <h2 className="text-lg sm:text-xl font-bold font-sans text-[#111827] leading-snug pt-1 tracking-tight">
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
                          ? 'bg-[#F9F7F5] border-[#795A3F] ring-1 ring-[#795A3F]'
                          : 'bg-white border-[#E5E7EB] hover:bg-[#F9F7F5] hover:border-[#D1D5DB]'
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

            {/* Next Button */}
            <div className="pt-6 pb-2">
              <button
                type="button"
                disabled={selectedOptionIdx === null}
                onClick={handleNext}
                className="w-full min-h-[48px] px-5 text-sm font-medium rounded-lg bg-[#795A3F] text-white hover:bg-[#674A32] flex items-center justify-center gap-2 transition disabled:opacity-40"
              >
                <span>{stepIdx + 1 === QUIZ_QUESTIONS.length ? 'Lihat Hasil Evaluasi' : 'Lanjutkan'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* Results View */
          <div className="space-y-5 animate-fadeIn">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F9F7F5] border border-[#C6A17B] text-[#795A3F] mx-auto flex items-center justify-center font-bold text-xl font-sans">
                {Math.round((totalScore / 15) * 100)}%
              </div>

              <div className="space-y-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${evaluation.badgeColor}`}>
                  {evaluation.category}
                </span>
                <h2 className="text-lg font-bold font-sans text-[#111827] pt-1">
                  Hasil Evaluasi Relasi Kesalingan
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto">
                {evaluation.summary}
              </p>
            </div>

            {/* Action Buttons in Results */}
            <div className="space-y-3 pt-2 pb-2">
              <button
                type="button"
                onClick={() => onExploreTopic(evaluation.recommendedTag)}
                className="w-full min-h-[48px] px-4 text-xs sm:text-sm font-medium rounded-lg bg-[#795A3F] text-white hover:bg-[#674A32] flex items-center justify-center gap-2 transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>{evaluation.recommendationLabel}</span>
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="w-full min-h-[44px] px-4 text-xs font-medium rounded-lg border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 flex items-center justify-center gap-2 transition"
              >
                <RotateCcw className="w-4 h-4 text-[#795A3F]" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
