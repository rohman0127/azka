"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  CheckCircle2,
  Shield,
  Layers,
  ArrowRight,
  X,
  FileText,
  Sliders,
  Check,
  Building,
  Info
} from "lucide-react";

interface ProductItem {
  id: string;
  category: string;
  badge1: string;
  badge2: string;
  statLabel: string;
  statValue: string;
  ref: string;
  title: string;
  desc: string;
  specs: {
    label: string;
    value: string;
  }[];
  featureIcon: string;
  featureText: string;
  image: string;
  modalDetail: string;
}

export default function ProdukLayananPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: "casement-awning",
      category: "kusen-jendela",
      badge1: "YKK AP / Alexindo",
      badge2: "3 & 4 Inch",
      statLabel: "Ketahanan Angin",
      statValue: "1600 Pa (Class 4)",
      ref: "WND-CS40",
      title: "Jendela Casement & Jungkit Awning",
      desc: "Sistem bukaan jungkit dan samping dengan friction stay stainless 304, multi-point locking gear, dan double EPDM gasket kedap suara hingga 32dB.",
      specs: [
        { label: "Opsi Finish:", value: "Black Anodize, White PC, Wood Grain, Champagne" },
        { label: "Tipe Profil:", value: "Ketebalan Dinding 1.35mm - 1.8mm" },
        { label: "Opsi Kaca:", value: "5mm, 6mm, 8mm Float / Tempered" },
      ],
      featureIcon: "lock",
      featureText: "Crescent / Multi-Point Lock",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARNO3VsJem5NXjjVV2hHKTRyAEO2x_FuPqPWQrU6hOiFOyyFou3kzRIlXxALQg9_2bMbAKxF5Fpp8nGQUllbp3tDCGoYur6fmL1wxc-_IbykGyUreXii4EGqSMsnv-8WvupF4RkTjUL0tblY0aLevCUSZnstoPdrunVboI5AwX_LU-poskkOzDmmjA1zAVRpKuz5qItBMtSJaCW2t4kkLPBq86uaku5ttaFzkEFw03HEoz3sjO0ZiM",
      modalDetail: "Profil kusen 3 inch / 4 inch YKK AP seri Nexsta / Alexindo Profile. Dilengkapi friction stay heavy duty sus 304, transmisi handle Cremone/Multipoint lock, sealant weatherproofing Dow Corning 791, EPDM rubber strip anti aus.",
    },
    {
      id: "sliding-folding",
      category: "pintu",
      badge1: "Heavy Duty System",
      badge2: "Beban Max 250kg/Daun",
      statLabel: "Kedap Air",
      statValue: "Tekanan 300 Pa",
      ref: "DOR-SL80",
      title: "Pintu Sliding & Lipat Aluminium",
      desc: "Sistem roller bantalan peluru stainless heavy-duty dengan lintasan bawah rata (low threshold), kedap suara superior, dan water resistance weatherstrip ganda.",
      specs: [
        { label: "Mekanisme:", value: "Sliding 2/3/4/6 Daun, Folding Hinged" },
        { label: "Hardware:", value: "Kin Long / Dekson Heavy Duty" },
        { label: "Finishing:", value: "Anodize Sandblasted / AkzoNobel PC" },
      ],
      featureIcon: "tune",
      featureText: "Soft Close Damper Ready",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPiFqnN0yvZmGhX9XpqjfRukfVRRB32FZWqhhi7mwtAMf61f6vK9oIR6XXoqFXA-vG0Lq61AyWWsR7rt54pRPA_xvJ5IuI29SAIEecHCFZxkVne0VJTrwbtQtiTD5Wy8xkx24kr7k3N6Jso0KuRtmg6Qsa_2GuurK7zr8R3j5oBVbV2q3if4wJwnXoAPMjScS_FIu20M2mU3IHvL1MoVjTcVG9B-o-9sbhoC6B1mceKcOWkbUBYcyO",
      modalDetail: "Dirancang untuk bentang bukaan masif teras & komersial. Roda bawah tandem stainless SUS304 bearing oli, profil daun tebal 2.0mm, pengunci multi hook lock anti congkel.",
    },
    {
      id: "curtain-wall",
      category: "curtain-wall",
      badge1: "Stick & Semi-Unitized",
      badge2: "High Rise Safe",
      statLabel: "Beban Angin",
      statValue: "ASTM E330 Certified",
      ref: "FAC-CW90",
      title: "Curtain Wall Fasad Gedung Bertingkat",
      desc: "Fasad kaca gedung tinggi dengan mullion transom aluminium ekstrusi heavy-duty, gasket silikon struktural, serta insulasi termal efisiensi energi gedung hijau.",
      specs: [
        { label: "Tipe Sistem:", value: "Stick System, Semi-Unitized, 4-Side SG" },
        { label: "Pilihan Kaca:", value: "8mm, 10mm Stopsol, DGU 24mm (6+12A+6)" },
        { label: "Struktur Mullion:", value: "50x100mm, 50x150mm T-Profile Alloy 6063-T6" },
      ],
      featureIcon: "apartment",
      featureText: "Uji Semprot Air ASTM E1105 Nihil Bocor",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhDqyHrJ9-BiknHmCr7nYQaBew5AX3l2dDXUe4Wkh64FqRRrIsh6Jgj2l9rXdjBtpa0xU2bTZM3rHipahpZsiy-cyvFcaFzF6p4_ATEf5HYwSIsftcX_u1rhEXcUr_tW2kbRZ_wBhTyKE2b4oLGjASUuBPT3hr6rmoja-7VOZofZoRnqK0w7l8vVRSJUdelRc5SP69cmCSl2XwdaiObU0c7hxxYAgwTcxVQbeHMfaqWSSv4tzrGu7Q",
      modalDetail: "Fasad komersial berskala besar dengan perhitungan beban gempa dan angin. Sealant struktural Dow Corning 983 / Sika SG-500, braket baja galvanis 8mm dynabolt Hilti.",
    },
    {
      id: "partisi-frameless",
      category: "kaca-partisi",
      badge1: "Tempered Asahimas",
      badge2: "10mm & 12mm",
      statLabel: "Akustik",
      statValue: "STC 35 Reduksi Suara",
      ref: "INT-GL12",
      title: "Partisi Kaca Tempered Frameless Office",
      desc: "Sekat ruangan kantor modern dengan kaca bening frameless jernih, U-channel tanam lantai/plafon, dan pintu swing patch fitting stainless.",
      specs: [
        { label: "Hardware:", value: "Dorma BTS 84, Dekkson PT 10/20/30 SUS 304" },
        { label: "Kaca:", value: "10mm / 12mm Tempered Clear / Frosted Sandblast" },
        { label: "Sambungan:", value: "Clear Joint Silicone / Polycarbonate H-Profile" },
      ],
      featureIcon: "meeting_room",
      featureText: "Toleransi Sambungan Kaca 2-3 mm",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvzJJtI-cDbHjLEt6jGQ-jlTUkGSl0OZAdJPPhpBdKLHPTcCxcVw-PKRIm9nK5sXP1uEJnpoMCno8w_wTr2RQ_Xdi0ZPf72JhWJXx7lypb-y6C_1rhCopEiu_pfHD4-FCe0TlUr-ZuXX3ANoxuQJOfmkNMnZRTKqgILeY9DXlcqVIxglUld3avE2abe8IBj-DXGv_Cg_w2Q1LHriyhgnW4vemANCBcgjlRrsHtHT-O7uJmrNSBcE5S",
      modalDetail: "Partisi transparan untuk ruang rapat & kantor eksekutif. Kaca dipotong presisi di pabrik Asahimas dengan sertifikasi SNI, tepi kaca digosok mesin bevel rapi tanpa tajem.",
    },
    {
      id: "kanopi-laminated",
      category: "kanopi-railing",
      badge1: "Spider Fitting SUS 316",
      badge2: "Impact Safe",
      statLabel: "Interlayer PVB",
      statValue: "0.76mm - 1.52mm",
      ref: "EXT-CNP10",
      title: "Kanopi Kaca Laminated Spider Fitting",
      desc: "Kanopi atap entrance gedung, carport, dan skylight dengan rangka besi WF/pipa stainless dan klem spider fitting empat cabang.",
      specs: [
        { label: "Spesifikasi Kaca:", value: "5+5 mm, 6+6 mm Laminated Tempered" },
        { label: "Aksesoris Spider:", value: "SUS 304 / SUS 316 Heavy Duty Cast" },
        { label: "Lapisan Seal:", value: "Silicone Weatherproof UV-Resistant" },
      ],
      featureIcon: "shield",
      featureText: "Anti Pecah Ambruk PVB Layer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB41OfsTqVn-uAd2qXkOK-WyxeShU1v9CI5LCrl09Uf4ZFUWVvFmv_XZQaAB26P2UuhowGovusY8akiAS-aK6ZuX245B2CFfKsTbj5KJhUkZUz4zw1dRrZqJwM-RmmzqzVGtAk0ELOj5df0Qdlu06alAlSxqJypzIZlNOOrf67x6tpqBmPh7A_cyLZpmo2jAopvpDPmAy6M8cVymT71sQF05YON7-vTfzuu3N-Xn8nsFMvtW8QIN4-Q",
      modalDetail: "Kanopi dengan tingkat proteksi keselamatan tertinggi. PVB interlayer menahan pecahan tetap merekat jika terjadi benturan benda jatuh keras. Dilengkapi talang air tersembunyi (hidden gutter).",
    },
    {
      id: "railing-clamp",
      category: "kanopi-railing",
      badge1: "Balustrade & Railing",
      badge2: "Tempered 10mm - 12mm",
      statLabel: "Sistem Klem",
      statValue: "Stainless SUS 316",
      ref: "RAI-GC10",
      title: "Railing Balkon & Tangga Glass Clamp",
      desc: "Pagar pengaman transparan elegan menggunakan klem kaca tiang stainless atau sistem spigot tanam lantai tanpa tiang (frameless look) yang sangat kokoh.",
      specs: [
        { label: "Ketebalan Kaca:", value: "10mm / 12mm Tempered Bevel Poles" },
        { label: "Handrail:", value: "Pipa SS 304 Bulat 2 Inch / Kayu Kamper" },
        { label: "Mounting Base:", value: "Spigot Solid Core / Baluster Stand" },
      ],
      featureIcon: "stairs",
      featureText: "Standar Beban Horisontal 1.0 kN/m",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbt9yVmDgjmwtglhfBpMptnML2hNcE3_zMH5AcyadPxmYf4neHnEPS5RpHloyPFjg9nlnr7ARL9HHadVTidGgL5FTLScEXYLS1lQB1JvoyDKbE2doQIic3gPA0oSSF5SvguL3o3fE8SribMsiVDA1e39xZpm7d19VoCRy6Fh-XMe27qoSQqyGqZAHXbgIUKezk20hF23WVacJch9oBKP4_Avtge3FP5Yn5T0vSG1OxXnmnPtbtom_G",
      modalDetail: "Konstruksi railing dengan pengujian beban dorong standar bangunan publik. Kaca diproses gosok mesin bevel halus sekeliling sisi. Tahan karat untuk area semi-outdoor & tepi pantai.",
    },
    {
      id: "pintu-otomatis",
      category: "pintu",
      badge1: "Automation Drive",
      badge2: "Commercial Grade",
      statLabel: "Sensor Radar",
      statValue: "Microwave Dual Ray",
      ref: "AUT-DR100",
      title: "Pintu Otomatis Sensor Kaca Komersial",
      desc: "Sistem automatic sliding door motor brushless DC hening, sensor gerak microwave presisi, remote kontrol, serta fitur pengaman otomatis anti-terjepit.",
      specs: [
        { label: "Motor Unit:", value: "Brushless DC 24V 75W (Dorma / Nabco / Geze)" },
        { label: "Kaca:", value: "10mm / 12mm Tempered Edge Polished" },
        { label: "Fitur Safety:", value: "Photocell Beam Reversal System" },
      ],
      featureIcon: "sensors",
      featureText: "Touchless Sensor & Remote Control",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD77j65Cnahe1GBobhTEQu7_pdVN5zVxKP8jimEkwAZpzwpcj3EzyTqCNxB9dYpZUUnKUgN_qRFJ1tYLiq5-bE2gWeMvO2fQj-mzZ6sZJMUjKvJ5EW7TPsDYme5rpoDdcSr0LaysiPLHHp0L6viXQnmce3dtjqQCsBmQrepL9TqwJwVi3WSkLX0yDYBHakDexmwSjjYiQEEV5b4vZBrCHFsjmEtbiZYDlfBSiOnyFPcbr0DvEToJKM1",
      modalDetail: "Solusi pintu gerbang utama rumah sakit, mall, bank, dan kantor pemerintahan. Kapasitas buka hingga 150kg single door atau 2x 120kg bi-parting sliding. Kecepatan bukaan variabel 200-500mm/detik.",
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ref.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Banner Section */}
      <section className="w-full bg-[#f2f4f6] py-12 px-5 lg:px-10 border-b border-[#e0e3e5] relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#505f76] bg-[#eceef0] px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
              <span>Spesifikasi SNI & Architectural Standard 2025</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-[#45464d]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c76c00]"></span>
                ISO 9001 Certified Glazing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#505f76]"></span>
                Alloy 6063-T5 Structural Grade
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#505f76]">
                Dokumentasi Material & Fabrikasi
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191c1e] tracking-tight">
                Katalog Produk & Spesifikasi Fabrikasi Aluminium & Kaca
              </h1>
              <p className="text-sm sm:text-base text-[#45464d] max-w-2xl leading-relaxed">
                Pilihan material berstandar internasional dengan opsi ketebalan presisi, finishing anodized elektroforesis, powder coating tahan UV, serta rekayasa kaca pengaman struktural untuk kebutuhan komersial dan residensial premium.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-3">
              <div className="bg-white p-4 rounded-xl shadow-xs flex items-center justify-between border border-[#e0e3e5]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-[#45464d]">Kapasitas Fabrikasi</span>
                  <span className="text-2xl font-bold text-[#191c1e]">3.800+ m²</span>
                  <span className="text-xs text-[#505f76]">Output panel & kusen / bulan</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#e6e8ea] flex items-center justify-center text-[#191c1e]">
                  <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#505f76] font-medium">
                <Shield className="w-4 h-4 text-[#c76c00]" />
                <span>Garansi Kebocoran Sealant & Finis Hingga 10 Tahun</span>
              </div>
            </div>
          </div>

          {/* Quick Category Filter Bar */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: `Semua Kategori (${products.length})` },
              { id: "kusen-jendela", label: "Kusen & Jendela" },
              { id: "pintu", label: "Pintu Aluminium" },
              { id: "curtain-wall", label: "Curtain Wall & Facade" },
              { id: "kaca-partisi", label: "Kaca Tempered & Partisi" },
              { id: "kanopi-railing", label: "Kanopi & Railing" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-[#e0e3e5] text-[#45464d] hover:text-[#191c1e] hover:bg-[#d8dadc]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Search & Metadata Stats Strip */}
      <section className="w-full bg-white px-5 lg:px-10 py-3 border-b border-[#e0e3e5]">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#45464d]">
            <Filter className="w-4 h-4 text-[#505f76]" />
            <span>
              Menampilkan {filteredProducts.length} unit sistem rekayasa arsitektural CV Aska Mandiri
            </span>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tipe profil, finishing, kaca..."
                className="w-full bg-[#f2f4f6] pl-9 pr-4 py-1.5 rounded-lg text-xs text-[#191c1e] outline-none border border-[#e0e3e5] focus:bg-white focus:border-[#c76c00] transition-all"
              />
              <Search className="w-4 h-4 text-[#505f76] absolute left-2.5 top-2" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#505f76] bg-[#eceef0] px-2.5 py-1 rounded">
              Standar ASTM / SNI
            </span>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f7f9fb]">
        <div className="max-w-[1320px] mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#e0e3e5] p-8">
              <Info className="w-12 h-12 text-[#505f76] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#191c1e]">Tidak ada produk yang cocok</h3>
              <p className="text-xs text-[#45464d] mt-1">
                Silakan coba kata kunci pencarian lain atau pilih kategori "Semua Kategori".
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#e0e3e5]"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-[#e0e3e5]">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={product.title}
                      src={product.image}
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur text-[10px] text-[#191c1e] font-bold uppercase">
                        {product.badge1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#131b2e] text-white text-[10px] font-bold uppercase">
                        {product.badge2}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg text-right shadow-sm border border-[#e0e3e5]">
                      <span className="text-[10px] block text-[#505f76] font-semibold">{product.statLabel}</span>
                      <span className="text-xs font-bold text-[#191c1e]">{product.statValue}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#c76c00] uppercase tracking-wider">
                          Kusen & Bukaan Presisi
                        </span>
                        <span className="text-xs font-semibold text-[#505f76]">{product.ref}</span>
                      </div>
                      <h2 className="text-lg font-bold text-[#191c1e]">{product.title}</h2>
                      <p className="text-xs text-[#45464d] leading-relaxed line-clamp-2">{product.desc}</p>
                    </div>

                    {/* Technical Options Matrix */}
                    <div className="bg-[#f2f4f6] p-3 rounded-xl flex flex-col gap-1.5 text-xs">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <span className="text-[#505f76] font-medium text-[11px] shrink-0">{spec.label}</span>
                          <span className="font-semibold text-[#191c1e] text-right truncate">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#e0e3e5]">
                      <div className="flex items-center gap-1.5 text-[#505f76] text-xs font-semibold">
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                        <span className="truncate max-w-[150px]">{product.featureText}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveModalProduct(product)}
                        className="px-3.5 py-1.5 bg-[#e0e3e5] hover:bg-black hover:text-white text-[#191c1e] text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                      >
                        <span>Detail Spek</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Brand Comparison Matrix Table */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f2f4f6] border-y border-[#e0e3e5]">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase text-[#c76c00] tracking-wider">
                Matriks Teknis Profil
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
                Komparasi Merek Ekstrusi Aluminium
              </h2>
              <p className="text-sm text-[#45464d] max-w-2xl">
                Transparansi komposisi alloy, ketebalan nominal profil, durabilitas lapisan permukaan, dan orientasi anggaran proyek.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl text-[#505f76] text-xs font-semibold border border-[#e0e3e5]">
              <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
              <span>Bahan Original Pabrikan Resmi (Bukan Oplosan)</span>
            </div>
          </div>

          {/* Comparison Table Card */}
          <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xs border border-[#e0e3e5]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#131b2e] text-white text-xs uppercase tracking-wider font-bold">
                  <tr>
                    <th className="py-4 px-6">Merek Profil</th>
                    <th className="py-4 px-4">Ketebalan Dinding (mm)</th>
                    <th className="py-4 px-4">Sertifikasi & Grade Alloy</th>
                    <th className="py-4 px-4">Ketahanan Warna & Lapisan</th>
                    <th className="py-4 px-4">Karakteristik Mekanikal</th>
                    <th className="py-4 px-6 text-right">Perkiraan Range Biaya</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e0e3e5]">
                  {/* YKK AP */}
                  <tr className="hover:bg-[#f7f9fb] transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-[#191c1e]">YKK AP</span>
                        <span className="text-[11px] text-[#505f76]">Lisensi Resmi Jepang (Top Tier)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">1.35 mm - 2.00 mm</div>
                      <span className="text-[#505f76] text-[10px]">Toleransi presisi ±0.05mm</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[10px] font-bold mb-1">
                        Alloy 6063-T5 JIS
                      </span>
                      <div className="text-[#505f76] text-xs">JIS H4100 / ASTM B221</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">Electrodeposition (ED) 15 Tahun+</div>
                      <div className="text-[#45464d] text-xs">Sangat tahan cuaca ekstrim & garam pantai</div>
                    </td>
                    <td className="py-4 px-4 text-[#45464d]">
                      Ketelitian sudut 90° sempurna, karet interlocking elastis, kedap air tinggi.
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-bold text-[#191c1e]">Premium ($$$$)</span>
                      <div className="text-xs text-[#505f76]">Investasi jangka panjang</div>
                    </td>
                  </tr>

                  {/* Alexindo */}
                  <tr className="hover:bg-[#f7f9fb] transition-colors bg-[#f7f9fb]/60">
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-[#191c1e]">Alexindo</span>
                        <span className="text-[11px] text-[#c76c00] font-semibold">Paling Populer untuk Gedung & Rumah</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">1.00 mm - 1.25 mm</div>
                      <span className="text-[#505f76] text-[10px]">Stabil & Kokoh</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[10px] font-bold mb-1">
                        SNI 07-0603-1989
                      </span>
                      <div className="text-[#505f76] text-xs">Standar Fasad Komersial</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">Powder Coating / Anodized 10+ Thn</div>
                      <div className="text-[#45464d] text-xs">Pilihan warna variatif: Urat Kayu, Hitam, Cokelat</div>
                    </td>
                    <td className="py-4 px-4 text-[#45464d]">
                      Kekakuan tinggi untuk jendela bentang standar & pintu swing komersial.
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-bold text-[#191c1e]">Menengah ke Atas ($$$)</span>
                      <div className="text-xs text-[#505f76]">Best value for quality</div>
                    </td>
                  </tr>

                  {/* Inkalum */}
                  <tr className="hover:bg-[#f7f9fb] transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-[#191c1e]">Inkalum</span>
                        <span className="text-[11px] text-[#505f76]">Efisiensi & Ruko</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">0.90 mm - 1.10 mm</div>
                      <span className="text-[#505f76] text-[10px]">Standar Efisien</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[10px] font-bold mb-1">
                        SNI Nasional
                      </span>
                      <div className="text-[#505f76] text-xs">Uji Kompresi Beban Standar</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">Anodized 5 - 8 Tahun</div>
                      <div className="text-[#45464d] text-xs">Pilihan: Silver, Hitam Doff, Cokelat</div>
                    </td>
                    <td className="py-4 px-4 text-[#45464d]">
                      Cocok untuk renovasi ruko, partisi ruangan kantor sewa, dan bukaan interior.
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-bold text-[#191c1e]">Ekonomis ($$)</span>
                      <div className="text-xs text-[#505f76]">Efisiensi anggaran</div>
                    </td>
                  </tr>

                  {/* Dacon / Forta */}
                  <tr className="hover:bg-[#f7f9fb] transition-colors bg-[#f7f9fb]/60">
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-[#191c1e]">Dacon / Forta</span>
                        <span className="text-[11px] text-[#505f76]">Budget-Friendly Housing</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">0.85 mm - 1.00 mm</div>
                      <span className="text-[#505f76] text-[10px]">Standar Ringan</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[10px] font-bold mb-1">
                        Standar Industri
                      </span>
                      <div className="text-[#505f76] text-xs">Residensial Non-Beban</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#191c1e]">Powder Coating 5 Tahun</div>
                      <div className="text-[#45464d] text-xs">Putih, Hitam, Cokelat</div>
                    </td>
                    <td className="py-4 px-4 text-[#45464d]">
                      Ideal untuk jendela kamar mandi, ventilasi gudang, dan pembagi partisi gipsum.
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-bold text-[#191c1e]">Hemat ($)</span>
                      <div className="text-xs text-[#505f76]">Sesuai kebutuhan minimum</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Matriks Kaca Arsitektural */}
      <section className="w-full py-16 px-5 lg:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold uppercase text-[#c76c00] tracking-wider">
              Panduan Pemilihan Material
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
              Matriks Karakteristik Kaca Pengaman (Safety Glass)
            </h2>
            <p className="text-sm text-[#45464d] max-w-2xl">
              Memahami perbedaan teknis antara Float Glass, Tempered, Laminated, dan Insulated Double Glazing untuk keamanan struktur dan isolasi suara bangunan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#505f76]">Kaca Standar</span>
                <h3 className="text-lg font-bold text-[#191c1e] mt-1 mb-2">Clear Float Glass</h3>
                <p className="text-xs text-[#45464d] leading-relaxed mb-4">
                  Kaca lembaran bening tanpa perlakuan panas. Jika pecah menghasilkan pecahan runcing berbahaya. Hanya cocok untuk bukaan kecil dan frame keliling penuh.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#505f76] pt-3 border-t border-[#e0e3e5]">
                Tebal: 5mm, 6mm, 8mm
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c76c00]">Standar Keselamatan</span>
                <h3 className="text-lg font-bold text-[#191c1e] mt-1 mb-2">Tempered Safety Glass</h3>
                <p className="text-xs text-[#45464d] leading-relaxed mb-4">
                  Dipanaskan hingga 700°C lalu didinginkan cepat. Kekuatan benturan 4-5x lebih kuat dari kaca biasa. Jika pecah menjadi butiran tumpul mirip jagung tanpa sudut runcing.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#505f76] pt-3 border-t border-[#e0e3e5]">
                Tebal: 8mm, 10mm, 12mm
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#505f76]">Anti Runtuh / Atap</span>
                <h3 className="text-lg font-bold text-[#191c1e] mt-1 mb-2">Laminated Safety Glass</h3>
                <p className="text-xs text-[#45464d] leading-relaxed mb-4">
                  Dua lembar kaca disatukan lapisan film PVB (Polyvinyl Butyral). Jika pecah, pecahan tetap menempel di film dan tidak ambruk ke bawah. Wajib untuk kanopi dan skylight.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#505f76] pt-3 border-t border-[#e0e3e5]">
                Tebal: 5+0.38+5, 6+0.76+6 mm
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#505f76]">Kedap Suara & Termal</span>
                <h3 className="text-lg font-bold text-[#191c1e] mt-1 mb-2">Double Glazing (DGU)</h3>
                <p className="text-xs text-[#45464d] leading-relaxed mb-4">
                  Dua lapis kaca dengan rongga udara kering (air space/argon) 12mm di antaranya. Menghalau panas matahari masuk dan mereduksi kebisingan hingga 40 dB.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#505f76] pt-3 border-t border-[#e0e3e5]">
                Konfigurasi: 6mm + 12A + 6mm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Modal / Spec Popup */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200 border border-[#e0e3e5]">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c76c00]">
                  Datasheet Spesifikasi Pabrik
                </span>
                <h3 className="text-xl font-bold text-[#191c1e] mt-0.5">{activeModalProduct.title}</h3>
                <p className="text-xs text-[#505f76]">Kode Referensi: {activeModalProduct.ref}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="p-1 rounded-lg text-[#505f76] hover:bg-[#e0e3e5] hover:text-[#191c1e] transition-colors"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#f2f4f6] p-4 rounded-xl text-xs sm:text-sm text-[#191c1e] leading-relaxed">
              <p className="font-semibold text-sm mb-1 text-[#191c1e]">Deskripsi Rekayasa Teknik:</p>
              <p className="text-[#45464d]">{activeModalProduct.modalDetail}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#191c1e] uppercase tracking-wider">Tabel Opsi Standar:</h4>
              <div className="space-y-1.5 text-xs">
                {activeModalProduct.specs.map((s, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">{s.label}</span>
                    <span className="font-semibold text-[#191c1e]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/kalkulator"
                className="flex-1 py-2.5 px-4 rounded-xl bg-black hover:bg-[#131b2e] text-white text-xs font-bold text-center transition-colors"
              >
                Hitung RAB dengan Spek Ini
              </Link>
              <a
                href={`https://wa.me/6281932735383?text=Halo%20CV%20Aska%20Mandiri,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(
                  activeModalProduct.title
                )}%20(${activeModalProduct.ref})`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#c76c00] hover:bg-[#b05f00] text-white text-xs font-bold transition-colors"
              >
                Tanya Teknis via WA
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
