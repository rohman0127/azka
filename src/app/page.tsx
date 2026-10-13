"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Shield,
  Award,
  CheckCircle,
  Building,
  Wrench,
  Sparkles,
  Phone,
  Calendar,
  Layers,
  ChevronRight,
  Star,
  Compass,
  FileCheck2,
  HardHat,
  Ruler,
  Maximize2
} from "lucide-react";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const showcaseProjects = [
    {
      id: 1,
      category: "kantor",
      tag: "Gedung Kantor",
      title: "Wisma Graha Kencana",
      desc: "Curtain Wall Glass 8mm Stopsol & ACP Seven Cladding eksterior gedung.",
      loc: "TB Simatupang, Jaksel",
      size: "2,800 m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCigTZnxdDV19mfCOwkpq3gZXv2bVfI-WGLYGM7lZpGGJJ5hLBSsGi1IWuXau0yRScrKLt9scYlwO-k4UTkDMkJ1Sq6ZWC-VeIDBwv3l1rLK1UDD_OUnli06_ctouwCdzQ7-kmq5BKlJvlNRENGiG1hZrxISZ2sUa29iklrTFzOyeMbDq72h_XLH_1suHPgMZ8hfk8eYUeQ1zo-Hjcre4a8932c-_bcCmbvaXmuuoe-cQ_ZHljwzwo5",
    },
    {
      id: 2,
      category: "residensial",
      tag: "Residensial Mewah",
      title: "Villa Sanctuary Sentul",
      desc: "Kusen YKK AP seri Nexsta, Pintu Sliding 4 Daun & Railing Kaca Tempered 12mm.",
      loc: "Sentul City, Bogor",
      size: "Private Unit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NOz9x-F__TJKTWK-ovr2s4FhYBsXvD3nWhmhD_iO-8_a7njmWCtWBLmCHFF11iWun-WWORbvbOKe0ldsE0ah0X05tmdbLQ_De1lQet4WqiNEFa8SdEGO6TUEujwqTkhCwU4yH0VoFgfwniJxu0dZ0eUrjr70lx-jAC6gZthV6TEYD5jdhLhn64ZYQhElfAWEw1a1CIhMaFQJ83OVygZzs06mJ6gYfnqjmq_3A9FlO9l_XMjXlv8n",
    },
    {
      id: 3,
      category: "showroom",
      tag: "Showroom Komersial",
      title: "Showroom Otomotif Premium",
      desc: "Fasad kaca spider fitting 12mm extra clear & pintu otomatis sensor dorma.",
      loc: "BSD City, Tangerang",
      size: "1,400 m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1btum_YeZKHTkzDmVnqCKItpq3SZwaksDpdh7a_16ESn7tlzMPXJ5xaxUuzUHH0wVgnd1IilJYfg353COHnbaZtVb9CfjIjTuC4waWLpoqxH8LdQ24FQt1yChQxWGbuCxlUhyfr1WQLu1aye9V5bO28AFP9dZyg-k0cOsi37IE4xpyhtV1TEfMyXRsmrkI12SzMBPr-0l_TQb48QDOJ_kaRZhT_6sm45dZv7Uk-2JiG9PKIA7auYY",
    },
    {
      id: 4,
      category: "showroom",
      tag: "Gedung Pusat Ritel",
      title: "Central Mall & Plaza Lobby",
      desc: "Kanopi kaca spider laminated 6+6mm dengan struktur pipa baja stainless 304.",
      loc: "Kelapa Gading, Jakarta",
      size: "320 m² Canopy",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvPH9G75h17OirB_A44YO16A_S4boTBi88seKMMiTzPMlwHl-204agp2AZFmrkKZY2pVmNRDac9qwQvr5F2wuuGARcArGg9zfJbvGZ2Pw2FKePnCMC14sV9E4TQlgemxmx9VrC5UFYLmUXvz3m7Xb9VkTkLCfbu-pv35xwd6IZBzRkmzIjef8WUHmUSWglo3zrGbbcAA5-K-CpLwNojZqe8yXz0Uf4YO06mHRhvS3hB9z4mgkMCWaC",
    },
  ];

  const filteredProjects = selectedFilter === "all"
    ? showcaseProjects
    : showcaseProjects.filter((p) => p.category === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION WITH PRECISION ARCHITECTURAL OVERLAY */}
      <section className="relative w-full overflow-hidden bg-[#131b2e] text-[#eff1f3]">
        {/* Subtle Architectural Grid Blueprint Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          }}
        />

        <div className="relative max-w-[1320px] mx-auto px-5 lg:px-10 pt-16 pb-24 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 flex flex-col gap-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0e3e5]/10 text-[#ffdcc3] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#c76c00] animate-pulse"></span>
                <span className="font-bold text-[11px] uppercase tracking-widest text-[#ffdcc3]">
                  Standard Fabrikasi Presisi Tinggi • SNI & ASTM
                </span>
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[56px] text-[#eff1f3] tracking-tight leading-[1.08]">
                Solusi Presisi <span className="text-[#ffb77d]">Aluminium & Kaca</span> Arsitektural Bangunan Modern
              </h1>

              <p className="text-base sm:text-lg text-[#bec6e0] max-w-2xl font-light leading-relaxed">
                Melayani fabrikasi kusen aluminium sistem premium, curtain wall gedung komersial, partisi kaca tempered frameless, kanopi spider fitting, dan pintu sliding folding kedap suara dengan jaminan ketelitian milimeter.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#c76c00] text-white font-bold text-base hover:bg-[#b05f00] shadow-md transition-all hover:translate-x-0.5"
                >
                  <span>Minta Penawaran Proyek</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#e0e3e5]/20 text-[#eff1f3] font-semibold text-sm hover:bg-[#e0e3e5]/30 transition-all"
                >
                  <Building className="w-4 h-4" />
                  <span>Lihat Portofolio</span>
                </Link>
              </div>

              {/* Quick Certified Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[#bec6e0]/90 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#ffdcc3]" /> Alexindo & YKK AP Official
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#ffdcc3]" /> Asahimas Safety Glass Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#ffdcc3]" /> Survey & 3D Shop Drawing
                </span>
              </div>
            </div>

            {/* Right: Showcase Visual Layering */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-[#e0e3e5] border border-white/10 group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Architectural modern office tower with reflective double glazing curtain wall facade, crisp aluminium transoms"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRGrUo-7yKOACMKIIJrReVk6wsRO4WU_5pMnxBuzEgD-CuwsjPmyf__Xy2eZ4xWjSI4XX8khARsthfIbcTxYK6sZ8lob_ur-CzAiWd0darvH27Eemd-G9Znh2sIHynPVA6G5nOOCjDIORyHDeJ8sSkadPTT7TbjsqETsniAL32hqYJ_V1r5m1Jm6bqPmrCwBu8fVdEVqlRy5y5ivX3K966201CiEf_XfGDqyaWahfjGAHc1Qa6_fc"
                />

                {/* Glass Overlay Card Floating */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#131b2e]/90 backdrop-blur-md rounded-xl text-[#eff1f3] shadow-xl flex items-center justify-between border border-white/15">
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-[#ffdcc3] uppercase">
                      Proyek Terverifikasi
                    </p>
                    <p className="font-bold text-lg text-white">Menara Sentra Glazing</p>
                    <p className="text-xs text-[#bec6e0]">Curtain Wall Unitized • 4,200 m²</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ffdcc3]">
                    <Building className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS ACCREDITATION BANNER */}
        <div className="w-full bg-black text-[#eff1f3] border-t border-white/10">
          <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#ffdcc3] tracking-tight">15+</span>
                <span className="font-bold text-base text-white mt-1">Tahun Pengalaman</span>
                <span className="text-xs text-[#bec6e0]/70">Fabrikasi & Pemasangan Fasad</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#ffdcc3] tracking-tight">850+</span>
                <span className="font-bold text-base text-white mt-1">Proyek Selesai</span>
                <span className="text-xs text-[#bec6e0]/70">Komersial, Kantor & Residensial</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#ffdcc3] tracking-tight">1-3 Thn</span>
                <span className="font-bold text-base text-white mt-1">Garansi Resmi</span>
                <span className="text-xs text-[#bec6e0]/70">Anti Bocor Sealant & Kerapian</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#ffdcc3] tracking-tight">Grade A</span>
                <span className="font-bold text-base text-white mt-1">Bahan Teruji</span>
                <span className="text-xs text-[#bec6e0]/70">YKK AP, Alexindo, Asahimas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN UNGGULAN & BIDANG PEKERJAAN */}
      <section className="w-full py-16 lg:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                Layanan Spesialis
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191c1e] mt-1">
                Bidang Pekerjaan & Sistem Fasad Arsitektur
              </h2>
              <p className="text-sm sm:text-base text-[#45464d] mt-2">
                Seluruh pengerjaan dikerjakan menggunakan mesin potong presisi industri dengan kontrol kualitas ketat untuk memastikan kerapatan sudut dan durabilitas maksimal.
              </p>
            </div>
            <Link
              href="/produk-layanan"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-[#c76c00] hover:text-[#b05f00] hover:underline whitespace-nowrap"
            >
              <span>Katalog Spesifikasi Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bento-style Service Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f2f4f6] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all border border-[#e0e3e5]">
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Minimalist floor to ceiling black aluminum frame sliding doors"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSGFpLXhkd7OoYgDFKmvJPjggdupiNxQvvyRdHR2OBcZA8WsgZJq-KEOikZ-KL0cr8JrSdCWE5jWcnScu4ml7xIg3JYwp0RPMvKKwcL_rKIBLuB3D8dCWwE6OLm--QwjmJE44u2GvsJw7ucq3oazC6M5Tr738HRpTqVUPPPzlprQseoJLB2uDGkzspLxrxQxY7TBXMX1HrG8YjyqNxbwecpabmwAyAHsxhsnGQVva1TcIT2qkpehP"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#c76c00] mb-1">
                  <span className="material-symbols-outlined text-[20px]">door_sliding</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Sistem Pintu & Jendela</span>
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  Kusen, Pintu & Jendela Aluminium
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed mb-4">
                  Pilihan profil Alexindo, YKK AP, dan Dacon 3" hingga 4". Meliputi pintu pivot frameless, sliding multi-track, folding bi-fold, dan jendela casement kedap udara dengan aksesoris multipoint locking system.
                </p>
              </div>
              <div className="pt-2 bg-[#eceef0]/70 p-3 rounded-lg text-xs font-semibold text-[#505f76]">
                <span>Tipe Bukaan: Pivot, Sliding, Casement, Jungkit</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f2f4f6] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all border border-[#e0e3e5]">
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="High rise commercial office building facade featuring reflective blue glass curtain wall"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7CXQGYf50wm8G-3Qslh5ZaY45g7urwFKg7ErM-lHQlQt2tLB7Qbrpqj9tMN3b39RYkgT3GEijYTlRtSJFehKAFOwFhrI1BhBpmd5ZMhaks0vvRkUCEI_Jhm6Q_9kEBRhVIG12kmqBvD48n7tE0odJHxmlD8vVtwjC7UU_aWpXtoDR9mjUkWVLuNWuzV5o_8SkGE0swIHXJSOWL0MhfTZHXqcKkSL3qfaPuoJS_i_acp0QrqYWPTid"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#c76c00] mb-1">
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Fasad Komersial</span>
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  Curtain Wall & Facade ACP Gedung
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed mb-4">
                  Sistem curtain wall stick dan semi-unitized berdaya tahan beban angin tinggi. Dikombinasikan dengan cladding Aluminium Composite Panel (ACP) merk Seven & Alucobond tahan cuaca untuk gedung bertingkat dan ruko modern.
                </p>
              </div>
              <div className="pt-2 bg-[#eceef0]/70 p-3 rounded-lg text-xs font-semibold text-[#505f76]">
                <span>Finishing: PVDF Coating, Fire-Rated ACP, Glass Spandrel</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f2f4f6] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all border border-[#e0e3e5]">
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Sleek modern office interior with acoustic frameless glass partition walls"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzJJtI-cDbHjLEt6jGQ-jlTUkGSl0OZAdJPPhpBdKLHPTcCxcVw-PKRIm9nK5sXP1uEJnpoMCno8w_wTr2RQ_Xdi0ZPf72JhWJXx7lypb-y6C_1rhCopEiu_pfHD4-FCe0TlUr-ZuXX3ANoxuQJOfmkNMnZRTKqgILeY9DXlcqVIxglUld3avE2abe8IBj-DXGv_Cg_w2Q1LHriyhgnW4vemANCBcgjlRrsHtHT-O7uJmrNSBcE5S"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#c76c00] mb-1">
                  <span className="material-symbols-outlined text-[20px]">meeting_room</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Interior Partisi</span>
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  Partisi Kaca Tempered & Frameless
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed mb-4">
                  Penyekat ruangan kantor dan komersial dengan kaca tempered 10mm atau 12mm Asahimas. Tersedia sistem frameless tanam U-channel, patch fitting Dorma/Dekson, serta kaca frosted sandblast untuk privasi optimal.
                </p>
              </div>
              <div className="pt-2 bg-[#eceef0]/70 p-3 rounded-lg text-xs font-semibold text-[#505f76]">
                <span>Ketebalan: Tempered 10mm & 12mm • Reduksi Akustik</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f2f4f6] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all border border-[#e0e3e5]">
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Architectural glass canopy with heavy duty stainless steel spider fitting connectors"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41OfsTqVn-uAd2qXkOK-WyxeShU1v9CI5LCrl09Uf4ZFUWVvFmv_XZQaAB26P2UuhowGovusY8akiAS-aK6ZuX245B2CFfKsTbj5KJhUkZUz4zw1dRrZqJwM-RmmzqzVGtAk0ELOj5df0Qdlu06alAlSxqJypzIZlNOOrf67x6tpqBmPh7A_cyLZpmo2jAopvpDPmAy6M8cVymT71sQF05YON7-vTfzuu3N-Xn8nsFMvtW8QIN4-Q"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#c76c00] mb-1">
                  <span className="material-symbols-outlined text-[20px]">umbrella</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Struktur Kanopi</span>
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  Kanopi Kaca Spider & Railing Balkon
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed mb-4">
                  Pemasangan kanopi carport dan drop-off memakai sistem spider fitting stainless steel SUS 304 dengan kaca laminated 5+5mm atau tempered laminated. Railing tangga dan balkon minimalis elegan anti karat.
                </p>
              </div>
              <div className="pt-2 bg-[#eceef0]/70 p-3 rounded-lg text-xs font-semibold text-[#505f76]">
                <span>Kaca: Laminated Tempered Safety Glass • SUS 304</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#f2f4f6] rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all border border-[#e0e3e5]">
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Luxury bathroom with custom frameless glass shower enclosure"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPAbLjsoE_d6HLvTqf3CySC5Q2uk37h16VRxcIeGCl0bBK5j76qJ9rDvoc3E0lbwRw6Eom3Ksznffol9JKcmzwnEW-s80eqZCSJ5OkGEiZVobG9cgNboYxsLF_9IhH5Zi0ZebQmBFQJfySxaD2xn4vE-U4xA1yP_3mcathTL5vFiRmr0_vj9phmqn-MHaobeAcOD5cpzhfLq_z73cVX8Xj55tTkF7t-mMnVWHNG0U2yXxZdESOAaX3"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-[#c76c00] mb-1">
                  <span className="material-symbols-outlined text-[20px]">bathtub</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Kamar Mandi & Skylight</span>
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  Shower Screen & Skylight Kaca
                </h3>
                <p className="text-sm text-[#45464d] leading-relaxed mb-4">
                  Penyekat kamar mandi custom model corner, sliding shower box, dan fixed glass screen dengan seal magnetik anti bocor air. Serta skylight atap kaca laminated peredam panas UV untuk pencahayaan alami hunian.
                </p>
              </div>
              <div className="pt-2 bg-[#eceef0]/70 p-3 rounded-lg text-xs font-semibold text-[#505f76]">
                <span>Fitur: Anti Jamur Water Repellent • Sealant Silikon Dow</span>
              </div>
            </div>

            {/* Custom Quotation Card CTA */}
            <div className="bg-[#131b2e] text-[#eff1f3] rounded-xl p-6 flex flex-col justify-between shadow-md border border-white/10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#ffdcc3]">
                  <span className="material-symbols-outlined text-[28px]">design_services</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Punya Desain Custom Khusus?
                </h3>
                <p className="text-sm text-[#bec6e0] leading-relaxed">
                  Tim engineering kami dapat menerjemahkan gambar arsitek (AutoCAD, SketchUp, Revit) menjadi Shop Drawing fabrikasi siap potong dengan perhitungan inersia momen angin.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/kalkulator"
                  className="w-full py-3 px-4 rounded-lg bg-[#c76c00] hover:bg-[#b05f00] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                  <span>Gunakan Kalkulator RAB</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KENAPA MEMILIH CV AZKA MANDIRI */}
      <section className="w-full py-16 lg:py-24 bg-[#f2f4f6] border-y border-[#e0e3e5]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e0e3e5] h-[520px] border border-white/40">
                <img
                  className="w-full h-full object-cover"
                  alt="Skilled metal technician precisely cutting extruded aluminum window profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMoe04mDnlZzDQGCMnFDPpmBv8lHgo78bDU79PIlSCYEnINGWq2naR8wa-tImznX0i7YdaNGTjT-1BwFEEy9IWAJMZ8skPqJg9o_vbrN9LqG-UZ4ttzZ69OyLjtHNNgVWdPI-8Xgmh7pArjKJ6OMiLfnUEQYG2ielXmz4laeq8pw-uoYxmx9Ka5lzHf-73YxTzasGUdQQqw9U-h0rMi5wGC8r0rUaRWZTS1uCwqgrIIPbMnlUrN0wE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ffdcc3] text-[32px]">
                      precision_manufacturing
                    </span>
                    <div>
                      <h4 className="font-bold text-base text-white">Mesin Pemotong Digital</h4>
                      <p className="text-xs text-[#d3e4fe]">Toleransi potongan &lt; 0.5 mm menjamin siku sudut sempurna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                  Standar Kualitas Industri
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191c1e] mt-1">
                  Keunggulan Fabrikasi Presisi CV Azka Mandiri
                </h2>
                <p className="text-sm sm:text-base text-[#45464d] mt-2">
                  Kami memadukan peralatan workshop modern, teknisi bersertifikat, dan kepatuhan ketat pada spesifikasi teknis demi memastikan kepuasan jangka panjang klien kami.
                </p>
              </div>

              {/* Feature Item List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Feature 1 */}
                <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-1 border border-[#e0e3e5]">
                  <div className="flex items-center gap-2 text-[#c76c00]">
                    <span className="material-symbols-outlined text-[24px]">straighten</span>
                    <h4 className="font-bold text-base text-[#191c1e]">Potongan Mesin Presisi</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-1">
                    Menggunakan double mitre saw berakurasi tinggi sehingga sambungan adu manis 45° dan 90° rapat tanpa celah bocor air.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-1 border border-[#e0e3e5]">
                  <div className="flex items-center gap-2 text-[#c76c00]">
                    <span className="material-symbols-outlined text-[24px]">badge</span>
                    <h4 className="font-bold text-base text-[#191c1e]">Tukang Fasad Berlisensi</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-1">
                    Didukung oleh instalatur berpengalaman sertifikasi K3 bekerja di ketinggian (gondola & scaffolding) untuk proyek gedung tinggi.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-1 border border-[#e0e3e5]">
                  <div className="flex items-center gap-2 text-[#c76c00]">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                    <h4 className="font-bold text-base text-[#191c1e]">Material Original Pabrik</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-1">
                    Jaminan keaslian profil aluminium (Alexindo, YKK, Dacon) dan kaca (Asahimas, Mulia) disertai sertifikat garansi material resmi.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="p-4 rounded-xl bg-white shadow-sm flex flex-col gap-1 border border-[#e0e3e5]">
                  <div className="flex items-center gap-2 text-[#c76c00]">
                    <span className="material-symbols-outlined text-[24px]">pin_drop</span>
                    <h4 className="font-bold text-base text-[#191c1e]">Survei Lapangan Gratis</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mt-1">
                    Layanan survei lokasi, pengukuran laser akurat, dan konsultasi teknis tanpa biaya komitmen awal untuk seluruh wilayah Jabodetabek.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="sm:col-span-2 p-4 rounded-xl bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#e0e3e5]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#c76c00] text-[28px]">schedule</span>
                    <div>
                      <h4 className="font-bold text-base text-[#191c1e]">Manajemen Jadwal Ketat (On-Time Delivery)</h4>
                      <p className="text-xs text-[#45464d]">Setiap proyek dilengkapi Kurva S dan timeline fabrikasi transparan.</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#d0e1fb] text-[#0b1c30] text-[11px] font-bold rounded-lg uppercase tracking-wider">
                    100% On-Schedule
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE PROYEK UNGGULAN */}
      <section className="w-full py-16 lg:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                Portofolio Realisasi
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191c1e] mt-1">
                Showcase Proyek Aluminium & Kaca Terbaru
              </h2>
              <p className="text-sm text-[#45464d] mt-1">
                Eksplorasi beberapa hasil instalasi terbaik kami pada sektor komersial, gedung perkantoran, dan residensial mewah.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === "all"
                    ? "bg-black text-white shadow-sm"
                    : "bg-[#e6e8ea] text-[#45464d] hover:bg-[#e0e3e5]"
                }`}
              >
                Semua Proyek
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("kantor")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === "kantor"
                    ? "bg-black text-white shadow-sm"
                    : "bg-[#e6e8ea] text-[#45464d] hover:bg-[#e0e3e5]"
                }`}
              >
                Gedung Kantor
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("residensial")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === "residensial"
                    ? "bg-black text-white shadow-sm"
                    : "bg-[#e6e8ea] text-[#45464d] hover:bg-[#e0e3e5]"
                }`}
              >
                Residensial Mewah
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("showroom")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === "showroom"
                    ? "bg-black text-white shadow-sm"
                    : "bg-[#e6e8ea] text-[#45464d] hover:bg-[#e0e3e5]"
                }`}
              >
                Showroom & Ruko
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group bg-[#f2f4f6] rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-all border border-[#e0e3e5]"
              >
                <div className="relative h-64 overflow-hidden bg-[#e0e3e5]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                    src={item.image}
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#191c1e] group-hover:text-[#c76c00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#45464d] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-4 mt-2 flex items-center justify-between text-xs text-[#505f76] border-t border-[#e0e3e5]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {item.loc}
                    </span>
                    <span className="font-bold text-[#191c1e]">{item.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUR KERJA PROFESIONAL (STEP BY STEP) */}
      <section className="w-full py-16 lg:py-24 bg-white border-y border-[#e0e3e5]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
              Standard Operating Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191c1e] mt-1">
              6 Tahapan Alur Kerja CV Azka Mandiri
            </h2>
            <p className="text-sm sm:text-base text-[#45464d] mt-2">
              Setiap proyek berjalan dengan alur kerja terstruktur untuk memastikan ketepatan dimensi, transparansi biaya, dan hasil akhir tanpa kompromi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Step 1 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center mb-4 text-base">
                  1
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Konsultasi & Shop Drawing</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Review gambar arsitek, penentuan sistem profil, dan penyesuaian detail sambungan.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#505f76] text-[10px] font-bold uppercase tracking-wider">
                Tahap Persiapan
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center mb-4 text-base">
                  2
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Survei & Ukur Lapangan</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Pengukuran ulang opening tembok dengan laser meter presisi tinggi milimeter.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#505f76] text-[10px] font-bold uppercase tracking-wider">
                Akurasi Milimeter
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center mb-4 text-base">
                  3
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Penawaran Transparan</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Rincian volume material, aksesoris kunci, kaca, dan ongkos kerja tanpa biaya siluman.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#505f76] text-[10px] font-bold uppercase tracking-wider">
                Fix Budget
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center mb-4 text-base">
                  4
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Fabrikasi di Workshop</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Pemotongan profil aluminium, perakitan rangka, dan proses tempering kaca di pabrik.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#505f76] text-[10px] font-bold uppercase tracking-wider">
                Kontrol Mutu QC
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center mb-4 text-base">
                  5
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Pemasangan & Sealant</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Ereksi rangka, setting kaca dengan suction pad, dan finishing silikon netral tahan bocor.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#505f76] text-[10px] font-bold uppercase tracking-wider">
                Waterproofing
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-[#f7f9fb] p-5 rounded-xl flex flex-col justify-between border border-[#e0e3e5]">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#c76c00] text-white font-bold flex items-center justify-center mb-4 text-base">
                  6
                </div>
                <h4 className="font-bold text-base text-[#191c1e] mb-2">Serah Terima & Garansi</h4>
                <p className="text-xs text-[#45464d] leading-relaxed">
                  Uji semprot air (water spray test), pembersihan kaca, dan penerbitan sertifikat garansi.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#c76c00] text-[10px] font-bold uppercase tracking-wider">
                Garansi 1-3 Thn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI KLIEN & MITRA ARSITEK */}
      <section className="w-full py-16 lg:py-24 bg-[#f2f4f6]">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                Reputasi Terpercaya
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
                Apa Kata Klien & Kontraktor Utama?
              </h2>
              <p className="text-sm text-[#45464d] leading-relaxed">
                Kepercayaan dari kontraktor, pengembang properti, dan arsitek independen adalah bukti nyata komitmen kami pada ketepatan waktu serta estetika arsitektur.
              </p>
              <div className="pt-4 flex items-center gap-3">
                <div className="flex text-[#c76c00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-lg text-[#191c1e]">4.9 / 5.0</span>
                <span className="text-xs text-[#45464d]">(120+ Review)</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between border border-[#e0e3e5]">
                <div>
                  <div className="flex text-[#c76c00] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#191c1e] italic leading-relaxed mb-6">
                    "CV Azka Mandiri menyelesaikan pekerjaan curtain wall 6 lantai kantor kami tepat waktu. Sambungan silikon sangat rapi, saat musim hujan deras tidak ada satu pun kebocoran rembes air. Sangat direkomendasikan untuk proyek komersial."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#e0e3e5]">
                  <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-sm">
                    BP
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#191c1e] leading-tight">Bambang Pramono, S.T.</h4>
                    <p className="text-xs text-[#505f76]">Project Manager • PT Karya Graha Utama</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between border border-[#e0e3e5]">
                <div>
                  <div className="flex text-[#c76c00] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#191c1e] italic leading-relaxed mb-6">
                    "Sebagai arsitek, saya sangat menuntut detail adu manis kusen aluminium yang presisi dan pintu pivot frameless yang mulus. Azka Mandiri mampu mewujudkan gambar teknis kami tanpa deviasi ukuran yang mengganggu."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#e0e3e5]">
                  <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-sm">
                    FW
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#191c1e] leading-tight">Fiona Widyadhana, IAI</h4>
                    <p className="text-xs text-[#505f76]">Principal Architect • Studio Arsitektur Senopati</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER PENUTUP KONSULTASI INSTAN WHATSAPP */}
      <section className="w-full bg-[#131b2e] text-[#eff1f3] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#c76c00]/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="max-w-2xl flex flex-col gap-2 text-left">
              <div className="inline-flex items-center gap-1.5 text-[#ffdcc3] text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#ffdcc3]" />
                <span>Konsultasi & Estimasi RAB Tanpa Biaya</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Siap Mewujudkan Fasad Impian Bangunan Anda?
              </h2>
              <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed mt-1">
                Hubungi tim teknisi CV Azka Mandiri sekarang. Kirimkan gambar denah atau jadwalkan survei pengukuran gratis ke lokasi proyek Anda hari ini.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/6281932735383?text=Halo%20CV%20Azka%20Mandiri,%20saya%20ingin%20konsultasi%20proyek%20aluminium%20dan%20kaca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#c76c00] hover:bg-[#b05f00] text-white font-bold text-base shadow-lg transition-all"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>WhatsApp Project Desk</span>
              </a>
              <Link
                href="/kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span>Kirim Berkas Tender</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
