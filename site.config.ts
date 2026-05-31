/**
 * ⭐ SITE CONFIGURATION — cout-chaudiere-granules.fr
 * EMD single-niche : Chaudière à Granulés (Pellets)
 */
export const siteConfig = {
  // === IDENTITÉ ===
  domain: "cout-chaudiere-granules.fr",
  name: "Coût Chaudière Granulés",
  tagline: "Chaudière à Granulés — Prix, Aides & Devis Installateur 2026",
  description: "Quel est le prix d'une chaudière à granulés en 2026 ? De 8 000€ à 25 000€ pose incluse. Comparez les devis d'installateurs RGE et bénéficiez de jusqu'à 10 000€ d'aides.",

  // === NICHE ===
  niche: {
    slug: "chaudiere-granules",
    name: "Chaudière à Granulés",
    nameShort: "Chaudière Granulés",
    emoji: "🔥",
    icon: "flame",
    seoTitleTemplate: "Chaudière Granulés {city} ({zip}) : Prix dès 8 000€ + Aides 2026",
    metaDescTemplate: "Quel prix pour une chaudière à granulés à {city} ? De 8 000€ à 22 000€ pose incluse. Jusqu'à 10 000€ d'aides MaPrimeRénov'. Comparez 3 devis d'installateurs RGE ✅",
    heroTitle: "Chaudière à Granulés : Prix, Aides & Devis Installateur 2026",
    heroSubtitle: "De 8 000€ à 25 000€ pose incluse. Jusqu'à 10 000€ d'aides. Comparez 3 devis d'installateurs RGE certifiés.",
  },

  // === PRIX ===
  pricing: [
    { service: "Chaudière granulés standard (15-20 kW)", price: "8 000 – 14 000€", details: "Rendement 85-90%, alimentation automatique", rendement: "85-90%" },
    { service: "Chaudière granulés condensation (15-25 kW)", price: "13 000 – 20 000€", details: "Rendement 95-107% (PCI), économies maximales", rendement: "95-107%" },
    { service: "Chaudière granulés automatique aspiration (20-35 kW)", price: "15 000 – 25 000€", details: "Aspiration depuis silo, tout automatique", rendement: "90-95%" },
    { service: "Chaudière mixte bois/granulés (20-40 kW)", price: "11 000 – 20 000€", details: "Flexibilité bûches + granulés", rendement: "80-92%" },
  ],
  pricingNote: "Prix TTC moyens constatés en 2026, pose comprise. Avant déduction des aides (MaPrimeRénov', CEE, Bonus sortie fioul).",

  // === COÛTS ANNEXES ===
  annexCosts: [
    { name: "Silo textile (2-5 tonnes)", price: "800 – 2 500€" },
    { name: "Silo maçonné (5-10 tonnes)", price: "2 000 – 5 000€" },
    { name: "Conduit de fumée (tubage inox)", price: "1 500 – 3 500€" },
    { name: "Ballon tampon (500-1000L)", price: "800 – 2 000€" },
    { name: "Ballon ECS (200-300L)", price: "600 – 1 500€" },
    { name: "Dépose ancienne chaudière fioul", price: "500 – 1 500€" },
    { name: "Neutralisation cuve fioul", price: "500 – 2 000€" },
    { name: "Raccordement hydraulique", price: "500 – 1 500€" },
    { name: "Entretien annuel", price: "150 – 350€/an" },
    { name: "Granulés (vrac, 1 tonne)", price: "300 – 450€/t" },
  ],

  // === AIDES ===
  aids: [
    { name: "MaPrimeRénov'", amount: "4 000 – 10 000€", condition: "Selon revenus du foyer (très modestes : 10 000€)" },
    { name: "Bonus sortie fioul", amount: "+1 000€", condition: "Remplacement d'une chaudière fioul" },
    { name: "CEE (Prime énergie)", amount: "800 – 4 000€", condition: "Cumulable avec MaPrimeRénov'" },
    { name: "Coup de pouce chauffage", amount: "Jusqu'à 5 000€", condition: "Remplacement chaudière fossile" },
    { name: "TVA réduite 5,5%", amount: "~1 500€ d'économie", condition: "Logement > 2 ans, artisan RGE" },
    { name: "Éco-PTZ", amount: "Jusqu'à 30 000€ à taux 0%", condition: "Sans condition de revenus" },
  ],

  // === MONÉTISATION ===
  viteundevis: {
    partnerId: "2353",
    boxId: "e838806958",
    categoryId: "64",
  },

  // === PROCESSUS ===
  process: [
    { title: "Décrivez votre projet", desc: "Type de logement, surface, chauffage actuel, espace pour le silo.", icon: "📋", duration: "2 min" },
    { title: "Recevez 3 devis", desc: "Des installateurs RGE Qualibois de votre département vous contactent sous 48h.", icon: "📨", duration: "24-48h" },
    { title: "Comparez & choisissez", desc: "Comparez prix, marques (Ökofen, Fröling, Hargassner, De Dietrich) et garanties.", icon: "⚖️" },
    { title: "Lancez l'installation", desc: "Votre artisan installe votre chaudière à granulés avec garantie décennale.", icon: "🏗️", duration: "3-5 jours" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Quel est le prix moyen d'une chaudière à granulés en 2026 ?",
      a: "Le prix d'une chaudière à granulés varie entre 8 000€ et 25 000€ TTC pose comprise, selon le type (standard, condensation, automatique), la puissance (15 à 35 kW) et la marque (Ökofen, Fröling, De Dietrich). Après aides (MaPrimeRénov' + CEE + bonus fioul), le reste à charge peut descendre à 4 500€."
    },
    {
      q: "Quelles aides pour installer une chaudière à granulés en 2026 ?",
      a: "Vous pouvez cumuler MaPrimeRénov' (4 000 à 10 000€), le bonus sortie fioul (+1 000€), les CEE (800 à 4 000€), le coup de pouce chauffage (jusqu'à 5 000€), la TVA à 5,5% et l'Éco-PTZ (30 000€ à taux 0%). Condition : artisan certifié RGE Qualibois."
    },
    {
      q: "Chaudière granulés or pompe à chaleur : que choisir ?",
      a: "La chaudière à granulés est idéale en zone froide (H1), pour les grandes maisons et en remplacement fioul. La PAC air/eau convient mieux en zone tempérée. Les granulés sont 100% renouvelables (bilan carbone neutre) et indépendants de l'électricité. Le coût annuel est similaire : 1 200-1 800€/an pour les granulés."
    },
    {
      q: "Quel entretien pour une chaudière à granulés ?",
      a: "L'entretien annuel obligatoire coûte 150 à 350€ et comprend le ramonage (2x/an obligatoire), le nettoyage de l'échangeur et du brûleur, la vérification des joints et de l'alimentation. Certains gestes (vidage du cendrier, nettoyage du foyer) sont à faire soi-même toutes les 1-2 semaines."
    },
    {
      q: "Combien coûtent les granulés de bois par an ?",
      a: "Pour une maison de 120 m², comptez 4 à 5 tonnes de granulés par an, soit 1 200€ à 1 800€. C'est 30 à 50% moins cher que le fioul et 20 à 30% moins cher que le gaz. Le prix des granulés s'est stabilisé entre 300 et 450€/tonne en 2026 après la crise de 2022-2023."
    },
    {
      q: "Quel espace faut-il pour installer une chaudière à granulés ?",
      a: "La chaudière elle-même occupe environ 1 m². Il faut en plus un espace pour le silo : un silo textile de 3 tonnes occupe environ 2 m², un silo maçonné de 5 tonnes environ 4 m². Au total, prévoyez un local technique de 6 à 10 m². La hauteur sous plafond minimum est de 2,20 m."
    },
  ],

  // === TRUST ===
  trustBadges: ["Artisans RGE Qualibois", "Devis 100% gratuit", "Sans engagement", "Garantie décennale"],

  // === CONTENT BLOCKS ===
  introText: `La chaudière à granulés de bois (pellets) est la solution de chauffage la plus écologique et économique pour remplacer une chaudière fioul ou gaz vieillissante. Elle utilise des granulés de bois compressés — un combustible 100% renouvelable, fabriqué à partir de sciure recyclée, au bilan carbone quasi neutre.

Avec un rendement atteignant 107% en condensation et un coût de fonctionnement de 1 200 à 1 800€/an pour une maison de 120 m², la chaudière à granulés divise votre facture de chauffage par 2 par rapport au fioul. Et grâce aux aides de l'État (MaPrimeRénov' jusqu'à 10 000€, CEE, bonus sortie fioul), le reste à charge peut descendre sous les 5 000€ pour un équipement de 16 000€.`,

  whyChooseUs: [
    "Jusqu'à 3 devis d'installateurs RGE Qualibois de votre département",
    "Service 100% gratuit et sans aucun engagement",
    "Artisans vérifiés avec assurance décennale à jour",
    "Réponse sous 24h à 48h maximum",
    "Aide au montage des dossiers MaPrimeRénov' et CEE",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
