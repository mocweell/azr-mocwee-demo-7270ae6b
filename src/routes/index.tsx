import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Fleet } from "@/components/Fleet";
import { HiaceFleet } from "@/components/HiaceFleet";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AZR Rentcar Jakarta — Sewa Mobil Mewah Unit 2023+" },
      {
        name: "description",
        content:
          "Sewa mobil mewah AZR Rentcar Jakarta. Unit terbaru 2023+, driver profesional, paket All-In & Hiace Luxury. Konsultasi gratis via WA 0855-9115-1510.",
      },
      { property: "og:title", content: "AZR Rentcar Jakarta — Premium Car Rental" },
      {
        property: "og:description",
        content:
          "Perjalanan Berkelas, Harga Bersahabat. Avanza, Veloz, Innova Zenix, Fortuner, Alphard, Hiace Premio Luxury.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet />
        <HiaceFleet />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
