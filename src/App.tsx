import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickActions from "./components/QuickActions";
import About from "./components/About";
import VideoSection from "./components/VideoSection";
import QRCodeSection from "./components/QRCode";
import Footer from "./components/Footer";
import { translations } from "./data";

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];

  useEffect(() => {
    // Dynamically adjust browser direction and language tags for absolute RTL/LTR compliance
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    
    // Update the browser page title depending on the selected language
    if (lang === "ar") {
      document.title = "النائب سيد سمير | عضو مجلس النواب المصري | الكارت الرقمي";
    } else {
      document.title = "MP Sayed Samir | Member of the Egyptian Parliament | Digital Card";
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] overflow-x-hidden selection:bg-[#D4A82F] selection:text-white">
      {/* Premium Bilingual Navigation bar */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner with Avatar portrait and verification check */}
        <Hero lang={lang} t={t} />

        {/* Quick action grid (Call, WhatsApp, Save Contact, Share etc.) */}
        <QuickActions lang={lang} t={t} />

        {/* About MP biographical block */}
        <About lang={lang} t={t} />

        {/* Video Message Section */}
        <VideoSection lang={lang} t={t} />

        {/* QR Code sharing helper */}
        <QRCodeSection lang={lang} t={t} />
      </main>

      {/* Premium footer */}
      <Footer lang={lang} t={t} />
    </div>
  );
}
