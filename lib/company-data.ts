export type Locale = "id" | "zh";

export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  icon: "users" | "factory" | "globe" | "mapPin";
}

export interface SolutionItem {
  id: string;
  code: string;
  audience: string;
  title: string;
  description: string;
  outcomes: string[];
  highlightLabel: string;
  highlightValue: string;
  ctaLabel: string;
  inquiryTopic: string;
  icon: "layers" | "globe" | "shieldCheck" | "trendingUp";
}

export interface CapabilityItem {
  id: string;
  code: string;
  title: string;
  description: string;
  highlights: string[];
  icon: "cpu" | "cog" | "shieldCheck" | "packageCheck" | "wrench";
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface ProductFilterCategory {
  id: string;
  label: string;
  icon: "grid" | "coffee" | "flame" | "zap" | "utensils";
}

export interface ProductCatalogItem {
  id: string;
  categoryId: string;
  subcategory: string;
  code: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  models: string[];
  specs: { label: string; value: string }[];
  exportMarkets: string[];
}

export interface QualityStage {
  code: string;
  title: string;
  description: string;
}

export interface GatewayPath {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  inquiryTopic: string;
  icon: "handshake" | "truck" | "briefcase";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HeroSlide {
  id: string;
  tagline: string;
  taglineAccent: string;
  image: string;
  imageAlt: string;
}

export interface CompanyContent {
  skipToContent: string;
  nav: {
    items: NavItem[];
    cta: string;
    mobileTitle: string;
    mobileSubtitle: string;
    languageLabel: string;
    openMenuLabel: string;
  };
  hero: {
    carouselLabel: string;
    prevLabel: string;
    nextLabel: string;
    pauseLabel: string;
    playLabel: string;
    goToSlidePrefix: string;
    slides: HeroSlide[];
  };
  metrics: MetricItem[];
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    parentLabel: string;
    parentName: string;
    parentMeta: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    milestones: { year: string; title: string; detail: string }[];
    labCaption: string;
    labImageAlt: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    outcomesHeading: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCta: string;
    items: SolutionItem[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: CapabilityItem[];
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewProductLabel: string;
    showingLabel: string;
    modelsHeading: string;
    specsHeading: string;
    marketsHeading: string;
    ctaLabel: string;
    categories: ProductFilterCategory[];
    items: ProductCatalogItem[];
  };
  quality: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pipelineTitle: string;
    stages: QualityStage[];
    standardsTitle: string;
    standards: { code: string; title: string; note: string }[];
    exportTitle: string;
    exportRegions: { region: string; share: string; focus: string }[];
    hseTitle: string;
    hseText: string;
    faqTitle: string;
    faqs: FaqItem[];
  };
  gateway: {
    eyebrow: string;
    title: string;
    subtitle: string;
    paths: GatewayPath[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plantTitle: string;
    plantAddress: string[];
    coordinates: string;
    hoursLabel: string;
    hoursValue: string;
    departmentsTitle: string;
    departments: { role: string; email: string; note: string }[];
    mapButton: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      topic: string;
      topics: { value: string; label: string }[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    validation: {
      nameRequired: string;
      emailInvalid: string;
      messageMin: string;
    };
    successTitle: string;
    successMessage: string;
    successReset: string;
  };
  footer: {
    tagline: string;
    groupNote: string;
    companyColTitle: string;
    capabilitiesColTitle: string;
    locationColTitle: string;
    capabilitiesLinks: string[];
    copyright: string;
    complianceNote: string;
  };
}

export const companyContent: Record<Locale, CompanyContent> = {
  id: {
    skipToContent: "Lompat ke konten utama",
    nav: {
      items: [
        { label: "Tentang", href: "#about" },
        { label: "Solusi", href: "#solutions" },
        { label: "Kapabilitas", href: "#capabilities" },
        { label: "Produk", href: "#products" },
        { label: "Kualitas", href: "#quality" },
        { label: "Kemitraan", href: "#gateway" },
      ],
      cta: "Hubungi Kami",
      mobileTitle: "PT Donlim Technology Indonesia",
      mobileSubtitle: "Navigasi Company Profile",
      languageLabel: "Pilih bahasa Indonesia atau Mandarin",
      openMenuLabel: "Buka menu navigasi",
    },
    hero: {
      carouselLabel: "Galeri utama PT Donlim Technology Indonesia",
      prevLabel: "Slide sebelumnya",
      nextLabel: "Slide berikutnya",
      pauseLabel: "Jeda otomatis carousel",
      playLabel: "Putar otomatis carousel",
      goToSlidePrefix: "Buka slide",
      slides: [
        {
          id: "precision-manufacturing",
          tagline: "Manufaktur Presisi Peralatan Rumah Tangga",
          taglineAccent: "Kelas Dunia",
          image: "/image/hero-factory.jpg",
          imageAlt:
            "Lini perakitan otomatis peralatan rumah tangga modern di fasilitas PT Donlim Technology Indonesia",
        },
        {
          id: "global-export-hub",
          tagline: "Dari Jawa Tengah Menuju",
          taglineAccent: "Pasar Global",
          image: "/image/hero-export.jpg",
          imageAlt:
            "Kawasan fasilitas manufaktur dan pusat ekspor modern PT Donlim Technology Indonesia di JIPS Demak",
        },
        {
          id: "engineered-living",
          tagline: "Inovasi Rekayasa untuk",
          taglineAccent: "Kehidupan Modern",
          image: "/image/hero-craft.jpg",
          imageAlt:
            "Koleksi peralatan dapur elektrik presisi modern hasil manufaktur standar internasional",
        },
      ],
    },
    metrics: [
      {
        value: "4.000+",
        label: "Tenaga Kerja Lokal",
        detail: "Didukung ~200 tenaga ahli teknis & manajemen berpengalaman",
        icon: "users",
      },
      {
        value: "30+ Thn",
        label: "Warisan Donlim Group",
        detail: "Rekam jejak global Guangdong Xinbao Electrical Appliances",
        icon: "factory",
      },
      {
        value: "100%",
        label: "Berorientasi Ekspor",
        detail: "Memasok jaringan ritel & merek internasional di AS & Eropa",
        icon: "globe",
      },
      {
        value: "JIPS G-2",
        label: "Pusat Manufaktur Demak",
        detail: "Kawasan industri strategis koridor Semarang–Demak, Jateng",
        icon: "mapPin",
      },
    ],
    about: {
      eyebrow: "TENTANG PERUSAHAAN",
      title:
        "Menghubungkan Ekosistem Manufaktur Global dengan Keunggulan SDM Indonesia",
      lead: "Didirikan pada tahun 2023 di Demak, Jawa Tengah, PT Donlim Technology Indonesia merupakan basis manufaktur strategis Asia Tenggara dari Guangdong Xinbao Electrical Appliances Holdings Co., Ltd. (Donlim Group).",
      paragraphs: [
        "Kami mengintegrasikan komponen inti berpresisi tinggi dari ekosistem rantai pasok grup — termasuk elemen pemanas dan motor listrik — dengan proses pencetakan injeksi plastik, perakitan massal terstandar, pengujian keselamatan menyeluruh, hingga pengemasan ekspor langsung di fasilitas Jawa Tengah.",
        "Lebih dari sekadar pabrik perakitan, PT Donlim Technology Indonesia berkomitmen pada transfer teknologi jangka panjang, penerapan keselamatan kerja (HSE) ketat, serta kolaborasi lintas budaya bersama institusi pendidikan di Jawa Tengah untuk memperkuat kompetensi talenta lokal.",
      ],
      parentLabel: "ENTITAS INDUK GLOBAL",
      parentName: "Guangdong Xinbao Electrical Appliances Holdings Co., Ltd.",
      parentMeta:
        "Salah satu produsen ODM/OEM peralatan rumah tangga kecil terkemuka di dunia dengan pengalaman industri lebih dari tiga dekade.",
      visionTitle: "Visi Korporasi",
      visionText:
        "Menjadi pusat manufaktur peralatan rumah tangga kecil paling andal, presisi, dan berdaya saing ekspor di Asia Tenggara.",
      missionTitle: "Misi Operasional",
      missionText:
        "Menghadirkan kualitas produk standar internasional, ketepatan pengiriman global, efisiensi rantai pasok, serta pertumbuhan berkelanjutan bersama tenaga kerja lokal.",
      milestones: [
        {
          year: "1995+",
          title: "Fondasi Donlim / Xinbao",
          detail:
            "Membangun reputasi global sebagai pemimpin ODM/OEM peralatan dapur.",
        },
        {
          year: "2023",
          title: "Pendirian PT Donlim Technology Indonesia",
          detail:
            "Ekspansi strategis ke Jatengland Industrial Park Sayung, Demak.",
        },
        {
          year: "2024–Kini",
          title: "Operasi Skala Besar & Ekspor",
          detail:
            "Menyerap 4.000+ tenaga kerja dengan pengiriman rutin ke pasar global.",
        },
      ],
      labCaption:
        "Inspeksi Keselamatan Elektrik & Validasi Mutu — Lab QA/QC Demak",
      labImageAlt:
        "Insinyur kontrol kualitas PT Donlim Technology Indonesia menguji mesin kopi dan peralatan dapur elektrik di laboratorium QA/QC",
    },
    solutions: {
      eyebrow: "SOLUSI MANUFAKTUR TERPADU",
      title: "Solusi Strategis untuk Merek Global & Ketahanan Rantai Pasok",
      subtitle:
        "Kami merancang skema kolaborasi manufaktur yang fleksibel — menjawab tantangan diversifikasi produksi, standar keselamatan internasional, hingga percepatan peluncuran produk baru.",
      outcomesHeading: "Keunggulan Utama",
      bannerTitle: "Butuh Skema Produksi Khusus untuk Merek Anda?",
      bannerSubtitle:
        "Tim engineering & B2B kami siap membantu pemetaan kapasitas lini, estimasi biaya manufaktur (DFM), dan jadwal audit fasilitas di JIPS Demak.",
      bannerCta: "Diskusikan Solusi Anda",
      items: [
        {
          id: "oem-odm-turnkey",
          code: "SOL-01",
          audience: "Merek & Ritel Global",
          title: "Solusi Manufaktur OEM / ODM Turnkey",
          description:
            "Layanan produksi ujung-ke-ujung dari adaptasi desain industri (DFM) bersama tim R&D Donlim Group hingga pencetakan injeksi, perakitan massal, dan kemasan siap ritel.",
          outcomes: [
            "Dukungan industrialisasi desain & validasi pilot run",
            "Fleksibilitas kustomisasi warna, material, & kemasan merek",
            "Integrasi langsung cetakan plastik hingga produk jadi",
          ],
          highlightLabel: "Model Kolaborasi",
          highlightValue: "OEM & ODM End-to-End",
          ctaLabel: "Ajukan Skema OEM/ODM",
          inquiryTopic: "b2b-oem",
          icon: "layers",
        },
        {
          id: "sea-supply-hub",
          code: "SOL-02",
          audience: "Diversifikasi Rantai Pasok",
          title: "Solusi Basis Ekspor Asia Tenggara (Jawa Tengah)",
          description:
            "Mengoptimalkan daya saing ekspor merek global dengan memadukan komponen inti presisi dari ekosistem grup dan perakitan strategis dekat Pelabuhan Tanjung Emas Semarang.",
          outcomes: [
            "Ketahanan rantai pasok global berbasis manufaktur Indonesia",
            "Akses koridor logistik pelabuhan ekspor FOB Semarang",
            "Traceability lot produksi & manajemen gudang terintegrasi",
          ],
          highlightLabel: "Hub Ekspor",
          highlightValue: "JIPS Demak · FOB Semarang",
          ctaLabel: "Pelajari Skema Rantai Pasok",
          inquiryTopic: "b2b-oem",
          icon: "globe",
        },
        {
          id: "global-compliance",
          code: "SOL-03",
          audience: "Kualitas & Kepatuhan",
          title: "Solusi Rekayasa Keselamatan & Kepatuhan Pasar",
          description:
            "Menjamin kesiapan regulasi elektrik, material food-contact, dan uji daya tahan produk untuk memenuhi syarat distribusi ketat di Amerika Utara maupun Uni Eropa.",
          outcomes: [
            "Kesiapan varian tegangan 120V/60Hz (AS) & 220–240V/50Hz (EU)",
            "100% uji keselamatan Hi-Pot & pengujian siklus di lab QA",
            "Kesiapan audit mutu, K3/HSE, dan kepatuhan sosial pembeli",
          ],
          highlightLabel: "Verifikasi Mutu",
          highlightValue: "4-Tahap IQC → OQC",
          ctaLabel: "Jadwalkan Audit Kualitas",
          inquiryTopic: "factory-audit",
          icon: "shieldCheck",
        },
        {
          id: "scalable-operations",
          code: "SOL-04",
          audience: "Skala & Kecepatan Pasar",
          title: "Solusi Skalabilitas Kapasitas & Operasi Lokal",
          description:
            "Didukung 4.000+ tenaga kerja terlatih dan tim teknis dwibahasa Indonesia–Mandarin untuk mempercepat ramp-up produksi saat lonjakan permintaan musiman ritel global.",
          outcomes: [
            "Lini perakitan modular untuk pergantian model cepat",
            "Komunikasi proyek presisi oleh tim teknis dwibahasa ID–中文",
            "Sinergi pemasok kemasan & material lokal Jawa Tengah",
          ],
          highlightLabel: "Kapasitas SDM",
          highlightValue: "4.000+ Tenaga Kerja Terlatih",
          ctaLabel: "Konsultasikan Kapasitas",
          inquiryTopic: "b2b-oem",
          icon: "trendingUp",
        },
      ],
    },
    capabilities: {
      eyebrow: "KAPABILITAS MANUFAKTUR",
      title:
        "Proses Produksi Terintegrasi dari Cetakan Presisi hingga Kontainer Ekspor",
      subtitle:
        "Setiap lini di fasilitas JIPS Blok G-2 dirancang untuk volume produksi tinggi dengan konsistensi toleransi mekanis dan standar keselamatan elektrik internasional.",
      items: [
        {
          id: "molding",
          code: "CAP-01",
          title: "Precision Plastic Injection Molding",
          description:
            "Unit pencetakan injeksi plastik berkecepatan tinggi dengan kontrol suhu otomatis, material food-grade dan tahan panas (heat-resistant ABS/PP), serta perawatan mold presisi in-house.",
          highlights: [
            "Material food-grade tersertifikasi ekspor",
            "Kontrol dimensi presisi & konsistensi permukaan",
            "Integrasi langsung ke lini sub-assembly",
          ],
          icon: "cpu",
          featured: true,
          image: "/image/molding-facility.jpg",
          imageAlt:
            "Mesin pencetakan injeksi plastik presisi otomatis di fasilitas manufaktur PT Donlim Technology Indonesia",
        },
        {
          id: "assembly",
          code: "CAP-02",
          title: "High-Volume Automated Assembly",
          description:
            "Lini perakitan modular yang mendukung perpindahan model cepat untuk mesin espresso, air fryer, pemanggang roti, hingga blender berkapasitas besar.",
          highlights: [
            "Alur kerja lean & keseimbangan lini optimal",
            "Kalibrasi torsi & perakitan komponen elektrik terstandar",
          ],
          icon: "cog",
        },
        {
          id: "qa-testing",
          code: "CAP-03",
          title: "Safety & Endurance Testing Lab",
          description:
            "Pengujian ketat ketahanan panas, isolasi tegangan tinggi (Hi-Pot), kebocoran arus, dan uji siklus operasional guna memenuhi regulasi pasar AS dan Eropa.",
          highlights: [
            "100% uji keselamatan elektrik inline",
            "Uji ketahanan siklus jangka panjang (life-test)",
          ],
          icon: "shieldCheck",
        },
        {
          id: "supply-chain",
          code: "CAP-04",
          title: "Global Supply Chain & Export Logistics",
          description:
            "Sinergi pasokan motor dan elemen pemanas inti dari grup dengan pengemasan siap ritel, paletisasi, dan kedekatan strategis ke Pelabuhan Tanjung Emas Semarang.",
          highlights: [
            "Akses koridor logistik pelabuhan internasional",
            "Manajemen gudang & traceability lot produksi",
          ],
          icon: "packageCheck",
        },
        {
          id: "odm-engineering",
          code: "CAP-05",
          title: "OEM / ODM Engineering Transfer",
          description:
            "Dukungan tim insinyur lintas negara untuk industrialisasi desain baru, optimasi biaya manufaktur (DFM), dan penyesuaian spesifikasi tegangan tiap negara tujuan.",
          highlights: [
            "Dukungan 120V/60Hz (Amerika Utara) & 220–240V/50Hz (Eropa)",
            "Validasi pilot run sebelum produksi massal",
          ],
          icon: "wrench",
        },
      ],
    },
    products: {
      eyebrow: "KATALOG PRODUK OEM / ODM",
      title: "Jelajahi Katalog Produk Kami",
      subtitle:
        "Temukan lini peralatan rumah tangga yang sesuai dengan kebutuhan manufaktur OEM/ODM Anda. Gunakan filter kategori di bawah atau lihat seluruh rangkaian produk yang tersedia.",
      viewProductLabel: "Lihat produk",
      showingLabel: "produk tersedia",
      modelsHeading: "Cakupan Varian Produksi",
      specsHeading: "Parameter Manufaktur",
      marketsHeading: "Tujuan Ekspor Utama",
      ctaLabel: "Minta Katalog & Penawaran OEM",
      categories: [
        { id: "all", label: "Semua Produk", icon: "grid" },
        { id: "coffee", label: "Coffee & Espresso", icon: "coffee" },
        { id: "airfryer", label: "Air Fryers & Ovens", icon: "flame" },
        { id: "toaster", label: "Toasters & Kettles", icon: "zap" },
        { id: "blender", label: "Blenders & Food Prep", icon: "utensils" },
      ],
      items: [
        {
          id: "espresso-20bar",
          categoryId: "coffee",
          subcategory: "Beverage Systems",
          code: "CAT-01 · ESPRESSO",
          name: "Semi-Automatic Pump Espresso",
          summary:
            "Mesin espresso bertekanan 15–20 Bar dengan sistem pemanas thermoblock presisi, portafilter komersial, dan steam wand stainless steel untuk pasar ekspor.",
          image: "/image/product-espresso.jpg",
          imageAlt:
            "Mesin espresso semi-otomatis stainless steel PT Donlim Technology Indonesia",
          models: [
            "15–20 Bar Compact Pump Espresso",
            "Thermoblock Quick-Heat Espresso",
            "Integrated Pressure Gauge Series",
            "Steam Wand & Frothing Sub-Assembly",
          ],
          specs: [
            { label: "Sistem Pemanas", value: "Thermoblock / Boiler" },
            { label: "Material Bodi", value: "Brushed SS & Heat-Safe ABS" },
            { label: "Tegangan Ekspor", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "Uji Wajib", value: "Hi-Pot, Pressure & Leak Test" },
          ],
          exportMarkets: ["Amerika Utara", "Eropa Barat", "Inggris"],
        },
        {
          id: "drip-coffee-pro",
          categoryId: "coffee",
          subcategory: "Beverage Systems",
          code: "CAT-01 · BREWER",
          name: "Programmable Drip & Pod Brewer",
          summary:
            "Pembuat kopi tetes otomatis dan sistem kapsul single-serve dengan kontrol suhu penyeduhan stabil serta fitur auto shut-off hemat energi.",
          image: "/image/product-espresso.jpg",
          imageAlt:
            "Sistem pembuat kopi tetes dan brewer otomatis OEM PT Donlim Technology Indonesia",
          imagePosition: "object-right",
          models: [
            "12-Cup Programmable Drip Coffee Maker",
            "Single-Serve Capsule & Pod Brewer",
            "Thermal Carafe Brew Station",
            "Anti-Drip Valve & Keep-Warm Plate",
          ],
          specs: [
            { label: "Kapasitas", value: "Single-Serve s/d 1.8L" },
            { label: "Kontrol", value: "Digital LCD / Mechanical" },
            { label: "Tegangan Ekspor", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "Uji Wajib", value: "Brew Temp & Endurance QA" },
          ],
          exportMarkets: ["Amerika Utara", "Eropa", "Asia-Pasifik"],
        },
        {
          id: "digital-airfryer",
          categoryId: "airfryer",
          subcategory: "Thermal Cooking",
          code: "CAT-02 · AIR FRYER",
          name: "Digital Rapid-Air Fryer Series",
          summary:
            "Air fryer konveksi udara panas berpresisi tinggi dengan panel kontrol sentuh LED, sensor suhu NTC akurat, dan keranjang food-contact bebas PFOA.",
          image: "/image/product-airfryer.jpg",
          imageAlt:
            "Air fryer digital modern seri thermal cooking PT Donlim Technology Indonesia",
          imagePosition: "object-left",
          models: [
            "Single-Basket Digital Air Fryer (4L–6L)",
            "Dual-Zone Sync Air Fryer (8L–9L)",
            "Viewing-Window Smart Air Fryer",
            "Non-Stick Food-Contact Basket System",
          ],
          specs: [
            { label: "Rentang Daya", value: "1.400W – 1.800W" },
            { label: "Kontrol Termal", value: "Digital PCB & NTC Sensor" },
            { label: "Kepatuhan Bahan", value: "Food-Contact Compliant" },
            { label: "Uji Wajib", value: "Thermal Cutoff & Airflow QA" },
          ],
          exportMarkets: ["Amerika Utara", "Uni Eropa", "Australia"],
        },
        {
          id: "convection-oven",
          categoryId: "airfryer",
          subcategory: "Thermal Cooking",
          code: "CAT-02 · OVEN",
          name: "Countertop Air-Fryer Convection Oven",
          summary:
            "Oven meja multi-fungsi berbalut baja nirkarat dengan sirkulasi kipas konveksi merata, pengaturan suhu presisi, dan pintu kaca tempered tahan panas.",
          image: "/image/product-airfryer.jpg",
          imageAlt:
            "Oven konveksi meja baja nirkarat PT Donlim Technology Indonesia",
          imagePosition: "object-right",
          models: [
            "Compact 18L–25L Countertop Oven",
            "Air-Fryer Toaster Oven Combo",
            "Multi-Preset Digital Baking Oven",
            "Dual-Element Quartz/SS Heating System",
          ],
          specs: [
            { label: "Rentang Daya", value: "1.500W – 1.800W" },
            { label: "Material Rongga", value: "Aluminized / Stainless Steel" },
            { label: "Proteksi", value: "Double-Layer Thermal Safety" },
            { label: "Uji Wajib", value: "Surface Temp & Hi-Pot Test" },
          ],
          exportMarkets: ["Amerika Utara", "Uni Eropa", "Global OEM"],
        },
        {
          id: "ss-toaster-4slice",
          categoryId: "toaster",
          subcategory: "Breakfast Appliances",
          code: "CAT-03 · TOASTER",
          name: "Brushed Stainless 4-Slice Toaster",
          summary:
            "Pemanggang roti 2-slot dan 4-slot dengan mekanisme pemusatan otomatis, kontrol tingkat kematangan elektronik 6-level, dan fitur anti-jam.",
          image: "/image/product-toaster.jpg",
          imageAlt:
            "Pemanggang roti 4-slot baja nirkarat PT Donlim Technology Indonesia",
          imagePosition: "object-left",
          models: [
            "2-Slice & 4-Slice Stainless Steel Toaster",
            "Wide-Slot Bagel & Defrost Control",
            "Dual Independent Control Panel",
            "Removable Stainless Crumb Tray",
          ],
          specs: [
            { label: "Finishing", value: "Brushed SS / Matte Coated" },
            { label: "Fitur Keamanan", value: "Auto Shut-Off & Anti-Jam" },
            { label: "Kapasitas Lini", value: "High-Speed Continuous Line" },
            { label: "Uji Wajib", value: "Browning Uniformity & Safety" },
          ],
          exportMarkets: ["Eropa", "Amerika Utara", "Inggris"],
        },
        {
          id: "precision-kettle",
          categoryId: "toaster",
          subcategory: "Breakfast Appliances",
          code: "CAT-03 · KETTLE",
          name: "Precision Gooseneck Electric Kettle",
          summary:
            "Ketel listrik pour-over dan breakfast kettle dengan basis putar 360°, proteksi boil-dry, dan pengendali suhu elektronik untuk kopi serta teh.",
          image: "/image/product-toaster.jpg",
          imageAlt:
            "Ketel listrik gooseneck presisi seri breakfast appliances PT Donlim Technology Indonesia",
          imagePosition: "object-right",
          models: [
            "Gooseneck Pour-Over Electric Kettle",
            "Variable-Temperature Digital Kettle",
            "Double-Wall Cool-Touch Kettle",
            "Coordinated Countertop Breakfast Set",
          ],
          specs: [
            { label: "Kapasitas", value: "0.8L – 1.7L Food-Grade SS" },
            { label: "Proteksi", value: "Boil-Dry & Auto Cut-Off" },
            { label: "Basis Daya", value: "360° Cordless Swivel Base" },
            { label: "Uji Wajib", value: "Lifecycle Boil & Leak Test" },
          ],
          exportMarkets: ["Eropa", "Inggris", "Nordik", "Amerika Utara"],
        },
        {
          id: "glass-blender",
          categoryId: "blender",
          subcategory: "Motorized Prep",
          code: "CAT-04 · BLENDER",
          name: "High-Torque Borosilicate Blender",
          summary:
            "Blender meja bermotor torsi tinggi dengan wadah kaca borosilikat tebal, sistem pisau baja nirkarat presisi, dan penguncian interlock ganda.",
          image: "/image/product-blender.jpg",
          imageAlt:
            "Blender kaca borosilikat torsi tinggi PT Donlim Technology Indonesia",
          imagePosition: "object-left",
          models: [
            "1.5L Borosilicate Glass Countertop Blender",
            "Tritan BPA-Free High-Speed Blender",
            "Personal Smoothie & Nutrient Extractor",
            "Pulse & Variable-Speed Rotary Control",
          ],
          specs: [
            { label: "Unit Motor", value: "High-Torque Group Motor" },
            { label: "Wadah", value: "Borosilicate Glass / Tritan" },
            { label: "Proteksi", value: "Thermal Overload & Interlock" },
            { label: "Uji Wajib", value: "Noise, Vibration & Load Test" },
          ],
          exportMarkets: ["Amerika Utara", "Eropa", "Amerika Latin"],
        },
        {
          id: "food-processor",
          categoryId: "blender",
          subcategory: "Motorized Prep",
          code: "CAT-04 · FOOD PREP",
          name: "Compact Multi-Blade Food Processor",
          summary:
            "Pengolah makanan serbaguna dengan peredam getaran optimal, mangkuk bebas BPA berkapasitas besar, dan kelengkapan cakram potong multi-fungsi.",
          image: "/image/product-blender.jpg",
          imageAlt:
            "Pengolah makanan kompak multi-pisau PT Donlim Technology Indonesia",
          imagePosition: "object-right",
          models: [
            "Compact 1.2L–2.0L Food Processor",
            "Multi-Disc Slicing & Shredding Kit",
            "Safety Dual-Lock Lid Mechanism",
            "Variable-Speed Hand Mixer & Chopper",
          ],
          specs: [
            { label: "Unit Motor", value: "Precision Copper-Wound Motor" },
            { label: "Material Mangkuk", value: "Impact-Resistant BPA-Free" },
            { label: "Proteksi", value: "Dual Safety Interlock Switch" },
            { label: "Uji Wajib", value: "Endurance Torque & Safety QA" },
          ],
          exportMarkets: ["Amerika Utara", "Eropa", "Asia"],
        },
      ],
    },
    quality: {
      eyebrow: "KUALITAS, HSE & JANGKAUAN EKSPOR",
      title: "Disiplin Mutu Tanpa Kompromi di Setiap Tahap Manufaktur",
      subtitle:
        "Kredibilitas produk ekspor dibangun melalui sistem verifikasi berlapis — mulai dari kedatangan bahan baku hingga audit pra-pengapalan — berpadu dengan budaya kerja aman (HSE).",
      pipelineTitle: "Alur Verifikasi Kualitas 4-Tahap",
      stages: [
        {
          code: "01 · IQC",
          title: "Incoming Quality Control",
          description:
            "Inspeksi dimensi, spesifikasi elektrik, dan kesesuaian material resin plastik, motor, serta elemen pemanas sebelum memasuki gudang produksi.",
        },
        {
          code: "02 · IPQC",
          title: "In-Process Quality Control",
          description:
            "Pemantauan parameter injeksi, uji fungsi sub-assembly, dan audit titik kritis langsung di sepanjang lini perakitan secara berkala.",
        },
        {
          code: "03 · FQC",
          title: "Final Quality & Safety Test",
          description:
            "Uji tegangan tinggi (Hi-Pot), uji kebocoran arus, inspeksi estetika bodi, dan verifikasi kinerja fungsional pada 100% unit akhir.",
        },
        {
          code: "04 · OQC",
          title: "Outgoing & Drop-Test Audit",
          description:
            "Sampling AQL internasional, uji jatuh kemasan (carton drop test), serta verifikasi pelabelan regulasi sebelum pemuatan kontainer ekspor.",
        },
      ],
      standardsTitle: "Kesiapan Kepatuhan & Sistem Manajemen",
      standards: [
        {
          code: "QMS",
          title: "Sistem Manajemen Mutu Terstandar",
          note: "Prosedur operasional mengacu standar ISO 9001 & traceability lot penuh.",
        },
        {
          code: "SAFETY",
          title: "Kesiapan Regulasi Pasar Global",
          note: "Desain & pengujian disesuaikan persyaratan UL/ETL (AS) dan CE/GS/RoHS (Eropa).",
        },
        {
          code: "HSE / K3",
          title: "Keselamatan & Kesehatan Kerja",
          note: "Pengawasan insinyur HSE khusus, standar ergonomi lini, & audit K3 berkala.",
        },
        {
          code: "SOCIAL",
          title: "Tata Kelola Ketenagakerjaan Etis",
          note: "Kepatuhan regulasi ketenagakerjaan Indonesia & kesiapan audit sosial pembeli global.",
        },
      ],
      exportTitle: "Distribusi Ekspor Global dari Jawa Tengah",
      exportRegions: [
        {
          region: "Amerika Utara",
          share: "Pasar Utama",
          focus: "Standar 120V/60Hz untuk ritel & merek rumah tangga AS–Kanada",
        },
        {
          region: "Eropa & Inggris",
          share: "Pasar Utama",
          focus: "Standar 220–240V/50Hz, kepatuhan RoHS & efisiensi energi",
        },
        {
          region: "Asia-Pasifik & Regional",
          share: "Ekspansi Strategis",
          focus:
            "Jaringan distribusi regional memanfaatkan hub logistik Indonesia",
        },
      ],
      hseTitle: "Komitmen SDM & Harmoni Lintas Budaya",
      hseText:
        "Kami bermitra dengan universitas dan lembaga bahasa di Jawa Tengah untuk pelatihan komunikasi serta transfer keahlian teknis antara tim insinyur internasional dan 4.000+ karyawan lokal.",
      faqTitle: "Pertanyaan Umum Mitra & Kandidat",
      faqs: [
        {
          id: "faq-1",
          question:
            "Apakah PT Donlim Technology Indonesia menerima kerja sama OEM dan ODM?",
          answer:
            "Ya. Sebagai bagian dari ekosistem Donlim Group (Guangdong Xinbao Holdings), fasilitas kami di Demak melayani manufaktur OEM maupun kolaborasi ODM bersama tim R&D grup untuk merek internasional berorientasi ekspor.",
        },
        {
          id: "faq-2",
          question:
            "Di mana lokasi persis pabrik PT Donlim Technology Indonesia?",
          answer:
            "Pabrik kami berlokasi di Jatengland Industrial Park Sayung (JIPS), Blok G-2, Desa Batu, Kecamatan Karangtengah, Kabupaten Demak, Jawa Tengah — terhubung langsung dengan jalur logistik Semarang dan Pelabuhan Tanjung Emas.",
        },
        {
          id: "faq-3",
          question:
            "Bagaimana proses rekrutmen untuk tenaga kerja lokal di Demak dan sekitarnya?",
          answer:
            "Rekrutmen terbuka secara berkala untuk posisi Operator Produksi, Quality Control (QC), Warehouse & Logistik, Teknik/Engineering, HSE, dan Staf Administrasi melalui kanal resmi HR perusahaan serta mitra bursa kerja daerah tanpa pungutan biaya apa pun.",
        },
      ],
    },
    gateway: {
      eyebrow: "ENTERPRISE GATEWAY",
      title: "Pilih Jalur Kolaborasi Anda Bersama PT Donlim",
      subtitle:
        "Kami menyediakan jalur komunikasi khusus agar kebutuhan mitra B2B global, pemasok lokal, dan talenta profesional tertangani langsung oleh tim terkait.",
      paths: [
        {
          id: "buyers",
          badge: "B2B & OEM BUYERS",
          title: "Mitra Merek & Pembeli Global",
          description:
            "Diskusikan kebutuhan kapasitas produksi, diversifikasi rantai pasok Asia Tenggara, audit fasilitas pabrik, dan penawaran manufaktur OEM/ODM.",
          bullets: [
            "Penjadwalan factory tour & audit kepatuhan",
            "Permintaan katalog lini produk & sampel",
            "Estimasi MOQ, lead time, & skema ekspor FOB Semarang",
          ],
          ctaLabel: "Hubungi Tim B2B Sales",
          inquiryTopic: "b2b-oem",
          icon: "handshake",
        },
        {
          id: "suppliers",
          badge: "PROCUREMENT & VENDOR",
          title: "Pemasok Material & Logistik Lokal",
          description:
            "Terbuka bagi vendor kemasan karton, resin/komponen pendukung, jasa kepabeanan, ekspedisi pelabuhan, dan utilitas industri di Jawa Tengah.",
          bullets: [
            "Registrasi profil perusahaan & sertifikasi vendor",
            "Kemitraan pengemasan ekspor & logistik kontainer",
            "Dukungan pemeliharaan fasilitas & suku cadang",
          ],
          ctaLabel: "Ajukan Kemitraan Vendor",
          inquiryTopic: "supplier",
          icon: "truck",
        },
        {
          id: "careers",
          badge: "CAREERS · DEMAK",
          title: "Talenta & Karier Manufaktur",
          description:
            "Bergabunglah bersama 4.000+ profesional manufaktur dalam lingkungan kerja modern, terstruktur, dan berorientasi pengembangan keahlian internasional.",
          bullets: [
            "Posisi: Operator, QC Inspector, Engineering & HSE",
            "Warehouse, Logistik Ekspor, & Staf Administrasi/Mandarin",
            "Proses rekrutmen resmi & transparan (bebas biaya)",
          ],
          ctaLabel: "Tanyakan Info Karier HR",
          inquiryTopic: "careers",
          icon: "briefcase",
        },
      ],
    },
    contact: {
      eyebrow: "KONTAK & LOKASI PABRIK",
      title: "Terhubung dengan Tim PT Donlim Technology Indonesia",
      subtitle:
        "Kirimkan pertanyaan kemitraan B2B, pengadaan vendor, atau informasi umum perusahaan. Tim kami akan merespons pada hari kerja.",
      plantTitle: "Fasilitas Manufaktur & Kantor Operasional",
      plantAddress: [
        "PT Donlim Technology Indonesia",
        "Jatengland Industrial Park Sayung (JIPS), Blok G-2",
        "Desa Batu, Kec. Karangtengah, Kab. Demak",
        "Jawa Tengah 59561, Indonesia",
      ],
      coordinates: "KORIDOR INDUSTRI SEMARANG – DEMAK · JIPS BLOK G-2",
      hoursLabel: "Jam Operasional Kantor",
      hoursValue: "Senin – Jumat, 08:00 – 17:00 WIB",
      departmentsTitle: "Kanal Departemen",
      departments: [
        {
          role: "B2B Sales & OEM Partnership",
          email: "business@donlim-indonesia.co.id",
          note: "Penawaran ekspor, katalog produk, & jadwal audit pabrik",
        },
        {
          role: "Procurement & Local Sourcing",
          email: "procurement@donlim-indonesia.co.id",
          note: "Kemitraan kemasan, material pendukung, & logistik",
        },
        {
          role: "Human Resources & Recruitment",
          email: "recruitment@donlim-indonesia.co.id",
          note: "Informasi lowongan resmi & kerja sama kampus",
        },
      ],
      mapButton: "Buka Lokasi JIPS Demak di Google Maps",
      formTitle: "Formulir Inquiry Perusahaan",
      formSubtitle:
        "Lengkapi detail di bawah ini agar pesan Anda langsung diarahkan ke departemen yang tepat.",
      fields: {
        name: "Nama Lengkap",
        namePlaceholder: "Contoh: Budi Santoso",
        company: "Perusahaan / Institusi",
        companyPlaceholder: "Nama perusahaan atau organisasi Anda",
        email: "Email Bisnis / Aktif",
        emailPlaceholder: "nama@perusahaan.com",
        phone: "Nomor Telepon / WhatsApp",
        phonePlaceholder: "+62 812-xxxx-xxxx",
        topic: "Kategori Keperluan",
        topics: [
          {
            value: "b2b-oem",
            label: "Kemitraan Manufaktur OEM / ODM Global",
          },
          { value: "factory-audit", label: "Jadwal Kunjungan & Audit Pabrik" },
          { value: "supplier", label: "Registrasi Supplier / Vendor Lokal" },
          { value: "careers", label: "Informasi Karier & Rekrutmen HR" },
          { value: "general", label: "Pertanyaan Umum Korporasi" },
        ],
        message: "Pesan & Detail Kebutuhan",
        messagePlaceholder:
          "Jelaskan kategori produk, estimasi volume, atau detail pertanyaan Anda...",
        submit: "Kirim Pesan Inquiry",
        submitting: "Memproses...",
      },
      validation: {
        nameRequired: "Mohon isi nama lengkap Anda.",
        emailInvalid: "Mohon masukkan alamat email yang valid.",
        messageMin:
          "Mohon tuliskan pesan minimal 15 karakter agar tim kami dapat membantu.",
      },
      successTitle: "Inquiry Anda Telah Tercatat",
      successMessage:
        "Terima kasih telah menghubungi PT Donlim Technology Indonesia. Ringkasan pesan Anda siap ditindaklanjuti oleh departemen terkait pada hari kerja berikutnya.",
      successReset: "Kirim Pesan Lainnya",
    },
    footer: {
      tagline:
        "Basis manufaktur presisi peralatan rumah tangga kecil berorientasi ekspor di Jawa Tengah — menghadirkan kualitas global dengan kekuatan tenaga kerja Indonesia.",
      groupNote:
        "Anak perusahaan dari Guangdong Xinbao Electrical Appliances Holdings Co., Ltd. (Donlim Group).",
      companyColTitle: "Perusahaan",
      capabilitiesColTitle: "Lini & Kapabilitas",
      locationColTitle: "Lokasi Pabrik",
      capabilitiesLinks: [
        "Plastic Injection Molding",
        "Automated Assembly Lines",
        "Coffee & Espresso Systems",
        "Air Fryers & Kitchen Ovens",
        "QA/QC & Safety Testing Lab",
      ],
      copyright: "PT Donlim Technology Indonesia. Hak cipta dilindungi.",
      complianceNote:
        "Jatengland Industrial Park Sayung (JIPS) Blok G-2 · Demak, Jawa Tengah",
    },
  },

  zh: {
    skipToContent: "跳转到主要内容",
    nav: {
      items: [
        { label: "关于我们", href: "#about" },
        { label: "解决方案", href: "#solutions" },
        { label: "制造能力", href: "#capabilities" },
        { label: "产品目录", href: "#products" },
        { label: "品质与出口", href: "#quality" },
        { label: "合作与招聘", href: "#gateway" },
      ],
      cta: "联系我们",
      mobileTitle: "印尼东菱科技有限公司",
      mobileSubtitle: "企业官网导航",
      languageLabel: "切换印尼语或中文",
      openMenuLabel: "打开导航菜单",
    },
    hero: {
      carouselLabel: "印尼东菱科技有限公司主视觉轮播",
      prevLabel: "上一张幻灯片",
      nextLabel: "下一张幻灯片",
      pauseLabel: "暂停自动轮播",
      playLabel: "开始自动轮播",
      goToSlidePrefix: "切换到第",
      slides: [
        {
          id: "precision-manufacturing",
          tagline: "打造世界级精密小家电",
          taglineAccent: "智能制造基地",
          image: "/image/hero-factory.jpg",
          imageAlt: "印尼东菱科技有限公司现代化小家电自动化装配车间",
        },
        {
          id: "global-export-hub",
          tagline: "立足印尼中爪哇，稳健链接",
          taglineAccent: "全球出口市场",
          image: "/image/hero-export.jpg",
          imageAlt:
            "位于中爪哇省淡目县 JIPS 工业园区的印尼东菱科技有限公司现代化制造园区",
        },
        {
          id: "engineered-living",
          tagline: "以精工智造赋能",
          taglineAccent: "全球现代品质生活",
          image: "/image/hero-craft.jpg",
          imageAlt: "面向全球品牌打造的现代化精密厨房小家电产品系列",
        },
      ],
    },
    metrics: [
      {
        value: "4,000+",
        label: "印尼本土员工",
        detail: "由约 200 名资深工程技术与管理专家团队协同引领",
        icon: "users",
      },
      {
        value: "30+ 年",
        label: "东菱集团底蕴",
        detail: "依托广东新宝电器股份有限公司三十余年全球制造积淀",
        icon: "factory",
      },
      {
        value: "100%",
        label: "外向型出口基地",
        detail: "稳定供应北美、欧洲等国际主流品牌与零售渠道",
        icon: "globe",
      },
      {
        value: "JIPS G-2",
        label: "中爪哇制造枢纽",
        detail: "坐落于三宝垄—淡目工业走廊，便捷直连国际海运港口",
        icon: "mapPin",
      },
    ],
    about: {
      eyebrow: "关于公司",
      title: "融合全球精工供应链与印尼本土制造动能",
      lead: "印尼东菱科技有限公司（PT Donlim Technology Indonesia）成立于 2023 年，位于印度尼西亚中爪哇省淡目县，是广东新宝电器股份有限公司（东菱集团 / Donlim Group）在东南亚布局的战略级制造基地。",
      paragraphs: [
        "工厂高效协同集团核心部件生态（包括核心发热元件与高性能电机），并在中爪哇园区内完整实现精密注塑成型、标准化规模装配、全流程安规性能检测及出口级成品包装。",
        "除规模化制造外，印尼东菱科技有限公司始终坚持长期技术转移、严格落实 EHS 职业健康安全体系，并积极携手印尼中爪哇高校及语言文化机构，深化跨文化团队融合与本土产业人才培养。",
      ],
      parentLabel: "全球母公司集团",
      parentName: "广东新宝电器股份有限公司（东菱集团 / Donlim Group）",
      parentMeta:
        "全球领先的小家电 ODM/OEM 制造企业之一，深耕厨房与家居小家电研发制造三十余载。",
      visionTitle: "企业愿景",
      visionText:
        "成为东南亚地区最值得信赖、兼具精密品质与全球出口竞争力的标杆小家电制造中心。",
      missionTitle: "运营使命",
      missionText:
        "以国际标准品质、稳健供应链交付、精益运营效率，与客户及印尼本土团队共创可持续价值。",
      milestones: [
        {
          year: "1995+",
          title: "新宝 / 东菱集团奠基",
          detail: "确立全球西式小家电 ODM/OEM 领军地位与完整研发体系。",
        },
        {
          year: "2023",
          title: "印尼东菱科技有限公司成立",
          detail: "战略落户中爪哇省淡目县 Jatengland 工业园（JIPS）G-2 区。",
        },
        {
          year: "2024–至今",
          title: "规模投产与稳定全球交付",
          detail: "团队规模突破 4,000 人，持续向北美及欧洲市场大批量出货。",
        },
      ],
      labCaption: "电气安规与整机性能验证 — 淡目工厂 QA/QC 测试实验室",
      labImageAlt:
        "印尼东菱科技有限公司质量控制工程师在现代化检测实验室对意式咖啡机与厨房电器进行安规测试",
    },
    solutions: {
      eyebrow: "综合制造解决方案",
      title: "面向全球品牌与韧性供应链的一站式制造方案",
      subtitle:
        "针对国际品牌客户的全球产能布局、严苛市场准入法规及旺季弹性交付需求，提供成熟落地的东南亚制造解决方案。",
      outcomesHeading: "核心交付价值",
      bannerTitle: "为您的品牌定制专属印尼制造方案？",
      bannerSubtitle:
        "我们的双语工程与商务团队随时支持产能评估、DFM 制造可行性分析及淡目工厂实地验厂安排。",
      bannerCta: "预约方案沟通",
      items: [
        {
          id: "oem-odm-turnkey",
          code: "SOL-01",
          audience: "国际品牌与零售商",
          title: "全流程 OEM / ODM 交钥匙制造方案",
          description:
            "协同集团研发中心开展工业设计与可制造性优化（DFM），在印尼基地一站式完成模具注塑、规模装配与零售成品包装交付。",
          outcomes: [
            "涵盖工程导入（NPI）与规范试产（Pilot Run）验证",
            "灵活支持外观材质、配色及零售彩盒定制",
            "注塑件自制直连整机装配，严控交期与成本",
          ],
          highlightLabel: "合作模式",
          highlightValue: "OEM / ODM 一站式交付",
          ctaLabel: "咨询 OEM/ODM 方案",
          inquiryTopic: "b2b-oem",
          icon: "layers",
        },
        {
          id: "sea-supply-hub",
          code: "SOL-02",
          audience: "全球供应链布局",
          title: "东南亚出口枢纽与韧性供应链方案",
          description:
            "充分发挥集团核心电机与发热部件配套优势，叠加中爪哇省淡目基地与三宝垄丹戎马斯港的区位便利，助力客户优化全球供应链韧性。",
          outcomes: [
            "成熟落地的东南亚（印尼）出口制造产能配置",
            "紧邻三宝垄港口物流走廊，高效响应 FOB 出运",
            "全链路批次追溯与现代化出口仓储集装箱管理",
          ],
          highlightLabel: "出口枢纽",
          highlightValue: "JIPS 淡目 · 三宝垄港出运",
          ctaLabel: "了解供应链布局",
          inquiryTopic: "b2b-oem",
          icon: "globe",
        },
        {
          id: "global-compliance",
          code: "SOL-03",
          audience: "品质与合规保障",
          title: "欧美安规认证与全流程品控方案",
          description:
            "围绕北美与欧盟严苛的电气安全、食品接触材料与能效要求，通过实验室全项测试与产线全检机制确保每一批产品合规交付。",
          outcomes: [
            "全面兼容北美 120V/60Hz 与欧洲 220–240V/50Hz 标准",
            "产线 100% 高压绝缘（Hi-Pot）与寿命老化测试",
            "完备承接国际大客户质量体系、EHS 及社会责任验厂",
          ],
          highlightLabel: "质量防线",
          highlightValue: "四阶管控 IQC → OQC",
          ctaLabel: "预约验厂与品控评审",
          inquiryTopic: "factory-audit",
          icon: "shieldCheck",
        },
        {
          id: "scalable-operations",
          code: "SOL-04",
          audience: "弹性产能与本地协同",
          title: "规模化产线弹性与中印尼双语交付方案",
          description:
            "依托 4,000+ 训练有素的本土产业工人与中印尼双语技术管理团队，高效承接国际零售旺季订单爬坡与多机型柔性切换。",
          outcomes: [
            "模块化精益装配线，支持多品类快速换线生产",
            "中印尼双语工程与项目团队，确保技术沟通零偏差",
            "深度联动中爪哇本地包材与物流供应商生态",
          ],
          highlightLabel: "团队规模",
          highlightValue: "4,000+ 成熟产业团队",
          ctaLabel: "对接产能与排期",
          inquiryTopic: "b2b-oem",
          icon: "trendingUp",
        },
      ],
    },
    capabilities: {
      eyebrow: "核心制造能力",
      title: "从精密注塑到整柜出口的一体化制造体系",
      subtitle:
        "JIPS G-2 园区每一条产线均围绕大批量稳定输出、严苛尺寸公差及国际电气安规标准进行系统化部署。",
      items: [
        {
          id: "molding",
          code: "CAP-01",
          title: "精密塑料注塑成型",
          description:
            "配备高速自动化注塑机与精准温控系统，选用符合出口标准的食品接触级及耐高温阻燃材料，并具备厂内精密模具维保能力。",
          highlights: [
            "出口合规食品接触级及耐高温环保树脂",
            "严控结构尺寸公差与高质感外观一致性",
            "注塑成品高效直供下游组件与整机装配线",
          ],
          icon: "cpu",
          featured: true,
          image: "/image/molding-facility.jpg",
          imageAlt: "印尼东菱科技有限公司现代化高速自动化精密注塑成型车间",
        },
        {
          id: "assembly",
          code: "CAP-02",
          title: "规模化精益整机装配",
          description:
            "模块化装配线支持意式咖啡机、空气炸锅、烤箱、多士炉与搅拌机等多品类大批量稳定生产与高效换型。",
          highlights: [
            "精益工位节拍平衡与标准化作业流程",
            "数字化扭力校准与在线电气组件检验",
          ],
          icon: "cog",
        },
        {
          id: "qa-testing",
          code: "CAP-03",
          title: "安规与寿命测试实验室",
          description:
            "针对北美与欧洲法规开展耐高温、高压耐压（Hi-Pot）、泄漏电流及长周期寿命耐久性测试，严守产品安全底线。",
          highlights: [
            "100% 产线在线电气安规全检",
            "整机寿命循环与温升异常保护验证",
          ],
          icon: "shieldCheck",
        },
        {
          id: "supply-chain",
          code: "CAP-04",
          title: "全球供应链与出口物流",
          description:
            "高效联动集团核心电机与发热体配套，结合出口彩盒包装、托盘化集装及临近三宝垄丹戎马斯港的区位优势。",
          highlights: [
            "快捷衔接国际海运干线港口",
            "规范化出口仓储与批次条码追溯",
          ],
          icon: "packageCheck",
        },
        {
          id: "odm-engineering",
          code: "CAP-05",
          title: "OEM / ODM 工程技术转移",
          description:
            "跨国工程师团队全程支持新品工业化导入、可制造性优化（DFM）及不同目标市场电压与插头规格定制。",
          highlights: [
            "覆盖北美 120V/60Hz 与欧洲 220–240V/50Hz 规格",
            "量产前全流程 Pilot Run 试产签核验证",
          ],
          icon: "wrench",
        },
      ],
    },
    products: {
      eyebrow: "OEM / ODM 产品目录",
      title: "探索我们的产品目录",
      subtitle:
        "查找契合您品牌 OEM/ODM 规划的小家电产品平台。点击下方品类筛选，或直接浏览全部量产系列。",
      viewProductLabel: "查看产品",
      showingLabel: "款可选产品系列",
      modelsHeading: "量产机型覆盖",
      specsHeading: "核心制造参数",
      marketsHeading: "主要出口市场",
      ctaLabel: "获取 OEM 规格书与报价",
      categories: [
        { id: "all", label: "全部产品", icon: "grid" },
        { id: "coffee", label: "咖啡机系列", icon: "coffee" },
        { id: "airfryer", label: "空炸与烤箱", icon: "flame" },
        { id: "toaster", label: "多士炉与水壶", icon: "zap" },
        { id: "blender", label: "搅拌与料理机", icon: "utensils" },
      ],
      items: [
        {
          id: "espresso-20bar",
          categoryId: "coffee",
          subcategory: "咖啡饮品系列",
          code: "CAT-01 · ESPRESSO",
          name: "半自动泵压意式咖啡机",
          summary:
            "15–20 Bar 高压泵压萃取平台，搭载快速温控加热块（Thermoblock）、商业级手柄及不锈钢蒸汽打奶棒，面向欧美主流市场。",
          image: "/image/product-espresso.jpg",
          imageAlt: "不锈钢半自动意式咖啡机",
          models: [
            "15–20 Bar 紧凑型泵压意式机",
            "Thermoblock 快速预热意式系列",
            "可视化压力表专业款",
            "高压蒸汽打奶与热水组件",
          ],
          specs: [
            { label: "加热系统", value: "Thermoblock / 锅炉" },
            { label: "机身材质", value: "拉丝不锈钢 / 耐热 ABS" },
            { label: "出口电压", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "必检项目", value: "耐压、压力与防漏全检" },
          ],
          exportMarkets: ["北美", "西欧", "英国"],
        },
        {
          id: "drip-coffee-pro",
          categoryId: "coffee",
          subcategory: "咖啡饮品系列",
          code: "CAT-01 · BREWER",
          name: "智能预约滴漏与胶囊咖啡机",
          summary:
            "稳定控温滴漏式咖啡机与单杯胶囊萃取机型，具备精准冲泡水温控制、防滴漏阀设计及节能自动断电功能。",
          image: "/image/product-espresso.jpg",
          imageAlt: "智能滴漏与单杯胶囊咖啡机",
          imagePosition: "object-right",
          models: [
            "12 杯智能预约滴漏咖啡机",
            "单杯胶囊 / 粉盒两用咖啡机",
            "不锈钢保温壶萃取工作站",
            "防滴漏阀与恒温保温盘方案",
          ],
          specs: [
            { label: "容量范围", value: "单杯至 1.8L" },
            { label: "控制方式", value: "数字 LCD / 机械按键" },
            { label: "出口电压", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "必检项目", value: "萃取温控与寿命验证" },
          ],
          exportMarkets: ["北美", "欧洲", "亚太"],
        },
        {
          id: "digital-airfryer",
          categoryId: "airfryer",
          subcategory: "热风烹饪系列",
          code: "CAT-02 · AIR FRYER",
          name: "数显高速热风空气炸锅",
          summary:
            "高效立体热风循环空气炸锅平台，配备 LED 触控面板、高精度 NTC 温控传感器及符合欧美标准的无 PFOA 食品级不粘炸篮。",
          image: "/image/product-airfryer.jpg",
          imageAlt: "现代数显台式空气炸锅系列",
          imagePosition: "object-left",
          models: [
            "单篮数显空气炸锅（4L–6L）",
            "双篮同步智控空气炸锅（8L–9L）",
            "可视窗智能空气炸锅",
            "食品接触级不粘炸篮组件",
          ],
          specs: [
            { label: "功率范围", value: "1,400W – 1,800W" },
            { label: "温控模块", value: "数字 PCB + NTC 传感" },
            { label: "材料合规", value: "欧美食品接触级认证" },
            { label: "必检项目", value: "过温保护与风道检验" },
          ],
          exportMarkets: ["北美", "欧盟", "澳大利亚"],
        },
        {
          id: "convection-oven",
          categoryId: "airfryer",
          subcategory: "热风烹饪系列",
          code: "CAT-02 · OVEN",
          name: "多功能热风空炸台式烤箱",
          summary:
            "拉丝不锈钢多功能台式烤箱，融合高速热风空炸与均匀烘烤功能，采用钢化耐热玻璃视窗与精准电子控温设计。",
          image: "/image/product-airfryer.jpg",
          imageAlt: "拉丝不锈钢多功能台式热风烤箱",
          imagePosition: "object-right",
          models: [
            "18L–25L 紧凑型台式烤箱",
            "空气炸锅电烤箱一体机",
            "多菜单数显烘焙烤箱",
            "上下双发热管热风循环系统",
          ],
          specs: [
            { label: "功率范围", value: "1,500W – 1,800W" },
            { label: "内胆材质", value: "镀铝板 / 不锈钢腔体" },
            { label: "安全防护", value: "双重温控隔热保护" },
            { label: "必检项目", value: "表温测试与耐压全检" },
          ],
          exportMarkets: ["北美", "欧盟", "全球 OEM"],
        },
        {
          id: "ss-toaster-4slice",
          categoryId: "toaster",
          subcategory: "西式早餐系列",
          code: "CAT-03 · TOASTER",
          name: "拉丝不锈钢四片多士炉",
          summary:
            "2 片及 4 片宽槽多士炉，支持自动居中烘烤、6 档电子焦度控制、防卡死自动断电保护及抗指纹拉丝金属机身。",
          image: "/image/product-toaster.jpg",
          imageAlt: "四片拉丝不锈钢宽槽多士炉",
          imagePosition: "object-left",
          models: [
            "2 片 / 4 片不锈钢多士炉",
            "宽槽贝果与解冻模式机型",
            "双区独立控温四片款",
            "抽拉式不锈钢碎屑盘结构",
          ],
          specs: [
            { label: "表面工艺", value: "拉丝不锈钢 / 哑光喷涂" },
            { label: "安全设计", value: "防卡死与自动断电" },
            { label: "产线能力", value: "高速连续化装配产线" },
            { label: "必检项目", value: "烘烤均匀度与安规全检" },
          ],
          exportMarkets: ["欧洲", "北美", "英国"],
        },
        {
          id: "precision-kettle",
          categoryId: "toaster",
          subcategory: "西式早餐系列",
          code: "CAT-03 · KETTLE",
          name: "精密控温细嘴手冲电水壶",
          summary:
            "手冲细嘴壶与现代早餐电水壶系列，配置 360° 无线旋转底座、防干烧保护及精准恒温控制系统，适配咖啡与茶饮冲泡。",
          image: "/image/product-toaster.jpg",
          imageAlt: "哑光灰细嘴手冲控温电水壶",
          imagePosition: "object-right",
          models: [
            "细嘴手冲控温电水壶",
            "多段电子调温数显水壶",
            "双层防烫保温电水壶",
            "成套西式早餐外观系列",
          ],
          specs: [
            { label: "容量规格", value: "0.8L – 1.7L 食品级不锈钢" },
            { label: "安全防护", value: "防干烧与沸腾自动断电" },
            { label: "底座结构", value: "360° 无线分离底座" },
            { label: "必检项目", value: "干烧寿命与防渗漏测试" },
          ],
          exportMarkets: ["欧洲", "英国", "北欧", "北美"],
        },
        {
          id: "glass-blender",
          categoryId: "blender",
          subcategory: "动力料理系列",
          code: "CAT-04 · BLENDER",
          name: "高扭矩高硼硅玻璃搅拌机",
          summary:
            "搭载集团高扭矩精密电机与加厚高硼硅玻璃杯，配合精钢多叶刀组与双重安全联锁开关，兼具强劲破壁力与低噪运行体验。",
          image: "/image/product-blender.jpg",
          imageAlt: "高硼硅玻璃杯高扭矩台式搅拌机",
          imagePosition: "object-left",
          models: [
            "1.5L 高硼硅玻璃台式搅拌机",
            "Tritan 无双酚 A 高速搅拌机",
            "便携随行果蔬料理杯",
            "无级旋钮与点动脉冲款",
          ],
          specs: [
            { label: "核心电机", value: "集团自研高扭矩电机" },
            { label: "杯体材质", value: "高硼硅玻璃 / Tritan" },
            { label: "安全保护", value: "过热保护与安全联锁" },
            { label: "必检项目", value: "噪音、动平衡与负载测试" },
          ],
          exportMarkets: ["北美", "欧洲", "拉美"],
        },
        {
          id: "food-processor",
          categoryId: "blender",
          subcategory: "动力料理系列",
          code: "CAT-04 · FOOD PREP",
          name: "多功能精钢刀盘食物料理机",
          summary:
            "紧凑型多刀盘食物处理机，具备优良减震降噪结构、无 BPA 抗冲击料理碗及切片切丝多套精钢刀盘配置。",
          image: "/image/product-blender.jpg",
          imageAlt: "紧凑型多刀盘不锈钢食物料理机",
          imagePosition: "object-right",
          models: [
            "1.2L–2.0L 多功能料理机",
            "多刀盘切片 / 切丝 / 绞肉套装",
            "双卡扣安全联锁杯盖结构",
            "多档位手持搅拌与切碎系列",
          ],
          specs: [
            { label: "核心电机", value: "精密铜线动力电机" },
            { label: "碗体材质", value: "抗冲击无 BPA 食品级" },
            { label: "安全防护", value: "双安全联锁微动开关" },
            { label: "必检项目", value: "扭矩耐久与整机安规检" },
          ],
          exportMarkets: ["北美", "欧洲", "亚洲"],
        },
      ],
    },
    quality: {
      eyebrow: "品质管理、EHS 与全球出口",
      title: "贯穿每一道制造工序的严苛质量纪律",
      subtitle:
        "国际出口信誉源自层层把关的品质验证体系——从原料入库到出货抽检全流程闭环管控，并与高标准 EHS 职业健康安全文化深度融合。",
      pipelineTitle: "四阶品质闭环管控流程",
      stages: [
        {
          code: "01 · IQC",
          title: "来料品质检验",
          description:
            "对每一批次塑胶粒子、电机、发热管及电子元器件进行尺寸、电气性能与环保材料核验，杜绝不良原料流入产线。",
        },
        {
          code: "02 · IPQC",
          title: "制程巡检管控",
          description:
            "实时监控注塑工艺参数、半成品功能测试及装配线关键质量控制点（CTQ），及时预警并消除过程偏差。",
        },
        {
          code: "03 · FQC",
          title: "成品 100% 安规全检",
          description:
            "对每一台下线整机实施高压耐压（Hi-Pot）、接地电阻、泄漏电流、外观细节及核心功能 100% 全面检验。",
        },
        {
          code: "04 · OQC",
          title: "出货抽检与跌落测试",
          description:
            "遵循国际 AQL 抽样标准，执行彩盒及外箱跌落测试与目的港法规标签核验，确保整柜安全交付。",
        },
      ],
      standardsTitle: "合规体系与治理准备度",
      standards: [
        {
          code: "QMS",
          title: "标准化质量管理体系",
          note: "严格参照 ISO 9001 质量管理框架执行标准化作业与全批次可追溯管控。",
        },
        {
          code: "SAFETY",
          title: "国际市场法规准入能力",
          note: "设计与测试全面对标北美 UL/ETL 及欧洲 CE/GS/RoHS 强制安全规范。",
        },
        {
          code: "EHS / K3",
          title: "职业健康、安全与环保",
          note: "配置专职 EHS 工程管理团队、人机工程工位标准及常态化安全巡查。",
        },
        {
          code: "SOCIAL",
          title: "合规用工与社会责任治理",
          note: "全面遵守印尼劳工法规，具备承接国际零售商社会责任验厂的完备基础。",
        },
      ],
      exportTitle: "立足中爪哇的全球出口版图",
      exportRegions: [
        {
          region: "北美市场",
          share: "核心主力",
          focus: "120V/60Hz 产品平台，稳健服务美国与加拿大主流家电品牌及商超",
        },
        {
          region: "欧洲与英国",
          share: "核心主力",
          focus: "220–240V/50Hz 平台，满足 RoHS 环保与欧盟能效标准",
        },
        {
          region: "亚太及区域市场",
          share: "战略拓展",
          focus: "依托印尼海运枢纽与东盟区位优势，高效辐射亚太市场",
        },
      ],
      hseTitle: "本土人才培养与跨文化共融",
      hseText:
        "公司长期携手印尼中爪哇高等院校与语言中心开展双语技能培训，促进外派技术专家与 4,000+ 印尼本土员工高效协同成长。",
      faqTitle: "合作伙伴与求职常见问题",
      faqs: [
        {
          id: "faq-1",
          question: "印尼东菱科技有限公司是否承接 OEM 与 ODM 合作？",
          answer:
            "是的。作为广东新宝电器股份有限公司（东菱集团）旗下核心海外基地，淡目工厂既承接大批量 OEM 制造，也可依托集团研发体系为出口品牌提供一体化 ODM 合作方案。",
        },
        {
          id: "faq-2",
          question: "工厂具体位于印尼哪个工业园区？",
          answer:
            "工厂坐落于印度尼西亚中爪哇省淡目县 Karangtengah 区 Batu 村 Jatengland Industrial Park Sayung（JIPS）工业园 G-2 区，直连三宝垄干线与丹戎马斯国际港口。",
        },
        {
          id: "faq-3",
          question: "中爪哇本地人才及双语专业人员如何应聘？",
          answer:
            "公司定期面向生产操作员、QC 质检员、仓储物流、生产工程/EHS 及中印尼双语行政管理岗位开放官方招聘，所有正规招聘渠道均不收取任何费用。",
        },
      ],
    },
    gateway: {
      eyebrow: "企业专属通道",
      title: "选择您的专属业务对接通道",
      subtitle:
        "通过分类对接入口，全球品牌采购商、印尼本土供应商与制造行业人才均可高效直达对应业务部门。",
      paths: [
        {
          id: "buyers",
          badge: "B2B 国际采购",
          title: "全球品牌与 OEM 合作伙伴",
          description:
            "对接东南亚产能规划、OEM/ODM 合作报价、工程打样以及淡目制造基地实地验厂安排。",
          bullets: [
            "预约工厂实地考察与质量合规验厂",
            "索取量产产品目录与技术参数表",
            "沟通 MOQ、交期及三宝垄港 FOB 出口方案",
          ],
          ctaLabel: "联系 B2B 商务团队",
          inquiryTopic: "b2b-oem",
          icon: "handshake",
        },
        {
          id: "suppliers",
          badge: "采购与本土供应",
          title: "印尼本地包材与物流供应商",
          description:
            "诚邀中爪哇及周边优质出口纸箱彩盒厂、辅助材料商、报关行、海运货代及工业设备维保服务商合作。",
          bullets: [
            "提交供应商企业资质与质量认证文件",
            "出口包装材料与集装箱海运物流合作",
            "厂务设施维护与工业耗材配套供应",
          ],
          ctaLabel: "提交供应商合作申请",
          inquiryTopic: "supplier",
          icon: "truck",
        },
        {
          id: "careers",
          badge: "人才招聘 · 淡目",
          title: "制造精英与双语职业发展",
          description:
            "加入 4,000+ 现代化制造业团队，在规范安全、国际化技术氛围浓厚的平台中开启长期职业成长。",
          bullets: [
            "热招：产线技工、QC 质检、生产工程与 EHS",
            "仓储物流、出口关务及中印尼双语管理专员",
            "官方公开招聘，全程零费用透明录用",
          ],
          ctaLabel: "咨询人事招聘通道",
          inquiryTopic: "careers",
          icon: "briefcase",
        },
      ],
    },
    contact: {
      eyebrow: "联系我们与工厂位置",
      title: "联系印尼东菱科技有限公司团队",
      subtitle:
        "欢迎提交 B2B 制造合作、本土供应商入驻或企业综合咨询。我们的业务团队将在工作日内及时回复。",
      plantTitle: "制造基地与运营办公地址",
      plantAddress: [
        "PT Donlim Technology Indonesia（印尼东菱科技有限公司）",
        "Jatengland Industrial Park Sayung (JIPS), Blok G-2",
        "Desa Batu, Kec. Karangtengah, Kab. Demak",
        "Jawa Tengah 59561, Indonesia",
      ],
      coordinates: "三宝垄—淡目工业走廊 · JIPS 工业园 G-2 区",
      hoursLabel: "办公营业时间",
      hoursValue: "周一至周五，08:00 – 17:00（印尼西部时间 WIB / UTC+7）",
      departmentsTitle: "各部门联系邮箱",
      departments: [
        {
          role: "B2B 商务与 OEM 合作",
          email: "business@donlim-indonesia.co.id",
          note: "出口报价、产品规格书及工厂验厂预约",
        },
        {
          role: "供应链采购与本土配套",
          email: "procurement@donlim-indonesia.co.id",
          note: "包装材料、辅料及港口物流合作伙伴对接",
        },
        {
          role: "人力资源与招聘部",
          email: "recruitment@donlim-indonesia.co.id",
          note: "官方岗位咨询与高校校企合作",
        },
      ],
      mapButton: "在 Google 地图查看 JIPS 淡目工厂位置",
      formTitle: "企业在线咨询表单",
      formSubtitle:
        "请填写以下信息，您的需求将直接分派至对应职能部门处理。",
      fields: {
        name: "您的姓名",
        namePlaceholder: "例如：陈明 / Budi Santoso",
        company: "公司 / 机构名称",
        companyPlaceholder: "请输入您的公司或单位名称",
        email: "商务邮箱",
        emailPlaceholder: "name@company.com",
        phone: "联系电话 / WhatsApp / 微信",
        phonePlaceholder: "+62 812-xxxx-xxxx / +86 138-xxxx-xxxx",
        topic: "咨询业务类别",
        topics: [
          { value: "b2b-oem", label: "全球 OEM / ODM 制造合作" },
          { value: "factory-audit", label: "工厂参观与合规验厂预约" },
          { value: "supplier", label: "印尼本地供应商 / 物流商入驻" },
          { value: "careers", label: "人事招聘与职业发展咨询" },
          { value: "general", label: "企业综合事务咨询" },
        ],
        message: "具体需求与留言内容",
        messagePlaceholder:
          "请简要说明目标产品品类、预估年产能需求或希望沟通的具体事项...",
        submit: "提交企业咨询",
        submitting: "正在提交...",
      },
      validation: {
        nameRequired: "请填写您的姓名。",
        emailInvalid: "请输入有效的电子邮箱地址。",
        messageMin: "请填写至少 15 个字符的需求说明，以便我们准确回复。",
      },
      successTitle: "您的咨询信息已成功登记",
      successMessage:
        "感谢联系印尼东菱科技有限公司。您的咨询摘要已记录，相关部门负责人将在下个工作日内与您取得联系。",
      successReset: "继续发送新咨询",
    },
    footer: {
      tagline:
        "立足印尼中爪哇的外向型小家电精密制造基地——以国际严苛品质标准与本土制造力量服务全球品牌。",
      groupNote: "广东新宝电器股份有限公司（东菱集团 / Donlim Group）子公司。",
      companyColTitle: "企业导航",
      capabilitiesColTitle: "核心产线与能力",
      locationColTitle: "工厂地址",
      capabilitiesLinks: [
        "精密塑料注塑成型",
        "自动化整机装配线",
        "咖啡机与意式系统",
        "空气炸锅与台式烤箱",
        "QA/QC 安规测试实验室",
      ],
      copyright: "PT Donlim Technology Indonesia（印尼东菱科技有限公司）版权所有。",
      complianceNote:
        "印尼中爪哇省淡目县 Jatengland 工业园（JIPS）G-2 区",
    },
  },
};
