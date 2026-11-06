# PRODUCT REQUIREMENT DOCUMENT (PRD)
## HADIS HUKUM KELUARGA ISLAM (HADIS HK)
### Platform Digital Akademik & Studi Fiqh al-Usrah Berbasis Kesalingan (Mubadalah)

---

| **Atribut Dokumen** | **Detail** |
|---------------------|------------|
| **Nama Produk** | Hadis HK (Hadis Hukum Keluarga Islam) |
| **Versi Dokumen** | 2.0 (Redesign Edition) |
| **Status** | Approved & Ready for UI/UX Design (Figma / Web Prototyping) |
| **Target Rilis** | Web App (Mobile-First Responsive & Desktop Library Workspace) |
| **Domain** | Hukum Keluarga Islam (HKI), Fiqh al-Usrah, Studi Hadis, Hermeneutika Mubadalah |
| **Tech Stack Acuan** | React 19, TypeScript, Tailwind CSS v4, HTML5 Canvas 2D API, Web Speech API, LocalStorage |

---

## 1. EXECUTIVE SUMMARY & PRODUCT VISION

### 1.1 Latar Belakang Masalah
Kajian hukum keluarga Islam di ruang digital saat ini sering kali terjebak dalam dua ekstrem:
1. **Situs Kitab Kuning Konvensional**: Teks Arab padat tanpa hierarki visual yang jelas, minim konteks sosial kontemporer, dan sulit diakses oleh generasi muda atau calon pasutri di perangkat seluler.
2. **Konten Populer & Landing Page Generik**: Menyederhanakan persoalan hukum keluarga menjadi dogma sepihak, sering menampilkan dalil tanpa rantai sanad atau takhrij yang kredibel, serta mengabaikan perbandingan mazhab dan Kompilasi Hukum Islam (KHI).

### 1.2 Visi Produk
Menjadi **"The Definitive Editorial Islamic Digital Library"** untuk studi hukum keluarga Islam di Indonesia. Sebuah platform referensi rujukan akademik yang memadukan kedalaman riset hadis (sanad, matn, takhrij, muqaranah mazhab) dengan pendekatan etika kesalingan (*Mubadalah*) yang aplikatif bagi kehidupan perkawinan kontemporer.

### 1.3 Karakter Visual & Filosofi Desain
- **Bukan Dashboard SaaS / Startup**: Hindari widget metrik bisnis, badge sintetis bertumpuk, atau tata letak analitik korporat.
- **Bukan Landing Page Pemasaran AI**: Hindari hero banner raksasa bergradien mencolok, glassmorphism, efek glow, bayangan tebal, dan teks pemanis marketing.
- **Editorial Islamic Digital Library**: Tenang, berwibawa, bersih (*clean academic white*), proporsional, serta mengutamakan kenyamanan membaca (*reading-first experience*) dalam durasi panjang.

---

## 2. USER PERSONAS & USER JOURNEY

### 2.1 Target Pengguna
1. **Mahasiswa & Peneliti Hukum Keluarga Islam (HKI)**: Memerlukan akurasi teks Arab (harakat lengkap), rantai sanad lengkap, nomor kitab/bab, dan komparasi pendapat 4 mazhab fiqh serta pasal KHI yang relevan.
2. **Calon Pengantin & Pasangan Suami-Istri**: Membutuhkan panduan etika relasi perkawinan yang konkret (misal: kerja domestik, nafkah keluarga, pencegahan KDRT, komunikasi asertif) dengan bahasa yang sejuk dan memberdayakan.
3. **Dosen, Hakim Pengadilan Agama & Penyuluh KUA**: Membutuhkan materi terstruktur per siklus hidup keluarga serta alat pembuat kartu kutipan edukatif untuk bahan ajar atau penyuluhan masyarakat.

### 2.2 Core User Journey
```mermaid
flowchart TD
    A[Pengguna Membuka Web] --> B{Pilih Jalur Eksplorasi}
    B -->|Pencarian Cepat| C[Smart Search Bar: Kata Kunci/Kitab/Perawi/Isu]
    B -->|Navigasi Siklus| D[8 Bab Siklus Kehidupan: Pra-Nikah s/d Pengasuhan]
    B -->|Filter Spesifik| E[Bottom Sheet / Sidebar Filter: 12 Tag Isu Keluarga]
    B -->|Refleksi Fondasi| F[5 Pilar Sakinah & Kuis Evaluasi Relasi]
    
    C --> G[Daftar Riwayat Hadis]
    D --> G
    E --> G
    
    G --> H[Halaman Detail / Reading Pane Teks Lengkap]
    H --> I[Kontrol Baca: Toggle Sanad, Zoom Teks Arab, Audio TTS, Salin Takhrij]
    H --> J[Kajian 3-Tab: Mubadalah | 4 Mazhab & KHI | Fiqh Arus Utama]
    H --> K[Kaidah Operasional Pasutri Hari Ini]
    H --> L[Studio Kartu Kutipan: Canvas 2D Story 9:16 & Post 1:1]
    H --> M[Simpan ke Koleksi Tersimpan / Bookmark]
```

---

## 3. ARSITEKTUR INFORMASI & STRUKTUR KONTEN

### 3.1 Taksonomi 8 Bab Siklus Kehidupan (Life-Cycle Taxonomy)
Seluruh hadis dikelompokkan ke dalam 8 tahapan relasi yang runut secara kronologis:
1. `pra-nikah`: **Pra-Nikah & Khitbah** (Kriteria memilih pasangan, hak persetujuan mempelai wanita, pembatalan nikah paksa, larangan melamar di atas lamaran saudara).
2. `akad`: **Akad, Mahar & Perjanjian Perkawinan** (Mahar yang memudahkan, perjanjian perkawinan/taklik talak, keabsahan saksi, keterbukaan komitmen).
3. `domestik`: **Keseharian & Kerja Domestik** (Keteladanan Nabi ﷺ dalam pekerjaan rumah, prinsip gotong royong dan kesetaraan martabat, penghapusan stereotip maskulinitas toksik).
4. `finansial`: **Finansial, Nafkah & Harta Keluarga** (Nafkah bil ma'ruf, status penghasilan istri bekerja, sedekah intra-keluarga, pengelolaan ekonomi bersama).
5. `keintiman`: **Keintiman & Hak Reproduksi** (Persetujuan dan kelembutan relasi seksual, larangan marital coercion/kekerasan intim, hak kesehatan reproduksi bersama).
6. `konflik`: **Resolusi Konflik & Anti-KDRT** (Larangan keras memukul istri/KDRT, mekanisme arbitrase/hakam, komunikasi asertif tanpa penghinaan).
7. `perceraian`: **Perceraian & Gugat Khulu'** (Hak gugat cerai/khulu' bagi istri, etika perpisahan secara ma'ruf, pemenuhan hak nafkah mut'ah dan 'iddah).
8. `pengasuhan`: **Pengasuhan Anak & Hadhanah** (Keterlibatan aktif ayah/fathering, hak pengasuhan ibu, pendidikan kasih sayang tanpa kekerasan).

### 3.2 12 Tag Permasalahan Keluarga Kontemporer
- `#Pernikahan`, `#Mahar`, `#Keluarga`, `#Kesetaraan`, `#Anti-KDRT`, `#HakIstri`, `#Komunikasi`, `#Keintiman`, `#Finansial`, `#Pengasuhan`, `#Perceraian`, `#Pranikah`.

### 3.3 Struktur Data Standar Hadis (Schema Canonical)
Setiap hadis wajib memiliki field informasi berikut:
```typescript
interface HadithItem {
  id: string;                      // misal: 'bukhari-5090'
  title: string;                   // Judul tematik informatif
  stageId: string;                 // Relasi ke 8 Siklus Kehidupan
  rawi: string;                    // Nama Sahabat perawi utama
  kitab: string;                   // Nama Kitab (misal: Sahih al-Bukhari)
  kitabBab: string;                // Nama Bab dalam kitab induk
  noHadis: string;                 // Nomor hadis resmi
  sanadArab: string;               // Rantai perawi lengkap teks Arab berharakat
  terjemahanSanad: string;         // Terjemahan rantai transmisi dalam bahasa Indonesia
  matnArab: string;                // Matn/isi sabda kenabian teks Arab berharakat
  terjemahan: string;              // Terjemahan sabda dalam bahasa Indonesia
  quoteSnippet: string;            // Kutipan inti untuk kartu visual
  takhrij: {                       // Catatan derajat dan jalur periwayatan
    status: string;
    jalurLain: string;
    catatan: string;
  };
  pemaknaanMubadalah: {           // Pembacaan perspektif kesalingan
    ringkasan: string;
    illatHukum: string;
    poinKesalingan: string[];
    aplikasiHariIni: string[];     // Kaidah operasional pasutri
  };
  perbandinganMazhab: {            // Muqaranah 4 Mazhab Fiqh & KHI
    hanafi: string;
    maliki: string;
    syafii: string;
    hanbali: string;
    khiDanKonteks: string;
  };
  pemaknaanKonvensional: {        // Pembacaan fiqh tekstual arus utama
    ringkasan: string;
    poin: string[];
  };
  pilarTerkait: string[];          // Relasi ke 5 Pilar Keluarga Sakinah
  tags: string[];                  // Tag isu keluarga
}
```

---

## 4. SPESIFIKASI FITUR & KEBUTUHAN FUNGSIONAL

### 4.1 Modul 1: Beranda & Katalog Hadis (Library View)
- **Header**:
  - Logo monogram `HK` dalam wadah rounded-xl warna dark brown (`#795A3F`).
  - Identitas: *Hadis HK — Riset Hadis • Hukum Keluarga Islam*.
  - Indikator koleksi tersimpan (ikon Bookmark dengan counter real-time).
- **Search Engine**:
  - Input teks pencarian instan dengan ikon search dan tombol clear `(X)`.
  - Kemampuan pencarian semantik pada: judul hadis, nomor hadis, nama kitab, nama perawi, potongan terjemahan, dan tagar.
- **Horizontal Chapter Strip**:
  - Pil navigasi bab yang dapat digeser menyamping (*horizontal scrollable without scrollbar*).
  - Pilihan: `Semua (23)` diikuti oleh 8 nama bab siklus kehidupan.
  - State aktif: latar belakang brown dark (`#795A3F`) dengan teks putih; state inaktif: latar warm gray border.
- **Editorial Banner Card**:
  - Judul: *"Hadis untuk Keluarga Sakinah"*.
  - Subteks: *"Membangun rumah tangga berdasarkan sunnah Nabi ﷺ"*.
  - Ornamen visual: Siluet arsitektural kubah dan menara masjid bernuansa krem-cokelat lembut.
- **Direktori 8 Siklus Kehidupan**:
  - Grid/list 4 card awal dengan ikon representatif bundar cokelat, judul bab, dan indikator jumlah hadis.
  - Tombol expand: *"Lihat Semua Bab (8 Siklus) →"*.
- **Daftar Hadis (Feed / List Item)**:
  - Kartu hadis editorial dengan padding proporsional.
  - Metadata: Badge bab, nomor kanonik (`#1`), nama kitab, nomor hadis, dan nama perawi.
  - Judul hadis tebal dengan teks Arab cuplikan matn (`Amiri`).
  - Terjemahan ringkas (2-3 baris) dan tombol aksi *"Baca Lengkap →"*.

---

### 4.2 Modul 2: Halaman Detail & Pembaca Hadis (Hadith Reader)
- **Bilah Informasi Atas**:
  - Badge nama bab siklus hidup dengan bullet berlian (`◆`).
  - Label nama sahabat perawi utama.
  - Informasi rujukan: `#NoKanonik • Nama Kitab • Nomor Hadis`.
  - Judul hadis komprehensif.
- **Reader Control Bar (Single-Row Toolbar)**:
  - Seluruh kontrol tertata rapi dalam **satu baris** (bahkan pada layar 360px):
    1. *Sakelar Toggle Sanad*: Switch animasi untuk menampilkan atau menyembunyikan rantai sanad Arab & terjemahannya.
    2. *Pengatur Huruf Arab (`A-` / `A+`)*: Pengubah skala ukuran font teks Arab berbasis `rem` (1.15rem hingga 2.25rem).
    3. *Audio TTS*: Pemutar suara terjemahan Bahasa Indonesia menggunakan Web Speech API (`id-ID`).
    4. *Salin Teks Lengkap*: Tombol copy seluruh metadata, teks Arab, terjemahan, takhrij, dan catatan mazhab ke clipboard dengan indikator centang hijau.
    5. *Ekspor Studio*: Tombol shortcut langsung membuka Studio Kartu Kutipan.
    6. *Bookmark / Simpan*: Tombol toggle simpan hadis ke `localStorage`.
- **Anatomi Teks Arab Klasik**:
  - Teks Sanad Arab: Ditandai dengan tajuk kaligrafi `سَنَدُ الرِّوَايَةِ`, teks perawi berharakat rapi.
  - Teks Matn Arab: Ditandai dengan tajuk kaligrafi `نَصُّ الْمَتْنِ`, ukuran lebih besar dan tebal, teks sabda nabi diapit kurung arab `« ... »`.
  - Garis batas halus antara sanad dan matn.
- **Kotak Terjemahan Hangat (Warm Callout)**:
  - Wadah bersudut melengkung dengan latar warm tint (`#F6F1EA`) dan aksen border kiri cokelat tebal (`#C6A17B`).
  - Terjemahan sanad (italic) dan terjemahan matn sabda dengan tanda kutip elegan.
- **Catatan Takhrij Sumber**:
  - Rujukan kitab, bab, nomor hadis, dan catatan jalur transmisi.
- **Tab Analisis Akademik 3-Perspektif (Single-Row Grid)**:
  - **Tab 1: Mubadalah (Kesalingan)**:
    - Ringkasan pemaknaan resiprokal suami-istri.
    - Penjelasan `'Illat Hukum` dan tujuan etis syariah (*Maqashid asy-Syari'ah*).
    - Poin-poin kesalingan dengan ikon checkmark hijau zaitun.
  - **Tab 2: 4 Mazhab & KHI**:
    - Grid 4 kartu komparasi: *Mazhab Hanafi*, *Mazhab Maliki*, *Mazhab Syafi'i*, *Mazhab Hanbali*.
    - Kotak khusus: *Kompilasi Hukum Islam (KHI) & Konteks Indonesia* (pasal-pasal KHI dan UU Perkawinan No. 1/1974).
  - **Tab 3: Fiqh Arus Utama**:
    - Ringkasan pembacaan fiqh tekstual dan catatan batas keberlakuan hukumnya.
- **Kaidah Operasional Pasutri Hari Ini**:
  - Kotak edukasi praktis berisi panduan langkah konkret bagi pasangan suami istri dalam menyelesaikan problem rumah tangga harian.
- **Pilar Sakinah Terkait & Tag Interaktif**:
  - Tagar yang dapat diklik untuk langsung menyaring hadis-hadis sejenis.

---

### 4.3 Modul 3: Filter Topik (Bottom Sheet Mobile & Sidebar Desktop)
- **Komponen**:
  - Mobile: Menggunakan native `<dialog closedby="any">` berbentuk bottom sheet yang muncul dari bawah layar dengan drag handle bar.
  - Desktop: Terintegrasi langsung pada sidebar kiri tanpa menutup pandangan utama.
- **Fitur Filter**:
  - Pemilihan 8 Bab Siklus Kehidupan dengan indikator radio button cokelat.
  - Pemilihan 12 Tag Populer dengan pill toggle button multi-select.
  - Tombol aksi: `Reset Filter` dan `Terapkan (N Hadis) →`.

---

### 4.4 Modul 4: Studio Kartu Kutipan (Quote Card Studio)
- **Teknologi Render**:
  - **Wajib menggunakan Pure HTML5 Canvas 2D API** (larangan keras menggunakan library `html2canvas` demi ketajaman raster, performa memori, dan zero-dependency).
  - Output resolusi ultra-tajam: 1080 x 1920 px (Story 9:16) dan 1080 x 1080 px (Post 1:1).
- **Format Rasio**:
  - Tab pengalih `Story (9:16)` dan `Post (1:1)`.
- **3 Tema Visual Editorial**:
  1. *Putih Bersih (Academic Light)*: Latar putih bersih, teks charcoal, bingkai warm border minimalis.
  2. *Kertas Naskah (Manuscript Paper)*: Latar krem serat perkamen (`#F8F3EC`), teks naskah hangat, ornamen kubah terakota.
  3. *Tinta Gelap (Scholarly Ink)*: Latar arang gelap mewah (`#231F1C`), teks krem emas lembut, nuansa malam khidmat.
- **Fitur Ekspor**:
  - `Unduh Gambar (PNG)`: Menghasilkan file blob PNG 1080p dengan nama otomatis `hadis-hk-[id]-[rasio]-[tema].png`.
  - `Bagikan`: Memanfaatkan native Web Share API (`navigator.share`) dengan file gambar (atau fallback salin tautan/teks).
  - `Salin Kutipan Teks`: Menyalin matn dan intisari hadis untuk dibagikan ke pesan WhatsApp/media sosial.

---

### 4.5 Modul 5: 5 Pilar Keluarga Sakinah (Interactive Pillars View)
- **Landasan Konseptual**:
  - Bersumber dari metodologi pembinaan keluarga sakinah Kementerian Agama RI & kajian kesalingan:
    1. *Mitsaqan Ghalizhan* (Ikatan Kokoh dan Suci - QS. An-Nisa: 21).
    2. *Zawaj* (Prinsip Berpasangan dan Setara - QS. Ar-Rum: 21).
    3. *Mu'asyarah bil Ma'ruf* (Memperlakukan Pasangan secara Bermartabat - QS. An-Nisa: 19).
    4. *Musyawarah* (Pengambilan Keputusan Bersama - QS. Al-Baqarah: 233).
    5. *Taradhin* (Saling Ridha dan Kerelaan Hati - QS. An-Nisa: 24).
- **Fitur Halaman**:
  - Tab navigasi kelima pilar di bagian atas.
  - Ilustrasi artistik mushaf terbuka di atas rehal kayu (*wooden bookstand*) bernuansa hangat.
  - Ayat Al-Qur'an lengkap teks Arab berharakat, nama surat/nomor ayat, dan terjemahan Indonesia.
  - Penjelasan teologis, aplikasi konkret dalam rumah tangga, dan tombol tautan langsung menuju bab hadis terkait.
  - Indikator halaman (dots) serta tombol navigasi `Sebelumnya` & `Selanjutnya`.

---

### 4.6 Modul 6: Kuis Evaluasi Relasi Sakinah (Relation Quiz)
- **Tujuan**: Alat refleksi diri mandiri non-judgemental bagi pasangan untuk mengukur sejauh mana prinsip kesalingan dan musyawarah telah dipraktikkan.
- **Mekanisme**:
  - 5 skenario problem rumah tangga konkret (misal: pengambilan keputusan finansial, pembagian kerja domestik ketika lelah, perbedaan pendapat pengasuhan, resolusi kemarahan, hak privasi).
  - Indikator progres bernuansa cokelat hangat (`1 / 5`).
  - Opsi jawaban radio button dengan umpan balik ramah.
  - Halaman hasil evaluasi: Skor persentase kesalingan, kategori capaian relasi, dan rekomendasi hadis rujukan yang relevan.

---

### 4.7 Modul 7: Koleksi Tersimpan (Saved Hadiths View)
- Penyimpanan lokal instan (*zero-login, zero-database*) memanfaatkan `localStorage`.
- Daftar kartu hadis yang disimpan dengan opsi buka pembacaan lengkap atau hapus dari daftar.
- Notifikasi status kosong jika belum ada hadis yang disimpan disertai tombol cepat kembali ke perpustakaan.

---

## 5. DESIGN SYSTEM & ATURAN UI/UX

### 5.1 Palet Warna Resmi
```css
/* Color Palette: Editorial Islamic Digital Library */
--bg-primary:      #FFFFFF; /* Latar Belakang Utama (Putih Bersih Akademik) */
--bg-secondary:    #F9F7F5; /* Latar Surface Sekunder / Card Latar Belakang */
--bg-warm-tint:    #F6F1EA; /* Latar Callout Terjemahan & Highlight */
--brown-primary:   #C6A17B; /* Primary Brown (Aksen Elegan & Border Terjemahan) */
--brown-dark:      #795A3F; /* Brown Dark (Tombol Primer, Status Aktif, Header) */
--brown-darker:    #634830; /* State Hover Tombol Primer */
--text-primary:    #111827; /* Charcoal Ink (Teks Utama Latin & Matn) */
--text-secondary:  #6B7280; /* Neutral Gray (Metadata, Deskripsi, Subjudul) */
--border-color:    #E5E7EB; /* Border Halus Komponen & Card */
--border-warm:     #E5DCD0; /* Border Hangat Callout & Aksen Naskah */
```

### 5.2 Tipografi & Kaidah Huruf
| Elemen | Jenis Huruf | Ukuran Relatif | Line Height | Keterangan |
|---|---|---|---|---|
| **Antarmuka (UI)** | `Inter`, system-ui, sans-serif | 11px - 16px | 1.5 - 1.55 | Bersih, keterbacaan tinggi di layar kecil |
| **Judul & Heading** | `Inter` (Bold / Semi-bold) | 16px - 22px | 1.3 - 1.4 | `text-wrap: balance` |
| **Teks Matn Arab** | `Amiri`, Traditional Arabic, serif | 20px - 36px (Scalable) | **2.35 (Unitless)** | Harakat jernih, wajib `dir="rtl"`, tidak boleh rapat |
| **Teks Sanad Arab** | `Amiri`, Traditional Arabic, serif | 16px - 26px (Scalable) | **2.25 (Unitless)** | Warna `#4B5563` dengan bobot reguler |
| **Teks Terjemahan** | `Inter` (Medium / Regular) | 13px - 15px | 1.6 - 1.7 | `text-wrap: pretty` |

### 5.3 Komponen Desain & Prinsip Ergonomi
1. **Touch Target Size**: Seluruh tombol, switch, dan link aksi mobile wajib memiliki area sentuh minimum **44 x 44 piksel** untuk mencegah *mis-tap*.
2. **Bottom Sheet & Modal Accessibility**:
   - Wajib menggunakan elemen native `<dialog closedby="any">`.
   - Menggunakan `overscroll-behavior: contain` pada `:modal` dan `::backdrop` untuk mencegah scroll-bleed pada halaman latar.
   - Dilengkapi fallback deteksi koordinat sentuh (`getBoundingClientRect`) untuk peramban yang belum mendukung atribut `closedby`.
3. **Responsive Breakpoints**:
   - **Mobile** (`360px`, `375px`, `390px`, `414px`, `430px`): Tata letak 1 kolom vertikal, navigasi bawah (*Bottom Navigation Bar* setinggi 64px), kontrol bilah 1 baris, tidak boleh terjadi *horizontal overflow* (`scrollWidth <= innerWidth`).
   - **Desktop** (`>= 1024px`, `1280px`, `1440px`): Tata letak perpustakaan digital **3 Kolom Terintegrasi**:
     - *Kolom Kiri (280px)*: Sidebar navigasi (pencarian, 8 bab + counter, 12 tag, menu pilar & kuis).
     - *Kolom Tengah (380px)*: Daftar riwayat hadis dengan cuplikan matn dan kartu aktif ter-highlight.
     - *Kolom Kanan (Flex-1)*: Reading Pane pembacaan hadis lengkap tanpa perlu membuka pop-up modal.

### 5.4 Larangan Desain (Design Prohibitions)
- ❌ Dilarang menggunakan efek glassmorphism, background blur berlebihan, atau neon glow.
- ❌ Dilarang menggunakan gradien tebal pelangi atau warna emas norak.
- ❌ Dilarang menggunakan emoji sebagai ikon antarmuka (wajib menggunakan icon pack profesional `lucide-react`).
- ❌ Dilarang menumpuk dialog pop-up di atas dialog lain.
- ❌ Dilarang memotong teks Arab dengan `overflow: hidden` atau `line-clamp` yang merusak harakat.

---

## 6. NON-FUNCTIONAL REQUIREMENTS (NFR)

1. **Performa & Ukuran Bundle**:
   - Waktu pemuatan awal (*First Contentful Paint*) `< 1.2 detik` pada koneksi 4G seluler.
   - Ukuran total bundle JavaScript produksi terkompresi `< 150 kB (gzip)`.
   - Menghindari library besar pembuat gambar seperti `html2canvas` yang boros memori.
2. **Aksesibilitas (WCAG 2.1 AA Compliance)**:
   - Rasio kontras teks utama terhadap background minimal `4.5:1`.
   - Seluruh tombol kontrol memiliki atribut `aria-label`, `title`, dan `role` yang semantik.
   - Dukungan pembaca layar (*screen reader*) pada navigasi tab dan pembacaan hadis.
3. **Privasi & Ketahanan Data (Privacy First)**:
   - Data bookmark tersimpan di perangkat lokal pengguna (*Client-side LocalStorage*).
   - Tanpa pelacak pihak ketiga (*no third-party ads/trackers*).
   - Seluruh konten statis dapat diakses secara instan.

---

## 7. RANGKUMAN CHECKLIST UNTUK DESAINER UI/UX

Jika Anda merancang antarmuka Hadis HK (misal di Figma), pastikan mencakup 7 layar utama berikut:

| No | Layar (Screen) | Komponen Kunci yang Wajib Tersedia |
|---|---|---|
| **01** | **Beranda / Katalog (Mobile)** | Header monogram HK, Search bar, Chapter Strip (8 Bab), Banner Hadis Sakinah, Direktori 4 Card Bab, Feed Hadis, Bottom Nav. |
| **02** | **Detail Hadis Lengkap (Mobile)** | Badge bab, rujukan kitab & nomor, judul hadis, Reader Bar 1-Baris (Toggle Sanad, A-/A+, Audio, Copy, Share, Bookmark), Teks Sanad Arab, Teks Matn Arab, Kotak Terjemahan Hangat, Takhrij, 3 Tab Analisis (Mubadalah, 4 Mazhab, Fiqh Arus Utama), Kaidah Pasutri. |
| **03** | **Filter Topik (Bottom Sheet)** | Drag handle, radio list 8 Bab Siklus Kehidupan, multi-select 12 Tag Populer, tombol Reset dan Terapkan. |
| **04** | **Studio Kartu Kutipan** | Toggle Rasio (Story 9:16 vs Post 1:1), Live Canvas Preview (monogram HK, ornamen kubah masjid), selector 3 Tema Warna, tombol Unduh PNG 1080p, Bagikan, dan Salin Teks. |
| **05** | **5 Pilar Sakinah** | Tab 5 pilar, ilustrasi mushaf di atas rehal kayu, ayat Al-Qur'an dan terjemahan, uraian konsep, implementasi rumah tangga, navigasi Sebelumnya/Selanjutnya. |
| **06** | **Kuis Evaluasi Relasi** | Progress bar `1/5`, teks pertanyaan skenario, opsi jawaban radio card, tombol Lanjutkan, tampilan hasil persentase dan rekomendasi bab. |
| **07** | **Digital Library Workspace (Desktop)** | Tampilan 3 Kolom: Sidebar Navigasi Kiri + Feed Hadis Tengah + Full Reading Pane Kanan dalam 1 layar kerja yang tenang dan efisien. |

---
*Dokumen ini disusun sebagai panduan resmi pengembangan desain UI/UX dan implementasi frontend aplikasi Hadis Hukum Keluarga Islam (Hadis HK).*
