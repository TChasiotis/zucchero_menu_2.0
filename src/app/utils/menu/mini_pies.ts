import { MenuItem } from "../menuData";

export const miniPies: MenuItem[] = [
  {
    id: "mini_pies_info_general",
    categoryId: "mini_pies",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Στα πιτάκια (με το κομμάτι) υπάρχει επιπλέον πάγια χρέωση service fee +0.50€ ανά παραγγελία." },
      en: { name: "ℹ️ Useful Information", description: "An additional flat +0.50€ service fee applies per order for mini pies." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Für Mini-Pitas fällt eine zusätzliche pauschale Servicegebühr von +0,50 € pro Bestellung an." },
      fr: { name: "ℹ️ Informations utiles", description: "Des frais de service forfaitaires supplémentaires de +0,05 € s'appliquent par commande pour les mini tourtes." },
      es: { name: "ℹ️ Información útil", description: "Se aplica un cargo de servicio fijo adicional de +0,50 € por pedido para los mini pasteles." },
      sr: { name: "ℹ️ Korisne informacije", description: "Primenjuje se dodatna fiksna doplata za uslugu od +0.50€ po porudžbini za mini pite." },
      bg: { name: "ℹ️ Полезна информация", description: "Удържа се допълнителна фиксирана такса за обслужване от +0.50€ на поръчка за мини банички." },
      ro: { name: "ℹ️ Informații utile", description: "Se aplică o taxă de servire fixă suplimentară de +0.50€ pe comandă pentru mini plăcinte." }
    }
  },
  {
    id: "separator_mnpies_info",
    categoryId: "mini_pies",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  // --- ΠΡΟΪΟΝΤΑ ---
  {
    id: "mini_pie_kourou_cheese",
    categoryId: "mini_pies",
    price: 0.70,
    isSoldOut: false,
    translations: {
      el: { name: "Κουρού με Τυρί", description: "Παραδοσιακό πιτάκι κουρού με πλούσια γέμιση φέτας" },
      en: { name: "Kourou Cheese Pie", description: "Traditional mini kourou pastry with a rich feta cheese filling" },
      de: { name: "Kourou Cheese Pie", description: "Kourou-Käsepita: Traditionelle Mini-Kourou-Pita με Feta-Füllung" },
      fr: { name: "Kourou Cheese Pie", description: "Feuilleté Kourou au Fromage: Mini-feuilleté traditionnel kourou farci à la feta" },
      es: { name: "Kourou Cheese Pie", description: "Empanada Kourou de Queso: Mini empanada tradicional kourou rellena de queso feta" },
      sr: { name: "Kourou Cheese Pie", description: "Kuru Pita sa Sirom: Tradicionalna mini kuru pita sa bogatim punjenjem od fete" },
      bg: { name: "Kourou Cheese Pie", description: "Куру Баничка със Сирене: Традиционна мини куру баничка с богат пълнеж από сирене" },
      ro: { name: "Kourou Cheese Pie", description: "Plăcintă Kourou cu Brânză: Mini plăcintă tradițională kourou cu umplutură bogată de brânză feta" }
    }
  },
  {
    id: "mini_pie_anthotyro_sesame",
    categoryId: "mini_pies",
    price: 0.70,
    isSoldOut: false,
    translations: {
      el: { name: "Σφολιάτα με Ανθότυρο και Σουσάμι", description: "Τραγανή σφολιάτα με ελαφρύ ανθότυρο και καβουρδισμένο σουσάμι" },
      en: { name: "Anthotyros & Sesame Puff Pastry", description: "Crispy puff pastry filled with light anthotyros cheese and topped with toasted sesame seeds" },
      de: { name: "Anthotyros & Sesame Puff Pastry", description: "Anthotyros-Sesam-Blätterteig: Knuspriger Blätterteig mit leichtem Anthotyros-Käse und Sesam" },
      fr: { name: "Anthotyros & Sesame Puff Pastry", description: "Feuilleté Anthotyros & Sésame: Feuilleté croustillant au fromage anthotyros léger και sésame torréfié" },
      es: { name: "Anthotyros & Sesame Puff Pastry", description: "Hojaldre de Anthotyros y Sésamo: Hojaldre crujiente relleno de queso tierno anthotyros y sésamo tostado" },
      sr: { name: "Anthotyros & Sesame Puff Pastry", description: "Lisnato sa Antotiro Sirom i Susamom: Hrskavo lisnato testo sa laganim antotiro sirom i susamom" },
      bg: { name: "Anthotyros & Sesame Puff Pastry", description: "Бутерка με Извара и Сусам: Хрупкава бутерка с леко сирене анcheckboxро и печен сусам" },
      ro: { name: "Anthotyros & Sesame Puff Pastry", description: "Foietaj cu Anthotyros și Susan: Foietaj crocant cu brânză ușoară anthotyros și susan prăjit" }
    }
  },
  {
    id: "mini_pie_ham_cheese",
    categoryId: "mini_pies",
    price: 0.70,
    isSoldOut: false,
    translations: {
      el: { name: "Σφολιάτα με Ζαμπόν και Κασέρι", description: "Κλασικός συνδυασμός από εκλεκτό ζαμπόν και λιωμένο κασέρι σε αφράτη σφολιάτα" },
      en: { name: "Ham & Yellow Cheese Puff Pastry", description: "Classic combination of premium ham and melted yellow cheese in a fluffy puff pastry" },
      de: { name: "Ham & Yellow Cheese Puff Pastry", description: "Schinken-Käse-Blätterteig: Klassische Kombination aus feinem Schinken und geschmolzenem Käse" },
      fr: { name: "Ham & Yellow Cheese Puff Pastry", description: "Feuilleté Jambon & Fromage: Combinaison classique de jambon de qualité et de fromage fondu" },
      es: { name: "Ham & Yellow Cheese Puff Pastry", description: "Hojaldre de Jamón y Queso: Combinación clásica de jamón premium και queso derretido en hojaldre" },
      sr: { name: "Ham & Yellow Cheese Puff Pastry", description: "Lisnato sa Šunkom i Kačkavaljem: Klasična kombinacija šunke i topljenog sira u lisnatom testu" },
      bg: { name: "Ham & Yellow Cheese Puff Pastry", description: "Бутерка с Шунка и Кашкавал: Класическа комбинация от подбрана шунка и разтопен кашкавал" },
      ro: { name: "Ham & Yellow Cheese Puff Pastry", description: "Foietaj cu Șuncă și Cașcaval: Combinație clasică de șuncă premium și cașcaval topit" }
    }
  },
  {
    id: "mini_pie_sausage",
    categoryId: "mini_pies",
    price: 0.70,
    isSoldOut: false,
    translations: {
      el: { name: "Λουκανικοπιτάκι", description: "Νοστιμότατο μικρό λουκάνικο τυλιγμένο σε τραγανή σφολιάτα" },
      en: { name: "Mini Sausage Roll", description: "Delicious mini sausage wrapped in crispy puff pastry" },
      de: { name: "Mini Sausage Roll", description: "Mini-Würstchen-Pita: Köstliches Mini-Würstchen in knusprigem Blätterteig" },
      fr: { name: "Mini Sausage Roll", description: "Mini-feuilleté à la Saucisse: Délicieuse mini-saucisse enveloppée dans un feuilleté croustillant" },
      es: { name: "Mini Sausage Roll", description: "Mini Hojaldre de Salchicha: Deliciosa mini salchicha envuelta en hojaldre crujiente" },
      sr: { name: "Mini Sausage Roll", description: "Mini Kobasica u Testu: Ukusna mini kobasica umotana u hrskavo lisnato testo" },
      bg: { name: "Mini Sausage Roll", description: "Кренвиршка: Вкусна мини надеオка, обвита в хрупкаво бутер тесто" },
      ro: { name: "Mini Sausage Roll", description: "Mini Foietaj cu Crenvurști: Crenvurst gustos învelit în foietaj crocant" }
    }
  },
  {
    id: "mini_pie_bougatsa_cream",
    categoryId: "mini_pies",
    price: 0.70,
    isSoldOut: false,
    translations: {
      el: { name: "Μίνι Μπουγατσάκια με Κρέμα", description: "Ατομικά μπουγατσάκια με παραδοσιακή γλυκιά κρέμα" },
      en: { name: "Mini Cream Bougatsa", description: "Individual bite-sized bougatsa pastries filled with traditional sweet cream" },
      de: { name: "Mini Cream Bougatsa", description: "Mini-Bougatsa mit Creme: Kleine Bougatsa-Stücke gefüllt mit traditioneller süßer Grießcreme" },
      fr: { name: "Mini Cream Bougatsa", description: "Mini-bougatsa à la Crème: Petites portions individuelles de bougatsa fourrées à la crème douce" },
      es: { name: "Mini Cream Bougatsa", description: "Mini Bougatsa con Crema: Porciones individuales de bougatsa rellenas de crema dulce tradicional" },
      sr: { name: "Mini Cream Bougatsa", description: "Mini Bugaca sa Kremom: Pojedinačne male bugace punjene tradicionalnim slatkim kremom" },
      bg: { name: "Mini Cream Bougatsa", description: "Мини Бугаца с Крем: Индивидуални малки бугаци, пълнени с традиционен сладък крем" },
      ro: { name: "Mini Cream Bougatsa", description: "Mini Bougatsa cu Cremă: Bucăți individuale de bougatsa umplute cu cremă dulce tradițională" }
    }
  },
  // --- ΝΗΣΤΙΣΙΜΑ (VEGAN) ---
  {
    id: "mini_pie_mushroom",
    categoryId: "mini_pies",
    price: 0.70,
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Φύλλο με Μανιτάρι", description: "Νηστίσιμο πιτάκι με ζουμερή γέμιση από μανιτάρια και μυρωδικά" },
      en: { name: "Mushroom Phyllo Pastry", description: "Vegan mini pie with a juicy mushroom and herb filling" },
      de: { name: "Mushroom Phyllo Pastry", description: "Pilz-Phyllo-Pita: Vegane Mini-Pita mit saftiger Pilz- und Kräuterfüllung" },
      fr: { name: "Mushroom Phyllo Pastry", description: "Feuilleté Phyllo aux Champignons: Mini-tourte végétalienne farcie aux champignons et herbes" },
      es: { name: "Mushroom Phyllo Pastry", description: "Masa Filo con Champiñones: Mini pastel vegano con jugoso relleno de champiñones y hierbas" },
      sr: { name: "Mushroom Phyllo Pastry", description: "Posna Pita sa Pečurkama: Posna mini pita sa sočnim punjenjem od pečuraka και začinskog bilja" },
      bg: { name: "Mushroom Phyllo Pastry", description: "Баничка с Гъби: Постна мини баничка със сочен пълнеж από гъби и билки" },
      ro: { name: "Mushroom Phyllo Pastry", description: "Plăcintă în Foi cu Ciuperci: Mini plăcintă vegană cu umplutură suculentă de ciuperci și ierburi" }
    }
  }
];