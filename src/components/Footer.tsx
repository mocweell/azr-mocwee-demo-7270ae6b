import azrLogo from "@/assets/azr-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={azrLogo}
            alt="AZR Rentcar Jakarta"
            width={48}
            height={48}
            className="w-12 h-12 object-contain [filter:brightness(0)_invert(1)] opacity-95"
          />
          <div>
            <div className="font-display font-semibold">AZR Rentcar Jakarta</div>
            <div className="text-xs text-white/60">Premium Car Rental Service</div>
          </div>
        </div>
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} AZR Rentcar. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
