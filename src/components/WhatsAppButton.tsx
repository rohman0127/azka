"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneDisplay = "+62 819-3273-5383";
  const phoneRaw = "6281932735383";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-xl shadow-2xl border border-[#c6c6cd]/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#111827] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Tim Teknis Azka Mandiri</h4>
                <p className="text-xs text-[#d3e4fe] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  Online • Respon Cepat
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#bec6e0] hover:text-white p-1 rounded"
              aria-label="Tutup pop-up"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-[#f7f9fb] space-y-3 text-xs text-[#191c1e]">
            <div className="bg-white p-3 rounded-lg shadow-xs border border-[#e0e3e5]">
              <p className="font-semibold text-sm mb-1">Konsultasi Fasad & Aluminium</p>
              <p className="text-[#45464d] leading-relaxed">
                Halo! Butuh estimasi RAB, penawaran tender, atau survei lokasi gratis? Tim engineering kami siap membantu.
              </p>
            </div>

            <div className="space-y-1.5">
              <a
                href={`https://wa.me/${phoneRaw}?text=Halo%20CV%20Azka%20Mandiri,%20saya%20ingin%20minta%20estimasi%20RAB%20proyek`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-sm transition-colors text-xs"
              >
                Chat WhatsApp Sekarang
              </a>
              <a
                href={`tel:+${phoneRaw}`}
                className="w-full block text-center py-2 px-3 rounded-lg bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e] font-semibold transition-colors text-xs"
              >
                Telepon Hotline ({phoneDisplay})
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 relative group"
        aria-label="Buka WhatsApp Desk"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-[10px] font-bold text-white flex items-center justify-center animate-bounce">
          1
        </span>
      </button>
    </div>
  );
}
