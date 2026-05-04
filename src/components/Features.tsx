import { Sparkles, UserCheck, Droplets, ShieldCheck, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Unit 2023+",
    desc: "Seluruh armada adalah model produksi 2023 ke atas. Interior bersih, mesin prima, kenyamanan maksimal.",
  },
  {
    icon: UserCheck,
    title: "Driver Berpengalaman",
    desc: "Sopir profesional, ramah, hafal jalan Jabodetabek dan sekitarnya. Berseragam rapi siap melayani.",
  },
  {
    icon: Droplets,
    title: "Gratis Air Mineral",
    desc: "Setiap perjalanan disertai air mineral untuk kenyamanan Anda dan keluarga sepanjang trip.",
  },
  {
    icon: ShieldCheck,
    title: "Asuransi Resmi",
    desc: "Setiap unit terlindungi asuransi resmi. Perjalanan Anda aman dan tenang.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    desc: "Komitmen tepat waktu. Driver sudah standby di lokasi sebelum jam keberangkatan.",
  },
  {
    icon: MapPin,
    title: "Coverage Luas",
    desc: "Melayani Jabodetabek hingga luar kota. Trip dalam dan luar kota dengan paket fleksibel.",
  },
];

export function Features() {
  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent font-semibold">
            Mengapa AZR
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Standar Pelayanan <span className="gold-text">Premium</span>
          </h2>
          <div className="gold-divider mx-auto mt-5" />
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Kami percaya setiap perjalanan adalah pengalaman. Itulah sebabnya kami memberikan
            yang terbaik dari armada hingga pelayanan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="premium-card tilt-hover p-6 sm:p-8 group reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-accent-foreground mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <f.icon size={26} strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
