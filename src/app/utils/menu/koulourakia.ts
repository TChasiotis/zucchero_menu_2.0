import { MenuItem } from "../menuData";

export const cookies: MenuItem[] = [
  {
    id: "cookie_classic",
    categoryId: "cookies",
    price: 10.00,
    unit: "kg",
    translations: {
      el: { name: "Κλασσικά Κουλουράκια", description: "Παραδοσιακά σπιτικά κουλουράκια, ιδανικά για να συνοδεύσουν τον καφέ ή το τσάι σας" },
      en: { name: "Classic Cookies", description: "Traditional homemade cookies, perfect for pairing with coffee or tea" },
      de: { name: "Classic Cookies", description: "Klassische Kekse: Traditionelle hausgemachte Kekse, perfekt zu Kaffee oder Tee" },
      fr: { name: "Classic Cookies", description: "Biscuits Classiques: Biscuits traditionnels faits maison, parfaits pour accompagner le café ou le thé" },
      es: { name: "Classic Cookies", description: "Galletas Clásicas: Galletas tradicionales caseras, perfectas para acompañar el café o el té" },
      sr: { name: "Classic Cookies", description: "Klasični Keksići: Tradicionalni domaći keksići, savršeni uz kafu ili čaj" },
      bg: { name: "Classic Cookies", description: "Класически Курабийки: Традиционни домашни курабийки, ιδανικά για καφέ ή τσάι" },
      ro: { name: "Classic Cookies", description: "Biscuiți Clasici: Biscuiți tradiționali de casă, perfecți pentru a fi savurați alături de cafea sau ceai" }
    }
  },
  {
    id: "ptifour_jam",
    categoryId: "cookies",
    price: 12.00,
    unit: "kg",
    translations: {
      el: { name: "Πτι-Φουρ με Μαρμελάδα", description: "Αφράτα μπισκοτάκια πτι-φουρ γεμισμένα με εκλεκτή μαρμελάδα φρούτων" },
      en: { name: "Petit-Four with Jam", description: "Soft petit-four cookies filled with fine fruit jam" },
      de: { name: "Petit-Four with Jam", description: "Petit-Four mit Marmelade: Weiche Petit-Four-Kekse gefüllt mit feiner Fruchtmarmelade" },
      fr: { name: "Petit-Four with Jam", description: "Petit-Four à la Confiture: Biscuits moelleux petit-four fourrés de confiture de fruits fine" },
      es: { name: "Petit-Four with Jam", description: "Petit-Four con Mermelada: Galletas tiernas de petit-four rellenas de mermelada de fruta fina" },
      sr: { name: "Petit-Four with Jam", description: "Pti-Fur sa Džemom: Mekani pti-fur keksići punjeni finim voćnim džemom" },
      bg: { name: "Petit-Four with Jam", description: "Пти-Фур с Μαρμαлад: Меки бисквитки пти-фур, пълни с фин плодов мармалад" },
      ro: { name: "Petit-Four with Jam", description: "Petit-Four cu Dulceață: Biscuiți moi petit-four umpluți cu dulceață fină de fructe" }
    }
  },
  {
    id: "ptifour_chocolate",
    categoryId: "cookies",
    price: 12.00,
    unit: "kg",
    translations: {
      el: { name: "Πτι-Φουρ με Σοκολάτα", description: "Αφράτα μπισκοτάκια πτι-φουρ με πλούσια γέμιση και μερική επικάλυψη τρούφας σοκολάτας" },
      en: { name: "Petit-Four with Chocolate", description: "Soft petit-four cookies with rich chocolate filling and partial chocolate sprinkle coating" },
      de: { name: "Petit-Four with Chocolate", description: "Petit-Four mit Schokolade: Weiche Petit-Four-Kekse mit reichhaltiger Schokoladenfüllung und teilweiser Schokostreusel-Garnitur" },
      fr: { name: "Petit-Four with Chocolate", description: "Petit-Four au Chocolat: Biscuits moelleux petit-four avec un riche fourrage au chocolat et partiellement recouverts de vermicelles en chocolat" },
      es: { name: "Petit-Four with Chocolate", description: "Petit-Four con Chocolate: Galletas tiernas de petit-four con rico relleno de chocolate y cobertura parcial de fideos de chocolate" },
      sr: { name: "Petit-Four with Chocolate", description: "Pti-Fur sa Čokoladom: Mekani pti-fur keksići sa bogatim čokoladnim punjenjem i delimičnim prelivom od čokoladnih mrvica" },
      bg: { name: "Petit-Four with Chocolate", description: "Пти-Фур с Шоколад: Меки бисквитки пти-фур с богат шоколадов пълнеж и частична глазура от шоколадови пръчици" },
      ro: { name: "Petit-Four cu Ciocolată", description: "Petit-Four cu Ciocolată: Biscuiți moi petit-four cu umplutură bogată de ciocolată și decorați parțial cu ornamente de ciocolată" }
    }
  },
  // --- ΚΑΡΤΑ ΠΛΗΡΟΦΟΡΙΩΝ ---
  {
    id: "cookies_info_general",
    categoryId: "cookies",
    price: 0,
    hidePrice: true,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Στα προϊόντα που χρεώνονται με το κιλό υπάρχει επιπλέον service fee +0.50€." },
      en: { name: "ℹ️ Useful Information", description: "An additional +0.50€ service fee applies to products sold per kilogram." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Für Produkte, die pro Kilogramm verkauft werden, fällt eine zusätzliche Servicegebühr von +0,50 € an." },
      fr: { name: "ℹ️ Informations utiles", description: "Des frais de service supplémentaires de +0,50 € s'appliquent aux produits vendus au kilogramme." },
      es: { name: "ℹ️ Información útil", description: "Se aplica un cargo de servicio adicional de +0,50 € a los productos vendidos por kilógramo." },
      sr: { name: "ℹ️ Korisne informacije", description: "Primenjuje se dodatna doplata za uslugu od +0.50€ za proizvode koji se prodaju po kilogramu." },
      bg: { name: "ℹ️ Полезна информация", description: "Удържа се допълнителна такса за обслужване от +0.50€ за продукти, продавани на килограм." },
      ro: { name: "ℹ️ Informații utile", description: "Se aplică o taxă suplimentară de servire de +0.50€ pentru produsele vândute la kilogram." }
    }
  }
];