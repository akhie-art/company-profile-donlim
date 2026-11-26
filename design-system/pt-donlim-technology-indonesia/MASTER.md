# Design System & Architecture Master — PT Donlim Technology Indonesia

> **Source of Truth (`ui-ux-pro-max`)**:
> Saat membangun halaman spesifik, periksa `design-system/pt-donlim-technology-indonesia/pages/[page-name].md` terlebih dahulu. Jika tidak ada override, ikuti seluruh aturan pada dokumen Master ini secara ketat.

---

**Proyek:** Landing Page Company Profile — PT Donlim Technology Indonesia
**Entitas Induk:** Guangdong Xinbao Electrical Appliances Holdings Co., Ltd. (Donlim Group)
**Lokasi Fasilitas:** Jatengland Industrial Park Sayung (JIPS), Blok G-2, Demak, Jawa Tengah, Indonesia
**Kategori:** B2B Enterprise Manufacturing & ODM/OEM Home Appliances
**Stack Target:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui (`base-nova` / `@base-ui/react`) · Lucide Icons

---

## 1. Arah Desain & Strategi Visual (Hasil `ui-ux-pro-max`)

| Dimensi | Rekomendasi Sintesis | Rasional |
|---|---|---|
| **Landing Pattern** | **Enterprise Gateway** + **Bento Grid Showcase** | Memfasilitasi dua audiens utama sekaligus (Mitra B2B/OEM Global & Talenta/Vendor Lokal) dengan sinyal kredibilitas di atas lipatan (*above the fold*), *tab switching* kapabilitas, dan navigasi terstruktur. |
| **Gaya Visual** | **Trust & Authority** + **Swiss Modernism 2.0** | Grid presisi 12-kolom (unit dasar `8px`), kontras tinggi (WCAG AA/AAA), *hairline border* bersih, hierarki tipografi tegas, sertifikasi & metrik manufaktur yang transparan. |
| **Kesan Merek** | Presisi Industri, Andal, Skala Global, Profesional, Terbuka | Menjembatani kekuatan manufaktur global Donlim Group (>30 tahun) dengan fasilitas modern berskala besar di Jawa Tengah. |
| **Aset Merek Aktif** | `public/image/donlim.svg` (`347×111`) & `public/image/favicon.svg` (`600×600`) | Menyelaraskan warna primer/aksen langsung dengan warna resmi logo: **Cobalt Blue (`#0547D4`)** dan **Donlim Amber (`#FB9704` / `#FE9402`)**. |

---

## 2. Sistem Palet Warna & Token OKLCH

Palet ini mensintesis rekomendasi *Corporate Navy/Slate* dari `ui-ux-pro-max` dengan warna identitas resmi `donlim.svg` (`#0547D4` dan `#FB9704`), terverifikasi kontras WCAG 2.1.

### 2.1 Palet Utama & Verifikasi Kontras

| Peran Token | Nama Warna | Hex | OKLCH (Tailwind v4) | Rasio Kontras & Penggunaan |
|---|---|---|---|---|
| **Brand Primary (CTA)** | Donlim Cobalt Blue | `#0547D4` | `oklch(0.468 0.223 262.8)` | **7.35:1 (AAA)** dgn `#FFFFFF` — Tombol CTA utama, tautan aktif, tab aktif |
| **Brand Primary Hover** | Cobalt Deep | `#0438AA` | `oklch(0.398 0.188 262.8)` | **9.76:1 (AAA)** dgn `#FFFFFF` — State hover tombol primer |
| **Brand Primary Tint** | Cobalt Soft | `#EFF6FF` | `oklch(0.970 0.014 254.6)` | **6.75:1 (AA)** dgn teks `#0547D4` — Latar badge, chip kategori, ikon container |
| **Brand Accent (Logo)** | Donlim Amber | `#FB9704` | `oklch(0.764 0.171 64.6)` | **8.10:1 (AAA)** dgn `#0F172A` — Aksen pada Hero gelap, CTA gelap, garis indikator aktif |
| **Accent Text (Light)** | Amber Deep | `#B45309` | `oklch(0.555 0.146 49.0)` | **4.73:1 (AA)** pada `#FFF7ED` — Label eyebrow & badge aksen di latar terang |
| **Accent Tint** | Amber Soft | `#FFF7ED` | `oklch(0.980 0.016 73.7)` | Latar highlight kualitas/sertifikasi pada mode terang |
| **Corporate Surface Dark** | Deep Navy 900 | `#0F172A` | `oklch(0.208 0.040 265.8)` | **17.85:1 (AAA)** dgn `#FFFFFF` — Hero section, band metrik/sertifikasi, Footer |
| **Primary Ink** | Slate Ink 950 | `#020617` | `oklch(0.129 0.041 264.7)` | **19.28:1 (AAA)** pada `#F8FAFC` — Heading utama (H1–H3) di mode terang |
| **Body Ink** | Slate 700 | `#334155` | `oklch(0.372 0.039 257.3)` | **10.35:1 (AAA)** pada `#FFFFFF` — Teks paragraf utama |
| **Muted Ink** | Slate 600 | `#475569` | `oklch(0.446 0.037 257.3)` | **7.24:1 (AAA)** pada `#F8FAFC` — Caption, label form, metadata |
| **Page Canvas** | Cool Alabaster | `#F8FAFC` | `oklch(0.984 0.003 247.9)` | Latar utama halaman (*light mode default*) |
| **Card Surface** | Pure White | `#FFFFFF` | `oklch(1.000 0.000 89.9)` | Permukaan kartu, navbar mengambang, dialog, form |
| **Subtle Surface** | Slate 100 | `#F1F5F9` | `oklch(0.968 0.007 247.9)` | Latar section selang-seling, tab list, placeholder visual |
| **Border Hairline** | Slate 200 | `#E2E8F0` | `oklch(0.929 0.013 255.5)` | Garis pemisah kartu, input, tabel spesifikasi |
| **Semantic Success** | Industrial Emerald | `#047857` | `oklch(0.508 0.105 165.6)` | **5.48:1 (AA)** dgn `#FFFFFF` — Status sertifikasi aktif, validasi form |
| **Semantic Destructive** | Alert Crimson | `#DC2626` | `oklch(0.577 0.215 27.3)` | Pesan error validasi form |

> **Aturan Kontras Wajib**: Jangan pernah menempatkan teks putih `#FFFFFF` di atas Donlim Amber `#FB9704`. Di atas `#FB9704`, selalu gunakan teks `#0F172A` atau `#020617` (8.10:1–9.15:1 AAA). Di latar gelap `#0F172A`, teks sekunder minimal `#E2E8F0` (14.48:1) atau `#94A3B8` (6.96:1).

### 2.2 Pemetaan CSS Variables (`app/globals.css`)

```css
:root {
  --background: oklch(0.984 0.003 247.9);         /* #F8FAFC */
  --foreground: oklch(0.129 0.041 264.7);         /* #020617 */
  --card: oklch(1.000 0.000 89.9);                /* #FFFFFF */
  --card-foreground: oklch(0.208 0.040 265.8);    /* #0F172A */
  --primary: oklch(0.468 0.223 262.8);            /* #0547D4 Donlim Cobalt */
  --primary-foreground: oklch(1.000 0.000 89.9);  /* #FFFFFF */
  --secondary: oklch(0.968 0.007 247.9);          /* #F1F5F9 */
  --secondary-foreground: oklch(0.208 0.040 265.8);
  --muted: oklch(0.968 0.007 247.9);
  --muted-foreground: oklch(0.446 0.037 257.3);   /* #475569 */
  --accent: oklch(0.764 0.171 64.6);              /* #FB9704 Donlim Amber */
  --accent-foreground: oklch(0.208 0.040 265.8);  /* #0F172A */
  --border: oklch(0.929 0.013 255.5);             /* #E2E8F0 */
  --input: oklch(0.929 0.013 255.5);
  --ring: oklch(0.468 0.223 262.8);
  --surface-dark: oklch(0.208 0.040 265.8);       /* #0F172A */
  --radius: 0.625rem;                             /* 10px base */
}
```

---

## 3. Sistem Tipografi

Pasangan font rekomendasi *Corporate Trust* dari `ui-ux-pro-max` dengan tambahan monospace teknis untuk metrik dan kode standar industri.

| Peran | Font Family | Cara Muat (Next.js 16) | Weight | Kegunaan |
|---|---|---|---|---|
| **Display & Heading** | `Lexend` | `next/font/google` (`--font-lexend`) | `500, 600, 700` | H1–H4, angka KPI, judul kartu, tombol CTA |
| **Body & UI** | `Source Sans 3` | `next/font/google` (`--font-source-sans-3`) | `400, 500, 600, 700` | Paragraf, deskripsi kapabilitas, form, navigasi |
| **Technical / Mono** | `Geist Mono` *(sudah terpasang)* | `next/font/google` (`--font-geist-mono`) | `400, 500` | Kode ISO/SNI, angka statistik (`tabular-nums`), koordinat pabrik |

### Skala Tipografi Responsif

| Level | Desktop (`lg+`) | Mobile (`base`) | Line-Height | Tracking | Weight |
|---|---|---|---|---|---|
| **Display / Hero H1** | `3.5rem` (`56px`) | `2.25rem` (`36px`) | `1.10` | `-0.025em` | `700` (Lexend) |
| **Section H2** | `2.25rem` (`36px`) | `1.75rem` (`28px`) | `1.20` | `-0.02em` | `600` (Lexend) |
| **Card / Feature H3** | `1.375rem` (`22px`) | `1.25rem` (`20px`) | `1.30` | `-0.01em` | `600` (Lexend) |
| **KPI Metric Figure** | `2.75rem` (`44px`) | `2rem` (`32px`) | `1.05` | `-0.03em` | `700` (Lexend + `tabular-nums`) |
| **Lead Paragraph** | `1.1875rem` (`19px`) | `1.0625rem` (`17px`) | `1.65` | `0` | `400` (Source Sans 3) |
| **Body Default** | `1rem` (`16px`) | `1rem` (`16px`) | `1.65` | `0` | `400` (Source Sans 3) |
| **Eyebrow / Overline** | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `1.40` | `+0.10em` | `600` (Uppercase, Mono/Lexend) |
| **Caption / Meta** | `0.875rem` (`14px`) | `0.875rem` (`14px`) | `1.50` | `0` | `400–500` (Source Sans 3) |

---

## 4. Layout, Grid, Spasi & Elevasi

- **Container Maksimum**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (`1280px` konsisten di seluruh section).
- **Sistem Grid**: 12-kolom Swiss Grid (`gap-6 lg:gap-8`) pada desktop, turun ke 2 kolom (`md`) dan 1 kolom (`sm/375px`).
- **Ritme Spasi Vertikal**: Section padding `py-16 md:py-24` (`64px–96px`), spasi judul section ke konten `mb-12`, grid gap kartu `gap-6` (`24px`).
- **Floating Navbar**: `fixed top-4 inset-x-4 z-50` dengan `max-w-7xl mx-auto rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm`, tinggi `h-16` (`64px`). Hero wajib memiliki kompensasi padding atas `pt-32 lg:pt-36`.
- **Radius**: Tombol & input `rounded-lg` (`8px`), kartu standar `rounded-xl` (`12px`), kartu Bento & banner besar `rounded-2xl` (`16px`), badge pill `rounded-full`.
- **Elevasi & Transisi**: Border-first (`border border-slate-200`) dengan `shadow-xs` default, hover `hover:border-slate-300 hover:shadow-md transition-all duration-200` (tanpa *scale transform* yang memicu *layout shift*).

---

## 5. Struktur Section Landing Page (9 Section)

Disusun dengan menggabungkan pola **Enterprise Gateway** (Hero Misi, Solusi/Kapabilitas Interaktif, Jalur Audiens, Kredibilitas/Sertifikasi, Kontak B2B) dan **Bento Grid Showcase** untuk memamerkan lini produk serta manufaktur PT Donlim Technology Indonesia.

| No | Section ID & Nama | Latar | Tujuan Strategis & Konten Utama | Komponen UI Kunci |
|---|---|---|---|---|
| **0** | **Floating Header & Navigation** | `bg-white/85` (glass) | Identitas logo `donlim.svg`, akses cepat 5 tautan inti (`Tentang`, `Kapabilitas`, `Produk`, `Kualitas`, `Karier`), toggle bahasa (`ID / EN`), dan CTA `Hubungi Kami`. | `Navbar`, `NavigationMenu`, `Sheet` (mobile drawer), `Button` |
| **1** | `#hero` — **Full-Bleed Image Carousel Hero (Tagline Only)** | Full-bleed photography + Dark scrim `#020617` | Dampak visual maksimal: carousel 3 slide foto widescreen 16:9 penuh (*assembly hall*, *kampus pabrik JIPS*, *portofolio peralatan dapur*) dengan teks **hanya tagline** kontras tinggi (tanpa paragraf panjang atau tombol yang menutupi foto), kontrol prev/next, indikator progres, pause/play, swipe mobile, dan dukungan `prefers-reduced-motion`. | `HeroSection` (full-bleed carousel, `next/image`, keyboard & touch controls) |
| **2** | `#metrics` — **Key Facts & Scale Strip** | White `#FFFFFF` (overlapping card strip atau band ber-border) | Membangun *Trust & Authority* langsung setelah Hero lewat 4 metrik terverifikasi: **4.000+** Tenaga Kerja Lokal, **30+ Tahun** Warisan Donlim Group, **100% Export-Ready** (Amerika Utara & Eropa), **JIPS Demak** Pusat Manufaktur Jawa Tengah. | `MetricStatGrid` (`tabular-nums`, Lucide icons `Users`, `Factory`, `Globe2`, `Award`) |
| **3** | `#about` — **About & Donlim Group Heritage** | Canvas `#F8FAFC` | Narasi strategis: didirikan 2023 sebagai basis manufaktur strategis Asia Tenggara dari **Guangdong Xinbao Electrical Appliances Holdings Co., Ltd.** Kolaborasi sinergis antara rantai pasok komponen inti global dan keahlian manufaktur Indonesia, plus visi–misi & integrasi komunitas lokal (pelatihan bahasa & transfer teknologi). | `SplitStoryLayout` (6/6 grid), `Card` Visi/Misi, `TimelineMilestone` ringkas |
| **4** | `#capabilities` — **End-to-End Manufacturing Capabilities (Bento Grid)** | White `#FFFFFF` | Memamerkan rantai proses pabrik di Demak dalam **Bento Grid asimetris (4 kolom)**: (1) *Precision Plastic Injection Molding* (2×2 kartu besar), (2) *Automated Assembly Lines*, (3) *Quality Control & Safety Testing Lab*, (4) *Global Supply Chain & Export Packaging*, (5) *R&D & ODM/OEM Engineering Support*. | `BentoGrid`, `BentoCard`, `Badge`, Lucide icons (`Cpu`, `Cog`, `ShieldCheck`, `PackageCheck`, `Wrench`) |
| **5** | `#products` — **Product Catalog (Wavin `/id/c` Pattern)** | White `#FFFFFF` | Header katalog terpusat (`Jelajahi Katalog Produk Kami`), baris filter **square icon tile** terpusat (`Semua Produk`, `Coffee & Espresso`, `Air Fryers & Ovens`, `Toasters & Kettles`, `Blenders & Food Prep`), pembatas garis tipis, serta **grid katalog 4-kolom** (horizontal `96×96` di mobile, kartu *aspect-square* di desktop) dengan bar aksi bawah biru lembut (`#EFF6FF` · `Lihat produk →`) yang membuka *Spec Quick-View Sheet*. | `CategoryIconTiles`, `ProductCatalogGrid` (4-col), `Sheet` (detail spesifikasi OEM) |
| **6** | `#quality` — **Quality Assurance, HSE & Global Export Reach** | Dark Navy `#0F172A` | Memperkuat pilar *Trust & Authority*: standar QA/QC multi-tahap (IQC → IPQC → FQC → OQC), kepatuhan K3/HSE & keselamatan kerja, tata kelola lingkungan manufaktur, serta peta/indikator jangkauan ekspor global (Amerika Utara, Eropa, Asia-Pasifik) dan badge sertifikasi/standar kualitas. | `QualityStageStepper`, `CertificationBadgeGrid`, `ExportRegionStats` |
| **7** | `#gateway` — **Enterprise Gateway: Partner, Supplier & Career Paths** | White `#FFFFFF` | Mengadopsi pola *Path Selection ("I am a...")* dari *Enterprise Gateway*: 3 kartu jalur aksi yang jelas — **(1) Global OEM/ODM Buyers** (permintaan penawaran & katalog), **(2) Local Suppliers & Vendors** (kemitraan material/logistik Jawa Tengah), **(3) Talenta & Karier di Demak** (operator produksi, QC, engineering, warehouse, HSE, staff administrasi). | `AudiencePathCards` (3-column equal height), `Button` CTA kontekstual |
| **8** | `#contact` — **Contact, Factory Location & B2B Inquiry Form** | Canvas `#F8FAFC` | Grid 2 kolom (5/7): kiri berisi alamat lengkap (**Jatengland Industrial Park Sayung [JIPS], Blok G-2, Desa Batu, Kec. Karangtengah, Kab. Demak, Jawa Tengah**), jam operasional, saluran kontak departemen (B2B Sales, HR/Recruitment, Procurement), dan *interactive map embed/link*; kanan berisi form inquiry B2B tervalidasi dengan pilihan topik. | `ContactInfoCard`, `InquiryForm` (`Input`, `Label`, `Select`, `Textarea`, `Button`, `react-hook-form` + validasi) |
| **9** | **Corporate Footer** | Deep Navy `#020617` | 4 kolom terstruktur: Brand & afiliasi Donlim Group (versi logo terang/container bersih), Navigasi Perusahaan, Kategori Produk & Kapabilitas, Info Lokasi JIPS Demak + tautan Kebijakan Privasi & Kepatuhan. | `Footer`, `Separator`, legal & copyright bar |

---

## 6. Inventaris Komponen UI (shadcn/ui `base-nova` + Custom)

### 6.1 Primitif shadcn/ui yang Dibutuhkan
- `Button` *(sudah ada di `components/ui/button.tsx`)* — Varian: `default` (Cobalt `#0547D4`), `accent` (Amber `#FB9704` + teks `#0F172A`), `outline`, `ghost`, `link`. Semua wajib `cursor-pointer` dan `focus-visible:ring-2`.
- `Badge` — Varian: `brand` (`#EFF6FF`/`#0547D4`), `amber` (`#FFF7ED`/`#B45309`), `dark-amber` (`bg-amber-500/15 text-[#FB9704] border-[#FB9704]/30`), `outline`.
- `Card` — `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` dengan border `#E2E8F0`, tanpa *scale hover shift*.
- `Tabs` — Untuk etalase kategori produk `#products` (wajib `defaultValue` dan dukungan keyboard arrow navigation bawaan `@base-ui/react`).
- `Sheet` — Untuk navigasi drawer mobile (`< 1024px`).
- `Input`, `Textarea`, `Label`, `Select` — Untuk form inquiry B2B dengan `<label htmlFor>` eksplisit dan `type="email"` / `type="tel"` semantik.
- `Accordion` *(opsional pada bagian Kualitas/FAQ)* — Untuk pertanyaan umum proses OEM/ODM & rekrutmen.
- `Separator` — Pemisah visual halus antar blok.

### 6.2 Komponen Komposit Section (`components/sections/`)
1. `SiteHeader.tsx` — Floating translucent header, skip-to-content link (`sr-only focus:not-sr-only`), desktop nav + mobile `Sheet`.
2. `HeroSection.tsx` — Dark Navy architectural hero dengan `donlim` visual identity, dual CTA, dan trust highlights.
3. `MetricsStrip.tsx` — 4-kolom KPI bar dengan `tabular-nums`.
4. `AboutSection.tsx` — Profil PT Donlim Technology Indonesia & afiliasi Guangdong Xinbao / Donlim Group.
5. `CapabilitiesBento.tsx` — Grid Bento 5 kapabilitas manufaktur.
6. `ProductsTabsSection.tsx` — Tab interaktif 4 kategori produk rumah tangga & dapur.
7. `QualityExportSection.tsx` — Alur QA/QC (IQC–OQC), komitmen HSE/ESG, & kredensial ekspor global.
8. `GatewayPathsSection.tsx` — 3 jalur audiens (B2B Buyer, Supplier Lokal, Karier Demak).
9. `ContactSection.tsx` — Info pabrik JIPS Blok G-2 Demak + form inquiry tervalidasi.
10. `SiteFooter.tsx` — Footer korporasi 4 kolom.

---

## 7. Anti-Patterns & Pre-Delivery Checklist

### Anti-Patterns (Dilarang)
- ❌ Gradien neon ungu/pink bergaya "AI startup generik".
- ❌ Emoji sebagai ikon UI (wajib **Lucide React** SVG 24×24 konsisten).
- ❌ Efek hover `scale` yang menyebabkan kartu/grid bergeser (*layout shift*).
- ❌ Kredensial/sertifikasi/lokasi pabrik disembunyikan di halaman terdalam.
- ❌ Teks abu-abu pucat (`text-slate-400`) pada latar putih/terang (kontras < 4.5:1).
- ❌ Input form hanya mengandalkan `placeholder` tanpa `<label>`.

### Checklist Verifikasi Sebelum Rilis Kode
- [ ] Semua font dimuat via `next/font/google` (`Lexend`, `Source_Sans_3`, `Geist_Mono`) tanpa `<link>` eksternal.
- [ ] Semua gambar menggunakan `next/image` (`<Image>`) dengan `alt` deskriptif dan dimensi eksplisit.
- [ ] Seluruh pasangan warna teks memenuhi kontras minimal WCAG AA (`≥ 4.5:1`).
- [ ] Semua elemen interaktif memiliki `cursor-pointer`, `transition-colors duration-200`, dan `focus-visible:ring-2`.
- [ ] `Skip to main content` link tersedia dan urutan heading berurutan (`h1` → `h2` → `h3`).
- [ ] `prefers-reduced-motion` dihormati untuk seluruh animasi transisi.
- [ ] Responsif teruji tanpa *horizontal scroll* pada lebar `375px`, `768px`, `1024px`, dan `1440px`.
