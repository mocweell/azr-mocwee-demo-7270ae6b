import { CarCard, type Car } from "./CarCard";
import { Info } from "lucide-react";
import hiace from "@/assets/car-hiace.jpg";
import hiaceLuxury from "@/assets/car-hiace-luxury.jpg";

const hiaceCars: Car[] = [
  { name: "Hiace Commuter", seats: "15 Kursi", price: "Rp 1.500.000", overtime: "100rb/jam", image: hiace },
  { name: "Hiace Premio", seats: "12 Kursi", price: "Rp 1.800.000", overtime: "100rb/jam", image: hiace },
  { name: "Hiace Commuter Luxury", seats: "9-10 Kursi", price: "Rp 2.000.000", overtime: "100rb/jam", image: hiaceLuxury, badge: "Luxury" },
  { name: "Hiace Premio Luxury", seats: "8-9 Kursi", price: "Rp 2.500.000", overtime: "100rb/jam", image: hiaceLuxury, badge: "Premium" },
];

export function HiaceFleet() {
  return (
    <section id="hiace" className="navy-section py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.78 0.13 85) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.78 0.13 85) 0, transparent 40%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent font-semibold">
            Kategori 2
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Paket <span className="gold-text">Hiace & Luxury Van</span>
          </h2>
          <div className="gold-divider mx-auto mt-5" />
          <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed">
            Solusi rombongan eksklusif. Cocok untuk family gathering, tour korporat,
            atau perjalanan VIP dengan kapasitas besar.
          </p>

          <div
            className="mt-6 inline-flex items-start gap-2 text-left px-4 py-3 rounded-xl border border-accent/30 max-w-xl mx-auto"
            style={{ background: "oklch(0.78 0.13 85 / 0.08)" }}
          >
            <Info size={18} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-white/85">
              Sudah termasuk Mobil + Driver + BBM. <strong>Belum termasuk</strong> Tol, Parkir,
              dan Uang Makan Driver. Jam kerja driver 05.00 – 23.00 WIB.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {hiaceCars.map((car) => (
            <CarCard key={car.name} car={car} accent="gold" />
          ))}
        </div>
      </div>
    </section>
  );
}
