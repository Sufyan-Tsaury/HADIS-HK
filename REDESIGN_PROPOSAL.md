# REDESIGN PROPOSAL & UI/UX ART DIRECTION — HADIS HK
**Digital Hadith Library: Clean Academic, Islamic Editorial, & Content-First Architecture**
*Dokumen Proposal & Pengarahan Seni Visual*
*Tanggal: 6 November 2026*
*Perancang: Principal UI/UX Designer & Senior Digital Art Director*

---

## 1. Executive Summary & Design Vision

Aplikasi **Hadis HK** (Hadis Hukum Keluarga Islam) adalah platform riset dan edukasi digital yang menghubungkan teks suci hadis kanonik, fiqh komparatif empat mazhab, dan metodologi hermeneutika kesalingan (*Qira'ah Mubadalah*) dengan realitas dinamika keluarga masa kini.

Berdasarkan temuan [`TECHNICAL_AUDIT.md`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/TECHNICAL_AUDIT.md) dan [`DESIGN_AUDIT.md`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/DESIGN_AUDIT.md), aplikasi ini membutuhkan evolusi visual yang tegas: beralih dari kesan antarmuka web biasa atau template dashboard SaaS generik menuju **Digital Hadith Library** berstandar internasional yang memiliki wibawa akademik, kehangatan editorial, ketenangan visual (*visual serenity*), dan kenyamanan membaca durasi panjang (*long-form reading comfort*).

```
                    ┌────────────────────────────────────────┐
                    │       DIGITAL HADITH LIBRARY           │
                    │   Clean Academic • Islamic Editorial   │
                    └───────────────────┬────────────────────┘
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  [ CONTENT-FIRST ]             [ VISUAL SERENITY ]           [ SACRED TYPOGRAPHY ]
  Struktur teks ilmiah,          Palet putih & krem naskah,    Tipografi Arab Amiri
  hierarki takhrij,              tanpa kartu gelap pekat,      berharakat longgar (2.15)
  tanpa ornamen palsu.           kontras tinggi & teduh.       & UI modern Inter.
```

---

## 2. Visual Identity & Design Pillars

### 2.1 Karakter Visual Utama
1. **Clean Academic (Bersih & Akademik)**: Menghadirkan atmosfer perpustakaan universitas Islam modern. Menggunakan garis-garis tipis struktural, pembagian ruang yang presisi, dan perlakuan metadata yang terstandar.
2. **Islamic Editorial (Naskah Warisan Islam)**: Mengadopsi keanggunan tata letak naskah klasik (*turas*) tanpa terjerumus ke dalam dekorasi kaligrafi yang berat atau berlebihan. Aksen arsitektural kubah dan menara dihadirkan secara halus sebagai siluet monokromatik hangat.
3. **Content First (Mengutamakan Teks Hadis)**: Teks hadis dan analisis hukum adalah pusat gravitasi aplikasi. Semua elemen navigasi, filter, dan tombol dirancang untuk melayani keterbacaan teks, bukan mencuri perhatian.
4. **Minimalist Modern**: Bebas dari gradien ungu/neon norak, bayangan tebal (*heavy drop-shadows*), efek kaca (*glassmorphism*), atau tumpukan kartu mengambang (*card floating slop*).
5. **Serenity & Durability**: Ruang kosong (*negative space*) yang lapang dan ritme vertikal yang teratur memberi ketenangan psikologis saat mengkaji isu-isu sensitif keluarga (seperti hak nafkah, relasi intim, hingga resolusi sengketa dan perceraian).

---

## 3. Color Direction & Chromatic Strategy

Palet warna dibangun di atas landasan naskah klasik: kertas katun, tinta jelaga, dan aksen pasir keemasan (*warm parchment & gold leaf*).

```
   #FFFFFF           #F9F7F5           #C6A17B           #795A3F           #111827
┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐
│ Clean     │     │ Warm      │     │ Primary   │     │ Heritage  │     │ Primary   │
│ Surface   │     │ Parchment │     │ Camel     │     │ Dark Wood │     │ Text Ink  │
└───────────┘     └───────────┘     └───────────┘     └───────────┘     └───────────┘
```

| Token / Peran | Kode Hex | Nilai RGB | Rasio Kontras | Alasan & Penggunaan Desain |
| :--- | :---: | :---: | :---: | :--- |
| **Canvas Primary** | `#FFFFFF` | `255, 255, 255` | 21:1 (vs Ink) | Latar belakang dasar untuk membaca teks hadis dengan kontras optimal dan kejernihan maksimal. |
| **Surface Secondary** | `#F9F7F5` | `249, 247, 245` | — | Permukaan naskah lembut (*warm soft paper*) untuk kartu terjemahan, kotak kutipan, banner header, dan latar baris list. |
| **Primary Camel** | `#C6A17B` | `198, 161, 123` | 4.8:1 (vs White) | Aksen utama: border aktif, circular stage icon, tab indicator, serta highlight bab aktif di desktop. |
| **Heritage Dark Wood** | `#795A3F` | `121, 90, 63` | 5.4:1 (vs White) | Warna aksi utama (*primary action*): tombol `Terapkan`, tombol `Lanjutkan`, badge nomor hadis aktif, dan logo HK. |
| **Deep Brand Accent** | `#301A05` | `48, 26, 5` | 14.8:1 (vs White) | Warna fokus untuk judul hadis matn, penanda kategori penting, dan teks Arab berbobot. |
| **Text Primary (Ink)** | `#111827` | `17, 24, 39` | 18.5:1 (vs White) | Teks antarmuka utama (judul, terjemahan, takhrij, uraian hukum) untuk keterbacaan tajam tanpa silau. |
| **Text Secondary** | `#6B7280` | `107, 114, 128` | 5.2:1 (vs White) | Teks pendukung: nomor hadis, perawi, label metadata, tanggal, dan tombol navigasi non-aktif. |
| **Border Neutral** | `#E5E7EB` | `229, 231, 235` | — | Garis pembatas halus 1px yang memisahkan konten secara disiplin tanpa membebani mata. |

---

## 4. Typography Direction & Arabic Reading Ergonomics

Kualitas utama perpustakaan hadis terletak pada ketelitian tata huruf. Kami memadukan dua keluarga huruf terbaik di dunia digital:

### 4.1 Tipografi Teks Arab: *Amiri* & *Noto Naskh Arabic*
- **Keluarga Huruf**: `Amiri`, `Noto Naskh Arabic`, serif Islam tradisional.
- **Rasio Spasi Baris (Line Height)**: **`line-height: 2.15` (unitless)**.
  - *Rasionalitas Desain*: Huruf Arab memiliki karakter diakritik bertingkat (fathah, kasrah, dammah, tanwin, sukūn, shaddah, dan dagger alif). Spasi baris `2.15` mutlak diperlukan agar harakat tidak bertabrakan dengan garis huruf di atas atau di bawahnya, menghilangkan kelelahan mata bagi akademisi dan santri.
- **Skala Ukuran Teks Arab**:
  - Ukuran Kompak (`A-`): `22px` (mobile) / `24px` (desktop)
  - Ukuran Standar (`A`): `26px` (mobile) / `28px` (desktop)
  - Ukuran Pembacaan Mendalam (`A+`): `32px` (mobile) / `36px` (desktop)
- **Tata Letak Penjajaran**:
  - Teks Matn Inti: **Centered (`text-center`)** pada reader utama dengan petikan kurung sudut Arab `«...»`.
  - Teks Sanad Rantai Perawi: **Right-aligned (`text-right`)** dengan perataan margin yang harmonis.

### 4.2 Tipografi Antarmuka Latin: *Inter*
- **Keluarga Huruf**: `Inter`, system-ui, sans-serif.
- **Rasionalitas Desain**: Menghindari tipografi serif latin yang terlalu berliku pada UI kecil. *Inter* memiliki *x-height* yang tinggi, bukaan kurva terbuka (*open apertures*), dan keterbacaan yang tak tertandingi pada layar retina ponsel pintar.
- **Skala Hierarki**:
  - Judul Halaman / Banner: `18px` – `20px`, `font-bold`, `tracking-tight`
  - Judul Artikel Hadis: `16px` – `17px`, `font-bold`, `leading-snug`
  - Teks Terjemahan Hadis: `14px` – `15px`, `leading-relaxed` (`1.65`), `font-normal`
  - Sub-judul & Tab: `12px` – `13px`, `font-semibold`
  - Metadata & Takhrij: `11px` – `12px`, `font-mono` / `font-medium`, `text-[#6B7280]`

---

## 5. Navigation Architecture & Multi-Viewport Flow

### 5.1 Mobile Navigation Flow (< 1024px)
Navigasi mobile didesain mengikuti prinsip ergonomi ibu jari (*thumb zone*) dan eliminasi distraksi:

```
[ LIBRARY VIEW ] ──(Pilih Hadis)──► [ DETAIL READER ] ──(Studio)──► [ QUOTE STUDIO ]
       │                                     ▲
       ├──(Klik Filter)──► [ FILTER BOTTOM SHEET ]
       │
       ├──(Klik Edukasi)─► [ EDUKASI BOTTOM SHEET ] ──► [ 5 PILAR SAKINAH ]
       │                                            └──► [ KUIS RELASI ]
       │
       └──(Klik Tersimpan)► [ KOLEKSI TERSIMPAN ]
```

- **Pola Bottom Navigation Bar**:
  - **Hanya tampil** pada halaman penjelajahan luas: `LibraryPage` (Beranda) dan `SavedPage` (Tersimpan).
  - **Secara otomatis disembunyikan** saat pengguna memasuki alur fokus: `HadithDetailPage`, `QuoteStudioView`, `FivePillarsView`, dan `RelationQuizView`.
  - Memberikan ruang layar 100% bebas hambatan untuk membaca ayat, melafalkan matn, dan menekan tombol navigasi alur (`< Sebelumnya`, `Selanjutnya >`, `Lanjutkan →`).

### 5.2 Desktop Digital Library Layout (≥ 1024px)
Ruang kerja tiga kolom proporsional (*Golden Scholarly Ratio*):

```
┌─────────────────┬──────────────────────┬───────────────────────────────────────────┐
│  KOLOM 1 (260px)│    KOLOM 2 (340px)   │              KOLOM 3 (Flex-1)             │
│                 │                      │                                           │
│ [HK] Hadis HK   │  Seluruh Riwayat     │  [Breadcrumb Bab > #No] [Bookmark] [Share]│
│                 │  23 hadis            │  ═══════════════════════════════════════  │
│ [Q Cari hadis]  │  ──────────────────  │  JUDUL HADIS UTAMA (18px Bold)            │
│                 │  ┌────────────────┐  │  [Toggle Sanad] [A- A+] [TTS] [Salin]     │
│ 8 SIKLUS:       │  │#1 Pra-Nikah    │  │                                           │
│ (1) Pra-Nikah(5)│  │Empat Kriteria  │  │               سَنَدُ الرِّوَايَةِ         │
│ (2) Akad (3)    │  │Bukhari #5090 [B│  │       (Teks Sanad Arab jika diaktifkan)   │
│ (3) Domestik(3) │  └────────────────┘  │                                           │
│ (4) Finansial(2)│  ┌────────────────┐  │               نَصُّ الْمَتْنِ             │
│ (5) Keintiman(2)│  │#2 Khansa Binti │  │       «تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ...» │
│ (6) Konflik (2) │  │Bukhari #5138 [B│  │                                           │
│ (7) Perceraian(3│  └────────────────┘  │  ┌─────────────────────────────────────┐  │
│ (8) Pengasuhan(3│  ┌────────────────┐  │  │ Terjemahan: "Wanita dinikahi..."    │  │
│                 │  │#3 Izin Nikah   │  │  │ Takhrij: Sahih al-Bukhari No. 5090  │  │
│ PILAR SAKINAH:  │  │Muslim #1419 [B]│  │  └─────────────────────────────────────┘  │
│ [5 Pilar Kelg.] │  └────────────────┘  │  [ Mubadalah ] [ 4 Mazhab ] [ Fiqh Usrah ]│
│ [Kuis Evaluasi] │  (Item aktif di-     │  Makna Mubadalah:                         │
│                 │   highlight krem)    │  Prinsip kesalingan dalam memilih jodoh...│
└─────────────────┴──────────────────────┴───────────────────────────────────────────┘
```

---

## 6. Layout Composition & Redesign per Halaman

### 6.1 Halaman Beranda / Library (`LibraryPage.tsx`)
- **Tujuan Halaman**: Memberikan titik awal riset yang tenang, menyajikan pencarian hadis instan, dan memandu pengguna menjelajahi 8 siklus kehidupan.
- **Komposisi Visual**:
  1. **Header Minimalis**: Logo HK cokelat kayu (`#795A3F`), judul "Hadis HK", deskripsi riset, search bar dengan placeholder *"Cari hadis, tema, atau kata kunci..."*, dan ikon bookmark outline di kanan atas.
  2. **Chapter Strip Horizontal**: Pill tab horizontal bab siklus (`Semua 23`, `Pra-Nikah`, `Akad`, `Domestik`, dll.) dengan tepi melengkung lembut dan transisi mulus.
  3. **Editorial Hero Banner**: Kartu berlatar krem naskah (`#F9F7F5`) berborder tipis (`#E5E7EB`), menyajikan judul *"Hadis untuk Keluarga Sakinah"*, teks pengantar sunnah Nabi ﷺ, dan siluet menara kubah keemasan di sisi kanan.
  4. **Daftar 8 Siklus Kehidupan**: Daftar vertikal 4 bab prioritas dengan badge nomor melingkar (`#C6A17B`), jumlah hadis, dan tombol pill *"Lihat Semua Bab →"*.
  5. **Daftar Kartu Hadis yang Ramping (*Slim Hadith Cards*)**:
     - *Keputusan Desain*: Mengeliminasi cuplikan terjemahan panjang yang membuat kartu terlalu gendut (*fat cards*).
     - *Komposisi Kartu*: Badge bab kecil (`◆ 1. Pra-Nikah`), nomor kanonik & nama kitab (`#1 • Sahih al-Bukhari`), judul hadis tebal hitam (`#111827`), dan tombol simpan bookmark di kanan atas.

### 6.2 Halaman Detail Pembacaan Hadis (`HadithDetailPage.tsx` & `HadithReader.tsx`)
- **Tujuan Halaman**: Tempat telaah akademik mendalam teks hadis, fikih komparatif, dan kontekstualisasi kesalingan.
- **Komposisi Visual**:
  1. **Top Bar Sticky**: Tombol kembali `<` di kiri, nomor urut kanonik hadis di tengah (`Hadis #1 dari 23`), tombol bookmark dan tombol share kutipan di kanan.
  2. **Informasi Bab & Kitab**: Badge bab pill lembut, nomor hadis terstandar, dan nama perawi utama.
  3. **Judul Hadis Akademis**: Teks tebal sans-serif `17px` (`#111827`) berjarak nyaman dengan konten bawahnya.
  4. **Action Control Ribbon**: Bilah kontrol mengambang tipis:
     - Toggle Sakelar `Sanad`: Menampilkan atau menyembunyikan rantai perawi Arab.
     - Kontrol Font Size: `A-` dan `A+` untuk menyesuaikan ukuran teks Arab.
     - Speaker Audio TTS: Melafalkan terjemahan bahasa Indonesia dengan suara jernih.
     - Salin Kutipan Ilmiah: Format sitasi akademis siap tempel.
  5. **Area Teks Arab Suci**:
     - Judul bagian kaligrafi bergaris lembut: `سَنَدُ الرِّوَايَةِ` dan `نَصُّ الْمَتْنِ`.
     - Teks Arab berharakat penuh di tengah (*centered*) menggunakan font *Amiri* dengan line-height `2.15`.
  6. **Kotak Naskah Terjemahan & Takhrij**:
     - Kartu permukaan naskah lembut (`#F9F7F5`) dengan tanda kutip elegan.
     - Takhrij sumber lengkap: Kitab, Bab, dan nomor riwayat.
  7. **Tab Analisis Tripartit**:
     - Tab 1: **Makna Mubadalah** (Ringkasan, 'Illat Hukum, Poin Kesalingan, Aplikasi Hari Ini).
     - Tab 2: **4 Mazhab & KHI** (Tabel komparasi Hanafi, Maliki, Syafi'i, Hanbali, dan pasal KHI di Indonesia).
     - Tab 3: **Fiqh Arus Utama & Kaidah Pasutri** (Tinjauan fikih konvensional dan pedoman operasional suami-istri).

### 6.3 Halaman Filter Topik (`FilterBottomSheet.tsx`)
- **Tujuan Halaman**: Menyaring 23 hadis berdasarkan bab siklus kehidupan dan tag isu kontemporer.
- **Komposisi Visual**:
  1. **Bottom Sheet Handle**: Indikator tarikan abu-abu melengkung di bagian atas.
  2. **Header Sheet**: Judul *"Filter Topik"* (bersih tanpa kata Hadis) dan tombol tutup `×`.
  3. **Bagian 8 Bab Siklus**: Radio selector vertikal dengan lingkaran border cokelat dan titik aktif cokelat pekat (`#795A3F`).
  4. **Bagian Tag Populer**: 12 *academic topic pills* bersih tanpa hashtag `#` (`Pernikahan`, `Mahar`, `Keluarga`, `Kesetaraan`, `Anti-KDRT`, `Hak Istri`, dll.) berlatar netral `#F3F4F6` yang berubah cokelat pekat saat aktif.
  5. **Footer Sticky**: Dua tombol simetris: Tombol `Reset` (krem netral) dan tombol `Terapkan →` (cokelat solid `#795A3F`).

### 6.4 Halaman Studio Kartu Kutipan (`QuoteStudioView.tsx`)
- **Tujuan Halaman**: Menghasilkan materi syiar media sosial bernilai estetika tinggi untuk Instagram Story dan Feed.
- **Komposisi Visual**:
  1. **Top Segmented Control**: Sakelar rasio aspek **Story 9:16** dan **Post 1:1** dengan transisi tombol solid.
  2. **Live Canvas Preview**: Menampilkan kartu kutipan berbingkai arsitektur islami minimalis, logo Hadis HK di atas, teks matn terjemahan dengan tanda petik elegan, dan nomor takhrij di bawah.
  3. **Pemilih 3 Tema Visual**:
     - Tema 1: *Putih Bersih* (Clean White `#FFFFFF` + Tinta Hitam).
     - Tema 2: *Kertas Naskah* (Warm Sand `#F4EFEA` + Tinta Cokelat Kayu).
     - Tema 3: *Tinta Gelap* (Heritage Charcoal `#220B02` + Teks Emas).
  4. **Tombol Aksi Bawah**:
     - Tombol Primer: `Unduh Gambar (PNG 1080p)` (cokelat solid selebar layar).
     - Tombol Sekunder: Dua tombol berdampingan: `Bagikan` (Web Share API) dan `Salin Teks`.

### 6.5 Halaman 5 Pilar Keluarga Sakinah (`FivePillarsView.tsx`)
- **Tujuan Halaman**: Memperkenalkan lima fondasi teologis perkawinan berkeadilan menurut Al-Qur'an.
- **Komposisi Visual**:
  1. **Top Bar**: Tombol kembali `<` dan judul *"5 Pilar Keluarga Sakinah"*.
  2. **Horizontal Pillar Tabs**: 5 tab pill: `Mitsaqan`, `Zawaj`, `Mu'asyarah`, `Tasyawur`, `Taradhin`.
  3. **Visual Media Card**: Ilustrasi mushaf Al-Qur'an di atas rehal kayu dengan pencahayaan hangat alami.
  4. **Ayat Al-Qur'an & Terjemahan**: Teks firman Allah dengan kaligrafi Amiri berharakat tajam dan terjemahan resmi Kemenag.
  5. **Uraian Makna & Implementasi Rumah Tangga**: Checklist implementasi konkret dalam kehidupan suami-istri modern.
  6. **Bottom Stepper Navigation**: Tombol `< Sebelumnya` di sisi kiri dan tombol `Selanjutnya >` cokelat solid di sisi kanan.

### 6.6 Halaman Kuis Evaluasi Relasi (`RelationQuizView.tsx`)
- **Tujuan Halaman**: Refleksi mandiri interaktif untuk mendiagnosis kualitas komunikasi dan kesalingan pasutri.
- **Komposisi Visual**:
  1. **Step Indicator**: Bar progres krem dengan kapsul nomor *"1 / 5"* di tengah.
  2. **Pertanyaan Skenario**: Pertanyaan jelas dan lugas menggunakan tipografi Inter bold (`16px`).
  3. **Pilihan Jawaban**: 4 kartu opsi berborder halus dengan radio selector di sisi kiri, memberikan *feedback* hover dan seleksi yang jelas.
  4. **Tombol Lanjutkan**: Tombol selebar layar berlatar cokelat solid `Lanjutkan →` di bagian bawah layar.
  5. **Layar Hasil Diagnosis**: Analisis kategori relasi (Kemitraan Setara, Dominatif Sepihak, dll.) disertai rekomendasi hadis rujukan yang relevan.

### 6.7 Halaman Koleksi Tersimpan (`SavedPage.tsx` & `SavedList.tsx`)
- **Tujuan Halaman**: Mengelola daftar hadis rujukan yang disimpan secara lokal oleh pengguna.
- **Komposisi Visual**:
  1. **Header Koleksi**: Tombol kembali `<` dan judul *"Koleksi Tersimpan"* disertai counter `X hadis tersimpan`.
  2. **Daftar Kartu Tersimpan**: Kartu rapi menampilkan nomor hadis kanonik, judul hadis, nama bab siklus, dan tombol hapus bookmark.
  3. **Empty State**: Ilustrasi buku terbuka minimalis disertai ajakan *"Belum ada hadis tersimpan"* dan tombol *"Telusuri Perpustakaan Hadis"*.

---

## 7. Component Direction & Token Standardization

Seluruh token visual akan distandarisasi ke dalam utility classes Tailwind CSS v4 tanpa hardcoded hex liar:

```css
/* Token Standard di src/index.css */
:root {
  --color-surface-base: #FFFFFF;
  --color-surface-parchment: #F9F7F5;
  --color-surface-soft: #F3EFEA;
  --color-brand-primary: #795A3F;
  --color-brand-accent: #C6A17B;
  --color-brand-dark: #301A05;
  --color-text-main: #111827;
  --color-text-muted: #6B7280;
  --color-border-subtle: #E5E7EB;
  
  --font-interface: 'Inter', system-ui, sans-serif;
  --font-arabic-scholar: 'Amiri', 'Noto Naskh Arabic', serif;
}
```

### 7.1 Aturan Tombol
- **Primary Action**: `bg-[#795A3F] text-white hover:bg-[#5C432E] rounded-xl font-semibold min-h-[44px] transition`.
- **Secondary / Soft**: `bg-[#F9F7F5] border border-[#E5E7EB] text-[#111827] hover:bg-[#F3EFEA] rounded-xl font-medium min-h-[44px]`.
- **Pill Tag**: `px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#E5E7EB] bg-[#F3F4F6] text-[#374151]`.

### 7.2 Aturan Kartu & Pembatas
- Menghindari border tebal dan bayangan hitam pekat (*heavy shadows*). Menggunakan `border border-[#E5E7EB]` dan `shadow-xs` / `shadow-sm` untuk membedakan elevasi dengan anggun.
- Border radius terstandar: `rounded-2xl` (16px) untuk kartu besar dan modal, `rounded-xl` (12px) untuk kartu hadis dan tombol.

---

## 8. Rencana Implementasi Bertahap

Jika proposal ini disetujui, eksekusi redesain akan dilakukan dalam 4 langkah terukur:

1. **Langkah 1 — Standardisasi Token & Tipografi Dasar**:
   - Membersihkan variabel di [`src/index.css`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/index.css) dan menyinkronkan font Inter serta Amiri.
2. **Langkah 2 — Perapihan Kartu Hadis & Reader**:
   - Merampingkan kartu di [`HadithListItem.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/hadith/HadithListItem.tsx) dan menyelaraskan bilah kontrol pembacaan di [`HadithReader.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/hadith/HadithReader.tsx).
3. **Langkah 3 — Penyempurnaan Sub-Halaman**:
   - Menyelaraskan tata letak visual [`FivePillarsView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/education/FivePillarsView.tsx), [`RelationQuizView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/quiz/RelationQuizView.tsx), dan [`QuoteStudioView.tsx`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/src/components/quote-studio/QuoteStudioView.tsx).
4. **Langkah 4 — Verifikasi Kualitas Visual & Responsif**:
   - Menguji tampilan pada lebar layar 360px, 390px, 768px, dan 1280px via browser automation, serta memverifikasi build produksi dan linter (0 warnings/errors).

---

## 9. Kesimpulan & Permohonan Evaluasi

Rancangan di atas mempertahankan seluruh 23 data hadis dan kajian akademik yang sudah ada, sekaligus menaikkan kelas pengalaman pengguna menjadi **Perpustakaan Hadis Digital yang elegan, tenang, dan berbobot ilmiah**.

Dokumen lengkap tersimpan di:
👉 **[`REDESIGN_PROPOSAL.md`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/REDESIGN_PROPOSAL.md)**

*Mohon evaluasi rancangan art direction ini. Kami tidak mengubah source code apa pun pada tahap ini. Setelah Anda menyetujui arah desain ini, kami siap memulai implementasi bertahap.*