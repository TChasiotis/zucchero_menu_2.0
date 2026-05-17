"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const availableLanguages = [
  { code: "el", label: "Ελληνικά", flag: "/images/flags/greece_flag.png" },
  {
    code: "en",
    label: "English",
    flag: "/images/flags/united_kingdom_flag.png",
  },
  { code: "de", label: "Deutsch", flag: "/images/flags/germany_flag.png" },
  { code: "fr", label: "Français", flag: "/images/flags/france_flag.png" },
  { code: "es", label: "Español", flag: "/images/flags/spain_flag.png" },
  { code: "sr", label: "Srpski", flag: "/images/flags/serbia_flag.png" },
  { code: "bg", label: "Български", flag: "/images/flags/bulgaria_flag.png" },
  { code: "ro", label: "Română", flag: "/images/flags/romania_flag.png" },
];

export default function WelcomePage() {
  const router = useRouter();

  const handleLanguageSelect = (langCode: string) => {
    localStorage.setItem("zucchero_lang", langCode);
    router.push(`/menu?lang=${langCode}`);
  };

  return (
    // h-screen και overflow-hidden για να ΜΗΝ υπάρχει ποτέ scrollbar
    <div className="h-screen w-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col overflow-hidden font-sans">
      {/* --- HEADER (Κλειδωμένο 1:1 με το μενού) --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ backgroundColor: "rgb(151, 220, 245)" }}
        className="p-4 shadow-sm relative flex justify-center items-center h-[72px] shrink-0 z-50"
      >
        <div className="relative w-36 h-12">
          <Image
            src="/images/logo/zucchero_logo.png"
            alt="Zucchero"
            fill
            sizes="150px"
            className="object-contain"
            priority
          />
        </div>
      </motion.header>

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER --- */}
      <div className="flex-grow flex items-center justify-center p-4 min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] shadow-xl border border-white w-full max-w-2xl flex flex-col justify-center"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-1 tracking-tight text-center">
            Welcome
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mb-6 italic font-medium text-center">
            Please select your language
          </p>

          {/* 2 στήλες σε κινητά, 4 σε desktop για να εκμεταλλευτούμε το πλάτος και να μην βγαίνει scroll */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {availableLanguages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLanguageSelect(l.code)}
                className="bg-white hover:bg-slate-50/50 py-3.5 px-4 rounded-2xl border border-slate-200 flex flex-col items-center justify-center transition-all shadow-sm hover:shadow-md group"
              >
                {/* Καθαρό και μεγάλο μέγεθος σημαίας */}
                <div className="relative w-14 h-9 sm:w-16 sm:h-10 shadow-md border border-slate-200 rounded-md overflow-hidden mb-2 shrink-0">
                  <Image
                    src={l.flag}
                    alt={l.label}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate w-full text-center">
                  {l.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER (Κλειδωμένο 1:1 με το μενού) --- */}
      <footer className="mt-auto py-6 text-center text-slate-600 text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200 shrink-0">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
