import type { Metadata } from "next";
import { Geist_Mono, Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donlim-indonesia.co.id"),
  title: {
    default:
      "PT Donlim Technology Indonesia | Global Precision Home Appliance Manufacturing",
    template: "%s | PT Donlim Technology Indonesia",
  },
  description:
    "PT Donlim Technology Indonesia — fasilitas manufaktur peralatan rumah tangga & dapur kelas dunia milik Donlim Group (Guangdong Xinbao Holdings) di Jatengland Industrial Park Sayung (JIPS), Demak, Jawa Tengah.",
  keywords: [
    "PT Donlim Technology Indonesia",
    "Donlim Group",
    "Guangdong Xinbao Electrical Appliances",
    "Manufaktur Peralatan Rumah Tangga Indonesia",
    "Jatengland Industrial Park Sayung",
    "JIPS Demak",
    "OEM ODM Home Appliances",
    "Export Manufacturing Central Java",
  ],
  icons: {
    icon: [
      { url: "/image/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/image/favicon.svg",
  },
  openGraph: {
    title:
      "PT Donlim Technology Indonesia | Precision Home Appliance Manufacturing",
    description:
      "Basis manufaktur strategis Asia Tenggara dari Donlim Group di JIPS Demak, Jawa Tengah — memproduksi peralatan dapur ekspor untuk Amerika Utara & Eropa.",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: "PT Donlim Technology Indonesia",
    images: [
      {
        url: "/image/hero-factory.jpg",
        width: 1408,
        height: 768,
        alt: "Fasilitas Manufaktur PT Donlim Technology Indonesia",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${lexend.variable} ${sourceSans3.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
