import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Aska Mandiri - Spesialis Fabrikasi & Pemasangan Aluminium & Kaca Arsitektural",
  description:
    "Kontraktor spesialis fabrikasi aluminium arsitektural, kaca tempered/laminated, curtain wall gedung komersial, partisi kantor, serta kusen pintu dan jendela presisi tinggi di Indonesia.",
  keywords: [
    "aluminium arsitektural",
    "curtain wall indonesia",
    "pintu sliding aluminium",
    "kaca tempered 12mm",
    "kaca laminated",
    "kusen ykk ap",
    "kusen alexindo",
    "partisi kantor frameless",
    "kanopi kaca spider",
    "cv aska mandiri",
  ],
  authors: [{ name: "CV Aska Mandiri" }],
  openGraph: {
    title: "CV Aska Mandiri - Spesialis Fabrikasi & Pemasangan Aluminium & Kaca",
    description:
      "Standar fabrikasi presisi tinggi dengan toleransi potongan milimeter, material bersertifikat SNI & ASTM untuk proyek komersial dan residensial.",
    siteName: "CV Aska Mandiri",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col antialiased selection:bg-[#ffdcc3] selection:text-[#2f1500]">
        <Navbar />
        <main className="w-full pt-[120px] bg-[#f7f9fb] min-h-[calc(100vh-120px)] flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
