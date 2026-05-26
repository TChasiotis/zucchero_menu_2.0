// src/app/admin/qr-generator/page.tsx
"use client";

import QRCode from "react-qr-code";

export default function QRGeneratorPage() {
  /* SOS: Εδώ βάζεις το Link που θα έχει το Zucchero όταν ανέβει στο internet.
    Αυτό το Link ΔΕΝ θα αλλάξει ποτέ ξανά, ό,τι κι αν γίνει στο site!
  */
  const permanentLink = "https://zucchero-cafe.pages.dev/menu/welcome";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-black tracking-tight text-slate-800">
          Zucchero QR Code
        </h1>

        {/* Εδώ εμφανίζεται το QR Code σου */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-inner">
          <QRCode
            value={permanentLink}
            size={220} // Τέλειο μέγεθος για να αποθηκευτεί καθαρό
            level="H" // High Error Correction (αν λερωθεί το χαρτί στο τραπέζι, πάλι θα διαβάζεται)
            fgColor="#0f172a" // Πολύ σκούρο μπλε/μαύρο για μέγιστο contrast με την κάμερα
          />
        </div>

        <p className="text-sm font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-md">
          {permanentLink}
        </p>

        <p className="text-xs text-center text-slate-500 max-w-xs leading-relaxed">
          Κάνε <b>Δεξί Κλικ → Αποθήκευση εικόνας ως...</b> πάνω στο QR για να το
          κατεβάσεις σε μορφή SVG (άπειρη ανάλυση).
        </p>
      </div>
    </div>
  );
}
