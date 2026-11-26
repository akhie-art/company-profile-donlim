export type Locale = "id" | "en";

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
        { label: "Kapabilitas", href: "#capabilities" },
        { label: "Produk", href: "#products" },
        { label: "Kualitas & Ekspor", href: "#quality" },
        { label: "Kemitraan & Karier", href: "#gateway" },
      ],
      cta: "Hubungi Kami",
      mobileTitle: "PT Donlim Technology Indonesia",
      mobileSubtitle: "Navigasi Company Profile",
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
      title: "Menghubungkan Ekosistem Manufaktur Global dengan Keunggulan SDM Indonesia",
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
          detail: "Membangun reputasi global sebagai pemimpin ODM/OEM peralatan dapur.",
        },
        {
          year: "2023",
          title: "Pendirian PT Donlim Technology Indonesia",
          detail: "Ekspansi strategis ke Jatengland Industrial Park Sayung, Demak.",
        },
        {
          year: "2024–Kini",
          title: "Operasi Skala Besar & Ekspor",
          detail: "Menyerap 4.000+ tenaga kerja dengan pengiriman rutin ke pasar global.",
        },
      ],
      labCaption: "Inspeksi Keselamatan Elektrik & Validasi Mutu — Lab QA/QC Demak",
      labImageAlt:
        "Insinyur kontrol kualitas PT Donlim Technology Indonesia menguji mesin kopi dan peralatan dapur elektrik di laboratorium QA/QC",
    },
    capabilities: {
      eyebrow: "KAPABILITAS MANUFAKTUR",
      title: "Proses Produksi Terintegrasi dari Cetakan Presisi hingga Kontainer Ekspor",
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
          imageAlt: "Mesin espresso semi-otomatis stainless steel PT Donlim Technology Indonesia",
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
          imageAlt: "Sistem pembuat kopi tetes dan brewer otomatis OEM PT Donlim Technology Indonesia",
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
          imageAlt: "Air fryer digital modern seri thermal cooking PT Donlim Technology Indonesia",
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
          imageAlt: "Oven konveksi meja baja nirkarat PT Donlim Technology Indonesia",
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
          imageAlt: "Pemanggang roti 4-slot baja nirkarat PT Donlim Technology Indonesia",
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
          imageAlt: "Ketel listrik gooseneck presisi seri breakfast appliances PT Donlim Technology Indonesia",
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
          imageAlt: "Blender kaca borosilikat torsi tinggi PT Donlim Technology Indonesia",
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
          imageAlt: "Pengolah makanan kompak multi-pisau PT Donlim Technology Indonesia",
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
          focus: "Jaringan distribusi regional memanfaatkan hub logistik Indonesia",
        },
      ],
      hseTitle: "Komitmen SDM & Harmoni Lintas Budaya",
      hseText:
        "Kami bermitra dengan universitas dan lembaga bahasa di Jawa Tengah untuk pelatihan komunikasi serta transfer keahlian teknis antara tim insinyur internasional dan 4.000+ karyawan lokal.",
      faqTitle: "Pertanyaan Umum Mitra & Kandidat",
      faqs: [
        {
          id: "faq-1",
          question: "Apakah PT Donlim Technology Indonesia menerima kerja sama OEM dan ODM?",
          answer:
            "Ya. Sebagai bagian dari ekosistem Donlim Group (Guangdong Xinbao Holdings), fasilitas kami di Demak melayani manufaktur OEM maupun kolaborasi ODM bersama tim R&D grup untuk merek internasional berorientasi ekspor.",
        },
        {
          id: "faq-2",
          question: "Di mana lokasi persis pabrik PT Donlim Technology Indonesia?",
          answer:
            "Pabrik kami berlokasi di Jatengland Industrial Park Sayung (JIPS), Blok G-2, Desa Batu, Kecamatan Karangtengah, Kabupaten Demak, Jawa Tengah — terhubung langsung dengan jalur logistik Semarang dan Pelabuhan Tanjung Emas.",
        },
        {
          id: "faq-3",
          question: "Bagaimana proses rekrutmen untuk tenaga kerja lokal di Demak dan sekitarnya?",
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
          { value: "b2b-oem", label: "Kemitraan Manufaktur OEM / ODM Global" },
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
        messageMin: "Mohon tuliskan pesan minimal 15 karakter agar tim kami dapat membantu.",
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
      complianceNote: "Jatengland Industrial Park Sayung (JIPS) Blok G-2 · Demak, Jawa Tengah",
    },
  },

  en: {
    skipToContent: "Skip to main content",
    nav: {
      items: [
        { label: "About", href: "#about" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Products", href: "#products" },
        { label: "Quality & Export", href: "#quality" },
        { label: "Partners & Careers", href: "#gateway" },
      ],
      cta: "Contact Us",
      mobileTitle: "PT Donlim Technology Indonesia",
      mobileSubtitle: "Company Profile Navigation",
    },
    hero: {
      carouselLabel: "PT Donlim Technology Indonesia main showcase",
      prevLabel: "Previous slide",
      nextLabel: "Next slide",
      pauseLabel: "Pause carousel autoplay",
      playLabel: "Play carousel autoplay",
      goToSlidePrefix: "Go to slide",
      slides: [
        {
          id: "precision-manufacturing",
          tagline: "World-Class Precision Home Appliance",
          taglineAccent: "Manufacturing",
          image: "/image/hero-factory.jpg",
          imageAlt:
            "Modern automated small kitchen appliance assembly lines inside PT Donlim Technology Indonesia",
        },
        {
          id: "global-export-hub",
          tagline: "From Central Java to",
          taglineAccent: "Global Markets",
          image: "/image/hero-export.jpg",
          imageAlt:
            "Modern manufacturing campus and export hub of PT Donlim Technology Indonesia in JIPS Demak",
        },
        {
          id: "engineered-living",
          tagline: "Engineered Innovation for",
          taglineAccent: "Modern Living",
          image: "/image/hero-craft.jpg",
          imageAlt:
            "Refined collection of precision modern kitchen appliances engineered for global brands",
        },
      ],
    },
    metrics: [
      {
        value: "4,000+",
        label: "Local Workforce",
        detail: "Supported by ~200 international engineering & management specialists",
        icon: "users",
      },
      {
        value: "30+ Yrs",
        label: "Donlim Group Heritage",
        detail: "Backed by Guangdong Xinbao Electrical Appliances Holdings",
        icon: "factory",
      },
      {
        value: "100%",
        label: "Export-Oriented Output",
        detail: "Supplying global distribution channels in North America & Europe",
        icon: "globe",
      },
      {
        value: "JIPS G-2",
        label: "Central Java Hub",
        detail: "Strategic Semarang–Demak industrial corridor with port access",
        icon: "mapPin",
      },
    ],
    about: {
      eyebrow: "ABOUT THE COMPANY",
      title: "Connecting Global Manufacturing Scale with Indonesian Industrial Talent",
      lead: "Established in 2023 in Demak, Central Java, PT Donlim Technology Indonesia serves as the strategic Southeast Asian manufacturing base of Guangdong Xinbao Electrical Appliances Holdings Co., Ltd. (Donlim Group).",
      paragraphs: [
        "We combine core precision components sourced from the group's established supply ecosystem — such as heating elements and electric motors — with local plastic injection molding, standardized high-volume assembly, comprehensive electrical safety testing, and export-ready packaging.",
        "Beyond production scale, PT Donlim Technology Indonesia invests in structured technical transfer, strict occupational health and safety (HSE) standards, and active partnerships with regional universities in Central Java to nurture cross-cultural leadership.",
      ],
      parentLabel: "GLOBAL PARENT GROUP",
      parentName: "Guangdong Xinbao Electrical Appliances Holdings Co., Ltd.",
      parentMeta:
        "One of the world's foremost ODM/OEM small home appliance manufacturers with over three decades of engineering leadership.",
      visionTitle: "Corporate Vision",
      visionText:
        "To become Southeast Asia's most dependable, precision-driven, and export-competitive small home appliance manufacturing hub.",
      missionTitle: "Operational Mission",
      missionText:
        "Delivering international-grade product quality, supply chain resilience, on-time global fulfillment, and sustainable career growth for local communities.",
      milestones: [
        {
          year: "1995+",
          title: "Donlim / Xinbao Foundation",
          detail: "Building global leadership in small kitchen appliance ODM/OEM.",
        },
        {
          year: "2023",
          title: "PT Donlim Technology Indonesia Founded",
          detail: "Strategic expansion into Jatengland Industrial Park Sayung, Demak.",
        },
        {
          year: "2024–Now",
          title: "Large-Scale Export Operations",
          detail: "Employing 4,000+ personnel shipping directly to North America & Europe.",
        },
      ],
      labCaption: "Electrical Safety & Endurance Verification — Demak QA/QC Lab",
      labImageAlt:
        "PT Donlim Technology Indonesia quality control engineers inspecting espresso machines and electric appliances inside a modern testing lab",
    },
    capabilities: {
      eyebrow: "MANUFACTURING CAPABILITIES",
      title: "Integrated Production from Precision Molding to Export Container",
      subtitle:
        "Every line inside our JIPS Block G-2 plant is engineered for repeatable high-volume output, tight mechanical tolerances, and full international safety compliance.",
      items: [
        {
          id: "molding",
          code: "CAP-01",
          title: "Precision Plastic Injection Molding",
          description:
            "High-speed automated injection molding lines with precision temperature control, export-certified food-contact and heat-resistant polymers, and dedicated in-house mold maintenance.",
          highlights: [
            "Export-compliant food-grade & flame-retardant resins",
            "Tight dimensional tolerances & repeatable finish quality",
            "Direct inline feed into sub-assembly stations",
          ],
          icon: "cpu",
          featured: true,
          image: "/image/molding-facility.jpg",
          imageAlt:
            "Automated precision plastic injection molding machines inside PT Donlim Technology Indonesia plant",
        },
        {
          id: "assembly",
          code: "CAP-02",
          title: "High-Volume Automated Assembly",
          description:
            "Modular assembly lines engineered for fast model changeovers across espresso machines, air fryers, ovens, toasters, and blenders.",
          highlights: [
            "Lean line balancing & standardized torque control",
            "Structured inline electrical sub-assembly verification",
          ],
          icon: "cog",
        },
        {
          id: "qa-testing",
          code: "CAP-03",
          title: "Safety & Endurance Testing Lab",
          description:
            "Comprehensive thermal endurance, dielectric strength (Hi-Pot), leakage current, and lifecycle stress tests aligned with North American and European standards.",
          highlights: [
            "100% inline electrical safety testing",
            "Long-cycle durability & thermal runaway validation",
          ],
          icon: "shieldCheck",
        },
        {
          id: "supply-chain",
          code: "CAP-04",
          title: "Global Supply Chain & Export Logistics",
          description:
            "Seamless integration of group-manufactured core motors and heating elements with retail-ready packaging and rapid corridor access to Tanjung Emas Port, Semarang.",
          highlights: [
            "Direct gateway to international maritime shipping",
            "Lot-level warehouse inventory & batch traceability",
          ],
          icon: "packageCheck",
        },
        {
          id: "odm-engineering",
          code: "CAP-05",
          title: "OEM / ODM Engineering Transfer",
          description:
            "Cross-border engineering teams supporting DFM optimization, regional voltage adaptations, and structured pilot production runs.",
          highlights: [
            "120V/60Hz (North America) & 220–240V/50Hz (Europe) ready",
            "Controlled pilot runs before mass production scale-up",
          ],
          icon: "wrench",
        },
      ],
    },
    products: {
      eyebrow: "OEM / ODM PRODUCT CATALOG",
      title: "Explore Our Product Catalog",
      subtitle:
        "Find the small home appliance platforms that match your OEM/ODM requirements. Use the category filters below or browse all available product groups.",
      viewProductLabel: "View product",
      showingLabel: "products available",
      modelsHeading: "Production Scope",
      specsHeading: "Manufacturing Parameters",
      marketsHeading: "Primary Export Markets",
      ctaLabel: "Request OEM Spec & Quotation",
      categories: [
        { id: "all", label: "All Products", icon: "grid" },
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
            "15–20 Bar pump espresso platforms engineered with precision thermoblock heating, commercial-style portafilters, and brushed stainless steel steam wands.",
          image: "/image/product-espresso.jpg",
          imageAlt: "Brushed stainless steel semi-automatic espresso machine",
          models: [
            "15–20 Bar Compact Pump Espresso",
            "Thermoblock Quick-Heat Espresso",
            "Integrated Pressure Gauge Series",
            "Steam Wand & Frothing Sub-Assembly",
          ],
          specs: [
            { label: "Heating System", value: "Thermoblock / Boiler" },
            { label: "Housing Finish", value: "Brushed SS & Heat-Safe ABS" },
            { label: "Voltage Options", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "Mandatory QA", value: "Hi-Pot, Pressure & Leak Test" },
          ],
          exportMarkets: ["North America", "Western Europe", "United Kingdom"],
        },
        {
          id: "drip-coffee-pro",
          categoryId: "coffee",
          subcategory: "Beverage Systems",
          code: "CAT-01 · BREWER",
          name: "Programmable Drip & Pod Brewer",
          summary:
            "Programmable drip brewers and single-serve capsule systems engineered for brew temperature precision and automated energy-saving shut-off.",
          image: "/image/product-espresso.jpg",
          imageAlt: "Programmable drip coffee maker and single-serve brewer",
          imagePosition: "object-right",
          models: [
            "12-Cup Programmable Drip Coffee Maker",
            "Single-Serve Capsule & Pod Brewer",
            "Thermal Carafe Brew Station",
            "Anti-Drip Valve & Keep-Warm Plate",
          ],
          specs: [
            { label: "Capacity", value: "Single-Serve to 1.8L" },
            { label: "Control Module", value: "Digital LCD / Mechanical" },
            { label: "Voltage Options", value: "120V/60Hz · 220–240V/50Hz" },
            { label: "Mandatory QA", value: "Brew Temp & Endurance QA" },
          ],
          exportMarkets: ["North America", "Europe", "Asia-Pacific"],
        },
        {
          id: "digital-airfryer",
          categoryId: "airfryer",
          subcategory: "Thermal Cooking",
          code: "CAT-02 · AIR FRYER",
          name: "Digital Rapid-Air Fryer Series",
          summary:
            "High-efficiency convection air fryers with capacitive LED controls, accurate NTC temperature sensing, and PFOA-free certified food-contact baskets.",
          image: "/image/product-airfryer.jpg",
          imageAlt: "Modern digital countertop air fryer series",
          imagePosition: "object-left",
          models: [
            "Single-Basket Digital Air Fryer (4L–6L)",
            "Dual-Zone Sync Air Fryer (8L–9L)",
            "Viewing-Window Smart Air Fryer",
            "Non-Stick Food-Contact Basket System",
          ],
          specs: [
            { label: "Power Range", value: "1,400W – 1,800W" },
            { label: "Thermal Control", value: "Digital PCB & NTC Sensor" },
            { label: "Material Safety", value: "Food-Contact Compliant" },
            { label: "Mandatory QA", value: "Thermal Cutoff & Airflow QA" },
          ],
          exportMarkets: ["North America", "European Union", "Australia"],
        },
        {
          id: "convection-oven",
          categoryId: "airfryer",
          subcategory: "Thermal Cooking",
          code: "CAT-02 · OVEN",
          name: "Countertop Air-Fryer Convection Oven",
          summary:
            "Multi-function stainless steel countertop ovens featuring uniform convection airflow, precise digital temperature controls, and tempered glass doors.",
          image: "/image/product-airfryer.jpg",
          imageAlt: "Stainless steel countertop convection oven",
          imagePosition: "object-right",
          models: [
            "Compact 18L–25L Countertop Oven",
            "Air-Fryer Toaster Oven Combo",
            "Multi-Preset Digital Baking Oven",
            "Dual-Element Quartz/SS Heating System",
          ],
          specs: [
            { label: "Power Range", value: "1,500W – 1,800W" },
            { label: "Cavity Material", value: "Aluminized / Stainless Steel" },
            { label: "Protection", value: "Double-Layer Thermal Safety" },
            { label: "Mandatory QA", value: "Surface Temp & Hi-Pot Test" },
          ],
          exportMarkets: ["North America", "European Union", "Global OEM"],
        },
        {
          id: "ss-toaster-4slice",
          categoryId: "toaster",
          subcategory: "Breakfast Appliances",
          code: "CAT-03 · TOASTER",
          name: "Brushed Stainless 4-Slice Toaster",
          summary:
            "2-slice and 4-slice designer toasters featuring self-centering bread carriages, 6-stage electronic browning control, and anti-jam auto shut-off.",
          image: "/image/product-toaster.jpg",
          imageAlt: "4-slice brushed stainless steel designer toaster",
          imagePosition: "object-left",
          models: [
            "2-Slice & 4-Slice Stainless Steel Toaster",
            "Wide-Slot Bagel & Defrost Control",
            "Dual Independent Control Panel",
            "Removable Stainless Crumb Tray",
          ],
          specs: [
            { label: "Surface Finish", value: "Brushed SS / Matte Coated" },
            { label: "Safety Features", value: "Auto Shut-Off & Anti-Jam" },
            { label: "Line Capacity", value: "High-Speed Continuous Line" },
            { label: "Mandatory QA", value: "Browning Uniformity & Safety" },
          ],
          exportMarkets: ["Europe", "North America", "United Kingdom"],
        },
        {
          id: "precision-kettle",
          categoryId: "toaster",
          subcategory: "Breakfast Appliances",
          code: "CAT-03 · KETTLE",
          name: "Precision Gooseneck Electric Kettle",
          summary:
            "Pour-over gooseneck and countertop breakfast kettles built with 360° cordless bases, boil-dry protection, and precision variable temperature control.",
          image: "/image/product-toaster.jpg",
          imageAlt: "Precision gooseneck electric kettle in matte slate finish",
          imagePosition: "object-right",
          models: [
            "Gooseneck Pour-Over Electric Kettle",
            "Variable-Temperature Digital Kettle",
            "Double-Wall Cool-Touch Kettle",
            "Coordinated Countertop Breakfast Set",
          ],
          specs: [
            { label: "Capacity", value: "0.8L – 1.7L Food-Grade SS" },
            { label: "Protection", value: "Boil-Dry & Auto Cut-Off" },
            { label: "Power Base", value: "360° Cordless Swivel Base" },
            { label: "Mandatory QA", value: "Lifecycle Boil & Leak Test" },
          ],
          exportMarkets: ["Europe", "United Kingdom", "Nordics", "North America"],
        },
        {
          id: "glass-blender",
          categoryId: "blender",
          subcategory: "Motorized Prep",
          code: "CAT-04 · BLENDER",
          name: "High-Torque Borosilicate Blender",
          summary:
            "High-torque countertop blenders featuring thick borosilicate glass pitchers, precision-balanced stainless blades, and dual safety interlocks.",
          image: "/image/product-blender.jpg",
          imageAlt: "High-torque borosilicate glass countertop blender",
          imagePosition: "object-left",
          models: [
            "1.5L Borosilicate Glass Countertop Blender",
            "Tritan BPA-Free High-Speed Blender",
            "Personal Smoothie & Nutrient Extractor",
            "Pulse & Variable-Speed Rotary Control",
          ],
          specs: [
            { label: "Motor Unit", value: "High-Torque Group Motor" },
            { label: "Vessel Material", value: "Borosilicate Glass / Tritan" },
            { label: "Protection", value: "Thermal Overload & Interlock" },
            { label: "Mandatory QA", value: "Noise, Vibration & Load Test" },
          ],
          exportMarkets: ["North America", "Europe", "Latin America"],
        },
        {
          id: "food-processor",
          categoryId: "blender",
          subcategory: "Motorized Prep",
          code: "CAT-04 · FOOD PREP",
          name: "Compact Multi-Blade Food Processor",
          summary:
            "Versatile motorized food processors engineered with vibration-damped housings, BPA-free work bowls, and multi-function stainless slicing discs.",
          image: "/image/product-blender.jpg",
          imageAlt: "Compact stainless steel multi-blade food processor",
          imagePosition: "object-right",
          models: [
            "Compact 1.2L–2.0L Food Processor",
            "Multi-Disc Slicing & Shredding Kit",
            "Safety Dual-Lock Lid Mechanism",
            "Variable-Speed Hand Mixer & Chopper",
          ],
          specs: [
            { label: "Motor Unit", value: "Precision Copper-Wound Motor" },
            { label: "Bowl Material", value: "Impact-Resistant BPA-Free" },
            { label: "Protection", value: "Dual Safety Interlock Switch" },
            { label: "Mandatory QA", value: "Endurance Torque & Safety QA" },
          ],
          exportMarkets: ["North America", "Europe", "Asia"],
        },
      ],
    },
    quality: {
      eyebrow: "QUALITY, HSE & EXPORT REACH",
      title: "Uncompromising Quality Discipline Across Every Production Stage",
      subtitle:
        "Export credibility is engineered through layered quality verification — from incoming materials to pre-shipment audits — reinforced by disciplined workplace safety (HSE).",
      pipelineTitle: "4-Stage Quality Verification Pipeline",
      stages: [
        {
          code: "01 · IQC",
          title: "Incoming Quality Control",
          description:
            "Dimensional, electrical, and resin material verification on every incoming lot of motors, heating elements, and raw polymers.",
        },
        {
          code: "02 · IPQC",
          title: "In-Process Quality Control",
          description:
            "Real-time molding parameter checks, sub-assembly verification, and critical-to-quality checkpoints along every assembly line.",
        },
        {
          code: "03 · FQC",
          title: "Final Quality & Safety Test",
          description:
            "100% end-of-line dielectric Hi-Pot, earth continuity, leakage current, cosmetic inspection, and functional performance testing.",
        },
        {
          code: "04 · OQC",
          title: "Outgoing & Drop-Test Audit",
          description:
            "International AQL sampling, packaging carton drop tests, and destination labeling checks prior to export container loading.",
        },
      ],
      standardsTitle: "Compliance Readiness & Governance",
      standards: [
        {
          code: "QMS",
          title: "Structured Quality Management",
          note: "Standardized operating procedures aligned with ISO 9001 principles and full batch traceability.",
        },
        {
          code: "SAFETY",
          title: "Global Regulatory Readiness",
          note: "Product safety testing aligned with UL/ETL (North America) and CE/GS/RoHS (Europe) requirements.",
        },
        {
          code: "HSE / EHS",
          title: "Health, Safety & Environment",
          note: "Dedicated HSE engineering supervision, ergonomic stations, and routine safety compliance audits.",
        },
        {
          code: "SOCIAL",
          title: "Ethical Workforce Governance",
          note: "Full compliance with Indonesian labor regulations and readiness for international buyer social audits.",
        },
      ],
      exportTitle: "Global Export Reach from Central Java",
      exportRegions: [
        {
          region: "North America",
          share: "Core Market",
          focus: "120V/60Hz appliance platforms serving US & Canadian retail brands",
        },
        {
          region: "Europe & UK",
          share: "Core Market",
          focus: "220–240V/50Hz compliance with RoHS & energy-efficiency standards",
        },
        {
          region: "Asia-Pacific & Regional",
          share: "Strategic Growth",
          focus: "Leveraging Indonesia's maritime corridor for regional fulfillment",
        },
      ],
      hseTitle: "Local Talent & Cross-Cultural Collaboration",
      hseText:
        "We collaborate with universities and language centers across Central Java to advance bilingual technical training and seamless collaboration between expatriate specialists and 4,000+ local employees.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          id: "faq-1",
          question: "Does PT Donlim Technology Indonesia support both OEM and ODM partnerships?",
          answer:
            "Yes. Integrated within the Donlim Group (Guangdong Xinbao Holdings) network, our Demak facility supports OEM volume manufacturing as well as ODM programs backed by group R&D engineering for export markets.",
        },
        {
          id: "faq-2",
          question: "Where is the PT Donlim Technology Indonesia manufacturing facility located?",
          answer:
            "Our plant is located at Jatengland Industrial Park Sayung (JIPS), Block G-2, Batu Village, Karangtengah District, Demak Regency, Central Java — with direct logistics access to Semarang and Tanjung Emas Port.",
        },
        {
          id: "faq-3",
          question: "How can local candidates apply for careers at the Demak facility?",
          answer:
            "We recruit regularly for Production Operators, QC Inspectors, Warehouse & Logistics, Technical/HSE Engineers, and Administrative/Bilingual roles through official HR channels and regional job centers at zero cost to applicants.",
        },
      ],
    },
    gateway: {
      eyebrow: "ENTERPRISE GATEWAY",
      title: "Select Your Pathway with PT Donlim Technology Indonesia",
      subtitle:
        "Dedicated entry points ensure global OEM buyers, regional industrial vendors, and prospective employees connect directly with the right department.",
      paths: [
        {
          id: "buyers",
          badge: "B2B & OEM BUYERS",
          title: "Global Brands & OEM Partners",
          description:
            "Explore Southeast Asian manufacturing diversification, production capacity allocations, factory compliance audits, and OEM/ODM quotations.",
          bullets: [
            "Schedule factory visits & compliance audits",
            "Request product portfolio specs & engineering samples",
            "Discuss MOQ, lead times, & FOB Semarang export terms",
          ],
          ctaLabel: "Contact B2B Sales Team",
          inquiryTopic: "b2b-oem",
          icon: "handshake",
        },
        {
          id: "suppliers",
          badge: "PROCUREMENT & VENDOR",
          title: "Local Suppliers & Logistics Vendors",
          description:
            "Connect with our procurement team for export carton packaging, auxiliary materials, customs brokerage, container freight, and plant utilities.",
          bullets: [
            "Submit vendor profile & quality certifications",
            "Export packaging & maritime logistics partnerships",
            "Industrial MRO & facility support services",
          ],
          ctaLabel: "Submit Vendor Inquiry",
          inquiryTopic: "supplier",
          icon: "truck",
        },
        {
          id: "careers",
          badge: "CAREERS · DEMAK",
          title: "Manufacturing Talent & Careers",
          description:
            "Build your career alongside 4,000+ manufacturing professionals in a structured, safety-first facility with international technical exposure.",
          bullets: [
            "Roles: Operators, QC Inspectors, Engineering & HSE",
            "Warehouse, Export Logistics, & Bilingual Staff",
            "Official, transparent, and zero-fee recruitment",
          ],
          ctaLabel: "Inquire HR & Careers",
          inquiryTopic: "careers",
          icon: "briefcase",
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT & FACILITY LOCATION",
      title: "Connect with PT Donlim Technology Indonesia",
      subtitle:
        "Submit a B2B manufacturing inquiry, vendor registration, or corporate request. Our team responds on standard business days.",
      plantTitle: "Manufacturing Facility & Operational Office",
      plantAddress: [
        "PT Donlim Technology Indonesia",
        "Jatengland Industrial Park Sayung (JIPS), Block G-2",
        "Batu Village, Karangtengah District, Demak Regency",
        "Central Java 59561, Indonesia",
      ],
      coordinates: "SEMARANG – DEMAK INDUSTRIAL CORRIDOR · JIPS BLOCK G-2",
      hoursLabel: "Office Operating Hours",
      hoursValue: "Monday – Friday, 08:00 – 17:00 WIB (UTC+7)",
      departmentsTitle: "Department Channels",
      departments: [
        {
          role: "B2B Sales & OEM Partnership",
          email: "business@donlim-indonesia.co.id",
          note: "Export quotations, product specs, & factory audit scheduling",
        },
        {
          role: "Procurement & Local Sourcing",
          email: "procurement@donlim-indonesia.co.id",
          note: "Packaging suppliers, auxiliary materials, & freight partners",
        },
        {
          role: "Human Resources & Recruitment",
          email: "recruitment@donlim-indonesia.co.id",
          note: "Official job inquiries & university partnerships",
        },
      ],
      mapButton: "Open JIPS Demak Location in Google Maps",
      formTitle: "Corporate Inquiry Form",
      formSubtitle:
        "Complete the form below so your inquiry is routed directly to the relevant department.",
      fields: {
        name: "Full Name",
        namePlaceholder: "e.g. Sarah Wijaya",
        company: "Company / Organization",
        companyPlaceholder: "Your company or institution name",
        email: "Business Email",
        emailPlaceholder: "name@company.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+62 812-xxxx-xxxx",
        topic: "Inquiry Category",
        topics: [
          { value: "b2b-oem", label: "Global OEM / ODM Manufacturing Partnership" },
          { value: "factory-audit", label: "Factory Visit & Compliance Audit" },
          { value: "supplier", label: "Local Supplier / Vendor Registration" },
          { value: "careers", label: "HR & Career Information" },
          { value: "general", label: "General Corporate Inquiry" },
        ],
        message: "Message & Project Details",
        messagePlaceholder:
          "Share your target product category, estimated volume, or inquiry details...",
        submit: "Submit Corporate Inquiry",
        submitting: "Submitting...",
      },
      validation: {
        nameRequired: "Please enter your full name.",
        emailInvalid: "Please provide a valid email address.",
        messageMin: "Please write at least 15 characters so our team can assist you properly.",
      },
      successTitle: "Inquiry Recorded Successfully",
      successMessage:
        "Thank you for contacting PT Donlim Technology Indonesia. Your inquiry summary is ready for follow-up by the designated department on the next business day.",
      successReset: "Send Another Inquiry",
    },
    footer: {
      tagline:
        "Export-oriented small home appliance precision manufacturing hub in Central Java — delivering global standards powered by Indonesian talent.",
      groupNote:
        "A subsidiary of Guangdong Xinbao Electrical Appliances Holdings Co., Ltd. (Donlim Group).",
      companyColTitle: "Company",
      capabilitiesColTitle: "Lines & Capabilities",
      locationColTitle: "Plant Location",
      capabilitiesLinks: [
        "Plastic Injection Molding",
        "Automated Assembly Lines",
        "Coffee & Espresso Systems",
        "Air Fryers & Kitchen Ovens",
        "QA/QC & Safety Testing Lab",
      ],
      copyright: "PT Donlim Technology Indonesia. All rights reserved.",
      complianceNote: "Jatengland Industrial Park Sayung (JIPS) Block G-2 · Demak, Central Java",
    },
  },
};
