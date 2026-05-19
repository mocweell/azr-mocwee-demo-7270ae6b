import { Instagram } from "lucide-react";
import azrLogo from "@/assets/azr-logo.png";

const waNumber = "6285591151510";
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Halo AZR Rentcar, saya ingin info & ketersediaan unit. Terima kasih.",
)}`;
const igLink = "https://www.instagram.com/azr.rentcar";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* LOGO & BRAND */}
        <div className="flex items-center gap-3">
          <img
            src={azrLogo}
            alt="AZR Rentcar Jabodetabek"
            width={48}
            height={48}
            className="w-12 h-12 object-contain [filter:brightness(0)_invert(1)] opacity-95"
          />
          <div>
            <div className="font-display font-semibold">AZR Rentcar Jabodetabek</div>
            <div className="text-xs text-white/60">Premium Car Rental Service</div>
          </div>
        </div>

        {/* REKENING PEMBAYARAN */}
        <div className="text-xs md:text-sm text-white/80 space-y-1 border-t border-b border-white/10 md:border-none py-3 md:py-0 w-full md:w-auto">
          <p className="font-semibold text-white/90 mb-1">Rekening Kami:</p>
          <p><span className="font-bold text-white">BCA</span> &bull; 6890586161 <span className="text-white/60">a/n septian bagus k</span></p>
          <p><span className="font-bold text-white">MANDIRI</span> &bull; 1550013597011 <span className="text-white/60">a/n septian bagus k</span></p>
        </div>

        {/* SOSIAL MEDIA */}
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp AZR Rentcar"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
          </a>
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram AZR Rentcar"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-white/70 w-full md:w-auto md:border-none border-t border-white/5 pt-4 md:pt-0">
          © {new Date().getFullYear()} AZR Rentcar. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
