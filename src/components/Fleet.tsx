import { CarCard, type Car } from "./CarCard";
import { CheckCircle2 } from "lucide-react";

import avanza from "@/assets/car-avanza.jpg";
import veloz from "@/assets/car-veloz.jpg";
import innova from "@/assets/car-innova.jpg";
import zenix from "@/assets/car-zenix.jpg";
import fortuner from "@/assets/car-fortuner.jpg";
import alphard from "@/assets/car-alphard.jpg";

const allInCars: Car[] = [
  { name: "New Avanza", seats: "7 Kursi", price: "Rp 800.000", overtime: "50rb/jam", image: avanza },
  { name: "Veloz Q", seats: "7 Kursi", price: "Rp 1.000.000", overtime: "50rb/jam", image: veloz },
  { name: "Innova Reborn", seats: "7 Kursi", price: "Rp 1.200.000", overtime: "50rb/jam", image: innova },
  { name: "Innova Zenix G", seats: "7 Kursi", price: "Rp 1.300.000", overtime: "50rb/jam", image: zenix },
  { name: "Innova Zenix V", seats: "7 Kursi", price: "Rp 1.400.000", overtime: "50rb/jam", image: zenix, badge: "Populer" },
  { name: "Innova Zenix Q", seats: "7 Kursi", price: "Rp 1.600.000", overtime: "100rb/jam", image: zenix },
  { name: "Fortuner", seats: "7 Kursi", price: "Rp 1.500.000", overtime: "100rb/jam", image: fortuner },
  { name: "Alphard Gen 3 Facelift", seats: "7 Kursi", price: "Rp 3.400.000", overtime: "150rb/jam", image: alphard, badge: "Luxury" },
  { name: "New Alphard Gen 4", seats: "7 Kursi", price: "Rp 4.500.000", overtime: "200rb/jam", image: alphard, badge: "Flagship" },
];

const includes = [
  "Mobil Unit 2023+",
  "Driver Profesional",
  "BBM Penuh",
  "Tol & Parkir",
  "Air Mineral Gratis",
];

export function Fleet() {
  return (
    <section id="armada" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-accent font-semibold">
            Kategori 1
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Paket <span className="gold-text">All-In</span> Mobil Penumpang
          </h2>
          <div className="gold-divider mx-auto mt-5" />
          <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tinggal duduk manis — semua sudah termasuk. Khusus unit produksi 2023 ke atas
            untuk kenyamanan tanpa kompromi.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3">
            {includes.map((i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium transition-transform hover:scale-105 hover:bg-accent/15"
              >
                <CheckCircle2 size={14} className="text-accent" />
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {allInCars.map((car, i) => (
            <div key={car.name} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <CarCard car={car} accent="navy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
