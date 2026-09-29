import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Mail, Facebook, UserPlus, Share2, Check, AlertCircle } from "lucide-react";
import { Translation } from "../types";
import { contactInfo } from "../data";

interface QuickActionsProps {
  lang: "ar" | "en";
  t: Translation;
}

export default function QuickActions({ lang, t }: QuickActionsProps) {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: t.heroName,
      text: `${t.heroTitle} - ${t.heroOrg}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const actions = [
    {
      id: "call",
      label: t.actionCall,
      href: `tel:+201009988888`,
      icon: Phone,
      color: "from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40",
      textColor: "text-white font-bold",
    },
    {
      id: "whatsapp",
      label: t.actionWhatsapp,
      href: `https://wa.me/201009988888`,
      icon: MessageSquare,
      color: "from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40",
      textColor: "text-white font-bold",
    },
    {
      id: "email",
      label: t.actionEmail,
      href: `mailto:ssamirmp1@gmail.com`,
      icon: Mail,
      color: "from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40",
      textColor: "text-white font-bold",
    },
    {
      id: "facebook",
      label: t.actionFacebook,
      href: `https://www.facebook.com/share/181EnYghKG/?mibextid=wwXIfr`,
      icon: Facebook,
      color: "from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40",
      textColor: "text-white font-bold",
    },
    {
      id: "save",
      label: t.actionSave,
      href: `/SayedSamir.vcf`,
      icon: UserPlus,
      color: "from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40",
      textColor: "text-white font-bold",
      download: "SayedSamir.vcf",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Quick Actions Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.09)] border border-royal-gold/15"
      >
        {actions.map((act) => (
          <motion.a
            key={act.id}
            variants={itemVariants}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.96 }}
            href={act.href}
            download={act.download}
            target={act.href.startsWith("http") ? "_blank" : undefined}
            rel={act.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${act.color} shadow-lg transition-all duration-300 group cursor-pointer text-center h-28 sm:h-32`}
          >
            <div className="p-2.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors mb-2.5">
              <act.icon className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xs sm:text-sm font-semibold tracking-wide ${act.textColor}`}>
              {act.label}
            </span>
          </motion.a>
        ))}

        {/* Share Button (Treated as a Button, not Anchor) */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.04, y: -4 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleShare}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-royal-gold via-yellow-500 to-amber-600 hover:shadow-royal-gold/40 shadow-lg transition-all duration-300 group cursor-pointer text-center h-28 sm:h-32"
        >
          <div className="p-2.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors mb-2.5">
            <Share2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {t.actionShare}
          </span>
        </motion.button>
      </motion.div>

      {/* Share Toast Notification Bubble */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary-navy text-white shadow-xl border border-royal-gold text-sm font-medium"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            <Check className="w-4 h-4 text-royal-gold" />
            <span>{t.qrCopySuccess}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
