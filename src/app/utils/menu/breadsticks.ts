import { MenuItem } from "../menuData";

export const breadsticks: MenuItem[] = [
  // --- ΚΑΡΤΑ ΠΛΗΡΟΦΟΡΙΩΝ (ΜΠΑΙΝΕΙ ΠΡΩΤΗ) ---
  {
    id: "breadsticks_info_general",
    categoryId: "breadsticks",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "ℹ️ Χρήσιμες Πληροφορίες", description: "Υπάρχει επιπλέον πάγια χρέωση service fee +0.50€ ανά παραγγελία." },
      en: { name: "ℹ️ Useful Information", description: "An additional flat +0.50€ service fee applies per order." },
      de: { name: "ℹ️ Nützliche Informationen", description: "Es fällt eine zusätzliche pauschale Servicegebühr von +0,50 € pro Bestellung an." },
      fr: { name: "ℹ️ Informations utiles", description: "Des frais de service forfaitaires supplémentaires de +0,50 € s'appliquent par commande." },
      es: { name: "ℹ️ Información útil", description: "Se aplica un cargo de servicio fijo adicional de +0,50 € por pedido." },
      sr: { name: "ℹ️ Korisne informacije", description: "Primenjuje se dodatna fiksna doplata za uslugu od +0.50€ po porudžbini." },
      bg: { name: "ℹ️ Полезна информация", description: "Удържа се допълнителна фиксирана такса за обслужване от +0.50€ на поръчка." },
      ro: { name: "ℹ️ Informații utile", description: "Se aplică o taxă de servire fixă suplimentară de +0.50€ pe comandă." }
    }
  },
  {
    id: "separator_brdstcks_info",
    categoryId: "breadsticks",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },
  // --- ΠΡΟΪΟΝΤΑ ---
  {
    id: "breadstick_sesame",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια με Σουσάμι", description: "Τραγανά παραδοσιακά κριτσίνια καλυμμένα με καβουρδισμένο σουσάμι" },
      en: { name: "Sesame Breadsticks", description: "Crispy traditional breadsticks covered in toasted sesame seeds" },
      de: { name: "Sesam-Grissini", description: "Knusprige traditionelle Grissini, umhüllt von gerösteten Sesamsamen" },
      fr: { name: "Gressins au Sésame", description: "Gressins traditionnels croustillants recouverts de graines de sésame grillées" },
      es: { name: "Palitos de Pan con Sésamo", description: "Palitos de pan tradicionales crujientes cubiertos con semillas de sésamo tostadas" },
      sr: { name: "Grisine sa Susamom", description: "Hrskave tradicionalne grisine posute tostiranim susamom" },
      bg: { name: "Гризини със Сусам", description: "Хрупкави традиционни гризини, покрити с препечен сусам" },
      ro: { name: "Grisine cu Susan", description: "Grisine tradiționale crocante acoperite cu semințe de susan prăjite" }
    }
  },
  {
    id: "breadstick_whole_wheat_sesame",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια Ολικής Αλέσεως με Σουσάμι", description: "Θρεπτικά κριτσίνια από αλεύρι ολικής αλέσεως, πασπαλισμένα με σουσάμι" },
      en: { name: "Whole Wheat Sesame Breadsticks", description: "Nutritious breadsticks made from whole wheat flour, topped with sesame" },
      de: { name: "Vollkorn-Sesam-Grissini", description: "Nahrhafte Grissini aus Vollkornmehl, bestreut mit Sesam" },
      fr: { name: "Gressins Complets au Sésame", description: "Gressins nutritifs à base de farine complète, garnis de sésame" },
      es: { name: "Palitos de Pan Integral con Sésamo", description: "Nutritivos palitos de pan de harina integral, cubiertos con sésamo" },
      sr: { name: "Integralna Grisine sa Susamom", description: "Hranljive grisine od integralnog brašna, posute susamom" },
      bg: { name: "Пълнозърнести Гризини със Сусам", description: "Хранителни гризини от пълнозърнесто брашно, поръсени със сусам" },
      ro: { name: "Grisine Integrale cu Susan", description: "Grisine nutritive din făină integrală, presărate cu susan" }
    }
  },
  {
    id: "breadstick_kasseri",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    hasDairy: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια με Κασέρι", description: "Αφράτα κριτσίνια ζυμωμένα με τυρί και επικάλυψη από ψημένο, λαχταριστό κασέρι" },
      en: { name: "Kasseri Cheese Breadsticks", description: "Fluffy breadsticks kneaded with cheese and topped with a delicious baked kasseri crust" },
      de: { name: "Kasseri-Käse-Grissini", description: "Fluffige Grissini, mit Käse geknetet und einer köstlichen gebackenen Kasseri-Kruste" },
      fr: { name: "Gressins au Fromage Kasseri", description: "Gressins moelleux pétris avec du fromage et garnis d'une délicieuse croûte de kasseri cuit" },
      es: { name: "Palitos de Pan con Queso Kasseri", description: "Palitos de pan esponjosos amasados con queso y cubiertos con una deliciosa costra de kasseri horneado" },
      sr: { name: "Grisine sa Kačkavaljem", description: "Mekane grisine umešene sa sirom i ukusnom pečenom koricom od kačkavalja" },
      bg: { name: "Гризини с Кашкавал", description: "Пухкави гризини, замесени със сирене и вкусна запечена коричка от кашкавал" },
      ro: { name: "Grisine cu Cașcaval", description: "Grisine pufoase frământate cu brânză și o crustă delicioasă de cașcaval copt" }
    }
  },
  {
    id: "breadstick_corn",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια με Καλαμπόκι", description: "Ιδιαίτερα κριτσίνια από αλεύρι καλαμποκιού, με επικάλυψη από τραγανές νιφάδες (corn flakes)" },
      en: { name: "Corn Breadsticks", description: "Unique breadsticks made from sweet cornmeal, coated with crispy corn flakes" },
      de: { name: "Mais-Grissini", description: "Einzigartige Grissini aus süßem Maismehl, umhüllt von knusprigen Cornflakes" },
      fr: { name: "Gressins au Maïs", description: "Gressins uniques à base de farine de maïs doux, enrobés de flocons de maïs croustillants" },
      es: { name: "Palitos de Pan de Maíz", description: "Palitos de pan únicos hechos de harina de maíz dulce, cubiertos con hojuelas de maíz crujientes" },
      sr: { name: "Grisine od Kukuruza", description: "Jedinstvene grisine od slatkog kukuruznog brašna, obložene hrskavim kukuruznim pahuljicama" },
      bg: { name: "Царевични Гризини", description: "Уникални гризини от сладко царевично брашно, покрити с хрупкави царевични люспи" },
      ro: { name: "Grisine de Porumb", description: "Grisine unice din făină de porumb dulce, învelite în fulgi de porumb crocanți" }
    }
  },
  {
    id: "breadstick_multigrain",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια Πολύσπορα", description: "Υγιεινά κριτσίνια με ποικιλία θρεπτικών σπόρων" },
      en: { name: "Multigrain Breadsticks", description: "Healthy breadsticks packed with a variety of nutritious seeds" },
      de: { name: "Mehrkorn-Grissini", description: "Gesunde Grissini, vollgepackt mit einer Vielzahl nahrhafter Samen" },
      fr: { name: "Gressins aux Multigraines", description: "Gressins sains remplis d'une variété de graines nutritives" },
      es: { name: "Palitos de Pan Multigrano", description: "Palitos de pan saludables repletos de una variedad de semillas nutritivas" },
      sr: { name: "Multigrain Grisine", description: "Zdrave grisine obogaćene raznim hranljivim semenkama" },
      bg: { name: "Многозърнести Гризини", description: "Здравословни гризини, пълни с разнообразие от хранителни семена" },
      ro: { name: "Grisine Multicereale", description: "Grisine sănătoase pline de o varietate de semințe nutritive" }
    }
  },
  {
    id: "breadstick_pretzel",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Πρέτσελ", description: "Κλασικά γερμανικού τύπου κριτσίνια πρέτσελ με χοντρό αλάτι" },
      en: { name: "Pretzel Breadsticks", description: "Classic German-style pretzel breadsticks sprinkled with coarse salt" },
      de: { name: "Brezel-Grissini", description: "Klassische Brezel-Grissini nach deutscher Art, bestreut mit grobem Salz" },
      fr: { name: "Gressins Bretzel", description: "Gressins façon bretzel allemande classique, saupoudrés de gros sel" },
      es: { name: "Palitos de Pan Pretzel", description: "Palitos de pan tipo pretzel alemán clásico, espolvoreados con sal gruesa" },
      sr: { name: "Preca Grisine", description: "Klasične nemačke preca grisine posute krupnom solju" },
      bg: { name: "Прецел Гризини", description: "Класически немски прецел гризини, поръсени с едра сол" },
      ro: { name: "Grisine tip Covrig", description: "Grisine clasice tip covrig german, presărate cu sare grunjoasă" }
    }
  },
  {
    id: "breadstick_kefalotyri",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    hasDairy: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια με Κεφαλοτύρι", description: "Τραγανά κριτσίνια με την πλούσια, αλμυρή γεύση από αυθεντικό κεφαλοτύρι" },
      en: { name: "Kefalotyri Cheese Breadsticks", description: "Crispy breadsticks with the rich, savory flavor of authentic Greek kefalotyri cheese" },
      de: { name: "Kefalotyri-Käse-Grissini", description: "Knusprige Grissini mit dem reichhaltigen, herzhaften Geschmack von echtem Kefalotyri-Käse" },
      fr: { name: "Gressins au Fromage Kefalotyri", description: "Gressins croustillants à la saveur riche et savoureuse de l'authentique fromage kefalotyri" },
      es: { name: "Palitos de Pan con Queso Kefalotyri", description: "Palitos de pan crujientes con el sabor rico y sabroso del auténtico queso kefalotyri" },
      sr: { name: "Grisine sa Kefalotiri Sirom", description: "Hrskave grisine sa bogatim, slanim ukusom autentičnog kefalotiri sira" },
      bg: { name: "Гризини с Кефалотири", description: "Хрупкави гризини с богат, солен вкус на автентично сирене кефалотири" },
      ro: { name: "Grisine cu Brânză Kefalotyri", description: "Grisine crocante cu aroma bogată și savuroasă a brânzei autentice kefalotyri" }
    }
  },
  {
    id: "breadstick_carrot",
    categoryId: "breadsticks",
    price: 12.00,
    unit: "kg",
    isVegan: true,
    isSoldOut: false,
    translations: {
      el: { name: "Κριτσίνια με Καρότο", description: "Ξεχωριστά και γευστικά κριτσίνια ζυμωμένα με φρέσκο καρότο" },
      en: { name: "Carrot Breadsticks", description: "Distinctive and tasty breadsticks baked with fresh carrot" },
      de: { name: "Karotten-Grissini", description: "Besondere und schmackhafte Grissini, gebacken mit frischen Karotten" },
      fr: { name: "Gressins à la Carotte", description: "Gressins originaux et savoureux préparés avec des carottes fraîches" },
      es: { name: "Palitos de Pan con Zanahoria", description: "Palitos de pan distintivos y sabrosos horneados con zanahoria fresca" },
      sr: { name: "Grisine sa Šargarepom", description: "Jedinstvene i ukusne grisine pečene sa svežom šargarepom" },
      bg: { name: "Гризини с Морков", description: "Отличителни и вкусни гризини, замесени с пресен морков" },
      ro: { name: "Grisine cu Morcov", description: "Grisine deosebite și gustoase coapte cu morcov proaspăt" }
    }
  }
];