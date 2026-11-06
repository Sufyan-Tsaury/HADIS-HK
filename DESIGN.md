# DESIGN.md — Spesifikasi Resmi Sistem Desain Hadis HK

> **Platform:** Hadis HK (Hadis Hukum Keluarga Islam) — Studi Fiqh al-Usrah Berbasis Kesalingan (*Qira'ah Mubadalah*)  
> **Arah Desain:** *Editorial Islamic Digital Library (Clean Academic, Islamic Editorial, & Content-First)*  
> **Status:** Pedoman Desain Resmi & Spesifikasi Teknis Antarmuka  
> **Versi:** 2.0 (Berdasarkan Proposal Redesign yang Disetujui)  
> **Teknologi:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons  

---

## 1. DESIGN PHILOSOPHY

### 1.1 Visi Desain: *Editorial Islamic Digital Library*
Hadis HK dirancang bukan sebagai *dashboard SaaS* generik, bukan pula aplikasi ornamen visual berlebihan. Hadis HK mengadopsi estetika **Perpustakaan Digital Akademik Islam Modern**: antarmuka yang mengedepankan ketenangan visual (*visual serenity*), wibawa keilmuan, ketelitian sanad dan matn, serta kenyamanan membaca durasi panjang (*long-form reading comfort*).

```
                    ┌────────────────────────────────────────┐
                    │       DIGITAL HADITH LIBRARY           │
                    │   Clean Academic • Islamic Editorial   │
                    └───────────────────┬────────────────────┘
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
  [ CONTENT-FIRST ]             [ VISUAL SERENITY ]           [ SACRED TYPOGRAPHY ]
  Struktur teks ilmiah,          Palet putih & naskah hangat,  Tipografi Arab Amiri
  hierarki takhrij,              tanpa kartu gelap pekat,      berharakat longgar (2.15)
  tanpa ornamen palsu.           kontras tinggi & teduh.       & UI modern Inter.
```

### 1.2 Empat Prinsip Desain Utama (*Core Tenets*)
1. **Content-First (Mengutamakan Konten Hadis)**: Teks hadis Nabi ﷺ, rantai sanad, analisis hermeneutika mubadalah, dan komparasi 4 mazhab adalah pusat gravitasi aplikasi. Elemen kontrol, navigasi, dan filter dirancang untuk melayani kenyamanan mengkaji teks.
2. **Clean Academic (Kejernihan Akademik)**: Menghadirkan atmosfer perpustakaan riset Islam kontemporer. Memanfaatkan garis pemisah struktural yang tipis (1px), spasi bernapas yang teratur, dan hierarki metadata yang disiplin.
3. **Sacred Text Respect (Penghormatan Teks Suci)**: Teks Arab berharakat mendapatkan perlakuan tipografi khusus dengan spasi baris longgar agar harakat tidak bertabrakan, didukung penjajaran terpusat (*centered matn*) dan arah baca RTL native.
4. **Anti-AI-Slop & Human-Crafted Utility**: Menghindari secara mutlak pola antarmuka generik buatan AI:
   - DILARANG menggunakan gradien ungu, neon, atau efek elektrik.
   - DILARANG menggunakan bayangan tebal (*heavy drop-shadows*) dan efek kaca buram (*glassmorphism*).
   - DILARANG menggunakan tumpukan kartu bersarang (*nested cards slop*).
   - DILARANG menggunakan ornamen bintang/kaligrafi mengambang yang tidak memiliki fungsi interaksi.

---

## 2. VISUAL IDENTITY

### 2.1 Identitas Merek (*Brand Identity*)
- **Logo Mark**: Persegi bersudut tumpul (*rounded square*) berukuran $40 \times 40\text{px}$ dengan warna dasar *Heritage Dark Wood* (`#795A3F`), memuat inisial kapital tebal `HK` berwarna putih bersih (`#FFFFFF`).
- **Brand Title**: "Hadis HK" — font sans-serif tebal (*Inter Bold*), ukuran 16px, pelacakan huruf rapat (*tracking-tight*).
- **Brand Subtitle**: "Riset Hadis • Hukum Keluarga Islam" — font sans-serif medium (*Inter Medium*), ukuran 11px, warna netral abu-abu (`#6B7280`).

### 2.2 Ornamen Arsitektural Warisan Islam
- **Monochromatic Mosque Silhouette**: Siluet minimalis kubah dan menara masjid dihadirkan dalam bentuk vektor 2D monokromatik halus pada banner editorial dan kartu kutipan.
- **Karakter Ornamen**: Bersifat tenang, tidak mencuri perhatian, berpadu harmonis dengan latar *warm parchment*, dan tidak pernah menutupi teks bacaan.

### 2.3 Ikonografi & Kode Simbolik
- **Ikon Bab Siklus Kehidupan**: 8 ikon outline bertema keluarga (Pengantin, Buku Akad, Rumah, Dompet, Hati, Perisai Damai, Timbangan Adil, Tunas Generasi) ditempatkan di dalam lingkaran berlatar *Camel Gold* (`#C6A17B`).
- **Simbol Status Bab**: Simbol wajik emas (`◆`) sebagai penanda kanonik kategori bab hadis pada badge kartu dan breadcrumb.

---

## 3. COLOR PALETTE LENGKAP & TOKENS

Sistem warna Hadis HK mengadopsi palet naskah klasik: putih katun, kertas perkamen naskah (*warm parchment*), kayu jati tua (*heritage wood*), aksen emas pasir (*camel gold*), dan tinta jelaga pekat (*black ink*).

```
   #FFFFFF           #F9F7F5           #C6A17B           #795A3F           #111827
┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐
│ Clean     │     │ Warm      │     │ Primary   │     │ Heritage  │     │ Primary   │
│ Surface   │     │ Parchment │     │ Camel     │     │ Dark Wood │     │ Text Ink  │
└───────────┘     └───────────┘     └───────────┘     └───────────┘     └───────────┘
```

### 3.1 Spesifikasi Token Warna

| Token Desain | Kode HEX | Nilai RGB | Peran Antarmuka | Rasio Kontras |
| :--- | :---: | :---: | :--- | :---: |
| `--color-surface-base` | `#FFFFFF` | `255, 255, 255` | Latar utama kanvas aplikasi, kartu hadis, modal sheet, dan lembar bacaan | 21:1 (vs Ink) |
| `--color-surface-parchment` | `#F9F7F5` | `249, 247, 245` | Permukaan kertas naskah hangat untuk kotak terjemahan hadis, banner editorial, dan kartu dalil Qur'an | 20.2:1 (vs Ink) |
| `--color-surface-soft` | `#F3EFEA` | `243, 239, 234` | Latar interaksi sekunder saat kontrol di-hover atau ditekan | 18.8:1 (vs Ink) |
| `--color-brand-primary` | `#795A3F` | `121, 90, 63` | Warna aksi utama: tombol primer, badge aktif, tab garis aktif, ikon logo HK | 5.4:1 (vs White) |
| `--color-brand-accent` | `#C6A17B` | `198, 161, 123` | Aksen emas-pasir untuk lingkaran bab, border seleksi aktif, dan fill progress bar | 4.8:1 (vs Ink) |
| `--color-brand-dark` | `#301A05` | `48, 26, 5` | Cokelat kayu pekat untuk aksen teks khusus dan tema kartu naskah gelap | 14.8:1 (vs White) |
| `--color-text-main` | `#111827` | `17, 24, 39` | Teks utama: judul hadis, naskah terjemahan, uraian hukum, dan label kontrol | 18.5:1 (vs White) |
| `--color-text-muted` | `#6B7280` | `107, 114, 128` | Teks sekunder: nama perawi, kitab rujukan, nomor hadis, dan placeholder input | 5.2:1 (vs White) |
| `--color-border-subtle` | `#E5E7EB` | `229, 231, 235` | Garis pembatas struktur antarmuka 1px (pemisah kartu, header, tabel, dan input) | — |
| `--color-border-strong` | `#D1D5DB` | `209, 213, 219` | Garis pemisah tegas untuk batas modal dialog dan kontrol aktif | — |

### 3.2 Semantic / Alert Palette
- **Success (`--color-success`)**: `#15803D` — Badge keselarasan relasi, konfirmasi tersalin, konfirmasi unduh PNG.
- **Warning (`--color-warning`)**: `#B45309` — Catatan evaluasi moderat atau perhatian hukum khusus.
- **Danger (`--color-danger`)**: `#B91C1C` — Peringatan ketidakadilan relasi, tombol hapus bookmark dari koleksi.

---

## 4. TYPOGRAPHY SYSTEM (UI LATIN)

Menggunakan keluarga huruf **Inter** untuk keterbacaan antarmuka yang presisi, bebas distraksi, dan teruji optimal pada berbagai kepadatan piksel layar ponsel pintar maupun monitor resolusi tinggi.

### 4.1 Skala Tipografi Antarmuka

| Tingkat / Peran | Ukuran Font | Weight | Line Height | Tracking | Penggunaan Komponen |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Page Title (H1)** | `20px` (sm: `24px`) | `700` (Bold) | `1.3` | `-0.02em` | Judul subpage, judul modal, header aplikasi |
| **Hadith Title (H2)** | `16px` (sm: `18px`) | `700` (Bold) | `1.35` | `-0.01em` | Judul hadis pada kartu list dan reader view |
| **Section Title (H3)**| `14px` (sm: `15px`) | `600` (SemiBold)| `1.4` | `0` | Header sub-bagian (Mubadalah, 4 Mazhab, Takhrij) |
| **Body Reading** | `14px` (sm: `15px`) | `400` (Normal) | `1.65` | `0` | Teks terjemahan hadis, pembahasan fiqh, uraian pilar |
| **UI Control Label** | `13px` – `14px` | `500` (Medium) | `1.4` | `0` | Teks tombol aksi, tab navigasi, opsi kuis |
| **Metadata & Subtext**| `11px` – `12px` | `500` (Medium) | `1.4` | `0` | Perawi hadis, nomor hadis, tagline bab, footer bar |
| **Code / Index Number**| `11px` – `12px`| `600` (SemiBold)| `1.0` | `0` | Badge nomor kanonik hadis (`#1`, `#23`) dengan `font-mono` |

---

## 5. ARABIC TYPOGRAPHY SYSTEM (SACRED TEXT)

Kualitas pembacaan teks suci hadis menuntut keakuratan harakat dan penghormatan bentuk kaligrafi tradisional. Hadis HK menetapkan standar mutlak bagi perlakuan teks Arab.

### 5.1 Keluarga Huruf Arab
- **Font Stack**: `'Amiri', 'Noto Naskh Arabic', 'Traditional Arabic', serif`
- **Lisensi**: Open Font License (OFL) via Google Fonts.

### 5.2 Standar Ketinggian Baris Harakat (*Line Height Rule*)
> [!IMPORTANT]
> **Unitless Line Height `2.15`**: Teks Arab berharakat memiliki tanda diakritik atas (fathah, dammah, shaddah, fathatain) dan tanda diakritik bawah (kasrah, kasratain). Nilai `line-height: 2.15` mutlak dipertahankan agar tidak terjadi perpotongan vertikal (*clipping*) maupun benturan antar baris.

### 5.3 Skala Ukuran Teks Arab Interaktif

| Mode Pembacaan | Ukuran Mobile | Ukuran Desktop | Rasio Spasi | Target Pembaca |
| :--- | :---: | :---: | :---: | :--- |
| **Kompak (`A-`)** | `22px` | `24px` | `2.15` | Pembaca yang menginginkan ikhtisar cepat dalam satu layar |
| **Standar (`A`)** | `26px` | `28px` | `2.15` | Ukuran default untuk pengkajian harian yang seimbang |
| **Mendalam (`A+`)**| `32px` | `36px` | `2.15` | Ukuran fokus untuk santri, ustadz, dan pengkaji harakat teliti |

### 5.4 Penjajaran & Aturan Penulisan
- **Matn Inti Sabda Nabi ﷺ**: Selalu terpusat (**`text-center`**) diapit tanda kutip sudut Arab `«...»` untuk menandakan kesakralan ucapan Rasulullah.
- **Sanad Rantai Perawi**: Menghadap kanan (**`text-right`**) atau terpusat dengan heading khusus `سَنَدُ الرِّوَايَةِ`.
- **Arah Teks**: Wajib menggunakan atribut `dir="rtl"` pada kontainer teks Arab.

---

## 6. SPACING SCALE

Menggunakan sistem kelipatan 4px (*4-point baseline grid*):

| Token Spasi | Nilai Piksel | Penggunaan pada Layout |
| :--- | :---: | :--- |
| `--space-1` | `4px` | Jarak antar ikon dan teks kecil, padding chip ringkas |
| `--space-2` | `8px` | Jarak antar elemen kartu, gap tombol utility bar |
| `--space-3` | `12px` | Padding horizontal tombol mini, gap antar tombol radio |
| `--space-4` | `16px` | Padding kontainer mobile standar, gap antar kartu hadis |
| `--space-5` | `20px` | Padding kartu detail hadis, margin antar seksi konten |
| `--space-6` | `24px` | Jarak antar grup seksi utama, padding modal sheet |
| `--space-8` | `32px` | Padding vertikal banner editorial, padding desktop pane |
| `--space-12` | `48px` | Margin pemisah navigasi bawah, padding hero view |

---

## 7. GRID & BREAKPOINTS

Antarmuka dirancang responsif melalui 5 zona viewport:

```
Mobile Sempit (< 380px)  ───> 1 Kolom Ringkas, Padding Sisi 12px
Mobile Standar (380-767px) ──> 1 Kolom Standar, Padding Sisi 16px
Tablet (768-1023px)      ───> 1 Kolom Terpusat (max-w-2xl mx-auto)
Desktop (1024-1439px)    ───> 3 Kolom Perpustakaan Digital (240px + 380px + fluid)
Large Desktop (≥ 1440px) ───> 3 Kolom Luas (256px + 400px + fluid reading max 78ch)
```

### 7.1 Tata Letak 3 Kolom Desktop (≥ 1024px)
1. **Kolom 1 — Sidebar Navigasi Kiri (`w-64` / 256px)**:
   - Sticky terfiksasi di sisi kiri.
   - Memuat Logo HK, pencarian cepat, daftar 8 bab siklus kehidupan dengan counter jumlah hadis, tombol akses 5 Pilar & Kuis Relasi, dan tombol Koleksi Tersimpan di bagian bawah.
2. **Kolom 2 — Feed Daftar Hadis (`w-[380px]`)**:
   - Scrollable feed yang menampilkan kartu hadis ringkas (*slim cards*).
   - Kartu yang sedang dibuka di reading pane memiliki highlight border aktif.
3. **Kolom 3 — Reading Desk Utama (`flex-1 min-w-0`)**:
   - Area pembacaan lapang berlatar putih bersih (`#FFFFFF`).
   - Lebar teks dibatasi secara ergonomis pada `max-w-[78ch] mx-auto` untuk mencegah garis baca terlalu panjang yang melelahkan mata.

---

## 8. BORDER RADIUS

Prinsip: Kurvatur halus yang mencerminkan ketegasan buku dan kelembutan naskah, menolak pembulatan gelembung (*bubbly slop*).

| Token Radius | Nilai | Implementasi Komponen |
| :--- | :---: | :--- |
| `rounded-md` | `6px` | Badge nomor hadis, chip tag topik, pill ukuran kecil |
| `rounded-lg` | `8px` | Tombol utama, input teks, tombol toolbar pembacaan |
| `rounded-xl` | `12px` | Kartu daftar hadis, kotak terjemahan, kartu ilustrasi rehal |
| `rounded-2xl` | `16px` | Banner editorial, modal bottom sheet, kartu pratinjau studio kutipan |
| `rounded-full`| `9999px`| Lingkaran ikon bab, progress bar kuis, tombol radio |

---

## 9. ELEVATION & SHADOW

Hadis HK mengutamakan *flat academic layout* di mana kedalaman ruang ditentukan oleh kontras warna permukaan (`#FFFFFF` di atas `#F9F7F5`) dan garis batas struktural (`#E5E7EB`), bukan bayangan gelap.

| Tingkat Elevation | Nilai Box Shadow | Penggunaan |
| :--- | :--- | :--- |
| **Flat (Default)**| `none` | Sebagian besar kartu hadis, input, dan panel bacaan |
| **Subtle (`shadow-xs`)** | `0 1px 2px 0 rgb(0 0 0 / 0.04)` | Kartu interaktif saat hover |
| **Card Raised (`shadow-sm`)** | `0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)` | Pratinjau kartu kutipan gambar |
| **Modal Sheet (`shadow-2xl`)**| `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Dialog native modal dan filter bottom sheet |

---

## 10. COMPONENT ANATOMY

### 10.1 Kartu Hadis Ringkas (*Hadith Slim Card*)
Didesain untuk efisiensi penelusuran tanpa menyumbat feed daftar hadis:
- **Baris Atas**:
  - Badge Bab: `◆ 1. Pra-Nikah` (latar `#F9F7F5`, teks `#795A3F`, font 11px).
  - Metadata: `#1 • Sahih al-Bukhari • No. 5090` (teks `#6B7280`, font mono/medium 12px).
  - Tombol Marka Buku: Tombol bookmark 40x40px di sudut kanan atas.
- **Baris Tengah**:
  - Judul Hadis: Teks sans-serif tebal 15-16px `#111827`, leading-snug.
- **Baris Bawah**:
  - Perawi: `Perawi: Abu Hurairah ra` (teks `#4B5563`, font 12px).
  - Link Pembacaan: `Baca Hadis →` (teks `#795A3F`, hover underline).

### 10.2 Tombol Aksi (*Button System*)
1. **Primary Action**:
   - Kelas: `bg-[#795A3F] text-white hover:bg-[#674A32] rounded-lg min-h-[44px] px-4 text-xs sm:text-sm font-medium`
   - Penggunaan: Tombol `Terapkan Filter`, `Lanjutkan Kuis`, `Unduh Gambar PNG`, `Lihat Semua Bab`.
2. **Outline / Secondary Action**:
   - Kelas: `bg-white border border-[#E5E7EB] text-[#374151] hover:bg-gray-50 rounded-lg min-h-[44px] px-4 text-xs sm:text-sm font-medium`
   - Penggunaan: Tombol `Sebelumnya`, `Reset Filter`, `Bagikan`, `Salin Teks`.
3. **Parchment Soft Action**:
   - Kelas: `bg-[#F9F7F5] border border-[#E5E7EB] text-[#111827] hover:bg-[#F3EFEA] rounded-lg min-h-[44px] px-4 text-xs font-medium`
   - Penggunaan: Tombol utilitas pembantu.

### 10.3 Chip Tag & Badge Topik
- **Chip Topik Standar**: `bg-white border border-[#E5E7EB] text-[#4B5563] hover:border-[#795A3F] hover:text-[#795A3F] text-xs font-medium px-3 py-1 rounded-md`
- **Chip Filter Aktif**: `bg-[#795A3F] text-white text-[11px] font-medium px-2 py-0.5 rounded` dengan tombol silang `×`.

---

## 11. NAVIGATION PATTERNS

### 11.1 Navigasi Bawah Mobile (*BottomNav*)
- **Visibilitas**: Hanya muncul pada rute utama (`library` dan `saved`), otomatis disembunyikan saat pengguna masuk ke rute pembacaan mendalam (`detail`), kuis, atau quote studio untuk menghindarkan distraksi visual.
- **Tiga Tab Inti**:
  1. `Bacaan` (Ikon BookOpen) — Kembali ke perpustakaan hadis.
  2. `Filter` (Ikon SlidersHorizontal) — Membuka modal bottom sheet filter topik.
  3. `Edukasi` (Ikon Scale) — Membuka menu sheet 5 Pilar Sakinah & Kuis Relasi.
- **Status Aktif**: Tab aktif ditandai dengan garis aksen atas `#795A3F` dan teks/ikon cokelat kayu `#795A3F`.

### 11.2 Navigasi Atas (*AppHeader & SubpageHeader*)
- **Sticky Blur**: Header tetap terfiksasi di bagian atas dengan efek `bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]`.
- **SubpageHeader**: Menampilkan tombol kembali chevron (`<`), judul halaman sans-serif tebal, dan tombol aksi cepat di sisi kanan.

---

## 12. HADITH CONTENT LAYOUT (READER VIEW)

Tata letak lembar bacaan hadis disusun berurutan secara hierarkis:

```
┌────────────────────────────────────────────────────────┐
│  ◆ 1. Pra-Nikah               Perawi: Abu Hurairah ra  │
│                                                        │
│  Empat Kriteria Memilih Pasangan:                      │
│  Menjadikan Karakter Agama Sebagai Fondasi             │
├────────────────────────────────────────────────────────┤
│  [●] Sanad     [A- A+]   [🔊 Audio] [📄 Salin] [🔖]    │
├────────────────────────────────────────────────────────┤
│                      سَنَدُ الرِّوَايَةِ                     │
│  حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا يَحْيَى عَنْ عُبَيْدِ اللَّهِ...   │
├────────────────────────────────────────────────────────┤
│                       نَصُّ المَتْنِ                      │
│  «تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا وَلِحَسَبِهَا...» │
├────────────────────────────────────────────────────────┤
│  ┌─ KOTAK TERJEMAHAN (#F9F7F5) ──────────────────────┐ │
│  │ Terjemahan Sanad: ...                             │ │
│  │                                                   │ │
│  │ Terjemahan Matn:                                  │ │
│  │ "Perempuan biasanya dinikahi karena empat..."    │ │
│  └───────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────┤
│  Takhrij: Sahih al-Bukhari, Kitab an-Nikah, No. 5090    │
├────────────────────────────────────────────────────────┤
│  [ Mubadalah ]     [ 4 Mazhab & KHI ]   [ Fiqh Utama ] │
│  ────────────────                                      │
│  Uraian analisis hukum kesalingan relasi keluarga...   │
└────────────────────────────────────────────────────────┘
```

---

## 13. READING TOOLBAR

Toolbar pembacaan ditempatkan tepat di bawah judul hadis untuk memberikan kontrol ergonomis tanpa meninggalkan lembar bacaan:
1. **Sanad Switch**: Sakelar toggle untuk menampilkan atau menyembunyikan silsilah sanad (memungkinkan pembaca awam fokus ke matn, atau akademisi memeriksa perawi).
2. **Pengatur Ukuran Font (`A-` dan `A+`)**: Mengubah ukuran font Arab secara dinamis (`22px`, `26px`, `32px`).
3. **Audio Playback (`🔊`)**: Memutar tilawah audio hadis dengan pelafalan fasih.
4. **Salin Teks (`📄`)**: Menyalin teks Arab matn beserta terjemahan Indonesia dan takhrij ke clipboard.
5. **Bagikan / Studio Kutipan (`🔗`)**: Membuka Studio Kartu Kutipan untuk ekspor gambar sosial media.
6. **Marka Buku (`🔖`)**: Menyimpan hadis ke koleksi lokal peramban.

---

## 14. SEARCH & FILTER INTERFACE

### 14.1 Input Pencarian Cerdas
- Terletak pada header mobile dan sidebar desktop.
- Didukung ikon kaca pembesar dan tombol pembersih `X` otomatis saat input terisi.
- Mengindeks 7 bidang data sekaligus secara instan (*zero lag*): Judul, Terjemahan, Kitab, Nomor Hadis, Perawi, Tag Topik, dan Ringkasan Mubadalah.

### 14.2 Filter Bottom Sheet
- Menggunakan elemen standar `<dialog>` native HTML dengan *backdrop blur*.
- Filter Bab Siklus Kehidupan: Seleksi radio vertikal yang jernih.
- Filter Topik Pilihan: Grid chip tag tanpa karakter `#` artifisial.
- Tombol Aksi Bawah: `Reset` (outline) dan `Terapkan Filter` (solid `#795A3F`).

---

## 15. INTERACTION STATES

Semua kontrol interaktif mematuhi siklus state yang jelas:
- **Default**: Garis batas subtle `#E5E7EB`, teks `#111827` atau `#374151`.
- **Hover**: Latar transisi ke `#F9F7F5` atau abu-abu muda, border `#C6A17B`.
- **Active / Pressed**: Skala mikro `scale-[0.99]`, latar `#795A3F` untuk elemen seleksi.
- **Focus-Visible**: Cincin fokus kontras tinggi `ring-2 ring-[#795A3F] ring-offset-2` yang memenuhi navigasi keyboard (WCAG 2.4.7).
- **Disabled**: Opasitas diturunkan ke `0.4` dengan atribut `disabled` dan `cursor-not-allowed`.

---

## 16. RESPONSIVE BEHAVIOR

- **Mobile Viewport (360px - 767px)**:
  - Header sticky kompak.
  - Kartu hadis satu kolom dengan spasi vertikal 12px.
  - Bottom sheet menyembul dari bawah layar dengan pegangan geser (*drag handle*).
- **Tablet Viewport (768px - 1023px)**:
  - Konten utama diposisikan di tengah (`max-w-2xl mx-auto`).
  - Navigasi bawah mengakomodasi 4 tab secara proporsional.
- **Desktop Viewport (≥ 1024px)**:
  - Bottom navigation dinonaktifkan secara otomatis (`hidden lg:flex`).
  - Feed dan reading pane berdampingan secara simultan, memungkinkan navigasi antar hadis tanpa perpindahan halaman.

---

## 17. ACCESSIBILITY (A11Y) STANDARDS

Hadis HK mematuhi standar aksesibilitas **WCAG 2.1 Level AA**:
1. **Rasio Kontras Warna**:
   - Teks Utama (`#111827`) di atas Putih: Rasio **18.5:1** (Lulus AAA).
   - Teks Sekunder (`#6B7280`) di atas Putih: Rasio **5.2:1** (Lulus AA).
   - Tombol Brand (`#795A3F`) dengan Teks Putih: Rasio **5.4:1** (Lulus AA).
2. **Ukuran Target Sentuh (*Touch Target Size*)**:
   - Semua tombol, link, tab, dan ikon interaktif memiliki dimensi minimal **$44 \times 44\text{px}$** (atau padding sentuh minimum $40\text{px}$ pada desktop).
3. **Semantik HTML & Pembaca Layar**:
   - Menggunakan tag semantik: `<header>`, `<main>`, `<nav>`, `<section>`, `<dialog>`.
   - Menggunakan penanda ARIA yang tepat: `role="radiogroup"`, `role="radio"`, `aria-checked`, `aria-label`, dan `aria-labelledby`.
4. **Dukungan Arah Baca Kanan-ke-Kiri (*RTL*)**:
   - Semua elemen teks Arab dikurung dalam `dir="rtl"` untuk memastikan perataan tanda baca Arab (seperti tanda tanya `؟` dan kurung sudut `« »`) berada pada posisi gramatikal yang tepat.
