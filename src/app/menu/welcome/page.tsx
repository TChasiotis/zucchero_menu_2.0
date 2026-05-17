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
    // h-[100dvh] κλειδωμένο ύψος
    <div className="h-[100dvh] w-screen bg-[url('/images/background/GridArt_20250522_195346089_white.jpg')] bg-fixed bg-cover bg-center flex flex-col overflow-hidden font-sans">
      {/* --- HEADER (Κλειδωμένο Context) --- */}
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

      {/* --- ΚΕΝΤΡΙΚΟ CONTAINER (flex flex-col για να ελέγχουμε τα ανεξάρτητα στοιχεία) --- */}
      <div className="flex-grow w-full max-w-3xl mx-auto px-4 py-4 flex flex-col min-h-0">
        {/* ΣΤΟΙΧΕΙΟ 1: Μικρή, Floating Κάρτα Τίτλου */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="shrink-0 bg-white/95 backdrop-blur-sm px-8 py-3 rounded-2xl shadow-lg border border-white max-w-sm mx-auto mb-6 text-center"
        >
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">
            Welcome
          </h1>
          <p className="text-slate-500 text-sm italic font-medium mt-0.5">
            Please select your language
          </p>
        </motion.div>

        {/* ΣΤΟΙΧΕΙΟ 2: Το Grid των γλωσσών (Ανεξάρτητα, μεγάλα, floating κουμπιά) */}
        <div className="flex-grow flex items-center justify-center min-h-0 w-full my-auto px-2">
          {/* grid responsive: 2 στήλες κινητά, 4 στήλες tablet/desktop για max space utility */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mx-auto">
            {availableLanguages.map((l) => (
              <motion.button
                key={l.code}
                whileHover={{ scale: 1.03, translateY: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLanguageSelect(l.code)}
                /* Κάθε κουμπί είναι μια ανεξάρτητη floating κάρτα με shadow-md και py-6 για μέγεθος */
                className="bg-white/95 hover:bg-slate-50/50 py-6 px-4 rounded-3xl border border-slate-200/80 flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg group h-full"
              >
                {/* Μεγάλη, premium σημαία */}
                <div className="relative w-20 h-12 shadow-md border border-slate-200 rounded-lg overflow-hidden mb-3 shrink-0 transition-transform group-hover:scale-105">
                  <Image
                    src={l.flag}
                    alt={l.label}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                {/* Μεγάλο, έντονο κείμενο */}
                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate w-full text-center">
                  {l.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-auto py-6 text-center text-slate-600 text-sm font-medium bg-white/70 backdrop-blur-md border-t border-slate-200 shrink-0 z-50">
        <p>
          © 2007 - {new Date().getFullYear()} Zucchero · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
