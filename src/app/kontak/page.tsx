"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  UploadCloud,
  FileText,
  ShieldCheck,
  Send,
  Building2,
  Download,
  ExternalLink
} from "lucide-react";

export default function KontakPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneDisplay = "+62 819-3273-5383";
  const phoneRaw = "6281932735383";
  const email = "azkamandiri@gmail.com";
  const addressFull = "Jl. Pondok Serut, Paku Jaya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15220";
  const mapsUrl = "https://maps.google.com/?q=Jl.+Pondok+Serut,+Paku+Jaya,+Kec.+Serpong+Utara,+Kota+Tangerang+Selatan,+Banten+15220";

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="w-full bg-[#131b2e] text-[#eff1f3] py-14 px-5 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid" />
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdcc3] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c76c00] animate-pulse"></span>
              <span>Hubungi Tim Estimator & Fabrikasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Konsultasi Proyek & Penawaran Tender
            </h1>
            <p className="text-sm sm:text-base text-[#bec6e0] leading-relaxed">
              Jadwalkan survei pengukuran lapangan gratis atau kirimkan berkas gambar arsitektur Anda untuk penyusunan Bill of Quantities (BQ) dan Surat Penawaran Harga (SPH).
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="w-full py-16 px-5 lg:px-10 bg-[#f7f9fb]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Channels Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e0e3e5] shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-[#191c1e]">Saluran Komunikasi Langsung</h2>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${phoneRaw}?text=Halo%20CV%20Aska%20Mandiri,%20saya%20ingin%20konsultasi%20proyek`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors border border-[#e0e3e5] group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#505f76]">
                        WhatsApp Project Desk (Respon Cepat)
                      </div>
                      <div className="text-sm font-bold text-[#191c1e] mt-0.5 group-hover:text-[#c76c00] transition-colors">
                        {phoneDisplay}
                      </div>
                      <div className="text-xs text-[#505f76] mt-0.5">Online Senin - Sabtu (08.00 - 18.00 WIB)</div>
                    </div>
                  </a>

                  {/* Hotline */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f7f9fb] border border-[#e0e3e5]">
                    <div className="w-10 h-10 rounded-xl bg-[#131b2e] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-5 h-5 text-[#ffdcc3]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#505f76]">
                        Hotline Telepon Workshop
                      </div>
                      <div className="text-sm font-bold text-[#191c1e] mt-0.5">
                        <a href={`tel:+${phoneRaw}`} className="hover:text-[#c76c00]">
                          {phoneDisplay}
                        </a>
                      </div>
                      <div className="text-xs text-[#505f76] mt-0.5">Layanan sambungan teknisi & estimator</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f7f9fb] border border-[#e0e3e5]">
                    <div className="w-10 h-10 rounded-xl bg-[#131b2e] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5 text-[#ffdcc3]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#505f76]">
                        Email Pengiriman Berkas Tender
                      </div>
                      <div className="text-sm font-bold text-[#191c1e] mt-0.5">
                        <a href={`mailto:${email}`} className="hover:text-[#c76c00]">
                          {email}
                        </a>
                      </div>
                      <div className="text-xs text-[#505f76] mt-0.5">Respon dokumen tender 1x24 jam</div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f7f9fb] border border-[#e0e3e5]">
                    <div className="w-10 h-10 rounded-xl bg-[#131b2e] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5 text-[#ffdcc3]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#505f76]">
                        Pusat Workshop & Fabrikasi
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#191c1e] mt-0.5 leading-relaxed">
                        {addressFull}
                      </div>
                      <div className="text-xs text-[#505f76] mt-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e0e3e5] flex flex-col gap-2">
                  <a
                    href="/katalog-profil-aska-mandiri.pdf"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Profil Perusahaan CV Aska Mandiri PDF siap diunduh.");
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e] font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-[#e0e3e5]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh Company Profile & Spesifikasi PDF</span>
                  </a>
                </div>
              </div>

              {/* Map embed / card */}
              <div className="bg-white p-5 rounded-2xl border border-[#e0e3e5] shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#191c1e]">
                  <span>Peta Lokasi Google Maps</span>
                  <span className="text-[10px] text-[#505f76] uppercase">Paku Jaya, Serpong Utara</span>
                </div>
                <div className="w-full h-56 rounded-xl bg-[#e0e3e5] overflow-hidden relative flex items-center justify-center border border-[#e0e3e5]">
                  <iframe
                    title="Google Maps Lokasi CV Aska Mandiri"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.044199676839!2d106.6853!3d-6.2422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa0332851167%3A0xc03f1eaecbf0a394!2sPaku%20Jaya%2C%20Serpong%20Utara%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-[#e0e3e5]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#ba1a1a]" />
                  <span>Buka di Aplikasi Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Right: Tender & Survey Booking Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#e0e3e5] shadow-xs space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c76c00]">
                  Formulir Permintaan Penawaran
                </span>
                <h2 className="text-2xl font-bold text-[#191c1e] mt-1">
                  Kirim Data Proyek / Jadwalkan Survei Lokasi
                </h2>
                <p className="text-xs sm:text-sm text-[#45464d] mt-1 leading-relaxed">
                  Isi detail proyek Anda di bawah ini. Tim estimator engineering kami akan mempelajari spesifikasi teknis dan segera mengirimkan rincian penawaran biaya resmi.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-3 bg-[#f7f9fb] rounded-2xl border border-[#e0e3e5]">
                  <div className="w-12 h-12 rounded-full bg-[#d0e1fb] text-[#0b1c30] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#c76c00]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#191c1e]">Pesan Tender Berhasil Terkirim!</h3>
                  <p className="text-xs text-[#45464d] max-w-md mx-auto leading-relaxed">
                    Terima kasih. Permintaan survei & konsultasi proyek Anda telah diterima tim CV Aska Mandiri. Kami akan mengonfirmasi via WhatsApp dalam 1x24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg"
                  >
                    Kirim Form Lain
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
                        Nama Lengkap / PIC Proyek *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Contoh: Bpk. Bambang Gunawan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Nama Perusahaan / Instansi (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Megatama Karya"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder={phoneDisplay}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Alamat Email (Opsional)
                      </label>
                      <input
                        type="email"
                        placeholder={email}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Lokasi Proyek *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Contoh: Serpong, Tangerang Selatan / Jakarta"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#191c1e] mb-1">
                        Kategori Pekerjaan *
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                      >
                        <option>Curtain Wall & Fasad Gedung</option>
                        <option>Kusen, Pintu & Jendela Aluminium</option>
                        <option>Partisi Kaca Kantor (Tempered)</option>
                        <option>Kanopi Kaca Spider & Railing</option>
                        <option>ACP Cladding Gedung / Ruko</option>
                        <option>Pekerjaan Campuran / Tender Keseluruhan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#191c1e] mb-1">
                      Deskripsi Kebutuhan & Spesifikasi Detail
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan kebutuhan volume estimasi, tipe profil aluminium yang diinginkan (YKK/Alexindo), jenis kaca, atau jadwal tenggat tender..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5] text-xs text-[#191c1e] outline-none focus:border-[#c76c00] focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  <div className="p-4 border border-dashed border-[#c6c6cd] rounded-xl bg-[#f7f9fb] text-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <UploadCloud className="w-5 h-5 text-[#505f76]" />
                      <span className="text-xs font-bold text-[#191c1e]">
                        Unggah Berkas Gambar CAD / PDF Denah (Opsional)
                      </span>
                      <span className="text-[10px] text-[#505f76]">
                        Maks. 25 MB (.pdf, .dwg, .dxf, .zip, .jpg)
                      </span>
                      <input type="file" className="text-[10px] text-[#505f76] mt-1" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0f172a] hover:bg-black text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#ffdcc3]" />
                    <span>Kirim Berkas Tender & Jadwalkan Survei</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
