# DESIGN.md — Spesifikasi Sistem Desain Hadis Hukum Keluarga Islam (Hadis HK)

> **Platform:** Hadis Hukum Keluarga Islam (Hadis HK) — Studi Fiqh al-Usrah Berbasis Kesalingan (Mubadalah)  
> **Arah Visual:** *Warm Islamic Heritage* (Editorial, Khidmat, & Scholarly Utility)  
> **Status spesifikasi:** Baseline acuan visual dan sistem desain resmi untuk antarmuka pembacaan hadis, perbandingan hermeneutika, dan modul edukasi keluarga sakinah. Nilai warna dan dimensi selaras dengan implementasi CSS variables di `src/index.css`.

---

## 1. VISI & DESIGN PHILOSOPHY

### 1.1 Nama dan karakter desain

**Warm Islamic Heritage — Scholarly & Family Wisdom Companion**

Antarmuka platform studi hadis hukum keluarga Islam dengan karakter **Islamic heritage, warm editorial, dan contemporary utility**. Identitasnya dibangun dari tekstur warna pasir dan gading, cokelat kayu gelap, aksen emas kusam, tipografi Arab berharakat yang elegan, serta ikon garis sederhana.

Desain bukan dashboard teknologi yang penuh panel. Nuansa utamanya lebih dekat pada ruang perpustakaan studi Islam yang teduh: hangat, khidmat, akrab, dan mudah dipahami. Elemen estetika menjadi penguat identitas keagamaan yang moderat, sementara kenyamanan membaca teks Arab, sanad, dan komparasi makna tetap menjadi fokus fungsional utama.

### 1.2 Mood & tone

| Dimensi | Karakter yang dituju |
|---|---|
| Emosi | Teduh, tenang, khidmat, bersahaja, terpercaya |
| Visual | Hangat, klasik, bertekstur, tidak terlalu kontras secara dekoratif |
| Interaksi | Langsung, mudah diprediksi, tidak mengganggu aktivitas ibadah |
| Kepadatan | Informasi cukup padat pada menu fitur, tetapi tiap kelompok tetap terpisah jelas |
| Brand | Islami dan berakar pada arsitektur masjid, tanpa ornamen berlebihan |

### 1.3 Design principles

1. **Content-first.** Waktu salat, hitung mundur, tanggal Hijriah, arah kiblat, dan akses layanan masjid harus lebih mudah ditemukan daripada ornamen.
2. **Warmth through material and imagery.** Gunakan warna krem, cokelat tua, dan foto arsitektur masjid sebagai pembentuk suasana. Jangan mengganti karakter ini dengan gradien digital yang mencolok.
3. **Clear grouping.** Fitur dikelompokkan dalam grid ikon; daftar informasi disusun vertikal dengan pemisah halus.
4. **Quiet interaction.** Animasi singkat dan transisi sederhana. Hindari efek yang menarik perhatian tanpa tujuan fungsional.
5. **Legibility before decoration.** Teks kecil di atas foto wajib mendapat lapisan gelap/terang yang cukup agar tetap terbaca.
6. **Consistent icon language.** Gunakan ikon outline yang seragam, bukan campuran ikon outline, filled, emoji, dan ilustrasi 3D.
7. **Responsive by reflow.** Pada ponsel, susun konten satu kolom; pada layar lebar, gunakan ruang tambahan untuk panel pendamping tanpa memperbesar ukuran kontrol secara tidak wajar.

### 1.4 Larangan visual

- Jangan menggunakan **neon, cyberpunk, warna elektrik**, atau gradien ungu/biru yang tidak terdapat pada referensi.
- Jangan menerapkan **glassmorphism berlebihan**, panel transparan bertumpuk, blur besar, atau efek frosted-glass yang menghilangkan keterbacaan.
- Hindari shadow hitam tebal, bevel, 3D extrusion, glow, dan outline dekoratif yang kuat.
- Jangan mengganti palet hangat menjadi putih-biru ala SaaS atau hitam penuh ala dashboard developer.
- Jangan memakai terlalu banyak bentuk kapsul/pill untuk semua elemen. Gunakan radius lembut hanya pada kartu, header, dan tombol yang memang terlihat demikian.
- Jangan menambahkan ornamen Islam pada setiap komponen. Motif bintang/geometri digunakan secukupnya sebagai detail latar.
- Jangan menggunakan foto masjid sebagai latar teks tanpa overlay kontras.
- Jangan mengarang komponen reader, quote, bookmark, atau filter yang tidak tampak pada referensi. Komponen tersebut memerlukan referensi layar tambahan sebelum dijadikan bagian dari baseline visual.

---

## 2. DESIGN TOKENS & COLOR PALETTE

### 2.1 Catatan ekstraksi warna

Gambar merupakan kolase yang memuat latar presentasi, foto masjid, dan beberapa tangkapan layar UI. Karena tidak tersedia file desain asli atau tangkapan layar tiap layar tanpa kompresi, kode HEX berikut adalah **nilai pendekatan visual** yang dikurasi dari warna dominan. Warna pada foto dapat berubah mengikuti gambar; jangan menjadikannya token antarmuka.

### 2.2 Palet inti

| Token | HEX | Peran | Aturan penggunaan |
|---|---|---|---|
| `color-canvas` | `#C8B69F` | Background presentasi / bidang luar berwarna pasir | Untuk latar pembungkus atau area dekoratif. Bukan latar teks panjang berkontras rendah. |
| `color-canvas-muted` | `#BDAE96` | Secondary canvas | Variasi latar hangat, area pendukung, atau ornamen sangat tipis. |
| `color-surface` | `#FDF9F5` | Surface utama | Latar panel terang, daftar, kalender, dan bagian konten yang membutuhkan keterbacaan. |
| `color-surface-soft` | `#F7F3EF` | Surface sekunder | Kartu sekunder, area list alternatif, serta bidang di sekitar kontrol. |
| `color-surface-raised` | `#FFFFFF` | Surface raised | Kartu/tiles yang tampak terangkat, misalnya shortcut Connect atau widget kompas. |
| `color-brand-primary` | `#301A05` | Cokelat sangat gelap | Header foto gelap, panel utama, area visual brand, dan navigasi gelap. |
| `color-brand-deep` | `#220B02` | Cokelat hampir hitam | Overlay foto atau area terdalam; gunakan seperlunya. |
| `color-brand-secondary` | `#4C2605` | Cokelat kayu | Permukaan sekunder gelap dan variasi lapisan fotografi. |
| `color-accent-gold` | `#B09768` | Emas kusam | Aksen identitas, ornamen, highlight countdown, dan detail ikon. Untuk teks kecil, gunakan versi lebih gelap. |
| `color-accent-sand` | `#C7B39C` | Beige keemasan | Panel waktu salat semi-solid, elemen dekoratif, dan bidang highlight hangat. |
| `color-text-primary` | `#352719` | Teks utama di atas surface terang | Heading dan body utama pada panel krem/putih. |
| `color-text-secondary` | `#6B5B49` | Teks sekunder | Metadata, keterangan, dan label pada surface terang. Periksa kontras untuk ukuran kecil. |
| `color-text-inverted` | `#FFF9F5` | Teks di atas surface gelap | Judul, angka, dan label yang berada pada panel cokelat/foto gelap. |
| `color-icon-muted` | `#E5DCCF` | Ikon terang/muted | Ikon outline di atas foto atau panel gelap. |
| `color-border` | `#D9D0C4` | Border / divider | Garis pemisah tipis pada panel terang. |
| `color-border-dark` | `#6B5133` | Border pada surface gelap | Garis pemisah halus pada panel cokelat. |

### 2.3 Semantic / status colors

| Token | HEX | Status | Aturan |
|---|---|---|---|
| `color-success` | `#486044` | Success | Hanya untuk status sukses yang benar-benar perlu dibedakan; sertakan teks dan ikon. |
| `color-info` | `#5B625E` | Info | Gunakan untuk informasi non-kritis; jangan gunakan sebagai aksen brand. |
| `color-warning` | `#8A5A24` | Warning | Gunakan untuk peringatan dengan label eksplisit. |
| `color-danger` | `#8B3C2F` | Error / destructive | Batasi untuk kesalahan dan tindakan destruktif. |

### 2.4 Overlay foto

```css
:root {
  --photo-overlay-dark: rgb(34 11 2 / 52%);
  --photo-overlay-medium: rgb(48 26 5 / 34%);
  --photo-overlay-light: rgb(200 182 159 / 72%);
}
```

### 2.5 CSS custom properties

```css
:root {
  /* Brand & surfaces */
  --color-canvas: #C8B69F;
  --color-canvas-muted: #BDAE96;
  --color-surface: #FDF9F5;
  --color-surface-soft: #F7F3EF;
  --color-surface-raised: #FFFFFF;
  --color-brand-primary: #301A05;
  --color-brand-deep: #220B02;
  --color-brand-secondary: #4C2605;
  --color-accent-gold: #B09768;
  --color-accent-sand: #C7B39C;

  /* Text, icon & border */
  --color-text-primary: #352719;
  --color-text-secondary: #6B5B49;
  --color-text-inverted: #FFF9F5;
  --color-icon-muted: #E5DCCF;
  --color-border: #D9D0C4;
  --color-border-dark: #6B5133;

  /* Semantic — use only when needed */
  --color-success: #486044;
  --color-info: #5B625E;
  --color-warning: #8A5A24;
  --color-danger: #8B3C2F;
}
```

---

## 3. TYPOGRAPHY SYSTEM

```css
:root {
  --font-ui: "Inter", "Manrope", system-ui, sans-serif;
  --font-display: "Cormorant Garamond", "Lora", Georgia, serif;
  --font-arabic: "Noto Naskh Arabic", "Amiri", serif;
}
```

---

## 4. SPACING, GRID & ELEVATION SYSTEM

Basis 4px dengan ritme 8px.
Elevation:
```css
:root {
  --shadow-card: 0 2px 10px rgb(48 26 5 / 8%);
  --shadow-floating: 0 6px 18px rgb(34 11 2 / 14%);
  --shadow-focus: 0 0 0 3px rgb(176 151 104 / 28%);
}
```

---

## 5. COMPONENT ANATOMY & UI PATTERNS

- **Brand Header & App Header**: Surface `#F7F3EF` / `#FDF9F5`, hit area minimal 44x44px.
- **Hero Photowall & Ring Widget**: Background arsitektur masjid klasik + overlay gelap, ring gading/emas `radius-full`, countdown/indikator waktu.
- **4-Column Feature Grid**: Ikon outline 22-26px, warna `#E5DCCF`, label 10-12px line-height 1.25.
- **Connect / Hadis List Rows**: Surface `#FDF9F5`, border tipis `#D9D0C4`, leading icon 18-20px, metadata rapi, trailing indicator.
- **Bottom Navigation Bar**: Dark surface `#301A05` / `#4A4035`, 4 item seimbang, active `#FFF9F5` dengan aksen `#C7B39C`, touch target >= 44x44px.
