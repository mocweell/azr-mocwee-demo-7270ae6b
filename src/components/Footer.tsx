import { Instagram } from "lucide-react";

// Kembali ke import standar Next.js/React yang dijamin aman untuk compiler
import azrLogo from "@/assets/azr-logo.png";
import logoBca from "@/assets/logo-bca.png";
import logoMandiri from "@/assets/logo-mandiri.png";

const waNumber = "6285591151510";
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Halo AZR Rentcar, saya ingin info & ketersediaan unit. Terima kasih.",
)}`;
const igLink = "https://www.instagram.com/azr.rentcar";

export function Footer() {
  // Mengekstrak properti string .src dari objek import bawaan compiler
  const srcAzr = typeof azrLogo === "object" ? (azrLogo as any).src : azrLogo;
  const srcBca = typeof logoBca === "object" ? (logoBca as any).src : logoBca;
  const srcMandiri = typeof logoMandiri === "object" ? (logoMandiri as any).src : logoMandiri;

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* SECTION 1: REKENING */}
        <div className="mb-16 pb-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold text-white mb-2">Metode Pembayaran</h3>
              <p className="text-white/60 text-sm">Silahkan melakukan pembayaran melalui rekening resmi kami dibawah ini.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Card BCA */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 min-w-[280px]">
                {/* Mengunci porsi logo di dalam kotak putih agar ukurannya tidak melebar/kebesaran */}
                <div className="bg-white px-2 py-1 rounded-lg shrink-0 w-16 h-8 flex items-center justify-center border border-slate-100">
                  <img src={srcBca} alt="BCA" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Nomor Rekening</div>
                  <div className="text-white font-mono font-bold">6890586161</div>
                  <div className="text-[11px] text-white/60">septian bagus k</div>
                </div>
              </div>

              {/* Card Mandiri */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 min-w-[280px]">
                {/* Mengunci porsi logo di dalam kotak putih agar ukurannya tidak melebar/kebesaran */}
                <div className="bg-white px-2 py-1 rounded-lg shrink-0 w-16 h-8 flex items-center justify-center border border-slate-100">
                  <img src={srcMandiri} alt="Mandiri" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Nomor Rekening</div>
                  <div className="text-white font-mono font-bold">1550013597011</div>
                  <div className="text-[11px] text-white/60">septian bagus k</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: UTAMA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <img
              src={srcAzr}
              alt="AZR Rentcar"
              className="w-16 h-16 object-contain [filter:brightness(0)_invert(1)] opacity-95"
            />
            <div className="text-center md:text-left">
              <div className="font-display text-lg font-bold leading-tight">AZR Rentcar<br/>Jabodetabek</div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-widest">Premium Service</div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
              </a>
              <a
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={22} />
              </a>
            </div>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} AZR Rentcar Jabodetabek. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
