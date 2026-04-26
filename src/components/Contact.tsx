import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="kontak" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent font-semibold">
            Hubungi Kami
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Siap Melayani <span className="gold-text">24/7</span>
          </h2>
          <div className="gold-divider mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {[
            {
              icon: Phone,
              title: "WhatsApp",
              text: "0855-9115-1510",
              href: "https://wa.me/6285591151510",
            },
            {
              icon: MapPin,
              title: "Alamat",
              text: "Jln H Usman No.54, Meruyung, Limo, Depok",
            },
            {
              icon: Clock,
              title: "Operasional",
              text: "24 Jam — Setiap Hari",
            },
          ].map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.title}
                {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="premium-card p-6 sm:p-7 text-center block"
              >
                <div
                  className="mx-auto w-14 h-14 rounded-xl flex items-center justify-center text-accent-foreground mb-4"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <c.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {c.text}
                </p>
              </Wrapper>
            );
          })}
        </div>

        <div
          className="rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
          style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-elegant)" }}
        >
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
            style={{ background: "var(--gradient-gold)" }}
            aria-hidden
          />
          <h3 className="relative font-display font-bold text-2xl sm:text-3xl md:text-4xl">
            Mulai Perjalanan <span className="gold-text">Berkelas</span> Anda Hari Ini
          </h3>
          <p className="relative mt-3 text-white/80 max-w-xl mx-auto">
            Tim kami siap memberikan rekomendasi armada terbaik sesuai kebutuhan dan budget Anda.
          </p>
          <a
            href="https://wa.me/6285591151510?text=Halo%20AZR%20Rentcar%2C%20saya%20ingin%20konsultasi%20sewa%20mobil"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center px-8 py-4 rounded-full font-semibold text-accent-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
