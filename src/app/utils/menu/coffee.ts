import { MenuItem } from "../menuData";

export const coffee: MenuItem[] = [
  // ==========================================
  // ΚΡΥΟΙ ΚΑΦΕΔΕΣ
  // ==========================================
  {
    id: "coffee_freddo_espresso",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Freddo Espresso", description: "Διπλή δόση espresso χτυπημένη με πάγο για πλούσιο αφρό" },
      en: { name: "Freddo Espresso", description: "Double espresso shot shaken with ice for a rich foam" },
      de: { name: "Freddo Espresso", description: "Doppelter Espresso, mit Eis geschüttelt" },
      fr: { name: "Freddo Espresso", description: "Double espresso frappé avec des glaçons" },
      es: { name: "Freddo Espresso", description: "Doble espresso batido con hielo" },
      sr: { name: "Freddo Espresso", description: "Dupli espreso mućen sa ledom" },
      bg: { name: "Freddo Espresso", description: "Двойно еспресо, разбито с лед" },
      ro: { name: "Freddo Espresso", description: "Espresso dublu amestecat cu gheață" }
    }
  },
  {
    id: "coffee_freddo_cappuccino",
    categoryId: "coffee",
    price: 4.00,
    isSoldOut: false,
    translations: {
      el: { name: "Freddo Cappuccino", description: "Freddo Espresso με επικάλυψη από πλούσιο, βελούδινο αφρόγαλα" },
      en: { name: "Freddo Cappuccino", description: "Freddo Espresso topped with rich, velvety cold milk foam" },
      de: { name: "Freddo Cappuccino", description: "Freddo Espresso mit samtigem kaltem Milchschaum" },
      fr: { name: "Freddo Cappuccino", description: "Freddo Espresso surmonté d'une mousse de lait froide" },
      es: { name: "Freddo Cappuccino", description: "Freddo Espresso coronado con espuma de leche fría" },
      sr: { name: "Freddo Cappuccino", description: "Freddo Espresso sa bogatom hladnom mlečnom penom" },
      bg: { name: "Freddo Cappuccino", description: "Фредо Еспресо с богата студена млечна пяна" },
      ro: { name: "Freddo Cappuccino", description: "Freddo Espresso acoperit cu spumă de lapte rece" }
    }
  },
  {
    id: "coffee_frappe",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Nescafé Φραπέ", description: "Ο κλασικός, αγαπημένος παγωμένος στιγμιαίος καφές" },
      en: { name: "Nescafé Frappé", description: "The classic, beloved iced instant coffee" },
      de: { name: "Nescafé Frappé", description: "Der classic griechische Eis-Instantkaffee" },
      fr: { name: "Nescafé Frappé", description: "Le classique café instantané glacé grec" },
      es: { name: "Nescafé Frappé", description: "El clásico café instantáneo helado griego" },
      sr: { name: "Nescafé Frape", description: "Klasična grčka ledena instant kafa" },
      bg: { name: "Nescafé Фрапе", description: "Класическото гръцко студено инстантно кафе" },
      ro: { name: "Nescafé Frappé", description: "Clasica cafea instant rece cu gheață" }
    }
  },
  {
    id: "coffee_iced_latte",
    categoryId: "coffee",
    price: 4.20,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Latte", description: "Δόση espresso με άφθονο παγωμένο γάλα" },
      en: { name: "Iced Latte", description: "Espresso shot with plenty of cold milk" },
      de: { name: "Iced Latte", description: "Espresso mit viel kalter Milch" },
      fr: { name: "Iced Latte", description: "Espresso avec beaucoup de lait froid" },
      es: { name: "Iced Latte", description: "Espresso con abundante leche fría" },
      sr: { name: "Iced Latte", description: "Espreso sa puno hladnog mleka" },
      bg: { name: "Студено Лате", description: "Еспресо с много студено мляко" },
      ro: { name: "Iced Latte", description: "Espresso cu mult lapte rece" }
    }
  },
  {
    id: "coffee_iced_macchiato",
    categoryId: "coffee",
    price: 3.70,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Macchiato", description: "Παγωμένος espresso 'λερωμένος' με λίγο αφρόγαλα" },
      en: { name: "Iced Macchiato", description: "Iced espresso 'stained' with a touch of milk foam" },
      de: { name: "Iced Macchiato", description: "Eis-Espresso, verfeinert mit etwas Milchschaum" },
      fr: { name: "Iced Macchiato", description: "Espresso glacé 'tacheté' de mousse de lait" },
      es: { name: "Iced Macchiato", description: "Espresso helado 'manchado' con espuma de leche" },
      sr: { name: "Iced Macchiato", description: "Ledeni espreso 'umrljan' mlečnom penom" },
      bg: { name: "Студено Макиато", description: "Студено еспресо с малко млечна пяна" },
      ro: { name: "Iced Macchiato", description: "Espresso cu gheață cu un strop de spumă de lapte" }
    }
  },
  {
    id: "coffee_iced_americano",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Iced Americano", description: "Διπλή δόση espresso αραιωμένη με παγωμένο νερό" },
      en: { name: "Iced Americano", description: "Double espresso shot diluted with iced water" },
      de: { name: "Iced Americano", description: "Doppelter Espresso, verlängert mit Eiswasser" },
      fr: { name: "Iced Americano", description: "Double espresso allongé avec de l'eau glacée" },
      es: { name: "Iced Americano", description: "Doble espresso diluido con agua helada" },
      sr: { name: "Iced Americano", description: "Dupli espreso razblažen ledenom vodom" },
      bg: { name: "Студено Америкаνο", description: "Двойно еспресо, разредено с ледена вода" },
      ro: { name: "Iced Americano", description: "Espresso dublu diluat cu apă rece" }
    }
  },

  // ==========================================
  // ΜΙΑ ΚΟΜΨΗ ΓΡΑΜΜΗ ΔΙΑΧΩΡΙΣΜΟΥ (ΚΡΥΟΙ -> ΖΕΣΤΟΙ)
  // ==========================================
  {
    id: "separator_cold_to_hot",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },

  // ==========================================
  // ΖΕΣΤΟΙ ΚΑΦΕΔΕΣ (ΜΑΖΙ ΚΑΙ ΟΙ ΦΙΛΤΡΟΥ)
  // ==========================================
  {
    id: "coffee_espresso_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso (Μονός)", description: "Αυθεντικός ιταλικός espresso με πλούσια κρέμα" },
      en: { name: "Espresso (Single)", description: "Authentic Italian espresso with rich crema" },
      de: { name: "Espresso (Einfach)", description: "Authentischer italienischer Espresso" },
      fr: { name: "Espresso (Simple)", description: "Espresso italien authentique" },
      es: { name: "Espresso (Sencillo)", description: "Auténtico espresso italiano" },
      sr: { name: "Espreso (Jedan)", description: "Autentični italijanski espreso" },
      bg: { name: "Еспресо (Единично)", description: "Автентично италианско еспресо" },
      ro: { name: "Espresso (Simplu)", description: "Espresso italian autentic" }
    }
  },
  {
    id: "coffee_espresso_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso (Διπλός)", description: "Διπλή δόση αυθεντικού ιταλικού espresso" },
      en: { name: "Espresso (Double)", description: "Double shot of authentic Italian espresso" },
      de: { name: "Espresso (Doppelt)", description: "" },
      fr: { name: "Espresso (Double)", description: "" },
      es: { name: "Espresso (Doble)", description: "" },
      sr: { name: "Espreso (Dupli)", description: "" },
      bg: { name: "Еспресо (Двойно)", description: "" },
      ro: { name: "Espresso (Dublu)", description: "" }
    }
  },
  {
    id: "coffee_cappuccino_single",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Cappuccino (Μονός)", description: "Espresso με ζεστό αφρόγαλα και κρεμώδη υφή" },
      en: { name: "Cappuccino (Single)", description: "Espresso with hot steamed milk and a creamy texture" },
      de: { name: "Cappuccino (Einfach)", description: "" },
      fr: { name: "Cappuccino (Simple)", description: "" },
      es: { name: "Cappuccino (Sencillo)", description: "" },
      sr: { name: "Kapućino (Jedan)", description: "" },
      bg: { name: "Капучино (Единично)", description: "" },
      ro: { name: "Cappuccino (Simplu)", description: "" }
    }
  },
  {
    id: "coffee_cappuccino_double",
    categoryId: "coffee",
    price: 4.00,
    isSoldOut: false,
    translations: {
      el: { name: "Cappuccino (Διπλός)", description: "Διπλός espresso με πλούσιο ζεστό αφρόγαλα" },
      en: { name: "Cappuccino (Double)", description: "Double espresso with rich hot steamed milk" },
      de: { name: "Cappuccino (Doppelt)", description: "" },
      fr: { name: "Cappuccino (Double)", description: "" },
      es: { name: "Cappuccino (Doble)", description: "" },
      sr: { name: "Kapućino (Dupli)", description: "" },
      bg: { name: "Капучино (Двойно)", description: "" },
      ro: { name: "Cappuccino (Dublu)", description: "" }
    }
  },
  {
    id: "coffee_nescafe_hot",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Nescafé (Ζεστός)", description: "Ο κλασικός, τονωτικός ζεστός στιγμιαίος καφές" },
      en: { name: "Nescafé (Hot)", description: "The classic, invigorating hot instant coffee" },
      de: { name: "Nescafé (Heiß)", description: "" },
      fr: { name: "Nescafé (Chaud)", description: "" },
      es: { name: "Nescafé (Caliente)", description: "" },
      sr: { name: "Neskafa (Topla)", description: "" },
      bg: { name: "Нескафе (Топло)", description: "" },
      ro: { name: "Nescafé (Cald)", description: "" }
    }
  },
  {
    id: "coffee_greek_single",
    categoryId: "coffee",
    price: 2.50,
    isSoldOut: false,
    translations: {
      el: { name: "Ελληνικός (Μονός)", description: "Παραδοσιακός ελληνικός καφές ψημένος στο μπρίκι" },
      en: { name: "Greek Coffee (Single)", description: "Traditional Greek coffee brewed in a briki" },
      de: { name: "Griechischer Kaffee (Einfach)", description: "" },
      fr: { name: "Café Grec (Simple)", description: "" },
      es: { name: "Café Griego (Sencillo)", description: "" },
      sr: { name: "Grčka Kafa (Jedna)", description: "" },
      bg: { name: "Гръцко Кафе (Единично)", description: "" },
      ro: { name: "Cafea Grecească (Simplă)", description: "" }
    }
  },
  {
    id: "coffee_greek_double",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Ελληνικός (Διπλός)", description: "Διπλή δόση παραδοσιακού ελληνικού καφέ" },
      en: { name: "Greek Coffee (Double)", description: "Double serving of traditional Greek coffee" },
      de: { name: "Griechischer Kaffee (Doppelt)", description: "" },
      fr: { name: "Café Grec (Double)", description: "" },
      es: { name: "Café Griego (Doble)", description: "" },
      sr: { name: "Grčka Kafa (Dupla)", description: "" },
      bg: { name: "Гръцко Кафе (Двойνο)", description: "" },
      ro: { name: "Cafea Grecească (Dublă)", description: "" }
    }
  },
  {
    id: "coffee_latte_single",
    categoryId: "coffee",
    price: 4.20,
    isSoldOut: false,
    translations: {
      el: { name: "Caffè Latte (Μονός)", description: "Espresso με άφθονο ζεστό γάλα και ελαφρύ αφρόγαλα" },
      en: { name: "Caffè Latte (Single)", description: "Espresso with plenty of hot milk and light foam" },
      de: { name: "Caffè Latte (Einfach)", description: "" },
      fr: { name: "Caffè Latte (Simple)", description: "" },
      es: { name: "Caffè Latte (Sencillo)", description: "" },
      sr: { name: "Kafe Late (Jedan)", description: "" },
      bg: { name: "Кафе Лате (Единично)", description: "" },
      ro: { name: "Caffè Latte (Simplu)", description: "" }
    }
  },
  {
    id: "coffee_latte_double",
    categoryId: "coffee",
    price: 4.70,
    isSoldOut: false,
    translations: {
      el: { name: "Caffè Latte (Διπλός)", description: "Διπλή δόση espresso με άφθονο ζεστό γάλα" },
      en: { name: "Caffè Latte (Double)", description: "Double espresso shot with plenty of hot milk" },
      de: { name: "Caffè Latte (Doppelt)", description: "" },
      fr: { name: "Caffè Latte (Double)", description: "" },
      es: { name: "Caffè Latte (Doble)", description: "" },
      sr: { name: "Kafe Late (Dupli)", description: "" },
      bg: { name: "Кафе Лате (Двойно)", description: "" },
      ro: { name: "Caffè Latte (Dublu)", description: "" }
    }
  },
  {
    id: "coffee_macchiato_single",
    categoryId: "coffee",
    price: 3.20,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Macchiato (Μονός)", description: "Espresso 'λερωμένος' με μια κουταλιά ζεστό αφρόγαλα" },
      en: { name: "Espresso Macchiato (Single)", description: "Espresso 'stained' with a spoonful of hot milk foam" },
      de: { name: "Espresso Macchiato (Einfach)", description: "" },
      fr: { name: "Espresso Macchiato (Simple)", description: "" },
      es: { name: "Espresso Macchiato (Sencillo)", description: "" },
      sr: { name: "Espreso Makijato (Jedan)", description: "" },
      bg: { name: "Еспресо Макиато (Единично)", description: "" },
      ro: { name: "Espresso Macchiato (Simplu)", description: "" }
    }
  },
  {
    id: "coffee_macchiato_double",
    categoryId: "coffee",
    price: 3.70,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Macchiato (Διπλός)", description: "Διπλός espresso με μια κουταλιά ζεστό αφρόγαλα" },
      en: { name: "Espresso Macchiato (Double)", description: "Double espresso with a spoonful of hot milk foam" },
      de: { name: "Espresso Macchiato (Doppelt)", description: "" },
      fr: { name: "Espresso Macchiato (Double)", description: "" },
      es: { name: "Espresso Macchiato (Doble)", description: "" },
      sr: { name: "Espreso Makijato (Dupli)", description: "" },
      bg: { name: "Еспресо Макиато (Двойно)", description: "" },
      ro: { name: "Espresso Macchiato (Dublu)", description: "" }
    }
  },
  {
    id: "coffee_americano_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Americano (Μονός)", description: "Espresso αραιωμένος με ζεστό νερό" },
      en: { name: "Espresso Americano (Single)", description: "Espresso shot diluted with hot water" },
      de: { name: "Espresso Americano (Einfach)", description: "" },
      fr: { name: "Espresso Americano (Simple)", description: "" },
      es: { name: "Espresso Americano (Sencillo)", description: "" },
      sr: { name: "Espreso Amerikano (Jedan)", description: "" },
      bg: { name: "Еспресо Американо (Единично)", description: "" },
      ro: { name: "Espresso Americano (Simplu)", description: "" }
    }
  },
  {
    id: "coffee_americano_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Americano (Διπλός)", description: "Διπλή δόση espresso αραιωμένη με ζεστό νερό" },
      en: { name: "Espresso Americano (Double)", description: "Double espresso shot diluted with hot water" },
      de: { name: "Espresso Americano (Doppelt)", description: "" },
      fr: { name: "Espresso Americano (Double)", description: "" },
      es: { name: "Espresso Americano (Doble)", description: "" },
      sr: { name: "Espreso Amerikano (Dupli)", description: "" },
      bg: { name: "Еспресо Американо (Двойно)", description: "" },
      ro: { name: "Espresso Americano (Dublu)", description: "" }
    }
  },
  {
    id: "coffee_lungo_single",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Lungo (Μονός)", description: "Espresso με μεγαλύτερη εκχύλιση νερού" },
      en: { name: "Espresso Lungo (Single)", description: "Espresso with a longer water extraction" },
      de: { name: "Espresso Lungo (Einfach)", description: "" },
      fr: { name: "Espresso Lungo (Simple)", description: "" },
      es: { name: "Espresso Lungo (Sencillo)", description: "" },
      sr: { name: "Espreso Lungo (Jedan)", description: "" },
      bg: { name: "Еспресо Лунго (Единично)", description: "" },
      ro: { name: "Espresso Lungo (Simplu)", description: "" }
    }
  },
  {
    id: "coffee_lungo_double",
    categoryId: "coffee",
    price: 3.50,
    isSoldOut: false,
    translations: {
      el: { name: "Espresso Lungo (Διπλός)", description: "Διπλή δόση espresso με μεγαλύτερη εκχύλιση νερού" },
      en: { name: "Espresso Lungo (Double)", description: "Double espresso with a longer water extraction" },
      de: { name: "Espresso Lungo (Doppelt)", description: "" },
      fr: { name: "Espresso Lungo (Double)", description: "" },
      es: { name: "Espresso Lungo (Doble)", description: "" },
      sr: { name: "Espreso Lungo (Dupli)", description: "" },
      bg: { name: "Еспресо Лунго (Двойно)", description: "" },
      ro: { name: "Espresso Lungo (Dublu)", description: "" }
    }
  },
  
  // --- ΟΙ ΚΑΦΕΔΕΣ ΦΙΛΤΡΟΥ ΜΠΑΙΝΟΥΝ ΕΔΩ (ΜΑΖΙ ΜΕ ΤΟΥΣ ΖΕΣΤΟΥΣ) ---
  {
    id: "coffee_filter_regular",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Κλασικός)", description: "Αρωματικός καφές φίλτρου με γεμάτο σώμα" },
      en: { name: "Filter Coffee (Regular)", description: "Aromatic filter coffee with a full body" },
      de: { name: "Filterkaffee (Klassisch)", description: "" },
      fr: { name: "Café Filtre (Classique)", description: "" },
      es: { name: "Café de Filtro (Clásico)", description: "" },
      sr: { name: "Filter Kafa (Klasična)", description: "" },
      bg: { name: "Филтър Кафе (Класическо)", description: "" },
      ro: { name: "Cafea la Filtru (Clasică)", description: "" }
    }
  },
  {
    id: "coffee_filter_decaf",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Ντεκαφεϊνέ)", description: "Ολοκληρωμένη γεύση καφέ φίλτρου, χωρίς καφεΐνη" },
      en: { name: "Filter Coffee (Decaf)", description: "Full filter coffee taste, without the caffeine" },
      de: { name: "Filterkaffee (Koffeinfrei)", description: "" },
      fr: { name: "Café Filtre (Décaféiné)", description: "" },
      es: { name: "Café de Filtro (Descafeinado)", description: "" },
      sr: { name: "Filter Kafa (Bez kofeina)", description: "" },
      bg: { name: "Филтър Кафе (Без кофеин)", description: "" },
      ro: { name: "Cafea la Filtru (Decofeinizată)", description: "" }
    }
  },
  {
    id: "coffee_filter_salted_caramel",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Salted Caramel)", description: "Αρωματικός καφές φίλτρου με νότες από αλμυρή καραμέλα" },
      en: { name: "Filter Coffee (Salted Caramel)", description: "Aromatic filter coffee with notes of salted caramel" },
      de: { name: "Filterkaffee (Gesalzenes Karamell)", description: "" },
      fr: { name: "Café Filtre (Caramel Beurre Salé)", description: "" },
      es: { name: "Café de Filtro (Caramelo Salado)", description: "" },
      sr: { name: "Filter Kafa (Slana Karamela)", description: "" },
      bg: { name: "Филтър Кафе (Солен Карамел)", description: "" },
      ro: { name: "Cafea la Filtru (Caramel Sărat)", description: "" }
    }
  },
  {
    id: "coffee_filter_vanilla_hazelnut",
    categoryId: "coffee",
    price: 3.00,
    isSoldOut: false,
    translations: {
      el: { name: "Καφές Φίλτρου (Vanilla & Hazelnut)", description: "Αρωματικός καφές φίλτρου με γλυκιά βανίλια και φουντούκι" },
      en: { name: "Filter Coffee (Vanilla & Hazelnut)", description: "Aromatic filter coffee with sweet vanilla and hazelnut" },
      de: { name: "Filterkaffee (Vanille & Haselnuss)", description: "" },
      fr: { name: "Café Filtre (Vanille & Noisette)", description: "" },
      es: { name: "Café de Filtro (Vainilla y Avellana)", description: "" },
      sr: { name: "Filter Kafa (Vanila i Lešnik)", description: "" },
      bg: { name: "Филтър Кафе (Ванилия и Лешник)", description: "" },
      ro: { name: "Cafea la Filtru (Vanilie și Alune)", description: "" }
    }
  },

  // ==========================================
  // ΜΙΑ ΚΟΜΨΗ ΓΡΑΜΜΗ ΔΙΑΧΩΡΙΣΜΟΥ ΠΡΙΝ ΤΑ EXTRAS
  // ==========================================
  {
    id: "separator_to_extras",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSeparator: true,
    isSoldOut: false,
    translations: { el: { name: "", description: "" }, en: { name: "", description: "" }, de: { name: "", description: "" }, fr: { name: "", description: "" }, es: { name: "", description: "" }, sr: { name: "", description: "" }, bg: { name: "", description: "" }, ro: { name: "", description: "" } }
  },

  // ==========================================
  // CUSTOMIZATION / EXTRAS
  // ==========================================
  {
    id: "coffee_blend_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Ποικιλία Espresso: Saquella Κανονικός ή Saquella Decaf", description: "Επιλέξτε ανάμεσα στον κλασικό μας καφέ ή χωρίς καφεΐνη" },
      en: { name: "Espresso Blend: Saquella Regular or Saquella Decaf", description: "Choose between our classic blend or caffeine-free" },
      de: { name: "Espresso-Mischung: Saquella Normal oder Saquella Decaf", description: "" },
      fr: { name: "Mélange Espresso: Saquella Classique ou Saquella Décaféiné", description: "" },
      es: { name: "Mezcla de Espresso: Saquella Regular o Saquella Descafeinado", description: "" },
      sr: { name: "Espreso Mešavina: Saquella Običan ili Saquella Bez kofeina", description: "" },
      bg: { name: "Еспресо Бленд: Saquella Нормално или Saquella Без кофеин", description: "" },
      ro: { name: "Amestec Espresso: Saquella Regular sau Saquella Decaf", description: "" }
    }
  },
  {
    id: "coffee_sugar_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Γλυκαντικά: Λευκή, Καστανή, Ζαχαρίνη, Στέβια, Μέλι", description: "" },
      en: { name: "Sugar: White, Brown, Artificial Sweetener, Stevia, Honey", description: "" },
      de: { name: "Zucker: Weiß, Braun, Süßstoff, Stevia, Honig", description: "" },
      fr: { name: "Sucre: Blanc, Roux, Édulcorant, Stevia, Miel", description: "" },
      es: { name: "Azúcar: Blanco, Moreno, Edulcorante, Stevia, Miel", description: "" },
      sr: { name: "Šećer: Beli, Smeđi, Zaslađivač, Stevia, Med", description: "" },
      bg: { name: "Захар: Бяла, Кафява, Подсладител, Стевия, Мед", description: "" },
      ro: { name: "Zahăr: Alb, Brun, Îndulcitor, Stevia, Miere", description: "" }
    }
  },
  {
    id: "coffee_milk_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Γάλα: Φρέσκο, Εβαπορέ, Φυτικό", description: "" },
      en: { name: "Milk: Fresh, Evaporated, Vegan", description: "" },
      de: { name: "Milch: Frisch, Kondensmilch, Vegan", description: "" },
      fr: { name: "Lait: Frais, Concentré, Végétalien", description: "" },
      es: { name: "Leche: Fresca, Evaporada, Vegana", description: "" },
      sr: { name: "Mleko: Sveže, Uparavano, Vegansko", description: "" },
      bg: { name: "Мляко: Прясно, Кондензирано, Веган", description: "" },
      ro: { name: "Lapte: Proaspăt, Evaporat, Vegan", description: "" }
    }
  },
  {
    id: "coffee_topping_syrup_choices",
    categoryId: "coffee",
    price: 0,
    hidePrice: true,
    isSoldOut: false,
    translations: {
      el: { name: "Επικάλυψη/Σιρόπι: Κανέλα, Σοκολάτα", description: "" },
      en: { name: "Topping/Syrup: Cinnamon, Chocolate", description: "" },
      de: { name: "Topping/Sirup: Zimt, Schokolade", description: "" },
      fr: { name: "Garniture/Sirop: Cannelle, Chocolat", description: "" },
      es: { name: "Cobertura/Sirope: Canela, Chocolate", description: "" },
      sr: { name: "Dodaci/Sirup: Cimet, Čokolada", description: "" },
      bg: { name: "Топинг/Сироп: Канела, Шоколад", description: "" },
      ro: { name: "Topping/Sirop: Scorțișoară, Ciocolată", description: "" }
    }
  },
  {
    id: "coffee_extra_shot",
    categoryId: "coffee",
    price: 0.40,
    isSoldOut: false,
    translations: {
      el: { name: "Έξτρα Δόση Espresso", description: "Μπορεί να προστεθεί μόνο σε καφέδες με βάση το Espresso" },
      en: { name: "Extra Espresso Shot", description: "Can only be added to Espresso-based coffees" },
      de: { name: "Extra Espresso Shot", description: "Kann nur zu Espresso-Kaffees hinzugefügt werden" },
      fr: { name: "Dose d'Espresso Supplémentaire", description: "Uniquement pour les cafés à base d'Espresso" },
      es: { name: "Dosis Extra de Espresso", description: "Solo para cafés a base de Espresso" },
      sr: { name: "Dodatni Espreso Šot", description: "Samo za kafe na bazi espresa" },
      bg: { name: "Допълнителен Еспресо Шот", description: "Само за кафета на базата на еспресо" },
      ro: { name: "Shot Extra de Espresso", description: "Doar pediatric pentru cafele pe bază de Espresso" }
    }
  },
  {
    id: "coffee_extra_ice_cream",
    categoryId: "coffee",
    price: 2.00,
    isSoldOut: false,
    translations: {
      el: { name: "Μπάλα Παγωτό (Στον καφέ)", description: "" },
      en: { name: "Ice Cream Scoop (In coffee)", description: "" },
      de: { name: "Eiskugel (Im Kaffee)", description: "" },
      fr: { name: "Boule de Glace (Dans le café)", description: "" },
      es: { name: "Bola de Helado (En el café)", description: "" },
      sr: { name: "Kugla Sladoleda (U kafi)", description: "" },
      bg: { name: "Топка Сладолед (В кафето)", description: "" },
      ro: { name: "Cupă de Înghețată (În cafea)", description: "" }
    }
  }
];