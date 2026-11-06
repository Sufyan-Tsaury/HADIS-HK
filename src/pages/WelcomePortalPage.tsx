import React, { useEffect, useRef } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ArrowDown, 
  GraduationCap, 
  ShieldCheck, 
  HeartHandshake, 
  Scale, 
  Quote
} from 'lucide-react';
import { BrandLogoMark } from '../components/common/BrandLogo';
import { STAGES, HADITHS_DATA } from '../data/hadiths';
import { StageIcon } from '../components/navigation/StageIcon';

interface WelcomePortalPageProps {
  onEnterLibrary: (stageId?: string) => void;
  onOpenProfile: () => void;
}

export const WelcomePortalPage: React.FC<WelcomePortalPageProps> = ({
  onEnterLibrary,
  onOpenProfile,
}) => {
  // Intersection Observer for graceful scroll-triggered reveal
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stage counts
  const stageCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    for (const h of HADITHS_DATA) {
      counts[h.stageId] = (counts[h.stageId] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F5] text-[#111827] font-sans selection:bg-[#E5D5C5] selection:text-[#301A05]">
      {/* =================================================================
          1. STICKY TOP BRAND BAR
      ================================================================= */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandLogoMark size={38} concept="sanctuary" />
            <div>
              <span className="block text-base font-bold text-[#111827] leading-tight tracking-wide">
                Hadis HK
              </span>
              <span className="block text-[11px] text-[#6B7280] leading-tight hidden sm:block">
                Riset Hadis • Hukum Keluarga Islam
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenProfile}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#795A3F] hover:text-[#301A05] hover:bg-[#F3EFEA] rounded-lg transition"
            >
              <GraduationCap className="w-4 h-4 text-[#C6A17B]" />
              <span>Profil Peneliti</span>
            </button>

            <button
              type="button"
              onClick={() => onEnterLibrary()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#795A3F] text-white text-xs sm:text-sm font-semibold hover:bg-[#301A05] transition shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-[#C6A17B]" />
              <span>Masuk ke Perpustakaan</span>
            </button>
          </div>
        </div>
      </header>

      {/* =================================================================
          2. HERO SECTION: INTRODUKSI GERBANG UTAMA
      ================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        {/* Subtle Architectural Silhouette Background */}
        <div className="absolute right-0 top-0 bottom-0 w-96 pointer-events-none opacity-[0.035] hidden lg:block">
          <svg viewBox="0 0 300 400" fill="#795A3F" className="w-full h-full">
            <path d="M150 20C170 70 240 110 285 150V400H15V150C60 110 130 70 150 20Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          {/* Badge Akademik */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3EFEA] border border-[#E5E7EB] text-[#795A3F] text-xs font-semibold tracking-wide">
            <span className="text-[#C6A17B] text-xs font-serif leading-none" aria-hidden="true">◆</span>
            <span>Kajian Fiqh al-Usrah Berbasis Kesalingan (Qira&apos;ah Mubadalah)</span>
          </div>

          {/* Heading Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#111827] tracking-tight leading-[1.15]">
            Membangun Relasi Keluarga yang Adil, Bermartabat &amp; Memuliakan
          </h1>

          {/* Subheading Deskriptif */}
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Repositori digital <strong>28 Hadis Hukum Keluarga</strong> pilihan yang dikaji secara komparatif melalui 
            <strong> Empat Mazhab Fikih</strong>, <strong>Kompilasi Hukum Islam (KHI)</strong>, serta perspektif resiprokal 
            kesalingan demi mewujudkan rumah tangga yang sakinah.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onEnterLibrary()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#795A3F] text-white font-semibold text-sm hover:bg-[#301A05] transition shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              <BookOpen className="w-5 h-5 text-[#C6A17B]" />
              <span>Buka Seluruh Riwayat Hadis (28)</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('mubadalah')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#E5E7EB] text-[#795A3F] font-semibold text-sm hover:border-[#C6A17B] hover:bg-[#F9F7F5] transition"
            >
              <span>Pelajari Paradigma Mubadalah</span>
              <ArrowDown className="w-4 h-4 text-[#C6A17B]" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <span className="block text-2xl font-bold font-serif text-[#795A3F]">28</span>
              <span className="text-xs text-[#6B7280]">Hadis Ahkam Sahih</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <span className="block text-2xl font-bold font-serif text-[#795A3F]">8</span>
              <span className="text-xs text-[#6B7280]">Siklus Kehidupan</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <span className="block text-2xl font-bold font-serif text-[#795A3F]">4+1</span>
              <span className="text-xs text-[#6B7280]">Komparasi Mazhab &amp; KHI</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs">
              <span className="block text-2xl font-bold font-serif text-[#795A3F]">5</span>
              <span className="text-xs text-[#6B7280]">Pilar Perkawinan</span>
            </div>
          </div>
        </div>

        {/* Calm Navigation Indicator */}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => scrollToSection('mubadalah')}
            aria-label="Gulir ke konten metodologi"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#795A3F] transition py-1.5 px-3.5 rounded-lg border border-[#E5E7EB] bg-white hover:bg-[#F3EFEA]"
          >
            <span>Eksplorasi Metodologi &amp; 8 Siklus</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C6A17B]" />
          </button>
        </div>
      </section>

      {/* =================================================================
          3. SECTION: PARADIGMA QIRA'AH MUBADALAH (PROF. DR. FAQIHUDDIN ABDUL KODIR, MA.)
      ================================================================= */}
      <section
        id="mubadalah"
        ref={addToRefs}
        className="portal-reveal py-16 sm:py-24 border-b border-[#E5E7EB] bg-white scroll-mt-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-3 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-[#795A3F] tracking-wider uppercase px-3 py-1 rounded-md bg-[#F3EFEA] border border-[#E5E7EB]">
              Fondasi Epistemologis
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#111827] tracking-tight">
              Gagasan Qira&apos;ah Mubadalah: Membaca Hadis Secara Resiprokal
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
              Dipelopori oleh cendekiawan muslim <strong>Prof. Dr. Faqihuddin Abdul Kodir, MA.</strong>, metode 
              <em> Qira&apos;ah Mubadalah</em> (pembacaan kesalingan) adalah kerangka hermeneutika hadis 
              yang memastikan bahwa pesan keadilan Islam berlaku setara bagi laki-laki dan perempuan.
            </p>
          </div>

          {/* Kotak Kutipan Kiai Faqih */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F9F7F5] border-l-4 border-[#795A3F] border-t border-r border-b border-[#E5E7EB] space-y-4 shadow-xs relative">
            <Quote className="w-8 h-8 text-[#C6A17B]/40 absolute right-6 top-6" />
            <p className="text-base sm:text-lg font-serif italic text-[#301A05] leading-relaxed">
              &ldquo;Teks hadis yang secara redaksional ditujukan kepada salah satu jenis kelamin (suami atau istri), 
              pada hakikatnya memuat pesan moral universal yang mengikat kedua belah pihak secara timbal-balik 
              selama memiliki kapasitas kemanusiaan yang sama sebagai subjek mukallaf.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#795A3F] text-white flex items-center justify-center font-bold text-xs shrink-0">
                Prof
              </div>
              <div>
                <span className="block text-sm font-bold text-[#111827]">
                  Prof. Dr. Faqihuddin Abdul Kodir, MA.
                </span>
                <span className="block text-xs text-[#6B7280]">
                  Guru Besar Ilmu Fikih &amp; Hermeneutika Gender • Penggagas Qira&apos;ah Mubadalah
                </span>
              </div>
            </div>
          </div>

          {/* 3 Kaidah Kunci */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-white space-y-2 hover:border-[#C6A17B] transition">
              <div className="w-8 h-8 rounded-lg bg-[#F9F7F5] text-[#795A3F] flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#111827]">Prinsip Resiprokalitas</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Kebaikan yang dituntut dari seorang istri juga dituntut dari suami, dan perlindungan yang dinikmati suami juga menjadi hak asasi istri.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-white space-y-2 hover:border-[#C6A17B] transition">
              <div className="w-8 h-8 rounded-lg bg-[#F9F7F5] text-[#795A3F] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#111827]">Karamah Insaniyyah</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Memuliakan martabat manusia secara utuh. Menolak segala bentuk penaklukan tubuh, intimidasi verbal, dan perendahan peran pasangan.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E7EB] bg-white space-y-2 hover:border-[#C6A17B] transition">
              <div className="w-8 h-8 rounded-lg bg-[#F9F7F5] text-[#795A3F] flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#111827]">La Dharara wa La Dhirar</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Menolak kemudaratan dan kekerasan. Tiada ajaran syariat yang membenarkan pemukulan atau penelantaran ekonomi dalam perkawinan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          4. SECTION: LIMA PILAR PERKAWINAN SAKINAH
      ================================================================= */}
      <section
        ref={addToRefs}
        className="portal-reveal py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F9F7F5]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#795A3F] tracking-wider uppercase px-3 py-1 rounded-md bg-white border border-[#E5E7EB]">
              Pedoman Qur&apos;ani &amp; Nabawi
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#111827] tracking-tight">
              5 Pilar Perkawinan Berkeadilan
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Kerangka operasional yang menopang seluruh tafsir hadis ahkam di dalam platform ini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pilar 1 */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C6A17B]">01 / PILAR</span>
              <h3 className="text-sm font-bold text-[#111827]">Mitsaqan Ghalizhan</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Komitmen perjanjian suci yang agung di hadapan Allah (QS. An-Nisa: 21). Pernikahan bukan sekadar kontrak keperdataan, melainkan janji moral yang dijaga bersama.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C6A17B]">02 / PILAR</span>
              <h3 className="text-sm font-bold text-[#111827]">Zawaj (Kemitraan Sejajar)</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Prinsip berpasangan sebagai dua subjek yang saling melengkapi (QS. Ar-Rum: 21), bukan hubungan tuan dengan pelayan atau atasan dengan bawahan.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C6A17B]">03 / PILAR</span>
              <h3 className="text-sm font-bold text-[#111827]">Mu&apos;asyarah bil Ma&apos;ruf</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Memperlakukan pasangan secara patut, santun, dan menyenangkan (QS. An-Nisa: 19) baik dalam perkataan, keintiman fisik, maupun nafkah sehari-hari.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C6A17B]">04 / PILAR</span>
              <h3 className="text-sm font-bold text-[#111827]">Tasyawur (Musyawarah)</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Membiasakan dialog dua arah dalam setiap pengambilan keputusan keluarga (QS. Al-Baqarah: 233), mulai dari urusan keuangan hingga pengasuhan anak.
              </p>
            </div>

            {/* Pilar 5 */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E7EB] shadow-xs space-y-2 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold font-mono text-[#C6A17B]">05 / PILAR</span>
              <h3 className="text-sm font-bold text-[#111827]">Taradhin (Kerelaan Bersama)</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Segala bentuk interaksi perkawinan harus dilandasi kerelaan dan kesepakatan bersama (*mutual consent*), menolak segala paksaan dan manipulasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          5. SECTION: PETA 8 SIKLUS KEHIDUPAN (28 HADIS AHKAM)
      ================================================================= */}
      <section
        ref={addToRefs}
        className="portal-reveal py-16 sm:py-24 border-b border-[#E5E7EB] bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-[#795A3F] tracking-wider uppercase px-3 py-1 rounded-md bg-[#F3EFEA] border border-[#E5E7EB]">
                Struktur Korpus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#111827] mt-2">
                Peta 8 Bab Siklus Kehidupan Keluarga
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onEnterLibrary()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#795A3F] hover:text-[#301A05] transition"
            >
              <span>Jelajahi Semua di Pustaka</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {STAGES.map((stg) => {
              const count = stageCounts[stg.id] || 0;
              return (
                <button
                  key={stg.id}
                  type="button"
                  onClick={() => onEnterLibrary(stg.id)}
                  className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#795A3F] hover:bg-[#F9F7F5] text-left transition group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#C6A17B] text-white flex items-center justify-center group-hover:bg-[#795A3F] transition">
                      <StageIcon stageId={stg.id} className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#F3EFEA] text-[#795A3F] group-hover:bg-[#795A3F] group-hover:text-white transition">
                      {count} hadis
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111827] group-hover:text-[#795A3F] transition leading-tight">
                      {stg.title}
                    </h3>
                    <p className="text-[11px] text-[#6B7280] line-clamp-2 mt-1">
                      {stg.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          6. SECTION: PROFIL PENELITI & PENGEMBANG
      ================================================================= */}
      <section
        ref={addToRefs}
        className="portal-reveal py-16 sm:py-24 border-b border-[#E5E7EB] bg-[#F9F7F5]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Monogram ST */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-[#795A3F] text-white flex flex-col items-center justify-center shadow-md border-2 border-[#C6A17B]/40">
                  <span className="font-serif text-3xl font-bold tracking-tight text-white">ST</span>
                  <span className="text-[9px] tracking-widest uppercase text-[#C6A17B] font-semibold mt-0.5">Hadis HK</span>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#C6A17B] text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F3EFEA] border border-[#E5E7EB] text-[#795A3F] text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C6A17B]" />
                  <span>Peneliti &amp; Pengembang Platform</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#111827]">
                  Sufyan Tsaury
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-xl">
                  Mahasiswa Program Studi <strong>Hukum Keluarga (Ahwal Syakhshiyyah)</strong>, 
                  Fakultas Syariah, <strong>UIN Siber Syekh Nurjati Cirebon</strong>. 
                  Berasal dari Sumedang, Jawa Barat.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#F9F7F5] border border-[#E5E7EB] text-[#6B7280]">
                    NIM: <strong className="text-[#111827] font-mono">2530311086</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#F9F7F5] border border-[#E5E7EB] text-[#6B7280]">
                    Fakultas Syariah
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#F9F7F5] border border-[#E5E7EB] text-[#6B7280]">
                    Sumedang, Jawa Barat
                  </span>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={onOpenProfile}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#795A3F] hover:text-[#301A05] underline underline-offset-4"
                  >
                    <span>Lihat Halaman Profil Akademik Lengkap</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          7. SECTION: FINAL CALL TO ACTION (GERBANG PUSTAKA)
      ================================================================= */}
      <section
        ref={addToRefs}
        className="portal-reveal py-16 sm:py-20 bg-[#795A3F] text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <BrandLogoMark size={48} concept="sanctuary" className="mx-auto" />
          
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight">
            Siap Mengkaji Khazanah Hadis Ahkam Keluarga?
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Jelajahi 28 teks hadis sahih dengan matn berharakat, sanad lengkap, perbandingan empat mazhab, 
            dan hermeneutika mubadalah hari ini.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onEnterLibrary()}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#795A3F] font-bold text-sm hover:bg-[#F9F7F5] transition shadow-lg active:scale-[0.99]"
            >
              <BookOpen className="w-5 h-5 text-[#795A3F]" />
              <span>Buka Perpustakaan Digital Hadis HK</span>
              <ChevronRight className="w-4 h-4 text-[#795A3F]" />
            </button>
          </div>
        </div>
      </section>

      {/* =================================================================
          8. FOOTER AKADEMIK
      ================================================================= */}
      <footer className="py-8 bg-[#301A05] text-[#C6A17B] text-xs border-t border-[#C6A17B]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white block">Hadis HK — Repositori Fiqh al-Usrah</span>
            <span className="text-[11px] text-white/60">
              Kajian Hadis Berbasis Kesalingan • UIN Siber Syekh Nurjati Cirebon
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={onOpenProfile}
              className="hover:text-white transition"
            >
              Tentang Peneliti
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onEnterLibrary()}
              className="hover:text-white transition"
            >
              Katalog Hadis
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
