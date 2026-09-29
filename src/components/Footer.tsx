import { motion } from "motion/react";
import { Facebook, Award, ArrowUp } from "lucide-react";
import { Translation } from "../types";
import { contactInfo } from "../data";

interface FooterProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function Footer({ lang, t }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-royal-gold/20 text-gray-300 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-royal-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo Brand Footer */}
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-8 h-8 text-royal-gold" />
            <span className="text-xl font-extrabold text-white flex flex-col items-start leading-tight">
              <span className="text-royal-gradient font-arabic font-bold text-lg">
                {lang === "ar" ? "النائب سيد سمير" : "MP Sayed Samir"}
              </span>
              <span className="text-[10px] text-gray-400 font-light font-arabic">
                {t.footerRights}
              </span>
            </span>
          </div>

          {/* Social Icons (Only Facebook is active, others hidden per specification) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-royal-gold/10 text-royal-gold border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Quick links summary */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#888888] font-arabic font-medium mb-10">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-gold transition-colors"
            >
              {t.navHome}
            </button>
            <span className="text-[#444444]">•</span>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-gold transition-colors"
            >
              {t.navAbout}
            </button>
          </div>

          {/* Golden Divider */}
          <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent mb-8" />

          {/* Copyrights & Developer Credit */}
          <div className="text-xs text-[#666666] font-arabic flex flex-col items-center gap-2">
            <p className="font-medium tracking-wide">
              {t.footerCopyright}
            </p>
            <p className="text-[11px] text-[#555555]">
              {t.footerCredit}
            </p>
          </div>

          {/* Back to Top floating-style micro action */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToTop}
            className="mt-10 p-2.5 rounded-full bg-white/5 hover:bg-royal-gold hover:text-primary-navy transition-all duration-300 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
