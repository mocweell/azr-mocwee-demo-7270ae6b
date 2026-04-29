import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import azrLogo from "@/assets/azr-logo.png";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#armada", label: "Armada" },
  { href: "#hiace", label: "Hiace & Luxury" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_4px_20px_-10px_oklch(0.16_0.06_265/0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2.5">
          <img
            src={azrLogo}
            alt="AZR Rentcar Jakarta — Sewa Mobil Mewah"
            width={48}
            height={48}
            className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all ${
              scrolled
                ? "[filter:brightness(0)_saturate(100%)_invert(16%)_sepia(38%)_saturate(1200%)_hue-rotate(210deg)]"
                : "[filter:brightness(0)_invert(1)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          />
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="font-display font-semibold text-base sm:text-lg tracking-wide">AZR Rentcar</div>
            <div className="text-[10px] sm:text-xs tracking-[0.25em] uppercase opacity-80">Jakarta</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6285591151510"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          Pesan via WhatsApp
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg animate-fade-up">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285591151510"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-accent-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
