import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#armada", label: "Armada" },
  { href: "#hiace", label: "Hiace & Luxury" },
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
        <a href="#beranda" className="flex items-center gap-2">
          <span
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-display font-bold text-sm ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
            }`}
            style={{ background: scrolled ? "var(--gradient-navy)" : "var(--gradient-gold)" }}
          >
            AZR
          </span>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="font-display font-semibold text-base sm:text-lg">AZR Rentcar</div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-80">Jakarta</div>
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
