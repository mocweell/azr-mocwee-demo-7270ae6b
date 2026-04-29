import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Fleet } from "@/components/Fleet";
import { HiaceFleet } from "@/components/HiaceFleet";
import { MapSection } from "@/components/MapSection";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AZR Rentcar Jakarta — Sewa Mobil Mewah + Driver Profesional" },
      {
        name: "description",
        content:
          "Sewa mobil mewah Jakarta dengan driver profesional. Unit 2023+: Avanza, Veloz, Innova Zenix, Fortuner, Alphard, Hiace Premio Luxury. Konsultasi WA 0855-9115-1510.",
      },
      {
        name: "keywords",
        content:
          "sewa mobil jakarta, rental mobil mewah, sewa alphard, sewa hiace, rental innova zenix, sewa mobil dengan driver, AZR Rentcar, rental mobil jabodetabek, sewa fortuner, luxury car rental jakarta",
      },
      { name: "author", content: "AZR Rentcar Jakarta" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "ID-JK" },
      { name: "geo.placename", content: "Jakarta" },
      { name: "language", content: "Indonesian" },
      { name: "theme-color", content: "#0f1e3d" },

      { property: "og:title", content: "AZR Rentcar Jakarta — Premium Car Rental + Driver" },
      {
        property: "og:description",
        content:
          "Perjalanan berkelas dengan unit 2023+, driver profesional. Avanza, Veloz, Zenix, Fortuner, Alphard, Hiace Luxury. Pesan via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:site_name", content: "AZR Rentcar Jakarta" },
      { property: "og:url", content: "https://azr-mocwee-demo.lovable.app" },
      { property: "og:image", content: "https://azr-mocwee-demo.lovable.app/og-banner.jpg" },
      { property: "og:image:secure_url", content: "https://azr-mocwee-demo.lovable.app/og-banner.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1536" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "AZR Rentcar Jakarta — Solusi Sewa Mobil Tanpa Ribet" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AZR Rentcar Jakarta — Sewa Mobil Mewah + Driver" },
      {
        name: "twitter:description",
        content:
          "Unit 2023+, driver profesional, layanan rental mobil premium di Jakarta. Konsultasi via WhatsApp.",
      },
      { name: "twitter:image", content: "https://azr-mocwee-demo.lovable.app/og-banner.jpg" },
      { name: "twitter:image:alt", content: "AZR Rentcar Jakarta — Armada Premium" },
    ],
    links: [
      { rel: "canonical", href: "https://azr-mocwee-demo.lovable.app" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRental",
          name: "AZR Rentcar Jakarta",
          description:
            "Penyedia jasa sewa mobil mewah dengan driver profesional di Jakarta. Unit 2023+ termasuk Alphard, Fortuner, Innova Zenix, dan Hiace Luxury.",
          url: "https://azr-mocwee-demo.lovable.app",
          telephone: "+62-855-9115-1510",
          areaServed: { "@type": "City", name: "Jakarta" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressCountry: "ID",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet />
        <HiaceFleet />
        <MapSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
