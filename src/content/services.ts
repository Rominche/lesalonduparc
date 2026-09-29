export type LocationId = "grenoble" | "uriage";

export type ServiceSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
};

export type Service = {
  slug: string;
  title: string;
  cardTitle: string;
  excerpt: string;
  image: string;
  locations: LocationId[];
  onHome: boolean;
  intro: string[];
  highlights?: string[];
  sections?: ServiceSection[];
  faqs?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "coupe",
    title: "Coupe femme, homme & enfant",
    cardTitle: "Coupe femme, homme & enfant",
    excerpt:
      "Coupes femme, homme et enfant, réalisées sur mesure pour s’adapter à chaque style, morphologie et nature de cheveux.",
    image: "/images/services/coupe.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Des coupes adaptées à tous les styles, tous les âges et toutes les envies.",
      "Après un diagnostic personnalisé, nous réalisons une coupe sur-mesure en tenant compte de la morphologie, de la nature du cheveu et du mode de vie de chacun.",
      "Que ce soit pour une coupe classique, moderne ou tendance, nous accordons une attention particulière aux détails, au mouvement et à la facilité de coiffage au quotidien.",
    ],
    highlights: [
      "Conseil personnalisé",
      "Coupe adaptée à chaque visage",
      "Finitions soignées",
      "Style durable et facile à entretenir",
    ],
  },
  {
    slug: "coloration",
    title: "Coloration végétale ou d’oxydation",
    cardTitle: "Coloration végétale ou d’oxydation",
    excerpt:
      "Coloration 100 % végétale ou coloration d’oxydation sans ammoniaque ni odeur : des solutions respectueuses du cheveu et du cuir chevelu, pour une couleur lumineuse, durable et confortable.",
    image: "/images/services/coloration.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "La coloration d’oxydation est une technique professionnelle qui permet de colorer durablement les cheveux tout en offrant un résultat précis, lumineux et homogène. Elle agit en profondeur afin de couvrir les cheveux blancs, d’éclaircir, de foncer ou de modifier une couleur existante.",
      "Nous travaillons avec Végétalement Provence et Eugène Perma, reconnues pour leur expertise et leur engagement.",
    ],
    sections: [
      {
        paragraphs: [
          "La coloration d’oxydation Eugène Perma est appréciée pour sa performance, sa tenue longue durée et la richesse de ses nuances. Végétalement Provence propose une approche plus douce, enrichie en ingrédients d’origine naturelle.",
          "Chaque prestation débute par un diagnostic personnalisé afin d’adapter la technique, la formule et les soins à la nature du cheveu.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qu’est-ce qu’une coloration d’oxydation ?",
        a: "C’est une coloration permanente qui permet de modifier durablement la couleur des cheveux, avec une couverture optimale des cheveux blancs et un résultat précis.",
      },
      {
        q: "Quelle est la différence entre Végétalement Provence et Eugène Perma ?",
        a: "Eugène Perma est reconnue pour sa performance et la richesse de ses nuances. Végétalement Provence propose une coloration d’oxydation enrichie en ingrédients d’origine naturelle, plus douce pour le cheveu et le cuir chevelu.",
      },
      {
        q: "La coloration d’oxydation abîme-t-elle les cheveux ?",
        a: "Même avec des produits de qualité, il s’agit d’un procédé chimique. Réalisée par un professionnel et accompagnée de soins adaptés, elle permet de préserver la qualité du cheveu.",
      },
      {
        q: "Couvre-t-elle les cheveux blancs ?",
        a: "Oui, la coloration d’oxydation permet une couverture efficace et durable des cheveux blancs.",
      },
      {
        q: "À quelle fréquence la renouveler ?",
        a: "En moyenne toutes les 4 à 6 semaines, selon la repousse et le résultat souhaité.",
      },
    ],
  },
  {
    slug: "extensions",
    title: "Extensions de cheveux — Bellami Hair",
    cardTitle: "Extensions de cheveux — Bellami Hair",
    excerpt:
      "Bellami Hair, des extensions haut de gamme en cheveux naturels pour un résultat luxueux et durable.",
    image: "/images/services/extensions.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Les extensions de cheveux sont une solution idéale pour gagner en longueur, en volume ou transformer la chevelure. Grâce aux extensions Bellami Hair à la kératine, le résultat est naturel, durable et adapté à chaque chevelure.",
      "Bellami Hair est reconnue pour la qualité premium de ses cheveux 100 % naturels, soigneusement sélectionnés pour leur douceur, leur brillance et leur tenue.",
    ],
    sections: [
      {
        paragraphs: [
          "La technique à la kératine fixe mèche par mèche les extensions à l’aide d’un point de kératine chauffé. Réalisée par un professionnel formé, elle offre une fixation solide, fluide et confortable, sans effet de surépaisseur.",
          "Chaque pose débute par un diagnostic : couleur, longueur, volume et nombre de mèches sont choisis sur-mesure. Les extensions peuvent être portées plusieurs mois avec un entretien adapté.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qu’est-ce que les extensions à la kératine ?",
        a: "Ce sont des mèches de cheveux naturels fixées mèche par mèche à l’aide d’un point de kératine chauffé, pour une fixation discrète et durable.",
      },
      {
        q: "Pourquoi Bellami Hair ?",
        a: "Pour la qualité de ses cheveux 100 % naturels, leur brillance, leur douceur et leur excellente tenue dans le temps.",
      },
      {
        q: "Les extensions abîment-elles les cheveux ?",
        a: "Posées et retirées par un professionnel, elles respectent le cheveu naturel. Un bon entretien et des soins adaptés restent essentiels.",
      },
      {
        q: "Combien de temps durent-elles ?",
        a: "En moyenne 3 à 5 mois, selon la pousse du cheveu et l’entretien.",
      },
      {
        q: "Peut-on coiffer et attacher ses cheveux ?",
        a: "Oui. Les extensions à la kératine permettent de se coiffer librement, d’attacher les cheveux et d’utiliser des appareils chauffants avec précaution.",
      },
    ],
  },
  {
    slug: "lissage",
    title: "Lissage brésilien & soin botox — Ybera Paris",
    cardTitle: "Lissage professionnel — Ybera Paris",
    excerpt:
      "Ybera Paris, des soins capillaires professionnels haut de gamme pour des résultats visibles et durables.",
    image: "/images/services/lissage.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Nous proposons des soins capillaires professionnels haut de gamme, adaptés à tous les types de cheveux. Le lissage brésilien Discovery Ybera et le soin botox capillaire disciplinent, réparent et subliment la chevelure, tout en respectant la fibre.",
    ],
    highlights: [
      "Sans formol ni dérivés",
      "Sans phénol ni dérivés",
      "Sans acide glyoxylique ni dérivés",
      "Conformes aux normes européennes",
    ],
    sections: [
      {
        title: "Le lissage brésilien Discovery Ybera",
        paragraphs: [
          "Soin lissant de dernière génération, enrichi en cellules souches de pomme suisse aux effets régénérants. Il réduit le volume, supprime les frisottis et apporte une brillance intense, sans abîmer les cheveux.",
        ],
        bullets: [
          "Cheveux plus lisses, souples et brillants",
          "Réduction du volume jusqu’à 90 %",
          "Chevelure disciplinée et facile à coiffer",
          "Effet naturel, raide ou souple selon votre souhait",
          "Résultat durable : 4 à 6 mois",
        ],
      },
      {
        title: "Le soin botox capillaire",
        paragraphs: [
          "Soin réparateur profond qui agit jusqu’au cortex, avec des résultats de 3 à 5 mois. Idéal pour les cheveux très abîmés ou transformés chimiquement. Il ne lisse pas le cheveu : il répare, hydrate et restructure.",
        ],
        bullets: [
          "Hydratation intense",
          "Réparation des cheveux abîmés",
          "Cheveux plus doux, brillants et souples",
          "Effet anti-frisottis",
          "Résultat visible immédiatement",
        ],
      },
    ],
    faqs: [
      {
        q: "Le lissage brésilien abîme-t-il les cheveux ?",
        a: "Non. Le lissage Discovery Ybera est sans formol et enrichi en actifs nourrissants. Réalisé par un professionnel, il améliore la qualité du cheveu.",
      },
      {
        q: "Puis-je le faire sur cheveux colorés ou méchés ?",
        a: "Oui, il est compatible. Un diagnostic préalable reste indispensable.",
      },
      {
        q: "Quelle est la différence avec le soin botox ?",
        a: "Le lissage discipline les cheveux sur plusieurs mois. Le soin botox répare et hydrate sans modifier la forme naturelle du cheveu. Les deux peuvent être combinés.",
      },
      {
        q: "Combien de temps dure la prestation ?",
        a: "Lissage brésilien : 2h30 à 4h selon la longueur. Soin botox : environ 2h.",
      },
    ],
  },
  {
    slug: "balayages",
    title: "Balayages — Eugène Perma, Végétalement Provence & Olaplex",
    cardTitle: "Balayages",
    excerpt:
      "Balayages sur mesure pour illuminer la chevelure, du rendu naturel au plus contrasté, dans le respect de la fibre. Soin Olaplex inclus si nécessaire.",
    image: "/images/services/balayages.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Le balayage illumine la chevelure tout en conservant un rendu naturel. Il apporte lumière, relief et profondeur, sans effet racine marqué. Chaque balayage est pensé selon la nature du cheveu, la coupe, la carnation et le résultat souhaité.",
      "Nous travaillons avec Eugène Perma, Végétalement Provence et Olaplex pour des balayages lumineux, durables et adaptés à toutes les envies.",
    ],
    sections: [
      {
        paragraphs: [
          "Chaque prestation débute par un diagnostic : nature du cheveu, historique, couleur de départ et sensibilité de la fibre. Si nécessaire, un plex est intégré pour protéger et limiter la casse.",
          "Une patine est ensuite appliquée pour sublimer les reflets, suivie d’un soin, d’une coupe si besoin, puis d’un coiffage qui révèle pleinement la lumière du balayage.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence avec une coloration classique ?",
        a: "La coloration agit sur l’ensemble de la chevelure. Le balayage travaille certaines zones : le résultat est plus naturel, plus lumineux, et l’entretien plus espacé.",
      },
      {
        q: "Le balayage abîme-t-il les cheveux ?",
        a: "Réalisé avec des produits professionnels et Olaplex, il respecte davantage la fibre. Le procédé reste chimique : nous adaptons toujours la technique à l’état de vos cheveux.",
      },
      {
        q: "À quelle fréquence le refaire ?",
        a: "En moyenne tous les 4 à 8 mois. Le rendu fondu permet une repousse plus discrète.",
      },
      {
        q: "Est-il possible après une coloration végétale ?",
        a: "Attention : le balayage n’est pas possible après une coloration végétale contenant de l’indigo.",
      },
    ],
  },
  {
    slug: "chignons",
    title: "Chignons & coiffures événementielles",
    cardTitle: "Chignons & coiffures événementielles",
    excerpt:
      "Coiffures de mariage et d’événement, du chignon structuré aux coiffures souples et glamour. Des créations sur mesure, alliant élégance, tenue et confort.",
    image: "/images/services/chignons.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Mariage, soirée, cérémonie, anniversaire ou événement professionnel : nous réalisons des chignons et coiffures événementielles sur-mesure, adaptés à votre style, votre tenue et l’occasion.",
      "Chignon flou, chic, bas, haut, coiffure wavy, attachée ou semi-attachée… chaque création met en valeur votre visage et tient tout au long de l’événement.",
    ],
    highlights: [
      "Diagnostic personnalisé",
      "Coiffure élégante et durable",
      "Style adapté à votre tenue et à l’occasion",
      "Finitions soignées et tenue longue durée",
    ],
  },
  {
    slug: "head-spa",
    title: "Head spa — Petite cosméthic",
    cardTitle: "Head spa — Petite cosméthic",
    excerpt:
      "Un rituel d’exception alliant science, naturalité et gestuelle experte. Il rééquilibre le cuir chevelu, sublime la fibre et procure une détente profonde.",
    image: "/images/services/head-spa.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Petite Cosméthic allie efficacité, naturalité et sensorialité. Le Head Spa est une expérience immersive qui dépasse le simple soin capillaire pour devenir un moment de reconnexion à soi.",
      "Réalisé uniquement avec les produits Petite Cosméthic, il combine massages, techniques de relaxation et soins hautement concentrés.",
    ],
    highlights: [
      "Rééquilibrer le cuir chevelu",
      "Sublimer la fibre capillaire",
      "Détente immédiate et sensation de légèreté",
    ],
    faqs: [
      {
        q: "À qui s’adresse le Head Spa ?",
        a: "À tous les types de cheveux, femmes et hommes. Il est particulièrement recommandé en cas de cuir chevelu sensible, de stress, de cheveux ternes ou d’un besoin de détente profonde.",
      },
      {
        q: "Combien de temps dure une séance ?",
        a: "Selon le protocole : comptez en moyenne entre 45 minutes et 1h15. Un coiffage est inclus.",
      },
      {
        q: "À quelle fréquence ?",
        a: "Occasionnellement pour une pause détente, ou en cure une fois par mois pour rééquilibrer durablement le cuir chevelu.",
      },
    ],
  },
  {
    slug: "bronzage",
    title: "Bronzage sans UV — Riviera Tan",
    cardTitle: "Bronzage sans UV — Riviera Tan",
    excerpt:
      "Riviera Tan, des autobronzants naturels et vegan pour un bronzage lumineux toute l’année.",
    image: "/images/services/bronzage.png",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Le bronzage par pulvérisation est une alternative sûre au bronzage traditionnel. Sans UV, il respecte la peau et préserve le capital solaire, avec un hâle naturel dès la première séance.",
      "Nous utilisons la lotion Riviera Tan, élaborée en France, composée à plus de 97 % d’ingrédients d’origine naturelle. L’actif, la DHA végétale issue de la canne à sucre, agit en surface pour un teint hâlé progressif, sans effet orangé.",
    ],
    highlights: [
      "Résultat visible immédiatement, intensité optimale après 5 à 6 heures",
      "Tenue moyenne de 5 à 8 jours",
      "Séance d’environ 15 minutes, séchage inclus",
      "Bronzage uniforme, naturel et sans traces",
    ],
    faqs: [
      {
        q: "La méthode est-elle sans danger ?",
        a: "Oui. La lotion agit uniquement sur les couches superficielles de l’épiderme. Elle est fabriquée en France selon un processus de contrôle strict, et reconnue notamment par l’UFC-Que Choisir.",
      },
      {
        q: "Comment préparer sa peau ?",
        a: "Peau propre, sans maquillage ni corps gras. Un gommage et une épilation la veille sont recommandés. Porter des vêtements amples et foncés, retirer les bijoux.",
      },
      {
        q: "Quelles précautions après la séance ?",
        a: "Éviter douche ou bain pendant 6 heures, hydrater quotidiennement. Le bronzage sans UV ne protège pas du soleil.",
      },
      {
        q: "Y a-t-il des contre-indications ?",
        a: "Déconseillé sur peau lésée ou fortement acnéique, chez la femme enceinte, et en cas de masque de grossesse.",
      },
    ],
  },
  {
    slug: "epilations",
    title: "Épilations",
    cardTitle: "Épilations",
    excerpt:
      "Prestations d’épilation professionnelles pour une peau nette, douce et durablement lisse, alliant efficacité, précision et confort.",
    image: "/images/services/epilations.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Nos prestations d’épilation offrent une peau nette, douce et durablement lisse. Réalisées avec des méthodes professionnelles et respectueuses de la peau, elles garantissent efficacité, précision et confort.",
    ],
  },
  {
    slug: "soins-baija",
    title: "Soins visage & corporels — Baija",
    cardTitle: "Soins visage & corporels — Baija",
    excerpt:
      "Baïja, des soins et parfums sensoriels aux formules naturelles, pour transformer chaque geste en moment de plaisir.",
    image: "/images/services/baija.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Baija invite à un voyage sensoriel : soins visage et corps aux formules naturelles et aux textures gourmandes, pour une routine de plaisir et d’efficacité.",
      "Chaque soin est pensé comme une parenthèse : hydratation, douceur, parfum et peau sublimée, dans le respect de l’épiderme.",
    ],
  },
  {
    slug: "regard",
    title: "Beauté du regard — Biolash",
    cardTitle: "Beauté du regard — Biolash",
    excerpt:
      "Rehaussement de cils, soin botox, extensions cil à cil, pose mixte ou volume russe. Des prestations sur mesure, dans le respect du cil naturel.",
    image: "/images/services/regard.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Les extensions de cils intensifient le regard tout en conservant un rendu élégant. Biolash offre légèreté, souplesse et tenue, sans effet lourd, adapté à toutes les morphologies d’yeux.",
      "Chaque prestation débute par un diagnostic : courbure, longueur et intensité sont choisies selon la forme des yeux et le résultat souhaité — naturel, intense ou sophistiqué.",
    ],
    faqs: [
      {
        q: "Les extensions abîment-elles les cils naturels ?",
        a: "Posées correctement et entretenues selon les recommandations, elles respectent les cils naturels.",
      },
      {
        q: "Combien de temps durent-elles ?",
        a: "La tenue moyenne est de 4 à 6 semaines. Certaines poses tiennent jusqu’à 2 mois.",
      },
      {
        q: "Peut-on se maquiller ?",
        a: "Oui, en évitant mascaras et démaquillants gras. Éviter l’eau, la vapeur et le frottement pendant 24 heures après la pose.",
      },
    ],
  },
  {
    slug: "maquillage",
    title: "Maquillage",
    cardTitle: "Maquillage",
    excerpt:
      "Maquillage de jour et événementiel, personnalisé et longue tenue, pour une mise en beauté élégante et naturelle.",
    image: "/images/services/maquillage.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Sublimez votre visage avec un maquillage professionnel adapté à votre style, votre carnation et l’occasion — événement, soirée, mariage ou simplement pour vous faire plaisir.",
    ],
    highlights: [
      "Teint unifié et lumineux",
      "Regard intensifié selon vos envies",
      "Produits professionnels, tenue longue durée",
      "Mise en valeur sans surcharge",
      "Ajout de faux cils possible",
    ],
  },
  {
    slug: "mains-pieds",
    title: "Beauté des mains et des pieds",
    cardTitle: "Beauté des mains et des pieds",
    excerpt:
      "Manucure russe, pose de gel, semi-permanent, rallongement, remplissage et dépose. Soins des pieds avec pose de semi-permanent et dépose gel.",
    image: "/images/hero.jpg",
    locations: ["grenoble"],
    onHome: true,
    intro: [
      "Des prestations expertes pour des mains et des pieds soignés, élégants et durables.",
      "Manucure russe, pose de gel, semi-permanent, rallongement, remplissage et dépose. Soins des pieds avec pose de semi-permanent et dépose gel.",
    ],
  },
  {
    slug: "balayage-argile",
    title: "Balayage à l’argile",
    cardTitle: "Balayage à l’argile",
    excerpt:
      "Une coloration naturelle et lumineuse, pour éclaircir la chevelure tout en préservant sa fibre.",
    image: "/images/services/balayage-argile.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Le balayage à l’argile utilise une base minérale, sans aluminium ni agents agressifs. Contrairement aux décolorations classiques, l’argile permet un éclaircissement progressif et maîtrisé.",
      "Le résultat est plus doux, plus naturel, avec des reflets lumineux et un effet soleil subtil. Blond beige, miel, caramel, reflets froids ou chauds : une lumière sur-mesure.",
    ],
    highlights: [
      "Respect du cheveu et du cuir chevelu",
      "Éclaircissement plus doux",
      "Rendu naturel et fondu",
      "Repousse moins marquée",
      "Cheveux plus brillants et souples",
    ],
    faqs: [
      {
        q: "Le balayage à l’argile abîme-t-il les cheveux ?",
        a: "Il est reconnu pour être moins agressif qu’une décoloration classique et laisse les cheveux plus doux.",
      },
      {
        q: "Combien de temps dure la prestation ?",
        a: "En moyenne environ 3 heures, diagnostic et soin inclus.",
      },
    ],
  },
  {
    slug: "olaplex",
    title: "Soin Absolu Olaplex",
    cardTitle: "Soin Absolu Olaplex",
    excerpt:
      "Réparation profonde et protection durable de la fibre capillaire, pour des cheveux plus forts, plus sains et visiblement transformés.",
    image: "/images/services/olaplex.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Le Soin Absolu Olaplex répare en profondeur les cheveux abîmés, fragilisés ou sensibilisés par les techniques chimiques, la chaleur ou les agressions extérieures.",
      "Grâce à sa technologie brevetée Bond Building, Olaplex reconstruit les liaisons internes du cheveu. Sans silicone ni huile, il restaure sans alourdir.",
    ],
    highlights: [
      "Réparer les liaisons capillaires rompues",
      "Renforcer la fibre en profondeur",
      "Prévenir la casse",
      "Apporter douceur, souplesse et brillance",
    ],
    faqs: [
      {
        q: "Ce soin alourdit-il les cheveux ?",
        a: "Non. Sa formule sans silicone ni huile renforce sans alourdir, y compris sur cheveux fins.",
      },
      {
        q: "Peut-on le faire sur cheveux colorés ou décolorés ?",
        a: "Oui, il est idéal pour réparer et prolonger la beauté des cheveux colorés ou décolorés.",
      },
    ],
  },
  {
    slug: "coloration-vegetale",
    title: "Coloration 100 % végétale",
    cardTitle: "Coloration 100 % végétale",
    excerpt:
      "Une alternative naturelle pour sublimer vos cheveux : poudres de plantes, cheveux gainés, brillants et en meilleure santé.",
    image: "/images/services/coloration-vegetale.jpg",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "La coloration végétale est composée exclusivement de poudres de plantes tinctoriales ayurvédiques. Contrairement aux colorations chimiques, elle n’ouvre pas la fibre : les pigments se déposent autour du cheveu, le gainent et le renforcent.",
      "Résultat : des cheveux plus brillants, plus épais et visiblement en meilleure santé.",
    ],
    highlights: [
      "Respect du cuir chevelu, y compris sensible",
      "Cheveux renforcés, plus brillants, moins cassants",
      "Sans ammoniaque, sans oxydant, sans produits chimiques",
      "Excellente couverture des cheveux blancs avec une technique adaptée",
    ],
    faqs: [
      {
        q: "Peut-on éclaircir les cheveux ?",
        a: "Non. La coloration végétale n’éclaircit pas une base foncée : elle apporte des reflets et de la profondeur.",
      },
      {
        q: "Peut-on la faire pendant la grossesse ?",
        a: "Oui. C’est l’une des solutions les plus recommandées, car elle ne contient aucun composant chimique agressif.",
      },
      {
        q: "Est-ce compatible avec une ancienne coloration chimique ?",
        a: "Oui, mais un diagnostic est indispensable. Une période de transition peut être nécessaire.",
      },
    ],
  },
  {
    slug: "soin-ayurvedique",
    title: "Soin capillaire ayurvédique",
    cardTitle: "Soin capillaire ayurvédique",
    excerpt:
      "Rituel naturel aux poudres de plantes : cuir chevelu purifié, fibre renforcée, cheveux brillants, forts et volumineux.",
    image: "/images/services/ayurvedique.png",
    locations: ["grenoble", "uriage"],
    onHome: true,
    intro: [
      "Un rituel personnalisé à partir de poudres de plantes ayurvédiques issues de l’agriculture biologique : Amla, Methi, Bhringraj, Neem et Cassia. Le soin transforme la fibre dès la première application, sans colorer le cheveu.",
    ],
    highlights: [
      "Renforcer la fibre capillaire",
      "Apporter brillance et volume",
      "Apaiser et purifier le cuir chevelu",
      "Stimuler la pousse",
      "Réduire la chute et la casse",
    ],
    sections: [
      {
        steps: [
          {
            title: "Amla",
            text: "Vitalité et éclat. Riche en vitamine C, elle stimule la pousse et redonne brillance aux cheveux ternes.",
          },
          {
            title: "Methi",
            text: "Hydratation et souplesse. Idéal pour les cheveux secs ou bouclés, il réduit la casse.",
          },
          {
            title: "Bhringraj",
            text: "Anti-chute et densité. Il tonifie le cuir chevelu et favorise la repousse.",
          },
          {
            title: "Neem",
            text: "Purification. Il apaise les irritations, lutte contre les pellicules et régule le sébum.",
          },
          {
            title: "Cassia",
            text: "Volume et lumière. Henné neutre qui gaine le cheveu sans le colorer.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ce soin colore-t-il les cheveux ?",
        a: "Non, uniquement des plantes incolores. Pour une couleur naturelle, orientez-vous vers la coloration 100 % végétale.",
      },
      {
        q: "Peut-on le faire sur cheveux colorés ?",
        a: "Oui, il est compatible avec toutes les colorations et aide à prolonger la brillance.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function homeServices() {
  return services.filter((service) => service.onHome);
}
