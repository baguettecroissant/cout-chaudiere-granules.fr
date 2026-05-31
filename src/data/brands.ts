/**
 * Brands data — 6 pellet boiler manufacturers
 */
export interface Brand {
  slug: string;
  name: string;
  country: string;
  flag: string;
  positioning: string;
  flagship: string;
  priceRange: string;
  description: string;
  models: { name: string; power: string; price: string; rendement: string; features: string }[];
  pros: string[];
  cons: string[];
  warranty: string;
  sav: string;
  content: string;
}

export const brands: Brand[] = [
  {
    slug: "okofen",
    name: "Ökofen",
    country: "Autriche",
    flag: "🇦🇹",
    positioning: "Premium / Innovation",
    flagship: "Pellematic Condens",
    priceRange: "12 000€ – 20 000€",
    description: "Pionnier autrichien de la chaudière à granulés depuis 1989, Ökofen est la référence mondiale en matière d'innovation dans le chauffage aux pellets. Inventeur de la chaudière à granulés à condensation, la marque propose des solutions premium avec un rendement pouvant atteindre 107,3% (PCI).",
    models: [
      { name: "Pellematic Condens", power: "10-32 kW", price: "14 000 – 20 000€", rendement: "107,3%", features: "Condensation, écran tactile, connectivité WiFi" },
      { name: "Pellematic Smart XS", power: "3,9-14,9 kW", price: "10 000 – 14 000€", rendement: "95,3%", features: "Compact, idéal rénovation, auto-nettoyage" },
      { name: "Pellematic", power: "8-32 kW", price: "9 000 – 15 000€", rendement: "93,2%", features: "Polyvalent, robuste, large gamme de puissances" },
    ],
    pros: [
      "Rendement record de 107,3% en condensation — le meilleur du marché",
      "Technologie d'auto-nettoyage brevetée — moins d'entretien",
      "Connectivité WiFi et pilotage via app myÖkofen",
      "Fabrication 100% autrichienne, qualité premium",
      "35 ans d'expérience exclusive dans les granulés",
    ],
    cons: [
      "Prix d'achat le plus élevé du marché (15-20% au-dessus de la concurrence)",
      "Réseau SAV en France moins dense que De Dietrich ou Viessmann",
      "Pièces détachées parfois longues à obtenir (import Autriche)",
    ],
    warranty: "2 ans pièces, 5 ans corps de chauffe, extensible à 10 ans",
    sav: "Réseau de 450 installateurs agréés en France. SAV centralisé depuis Strasbourg. Délais moyens : 48-72h.",
    content: `<p>Fondée en 1989 à Niederkappel (Haute-Autriche), <strong>Ökofen</strong> est le <strong>spécialiste mondial de la chaudière à granulés de bois</strong>. L'entreprise familiale a littéralement inventé la catégorie en lançant la première chaudière à granulés entièrement automatique en 1997.</p>
    <h2>Pourquoi choisir Ökofen ?</h2>
    <p>Si vous cherchez le <strong>meilleur rendement du marché</strong>, Ökofen est incontournable. La <strong>Pellematic Condens</strong> atteint un rendement de 107,3% sur PCI — c'est-à-dire qu'elle récupère la chaleur latente contenue dans les fumées, comme une chaudière gaz à condensation. Sur une consommation annuelle de 5 tonnes de granulés, cela représente <strong>350 à 500€ d'économies supplémentaires</strong> par rapport à une chaudière standard.</p>
    <h2>La gamme Ökofen en détail</h2>
    <p>La gamme se décline en trois lignes principales :</p>
    <ul>
      <li><strong>Pellematic Condens</strong> : le haut de gamme à condensation, rendement record, idéale pour les nouvelles constructions et rénovations ambitieuses</li>
      <li><strong>Pellematic Smart XS</strong> : la compacte (seulement 0,38 m²), parfaite pour les petits espaces et les remplacements de chaudières fioul</li>
      <li><strong>Pellematic</strong> : la polyvalente, disponible en 8 puissances de 8 à 32 kW, le modèle le plus vendu</li>
    </ul>
    <h2>Innovation et connectivité</h2>
    <p>Toutes les chaudières Ökofen sont équipées d'un <strong>écran tactile couleur</strong> et d'une <strong>connexion WiFi</strong> permettant le pilotage à distance via l'application <strong>myÖkofen</strong>. Vous pouvez surveiller la consommation, ajuster la température et recevoir des alertes de maintenance depuis votre smartphone.</p>
    <h2>Prix et rentabilité</h2>
    <p>Certes, Ökofen est 15 à 20% plus cher que la concurrence à puissance équivalente. Mais le surcoût est compensé par :</p>
    <ul>
      <li>Un <strong>rendement supérieur</strong> de 5 à 12 points</li>
      <li>Un <strong>entretien réduit</strong> grâce à l'auto-nettoyage</li>
      <li>Une <strong>durée de vie</strong> moyenne de 20 à 25 ans</li>
      <li>Une <strong>valeur de revente</strong> du bien immobilier améliorée</li>
    </ul>
    <p>Sur 20 ans, le <strong>coût total de possession</strong> (achat + combustible + entretien) d'une Ökofen Condens est souvent inférieur à celui d'une chaudière standard moins chère mais moins efficace.</p>
    <h2>Notre avis</h2>
    <p>Ökofen est le <strong>choix premium par excellence</strong>. Si votre budget le permet et que vous cherchez le rendement maximal, la fiabilité autrichienne et la connectivité moderne, c'est la marque à privilégier. Recommandée pour les maisons de 120-200 m² en zone froide (H1) où les économies de combustible sont maximales.</p>`
  },
  {
    slug: "froling",
    name: "Fröling",
    country: "Autriche",
    flag: "🇦🇹",
    positioning: "Premium / Pro",
    flagship: "PE1c (condensation)",
    priceRange: "11 000€ – 18 000€",
    description: "Fröling, fondée en 1961, est un fabricant autrichien spécialisé dans le chauffage au bois sous toutes ses formes. La marque est particulièrement appréciée des professionnels pour la robustesse de ses équipements et la qualité de sa combustion.",
    models: [
      { name: "PE1c Condens", power: "7-35 kW", price: "13 000 – 18 000€", rendement: "106%", features: "Condensation, lambdatronic, auto-nettoyage" },
      { name: "PE1 Pellet", power: "7-35 kW", price: "10 000 – 15 000€", rendement: "94,2%", features: "Standard automatique, large plage modulante" },
      { name: "SP Dual", power: "15-45 kW", price: "12 000 – 18 000€", rendement: "92%", features: "Mixte bûches/granulés, bi-énergie" },
    ],
    pros: [
      "Régulation Lambdatronic — combustion optimisée en temps réel par sonde lambda",
      "Construction extrêmement robuste (corps de chauffe en acier épais)",
      "La plus large plage de modulation (30-100%)",
      "Modèle SP Dual unique : mixte bûches + granulés",
      "Made in Austria — contrôle qualité rigoureux",
    ],
    cons: [
      "Interface utilisateur moins moderne que Ökofen (pas d'app mobile native)",
      "Design industriel peu esthétique",
      "Réseau SAV en France concentré sur l'Est et le Sud-Est",
    ],
    warranty: "2 ans pièces, 5 ans corps de chauffe",
    sav: "350 installateurs agréés en France. Filiale française à Fréjus (83). Pièces détachées sous 48h.",
    content: `<p><strong>Fröling</strong> est le choix des <strong>professionnels exigeants</strong>. Fondée en 1961 à Grieskirchen (Haute-Autriche), l'entreprise familiale s'est imposée comme le spécialiste de la combustion bois haute performance.</p>
    <h2>La technologie Lambdatronic</h2>
    <p>Le principal atout de Fröling est sa <strong>régulation Lambdatronic</strong>, un système de sonde lambda qui analyse en temps réel la composition des fumées et ajuste automatiquement l'apport en air de combustion. Résultat : une combustion quasi parfaite, avec des émissions de particules parmi les plus basses du marché et un rendement constant quelle que soit la qualité des granulés.</p>
    <h2>Le modèle PE1c Condens</h2>
    <p>Le <strong>PE1c à condensation</strong> atteint un rendement de 106% sur PCI, juste derrière Ökofen. Sa plage de modulation de 30 à 100% est la plus large du marché, ce qui signifie qu'il adapte finement sa puissance à vos besoins réels — moins de cycles on/off, plus de confort et de longévité.</p>
    <h2>L'option mixte SP Dual</h2>
    <p>Le <strong>SP Dual</strong> est une exclusivité Fröling : il brûle aussi bien des <strong>bûches de 50 cm</strong> que des <strong>granulés</strong>, basculant automatiquement d'un combustible à l'autre. Idéal si vous avez accès à du bois de chauffage local gratuit ou pas cher.</p>
    <h2>Notre avis</h2>
    <p>Fröling est la marque des <strong>connaisseurs</strong>. Moins connue du grand public qu'Ökofen, elle offre un <strong>rapport qualité/prix/durabilité</strong> exceptionnel. Particulièrement recommandée en zone de montagne (robustesse) et pour les propriétaires qui ont accès à du bois de chauffage.</p>`
  },
  {
    slug: "hargassner",
    name: "Hargassner",
    country: "Autriche",
    flag: "🇦🇹",
    positioning: "Premium / Robuste",
    flagship: "Nano-PK",
    priceRange: "10 000€ – 17 000€",
    description: "Hargassner, entreprise familiale autrichienne fondée en 1984, est reconnue pour la robustesse et la simplicité d'utilisation de ses chaudières à granulés. La marque mise sur la fiabilité longue durée plutôt que sur l'innovation technologique.",
    models: [
      { name: "Nano-PK", power: "6-32 kW", price: "10 000 – 15 000€", rendement: "94,5%", features: "Compact, silencieux, écran tactile" },
      { name: "Nano-PK Plus", power: "12-40 kW", price: "12 000 – 17 000€", rendement: "95,8%", features: "Version étendue, silo intégré possible" },
      { name: "Classic Lambda", power: "9-60 kW", price: "11 000 – 16 000€", rendement: "93%", features: "Usage pro/collectif, sonde lambda" },
    ],
    pros: [
      "Fiabilité légendaire — taux de panne parmi les plus bas du marché",
      "Silencieux : niveau sonore de 38 dB seulement",
      "Compacité record : le Nano-PK occupe seulement 0,36 m² au sol",
      "Simplicité d'utilisation — interface intuitive, peu de maintenance",
      "Puissance jusqu'à 60 kW pour les grands volumes",
    ],
    cons: [
      "Pas de modèle à condensation (rendement limité à 95%)",
      "Design austère, sans connectivité WiFi native (option payante)",
      "Moins connu en France que les concurrents autrichiens",
    ],
    warranty: "2 ans pièces, 5 ans corps de chauffe",
    sav: "280 installateurs agréés. Importateur français basé en Alsace.",
    content: `<p><strong>Hargassner</strong> est le <strong>choix de la fiabilité brute</strong>. Cette entreprise familiale autrichienne, fondée en 1984 par Anton Hargassner, a construit sa réputation sur un principe simple : fabriquer des chaudières qui fonctionnent 20 ans sans broncher.</p>
    <h2>Le Nano-PK : compact et silencieux</h2>
    <p>Le <strong>Nano-PK</strong> est le best-seller de la marque. Avec une emprise au sol de seulement <strong>0,36 m²</strong> (60 × 60 cm), c'est la chaudière à granulés la plus compacte du marché. Idéale pour les petits locaux techniques. Son niveau sonore de <strong>38 dB</strong> la rend quasi inaudible.</p>
    <h2>Notre avis</h2>
    <p>Hargassner est parfaite pour les propriétaires qui cherchent la <strong>tranquillité d'esprit</strong>. Pas de gadgets superflus, pas de connectivité complexe, juste une chaudière qui chauffe efficacement pendant 20 ans. Recommandée pour les rénovations où l'espace est limité.</p>`
  },
  {
    slug: "de-dietrich",
    name: "De Dietrich",
    country: "France",
    flag: "🇫🇷",
    positioning: "Milieu de gamme",
    flagship: "Pelematic",
    priceRange: "8 000€ – 14 000€",
    description: "De Dietrich, fondée en 1684, est le plus ancien fabricant de chauffage en France. Sa gamme de chaudières à granulés offre un excellent rapport qualité/prix avec un SAV français dense et réactif.",
    models: [
      { name: "Pelematic", power: "12-24 kW", price: "8 000 – 12 000€", rendement: "92%", features: "Fabrication française, silencieux" },
      { name: "Pelematic Plus", power: "15-30 kW", price: "10 000 – 14 000€", rendement: "93,5%", features: "Modulation améliorée, écran tactile" },
    ],
    pros: [
      "Fabricant français historique (depuis 1684) — le plus ancien du secteur",
      "Réseau SAV extrêmement dense : 2 500 installateurs agréés en France",
      "Meilleur rapport qualité/prix en fabrication française",
      "Pièces détachées disponibles sous 24-48h partout en France",
      "Compatible avec les systèmes de chauffage De Dietrich existants",
    ],
    cons: [
      "Rendement inférieur aux marques autrichiennes (92% vs 95-107%)",
      "Pas de modèle à condensation granulés",
      "Connectivité limitée (pas d'app mobile dédiée)",
    ],
    warranty: "2 ans pièces, 5 ans corps de chauffe, extensible à 7 ans",
    sav: "2 500 installateurs agréés. 16 agences régionales. Hotline SAV 7j/7.",
    content: `<p><strong>De Dietrich</strong> est le <strong>choix patriotique et pragmatique</strong>. Sa gamme Pelematic offre le meilleur rapport qualité/prix/SAV pour qui souhaite une chaudière à granulés fiable sans se ruiner.</p>
    <h2>L'avantage SAV</h2>
    <p>Le vrai atout de De Dietrich, c'est son <strong>réseau de 2 500 installateurs agréés</strong> en France, le plus dense du secteur. En cas de panne, un technicien intervient généralement sous <strong>24 à 48h</strong>.</p>
    <h2>Notre avis</h2>
    <p>De Dietrich est le choix rationnel pour les <strong>budgets maîtrisés</strong>. Le rendement est inférieur aux marques autrichiennes (92% vs 95-107%), mais le prix d'achat est 30 à 40% plus bas. Recommandée pour les maisons de 80-150 m² en zone tempérée (H2).</p>`
  },
  {
    slug: "viessmann",
    name: "Viessmann",
    country: "Allemagne",
    flag: "🇩🇪",
    positioning: "Premium / Connecté",
    flagship: "Vitoligno 300-C",
    priceRange: "9 000€ – 16 000€",
    description: "Viessmann, géant allemand du chauffage fondé en 1917, propose avec le Vitoligno 300-C une chaudière à granulés haut de gamme alliant robustesse germanique et connectivité moderne via l'écosystème ViCare.",
    models: [
      { name: "Vitoligno 300-C", power: "12-24 kW", price: "11 000 – 16 000€", rendement: "95,3%", features: "Connecté ViCare, sonde lambda, auto-nettoyage" },
      { name: "Vitoligno 300-P", power: "6-18 kW", price: "9 000 – 13 000€", rendement: "93,8%", features: "Compact, entrée de gamme premium" },
    ],
    pros: [
      "Intégration dans l'écosystème ViCare (app mobile, domotique, monitoring)",
      "Robustesse allemande légendaire — durée de vie 20+ ans",
      "Réseau SAV dense en France (1 800 partenaires)",
      "Sonde lambda intégrée pour combustion optimisée",
      "Compatibilité solaire thermique Viessmann",
    ],
    cons: [
      "Prix premium sans atteindre les rendements Ökofen/Fröling en condensation",
      "Gamme granulés plus restreinte que les spécialistes autrichiens",
      "Interface ViCare parfois complexe pour les non-technophiles",
    ],
    warranty: "2 ans pièces, 5 ans corps de chauffe, extensible à 10 ans with contrat ViCare",
    sav: "1 800 partenaires installateurs. SAV centralisé avec pièces sous 24h.",
    content: `<p><strong>Viessmann</strong> apporte son expertise du chauffage connecté au monde des granulés avec le <strong>Vitoligno 300-C</strong>.</p>
    <h2>L'écosystème ViCare</h2>
    <p>L'atout majeur de Viessmann est son <strong>écosystème ViCare</strong>. Via l'application mobile, vous surveillez en temps réel la consommation, la température, le niveau du silo et programmez le chauffage à distance.</p>
    <h2>Notre avis</h2>
    <p>Viessmann est idéal pour les <strong>technophiles</strong> qui veulent piloter leur chauffage depuis leur smartphone. La qualité de fabrication allemande garantit une longévité exceptionnelle.</p>`
  },
  {
    slug: "hs-france",
    name: "HS France",
    country: "France",
    flag: "🇫🇷",
    positioning: "Budget / Made in France",
    flagship: "Tilia",
    priceRange: "7 000€ – 12 000€",
    description: "HS France (anciennement HS Tarm France) est un fabricant français basé en Moselle, spécialisé dans les chaudières à bois et granulés accessible. La marque Tilia offre le meilleur rapport qualité/prix du marché français.",
    models: [
      { name: "Tilia", power: "14-24 kW", price: "7 000 – 10 000€", rendement: "90%", features: "Entrée de gamme, fiable, simple" },
      { name: "Tilia Plus", power: "14-30 kW", price: "9 000 – 12 000€", rendement: "92%", features: "Modulation améliorée, écran digital" },
    ],
    pros: [
      "Prix le plus bas du marché pour une chaudière de qualité (dès 7 000€)",
      "Fabrication française (usine en Moselle) — emplois locaux",
      "Simplicité d'utilisation et de maintenance",
      "Bonne disponibilité des pièces détachées en France",
      "Idéale pour les petits budgets et les logements locatifs",
    ],
    cons: [
      "Rendement modeste (90-92%) comparé aux marques premium",
      "Pas de condensation, pas de connectivité WiFi",
      "Finitions et design basiques",
    ],
    warranty: "2 ans pièces, 3 ans corps de chauffe",
    sav: "Réseau de 400 installateurs. Usine et SAV en Moselle (57).",
    content: `<p><strong>HS France</strong> est le <strong>choix budget Made in France</strong>. Basée en Moselle, l'entreprise fabrique des chaudières à granulés accessibles sans sacrifier la fiabilité.</p>
    <h2>La gamme Tilia</h2>
    <p>La <strong>Tilia</strong> est la chaudière à granulés la moins chère du marché français dans la catégorie « marque reconnue ». À partir de <strong>7 000€ fourniture seule</strong>, elle offre un rendement honnête de 90%.</p>
    <h2>Notre avis</h2>
    <p>HS France prouve qu'on peut passer aux granulés sans se ruiner. Si vous n'avez pas besoin de la condensation ni du WiFi, la Tilia fait le job pendant 15-20 ans. C'est le choix pragmatique et patriotique.</p>`
  },
];
