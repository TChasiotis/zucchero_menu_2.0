import { db } from "./index";
import { categories as categoriesSchema, menuItems as menuItemsSchema } from "./schema";
// Προσοχή στο path εδώ: ανάλογα με το πού ακριβώς είναι το menuData.ts
import { categories as categoriesData, menuItems as menuItemsData } from "../app/utils/menuData";

async function main() {
  console.log("🌱 Ξεκινάει το φύτεμα των δεδομένων (Seeding) στην Ιρλανδία...");

  try {
    // 1. Καθαρίζουμε τους πίνακες (ώστε αν το τρέξεις 2 φορές να μην μπουν διπλά)
    console.log("🧹 Καθαρισμός παλιών δεδομένων...");
    await db.delete(menuItemsSchema);
    await db.delete(categoriesSchema);

    // 2. Εισαγωγή Κατηγοριών
    console.log("📁 Ανέβασμα Κατηγοριών...");
    await db.insert(categoriesSchema).values(categoriesData);
    console.log(`✅ Μπήκαν ${categoriesData.length} κατηγορίες!`);

    // 3. Εισαγωγή Προϊόντων (Κρουασάν, Πάστες, Παγωτά κλπ)
    console.log("🥐 Ανέβασμα Προϊόντων...");
    await db.insert(menuItemsSchema).values(menuItemsData);
    console.log(`✅ Μπήκαν ${menuItemsData.length} προϊόντα!`);

    console.log("🎉 ΤΕΛΟΣ! Η βάση σου στην Turso είναι πλέον γεμάτη!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Σφάλμα κατά το seeding:", error);
    process.exit(1);
  }
}

main();