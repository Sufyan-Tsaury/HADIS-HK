# AGENTS.md — Hadis HK AI Coding Agent Instructions

> **Platform:** Hadis Hukum Keluarga Islam (Hadis HK) — Platform Digital Studi Fiqh al-Usrah Berbasis Kesalingan (Mubadalah)  
> **Akses Produksi:** [https://sufyantsaury753-beep.github.io/HADIS-HK/](https://sufyantsaury753-beep.github.io/HADIS-HK/)  
> **Status Dokumen:** Mandatori untuk seluruh AI Coding Agent (Antigravity) yang bekerja di repositori ini.

---

## 1. IDENTITAS PRODUK & DOMAIN ILMIAH

Hadis HK adalah platform digital berbasis web untuk studi tematik hadis-hadis hukum keluarga Islam dengan paradigma **Mubadalah (kesalingan)** dan **Maqashid asy-Syari'ah**.
Fokus utama produk:
1. **Kehidupan Pasca-Perkawinan**: Tidak hanya berfokus pada seremoni atau hukum formal akad nikah, melainkan etika harian relasi suami-istri (pembagian kerja domestik, nafkah berkeadilan, relasi intim bermartabat, resolusi konflik anti-KDRT, dan pengasuhan anak).
2. **Dual-Reading View (Komparasi Hermeneutika Ganda)**: Menyajikan pemaknaan hadis secara berimbang:
   - *Pemaknaan Arus Utama / Konvensional*: Tafsir tekstual/madzhabi yang umum dipahami.
   - *Pembacaan Mubadalah*: Tafsir resiprokal yang menempatkan laki-laki dan perempuan sebagai subjek setara di hadapan teks suci.
3. **Komparasi 4 Mazhab & KHI**: Menampilkan tinjauan Mazhab Hanafi, Maliki, Syafi'i, Hanbali, serta Kompilasi Hukum Islam di Indonesia.
4. **Fitur Pendukung Aksi Nyata**:
   - *Studio Kartu Kutipan (Quote Studio)*: Generator infografis hadis via HTML5 Canvas 2D.
   - *5 Pilar Perkawinan Kokoh*: Visualisasi interaktif pilar ikrar mitsaqan ghalizhan, zawaj, mu'asyarah bil ma'ruf, musyawarah, dan taradhin.
   - *Kuis Refleksi Relasi*: Penilaian mandiri dinamika kesalingan rumah tangga.

---

## 2. TECH STACK & BATASAN ARSITEKTUR

Setiap AI Agent **WAJIB** mematuhi batasan teknologi yang telah ditetapkan:

| Lapisan | Pilihan Teknologi | Ketentuan Kerja AI Agent |
|---|---|---|
| **Framework & Build** | **Vite 8 + React 19.3.1** | Arsitektur SPA super-ringan. Jangan menambahkan Next.js atau framework server-side lain. |
| **Bahasa** | **TypeScript ~6.0.3** (Strict Mode) | Keamanan tipe ketat (`strict: true`), zero `any`. Gunakan skema `HadithItem` di `src/data/hadiths.ts`. |
| **Styling** | **Tailwind CSS v4.3.3** (`@tailwindcss/vite`) | Seluruh styling wajib menghormati token CSS `:root` di `src/index.css`. Dilarang menginstal Tailwind v3 atau library UI berat. |
| **Ikon** | **Lucide React (1.61.0)** | Gunakan ikon garis tipis (stroke 1.5–2px) bernuansa editorial yang konsisten. |
| **Linter** | **Oxlint 1.88.0** | Linter berbasis Rust yang sangat cepat. Seluruh modifikasi kode wajib lulus `npx oxlint` dengan 0 error dan 0 warning. |
| **Routing** | **State-based SPA Routing** di `src/App.tsx` | Hindari ketergantungan `react-router-dom` yang berisiko memicu isu 404 pada GitHub Pages sub-path `/HADIS-HK/`. |
| **Deployment Target** | **GitHub Pages** (`base: '/HADIS-HK/'`) | Seluruh path aset statis dan navigasi internal wajib memperhitungkan base path `/HADIS-HK/`. Jangan gunakan path absolut hardcoded `/assets/...`. |
| **Penyimpanan State** | **LocalStorage-First** | Penyimpanan bookmark hadis disimpan di klien via key `hadis_keluarga_saved`. Bebas backend, offline-ready, dan menjaga privasi pengguna. |

---

## 3. ADAB & INTEGRITAS KONTEN SUCI (SACRED TEXT INTEGRITY)

Sebagai platform studi teks keagamaan, AI Agent wajib mematuhi standar etika penulisan berikut:

1. **Integritas Teks Arab**:
   - Seluruh teks hadis dan sanad Arab **wajib berharakat lengkap (tasykil)**.
   - Gunakan tipografi khusus Arab (`font-arabic`) yang merujuk pada `Noto Naskh Arabic` atau `Amiri`.
   - Arah teks Arab wajib disetel `dir="rtl"` dengan tinggi baris proporsional (`leading-[2.2]` atau lebih) agar tanda harakat atas dan bawah tidak saling bertumpuk.
2. **Keautentikan Sanad & Takhrij**:
   - Dilarang mengarang (*hallucinating*) nomor hadis, perawi (*rawi*), atau nama kitab hadis.
   - Semua rujukan kitab hadis (Shahih Bukhari, Shahih Muslim, Sunan Abu Dawud, dll.) harus sesuai dengan korpus takhrij standar.
3. **Bahasa Akademis & Menyejukkan**:
   - Ulasan fiqh dan kesalingan harus disampaikan dengan bahasa yang santun, objektif, membangun pencerahan, dan tidak bernada provokatif atau mendiskreditkan pandangan ulama terdahulu.

---

## 4. ATURAN DESAIN (WARM ISLAMIC HERITAGE) & ANTI-AI-SLOP

Patuhi pedoman visual yang telah dibakukan di `DESIGN.md`:

- **Karakter Visual**: Tenang, khidmat, hangat seperti perpustakaan klasik Islam (*Warm Editorial*).
- **Palet Warna Terlarang**:
  - ❌ Dilarang menggunakan warna neon, cyan, atau gradien elektrik ungu-biru.
  - ❌ Dilarang menggunakan tema gelap hitam pekat ala dashboard programmer (*dark SaaS*).
  - ❌ Dilarang menggunakan glassmorphism berlebihan dengan blur transparan tebal yang mengorbankan keterbacaan teks hadis.
- **Palet Warna Acuan**:
  - Canvas / Latar Hangat: `--color-canvas: #C8B69F;` & `--color-surface: #FDF9F5;`
  - Brand & Teks Utama: `--color-brand-primary: #301A05;` & `--color-text-primary: #352719;`
  - Aksen Emas & Sand: `--color-accent-gold: #B09768;` & `--color-accent-sand: #C7B39C;`
- **Responsivitas**:
  - Mobile (360px–430px): Navigasi bawah (`BottomNav`), filter menggunakan bottom-sheet, tab switcher untuk membaca komparasi hadis.
  - Desktop (1024px+): Navigasi samping (`DesktopSidebar`), tampilan layar terbagi (*split-screen dual-reading*).

---

## 5. PROSEDUR VALIDASI SEBELUM SELESAI PEKERJAAN

Sebelum menyerahkan hasil perubahan atau commit, AI Agent **WAJIB** menjalankan dua langkah verifikasi:
1. `npx oxlint`: Pastikan output menampilkan **0 errors dan 0 warnings**.
2. `npm run build`: Pastikan `tsc -b && vite build` berhasil dengan exit code 0.
