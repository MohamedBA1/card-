import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { QrCode, Copy, Check, Download, ExternalLink } from "lucide-react";
import { Translation } from "../types";

interface QRCodeProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function QRCodeSection({ lang, t }: QRCodeProps) {
  const [currentUrl, setCurrentUrl] = useState("https://card.ssamirmp1.workers.dev/");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // We keep the hardcoded production URL so the QR code always points to the correct live site
    // even if it's being tested locally.
  }, []);

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // We request a customized QR code from api.qrserver.com using our primary black hex: #0A0A0A
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=10-10-10&data=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <section id="qr-code" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 text-royal-gold flex items-center justify-center mb-4 mx-auto">
            <QrCode className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] font-arabic mb-3">
            {t.qrTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-arabic font-light">
            {t.qrSubtitle}
          </p>
        </div>

        {/* Premium Gold Frame around QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative p-6 rounded-3xl bg-white border border-royal-gold/25 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center"
        >
          {/* Inner luxury gold border styling */}
          <div className="absolute inset-2 rounded-[22px] border border-dashed border-royal-gold/30 pointer-events-none" />

          {/* QR Code Graphic Frame */}
          <div className="relative bg-white p-4 rounded-2xl shadow-inner border border-slate-100 z-10 w-60 h-60 flex items-center justify-center">
            <img
              src={qrCodeUrl}
              alt="Sayed Samir Digital Card QR Code"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Scan Subtitle badge */}
          <div className="mt-6 flex flex-col items-center gap-1.5 z-10">
            <span className="text-xs font-bold text-royal-gold uppercase tracking-wider font-arabic animate-pulse">
              {t.qrScanToSave}
            </span>
            <span className="text-[10px] text-[#666666] font-mono tracking-tight select-all">
              {currentUrl}
            </span>
          </div>

          {/* Action buttons inside card */}
          <div className="mt-6 flex items-center gap-3 z-10 w-full">
            <button
              onClick={copyUrl}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-royal-gold/30 text-xs font-semibold text-[#0A0A0A] hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-arabic">{t.qrCopySuccess}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="font-arabic">
                    {lang === "ar" ? "نسخ رابط الكارت" : "Copy Card Link"}
                  </span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
