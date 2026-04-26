import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppFloat() {
  const [showLabel, setShowLabel] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    const t2 = setTimeout(() => setShowLabel(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-2">
      {showLabel && (
        <div className="relative bg-white rounded-2xl rounded-br-sm shadow-lg px-4 py-3 max-w-[200px] animate-fade-up">
          <button
            onClick={() => setShowLabel(false)}
            aria-label="Tutup"
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center"
          >
            <X size={12} />
          </button>
          <p className="text-sm font-semibold text-foreground leading-tight">Konsultasi Gratis</p>
          <p className="text-xs text-muted-foreground mt-0.5">Chat tim kami sekarang via WA</p>
        </div>
      )}
      <a
        href="https://wa.me/6285591151510?text=Halo%20AZR%20Rentcar%2C%20saya%20ingin%20konsultasi%20gratis%20via%20WA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Gratis via WhatsApp"
        className="pulse-whatsapp w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110"
        style={{ background: "var(--whatsapp)" }}
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
}
