"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Phone,
  MessageSquare,
  UploadCloud,
  ChevronDown,
  Info,
  Calendar,
  Layers,
  Wrench,
  Check
} from "lucide-react";

interface JobType {
  id: string;
  name: string;
  subtitle: string;
  base: number;
  unit: "m1" | "m2";
  unitLabel: string;
  iconName: string;
}

interface BrandTier {
  id: string;
  name: string;
  tier: string;
  desc: string;
  mult: number;
  classTag: string;
}

interface GlassSpec {
  id: string;
  name: string;
  sub: string;
  cost: number;
}

export default function KalkulatorPage() {
  const jobTypes: JobType[] = [
    {
      id: "pintu-jendela",
      name: "Kusen Pintu / Jendela",
      subtitle: "Casement, sliding, pivot",
      base: 450000,
      unit: "m1",
      unitLabel: "Meter Lari (m1)",
      iconName: "window",
    },
    {
      id: "partisi-kantor",
      name: "Partisi Kaca Kantor",
      subtitle: "Frameless / semi-frame",
      base: 680000,
      unit: "m2",
      unitLabel: "Meter Persegi (m²)",
      iconName: "grid_view",
    },
    {
      id: "kanopi-kaca",
      name: "Kanopi Kaca Tempered",
      subtitle: "Rangka WF / Hollow / Alum",
      base: 1450000,
      unit: "m2",
      unitLabel: "Meter Persegi (m²)",
      iconName: "roofing",
    },
    {
      id: "curtain-wall",
      name: "Curtain Wall Fasad",
      subtitle: "Mullion transom 50x150",
      base: 1850000,
      unit: "m2",
      unitLabel: "Meter Persegi (m²)",
      iconName: "apartment",
    },
    {
      id: "railing-kaca",
      name: "Railing Kaca Balkon",
      subtitle: "Spigot stainless / u-channel",
      base: 1150000,
      unit: "m1",
      unitLabel: "Meter Lari (m1)",
      iconName: "deck",
    },
    {
      id: "folding-door",
      name: "Pintu Lipat Folding",
      subtitle: "Heavy duty track multi-daun",
      base: 1250000,
      unit: "m2",
      unitLabel: "Meter Persegi (m²)",
      iconName: "view_week",
    },
  ];

  const brandTiers: BrandTier[] = [
    {
      id: "ykk",
      name: "YKK AP Indonesia",
      tier: "Jepang Lisensi Premium",
      desc: "Presisi tinggi, anodized tebal 10-18µm, kekedapan maksimal.",
      mult: 1.38,
      classTag: "Tingkat Kelas: Grade A+",
    },
    {
      id: "alexindo",
      name: "Alexindo Original",
      tier: "Standard Proyek Nasional",
      desc: "Kekakuan optimal, pilihan powder coating lengkap, paling populer.",
      mult: 1.15,
      classTag: "Tingkat Kelas: Grade A",
    },
    {
      id: "inkalum",
      name: "Inkalum / Dacon",
      tier: "Efisiensi Ekonomis",
      desc: "Ekonomis terjangkau untuk hunian sewa, ruko, & partisi non-beban.",
      mult: 1.0,
      classTag: "Tingkat Kelas: Grade B Standar",
    },
  ];

  const glassSpecs: GlassSpec[] = [
    { id: "polos5", name: "Polos 5mm", sub: "Float Glass Biasa", cost: 185000 },
    { id: "temp8", name: "Tempered 8mm", sub: "Kaca Safety Standar", cost: 365000 },
    { id: "temp10", name: "Tempered 10mm", sub: "Partisi & Shower", cost: 490000 },
    { id: "temp12", name: "Tempered 12mm", sub: "Frameless Heavy", cost: 630000 },
    { id: "laminated", name: "Laminated Safety", sub: "5+0.38+5 PVB", cost: 870000 },
  ];

  // State
  const [selectedJob, setSelectedJob] = useState<JobType>(jobTypes[0]);
  const [selectedBrand, setSelectedBrand] = useState<BrandTier>(brandTiers[0]);
  const [selectedGlass, setSelectedGlass] = useState<GlassSpec>(glassSpecs[1]);
  const [panjang, setPanjang] = useState<number>(4.5);
  const [tinggi, setTinggi] = useState<number>(2.8);
  const [includeSealant, setIncludeSealant] = useState<boolean>(true);
  const [includeHardware, setIncludeHardware] = useState<boolean>(true);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculations
  const volume = selectedJob.unit === "m1" ? (panjang * 2) + (tinggi * 2) : panjang * tinggi;
  const rateBase = (selectedJob.base * selectedBrand.mult) + selectedGlass.cost;
  const extraSealant = includeSealant ? 35000 : 0;
  const extraHardware = includeHardware ? 65000 : 0;
  const totalPerUnit = rateBase + extraSealant + extraHardware;
  const totalMin = Math.round(volume * totalPerUnit);
  const totalMax = Math.round(totalMin * 1.18);

  const formatRupiah = (num: number) => {
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const getWaUrl = () => {
    const accList = [];
    if (includeSealant) accList.push("Sealant Netral Anti-Bocor");
    if (includeHardware) accList.push("Hardware Premium (Dekkson/Kinlong)");
    const accString = accList.length > 0 ? accList.join(", ") : "Material Saja";

    const msg =
      `Halo Tim CV Azka Mandiri, saya ingin konsultasi estimasi proyek:\n` +
      `- Kategori Pekerjaan: ${selectedJob.name}\n` +
      `- Brand Aluminium: ${selectedBrand.name}\n` +
      `- Spesifikasi Kaca: ${selectedGlass.name}\n` +
      `- Dimensi: ${panjang}m x ${tinggi}m (${volume.toFixed(2)} ${selectedJob.unit})\n` +
      `- Paket Tambahan: ${accString}\n` +
      `- Estimasi RAB Kalkulator: Rp ${formatRupiah(totalMin)} - Rp ${formatRupiah(totalMax)}\n\n` +
      `Mohon info ketersediaan survei lokasi dan diskon volume. Terima kasih!`;

    return `https://wa.me/6281932735383?text=${encodeURIComponent(msg)}`;
  };

  const faqs = [
    {
      q: "Apakah angka hasil estimasi kalkulator ini sudah mengikat?",
      a: "Angka kalkulator merupakan taksiran awal (RAB estimasi ±8%) untuk membantu perencanaan anggaran Anda. Nilai penawaran resmi (Surat Penawaran Harga / SPH) yang mengikat akan diterbitkan setelah survei fisik lokasi dan pengukuran laser presisi oleh tim teknisi kami.",
    },
    {
      q: "Berapa lama waktu proses survei pengukuran dan pembuatan shop drawing?",
      a: "Untuk wilayah Jabodetabek, tim teknisi kami dapat melakukan survei lokasi dalam 1x24 jam setelah reservasi. Gambar kerja teknis 2D/3D (Shop Drawing) beserta rincian volume Bill of Quantities (BQ) siap dalam 2-3 hari kerja.",
    },
    {
      q: "Apakah CV Azka Mandiri melayani proyek di luar Jabodetabek?",
      a: "Ya, kami melayani proyek komersial dan residensial di seluruh Indonesia (Bandung, Surabaya, Semarang, Bali, Medan, Balikpapan, dll.) dengan sistem pengemasan peti kayu kargo khusus bergaransi bebas pecah.",
    },
    {
      q: "Apa saja cakupan garansi 1-3 tahun yang diberikan?",
      a: "Garansi kami mencakup kebocoran rembesan air pada sambungan silikon sealant, kelurusan dan kekakuan rangka aluminium, fungsionalitas engsel/roller pintu sliding, serta keaslian sertifikasi material pabrikan.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Context Sub-Hero Banner */}
      <section className="w-full bg-[#131b2e] text-[#eff1f3] py-12 px-5 lg:px-10 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#d3e4fe]/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-[#d3e4fe] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Modul Kalkulasi RAB Instan & Layanan Tender</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Kalkulator Estimasi Presisi & Konsultasi Fabrikasi
              </h1>
              <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
                Dapatkan taksiran biaya fabrikasi aluminium arsitektural dan glazing fasad secara transparan. Sesuaikan spesifikasi profil, kaca struktural, hingga aksesoris untuk perencanaan anggaran Anda.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl flex items-center gap-3 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-[#ffdcc3]" />
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#bec6e0]">Status Garansi</div>
                  <div className="text-xs font-bold text-white">Garansi Kebocoran 12 Bulan</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl flex items-center gap-3 border border-white/10">
                <Zap className="w-6 h-6 text-[#ffdcc3]" />
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#bec6e0]">Survei Lapangan</div>
                  <div className="text-xs font-bold text-white">Gratis Area Jabodetabek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculation Workspace */}
      <section className="w-full py-12 px-5 lg:px-10 bg-[#f7f9fb]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Form Step Controls (Left Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-[#e0e3e5] space-y-8">
                {/* Step Header Indicator */}
                <div className="flex items-center justify-between pb-2 bg-[#f2f4f6] px-4 py-2.5 rounded-xl border border-[#e0e3e5]">
                  <span className="text-xs font-bold text-[#505f76] uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c76c00]"></span>
                    Konfigurator Spesifikasi Material
                  </span>
                  <span className="text-xs font-semibold text-[#191c1e]">Toleransi Akurasi Estimasi ±8%</span>
                </div>

                {/* Step 1: Work Type Selection */}
                <div className="space-y-3">
                  <label className="block text-base sm:text-lg font-bold text-[#191c1e]">
                    1. Pilih Kategori & Sistem Pekerjaan
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {jobTypes.map((job) => {
                      const isSelected = selectedJob.id === job.id;
                      return (
                        <button
                          key={job.id}
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className={`text-left p-4 rounded-xl transition-all flex flex-col justify-between h-28 border ${
                            isSelected
                              ? "bg-[#131b2e] text-white border-black shadow-md"
                              : "bg-[#f2f4f6] hover:bg-[#eceef0] text-[#191c1e] border-[#e0e3e5]"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="material-symbols-outlined text-[24px]">
                              {job.iconName}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                                isSelected ? "bg-white/20 text-white" : "bg-[#e0e3e5] text-[#505f76]"
                              }`}
                            >
                              {job.unit}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm">{job.name}</div>
                            <div
                              className={`text-[11px] truncate ${
                                isSelected ? "text-[#d3e4fe]" : "text-[#505f76]"
                              }`}
                            >
                              {job.subtitle}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Aluminium Brand Tier */}
                <div className="space-y-3">
                  <label className="block text-base sm:text-lg font-bold text-[#191c1e]">
                    2. Pilih Brand & Grade Profil Aluminium
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {brandTiers.map((brand) => {
                      const isSelected = selectedBrand.id === brand.id;
                      return (
                        <button
                          key={brand.id}
                          type="button"
                          onClick={() => setSelectedBrand(brand)}
                          className={`text-left p-4 rounded-xl transition-all border ${
                            isSelected
                              ? "bg-[#131b2e] text-white border-black shadow-md"
                              : "bg-[#f2f4f6] hover:bg-[#eceef0] text-[#191c1e] border-[#e0e3e5]"
                          }`}
                        >
                          <div
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isSelected ? "text-[#ffdcc3]" : "text-[#505f76]"
                            }`}
                          >
                            {brand.tier}
                          </div>
                          <div className="font-bold text-sm sm:text-base mt-1">{brand.name}</div>
                          <div
                            className={`text-xs mt-1 leading-relaxed ${
                              isSelected ? "text-[#bec6e0]" : "text-[#45464d]"
                            }`}
                          >
                            {brand.desc}
                          </div>
                          <div
                            className={`mt-3 text-xs font-semibold ${
                              isSelected ? "text-[#d3e4fe]" : "text-[#505f76]"
                            }`}
                          >
                            {brand.classTag}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Glass Specifications */}
                <div className="space-y-3">
                  <label className="block text-base sm:text-lg font-bold text-[#191c1e]">
                    3. Tipe & Ketebalan Kaca Glazing
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {glassSpecs.map((g) => {
                      const isSelected = selectedGlass.id === g.id;
                      return (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setSelectedGlass(g)}
                          className={`p-3 rounded-xl text-center transition-all border ${
                            isSelected
                              ? "bg-[#131b2e] text-white border-black shadow-md"
                              : "bg-[#f2f4f6] hover:bg-[#eceef0] text-[#191c1e] border-[#e0e3e5]"
                          }`}
                        >
                          <div className="font-bold text-xs">{g.name}</div>
                          <div
                            className={`text-[10px] mt-0.5 ${
                              isSelected ? "text-[#ffdcc3]" : "text-[#505f76]"
                            }`}
                          >
                            {g.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Dimension & Volume Input */}
                <div className="space-y-4 bg-[#f2f4f6] p-5 rounded-xl border border-[#e0e3e5]">
                  <div className="flex items-center justify-between">
                    <label className="block text-base font-bold text-[#191c1e]">
                      4. Masukkan Perkiraan Volume / Dimensi
                    </label>
                    <span className="text-xs font-bold bg-[#d0e1fb] text-[#0b1c30] px-3 py-1 rounded-lg">
                      Satuan: {selectedJob.unitLabel}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-[#45464d]">
                        <span>Panjang / Lebar Bentang (Meter)</span>
                        <span className="font-bold text-[#191c1e]">{panjang.toFixed(1)} m</span>
                      </div>
                      <input
                        type="range"
                        min="1.0"
                        max="40.0"
                        step="0.5"
                        value={panjang}
                        onChange={(e) => setPanjang(parseFloat(e.target.value))}
                        className="w-full accent-black h-2 bg-[#d8dadc] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-[#505f76] mt-1 font-semibold">
                        <span>1.0 Meter</span>
                        <span>Skala Proyek sd 40 Meter</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-[#45464d]">
                        <span>Tinggi Pekerjaan (Meter)</span>
                        <span className="font-bold text-[#191c1e]">{tinggi.toFixed(1)} m</span>
                      </div>
                      <input
                        type="range"
                        min="0.8"
                        max="15.0"
                        step="0.2"
                        value={tinggi}
                        onChange={(e) => setTinggi(parseFloat(e.target.value))}
                        className="w-full accent-black h-2 bg-[#d8dadc] rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-[#505f76] mt-1 font-semibold">
                        <span>0.8 Meter</span>
                        <span>Maks Fasad 15.0 Meter</span>
                      </div>
                    </div>
                  </div>

                  {/* Accessories & Installation Package Switchers */}
                  <div className="pt-4 border-t border-[#e0e3e5] flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#191c1e]">
                      <input
                        type="checkbox"
                        checked={includeSealant}
                        onChange={(e) => setIncludeSealant(e.target.checked)}
                        className="w-4 h-4 accent-black rounded"
                      />
                      <span>Termasuk Neutral Silicone Sealant Anti-Jamur & Bocor (+35rb/u)</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#191c1e]">
                      <input
                        type="checkbox"
                        checked={includeHardware}
                        onChange={(e) => setIncludeHardware(e.target.checked)}
                        className="w-4 h-4 accent-black rounded"
                      />
                      <span>Hardware Aksesoris Premium (Dekkson / Kinlong) (+65rb/u)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Production Capability Quick Specs Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-[#505f76] text-[24px]">straighten</span>
                  <div className="text-base font-bold text-[#191c1e] mt-1">± 0.5 mm</div>
                  <div className="text-[10px] font-bold uppercase text-[#505f76]">Presisi Mitre Saw CNC</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-[#505f76] text-[24px]">shield_with_heart</span>
                  <div className="text-base font-bold text-[#191c1e] mt-1">100% SNI</div>
                  <div className="text-[10px] font-bold uppercase text-[#505f76]">Billet Asli Murni</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-[#505f76] text-[24px]">water_drop</span>
                  <div className="text-base font-bold text-[#191c1e] mt-1">IP65 EPDM</div>
                  <div className="text-[10px] font-bold uppercase text-[#505f76]">Karet Gasket Ganda</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-[#505f76] text-[24px]">hourglass_top</span>
                  <div className="text-base font-bold text-[#191c1e] mt-1">5 - 10 Hari</div>
                  <div className="text-[10px] font-bold uppercase text-[#505f76]">Rata Waktu Fabrikasi</div>
                </div>
              </div>
            </div>

            {/* Real-Time Output RAB Card (Right Col 5 - Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#e0e3e5] space-y-6">
                <div className="flex items-center justify-between pb-2 bg-[#f2f4f6] px-4 py-2.5 rounded-xl border border-[#e0e3e5]">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#505f76]">
                    <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                    <span>Ringkasan Estimasi Budget RAB</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black text-white">
                    LIVE CALC
                  </span>
                </div>

                {/* Price Range Output */}
                <div className="bg-[#f7f9fb] p-5 rounded-2xl border border-[#e0e3e5] space-y-1">
                  <div className="text-[11px] font-bold text-[#505f76] uppercase tracking-wider">
                    Perkiraan Rentang Biaya Total Fabrikasi & Pasang
                  </div>
                  <div className="flex items-baseline gap-2 flex-wrap pt-1">
                    <span className="text-base font-bold text-[#191c1e]">Rp</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
                      {formatRupiah(totalMin)}
                    </span>
                    <span className="text-base font-bold text-[#505f76]">—</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#c76c00]">
                      {formatRupiah(totalMax)}
                    </span>
                  </div>
                  <p className="text-xs text-[#505f76] pt-2">
                    *Sudah termasuk material profil, pemotongan presisi workshop, kaca safety, perakitan, dan ongkos teknisi spesialis.
                  </p>
                </div>

                {/* Live Calculation Breakdown Table */}
                <div className="space-y-2 text-xs">
                  <div className="text-[10px] font-bold text-[#505f76] uppercase tracking-wider">
                    Rincian Parameter Terpilih:
                  </div>
                  <div className="flex justify-between py-1.5 bg-[#f2f4f6] px-3 rounded-lg">
                    <span className="text-[#505f76]">Sistem Pekerjaan:</span>
                    <span className="font-bold text-[#191c1e]">{selectedJob.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 px-3">
                    <span className="text-[#505f76]">Brand & Profil:</span>
                    <span className="font-bold text-[#191c1e]">{selectedBrand.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 bg-[#f2f4f6] px-3 rounded-lg">
                    <span className="text-[#505f76]">Spesifikasi Kaca:</span>
                    <span className="font-bold text-[#191c1e]">{selectedGlass.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 px-3">
                    <span className="text-[#505f76]">Total Volume Hitung:</span>
                    <span className="font-bold text-[#191c1e]">
                      {volume.toFixed(2)} {selectedJob.unit}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 bg-[#f2f4f6] px-3 rounded-lg">
                    <span className="text-[#505f76]">Aksesoris & Sealant:</span>
                    <span className="font-bold text-[#191c1e]">
                      {includeSealant && includeHardware
                        ? "Lengkap (Sealant + Dekkson)"
                        : includeSealant
                        ? "Termasuk Sealant"
                        : includeHardware
                        ? "Termasuk Hardware"
                        : "Hanya Material"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-3">
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Kirim Hasil Estimasi ke WhatsApp Marketing</span>
                  </a>

                  <a
                    href="#upload-section"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#e0e3e5]"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Punya Gambar Arsitek? Minta BQ Detail Gratis</span>
                  </a>
                </div>

                <div className="bg-[#eceef0] p-3 rounded-xl flex items-start gap-2 border border-[#e0e3e5]">
                  <Info className="w-4 h-4 text-[#505f76] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#45464d] leading-relaxed">
                    Penawaran resmi (Surat Penawaran Harga / SPH) dengan lampiran shop drawing teknis akan diterbitkan setelah verifikasi tim estimator kami.
                  </p>
                </div>
              </div>

              {/* Emergency Service Callout */}
              <div className="bg-[#131b2e] text-white p-4 rounded-2xl flex items-center justify-between border border-white/10 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-[#ffdcc3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Teknisi Darurat Kebocoran</div>
                    <div className="text-[11px] text-[#bec6e0]">Layanan sealing curtain wall & servis pintu</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/6281932735383?text=Halo%20CV%20Azka%20Mandiri,%20butuh%20layanan%20darurat%20kebocoran%20kaca%20atau%20pintu%20macet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white text-[#191c1e] text-[11px] font-bold hover:bg-[#f2f4f6] transition-colors"
                >
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Drawing Upload & Survey Booking Section */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f2f4f6] border-y border-[#e0e3e5]" id="upload-section">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xs border border-[#e0e3e5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-[#c76c00] tracking-wider">
                  <UploadCloud className="w-4 h-4" />
                  <span>Layanan Tender & Konsultasi Proyek</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">
                  Kirim Berkas Desain / Jadwalkan Survei Lapangan
                </h2>
                <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                  Unggah file gambar kerja (CAD/DWG, PDF denah arsitek, atau sketsa corat-coret tangan). Tim estimator kami akan menyusun Bill of Quantities (BQ) dan perhitungan beban angin (*wind load calculation*) secara akurat tanpa dipungut biaya.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#191c1e] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
                    <span>Perhitungan RAB transparan per meter lari & meter persegi</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#191c1e] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
                    <span>Penyusunan potongan profil kusen (Shop Drawing)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#191c1e] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#c76c00]" />
                    <span>Tim teknis pengukuran siap hadir ke lokasi proyek</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f2f4f6] flex items-center justify-between border border-[#e0e3e5]">
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#505f76]">Legalitas Resmi</div>
                    <div className="text-xs font-bold text-[#191c1e]">NIB: 9120019283741 | PKP Ready</div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-[#c76c00]" />
                </div>
              </div>

              {/* Form Area */}
              <div className="lg:col-span-7 bg-[#f7f9fb] p-6 sm:p-8 rounded-2xl border border-[#e0e3e5]">
                {formSubmitted ? (
                  <div className="p-8 text-center space-y-3 bg-white rounded-xl border border-[#e0e3e5]">
                    <div className="w-12 h-12 rounded-full bg-[#d3e4fe] text-[#0b1c30] flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-[#c76c00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#191c1e]">Permintaan Berhasil Terkirim!</h3>
                    <p className="text-xs text-[#45464d] max-w-md mx-auto leading-relaxed">
                      Terima kasih. Permintaan konsultasi & berkas desain Anda telah diteruskan ke Tim Estimator CV Azka Mandiri. Kami akan menghubungi Anda dalam waktu 1x24 jam kerja.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg"
                    >
                      Kirim Permintaan Lain
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#191c1e] mb-1">
                          Nama Lengkap / Instansi
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Bpk. Hendra / PT Bangun Maju"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#191c1e] mb-1">
                          Nomor WhatsApp Aktif
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="0812-XXXX-XXXX"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#191c1e] mb-1">
                          Lokasi Proyek
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Contoh: PIK 2, Tangerang / Jakarta"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#191c1e] mb-1">
                          Rencana Jadwal Survei Lapangan
                        </label>
                        <input
                          type="date"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Catatan Kebutuhan & Spesifikasi Proyek
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Contoh: Butuh partisi frameless kaca 12mm 4 ruangan + kusen Alexindo 4 inch hitam doff untuk rumah 2 lantai."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00]"
                      ></textarea>
                    </div>

                    <div className="p-3 border border-dashed border-[#c6c6cd] rounded-xl bg-white text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <UploadCloud className="w-5 h-5 text-[#505f76]" />
                        <span className="text-xs font-bold text-[#191c1e]">
                          Lampirkan File PDF / DWG / Foto Denah (Opsional)
                        </span>
                        <span className="text-[10px] text-[#505f76]">
                          Maksimal 25MB (PDF, DWG, DXF, PNG, JPG)
                        </span>
                        <input type="file" className="text-[10px] text-[#505f76] mt-1" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-black hover:bg-[#131b2e] text-white text-xs font-bold shadow-md transition-colors"
                    >
                      Kirim Permintaan Konsultasi & Jadwal Survei
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-16 px-5 lg:px-10 bg-white">
        <div className="max-w-[860px] mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-bold uppercase text-[#c76c00] tracking-wider">
              Pusat Bantuan & Edukasi Teknis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
              Pertanyaan Umum Seputar Biaya & Fabrikasi
            </h2>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#191c1e] flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#505f76] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-[#45464d] leading-relaxed border-t border-[#e0e3e5]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
