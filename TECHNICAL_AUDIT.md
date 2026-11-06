# TECHNICAL AUDIT — PROJECT HADIS HK
**Dokumen Pemeriksaan Arsitektur, Fungsional, Dokumentasi, & Pedoman Preservasi**
*Tanggal Audit: 6 November 2026*
*Auditor: Tim Senior UI/UX Designer, Design System Engineer, & Senior Frontend Architect*

---

## 1. Technology Stack

Aplikasi **Hadis HK** (Hadis Hukum Keluarga Islam) dibangun di atas arsitektur Single Page Application (SPA) modern yang ringan, tanpa ketergantungan backend server eksternal, dan dioptimalkan untuk performa tinggi serta deployment statis pada GitHub Pages.

| Kategori | Teknologi / Library | Versi | Peran & Catatan Teknis |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.3.1` | Menggunakan React 19 dengan Hooks fungsional modern (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`). |
| **DOM Renderer** | React DOM | `^19.3.1` | Standard DOM bindings untuk React 19. |
| **Build Tool & Dev Server** | Vite | `^8.3.4` | Vite 8 dengan HMR kilat dan build optimizer berbasis Rollup. Konfigurasi `base: '/HADIS-HK/'` untuk hosting GitHub Pages. |
| **Bahasa Pemrograman** | TypeScript | `~6.0.3` | Konfigurasi ketat (`strict: true`, `noImplicitAny: true`, `verbatimModuleSyntax: true`, target `ES2022`). |
| **Styling Engine** | Tailwind CSS & `@tailwindcss/vite` | `^4.3.3` | Tailwind CSS v4 engine terintegrasi langsung via Vite plugin `@tailwindcss/vite` dengan impor modern `@import "tailwindcss";`. |
| **Iconography** | Lucide React | `^1.61.0` | Kumpulan ikon berbasis SVG clean dan konsisten, bebas dari ketergantungan emoji sebagai ikon antarmuka. |
| **Linter & Code Quality** | Oxlint | `^1.88.0` | Rust-based linter berkecepatan tinggi dengan integrasi ruleset JavaScript, TypeScript, JSX, dan React Hooks. |
| **Speech Engine** | Web Speech API | Native Browser | Native `window.speechSynthesis` & `SpeechSynthesisUtterance` (`id-ID`) untuk fitur Text-to-Speech (TTS) pembacaan terjemahan hadis tanpa external API key. |
| **Graphic / Image Engine** | Canvas 2D Context API | Native Browser | Render kartu kutipan berbasis `HTMLCanvasElement` 2D murni (Story 9:16 & Post 1:1) tanpa dependensi `html2canvas` yang rentan layout glitch. |
| **Modal / Overlay Engine** | HTML5 Dialog API | Native Browser | Menggunakan `<dialog>` native dengan `showModal()` dan `::backdrop` blur untuk bottom sheet filter dan menu edukasi. |
| **State Persistence** | Web Storage API | Native Browser | `localStorage` dengan key tunggal terisolasi `hadis_keluarga_saved` untuk menyimpan daftar bookmark hadis. |
| **Platform Target** | Web & PWA-ready Static Host | — | Dioptimalkan untuk GitHub Pages (`/HADIS-HK/`) dengan path statis terjamin. |

---

## 2. Existing Project Architecture

### 2.1 Struktur Direktori Project
```text
hadis-keluarga-web/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline otomatis GitHub Actions untuk GitHub Pages
├── docs/                           # Dokumentasi kompilasi materi & spesifikasi akademik
├── public/                         # Aset publik statis (favicon, manifest, assets)
├── src/
│   ├── assets/
│   │   ├── hero.png                # Aset ilustrasi arsitektural kubah/masjid heritage
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── education/
│   │   │   └── FivePillarsView.tsx # Halaman modul 5 Pilar Keluarga Sakinah
│   │   ├── filters/
│   │   │   └── FilterBottomSheet.tsx # Bottom sheet penyaringan bab siklus & tag isu
│   │   ├── hadith/
│   │   │   ├── EditorialBanner.tsx # Banner header editorial dengan background hero
│   │   │   ├── HadithListItem.tsx  # Komponen kartu hadis pada list direktori
│   │   │   ├── HadithReader.tsx    # Reader interaktif hadis (Arab, Takhrij, 4 Mazhab, Mubadalah)
│   │   │   └── StageDirectoryList.tsx # List 8 bab siklus kehidupan keluarga
│   │   ├── layout/
│   │   │   ├── AppHeader.tsx       # Header aplikasi (Brand HK, Search input, Bookmark quick-link)
│   │   │   └── DesktopSidebar.tsx  # Sidebar navigasi tetap untuk viewport desktop (>= 1024px)
│   │   ├── modals/
│   │   │   └── EdukasiMenuSheet.tsx# Bottom sheet menu modul edukasi (5 Pilar & Kuis Relasi)
│   │   ├── navigation/
│   │   │   ├── BottomNav.tsx       # Bottom bar navigasi mobile (Bacaan, Filter, Edukasi, Tersimpan)
│   │   │   ├── ChapterStrip.tsx    # Bar navigasi horizontal bab siklus kehidupan
│   │   │   ├── StageIcon.tsx       # Renderer ikon dinamis Lucide untuk 8 bab siklus
│   │   │   └── stageLabels.ts      # Metadata & mapping label ringkas bab
│   │   ├── quiz/
│   │   │   └── RelationQuizView.tsx# Modul interaktif kuis evaluasi relasi pasutri (5 soal)
│   │   ├── quote-studio/
│   │   │   └── QuoteStudioView.tsx # Studio kartu kutipan hadis berbasis Canvas 2D
│   │   └── saved/
│   │       └── SavedList.tsx       # Daftar hadis yang dibookmark oleh pengguna
│   ├── data/
│   │   └── hadiths.ts              # Single source of truth data 23 hadis, 8 bab, 5 pilar, & 12 tag
│   ├── pages/
│   │   ├── HadithDetailPage.tsx    # Halaman detail hadis mandiri (fallback mobile view)
│   │   ├── LibraryPage.tsx         # Halaman direktori perpustakaan utama
│   │   └── SavedPage.tsx           # Halaman koleksi hadis tersimpan
│   ├── App.tsx                     # State router, layout orchestra, dan context provider
│   ├── index.css                   # Konfigurasi Tailwind v4, custom font tokens, dialog rules, button themes
│   └── main.tsx                    # Entry point React 19
├── .oxlintrc.json                  # Konfigurasi Oxlint
├── AGENTS.md                       # Panduan arsitektur & aturan pengembangan AI
├── DESIGN.md                       # Design System & Token Specification resmi
├── PRD_HADIS_HK.md                 # Product Requirement Document komprehensif
├── README.md                       # Dokumentasi publik repositori
├── package.json                    # Metadata dependensi & script project
├── tsconfig.json                   # Root TypeScript config
├── tsconfig.app.json               # TypeScript config untuk aplikasi browser
├── tsconfig.node.json              # TypeScript config untuk Vite bundler
└── vite.config.ts                  # Konfigurasi Vite & plugin Tailwind v4
```

### 2.2 Routing dan Navigasi
Aplikasi sengaja **tidak menggunakan `react-router-dom`**, melainkan mengadopsi **State-Driven Routing terpusat** di dalam [App.tsx](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/App.tsx).
- **Rasionalitas Desain**: Menghindari problem klasik SPA 404 pada GitHub Pages static hosting ketika pengguna melakukan deep refresh pada subdirektori (misal `/HADIS-HK/hadis/1`).
- **Definisi Route State**:
  ```typescript
  type Route = 'library' | 'detail' | 'quote' | 'pillars' | 'quiz' | 'saved';
  ```
- **Transisi Antar Tampilan**: Dikelola secara deklaratif dengan passing callback `onNavigate(route, hadithId?)` ke setiap komponen halaman dan bottom navigation.

### 2.3 Arsitektur Multi-Viewport (Responsive Strategy)
1. **Mobile Viewport (< 1024px)**:
   - Layout satu kolom fluid (`360px` – `430px` safe range).
   - Sticky header atas dengan search bar dan bookmark counter.
   - Horizontal sliding chapter strip (`no-scrollbar`).
   - Sticky bottom navigation bar dengan 4 menu utama: **Bacaan**, **Filter**, **Edukasi**, **Tersimpan**.
   - Filter & Menu Edukasi dibuka dalam bentuk **Bottom Sheet Modal** native.
2. **Desktop Viewport (>= 1024px)**:
   - Bertransformasi menjadi **Editorial Digital Library 3 Kolom**:
     - **Kolom Kiri (Sidebar, 248–272px)**: Header branding, daftar 8 bab siklus dengan counter hadis, dan akses cepat ke 5 Pilar & Kuis Relasi.
     - **Kolom Tengah (Daftar Hadis, 320–360px)**: Search bar, tag filter chips, dan daftar vertikal hadis dengan highlight item aktif.
     - **Kolom Kanan (Reading Pane, flex-1)**: Full reader hadis menampilkan teks Arab dengan harakat lengkap, takhrij, komparasi 4 mazhab, hermeneutika Mubadalah, kaidah pasutri, serta tombol ekspor ke Quote Studio.

---

## 3. Existing Features

| No | Fitur | Status Fungsional | Deskripsi & Bukti Implementasi |
| :---: | :--- | :---: | :--- |
| **1** | **Eksplorasi Perpustakaan 8 Siklus Kehidupan** | **Aktif (100%)** | Mengelompokkan materi ke dalam 8 bab siklus: Pra-Nikah, Akad, Domestik, Finansial, Keintiman, Konflik, Perceraian, dan Pengasuhan. |
| **2** | **Mesin Pencarian Real-Time** | **Aktif (100%)** | Pencarian instan multi-field (judul, terjemahan Indonesia, teks Arab, nama kitab takhrij, nomor hadis, dan tag permasalahan) dengan debounce minimal. |
| **3** | **Filter Topik & 12 Tag Isu Kontemporer** | **Aktif (100%)** | Filter komparatif per bab dan 12 tag isu (Pernikahan, Mahar, Keluarga, Kesetaraan, Anti-KDRT, Hak Istri, dll.) melalui Bottom Sheet (mobile) dan Sidebar (desktop). |
| **4** | **Sanad Arab & Terjemah Sanad** | **Aktif (100%)** | Rantai transmisi hadis lengkap dengan harakat, dilengkapi tombol sakelar (*toggle*) show/hide sanad untuk kenyamanan fokus pembaca. |
| **5** | **Matn Arab dengan Pengatur Ukuran** | **Aktif (100%)** | Teks inti hadis Arab berharakat penuh menggunakan font *Amiri* / *Noto Naskh Arabic* dengan kontrol ukuran proporsional (A- `22px`, A `26px`, A+ `32px`). |
| **6** | **Takhrij Sumber Hadis Resmi** | **Aktif (100%)** | Referensi kitab primer (Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Sunan at-Tirmidzi, dll.), nama bab, dan nomor hadis terstandar. |
| **7** | **Tab Analisis Hermeneutika Mubadalah** | **Aktif (100%)** | Pembacaan relasi kesalingan gender berbasis metodologi Prof. Dr. Faqihuddin Abdul Kodir, MA.: ringkasan, 'illat hukum, poin kesalingan, dan aplikasi masa kini. |
| **8** | **Tab Fiqh Komparatif 4 Mazhab & KHI** | **Aktif (100%)** | Matriks pandangan Mazhab Hanafi, Maliki, Syafi'i, Hanbali, serta integrasi pasal Kompilasi Hukum Islam (KHI) di Indonesia. |
| **9** | **Kaidah Operasional Pasutri** | **Aktif (100%)** | Pedoman praktis dan aplikatif bagi suami dan istri dalam kehidupan sehari-hari berdasarkan hadis terkait. |
| **10** | **Audio Text-to-Speech (TTS)** | **Aktif (100%)** | Pembacaan audio otomatis terjemahan Indonesia menggunakan native Web Speech API dengan indikator status putar/berhenti. |
| **11** | **Salin Kutipan Akademik** | **Aktif (100%)** | Menyalin kutipan berformat rapi (Matn Arab + Terjemah Indonesia + Takhrij) ke clipboard dengan notifikasi toast visual. |
| **12** | **Sistem Bookmark Lokal (Tersimpan)** | **Aktif (100%)** | Penyimpanan hadis favorit secara persisten ke browser `localStorage` dengan badge counter dinamis. |
| **13** | **Studio Kartu Kutipan Berbasis Canvas 2D** | **Aktif (100%)** | Pembuat grafis kutipan resolusi tinggi: rasio Story 9:16 (`1080x1920`) dan Post 1:1 (`1080x1080`), 3 tema visual, unduh PNG, dan Web Share. Bebas dari html2canvas. |
| **14** | **Modul Edukasi 5 Pilar Keluarga Sakinah** | **Aktif (100%)** | Penjelasan mendalam 5 pilar (Mitsaqan Ghalizhan, Zawaj, Mu'asyarah bi al-Ma'ruf, Tasyawur, Taradhin) dilengkapi dalil ayat Al-Qur'an dan implementasinya. |
| **15** | **Kuis Evaluasi Relasi Pasutri** | **Aktif (100%)** | Kuis diagnostik 5 skenario rumah tangga dengan skor interaktif, analisis kategori relasi, dan rekomendasi hadis terkait. |

---

## 4. Page Inventory

Berikut adalah inventaris lengkap seluruh tampilan antarmuka (Pages & Sub-views) beserta lokasinya:

| Page / View Component | Path File Sumber | Route State | Deskripsi & Komponen Pendukung |
| :--- | :--- | :--- | :--- |
| **LibraryPage** | [`src/pages/LibraryPage.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/pages/LibraryPage.tsx) | `'library'` | Beranda utama: search bar, horizontal chapter strip, editorial hero banner, direktori 8 bab siklus, daftar hadis, dan desktop 3-kolom layout. |
| **HadithDetailPage** | [`src/pages/HadithDetailPage.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/pages/HadithDetailPage.tsx) | `'detail'` | Tampilan mandiri pembacaan hadis lengkap (khusus mobile navigation): mengemas `HadithReader.tsx` dengan top navigation back button. |
| **SavedPage** | [`src/pages/SavedPage.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/pages/SavedPage.tsx) | `'saved'` | Halaman koleksi hadis tersimpan: mengemas `SavedList.tsx` dengan opsi hapus bookmark dan navigasi langsung ke detail hadis. |
| **QuoteStudioView** | [`src/components/quote-studio/QuoteStudioView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/quote-studio/QuoteStudioView.tsx) | `'quote'` | Sub-view generator grafis media sosial: canvas preview, pemilih aspek rasio (9:16 / 1:1), 3 varian tema, tombol unduh PNG, share, dan salin teks. |
| **FivePillarsView** | [`src/components/education/FivePillarsView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/education/FivePillarsView.tsx) | `'pillars'` | Sub-view modul 5 Pilar Keluarga Sakinah: tab horizontal pilar, ilustrasi, teks Arab ayat, terjemahan, penjelasan makna, dan implementasi rumah tangga. |
| **RelationQuizView** | [`src/components/quiz/RelationQuizView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/quiz/RelationQuizView.tsx) | `'quiz'` | Sub-view evaluasi relasi: step indicator 1–5, pertanyaan interaktif, tombol opsi pilihan, diagnosis skor akhir, dan link hadis rujukan. |
| **FilterBottomSheet** | [`src/components/filters/FilterBottomSheet.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/filters/FilterBottomSheet.tsx) | Modal Overlay | Dialog sheet pemilihan bab siklus kehidupan (radio list) dan pemilihan tag populer (chips) dengan tombol Reset dan Terapkan. |
| **EdukasiMenuSheet** | [`src/components/modals/EdukasiMenuSheet.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/modals/EdukasiMenuSheet.tsx) | Modal Overlay | Dialog sheet navigasi mobile untuk membuka modul 5 Pilar Keluarga Sakinah atau Kuis Evaluasi Relasi. |

---

## 5. Data Architecture

Arsitektur data berpusat secara utuh pada satu file repositori kanonik: [`src/data/hadiths.ts`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/data/hadiths.ts). Tidak terdapat dependensi database eksternal (PostgreSQL, Supabase, Firebase) maupun request API jaringan, menjamin **100% offline capability** dan integritas teks suci.

### 5.1 Skema Data Utama
```typescript
export type Stage =
  | 'pra-nikah'
  | 'akad'
  | 'domestik'
  | 'finansial'
  | 'keintiman'
  | 'konflik'
  | 'perceraian'
  | 'pengasuhan';

export interface PerbandinganMazhab {
  hanafi: string;
  maliki: string;
  syafii: string;
  hanbali: string;
  khiDanKonteks: string;
}

export interface AnalisisMubadalah {
  ringkasan: string;
  illatHukum: string;
  poinKesalingan: string;
  aplikasiHariIni: string;
}

export interface HadithItem {
  id: number;
  nomor: number;
  nomorHadis: string;
  kitab: string;
  bab: string;
  judul: string;
  stage: Stage;
  pilarSakinah: string;
  tags: string[];
  sanadArab: string;
  sanadTerjemah: string;
  matnArab: string;
  matnTerjemah: string;
  takhrij: string;
  fiqhArusUtama: string;
  analisisMubadalah: AnalisisMubadalah;
  perbandinganMazhab: PerbandinganMazhab;
  kaidahOperasionalPasutri: string;
}
```

### 5.2 Inventaris Data Tersimpan
1. **23 Hadis Kanonik (`HADITHS_DATA`)**:
   - Tersebar proporsional dalam 8 bab siklus kehidupan.
   - Dilengkapi sanad Arab berharakat, matn Arab berharakat, terjemahan Indonesia baku, takhrij kitab & nomor, kajian fiqh 4 mazhab, komparasi pasal KHI, hermeneutika Mubadalah, dan kaidah operasional.
2. **8 Bab Siklus Kehidupan (`STAGES`)**:
   - `pra-nikah`, `akad`, `domestik`, `finansial`, `keintiman`, `konflik`, `perceraian`, `pengasuhan`.
3. **5 Pilar Keluarga Sakinah (`PILAR_SAKINAH`)**:
   - Mitsaqan Ghalizhan (QS. An-Nisa: 21), Zawaj (QS. Ar-Rum: 21), Mu'asyarah bi al-Ma'ruf (QS. An-Nisa: 19), Tasyawur (QS. Al-Baqarah: 233), Taradhin (QS. Al-Baqarah: 233).
4. **12 Tag Permasalahan Populer (`POPULAR_TAGS`)**:
   - Pernikahan, Mahar, Keluarga, Kesetaraan, Anti-KDRT, Hak Istri, dll.
5. **Client Local Storage**:
   - Key: `'hadis_keluarga_saved'`
   - Value: Serialized JSON array of number IDs (contoh: `[1, 5, 12]`).

---

## 6. Existing Design System

Desain mengadopsi filosofi **Editorial Islamic Digital Library** dan **Warm Heritage Scholarly Tone**, merujuk pada standar yang ditetapkan di [DESIGN.md](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/DESIGN.md) dan [src/index.css](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/index.css).

### 6.1 Palet Warna Inti
- **Background Utama**: `#FFFFFF` (Card raised) / `#FDF9F5` (Surface base) / `#F7F3EF` (Surface soft).
- **Aksen Heritage & Karakter Cokelat**:
  - Primary Brown: `#C6A17B` / `#B09768` (Gold Accent)
  - Brown Dark / Brand Deep: `#795A3F` / `#301A05` / `#220B02`
  - Secondary Brown: `#4C2605`
  - Canvas Sand: `#C8B69F`
- **Tipografi Teks**:
  - Teks Utama (Primary): `#111827` / `#352719`
  - Teks Sekunder (Secondary): `#6B7280` / `#6B5B49`
  - Teks Inverted: `#FFF9F5`
- **Border & Pembatas**: `#E5E7EB` / `#D9D0C4` / `#6B5133`

### 6.2 Sistem Tipografi
1. **Interface / UI**: `Inter`, system-ui, sans-serif (navigasi, tombol, metadata, label form).
2. **Display / Editorial**: `Cormorant Garamond`, `Lora`, serif (judul bab, judul artikel hadis, headline kutipan).
3. **Teks Arab Suci (Scholar)**: `Amiri`, `Noto Naskh Arabic`, serif dengan unitless `line-height: 2.15` untuk menjaga kejelasan baris harakat, kasrah, dan shaddah.

### 6.3 Komponen UI Reusable
- **Tombol Heritage**: `.btn-heritage-primary` (solid deep brown), `.btn-heritage-gold` (warm gold), `.btn-heritage-soft` (warm tint), `.btn-heritage-outline` (minimalist border).
- **Dialog & Modal**: Native `<dialog.bottom-sheet-dialog>` dengan backdrop blur dan overscroll containment.
- **Scrollbar**: Kelas utilitas `.no-scrollbar` untuk carousel horizontal mobile dan 6px custom scrollbar pada desktop.

---

## 7. Technical Problems & Observasi Kritis

Meskipun aplikasi saat ini dapat dibangun (*build*) dengan 0 error dan lolos linter Oxlint dengan 0 peringatan, audit mendalam menemukan beberapa aspek teknis yang perlu diperhatikan:

1. **State-Based Navigation Tanpa Deep-Linking URL**:
   - Navigasi sepenuhnya menggunakan state React (`route`). Jika pengguna me-refresh halaman saat berada di halaman Detail Hadis atau Quote Studio, aplikasi akan kembali ke tampilan default (`library`).
   - *Catatan*: Ini sengaja dilakukan untuk menghindari 404 pada GitHub Pages, namun dapat ditingkatkan dengan hash-based routing (`window.location.hash`).
2. **Font Rendering Dependency pada Canvas Quote Studio**:
   - Generator Canvas 2D menggambar teks font `Amiri` dan `Cormorant Garamond`. Jika web font Google belum selesai diunduh saat pertama kali dibuka, Canvas berisiko merender font fallback sistem (sans-serif) sebelum `document.fonts.ready` tuntas dipanggil.
3. **Inkonsistensi Nilai Token Warna di Beberapa Komponen**:
   - Terdapat percampuran antara token CSS variables (misal `var(--color-surface)`) dan hardcoded Tailwind hex class (seperti `bg-[#F9F7F5]` vs `bg-[#FDF9F5]`, `text-[#111827]` vs `text-[#352719]`). Perlu standardisasi menyeluruh pada fase redesign.
4. **Dokumentasi README.md yang Belum Tersinkronisasi**:
   - File `README.md` saat ini masih menyebutkan "7 Siklus Kehidupan" (padahal di `hadiths.ts` terdapat 8 siklus lengkap).
   - `README.md` masih mencantumkan dependensi lawas `html2canvas`, padahal kode sudah dimutakhirkan menggunakan Canvas 2D API native.

---

## 8. Maintenance Recommendations

1. **Implementasi Hash Routing Ringan**:
   - Pertahankan arsitektur tanpa library routing berat, namun sinkronkan state `route` dan `selectedHadithId` dengan `window.location.hash` (contoh: `#/hadis/1`, `#/koleksi`). Dengan hash routing, GitHub Pages **tetap 100% aman dari error 404** sementara pengguna mendapatkan kemampuan tombol *Back/Forward* browser dan deep linking.
2. **Standardisasi Token Desain pada Tailwind v4 `@theme`**:
   - Konsolidasikan seluruh palet warna (Primary Brown `#C6A17B`, Dark Brown `#795A3F`, Background `#FFFFFF`/`#F9F7F5`, Border `#E5E7EB`) ke dalam token `@theme` di `src/index.css` agar tidak terjadi divergensi kode hex langsung di inline class.
3. **Penyempurnaan Async Font Loader pada Quote Studio**:
   - Tambahkan `await document.fonts.ready` sebelum mengeksekusi instruksi gambar Canvas untuk memastikan tipografi Arab dan Latin selalu ter-render dengan font aslinya.
4. **Sinkronisasi Dokumen README.md**:
   - Perbarui angka 7 bab siklus menjadi 8 bab siklus dan hapus referensi `html2canvas` agar dokumentasi publik akurat dengan source code aktual.

---

## 9. Redesign Constraints (Batasan Mutlak)

Sesuai arahan dan prinsip **Project Preservation**:

1. **Preservasi Data Akademik (Kanonik)**:
   - Dilarang memodifikasi, memotong, mereduksi, atau mengarang data 23 hadis, sanad Arab, matn Arab, takhrij, maupun kajian 4 mazhab dan Mubadalah di `src/data/hadiths.ts`.
2. **Preservasi Teknologi (No Framework Migration)**:
   - Tetap menggunakan React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, dan native browser API. Dilarang mengganti framework ke Next.js/Nuxt atau menginstal external CSS framework lain tanpa izin.
3. **Prinsip Anti-AI-Slop & Editorial Library**:
   - Desain visual wajib mengikuti referensi gambar: minimalis, akademis, bersih, elegan, dan fokus pada keterbacaan teks hadis. Dilarang menambahkan gradient norak, glassmorphism berlebihan, floating shapes tak bermakna, atau tumpukan kartu dashboard generic.
4. **Preservasi Aksesibilitas Tipografi Arab**:
   - Teks Arab harus menggunakan font *Amiri* / *Noto Naskh Arabic* dengan *line-height* minimal `2.0` - `2.15` agar tanda baca harakat tidak bertumpuk atau terpotong pada layar ponsel mana pun.
5. **Mobile-First & Touch Targets**:
   - Seluruh elemen sentuh pada mobile wajib memenuhi standar minimum 44x44px tanpa adanya horizontal scroll overflow pada lebar layar 360px hingga 430px.
6. **Integritas Build & Linter**:
   - Seluruh perubahan pada fase berikutnya harus mempertahankan status **0 Oxlint errors/warnings** dan lolos **TypeScript production build**.

---
*Laporan ini disusun sebagai landasan resmi sebelum memasuki tahap implementasi UI/UX redesign.*