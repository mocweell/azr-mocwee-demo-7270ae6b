import { Users, UserCheck } from "lucide-react";

export type Car = {
  name: string;
  seats: string;
  price?: string;
  overtime?: string;
  image: string;
  badge?: string;
};

const waNumber = "6285591151510";

export function CarCard({ car, accent = "navy" }: { car: Car; accent?: "navy" | "gold" }) {
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Halo AZR Rentcar, saya ingin info & ketersediaan unit ${car.name}. Terima kasih.`,
  )}`;

  return (
    <article className="premium-card overflow-hidden flex flex-col group">
      <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
        <img
          src={car.image}
          alt={`${car.name} - AZR Rentcar Jakarta`}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-contain p-0 scale-110 transition-transform duration-700 group-hover:scale-115"
        />
        {car.badge && (
          <span
            className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            {car.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-primary">
          <Users size={13} />
          {car.seats}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground">
          {car.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              accent === "gold"
                ? "bg-accent/15 text-accent"
                : "bg-primary/10 text-primary"
            }`}
          >
            <UserCheck size={13} />
            Termasuk Driver Profesional
          </span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Unit terawat & nyaman, siap antar Anda dengan pengalaman berkendara berkelas.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center w-full px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[1.02]"
          style={
            accent === "gold"
              ? {
                  background: "var(--gradient-gold)",
                  color: "var(--accent-foreground)",
                  boxShadow: "var(--shadow-gold)",
                }
              : {
                  background: "var(--gradient-navy)",
                  color: "var(--primary-foreground)",
                }
          }
        >
          Cek Harga via WhatsApp
        </a>
      </div>
    </article>
  );
}
