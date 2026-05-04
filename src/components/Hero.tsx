import heroImg from "@/assets/hero-luxury-car.jpg";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Toyota Alphard mewah AZR Rentcar Jabodetabek di depan hotel"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center text-white pt-24 pb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 mb-6 animate-fade-up"
          style={{ background: "oklch(0.78 0.13 85 / 0.1)", animationDelay: "0.05s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent">
            Premium Car Rental Jabodetabek
          </span>
        </div>

        <h1
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Perjalanan <span className="gold-text">Berkelas</span>,
          <br />
          Harga Bersahabat.
        </h1>

        <p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Sewa mobil mewah unit terbaru 2023 ke atas untuk kebutuhan bisnis maupun keluarga
          di Jabodetabek dan sekitarnya.
        </p>

        <div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#armada"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-accent-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Lihat Armada Kami
          </a>
          <a
            href="https://wa.me/6285591151510?text=Halo%20AZR%20Rentcar%2C%20saya%20ingin%20konsultasi%20sewa%20mobil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-white/40 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all"
          >
            Konsultasi Gratis
          </a>
        </div>

        <div
          className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { n: "50+", l: "Unit Terbaru" },
            { n: "1.2K+", l: "Klien Puas" },
            { n: "24/7", l: "Layanan" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-accent">{s.n}</div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#keunggulan"
        aria-label="Scroll ke bawah"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-accent transition-colors"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </a>
    </section>
  );
}
