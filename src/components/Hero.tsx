import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Landmark } from "lucide-react";
import { Translation } from "../types";
import img1 from "@/assets/النائب 2026-07-09 at 3.52.12 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-08-01 at 9.42.05 PM.jpeg";

interface HeroProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function Hero({ lang, t }: HeroProps) {
  const images = [img1, img2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);
  // Toggle dark mode class on html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 overflow-hidden bg-navy-gradient flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[85vh] text-center px-2 sm:px-4"
    >
      {/* Luxurious Abstract Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient golden orb 1 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-royal-gold filter blur-[120px]"
        />

        {/* Ambient golden orb 2 */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-royal-gold-light filter blur-[100px]"
        />

        {/* Subtle geometric pattern lines using absolute divs */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Verification Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/30 text-royal-gold text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(201,162,39,0.08)] select-none"
        >
          <ShieldCheck className="w-4.5 h-4.5 animate-pulse" />
          <span>{t.verifiedBadge}</span>
        </motion.div>

        {/* Circular Profile Image with Concentric Animated Rings */}
        <div className="relative mb-8 group">
          {/* External golden rotating aura */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-royal-gold/30 pointer-events-none"
          />

          {/* Internal golden glowing ring */}
          <motion.div
            animate={{ scale: [0.98, 1.03, 0.98], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-royal-gold via-royal-gold-light to-royal-gold filter blur-sm opacity-75 shadow-lg shadow-royal-gold/20"
          />

          {/* Actual Profile Picture wrapper */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary-navy shadow-2xl bg-primary-navy"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={t.heroName}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                loading="eager"
                fetchpriority="high"
                referrerPolicy="no-referrer"
                id="profile-avatar"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Member Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight"
        >
          <span className="text-gold-gradient font-arabic">
            {t.heroName}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-200 font-medium tracking-wide max-w-xl mb-3 flex items-center justify-center gap-2 font-arabic"
        >
          <span>{t.heroTitle}</span>
        </motion.p>

        {/* Organization / Parliament badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-arabic"
        >
          <Landmark className="w-4 h-4 text-royal-gold" />
          <span>{t.heroOrg}</span>
        </motion.div>
      </div>

      {/* Decorative Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-light-bg to-transparent pointer-events-none" />
    </section>
  );
}
