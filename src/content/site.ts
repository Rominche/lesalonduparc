export const site = {
  name: "Le Salon du Parc",
  tagline: "Coiffure & Esthétique",
  slogan: "Ici, le bonheur est fait main",
  description:
    "À Uriage et à Grenoble, nos salons vous accueillent dans une ambiance conviviale et apaisante, avec des prestations coiffure sur mesure pour femme, homme et enfant. À Grenoble, découvrez également notre espace esthétique et bien-être.",
  heroTitle: "Et si c’était le moment de penser à vous ?",
};

export const nav = [
  { href: "/#presentation", label: "Présentation" },
  { href: "/#prestations", label: "Prestations" },
  { href: "/#nos-salons", label: "Nos salons" },
  { href: "/#marques", label: "Nos marques" },
  { href: "/#fidelite", label: "Fidélité" },
  { href: "/#reservation", label: "Réservation" },
] as const;

export const salons = [
  {
    id: "uriage" as const,
    name: "Atelier 228",
    city: "Uriage-les-Bains",
    tagline: "À deux pas des thermes",
    description:
      "L’Atelier 228 vous accueille pour une pause coiffure naturelle et relaxante. Du mardi au samedi.",
    address: "228 Av. des Thermes",
    postal: "38410 Saint-Martin-d'Uriage",
    hours: [
      { day: "Lundi", hours: "Fermé" },
      { day: "Mardi", hours: "9h30 – 21h00" },
      { day: "Mercredi", hours: "10h00 – 19h00" },
      { day: "Jeudi", hours: "9h00 – 19h00" },
      { day: "Vendredi", hours: "8h00 – 19h30" },
      { day: "Samedi", hours: "8h30 – 19h30" },
      { day: "Dimanche", hours: "Fermé" },
    ],
    planity: "https://www.planity.com/atelier-228-38410-saint-martin-duriage",
    maps: "https://maps.google.com/?q=228+Avenue+des+Thermes+38410+Saint-Martin-d%27Uriage",
    facebook: "https://www.facebook.com/atelier228coiffure",
    instagram: "https://www.instagram.com/atelier228/",
    image: "/images/salons/interieur.jpg",
    rating: "4,8",
    reviews: 206,
  },
  {
    id: "grenoble" as const,
    name: "Le Salon du Parc",
    city: "Grenoble",
    tagline: "Face au parc Paul Mistral",
    description:
      "Coiffure et beauté réunies dans un même lieu, du lundi au samedi. Espace esthétique et bien-être pour une véritable parenthèse détente.",
    address: "3 Rue Léon Jouhaux",
    postal: "38100 Grenoble",
    hours: [
      { day: "Lundi", hours: "10h00 – 17h00" },
      { day: "Mardi", hours: "9h00 – 19h00" },
      { day: "Mercredi", hours: "9h30 – 19h00" },
      { day: "Jeudi", hours: "10h00 – 19h00" },
      { day: "Vendredi", hours: "10h00 – 19h00" },
      { day: "Samedi", hours: "9h00 – 19h00" },
      { day: "Dimanche", hours: "Fermé" },
    ],
    planity: "https://www.planity.com/le-salon-du-parc-38100-grenoble",
    maps: "https://maps.google.com/?q=3+Rue+L%C3%A9on+Jouhaux+38100+Grenoble",
    facebook: "https://www.facebook.com/lesalonduparc",
    instagram: "https://www.instagram.com/lesalonduparc/",
    image: "/images/hero.jpg",
    rating: "4,9",
    reviews: 118,
  },
];

export const brands = [
  {
    name: "Petite cosméthic",
    image: "/images/brands/petite-cosmethic.jpg",
    text: "Marque experte en soins visage hautement concentrés, alliant naturalité, efficacité et sensorialité. Formules enrichies en acide hyaluronique, coenzyme Q10 et Mafane. Innovation biotechnologique, élégance française.",
  },
  {
    name: "Eugène Perma – Collections Nature",
    image: "/images/brands/eugene-perma.png",
    text: "Soins capillaires professionnels vegan, éco-responsables et made in France. Formules sans sulfates ni silicones, enrichies en extraits végétaux bio.",
  },
  {
    name: "Ybera Paris",
    image: "/images/brands/ybera.jpg",
    text: "Marque experte en lissages professionnels, soins et traitements réparateurs. Des résultats visibles, sans formol, pour tous types de cheveux. Innovation brésilienne, technologie française.",
  },
  {
    name: "Végétalement Provence",
    image: "/images/brands/vegetalement.jpg",
    text: "Cosmétiques capillaires et esthétiques 100 % végétaux, éthiques et sensoriels. Formules professionnelles sans parabènes ni silicones, à base d’actifs naturels et d’huiles essentielles.",
  },
  {
    name: "Riviera Tan",
    image: "/images/brands/riviera-tan.jpg",
    text: "Cosmétiques solaires et autobronzants naturels, sans parabènes ni silicones. Un hâle lumineux, uniforme et sensoriel, pour un bronzage éclatant en toute sécurité.",
  },
  {
    name: "Eugène Perma – Carmen Rituel",
    image: "/images/brands/carmen.png",
    text: "Coloration soin sans ammoniaque, enrichie en huile de coco bio. Jusqu’à 100 % de couverture des cheveux blancs, brillance intense et confort optimal.",
  },
  {
    name: "Bellami Hair",
    image: "/images/brands/bellami.png",
    text: "Extensions haut de gamme en cheveux naturels Remy, pour un résultat luxueux, fluide et durable.",
  },
  {
    name: "Baija",
    image: "/images/brands/baija.jpg",
    text: "Cosmétiques et soins corporels inspirés des rituels de beauté du monde. Textures gourmandes, ingrédients naturels, sans parabènes ni silicones.",
  },
];

export const loyalty = [
  {
    salon: "Uriage",
    title: "Carte commerçants d’Uriage",
    image: "/images/loyalty-uriage.png",
    intro:
      "Grâce à la carte de fidélité de l’Union des Commerçants d’Uriage, 3 % du montant de chacun de vos achats est automatiquement cagnoté.",
    points: [
      "Valable dans tous les commerces d’Uriage participants",
      "Cagnotte transformée en réductions immédiates",
      "Une seule carte, des avantages partout à Uriage",
    ],
  },
  {
    salon: "Grenoble",
    title: "Abonnement Privilège — 200 € / an",
    image: "/images/loyalty-grenoble.png",
    intro:
      "Optez pour l’abonnement Privilège et bénéficiez pendant un an d’avantages pensés pour vous faire plaisir tout en maîtrisant votre budget.",
    points: [
      "−25 % sur l’ensemble des prestations (hors extensions de cils)",
      "−10 % sur tous les produits, toute l’année",
      "Plus vous venez, plus vous économisez",
    ],
  },
];
