# DESIGN AUDIT — HADIS HK
**Evaluasi UI/UX Menyeluruh, Analisis Anti-AI-Slop, & Verifikasi Visual Aktual**
*Dokumen Audit Desain: 6 November 2026*
*Auditor: Principal Product Design Critic, Senior UI/UX Designer, & Frontend Architect*

---

## 1. Overall Assessment & Dimensi Evaluasi

Audit ini dilakukan dengan membandingkan **tampilan aktual aplikasi yang sedang berjalan** (*live-rendered web interface* via browser automation pada port 5173) dengan **gambar referensi desain kanonik** (`media_1793712997239_a039b0ac.jpg` yang mencakup 8 layar standar emas).

| No | Dimensi Evaluasi | Skor (1-10) | Temuan & Observasi Visual Aktual |
| :---: | :--- | :---: | :--- |
| **1** | **Visual Identity** | **7.5 / 10** | Arah identitas *Editorial Islamic Digital Library* sudah mulai terasa, namun masih tercemar oleh elemen kartu gelap tebal (*dark brown hero & dark bottom navigation*) yang merusak kesan bersih, tenang, dan akademis dari referensi aslinya. |
| **2** | **Visual Hierarchy** | **7.0 / 10** | Hierarki teks judul, matn Arab, dan terjemahan di reader utama sudah baik. Namun, pada daftar hadis (kolom tengah) dan sidebar desktop, kepadatan elemen (dumping 12 tag chips di sidebar) membuat mata pembaca lelah dan memecah fokus hierarki. |
| **3** | **Layout Composition** | **7.0 / 10** | Pada desktop 3-kolom komposisi bekerja baik. Namun pada mobile beranda, penggunaan carousel kartu horizontal untuk 8 bab siklus menyimpang dari komposisi vertikal berjenjang pada gambar referensi. |
| **4** | **Typography** | **8.0 / 10** | Tipografi teks Arab (*Amiri* / *Noto Naskh Arabic*) sangat baik dengan harakat yang tidak bertumpuk. Namun, terdapat penggunaan font display serif (*Cormorant Garamond*) pada judul kartu dan form teks UI yang seharusnya menggunakan *Inter* (sans-serif) yang modern dan bersih sesuai referensi. |
| **5** | **Color Palette** | **6.5 / 10** | **Penyimpangan Kritis**: Background bottom nav mobile dan hero banner menggunakan cokelat sangat gelap (`#301A05`), padahal pada referensi resmi seluruh surface adalah *Clean White* (`#FFFFFF`) dan *Soft Warm Cream* (`#F9F7F5` / `#F7F3EF`) dengan aksen cokelat hangat (`#C6A17B` dan `#795A3F`). |
| **6** | **Spacing Consistency** | **7.5 / 10** | Padding dan touch targets sebagian besar telah memenuhi standar minimum 44px, tetapi pada tampilan mobile sub-halaman (Kuis dan 5 Pilar) terjadi tabrakan ruang vertikal karena floating bottom bar menutupi tombol navigasi bawah. |
| **7** | **Component Design** | **7.0 / 10** | Komponen tombol dan badge telah rapi, namun badge bookmark di header mobile menyerupai ikon *e-commerce checkout*, dan tag topik menggunakan karakter hashtag (`#`) ala media sosial alih-alih label akademik. |
| **8** | **Navigation Experience** | **7.0 / 10** | Navigasi bottom sheet responsif dan mulus. Namun, pada halaman Kuis dan 5 Pilar, Bottom Navigation bar tetap muncul sehingga menimbulkan tumpang tindih navigasi ganda (*dual navigation conflict*). |
| **9** | **Reading Experience** | **8.5 / 10** | Pembacaan teks Arab sangat nyaman, tombol toggle sanad berfungsi dengan baik, pembacaan terjemahan jelas, serta tab komparasi mazhab dan Mubadalah menyajikan konten akademik yang berbobot. |
| **10** | **Responsive Behavior** | **8.0 / 10** | Transisi dari mobile 360–430px ke tablet 768px dan desktop 1024px–1280px berjalan mulus tanpa horizontal scrolling overflow. |

---

## 2. Perhatian Khusus: Pembelajaran Hadis & Hukum Keluarga Islam

### 2.1 Keterbacaan Teks Arab Berharakat
- **Evaluasi**: **SANGAT BAIK (8.5/10)**.
- **Observasi**: Penerapan font *Amiri* / *Noto Naskh Arabic* dengan *unitless line-height* `2.15` berhasil mencegah tanda fathah, kasrah, tanwin, dan shaddah bertumpuk atau terpotong pada layar mobile 360px–390px.
- **Rekomendasi**: Pertahankan *line-height* ini dan pastikan fitur penyesuaian ukuran huruf (`A-`, `A+`) tetap berfungsi tanpa merusak tata letak kartu kontainer.

### 2.2 Posisi Teks Arab dan Terjemahan
- **Evaluasi**: **BAIK (8.0/10)**.
- **Observasi**: Struktur vertikal: Judul Hadis $\rightarrow$ Sanad Arab (bisa di-toggle) $\rightarrow$ Matn Arab berukuran besar $\rightarrow$ Terjemahan bahasa Indonesia di dalam kartu berlatar belakang hangat lembut (`#F9F7F5`) $\rightarrow$ Takhrij sumber sudah sesuai dengan kaidah pembacaan teks suci Islam.
- **Rekomendasi**: Teks Arab matn pada halaman pembacaan utama (*Reader*) harus selalu berada di posisi tengah (*centered*) dengan teks terjemahan yang berjarak cukup agar mata pembaca memiliki jeda istirahat visual (*visual pause*).

### 2.3 Penyajian Sumber Hadis (Takhrij)
- **Evaluasi**: **MEMUASKAN (8.0/10)**.
- **Observasi**: Nomor hadis kanonik, nama kitab primer (*Sahih al-Bukhari*, *Sahih Muslim*, dll.), dan nama perawi (*Abu Hurairah ra*, dll.) tersaji lengkap dan berbobot akademis.

### 2.4 Kenyamanan Membaca Durasi Panjang
- **Evaluasi**: **PERLU PERBAIKAN PADA PALET WARNA (6.5/10)**.
- **Observasi**: Kontras background saat ini terganggu oleh blok hitam/cokelat gelap pekat di bagian Hero banner dan Bottom Bar. Perpustakaan digital yang nyaman untuk telaah panjang membutuhkan latar belakang terang yang hangat (*warm ivory/cream paper* `#F9F7F5` dan `#FFFFFF`), bukan kombinasi gelap yang kontras ekstrem.

### 2.5 Kemudahan Mencari Hadis
- **Evaluasi**: **BAIK (7.5/10)**.
- **Observasi**: Input pencarian real-time di header mobile dan sidebar desktop merespons cepat. Namun, pada mobile, tombol filter topik di samping jumlah hadis membuat area daftar terlihat agak berjejal. Filter lebih baik diakses secara terpadu melalui Search Bar atau Bottom Nav.

### 2.6 Hierarki Materi & Pembahasan (Mubadalah & 4 Mazhab)
- **Evaluasi**: **SANGAT BAIK (8.5/10)**.
- **Observasi**: Tab interaktif untuk **Makna Mubadalah**, **4 Mazhab & KHI**, dan **Fiqh Arus Utama** memberikan kedalaman analitis yang luar biasa tanpa membebani layar secara bersamaan.

---

## 3. Identifikasi Temuan Desain

### A. Bagian Desain yang Sudah Bagus
1. **Tipografi Teks Arab**: Harakat lengkap, jelas terbaca, tidak terpotong, dan ukuran huruf proporsional.
2. **Tabbed Reading Area**: Pemisahan analisis hermeneutika Mubadalah, fiqh komparatif 4 mazhab, dan kaidah operasional pasutri menggunakan sistem tab yang efisien.
3. **Kontrol Reader Lengkap**: Toggle Sanad, pengatur ukuran font Arab (`A-`, `A+`), audio TTS, salin kutipan ilmiah, dan bookmark berfungsi intuitif.
4. **Studio Kartu Kutipan**: Menghasilkan kartu grafis beresolusi tinggi dengan pilihan rasio Story 9:16 dan Post 1:1 langsung dari Canvas 2D murni.
5. **Desktop 3-Column Layout Workspace**: Pembagian sidebar navigasi, daftar hadis tengah, dan reading pane kanan mencerminkan ruang kerja akademik profesional.

### B. Bagian yang Perlu Dipertahankan
1. **Struktur Data 23 Hadis & 8 Bab Siklus**: Seluruh metadata, sanad, matn, takhrij, dan ulasan fikih wajib dijaga tanpa pengurangan.
2. **Dual-Viewport Layout**: Pola single-column mobile-first yang bertransisi ke 3-kolom pada $\ge 1024\text{px}$.
3. **Sistem Modal Native `<dialog>`**: Penggunaan native bottom-sheet modal yang ringan tanpa library eksternal.
4. **Penyimpanan Bookmark via LocalStorage**: Manajemen koleksi tanpa login yang menghormati privasi pengguna.

### C. Bagian yang Terlihat Generik Seperti "AI Slop"
1. **Hero Banner Berwarna Cokelat Gelap Pekat (`#301A05`)**:
   - *Masalah*: Tampak seperti template "dark theme" kartu promosi SaaS yang ditempelkan secara instan.
   - *Karakteristik AI Slop*: Kontras tajam yang tidak harmonis dengan halaman putih, menyedot seluruh perhatian visual secara tidak perlu.
2. **Carousel Kartu Horizontal 8 Siklus pada Mobile**:
   - *Masalah*: Menampilkan 4 kartu kotak sejajar yang bisa digeser dengan ikon generik. Ini adalah pola klise landing page AI.
   - *Koreksi Referensi*: Referensi menampilkan daftar vertikal bersih bernomor (1 s.d. 4) dengan ikon lingkaran cokelat elegan dan tombol *"Lihat Semua Bab $\rightarrow$"*.
3. **Penggunaan Tag dengan Simbol Hashtag (`#`)**:
   - *Masalah*: Menampilkan `#Hak Perempuan`, `#Persetujuan Mempelai` bergaya Twitter/Instagram.
   - *Koreksi Referensi*: Aplikasi perpustakaan hadis memerlukan *subject matter pill tags* tanpa hashtag (`Pernikahan`, `Mahar`, `Keluarga`, `Kesetaraan`).
4. **Ilustrasi Vektor Datar pada Modul 5 Pilar**:
   - *Masalah*: Menampilkan ikon garis datar rehal buku yang terlihat seperti template icon pack murah.
   - *Koreksi Referensi*: Referensi menggunakan ilustrasi bernuansa fotografi mushaf Al-Qur'an di atas rehal kayu yang hangat dengan kedalaman natural (*warm depth*).

### D. Bagian yang Perlu Diperbaiki
1. **Bottom Navigation Bar Mobile**:
   - Wajib diubah dari latar gelap pekat (`bg-[#301A05]`) menjadi **Clean White (`bg-[#FFFFFF]`)** dengan border abu-abu tipis (`#E5E7EB`) dan ikon abu-abu/cokelat hangat (`#C6A17B`) sesuai referensi.
2. **Hero Banner Editorial**:
   - Wajib diubah menjadi berlatar terang lembut (**`#F9F7F5` / `#F7F3EF`**) dengan teks cokelat tua (`#301A05`) dan ornamen arsitektur islami keemasan di sisi kanan sesuai referensi.
3. **Sidebar Kiri Desktop**:
   - Bersihkan 12 tag permasalahan yang menumpuk di sidebar desktop. Ganti dengan daftar 8 bab siklus kehidupan berkartu lingkaran nomor, diikuti oleh 2 tombol solid cokelat: **5 Pilar Keluarga** dan **Kuis Evaluasi**.
4. **Tipografi Judul Antarmuka**:
   - Kembalikan judul kartu dan judul halaman ke font modern sans-serif (*Inter*) berbobot `font-semibold` / `font-bold` sesuai referensi, jangan menggunakan serif display miring yang berlebihan.

### E. Masalah Usability & Responsive
1. **Tabrakan Navigasi pada Layar Kuis & 5 Pilar (Mobile)**:
   - Bottom navigation bar tetap muncul di bawah tombol *"Lanjutkan $\rightarrow$"* dan *"Sebelumnya / Selanjutnya"*, menutupi tombol aksi utama dan membingungkan alur pengerjaan kuis.
2. **Badge Bookmark Header**:
   - Badge angka oranye melayang di atas ikon bookmark pada header mobile mirip indikator troli belanja. Pada referensi, ikon bookmark berupa outline elegan yang jika ditekan membuka halaman koleksi tersimpan.
3. **Kepadatan Informasi pada Kartu Daftar Hadis (Mobile & Desktop)**:
   - Kartu daftar hadis saat ini menampilkan potongan teks Arab, terjemahan, dan tombol "Baca Lengkap". Ini menyebabkan daftar menjadi sangat panjang (*fat cards*). Pada referensi, kartu daftar jauh lebih ringkas: nomor hadis, bab, judul, nama kitab, dan tombol bookmark.

---

## 4. Tabel Masalah & Rekomendasi (Prioritas Tindakan)

| Severity | Komponen / Lokasi | Masalah Visual & Usability Aktual | Rekomendasi Perbaikan (Mengacu Referensi) |
| :---: | :--- | :--- | :--- |
| **CRITICAL** | **BottomNav.tsx** (Mobile) | Background berwarna cokelat pekat (`#301A05`) sangat kontras, mendominasi layar bawah, dan menyimpang total dari referensi desain yang bersih dan terang. | Ganti background menjadi `#FFFFFF`, border atas `#E5E7EB`, warna teks non-aktif `#6B7280`, warna aktif `#C6A17B` / `#795A3F`, serta badge angka cokelat bulat kecil. |
| **CRITICAL** | **EditorialBanner.tsx** (Mobile) | Banner promosi "Kajian Fiqh Al-Usrah" menggunakan background cokelat gelap pekat (`#301A05`) dengan teks putih, menciptakan blok hitam yang berat di atas lipatan layar. | Rombak styling menjadi kartu hangat lembut (`#F9F7F5`), teks judul cokelat tua (`#301A05`), teks deskripsi `#6B5B49`, dan gambar siluet kubah/masjid keemasan di sisi kanan. |
| **HIGH** | **App.tsx** & **Sub-Views** (Quiz & Pillars) | Navigasi bawah (`BottomNav`) tetap dirender saat pengguna masuk ke halaman detail sub-modul Kuis dan 5 Pilar, menutupi tombol navigasi halaman. | Sembunyikan `BottomNav` saat route berada di `'quiz'`, `'pillars'`, atau `'quote'`, berikan ruang penuh untuk tombol aksi halaman (`< Sebelumnya` & `Selanjutnya >`). |
| **HIGH** | **DesktopSidebar.tsx** (Desktop) | Daftar 12 tag permasalahan di-dump di tengah sidebar desktop, memakan banyak ruang vertikal dan mendorong menu 5 Pilar & Kuis ke bawah layar. | Hapus daftar 12 tag dari sidebar desktop. Susun sidebar persis referensi: Logo HK $\rightarrow$ Search bar $\rightarrow$ 8 Bab Siklus dengan nomor melingkar $\rightarrow$ 2 tombol pilar & kuis. |
| **HIGH** | **StageDirectoryList.tsx** (Mobile) | 8 bab siklus kehidupan ditampilkan dalam format carousel kartu kotak horisontal (*generic AI pattern*). | Ubah menjadi daftar vertikal minimalis 4 bab pertama dengan ikon melingkar cokelat, teks hadis, dan tombol pill *"Lihat Semua Bab $\rightarrow$"* yang membuka modal seluruh bab. |
| **MEDIUM** | **FilterBottomSheet.tsx** | Tag topik menggunakan prefix hashtag (`#Hak Perempuan`), serta tombol reset dan terapkan belum proporsional dengan referensi. | Hapus simbol `#`. Buat chips topik berlatar abu-abu netral (`#F3F4F6`), tombol `Reset` berlatar krem lembut, dan tombol `Terapkan ->` cokelat solid `#795A3F`. |
| **MEDIUM** | **HadithListItem.tsx** | Kartu daftar terlalu tebal (*fat card*) karena memuat cuplikan teks Arab dan dua paragraf terjemahan di setiap item daftar. | Ringkaskan kartu daftar hadis: Badge Bab $\rightarrow$ Nomor & Kitab $\rightarrow$ Judul Hadis tebal $\rightarrow$ Icon Bookmark di kanan atas, sehingga pengguna dapat memindai hadis dengan cepat. |
| **MEDIUM** | **FivePillarsView.tsx** | Ilustrasi 5 pilar menggunakan ikon vektor garis datar kaku yang tampak seperti template klise. | Gunakan visual atau representasi ilustrasi mushaf yang anggun dengan pencahayaan hangat (*editorial aesthetic*) dan perbaiki tata letak tab pill di atas. |
| **LOW** | **AppHeader.tsx** (Mobile) | Tombol bookmark di header menggunakan badge angka bergaya toko online. | Sederhanakan ikon bookmark menjadi ikon outline minimalis dengan stroke `#352719` sesuai referensi layar 1. |

---

## 5. Rekomendasi Desain & Arahan Implementasi

Untuk merealisasikan prinsip **Anti-AI-Slop** dan mengembalikan antarmuka ke standar **Editorial Islamic Digital Library**:

1. **Standarisasi Palet Warna Bersih**:
   - Gunakan kanvas dasar putih murni (`#FFFFFF`) dan permukaan sekunder krem naskah lembut (`#F9F7F5`).
   - Jadikan cokelat primer (`#C6A17B`) dan cokelat tua (`#795A3F`) sebagai aksen fungsional (tombol aksi utama, tab aktif, dan nomor bab), bukan sebagai blok latar belakang raksasa.
2. **Kesesuaian Tipografi Inter & Amiri**:
   - Gunakan **Inter** untuk seluruh antarmuka latin (judul bab, label navigasi, tombol, terjemahan, dan takhrij) dengan *letter-spacing* normal dan bobot tegas.
   - Pertahankan **Amiri** / **Noto Naskh Arabic** khusus untuk teks suci Al-Qur'an dan Hadis dengan *line-height* `2.15`.
3. **Penyederhanaan Komposisi Beranda**:
   - Terapkan hierarki visual referensi: Header bersih $\rightarrow$ Chapter horizontal strip $\rightarrow$ Editorial light banner $\rightarrow$ Daftar 4 bab prioritas $\rightarrow$ Daftar hadis ringkas.

---

## 6. Final Verdict

### Status: **NEEDS REFINEMENT (MEMBUTUHKAN PENYELARASAN VISUAL)**

Aplikasi memiliki **fondasi data akademik yang sempurna**, fungsionalitas yang bekerja 100%, performa cepat, dan bebas dari error kompilasi. Namun, dari segi estetika UI/UX, implementasi saat ini masih memiliki beberapa penyimpangan warna dan komponen yang membuatnya tampak seperti template generic daripada rancangan editorial yang ada pada gambar referensi.

Dengan melakukan penyelarasan visual terarah pada **warna surface (menghapus dark-block slop)**, **merampingkan kartu daftar hadis**, dan **menyempurnakan Bottom Navigation serta Sidebar desktop**, aplikasi Hadis HK akan sepenuhnya identik dengan gambar referensi kanonik.

---
*Laporan ini disimpan di [`DESIGN_AUDIT.md`](file:///C:/Users/sufya/.gemini/antigravity/scratch/hadis-keluarga-web/DESIGN_AUDIT.md) dan siap digunakan sebagai dasar perbaikan pada fase implementasi desain.*