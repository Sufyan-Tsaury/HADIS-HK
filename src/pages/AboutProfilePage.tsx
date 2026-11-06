import React from 'react';
import { ChevronLeft, GraduationCap, Building2, MapPin, BookOpen, Award, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BrandLogoMark } from '../components/common/BrandLogo';

interface AboutProfilePageProps {
  onBack: () => void;
  onExploreHadith?: () => void;
}

export const AboutProfilePage: React.FC<AboutProfilePageProps> = ({ onBack, onExploreHadith }) => {
  return (
    <div className="min-h-screen bg-[#F9F7F5] pb-24 lg:pb-12 text-[#111827]">
      {/* Top Header Sticky Bar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] px-4 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#795A3F] hover:text-[#301A05] transition min-h-[44px] -ml-2 px-2 rounded-lg"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="sm:hidden">Kembali</span>
            <span className="hidden sm:inline">Kembali ke Perpustakaan</span>
          </button>

          <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
            Profil Peneliti
          </span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Hero Card Peneliti */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          {/* Subtle Mosque Arch Background Silhouette */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none opacity-5 hidden sm:block">
            <svg viewBox="0 0 200 300" fill="#795A3F" className="w-full h-full">
              <path d="M100 20C110 50 160 80 190 110V300H10V110C40 80 90 50 100 20Z" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 text-center sm:text-left">
            {/* Avatar / Monogram Frame */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#795A3F] text-white flex flex-col items-center justify-center shadow-md border-2 border-[#C6A17B]/40">
                <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  ST
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#C6A17B] font-semibold mt-0.5">
                  Hadis HK
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#C6A17B] text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>

            {/* Main Info */}
            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E5E7EB] text-[#795A3F] text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-[#C6A17B]" />
                <span>Peneliti &amp; Pengembang Platform</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight font-serif">
                Sufyan Tsaury
              </h1>

              <p className="text-sm text-[#4B5563] leading-relaxed max-w-xl">
                Pengembang &amp; Penyusun Repositori Digital <strong>Hadis HK</strong> — Kajian Fikih Hukum Keluarga Islam Tematik Berbasis Kesalingan (*Qira&apos;ah Mubadalah*).
              </p>
            </div>
          </div>
        </div>

        {/* Grid Informasi Akademik Resmi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Kartu NIM & Jurusan */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-3 text-[#795A3F]">
              <div className="w-9 h-9 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-[#795A3F]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                  Program Studi &amp; NIM
                </span>
                <span className="text-sm font-bold text-[#111827] block truncate sm:whitespace-normal">
                  Hukum Keluarga (Ahwal Syakhshiyyah)
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#F3EFEA] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs">
              <span className="text-[#6B7280]">Nomor Induk Mahasiswa (NIM):</span>
              <span className="font-mono font-bold text-[#795A3F] bg-[#F9F7F5] px-2 py-0.5 rounded border border-[#E5E7EB] self-start sm:self-auto">
                2530311086
              </span>
            </div>
          </div>

          {/* Kartu Fakultas & Institusi */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-3 text-[#795A3F]">
              <div className="w-9 h-9 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-[#795A3F]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                  Fakultas &amp; Kampus
                </span>
                <span className="text-sm font-bold text-[#111827] block">
                  Fakultas Syariah
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#F3EFEA] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs">
              <span className="text-[#6B7280]">Perguruan Tinggi:</span>
              <span className="font-semibold text-[#111827]">
                UIN Siber Syekh Nurjati Cirebon
              </span>
            </div>
          </div>

          {/* Kartu Domisili */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-3 text-[#795A3F]">
              <div className="w-9 h-9 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#795A3F]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                  Daerah Asal / Domisili
                </span>
                <span className="text-sm font-bold text-[#111827] block">
                  Sumedang, Jawa Barat
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#F3EFEA] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs">
              <span className="text-[#6B7280]">Negara:</span>
              <span className="font-medium text-[#111827]">Indonesia</span>
            </div>
          </div>

          {/* Kartu Status Riset Platform */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-3 text-[#795A3F]">
              <div className="w-9 h-9 rounded-lg bg-[#F9F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#795A3F]" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                  Status Proyek Riset
                </span>
                <span className="text-sm font-bold text-[#111827] block">
                  Repositori Digital Terbuka
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#F3EFEA] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs">
              <span className="text-[#6B7280]">Akses Publik:</span>
              <span className="font-medium text-[#15803D]">Aktif &amp; Terbuka (Open Source)</span>
            </div>
          </div>
        </div>

        {/* Kartu Visi Riset Hadis HK */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2.5">
            <BrandLogoMark size={28} concept="sanctuary" />
            <h2 className="text-base font-bold text-[#111827]">
              Latar Belakang &amp; Visi Platform Hadis HK
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            <p>
              Platform <strong>Hadis HK (Hadis Hukum Keluarga)</strong> dibangun sebagai jembatan ilmiah antara 
              khazanah teks sunnah nabawiyah klasik (*Kutub at-Turats*) dengan kebutuhan panduan keluarga Muslim kontemporer 
              yang berakar pada prinsip keadilan dan kemitraan martabat kemanusiaan.
            </p>
            <p>
              Dengan mengintegrasikan <strong>Kajian Komparasi Empat Mazhab Fikih</strong> (Hanafi, Maliki, Syafi&apos;i, Hanbali), 
              <strong> Kompilasi Hukum Islam (KHI)</strong> di Indonesia, serta pendekatan hermeneutika kesalingan 
              <strong> Qira&apos;ah Mubadalah</strong>, aplikasi ini berikhtiar meluruskan pemahaman tekstual yang sering kali 
              disalahgunakan, demi mewujudkan rumah tangga yang benar-benar <em>Sakinah, Mawaddah, wa Rahmah</em>.
            </p>
          </div>

          {/* 3 Nilai Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#F9F7F5] border border-[#E5E7EB] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#795A3F]">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A17B]" />
                <span>Sanad &amp; Matn Sahih</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Rujukan teruji dari Kutub as-Sittah dengan takhrij nomor internasional dan naskah Arab berharakat.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F9F7F5] border border-[#E5E7EB] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#795A3F]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C6A17B]" />
                <span>Qira&apos;ah Mubadalah</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Menegaskan relasi resiprokal, kesalingan memuliakan, dan penghapusan kekerasan dalam rumah tangga.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F9F7F5] border border-[#E5E7EB] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#795A3F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A17B]" />
                <span>Konteks Keindonesiaan</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Korelasi langsung dengan Kompilasi Hukum Islam (KHI) dan hukum positif di Pengadilan Agama.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={onExploreHadith || onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#795A3F] text-white text-sm font-semibold hover:bg-[#301A05] transition shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-white" />
            <span>Mulai Jelajahi Koleksi Hadis HK</span>
          </button>
        </div>
      </main>
    </div>
  );
};
