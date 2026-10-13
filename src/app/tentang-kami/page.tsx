import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Factory,
  Compass,
  FileCheck2,
  Users,
  Wrench,
  ArrowRight,
  Building2,
  Layers,
  Scale
} from "lucide-react";

export const metadata = {
  title: "Tentang Kami - CV Azka Mandiri | Spesialis Fabrikasi Aluminium & Kaca",
  description:
    "Mengenal CV Azka Mandiri: Kontraktor fabrikasi aluminium arsitektural dan kaca struktural terkemuka di Indonesia dengan filosofi presisi industri dan komitmen mutu.",
};

export default function TentangKamiPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="w-full bg-[#131b2e] text-[#eff1f3] py-16 px-5 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid" />
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#ffdcc3] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c76c00] animate-pulse"></span>
              <span>Arsitektur Presisi Mandiri • Sejak 2010</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Dedikasi Pada Presisi Fabrikasi & Ketahanan Struktural
            </h1>
            <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
              CV Azka Mandiri adalah produsen dan kontraktor spesialis aluminium arsitektural, kaca fasad (*curtain wall*), jendela, dan pintu premium di Indonesia yang berakar pada ketelitian rekayasa teknik (*precision engineering*).
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f7f9fb]">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
              Filosofi Perusahaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e] mt-1">
              Tiga Pilar Mutu CV Azka Mandiri
            </h2>
            <p className="text-xs sm:text-sm text-[#45464d] mt-2 leading-relaxed">
              Setiap potongan profil ekstrusi aluminium dan panel kaca yang keluar dari workshop kami dirancang untuk melampaui ekspektasi teknis konsultan arsitektur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#e0e3e5] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#ffdcc3] flex items-center justify-center font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#191c1e]">Ketelitian Fabrikasi (Precision Engineering)</h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                Pemotongan sudut mitre-joint menggunakan mesin digital berakurasi tinggi dengan deviasi toleransi &lt; 0.5 mm, memastikan adu manis sempurna dan kekedapan air tanpa rembesan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#e0e3e5] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#ffdcc3] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#191c1e]">Keanggunan Arsitektural (Architectural Sophistication)</h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                Desain minimalis modern dengan bentang kaca ultra-lebar, profil ramping (*slim profile*), dan pilihan finishing powder coating bertekstur elegan yang mengangkat nilai estetika properti.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-[#e0e3e5] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#ffdcc3] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#191c1e]">Ketahanan Struktural (Industrial Permanence)</h3>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                Kepatuhan mutlak pada standar uji beban angin SNI dan ASTM, penggunaan alloy aluminium 6063-T5/T6 murni, serta sealant struktural tahan radiasi UV bersertifikat resmi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & Machine Capabilities */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f2f4f6] border-y border-[#e0e3e5]">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                Fasilitas & Kapasitas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
                Workshop Sentral & Peralatan Industri Mutakhir
              </h2>
              <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
                Berlokasi di kawasan pergudangan industri Jabodetabek, fasilitas workshop kami seluas 2.400 m² mampu memproduksi lebih dari 3.800 m² rakitan kusen, curtain wall, dan kaca tempered setiap bulannya.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c76c00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#191c1e]">Double Head Mitre Saw Digital:</strong>
                    <span className="text-[#45464d]"> Pemotongan presisi sudut 45° & 90° profil aluminium tebal hingga 2.5mm.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c76c00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#191c1e]">Copy Router & Punching Press Tooling:</strong>
                    <span className="text-[#45464d]"> Pembuatan lubang kunci, lubang drainase air, dan slot aksesoris berpresisi milimeter.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c76c00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#191c1e]">Lifting Suction Pad Heavy Duty:</strong>
                    <span className="text-[#45464d]"> Penanganan kaca jumbo-size hingga 500 kg per panel dengan jaminan keselamatan kerja.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e0e3e5] shadow-xs space-y-6">
                <h3 className="font-bold text-base text-[#191c1e]">Legalitas & Sertifikasi Badan Usaha</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">Nama Perusahaan:</span>
                    <span className="font-bold text-[#191c1e]">CV AZKA MANDIRI</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">Nomor Induk Berusaha (NIB):</span>
                    <span className="font-bold text-[#191c1e]">9120004821901</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">Surat Izin Usaha Perdagangan (SIUP):</span>
                    <span className="font-bold text-[#191c1e]">503/089/PK/BPMPTSP</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">Status Perpajakan:</span>
                    <span className="font-bold text-[#191c1e]">Pengusaha Kena Pajak (PKP) Resmi</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#e0e3e5]">
                    <span className="text-[#505f76]">Kepatuhan Standar Mutu:</span>
                    <span className="font-bold text-[#191c1e]">SNI 07-0603-1989 & ASTM E330</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/kontak"
                    className="w-full py-2.5 px-4 rounded-xl bg-black hover:bg-[#131b2e] text-white text-xs font-bold text-center block transition-colors"
                  >
                    Minta Salinan Company Profile & Legalitas Lengkap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="w-full py-16 px-5 lg:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
              Segmen Klien Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">
              Mitra Terpercaya Bagi Praktisi Konstruksi & Pemilik Properti
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5]">
              <div className="text-base font-bold text-[#191c1e] mb-1">Arsitek & Desainer</div>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Penerjemahan konsep visual menjadi gambar kerja nyata tanpa kompromi estetika garis profil.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5]">
              <div className="text-base font-bold text-[#191c1e] mb-1">Kontraktor Utama</div>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Kepatuhan jadwal kurva S, sertifikasi K3 bekerja di ketinggian, dan BAST tepat waktu.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5]">
              <div className="text-base font-bold text-[#191c1e] mb-1">Pengembang Properti</div>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Kapasitas fabrikasi massal dengan jaminan konsistensi mutu pada proyek residensial & ruko.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5]">
              <div className="text-base font-bold text-[#191c1e] mb-1">Pemilik Residensial</div>
              <p className="text-xs text-[#45464d] leading-relaxed">
                Pelayanan personal dari survei lapangan gratis, konsultasi spesifikasi, hingga garansi kebocoran.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
