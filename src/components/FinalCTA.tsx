import { Sparkles, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";

const waLink = `https://wa.me/6285591151510?text=${encodeURIComponent(
  "Halo AZR Rentcar! Saya tertarik untuk booking armada. Mohon info penawaran spesial hari ini 🙏",
)}`;

export function FinalCTA() {
  return (
    <section
      id="penawaran"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--gradient-navy)" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25 blur-3xl float-anim"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl float-anim"
        style={{ background: "var(--gradient-gold)", animationDelay: "1.5s" }}
        aria-hidden
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.78 0.13 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.13 85) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 text-center text-white reveal">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 mb-7"
          style={{ background: "oklch(0.78 0.13 85 / 0.12)" }}
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-accent font-semibold">
            Promo Eksklusif Terbatas
          </span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Saatnya <span className="shimmer-text">Naik Kelas</span>.
          <br />
          Pesan Hari Ini, Nikmati Esok.
        </h2>

        <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed">
          Dapatkan <strong className="text-accent">harga spesial weekday</strong> & free pickup
          area Jakarta. Slot armada premium terbatas — amankan unit favorit Anda sekarang.
        </p>

        {/* Trust strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={16} className="text-accent" />
            100% Aman & Berasuransi
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-accent" />
          <span className="inline-flex items-center gap-2">
            <Clock size={16} className="text-accent" />
            Respon WA &lt; 5 Menit
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-accent" />
          <span className="inline-flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            Tanpa DP untuk Klien Terdaftar
          </span>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-pulse w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-5 rounded-full font-bold text-base sm:text-lg text-accent-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            <MessageCircle size={20} />
            Booking Sekarang via WhatsApp
          </a>
          <a
            href="tel:+6285591151510"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-5 rounded-full font-semibold border-2 border-white/40 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all"
          >
            <Phone size={18} />
            Telepon Langsung
          </a>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-white/60">
          ⚡ Sudah lebih dari <strong className="text-accent">1.200 klien</strong> mempercayakan
          perjalanan mereka kepada AZR Rentcar.
        </p>
      </div>
    </section>
  );
}
