"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  Phone, 
  Mail,
  MapPin, 
  Calculator, 
  Menu, 
  X, 
  Clock,
  MessageCircle,
  FileText,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneDisplay = "+62 819-3273-5383";
  const phoneRaw = "6281932735383";
  const email = "azkamandiri@gmail.com";
  const locationShort = "Serpong Utara, Tangerang Selatan";

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Produk & Jasa", href: "/produk-layanan" },
    { name: "Portofolio Proyek", href: "/portofolio" },
    { name: "Kalkulator Estimasi", href: "/kalkulator" },
    { name: "Hubungi Kami", href: "/kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
      {/* Top Executive Header Bar */}
      <div className="bg-[#111827] text-slate-300 border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 h-9 flex items-center justify-between text-xs">
          {/* Left: Contact Credentials */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:+${phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ffb77d]" />
              <span className="font-medium">Hotline:</span>
              <strong className="text-white font-bold tracking-tight">{phoneDisplay}</strong>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            <a
              href={`mailto:${email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ffb77d]" />
              <span className="text-slate-300">{email}</span>
            </a>

            <span className="hidden xl:inline text-slate-700">|</span>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#ffb77d]" />
              <span>Workshop: {locationShort}</span>
            </div>
          </div>

          {/* Right: Operational Info & Direct Action */}
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
            </div>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-1.5 bg-[#c76c00] hover:bg-[#b05f00] text-white px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Konsultasi Proyek</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Corporate Navbar */}
      <div className="h-20 max-w-[1360px] mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Corporate Logo */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="w-11 h-11 rounded-lg bg-[#0f172a] text-white flex flex-col items-center justify-center shadow-md border border-slate-700 group-hover:border-[#c76c00] transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c76c00]" />
            <span className="font-extrabold text-base tracking-tighter leading-none text-white">AM</span>
            <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">CV</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">
                CV AZKA MANDIRI
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-bold uppercase rounded bg-slate-100 text-slate-700 border border-slate-300">
                Resmi
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase mt-0.5">
              Aluminium & Architectural Glazing Specialist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "text-[#0f172a] font-bold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-md"
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-[-16px] left-3 right-3 h-[3px] bg-[#c76c00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Executive CTAs */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick RAB Calculator Button */}
          <Link
            href="/kalkulator"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase bg-[#0f172a] hover:bg-black text-white shadow-sm border border-slate-800 transition-all hover:shadow"
          >
            <Calculator className="w-4 h-4 text-[#ffb77d]" />
            <span className="whitespace-nowrap">Hitung Biaya (RAB)</span>
          </Link>

          {/* Direct WhatsApp Action Button */}
          <a
            href={`https://wa.me/${phoneRaw}?text=Halo%20CV%20Azka%20Mandiri,%20saya%20ingin%20konsultasi%20proyek%20aluminium%20dan%20kaca`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide shadow-sm transition-all whitespace-nowrap"
            title="Hubungi Kami via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">Konsultasi WA</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-2xl px-5 py-4 transition-all">
          <nav className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    active
                      ? "bg-slate-100 text-[#0f172a] font-bold border-l-4 border-[#c76c00]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col gap-2.5">
            <Link
              href="/kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0f172a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#ffb77d]" />
              <span>Kalkulator Estimasi Biaya (RAB)</span>
            </Link>

            <a
              href={`https://wa.me/${phoneRaw}?text=Halo%20CV%20Azka%20Mandiri,%20saya%20ingin%20konsultasi%20proyek`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] text-white text-xs font-bold tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {phoneDisplay}</span>
            </a>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Jl. Pondok Serut, Paku Jaya, Serpong Utara, Tangsel</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
