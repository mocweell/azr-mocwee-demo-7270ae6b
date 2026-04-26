import { MapPin, Navigation, ExternalLink } from "lucide-react";

const ADDRESS = "Jln H Usman No.54, Meruyung, Limo, Depok, Jawa Barat";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export function MapSection() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent font-semibold">
            Lokasi Kami
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Kunjungi <span className="gold-text">Garasi</span> Kami
          </h2>
          <div className="gold-divider mx-auto mt-5" />
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cek armada langsung di lokasi atau klik tombol arahkan untuk navigasi otomatis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 reveal">
          {/* Map */}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka di Google Maps"
            className="lg:col-span-3 group relative block rounded-3xl overflow-hidden premium-card p-0"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/9] w-full">
              <iframe
                title="Lokasi AZR Rentcar Jakarta"
                src={EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              />
              {/* Click overlay */}
              <div
                className="absolute inset-0 flex items-end justify-end p-4 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-accent-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <ExternalLink size={14} />
                  Buka di Google Maps
                </span>
              </div>
              {/* Pin marker overlay */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-lg">
                <MapPin size={14} className="text-accent" />
                <span className="text-xs font-semibold text-primary">AZR Rentcar</span>
              </div>
            </div>
          </a>

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div
              className="rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden"
              style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-elegant)" }}
            >
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-15"
                style={{ background: "var(--gradient-gold)" }}
                aria-hidden
              />
              <div className="relative">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MapPin size={22} className="text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl">Alamat Lengkap</h3>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">{ADDRESS}</p>
                <p className="mt-3 text-xs text-accent font-semibold tracking-wider uppercase">
                  Koordinat: -6.3445° LS, 106.7857° BT
                </p>
              </div>
            </div>

            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <Navigation size={18} className="transition-transform group-hover:rotate-12" />
              Arahkan Saya ke Lokasi
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold border-2 border-primary/15 bg-secondary text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ExternalLink size={18} />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
