"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Shield,
  Star,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Download,
  FileCheck,
  Award,
  Sparkles,
  Maximize2
} from "lucide-react";

interface ProjectCardData {
  id: string;
  category: string;
  tag: string;
  durationOrSpan: string;
  title: string;
  desc: string;
  specs: {
    label: string;
    value: string;
  }[];
  statBottom: string;
  image: string;
}

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: ProjectCardData[] = [
    {
      id: "canggu",
      category: "residensial",
      tag: "Residensial Mewah • Bali",
      durationOrSpan: "45 Hari Kerja",
      title: "Villa Canggu Modern Signature Retreat",
      desc: "Sistem pintu geser aluminium 3 sisi berprofil ultra-slim finish hitam doff (powder coating Jotun Durasol) dengan kaca tempered panoramic menghadap kolam renang.",
      specs: [
        { label: "Sistem Kusen:", value: "Minimalist Slim Sliding 3 Track" },
        { label: "Ketebalan Kaca:", value: "10mm Clear Tempered Asahimas" },
        { label: "Aksesoris:", value: "Heavy Duty Roller (Kapasitas 250kg)" },
      ],
      statBottom: "Nilai Reduksi Suara: STC 32",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOlFcc-U_D7-DAbhx2WhnXf9QkYhDdrVF9FoF8FwKloXxomAe0ppksEDCo4GMvGUeA3Ftr-occM7X3K-Ck_9skh0xzFfYL6O8QUKyy0nb_Y0edmi-lQOnJakfSz2JFGoZLMo5Z4W9BukvThMd158Pq7jcH9whr3ATd2QycrcHFwa9PdJk-MY6z1v28D6vujnXOTNGHKJf5_wNOMQ55sBTaHJdo7B9xpja6IEiXOQLwM1X1Boo4c0vf",
    },
    {
      id: "bsd-car",
      category: "showroom",
      tag: "Showroom & Kantor • Tangerang",
      durationOrSpan: "Bentang 6.5 Meter",
      title: "Showroom Mobil Premium BSD City",
      desc: "Dinding kaca frameless bentang raksasa jumbo-size dengan pintu pivot oversize bersistem engsel tanam Dorma BTS untuk mobilitas kendaraan pameran.",
      specs: [
        { label: "Dinding Kaca:", value: "12mm Clear Tempered Frameless" },
        { label: "Pintu Utama:", value: "Pivot Aluminium 3.2 x 1.6 Meter" },
        { label: "Sistem Engsel:", value: "Floor Spring Dorma BTS-80 Heavy" },
      ],
      statBottom: "Ketahanan Tekanan: 120 kg/m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6lrJu4VClavy5c2PrpEQyjyQd3DFfJFNSkSe5tNnVrhHFLrXqBHJt14RT-PWq9DYBCzhGFI2pFleJVxqNfv-Lc-5K0XnP8ubYgJGhaInBjYy8G1XRLmMWGMNAfdr0Lv3AwUwWtIzy7_5g6I0gNF1YcKOFYJZ1fuPNIj7AQML7ZAF4_Vsgpa-QaGx_OJ9IPr2sZaUkjJV2S1qNQcpMdg2PHKxuFQ5RUHPMkZfVOQmrvJyTa9PbFREM",
    },
    {
      id: "senopati",
      category: "publik-kafe",
      tag: "Kafe & Restoran • Jakarta",
      durationOrSpan: "Gaya Industrial Presisi",
      title: "Artisan Coffee House Senopati",
      desc: "Partisi kaca motif kotak kisi-kisi arsitektural aluminium dan kanopi kaca laminated transparan untuk proteksi cuaca area outdoor dining.",
      specs: [
        { label: "Profil Kisi:", value: "Aluminium Hollow 4x8 Custom Black" },
        { label: "Kanopi Patio:", value: "5+5 mm Clear Laminated PVB 0.76" },
        { label: "Kaca Partisi:", value: "6mm Fluted Glass + Clear Ribbed" },
      ],
      statBottom: "Peredam UV Kanopi: 99% PVB Shield",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKAKe94Tl3zWe9zJ-tUtuNOAYoXgK_SrBtZy16reNGMIfuB8Ko-ed_Sf06zKsxBd53GkQE_Eq8s5CLE8lCXEWfch4jrzEupzcn2nYeC_RHUpNukwNQuysHspYPGBwzfecs16wlsBKJ4Ts9BVD63I5fjbApkHY3X5kmidYisqLw1M1uHTR4SFX7SzBYGB9oNIIs_wu-hHJsMNA--CfqPW8G2jb2lvt_D8yrhx6oViBjGrFx6AHjX_2X",
    },
    {
      id: "pondok-indah",
      category: "residensial",
      tag: "Residensial Mewah • Jakarta",
      durationOrSpan: "Kedap Suara Tinggi",
      title: "Mansion Pondok Indah Bukit Hijau",
      desc: "Jendela casement kedap kebisingan jalan raya menggunakan double glazing acoustic glass, serta instalasi railing kaca tempered balkon tanpa tiang (frameless glass balustrade).",
      specs: [
        { label: "Spesifikasi Kaca:", value: "Double Glazing 6+12A+6 Acoustic" },
        { label: "Railing Balkon:", value: "12mm Tempered U-Channel Base" },
        { label: "Sistem Penguncian:", value: "Multipoint Lock Savio Italy" },
      ],
      statBottom: "Reduksi Kebisingan: -38 Decibel",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu2y7Z51EFwWVQ5X831WP-UQw1kT-M03VTDwYVbGG8nRRXk6j2y5hWejabVkLkgMz-tp6dBwOCOdiGAxx_y0-rzjtmLH-aeva6mnewSvZHg5wTzP5hbPwo_0AG9ORhBjxwmgwe4E7IPmJlZ3Xc-CPWnw9S3QOD7LSFZQOFCPYG7UW0p_IezhiOIZnEUN8U5hQxfyy89iMZyW-PULvmtz7YWAfSjjqhXwga0FE23VBj8sJezD7VxF-F",
    },
    {
      id: "siloam",
      category: "komersial",
      tag: "Komersial & Medis • Banten",
      durationOrSpan: "Standar Higienis Kemenkes",
      title: "Klinik Spesialis Siloam Aesthetic Alam Sutera",
      desc: "Pintu hermetic kedap udara otomatis untuk ruang tindakan dan partisi kaca laminasi transparan dengan insulasi termal serta gasket antibakteri.",
      specs: [
        { label: "Pintu Operasi:", value: "Hermetic Auto Sliding Airlock" },
        { label: "Partisi Ruang:", value: "Kaca Laminated 8.38mm Anti-bakteri" },
        { label: "Material Rangka:", value: "Aluminium Anodized Silver Matt 1.8mm" },
      ],
      statBottom: "Sertifikasi: Hermetic Class 4 Air Leakage",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD5y_r5POGISqgCg2ZPgbfO-c-9jnRyLIWDE5fikGPL5p6m-M1_bKrfN5AmsG9E4nNmfBqncnLDLT1J57De46VDpWlyEBaCOHRHM-JzSx_g0NHHSGEW3OgbTXFemhfRWLPNIkyf8UUlMaz5c9TRbhZ0TxrOuR-ZC_SsA6CLp2p0TtTt-pMjtrOcgb_GNVfEacEETFWPAAO3RF7y2X_98jxR1zPPMk8sTX64aMpz9PG0Ybo0AjaqUQy",
    },
    {
      id: "surabaya",
      category: "showroom",
      tag: "Gedung Kantor • Surabaya",
      durationOrSpan: "Curtain Wall + ACP",
      title: "Graha Sentosa Niaga Surabaya Barat",
      desc: "Kombinasi cladding ACP Seven PVDF dan curtain wall kaca stopsol dark blue untuk perlindungan optimal radiasi panas terik matahari di Surabaya.",
      specs: [
        { label: "Cladding:", value: "ACP 4mm PVDF Coating Garansi 15 Thn" },
        { label: "Sistem Kaca:", value: "Curtain Wall Semi Unitized 8mm" },
        { label: "Rangka Sub-frame:", value: "Besi Hollow Galvanis 40x80 x 2.0mm" },
      ],
      statBottom: "Ketahanan Korosi: Standar C4 Maritim",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbzRhQRQwTiLDSNCIUBERL3ciFXf15xqBi5-Hv8Q9LJeAsuuLKPV38b7UJ0NhJMOgZnA-AFNIRr_8gaWEaIF4584-cNmm67WAYHN_yRKQEJdSijGqDhonMTgdi7zzKAzF7vv-vdKzjmd5HtobpN-D1RZKi68eoCahQFkDTcuWonn7oTPG4C4Op2KyIM3uxWkfFdIWPvQu1wWVEqN6CPAhvAbSqsZr8tXsMp0WtxzD5ERLMjUi_PgWX",
    },
  ];

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Top Editorial Header & Project Filtering */}
      <section className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#505f76] mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c76c00]"></span>
              <span>Dokumentasi Fabrikasi & Fasad Nyata</span>
              <span className="text-[#c6c6cd]">/</span>
              <span>SNI 03-3453-1994</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191c1e] tracking-tight mb-2">
              Rekam Jejak Proyek & Hasil Pemasangan Presisi
            </h1>
            <p className="text-sm sm:text-base text-[#45464d] leading-relaxed">
              Eksplorasi portofolio instalasi sistem aluminium arsitektural, fasad curtain wall, kaca tempered struktural, dan partisi akustik pada ragam sektor di Indonesia.
            </p>
          </div>

          {/* Quick Stats Sparklines */}
          <div className="flex items-center gap-6 bg-[#f2f4f6] p-4 rounded-xl border border-[#e0e3e5] shadow-xs">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase text-[#505f76]">Total Pemasangan</span>
              <span className="text-xl font-bold text-[#191c1e]">
                148.500+ <span className="text-xs font-normal text-[#505f76]">m²</span>
              </span>
            </div>
            <div className="w-px h-10 bg-[#c6c6cd]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase text-[#505f76]">Tingkat Ketepatan</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-[#c76c00]">99.8%</span>
                <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {[
            { id: "all", label: "Semua Proyek (64)" },
            { id: "komersial", label: "Komersial & Gedung" },
            { id: "residensial", label: "Residensial Mewah" },
            { id: "showroom", label: "Perkantoran & Showroom" },
            { id: "publik-kafe", label: "Fasilitas Publik & Kafe" },
          ].map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => setActiveFilter(pill.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === pill.id
                  ? "bg-black text-white shadow-sm"
                  : "bg-[#e0e3e5] text-[#191c1e] hover:bg-[#d8dadc]"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Case Study Spotlight (Menara Mandiri Jaya) */}
      <section className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 mb-16">
        <div className="bg-[#131b2e] text-[#eff1f3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
          {/* Top Bar Indicator */}
          <div className="bg-black px-6 py-2.5 flex flex-wrap items-center justify-between text-[#eff1f3] gap-2 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffdcc3] animate-pulse"></span>
              <span>Studi Kasus Utama • Flagship Commercial Glazing</span>
            </div>
            <div className="flex items-center gap-4 text-[#bec6e0]">
              <span>Selesai: Q3 2024</span>
              <span>•</span>
              <span>Inspeksi: Lulus Uji Beban Angin 150 km/jam</span>
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Column Left: High-detail specs and context */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#ffdcc3] text-xs font-bold mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Kawasan Bisnis TB Simatupang, Jakarta Selatan</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                    Pemasangan Curtain Wall & Facade Gedung Perkantoran Menara Mandiri Jaya 5 Lantai
                  </h2>

                  <p className="text-sm text-[#bec6e0] mb-6 leading-relaxed">
                    Struktur fasad modern yang memadukan profil aluminium ekstrusi heavy-duty dengan kaca solar control untuk efisiensi termal bangunan hijau (*green building*). Menghadirkan bentang vertikal mulus bebas kebocoran air di bawah tekanan dinamik.
                  </p>

                  {/* Technical Scope Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] font-bold text-[#ffdcc3] uppercase">Luas Curtain Wall</div>
                      <div className="text-lg font-bold text-white mt-0.5">1.200 m²</div>
                      <div className="text-[10px] text-[#bec6e0]">Sistem Stick 4-Side SG</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] font-bold text-[#ffdcc3] uppercase">Tipe Kaca</div>
                      <div className="text-lg font-bold text-white mt-0.5">8mm Stopsol</div>
                      <div className="text-[10px] text-[#bec6e0]">Blue Green Tempered</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] font-bold text-[#ffdcc3] uppercase">Akses Masuk</div>
                      <div className="text-lg font-bold text-white mt-0.5">Dormakaba</div>
                      <div className="text-[10px] text-[#bec6e0]">Sliding Sensor Otomatis</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-[10px] font-bold text-[#ffdcc3] uppercase">Kanopi Drop-off</div>
                      <div className="text-lg font-bold text-white mt-0.5">12+12 mm</div>
                      <div className="text-[10px] text-[#bec6e0]">Spider Fitting SUS316</div>
                    </div>
                  </div>

                  {/* Challenges & Breakthroughs */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
                    <h3 className="text-xs font-bold text-white flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-[#ffdcc3]" />
                      <span>Parameter Kinerja & Uji Lapangan:</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#bec6e0]">
                      <div>
                        <strong>Durasi Ketat:</strong> Selesai dalam 45 hari kalender tanpa mengganggu aktivitas tenant lantai dasar.
                      </div>
                      <div>
                        <strong>Zero-Leak Test:</strong> Uji semprot air bertekanan ASTM E1105 terverifikasi 100% kedap tanpa rembesan.
                      </div>
                      <div>
                        <strong>Tantangan Ketinggian:</strong> Menggunakan perancah gantung (*hanging gondola*) bersertifikasi K3.
                      </div>
                      <div>
                        <strong>Toleransi Sambungan:</strong> Akurasi alignment mullion dan transom ≤ 1.5mm di seluruh fasad.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#191c1e] text-xs font-bold hover:bg-[#e0e3e5] transition-colors shadow-sm"
                  >
                    <span>Konsultasikan Proyek Serupa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 text-white text-xs">
                    <FileCheck className="w-4 h-4 text-[#ffdcc3]" />
                    <span>As-Built Drawing & BAST Lengkap Tersedia</span>
                  </div>
                </div>
              </div>

              {/* Column Right: Visual Comparison & Engineering Details */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-lg border border-white/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Menara Mandiri Jaya 5-story commercial office building"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ve-Nq6IP5bsn5sfKCXgKX-UGCJ-xEGBXkikqksX_sBRWyZlwxLdCBU34DX4V4CmNt8FGR9K8EmiOJRR5PPYgVIohGSpnaUkhCwWN9fr3hH64JslfBR-8-ipaMCbmEGprI7YZWcG0lL8M2aH7ToI3qd2xhLIzSAxcBY04P9rZypC_or6m-UyMBlclpij636VKSV0I_BjNN1MBgFzpetGiXYREGNogUXl8YuZyfN7W5dl-JemsUjTp"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/85 backdrop-blur-md px-3 py-1 rounded text-white text-[10px] font-bold uppercase">
                    Hasil Akhir Fasad Utama (South Elevation)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-36 rounded-xl overflow-hidden bg-[#e0e3e5] shadow-xs">
                    <img
                      className="w-full h-full object-cover"
                      alt="Detail Sealant Kaca & Weather-Seal"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHTqzfnwhQpsgIgsuGolTZ5qUn0OB5_3ZWVTgM32TDL7xCtbTooADufTyUGqfrINv1FD1bZNZZmyXRm3Sftp7hqJ9J6Eis0_kD_Kl4vqZm9Ad5hIRNgY0H7PycD9VnEreIphPh5VfW9kCWwq2ttnFDVBKRwA_KDvXDTaT6SipF4gHPzzSrphrS4O6aFWFirIGWIpYHTJcrMuXPUfJ0iba4QaCmkFWXVp7kcCq5vwzS4pXFwNttpPa8"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 px-2 py-1 text-center text-[10px] font-bold text-white">
                      Detail Sealant Kaca
                    </div>
                  </div>
                  <div className="relative h-36 rounded-xl overflow-hidden bg-[#e0e3e5] shadow-xs">
                    <img
                      className="w-full h-full object-cover"
                      alt="Kanopi Kaca Spider SUS316 Drop-off"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCURlgkEbeiGa-DdIdcuA9LSvZMNAmqD1X23xpXJpCM8IAQ_PcsKfm3duD_yEINc-mVKW9v96Q0R4Kk3ORyaPJh5Ugu3gxc7Hgobo73J1jCzObdrdUk0YPaApYE0buJI1UwjOjF481M4s8xoj0yAYPwI-nYjoWExtYHlbm4jamTCr_FUBc0aR05Du8V1UPsO4D6861rbd945qYe1DtU3IrKpo-_4aOtD8CtX6CMW4zU-4V1uypMWVK4"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 px-2 py-1 text-center text-[10px] font-bold text-white">
                      Kanopi Spider SUS316
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl flex items-center justify-between text-xs border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffdcc3] text-[20px]">architecture</span>
                    <span className="text-white">Profil Mullion: 50 x 150 mm (Dark Gray)</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#ffdcc3] uppercase">Toleransi 0.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Portfolio Grid */}
      <section className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-bold text-[#c76c00] uppercase tracking-wider mb-1">
              Galeri Proyek Terpilih
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">
              Keahlian di Berbagai Tipologi Bangunan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#45464d] max-w-md">
            Setiap karya dirancang dengan perhitungan modulus elastisitas profil, reduksi kebisingan (*Sound Transmission Class*), dan estetika kontemporer tanpa kompromi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#e0e3e5]"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                  {item.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#191c1e] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                  {item.durationOrSpan}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-lg font-bold text-[#191c1e] mb-1.5 hover:text-[#c76c00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#45464d] mb-4 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="bg-[#f2f4f6] p-3 rounded-xl mb-4 space-y-1.5 text-xs text-[#45464d]">
                    {item.specs.map((s, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-[#505f76]">{s.label}</span>
                        <span className="font-semibold text-[#191c1e]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#e0e3e5]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#505f76]">
                    {item.statBottom}
                  </span>
                  <Link
                    href="/kontak"
                    className="p-1 rounded-full text-[#505f76] hover:text-[#c76c00] hover:bg-[#f2f4f6] transition-colors"
                    title="Konsultasi Proyek Ini"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Verification & Reference Quotes (Client Testimonials) */}
      <section className="w-full bg-[#f2f4f6] py-16 px-5 lg:px-10 border-y border-[#e0e3e5] mb-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] font-bold text-[#c76c00] uppercase tracking-wider mb-1">
                Integritas Profesional
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">
                Kredensial & Surat Rekomendasi Resmi
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-[#c76c00] text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dokumen Berita Acara Serah Terima (BAST) 100% On-Time</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#c76c00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] italic mb-6 leading-relaxed">
                  “Fabrikasi profil aluminium dan curtain wall dari CV Azka Mandiri pada proyek perkantoran kami menunjukkan kepatuhan toleransi milimeter yang sangat ketat. Uji semprot air ASTM nihil rembesan sejak tes pertama.”
                </p>
              </div>
              <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  HW
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#191c1e]">Ir. Hendra Wijaya, IAI</span>
                  <span className="text-[11px] text-[#505f76]">Project Director • PT Duta Bangun Persada</span>
                  <span className="text-[10px] text-[#76777d]">Ref. No: 142/DIR-DBP/X/2024</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#c76c00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] italic mb-6 leading-relaxed">
                  “Untuk proyek residensial premium di Pondok Indah, detail sudut sambungan kusen mitre-joint 45 derajat sangat rapi dan mulus. Pintu sliding 3 panel bergerak halus meski menopang kaca tebal 10mm.”
                </p>
              </div>
              <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  SA
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#191c1e]">Satria Adhitama, ST</span>
                  <span className="text-[11px] text-[#505f76]">Principal Architect • Atelier Mahardika</span>
                  <span className="text-[10px] text-[#76777d]">Ref. No: 088/AM-RES/VIII/2024</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#c76c00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#45464d] italic mb-6 leading-relaxed">
                  “Kecepatan kerja workshop dalam memotong dan merakit komponen sebelum dikirim ke site BSD mempercepat schedule serah terima gedung kami hingga 12 hari lebih awal dari target master timeline.”
                </p>
              </div>
              <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  BW
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#191c1e]">Bambang Waskito</span>
                  <span className="text-[11px] text-[#505f76]">General Superintendent • Megatama Kontraktor</span>
                  <span className="text-[10px] text-[#76777d]">Ref. No: MK/PRJ-BSD/IX/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Footprint & Nationwide Distribution */}
      <section className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 mb-16">
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xs border border-[#e0e3e5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div>
                <div className="text-[11px] font-bold text-[#c76c00] uppercase tracking-wider mb-1">
                  Jangkauan Fabrikasi & Pemasangan
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight mb-2">
                  Peta Sebaran Proyek di Indonesia
                </h2>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Dengan basis workshop utama di Jabodetabek, tim teknis dan aplikator CV Azka Mandiri telah menyelesaikan instalasi fasad dan aluminium di berbagai kota strategis nusantara.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
                  <div className="text-sm font-bold text-[#191c1e]">Jabodetabek & Banten</div>
                  <div className="text-xs font-bold text-[#c76c00]">68% Portofolio</div>
                  <div className="text-[11px] text-[#505f76] mt-0.5">Basis workshop utama</div>
                </div>
                <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
                  <div className="text-sm font-bold text-[#191c1e]">Jawa Barat & Bandung</div>
                  <div className="text-xs font-bold text-[#c76c00]">14% Portofolio</div>
                  <div className="text-[11px] text-[#505f76] mt-0.5">Residensial & hotel</div>
                </div>
                <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
                  <div className="text-sm font-bold text-[#191c1e]">Surabaya & Jawa Timur</div>
                  <div className="text-xs font-bold text-[#c76c00]">10% Portofolio</div>
                  <div className="text-[11px] text-[#505f76] mt-0.5">Gedung komersial ruko</div>
                </div>
                <div className="bg-[#f7f9fb] p-3 rounded-xl border border-[#e0e3e5]">
                  <div className="text-sm font-bold text-[#191c1e]">Bali & Luar Jawa</div>
                  <div className="text-xs font-bold text-[#c76c00]">8% Portofolio</div>
                  <div className="text-[11px] text-[#505f76] mt-0.5">Resort mewah & villa</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#f7f9fb] p-6 rounded-2xl border border-[#e0e3e5] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-[#e0e3e5]">
                <span className="text-xs font-bold text-[#191c1e] uppercase tracking-wider">
                  Kesiapan Tim Lapangan Antar-Pulau
                </span>
                <span className="text-[11px] font-bold text-[#c76c00] bg-[#ffdcc3]/50 px-2.5 py-0.5 rounded">
                  Mobilisasi Cepat
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed my-4">
                Kami menyediakan sistem pengemasan peti kayu (*wooden crate packing*) berstandar ekspedisi kargo laut dan darat, menjamin kaca tempered dan profil coating tiba di lokasi proyek tanpa goresan maupun benturan.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-[#505f76]">
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Jakarta</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Bogor</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Depok</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Tangerang</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Bekasi</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Bandung</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Semarang</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Surabaya</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Denpasar</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Medan</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-[#e0e3e5]">Balikpapan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
