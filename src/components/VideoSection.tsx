import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Translation } from "../types";
import videoFile from "@/assets/WhatsApp Video 2026-08-01 at 9.34.23 PM.mp4";

interface VideoSectionProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function VideoSection({ lang, t }: VideoSectionProps) {
  return (
    <section id="video" className="py-24 bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 text-royal-gold flex items-center justify-center mb-4 mx-auto border border-royal-gold/20">
            <Play className="w-6 h-6 ml-1" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-arabic mb-3">
            {t.videoTitle}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-arabic font-light">
            {t.videoSubtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="w-full relative rounded-3xl overflow-hidden border border-royal-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black"
        >
          {/* Subtle golden glow around the video */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-royal-gold/20 via-transparent to-royal-gold/20 opacity-50 blur-md pointer-events-none" />
          
          <video
            src={videoFile}
            controls
            playsInline
            preload="none"
            className="w-full h-auto max-h-[70vh] object-contain relative z-10 rounded-3xl"
            poster=""
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
