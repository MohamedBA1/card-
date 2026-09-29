import { motion } from "motion/react";
import { Landmark, Quote, History } from "lucide-react";
import { Translation } from "../types";

interface AboutProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function About({ lang, t }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
      >
        {/* Left column / Political Roles - 4 cols */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4 bg-navy-gradient rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border border-royal-gold/20 shadow-xl"
        >
          {/* Subtle golden pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-6">
              <Landmark className="w-6 h-6 text-royal-gold shrink-0" />
              <h3 className="text-lg font-bold text-white font-arabic leading-snug border-b border-royal-gold/20 pb-2 w-full">
                {t.aboutRolesLabel}
              </h3>
            </div>
            
            <div className="space-y-4">
              {t.aboutRoles.map((role, idx) => (
                <div key={idx} className="flex gap-3 items-start group">
                  <div className="w-5 h-5 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-royal-gold/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 font-arabic font-medium leading-relaxed group-hover:text-white transition-colors">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-royal-gold/10">
            <div className="w-12 h-1 bg-royal-gold rounded-full mb-2" />
            <span className="text-[9px] uppercase tracking-wider text-royal-gold font-bold block">
              {lang === "ar" ? "حزب مستقبل وطن" : "Mostaqbal Watan Party"}
            </span>
          </div>
        </motion.div>

        {/* Right column / Main Biography Content - 8 cols */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-8 bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-royal-gold/15 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Floating gold quotation mark decoration */}
          <div className={`absolute top-6 ${lang === "ar" ? "left-6" : "right-6"} text-royal-gold/5 pointer-events-none`}>
            <Quote className="w-36 h-36 transform rotate-180" />
          </div>

          <div className="relative z-10">
            {/* Small subtitle badge */}
            <div className="flex items-center gap-2 mb-3">
              <History className="w-4.5 h-4.5 text-royal-gold" />
              <span className="text-xs font-bold text-royal-gold uppercase tracking-wider font-arabic">
                {lang === "ar" ? "سيرة ومسيرة" : "Biography & Mission"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] mb-6 font-arabic border-b border-royal-gold/15 pb-4">
              {t.aboutTitle}
            </h2>

            {/* Paragraphs */}
            <div className={`space-y-5 text-sm sm:text-base text-[#1A1A1A] font-arabic font-normal leading-relaxed ${lang === "ar" ? "text-right" : "text-left"}`}>
              {t.aboutText1 && (
                <p className={`relative ${lang === "ar" ? "pr-4 border-r-2 border-royal-gold/30" : "pl-4 border-l-2 border-royal-gold/30"}`}>
                  {t.aboutText1}
                </p>
              )}
              {t.aboutText2 && <p className="text-justify leading-relaxed">{t.aboutText2}</p>}
              {t.aboutText3 && (
                <p className="text-[#555555] font-light text-xs sm:text-sm text-justify leading-relaxed">
                  {t.aboutText3}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-royal-gold/15 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-royal-gold animate-ping" />
            <span className="text-xs font-bold text-[#666666] uppercase tracking-widest font-arabic">
              {lang === "ar" ? "مصر في القلب والوجدان" : "Dakahlia Governorates Representation"}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
