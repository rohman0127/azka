"use client";

import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  Download, 
  MessageSquare, 
  ShieldCheck, 
  CheckSquare, 
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  const phoneDisplay = "+62 819-3273-5383";
  const phoneRaw = "6281932735383";
  const email = "azkamandiri@gmail.com";
  const addressFull = "Jl. Pondok Serut, Paku Jaya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15220";
  const mapsUrl = "https://maps.google.com/?q=Jl.+Pondok+Serut,+Paku+Jaya,+Kec.+Serpong+Utara,+Kota+Tangerang+Selatan,+Banten+15220";

  return (
    <footer className="w-full bg-[#f2f4f6] text-[#191c1e] border-t border-[#e0e3e5]">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Identity & Legal */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex flex-col items-center justify-center text-white font-extrabold text-base shadow-sm border border-slate-700">
                <span className="tracking-tighter">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-[#191c1e]">
                  CV AZKA MANDIRI
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#505f76] uppercase">
                  Aluminium & Architectural Glazing
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed">
              Kontraktor spesialis fabrikasi aluminium arsitektural, kaca tempered/laminated, curtain wall, partisi kantor, serta kusen pintu dan jendela presisi tinggi untuk komersial maupun residensial prestisius di Indonesia.
            </p>

            <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-[#c6c6cd]/50 text-xs text-[#505f76]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c76c00] shrink-0" />
                <span>NIB: 9120004821901 | SIUP: 503/089/PK/BPMPTSP | PKP Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#505f76] shrink-0" />
                <span>Standar Mutu & Uji Beban Angin SNI / ASTM Terstandarisasi</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">Navigasi Utama</h4>
            <nav className="flex flex-col gap-2 text-xs sm:text-sm">
              <Link href="/" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Beranda
              </Link>
              <Link href="/tentang-kami" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Tentang Perusahaan
              </Link>
              <Link href="/produk-layanan" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Sistem & Produk
              </Link>
              <Link href="/portofolio" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Portofolio Fasad
              </Link>
              <Link href="/kalkulator" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Kalkulator RAB
              </Link>
              <Link href="/kontak" className="text-[#45464d] hover:text-[#191c1e] transition-colors">
                Kontak & Alamat
              </Link>
            </nav>
          </div>

          {/* Col 3: Workshop Details & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">Pusat Fabrikasi & Workshop</h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#45464d]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c76c00] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{addressFull}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#505f76] shrink-0" />
                <a href={`tel:+${phoneRaw}`} className="font-bold text-[#191c1e] hover:text-[#c76c00]">
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#505f76] shrink-0" />
                <a href={`mailto:${email}`} className="text-[#191c1e] hover:text-[#c76c00]">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#505f76] shrink-0" />
                <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <a
                href="/katalog-profil-azka-mandiri.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Katalog CV Azka Mandiri PDF sedang disiapkan untuk pengunduhan.");
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#e6e8ea] text-[#191c1e] hover:bg-[#e0e3e5] transition-colors text-xs font-semibold cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Profil Perusahaan & Katalog PDF</span>
              </a>
              <a
                href={`https://wa.me/${phoneRaw}?text=Halo%20CV%20Azka%20Mandiri,%20saya%20ingin%20konsultasi%20proyek`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Project Desk: {phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Map Preview (Paku Jaya, Serpong Utara, Tangsel) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">Lokasi Google Maps</h4>
            <div className="w-full h-44 rounded-xl bg-[#e0e3e5] relative overflow-hidden flex flex-col justify-end p-2.5 shadow-inner border border-[#c6c6cd]/50">
              <iframe
                title="Google Maps Lokasi CV Azka Mandiri"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.044199676839!2d106.6853!3d-6.2422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa0332851167%3A0xc03f1eaecbf0a394!2sPaku%20Jaya%2C%20Serpong%20Utara%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 w-full text-center py-2 bg-white/95 backdrop-blur-sm text-[#191c1e] text-xs font-bold rounded-lg hover:bg-white transition-colors shadow-sm flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ba1a1a]" />
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
            <p className="text-[11px] text-[#505f76]">
              Paku Jaya, Serpong Utara, Tangerang Selatan
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#e0e3e5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#45464d]">
          <p>© 2025 CV Azka Mandiri. All rights reserved. Precision Architectural Engineering.</p>
          <div className="flex items-center gap-4 text-xs font-medium text-[#505f76]">
            <span>SNI Glazing Safety Certified</span>
            <span>•</span>
            <span>Thermal & Acoustic Insulation</span>
            <span>•</span>
            <span>ISO 9001:2015 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
