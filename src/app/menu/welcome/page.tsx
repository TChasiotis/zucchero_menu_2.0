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
    // h-[100dvh] για απόλυτο κλείδωμα ύψους στην οθόνη
    <div className="h-[100dvh] w-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col overflow-hidden font-sans">
      {/* --- HEADER --- */}
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

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER (py-2.5 για να αφήσει ακριβώς 10px απόσταση πάνω-κάτω) --- */}
      <div className="flex-grow w-full max-w-2xl mx-auto px-4 py-2.5 flex flex-col min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-[2rem] shadow-xl border border-white w-full h-full flex flex-col justify-between overflow-hidden min-h-0"
        >
          {/* Τίτλος */}
          <div className="shrink-0 text-center pt-0.5">
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
              Welcome
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm italic font-medium mt-0.5">
              Please select your language
            </p>
          </div>

          {/* Το Grid των γλωσσών */}
          <div className="flex-grow flex items-center justify-center min-h-0 w-full my-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-md">
              {availableLanguages.map((l) => (
                <motion.button
                  key={l.code}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageSelect(l.code)}
                  /* py-3 για να είναι μεγάλα τα κουμπιά αλλά να μην μπουκώνουν την οθόνη */
                  className="bg-white hover:bg-slate-50/50 py-3 px-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="relative w-14 h-9 shadow-sm border border-slate-200 rounded-md overflow-hidden mb-1.5 shrink-0">
                    <Image
                      src={l.flag}
                      alt={l.label}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate w-full text-center">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-4 text-center text-slate-600 text-xs sm:text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200 shrink-0 z-50">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
