import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X, Award } from "lucide-react";
import { Translation } from "../types";

interface NavbarProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
  t: Translation;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ["home", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const menuItems = [
    { id: "home", label: t.navHome },
    { id: "about", label: t.navAbout },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg border-b border-royal-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-royal-gold"
            >
              <Award className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex flex-col leading-tight">
              <span className="text-royal-gold font-arabic font-bold text-sm sm:text-base">
                {lang === "ar" ? "النائب سيد سمير" : "MP Sayed Samir"}
              </span>
              <span className="text-[10px] text-gray-300 font-light hidden sm:inline">
                {lang === "ar" ? "مجلس النواب المصري" : "Egyptian Parliament"}
              </span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className={`flex items-center gap-6 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-royal-gold py-1 ${
                    activeSection === item.id ? "text-royal-gold font-semibold" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-royal-gold/40 text-xs font-semibold text-white hover:bg-royal-gold hover:text-primary-navy hover:border-royal-gold transition-all duration-300 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </motion.button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Quick Language switch button for mobile */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-royal-gold/40 text-[11px] font-semibold text-white bg-primary-navy/50"
            >
              <Globe className="w-3 h-3 text-royal-gold" />
              <span>{lang === "ar" ? "En" : "عربي"}</span>
            </motion.button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-royal-gold p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-b border-royal-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-start px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-primary-navy bg-gold-gradient font-bold"
                      : "text-gray-300 hover:bg-white/5 hover:text-royal-gold"
                  }`}
                  style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
