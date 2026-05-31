/**
 * Guides data — 10 pillar articles for SEO (1500+ words each)
 * Niche: Chaudière à Granulés de Bois (Pellets)
 */

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  image: string;
  content: string;
}

export const guides: Guide[] = [
  {
    slug: "prix-chaudiere-granules-2026",
    title: "Prix Chaudière à Granulés 2026 : Budget Complet (Fourniture + Pose)",
    metaTitle: "Prix Chaudière Granulés 2026 — Tarifs Complets Fourniture + Pose",
    metaDescription: "Quel est le prix d'une chaudière à granulés en 2026 ? De 8 000€ à 25 000€ TTC pose incluse selon le type. Guide complet : tarifs par gamme, marque, coûts annexes et reste à charge après aides.",
    excerpt: "De 8 000€ à 25 000€ TTC pose comprise en 2026. Découvrez les prix détaillés par type de chaudière (standard, condensation, automatique, mixte), les coûts annexes (silo, conduit, cuve fioul) et le reste à charge après aides.",
    date: "2026-01-15",
    readTime: "14 min",
    category: "Prix",
    emoji: "💰",
    image: "/images/blog/installation-chaudiere.png",
    content: `
<p>Le prix d'une <strong>chaudière à granulés de bois</strong> varie entre <strong>8 000€ et 25 000€ TTC</strong> pose comprise en 2026. Cette fourchette large s'explique par les différences de technologie (standard, condensation, aspiration), de puissance (15 à 35 kW), de marque (<a href="/marques/okofen">Ökofen</a>, <a href="/marques/froling">Fröling</a>, <a href="/marques/de-dietrich">De Dietrich</a>) et de complexité d'installation. Grâce aux aides de l'État, le <strong>reste à charge réel peut descendre à 4 500€</strong>.</p>

<h2>Prix par type de chaudière à granulés en 2026</h2>
<p>Le type de chaudière est le premier critère qui détermine le prix. Voici le comparatif détaillé :</p>

<table>
<thead><tr><th>Type de chaudière</th><th>Puissance</th><th>Prix fourniture</th><th>Prix pose incluse</th><th>Rendement</th></tr></thead>
<tbody>
<tr><td><strong>Standard automatique</strong></td><td>15-20 kW</td><td>5 000 – 9 000€</td><td>8 000 – 14 000€</td><td>85-90%</td></tr>
<tr><td><strong>À condensation</strong></td><td>15-25 kW</td><td>9 000 – 15 000€</td><td>13 000 – 20 000€</td><td>95-107% (PCI)</td></tr>
<tr><td><strong>Automatique aspiration</strong></td><td>20-35 kW</td><td>10 000 – 18 000€</td><td>15 000 – 25 000€</td><td>90-95%</td></tr>
<tr><td><strong>Mixte bois/granulés</strong></td><td>20-40 kW</td><td>7 000 – 14 000€</td><td>11 000 – 20 000€</td><td>80-92%</td></tr>
</tbody>
</table>

<p>💡 <strong>Notre recommandation</strong> : pour une maison de 100-150 m², la <strong>chaudière standard automatique</strong> (8 000 – 14 000€) offre le meilleur rapport qualité/prix. La <a href="/guides/chaudiere-granules-condensation">condensation</a> est rentable pour les maisons de 150 m² et plus en zone froide (H1).</p>

<h2>Prix par marque : comparatif 2026</h2>
<p>Le choix de la marque impacte significativement le budget. Voici notre <a href="/guides/comparatif-marques-chaudiere-granules">comparatif des principales marques</a> :</p>

<table>
<thead><tr><th>Marque</th><th>Modèle phare</th><th>Prix 15-20 kW posé</th><th>Points forts</th></tr></thead>
<tbody>
<tr><td>🇦🇹 <strong><a href="/marques/okofen">Ökofen</a></strong></td><td>Pellematic Condens</td><td>14 000 – 20 000€</td><td>Rendement 107%, innovation</td></tr>
<tr><td>🇦🇹 <strong><a href="/marques/froling">Fröling</a></strong></td><td>PE1c Condens</td><td>13 000 – 18 000€</td><td>Sonde lambda, robustesse</td></tr>
<tr><td>🇦🇹 <strong><a href="/marques/hargassner">Hargassner</a></strong></td><td>Nano-PK</td><td>10 000 – 15 000€</td><td>Compact (0,36 m²), silencieux</td></tr>
<tr><td>🇫🇷 <strong><a href="/marques/de-dietrich">De Dietrich</a></strong></td><td>Pelematic</td><td>8 000 – 12 000€</td><td>SAV français, rapport qualité/prix</td></tr>
<tr><td>🇩🇪 <strong><a href="/marques/viessmann">Viessmann</a></strong></td><td>Vitoligno 300-C</td><td>11 000 – 16 000€</td><td>Connecté ViCare, robuste</td></tr>
<tr><td>🇫🇷 <strong><a href="/marques/hs-france">HS France</a></strong></td><td>Tilia</td><td>7 000 – 10 000€</td><td>Made in France, budget</td></tr>
</tbody>
</table>

<h2>Coûts annexes à prévoir</h2>
<p>Le prix de la chaudière seule ne suffit pas. Voici les postes supplémentaires à anticiper dans votre budget :</p>

<table>
<thead><tr><th>Poste</th><th>Prix</th><th>Obligatoire ?</th></tr></thead>
<tbody>
<tr><td><strong>Silo textile</strong> (2-5 tonnes)</td><td>800 – 2 500€</td><td>Oui (stockage granulés)</td></tr>
<tr><td><strong>Silo maçonné</strong> (5-10 tonnes)</td><td>2 000 – 5 000€</td><td>Alternative au textile</td></tr>
<tr><td><strong>Conduit de fumée</strong> (tubage inox)</td><td>1 500 – 3 500€</td><td>Oui si pas de conduit existant</td></tr>
<tr><td><strong>Ballon tampon</strong> (500-1000L)</td><td>800 – 2 000€</td><td>Recommandé</td></tr>
<tr><td><strong>Ballon ECS</strong> (200-300L)</td><td>600 – 1 500€</td><td>Si eau chaude souhaitée</td></tr>
<tr><td><strong>Dépose chaudière fioul</strong></td><td>500 – 1 500€</td><td>Si remplacement fioul</td></tr>
<tr><td><strong>Neutralisation cuve fioul</strong></td><td>500 – 2 000€</td><td>Obligatoire (loi)</td></tr>
<tr><td><strong>Raccordement hydraulique</strong></td><td>500 – 1 500€</td><td>Oui</td></tr>
</tbody>
</table>

<p>⚠️ <strong>Attention aux devis incomplets</strong> : un <a href="/guides/devis-chaudiere-granules-pieges">devis qui n'inclut pas le conduit de fumée ou la dépose fioul</a> peut cacher 3 000 à 5 000€ de surcoûts. Exigez un devis détaillé poste par poste.</p>

<h2>Reste à charge après aides en 2026</h2>
<p>Les <a href="/guides/aides-chaudiere-granules-2026">aides financières</a> réduisent considérablement le coût réel :</p>

<table>
<thead><tr><th>Profil de revenus</th><th>MaPrimeRénov'</th><th>Bonus fioul</th><th>CEE</th><th>Reste à charge (chaudière à 16 000€)</th></tr></thead>
<tbody>
<tr><td><strong>Très modestes</strong></td><td>10 000€</td><td>1 000€</td><td>3 500€</td><td><strong>≈ 1 500€</strong> 🟢</td></tr>
<tr><td><strong>Modestes</strong></td><td>8 000€</td><td>1 000€</td><td>2 500€</td><td><strong>≈ 4 500€</strong></td></tr>
<tr><td><strong>Intermédiaires</strong></td><td>4 000€</td><td>1 000€</td><td>2 000€</td><td><strong>≈ 9 000€</strong></td></tr>
<tr><td><strong>Aisés</strong></td><td>0€</td><td>0€</td><td>1 000€</td><td><strong>≈ 15 000€</strong></td></tr>
</tbody>
</table>

<p>➕ L'<strong>Éco-PTZ</strong> permet de financer le reste à charge avec un prêt à taux 0% jusqu'à 30 000€ sur 15 ans. Résultat : <strong>aucun frais d'avance</strong> pour de nombreux foyers.</p>

<h2>Coût de fonctionnement annuel</h2>
<p>Au-delà de l'investissement initial, comparez le coût annuel de chauffage :</p>

<table>
<thead><tr><th>Énergie</th><th>Conso maison 120 m²</th><th>Coût annuel</th><th>Émissions CO₂</th></tr></thead>
<tbody>
<tr style="background-color: #f0fdf4; font-weight: bold;"><td>✅ Granulés de bois</td><td>4-5 tonnes</td><td>1 200 – 1 800€</td><td>~0 kg (bilan neutre)</td></tr>
<tr><td>Gaz naturel</td><td>15 000 kWh</td><td>1 500 – 1 900€</td><td>3 060 kg</td></tr>
<tr><td>Fioul</td><td>2 000 L</td><td>2 200 – 2 800€</td><td>5 280 kg</td></tr>
<tr><td>Électrique</td><td>15 000 kWh</td><td>3 000 – 3 800€</td><td>Variable</td></tr>
</tbody>
</table>

<p>Sur 20 ans, une chaudière à granulés permet d'économiser <strong>20 000 à 40 000€</strong> par rapport au fioul, tout en réduisant vos émissions de CO₂ à quasi zéro.</p>

<h2>Comment obtenir le meilleur prix ?</h2>
<ol>
<li><strong>Comparez 3 devis minimum</strong> — les écarts peuvent atteindre 5 000€ pour la même prestation</li>
<li><strong>Vérifiez la certification RGE Qualibois</strong> — obligatoire pour toutes les aides</li>
<li><strong>Privilégiez les installateurs locaux</strong> — déplacement et SAV moins chers</li>
<li><strong>Négociez le contrat d'entretien</strong> — souvent offert la 1ère année</li>
<li><strong>Achetez les granulés en été</strong> — prix 10 à 15% moins chers qu'en hiver</li>
<li><strong>Choisissez la bonne puissance</strong> — un surdimensionnement coûte 2 000 à 5 000€ de trop</li>
</ol>
`
  },
  {
    slug: "aides-chaudiere-granules-2026",
    title: "Aides Chaudière Granulés 2026 : MaPrimeRénov', CEE, Bonus Fioul",
    metaTitle: "Aides Chaudière Granulés 2026 — MaPrimeRénov', CEE, Bonus Fioul",
    metaDescription: "Toutes les aides pour installer une chaudière à granulés en 2026 : MaPrimeRénov' (jusqu'à 10 000€), CEE, bonus sortie fioul, TVA 5,5%, Éco-PTZ. Conditions, plafonds et cumul.",
    excerpt: "MaPrimeRénov', CEE, bonus sortie fioul, TVA 5,5%, Éco-PTZ... Jusqu'à 15 000€ d'aides cumulées pour votre chaudière à granulés. Guide complet des conditions et montants 2026.",
    date: "2026-01-20",
    readTime: "12 min",
    category: "Aides",
    emoji: "🏛️",
    image: "/images/blog/famille-confort.png",
    content: `
<p>L'installation d'une <strong>chaudière à granulés de bois</strong> en 2026 bénéficie de <strong>jusqu'à 15 000€ d'aides cumulées</strong>. Entre MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), le bonus sortie fioul, le coup de pouce chauffage, la TVA réduite et l'Éco-PTZ, le reste à charge peut descendre sous les 2 000€ pour les foyers les plus modestes.</p>

<h2>MaPrimeRénov' 2026 : jusqu'à 10 000€</h2>
<p>MaPrimeRénov' est l'aide principale de l'État pour la rénovation énergétique. Pour une chaudière à granulés, c'est l'une des <strong>catégories les mieux dotées</strong> — davantage que pour une pompe à chaleur :</p>

<table>
<thead><tr><th>Profil de revenus</th><th>Montant MaPrimeRénov'</th><th>Bonus sortie fioul</th><th>Total MaPrimeRénov'</th></tr></thead>
<tbody>
<tr><td>🔵 <strong>Très modestes</strong></td><td><strong>10 000€</strong></td><td>+1 000€</td><td><strong>11 000€</strong></td></tr>
<tr><td>🟡 <strong>Modestes</strong></td><td><strong>8 000€</strong></td><td>+1 000€</td><td><strong>9 000€</strong></td></tr>
<tr><td>🟣 <strong>Intermédiaires</strong></td><td><strong>4 000€</strong></td><td>+1 000€</td><td><strong>5 000€</strong></td></tr>
<tr><td>🔴 <strong>Aisés</strong></td><td><strong>0€</strong></td><td>0€</td><td><strong>0€</strong></td></tr>
</tbody>
</table>

<h3>Conditions d'éligibilité</h3>
<ul>
<li>Logement construit depuis <strong>plus de 15 ans</strong> (ou 2 ans si remplacement fioul)</li>
<li>Résidence principale occupée au moins <strong>8 mois par an</strong></li>
<li>Travaux réalisés par un artisan <strong>certifié RGE Qualibois</strong></li>
<li>Chaudière de <strong>classe 5</strong> selon la norme EN 303-5</li>
<li>Demande déposée <strong>AVANT la signature du devis</strong> — crucial !</li>
</ul>

<h2>Prime CEE (Certificats d'Économies d'Énergie) : 800 à 4 000€</h2>
<p>La prime CEE est financée par les fournisseurs d'énergie et est <strong>cumulable avec MaPrimeRénov'</strong> :</p>

<table>
<thead><tr><th>Zone climatique</th><th>Ménages modestes</th><th>Ménages standards</th></tr></thead>
<tbody>
<tr><td>H1 (Nord, Est, Montagne)</td><td><strong>3 000 – 4 000€</strong></td><td>1 500 – 2 500€</td></tr>
<tr><td>H2 (Centre, Ouest)</td><td><strong>2 500 – 3 500€</strong></td><td>1 200 – 2 000€</td></tr>
<tr><td>H3 (Méditerranée)</td><td><strong>2 000 – 3 000€</strong></td><td>800 – 1 500€</td></tr>
</tbody>
</table>

<h2>Coup de pouce chauffage : jusqu'à 5 000€</h2>
<p>Le dispositif « Coup de pouce chauffage » est une prime supplémentaire pour le <strong>remplacement d'une chaudière au charbon, fioul ou gaz non performante</strong> :</p>
<ul>
<li><strong>Ménages très modestes</strong> : jusqu'à 5 000€</li>
<li><strong>Ménages modestes</strong> : jusqu'à 4 000€</li>
<li><strong>Ménages intermédiaires</strong> : jusqu'à 2 500€</li>
</ul>

<h2>TVA réduite à 5,5%</h2>
<p>La TVA sur le matériel ET la main d'œuvre est réduite à 5,5% (au lieu de 20%) si le logement a plus de 2 ans. Pour une chaudière à 16 000€ HT, l'économie est de <strong>~2 300€</strong>.</p>

<h2>Éco-PTZ : jusqu'à 30 000€ à taux 0%</h2>
<p>L'Éco-Prêt à Taux Zéro finance le reste à charge <strong>sans intérêts</strong> : jusqu'à 30 000€ sur 15 ans, sans condition de revenus.</p>

<h2>Exemple concret : remplacement fioul, ménage modeste</h2>
<p>Chaudière <a href="/marques/okofen">Ökofen</a> Pellematic Condens à <strong>16 000€ TTC</strong> :</p>
<ul>
<li>MaPrimeRénov' : <strong>-8 000€</strong></li>
<li>Bonus sortie fioul : <strong>-1 000€</strong></li>
<li>Prime CEE : <strong>-2 500€</strong></li>
<li>Coup de pouce : <strong>-4 000€</strong></li>
<li><strong>Reste à charge : 500€</strong> (soit -97% !)</li>
</ul>

<h2>Ordre optimal pour maximiser les aides</h2>
<ol>
<li><strong>Demandez vos devis</strong> (3 minimum via notre <a href="/devis">formulaire gratuit</a>) — ne signez rien !</li>
<li><strong>Déposez votre demande MaPrimeRénov'</strong> sur maprimerenov.gouv.fr</li>
<li><strong>Obtenez votre offre CEE</strong> auprès d'un obligé (souvent via l'installateur)</li>
<li><strong>Signez le devis</strong> et lancez les travaux</li>
<li><strong>Payez l'artisan</strong> (le reste à charge après déduction des aides)</li>
<li><strong>Recevez les primes</strong> (virées sous 4 à 8 semaines)</li>
</ol>
`
  },
  {
    slug: "chaudiere-granules-vs-pompe-chaleur",
    title: "Chaudière Granulés vs Pompe à Chaleur : Le Comparatif Décisif",
    metaTitle: "Chaudière Granulés vs Pompe à Chaleur — Comparatif 2026",
    metaDescription: "Chaudière à granulés ou pompe à chaleur air/eau ? Comparatif complet : prix, rendement, coût annuel, aides, environnement. Découvrez quelle solution choisir selon votre profil.",
    excerpt: "Granulés ou PAC ? Deux solutions écologiques, deux philosophies. Comparatif détaillé pour choisir le chauffage adapté à votre maison, votre zone climatique et votre budget.",
    date: "2026-02-05",
    readTime: "11 min",
    category: "Comparatif",
    emoji: "⚖️",
    image: "/images/blog/fioul-vs-granules.png",
    content: `
<p>La question revient dans 80% des consultations : <strong>chaudière à granulés ou pompe à chaleur air/eau ?</strong> Les deux remplacent avantageusement une chaudière fioul ou gaz, mais elles fonctionnent sur des principes radicalement différents — et ce choix impacte votre confort, votre budget et votre empreinte carbone pour les 20 prochaines années.</p>

<h2>La différence fondamentale</h2>
<ul>
<li><strong>Chaudière à granulés</strong> : brûle un combustible biomasse (granulés de bois) pour chauffer un circuit d'eau. Énergie renouvelable, bilan carbone quasi neutre, indépendante de l'électricité.</li>
<li><strong>Pompe à chaleur air/eau</strong> : capte les calories de l'air extérieur et les concentre via un compresseur électrique. COP de 3-4 (1 kWh électrique = 3-4 kWh thermiques).</li>
</ul>

<h2>Comparatif détaillé</h2>
<table>
<thead><tr><th>Critère</th><th>Chaudière Granulés</th><th>PAC Air/Eau</th></tr></thead>
<tbody>
<tr><td><strong>Prix TTC posé</strong></td><td>8 000 – 25 000€</td><td>8 000 – 18 000€</td></tr>
<tr><td><strong>MaPrimeRénov' max</strong></td><td><strong>10 000€</strong></td><td>11 000€</td></tr>
<tr><td><strong>Coût annuel (120 m²)</strong></td><td><strong>1 200 – 1 800€</strong></td><td>800 – 1 200€</td></tr>
<tr><td><strong>Rendement</strong></td><td>85-107% (PCI)</td><td>COP 3-4,5</td></tr>
<tr><td><strong>Bilan carbone</strong></td><td><strong>~0 (neutre)</strong></td><td>~30 gCO₂/kWh</td></tr>
<tr><td><strong>Dépendance électrique</strong></td><td><strong>Faible</strong> (60-100 W)</td><td>Forte (1-3 kW)</td></tr>
<tr><td><strong>Perf. par grand froid</strong></td><td><strong>Stable</strong></td><td>Diminue sous -7°C</td></tr>
<tr><td><strong>Encombrement</strong></td><td>Important (silo)</td><td><strong>Faible</strong></td></tr>
<tr><td><strong>Entretien annuel</strong></td><td>150-350€ + cendrier</td><td>150-300€</td></tr>
<tr><td><strong>Bruit</strong></td><td>Silencieux</td><td>Unité ext. audible</td></tr>
<tr><td><strong>Durée de vie</strong></td><td><strong>20-25 ans</strong></td><td>15-20 ans</td></tr>
</tbody>
</table>

<h2>Quand choisir la chaudière à granulés ?</h2>
<ul>
<li>Vous êtes en <strong>zone climatique H1</strong> (nord, est, montagne) — les performances sont stables par grand froid</li>
<li>Vous avez <strong>de la place</strong> pour un silo (6-10 m² de local technique)</li>
<li>Vous remplacez une <strong>chaudière fioul</strong> — le circuit hydraulique est déjà en place</li>
<li>Vous voulez être <strong>indépendant de l'électricité</strong> (la chaudière consomme seulement 60-100 W)</li>
<li>Vous voulez un <strong>bilan carbone quasi nul</strong></li>
<li>Vous avez une <strong>grande maison</strong> (>150 m²) avec des besoins importants en chauffage</li>
</ul>

<h2>Quand choisir la pompe à chaleur ?</h2>
<ul>
<li>Vous êtes en <strong>zone H2 ou H3</strong> (climat tempéré à doux)</li>
<li>Vous n'avez <strong>pas de place</strong> pour un silo à granulés</li>
<li>Vous voulez aussi la <strong>climatisation en été</strong> (PAC réversible)</li>
<li>Votre maison fait <strong>moins de 120 m²</strong></li>
<li>Vous êtes en <strong>chauffage tout électrique</strong> (pas de circuit d'eau)</li>
</ul>

<h2>Notre verdict</h2>
<p>Pour les <strong>grandes maisons en zone froide</strong> avec un remplacement fioul, la <strong>chaudière à granulés est imbattable</strong>. Elle offre un confort constant quelle que soit la température extérieure, un bilan carbone neutre, et des aides très généreuses.</p>
<p>Pour les <strong>maisons moyennes en zone tempérée</strong>, la <strong>PAC air/eau</strong> reste un excellent choix grâce à son COP élevé et son encombrement réduit.</p>
<p>Dans les deux cas, <a href="/devis">demandez vos 3 devis gratuits</a> pour comparer les options.</p>
`
  },
  {
    slug: "remplacement-chaudiere-fioul-granules",
    title: "Remplacer sa Chaudière Fioul par des Granulés : Étapes, Coûts et Aides",
    metaTitle: "Remplacement Chaudière Fioul → Granulés — Guide Complet 2026",
    metaDescription: "Comment remplacer sa chaudière fioul par une chaudière à granulés ? Guide étape par étape : neutralisation cuve, adaptations, coûts (8 000-20 000€), aides et économies sur 10 ans.",
    excerpt: "Remplacer votre chaudière fioul par une chaudière à granulés : le guide pas-à-pas. Neutralisation cuve, adaptations nécessaires, coûts détaillés et calcul des économies fioul→granulés sur 10 ans.",
    date: "2026-02-15",
    readTime: "13 min",
    category: "Guide",
    emoji: "🔄",
    image: "/images/blog/fioul-vs-granules.png",
    content: `
<p>Remplacer une <strong>chaudière fioul</strong> par une <strong>chaudière à granulés</strong> est la transition énergétique la plus fréquente et la plus rentable en France. Avec l'interdiction des chaudières fioul neuves depuis 2022 et le <strong>bonus sortie fioul de 1 000€</strong>, c'est le moment idéal pour basculer. Voici le guide complet.</p>

<h2>Pourquoi remplacer le fioul par les granulés ?</h2>
<p>Les chiffres parlent d'eux-mêmes :</p>
<table>
<thead><tr><th>Critère</th><th>Chaudière fioul</th><th>Chaudière granulés</th><th>Gain</th></tr></thead>
<tbody>
<tr><td><strong>Coût annuel (120 m²)</strong></td><td>2 200 – 2 800€</td><td>1 200 – 1 800€</td><td><strong>-1 000€/an</strong></td></tr>
<tr><td><strong>Émissions CO₂</strong></td><td>5 280 kg/an</td><td>~0 kg/an</td><td><strong>-100%</strong></td></tr>
<tr><td><strong>Rendement</strong></td><td>75-85%</td><td>85-107%</td><td><strong>+10-30%</strong></td></tr>
<tr><td><strong>Prix énergie (tendance)</strong></td><td>↗ Hausse (+40% en 5 ans)</td><td>→ Stable</td><td><strong>Sécurité</strong></td></tr>
</tbody>
</table>
<p>Sur <strong>10 ans</strong>, l'économie cumulée est de <strong>10 000 à 15 000€</strong>. Sur 20 ans : <strong>20 000 à 30 000€</strong>.</p>

<h2>Les 7 étapes du remplacement</h2>

<h3>1. Bilan thermique et dimensionnement</h3>
<p>Un installateur RGE Qualibois réalise un bilan thermique de votre maison pour déterminer la puissance nécessaire. En général, si votre chaudière fioul faisait 25 kW, une chaudière granulés de <strong>20 kW suffit</strong> (meilleur rendement).</p>

<h3>2. Choix de l'emplacement du silo</h3>
<p>C'est souvent le point clé : où stocker les granulés ? Options :</p>
<ul>
<li><strong>Dans la cuve fioul existante</strong> (après neutralisation et adaptation) — économique</li>
<li><strong>Silo textile</strong> dans la chaufferie existante — la solution la plus courante</li>
<li><strong>Local adjacent</strong> transformé en silo maçonné — pour les gros volumes</li>
</ul>

<h3>3. Neutralisation de la cuve fioul</h3>
<p>C'est une <strong>obligation légale</strong> (arrêté du 1er juillet 2004). La cuve doit être :</p>
<ul>
<li>Vidée et dégazée par un professionnel certifié</li>
<li>Nettoyée des boues et résidus</li>
<li>Soit comblée (sable, béton), soit découpée et évacuée</li>
</ul>
<p>Coût : <strong>500 à 2 000€</strong> selon le volume et l'accessibilité de la cuve.</p>

<h3>4. Adaptation du conduit de fumée</h3>
<p>Le conduit existant (fioul) doit généralement être <strong>tubé en inox</strong> pour résister aux condensats acides des fumées de granulés. Coût : <strong>1 500 à 3 500€</strong>.</p>

<h3>5. Installation de la chaudière</h3>
<p>L'installateur pose la chaudière, le silo, le système d'alimentation (vis sans fin ou aspiration), et raccorde le tout au circuit hydraulique existant. Durée : <strong>3 à 5 jours</strong>.</p>

<h3>6. Montage des dossiers d'aides</h3>
<p>Le bonus sortie fioul (+1 000€) s'ajoute aux aides standard. Votre installateur RGE vous aide à constituer les dossiers <a href="/guides/aides-chaudiere-granules-2026">MaPrimeRénov' et CEE</a>.</p>

<h3>7. Mise en service et formation</h3>
<p>Le technicien configure la chaudière, programme les plages horaires et vous explique les gestes d'<a href="/guides/entretien-chaudiere-granules">entretien courant</a> (vidage du cendrier, etc.).</p>

<h2>Budget total remplacement fioul → granulés</h2>
<table>
<thead><tr><th>Poste</th><th>Prix</th></tr></thead>
<tbody>
<tr><td>Chaudière granulés 20 kW posée</td><td>10 000 – 16 000€</td></tr>
<tr><td>Silo textile 3 tonnes</td><td>1 000 – 2 000€</td></tr>
<tr><td>Tubage conduit inox</td><td>1 500 – 3 000€</td></tr>
<tr><td>Dépose chaudière fioul</td><td>500 – 1 000€</td></tr>
<tr><td>Neutralisation cuve fioul</td><td>500 – 2 000€</td></tr>
<tr><td><strong>Total</strong></td><td><strong>13 500 – 24 000€</strong></td></tr>
<tr><td><strong>Après aides (modestes)</strong></td><td><strong>2 000 – 8 000€</strong></td></tr>
</tbody>
</table>
`
  },
  {
    slug: "comparatif-marques-chaudiere-granules",
    title: "Comparatif Marques Chaudière Granulés 2026 : Ökofen vs Fröling vs Hargassner",
    metaTitle: "Comparatif Marques Chaudière Granulés 2026 — Top 6",
    metaDescription: "Ökofen, Fröling, Hargassner, De Dietrich, Viessmann, HS France : quelle marque de chaudière à granulés choisir en 2026 ? Comparatif prix, rendement, garantie, SAV France.",
    excerpt: "Ökofen, Fröling, Hargassner, De Dietrich, Viessmann ou HS France ? Comparatif objectif des 6 meilleures marques de chaudière à granulés en 2026 : prix, rendement, SAV et garantie.",
    date: "2026-03-01",
    readTime: "10 min",
    category: "Comparatif",
    emoji: "🏆",
    image: "/images/marques-hero.png",
    content: `
<p>Choisir la bonne marque de <strong>chaudière à granulés</strong> est aussi important que le dimensionnement. Une marque fiable, c'est 20-25 ans de tranquillité. Voici notre classement objectif 2026 des 6 marques les plus installées en France.</p>

<h2>Tableau comparatif synthétique</h2>
<table>
<thead><tr><th>Marque</th><th>Pays</th><th>Prix 20 kW posé</th><th>Rendement max</th><th>Garantie</th><th>SAV France</th></tr></thead>
<tbody>
<tr><td>🥇 <strong><a href="/marques/okofen">Ökofen</a></strong></td><td>🇦🇹</td><td>14 000 – 20 000€</td><td>107,3%</td><td>5 ans</td><td>450 installateurs</td></tr>
<tr><td>🥈 <strong><a href="/marques/froling">Fröling</a></strong></td><td>🇦🇹</td><td>13 000 – 18 000€</td><td>106%</td><td>5 ans</td><td>350 installateurs</td></tr>
<tr><td>🥉 <strong><a href="/marques/hargassner">Hargassner</a></strong></td><td>🇦🇹</td><td>10 000 – 15 000€</td><td>95,8%</td><td>5 ans</td><td>280 installateurs</td></tr>
<tr><td>4. <strong><a href="/marques/viessmann">Viessmann</a></strong></td><td>🇩🇪</td><td>11 000 – 16 000€</td><td>95,3%</td><td>5 ans</td><td>1 800 partenaires</td></tr>
<tr><td>5. <strong><a href="/marques/de-dietrich">De Dietrich</a></strong></td><td>🇫🇷</td><td>8 000 – 12 000€</td><td>93,5%</td><td>5 ans</td><td>2 500 installateurs</td></tr>
<tr><td>6. <strong><a href="/marques/hs-france">HS France</a></strong></td><td>🇫🇷</td><td>7 000 – 10 000€</td><td>92%</td><td>3 ans</td><td>400 installateurs</td></tr>
</tbody>
</table>

<h2>🥇 Ökofen — Le meilleur rendement</h2>
<p>Si votre budget le permet, <a href="/marques/okofen">Ökofen</a> est incontournable. Le rendement de 107,3% de la Pellematic Condens est imbattable. <strong>Idéal pour</strong> : grandes maisons en zone froide, propriétaires exigeants.</p>

<h2>🥈 Fröling — Le choix des pros</h2>
<p><a href="/marques/froling">Fröling</a> et sa régulation Lambdatronic offrent la combustion la plus propre du marché. Le modèle SP Dual (bûches + granulés) est unique. <strong>Idéal pour</strong> : zones rurales avec accès au bois, connaisseurs.</p>

<h2>🥉 Hargassner — Le plus compact et silencieux</h2>
<p>Le <a href="/marques/hargassner">Nano-PK</a> occupe seulement 0,36 m² et fonctionne à 38 dB. <strong>Idéal pour</strong> : petites chaufferies, propriétaires qui veulent la tranquillité.</p>

<h2>Notre conseil final</h2>
<p>Les 3 marques autrichiennes (Ökofen, Fröling, Hargassner) offrent les meilleurs rendements mais à des prix premium. <a href="/marques/de-dietrich">De Dietrich</a> et <a href="/marques/hs-france">HS France</a> sont les meilleurs choix pour les budgets maîtrisés avec un SAV français dense. <a href="/devis">Comparez 3 devis</a> pour trouver le meilleur rapport qualité/prix dans votre département.</p>
`
  },
  {
    slug: "entretien-chaudiere-granules",
    title: "Entretien Chaudière Granulés : Coûts, Fréquence, Obligations 2026",
    metaTitle: "Entretien Chaudière Granulés 2026 — Coûts, Fréquence, Obligations",
    metaDescription: "L'entretien d'une chaudière à granulés coûte 150 à 350€/an. Ramonage 2x/an obligatoire, nettoyage échangeur, vidage cendrier. Guide complet des obligations et gestes DIY.",
    excerpt: "L'entretien annuel d'une chaudière à granulés coûte 150 à 350€. Ramonage 2x/an obligatoire, nettoyage de l'échangeur et de l'alimentation. Voici les obligations légales et les gestes à faire soi-même.",
    date: "2026-03-15",
    readTime: "9 min",
    category: "Maintenance",
    emoji: "🔧",
    image: "/images/blog/installation-chaudiere.png",
    content: `
<p>L'entretien d'une <strong>chaudière à granulés</strong> est <strong>obligatoire</strong> et essentiel pour maintenir les performances et la longévité de votre équipement. Mal entretenue, une chaudière peut perdre 15 à 20% de rendement et voir sa durée de vie réduite de moitié.</p>

<h2>Obligations légales 2026</h2>
<ul>
<li><strong>Entretien annuel obligatoire</strong> par un professionnel qualifié (décret du 9 juin 2009)</li>
<li><strong>Ramonage 2 fois par an</strong> (dont 1 en période de chauffe) — obligation du Règlement Sanitaire Départemental</li>
<li><strong>Attestation d'entretien</strong> à conserver — exigée par votre assurance habitation</li>
</ul>

<h2>Ce que comprend l'entretien professionnel</h2>
<h3>Visite annuelle standard (150 – 250€)</h3>
<ul>
<li>Nettoyage complet du foyer et de l'échangeur thermique</li>
<li>Vérification du brûleur et de la grille de combustion</li>
<li>Contrôle du système d'alimentation (vis sans fin ou aspiration)</li>
<li>Nettoyage du cendrier et du décendrage automatique</li>
<li>Vérification des joints et de l'étanchéité</li>
<li>Contrôle des fumées (CO, tirage, température)</li>
<li>Ramonage du conduit (peut être inclus ou facturé en sus)</li>
<li>Mise à jour du logiciel si chaudière connectée</li>
<li>Remise de l'attestation d'entretien</li>
</ul>

<h3>Ramonage (80 – 150€ par passage)</h3>
<p>Le ramonage doit être effectué <strong>2 fois par an</strong> par un ramoneur certifié. Il consiste à nettoyer le conduit de fumée pour éliminer les dépôts de suie et de créosote, prévenant les risques d'incendie de conduit.</p>

<h2>Gestes d'entretien à faire soi-même</h2>
<ul>
<li><strong>Toutes les 1-2 semaines</strong> : vider le cendrier (5 minutes)</li>
<li><strong>Tous les mois</strong> : aspirer le foyer et vérifier la grille de combustion</li>
<li><strong>Tous les 2-3 mois</strong> : nettoyer la vitre (si modèle avec hublot)</li>
<li><strong>Avant chaque livraison</strong> : vérifier l'état du silo (humidité, poussière)</li>
<li><strong>En fin de saison</strong> : faire tourner la chaudière 30 min à pleine puissance pour brûler les résidus</li>
</ul>

<h2>Impact sur la durée de vie et le rendement</h2>
<table>
<thead><tr><th>Entretien</th><th>Durée de vie</th><th>Rendement maintenu</th></tr></thead>
<tbody>
<tr><td>✅ Entretien annuel + ramonage 2x</td><td><strong>20 – 25 ans</strong></td><td>95% du nominal</td></tr>
<tr><td>⚠️ Entretien irrégulier</td><td>12 – 16 ans</td><td>80-85% du nominal</td></tr>
<tr><td>❌ Aucun entretien</td><td>8 – 12 ans</td><td>65-75% du nominal</td></tr>
</tbody>
</table>

<p>Un entretien régulier prolonge la vie de votre chaudière de <strong>8 à 13 ans</strong> et maintient des performances optimales. Sur 20 ans, les 4 000 à 7 000€ investis en maintenance se remboursent 5 à 10 fois en économies de combustible.</p>
`
  },
  {
    slug: "silo-stockage-granules",
    title: "Silo à Granulés : Textile, Maçonné ou Enterré ? Prix et Choix",
    metaTitle: "Silo à Granulés — Textile, Maçonné, Enterré : Prix & Choix 2026",
    metaDescription: "Quel silo à granulés choisir ? Textile (800-2 500€), maçonné (2 000-5 000€) ou enterré (3 000-8 000€). Comparatif, tailles recommandées et conseils de livraison.",
    excerpt: "Textile démontable, maçonné ou enterré : quel silo à granulés choisir ? Comparatif des types de stockage avec prix, avantages/inconvénients et dimensionnement par consommation.",
    date: "2026-04-01",
    readTime: "8 min",
    category: "Guide",
    emoji: "🏗️",
    image: "/images/blog/silo-textile.png",
    content: `
<p>Le <strong>silo à granulés</strong> est un élément essentiel de votre installation. Bien dimensionné, il vous garantit une autonomie de plusieurs mois et des livraisons optimisées. Mal choisi, il peut poser des problèmes d'humidité, de poussière ou d'encombrement.</p>

<h2>Les 4 types de silo comparés</h2>
<table>
<thead><tr><th>Type</th><th>Capacité</th><th>Prix</th><th>Surface au sol</th><th>Autonomie*</th></tr></thead>
<tbody>
<tr><td><strong>Silo textile</strong></td><td>1,5 – 5 t</td><td>800 – 2 500€</td><td>1,5 – 3 m²</td><td>4 – 12 mois</td></tr>
<tr><td><strong>Silo maçonné</strong></td><td>3 – 10 t</td><td>2 000 – 5 000€</td><td>3 – 6 m²</td><td>8 – 24 mois</td></tr>
<tr><td><strong>Silo enterré</strong></td><td>3 – 8 t</td><td>3 000 – 8 000€</td><td>0 m² (sous terre)</td><td>8 – 18 mois</td></tr>
<tr><td><strong>Réservoir journalier</strong></td><td>100 – 300 kg</td><td>500 – 1 500€</td><td>0,3 – 0,5 m²</td><td>3 – 10 jours</td></tr>
</tbody>
</table>
<p><em>* Pour une maison de 120 m², consommation ~4-5 t/an</em></p>

<h2>Le silo textile : le plus populaire</h2>
<p>Utilisé dans <strong>70% des installations</strong>, le silo textile est un sac armé monté sur un cadre métallique. Ses avantages :</p>
<ul>
<li>✅ Prix accessible (800 – 2 500€)</li>
<li>✅ Installation rapide (2-3 heures)</li>
<li>✅ Démontable et repositionnable</li>
<li>✅ Anti-statique et respirant (pas de condensation)</li>
<li>⚠️ Durée de vie limitée (8-12 ans pour la toile)</li>
<li>⚠️ Capacité max ~5 tonnes</li>
</ul>

<h2>Dimensionnement : quelle taille choisir ?</h2>
<p>La règle d'or : votre silo doit contenir <strong>au minimum 75% de votre consommation annuelle</strong> pour optimiser les livraisons (1 seule livraison/an en été, quand les prix sont bas).</p>

<table>
<thead><tr><th>Surface maison</th><th>Conso annuelle</th><th>Silo recommandé</th><th>Type conseillé</th></tr></thead>
<tbody>
<tr><td>80-100 m²</td><td>3-4 tonnes</td><td>3 tonnes</td><td>Textile 2,5 m²</td></tr>
<tr><td>100-150 m²</td><td>4-5 tonnes</td><td>4-5 tonnes</td><td>Textile 3 m² ou maçonné</td></tr>
<tr><td>150-200 m²</td><td>5-7 tonnes</td><td>5-7 tonnes</td><td>Maçonné ou enterré</td></tr>
</tbody>
</table>

<h2>Livraison en vrac vs granulés en sacs</h2>
<table>
<thead><tr><th>Mode</th><th>Prix/tonne</th><th>Avantages</th><th>Inconvénients</th></tr></thead>
<tbody>
<tr><td><strong>Vrac (soufflé)</strong></td><td>300 – 400€/t</td><td>Le moins cher, livraison rapide</td><td>Nécessite un silo et un accès camion</td></tr>
<tr><td><strong>Sacs 15 kg (palette)</strong></td><td>350 – 550€/t</td><td>Stockage flexible, pas de silo</td><td>Plus cher, manutention</td></tr>
</tbody>
</table>

<p>💡 <strong>Astuce</strong> : commandez vos granulés en <strong>mai-juin</strong> pour profiter des tarifs d'été, 10 à 15% moins chers qu'en plein hiver. Regroupez-vous avec des voisins pour bénéficier de tarifs de volume.</p>
`
  },
  {
    slug: "chaudiere-granules-condensation",
    title: "Chaudière Granulés à Condensation : Rendement 107%, Ça Vaut le Coup ?",
    metaTitle: "Chaudière Granulés Condensation — Rendement 107%, Rentable ?",
    metaDescription: "La chaudière à granulés à condensation atteint 107% de rendement (PCI). Surcoût de 3 000-5 000€ vs standard. Est-ce rentable ? Analyse détaillée et marques leaders.",
    excerpt: "Rendement de 107% sur PCI — la chaudière à granulés à condensation récupère la chaleur des fumées. Surcoût de 3 000-5 000€ vs standard. Analyse de rentabilité et marques leaders.",
    date: "2026-04-15",
    readTime: "9 min",
    category: "Technologie",
    emoji: "🔬",
    image: "/images/blog/granules-tremie.png",
    content: `
<p>Un rendement de <strong>107%</strong> ? Impossible ? Non, c'est le rendement sur PCI (Pouvoir Calorifique Inférieur) de la <strong>chaudière à granulés à condensation</strong>, la technologie la plus avancée du marché. Mais le surcoût de 3 000 à 5 000€ est-il rentable ? Analyse détaillée.</p>

<h2>Comment un rendement > 100% est possible ?</h2>
<p>Le « mystère » vient de la méthode de calcul. Le rendement est mesuré sur le <strong>PCI</strong> (Pouvoir Calorifique Inférieur), qui ne prend pas en compte l'énergie contenue dans la vapeur d'eau des fumées. La chaudière à condensation <strong>récupère cette énergie latente</strong> en refroidissant les fumées en dessous de 55°C, ce qui provoque la condensation de la vapeur d'eau et libère cette chaleur supplémentaire.</p>
<p>Si on mesure sur le PCS (Pouvoir Calorifique Supérieur, qui inclut la vapeur d'eau), le rendement est d'environ 97-98% — toujours excellent, mais pas au-dessus de 100%.</p>

<h2>Condensation vs Standard : le comparatif</h2>
<table>
<thead><tr><th>Critère</th><th>Standard</th><th>Condensation</th><th>Différence</th></tr></thead>
<tbody>
<tr><td><strong>Rendement (PCI)</strong></td><td>85-93%</td><td>95-107%</td><td><strong>+12-22 pts</strong></td></tr>
<tr><td><strong>Prix 20 kW posé</strong></td><td>8 000-14 000€</td><td>13 000-20 000€</td><td><strong>+3 000-5 000€</strong></td></tr>
<tr><td><strong>Conso annuelle (120 m²)</strong></td><td>4,5-5 t</td><td>3,8-4,2 t</td><td><strong>-15-20%</strong></td></tr>
<tr><td><strong>Coût annuel granulés</strong></td><td>1 500-1 800€</td><td>1 200-1 500€</td><td><strong>-300€/an</strong></td></tr>
<tr><td><strong>Température fumées</strong></td><td>120-180°C</td><td>40-55°C</td><td>Plus sûr</td></tr>
</tbody>
</table>

<h2>Est-ce rentable ?</h2>
<p>Avec un surcoût de 4 000€ et une économie annuelle de 300€ sur les granulés, le <strong>retour sur investissement est de 13 ans</strong>. C'est correct pour un équipement qui dure 20-25 ans, mais pas spectaculaire.</p>
<p>La condensation devient <strong>vraiment rentable</strong> quand :</p>
<ul>
<li>Votre maison fait <strong>plus de 150 m²</strong> (économies annuelles plus importantes)</li>
<li>Vous êtes en <strong>zone H1</strong> (consommation élevée = gain absolu plus important)</li>
<li>Le <strong>prix des granulés augmente</strong> (ce qui amplifie les économies relatives)</li>
</ul>

<h2>Marques leaders en condensation granulés</h2>
<ul>
<li><strong><a href="/marques/okofen">Ökofen Pellematic Condens</a></strong> : 107,3% — la référence absolue</li>
<li><strong><a href="/marques/froling">Fröling PE1c</a></strong> : 106% — combustion Lambdatronic</li>
</ul>

<h2>Notre verdict</h2>
<p>Si vous investissez dans une chaudière premium pour 20+ ans et que votre maison fait plus de 150 m² en zone froide, la <strong>condensation est un excellent choix</strong>. Pour les budgets plus serrés ou les maisons plus petites, une chaudière standard de qualité (rendement 93-95%) reste le meilleur rapport qualité/prix.</p>
`
  },
  {
    slug: "devis-chaudiere-granules-pieges",
    title: "8 Pièges à Éviter sur un Devis Chaudière Granulés",
    metaTitle: "Devis Chaudière Granulés — 8 Pièges à Éviter Absolument",
    metaDescription: "Marque floue, conduit non inclus, silo sous-dimensionné, installateur non RGE... Les 8 pièges les plus fréquents sur un devis de chaudière à granulés et comment les repérer.",
    excerpt: "Marque non précisée, conduit oublié, dépose fioul en supplément, installateur non RGE... Voici les 8 pièges les plus courants sur un devis de chaudière à granulés et comment vous protéger.",
    date: "2026-05-01",
    readTime: "7 min",
    category: "Conseils",
    emoji: "⚠️",
    image: "/images/blog/installation-chaudiere.png",
    content: `
<p>Un devis de <strong>chaudière à granulés</strong> engage des sommes importantes : 8 000 à 25 000€. Pourtant, de nombreux propriétaires signent des devis incomplets ou trompeurs. Voici les <strong>8 pièges les plus fréquents</strong> et comment les repérer avant de signer.</p>

<h2>❌ Piège n°1 : La marque et le modèle ne sont pas précisés</h2>
<p>Un devis qui indique « chaudière à granulés 20 kW » sans préciser la marque ni le modèle est un <strong>signal d'alerte majeur</strong>.</p>
<p>✅ <strong>Exigez</strong> : marque, modèle exact, puissance, rendement et n° de référence constructeur.</p>

<h2>❌ Piège n°2 : Le conduit de fumée n'est pas inclus</h2>
<p>Le tubage du conduit de fumée en inox coûte <strong>1 500 à 3 500€</strong>. Certains devis l'omettent volontairement pour paraître moins chers.</p>

<h2>❌ Piège n°3 : La dépose fioul est « en option »</h2>
<p>Si vous remplacez une chaudière fioul, la dépose (500-1 500€) et la <strong>neutralisation de la cuve</strong> (500-2 000€) sont obligatoires. Un devis sérieux les inclut systématiquement.</p>

<h2>❌ Piège n°4 : Le silo est sous-dimensionné</h2>
<p>Un silo de 1,5 tonne pour une maison de 150 m² vous oblige à <strong>3-4 livraisons par an</strong> au lieu d'une seule, avec des surcoûts de livraison.</p>

<h2>❌ Piège n°5 : L'installateur n'est pas RGE Qualibois</h2>
<p>Sans certification <strong>RGE Qualibois</strong>, vous perdez <strong>toutes les aides</strong>. Vérifiez sur qualit-enr.org avant de signer.</p>

<h2>❌ Piège n°6 : La mise en service est payante</h2>
<p>La mise en service (configuration, réglages, formation) doit être <strong>incluse dans le prix</strong>.</p>

<h2>❌ Piège n°7 : La garantie est floue</h2>
<p>Exigez une garantie détaillée : <strong>pièces</strong> (2 ans minimum), <strong>corps de chauffe</strong> (5 ans), <strong>main d'œuvre</strong> (1-2 ans).</p>

<h2>❌ Piège n°8 : Le contrat d'entretien n'est pas mentionné</h2>
<p>L'<a href="/guides/entretien-chaudiere-granules">entretien annuel est obligatoire</a>. Un bon devis propose un contrat de maintenance (150-350€/an).</p>

<h2>✅ Le devis idéal contient</h2>
<ol>
<li>Marque, modèle et référence exacte de la chaudière</li>
<li>Puissance et rendement certifié</li>
<li>Type et capacité du silo</li>
<li>Tubage du conduit inclus</li>
<li>Dépose et neutralisation fioul incluses (si applicable)</li>
<li>Ballon tampon et/ou ECS si nécessaire</li>
<li>Mise en service et formation incluses</li>
<li>Garantie détaillée (pièces, corps de chauffe, MO)</li>
<li>Numéro RGE Qualibois vérifiable</li>
<li>Détail des aides déductibles</li>
</ol>

<p><a href="/devis">Demandez vos 3 devis gratuits</a> via notre formulaire pour comparer des installateurs RGE vérifiés.</p>
`
  },
  {
    slug: "prix-granules-bois-evolution",
    title: "Prix des Granulés de Bois en 2026 : Tarifs, Évolution et Où Acheter",
    metaTitle: "Prix Granulés de Bois 2026 — Tarifs, Évolution & Fournisseurs",
    metaDescription: "Prix des granulés de bois en 2026 : 300 à 450€/tonne en vrac. Évolution des prix 2020-2026, impact de la crise 2022, fournisseurs recommandés et certifications ENplus.",
    excerpt: "Prix des granulés en 2026 : 300 à 450€/tonne en vrac, 350 à 550€ en sacs. Retour sur l'évolution des prix depuis 2020, stabilisation post-crise et conseils pour acheter au meilleur prix.",
    date: "2026-05-15",
    readTime: "8 min",
    category: "Prix",
    emoji: "📊",
    image: "/images/blog/granules-enplus.png",
    content: `
<p>Le prix des <strong>granulés de bois</strong> (pellets) s'est stabilisé en 2025-2026 après la flambée historique de 2022-2023. En 2026, comptez <strong>300 à 450€ la tonne en vrac</strong> et 350 à 550€ en sacs de 15 kg. Voici l'état du marché et nos conseils pour acheter au meilleur prix.</p>

<h2>Prix actuels des granulés en 2026</h2>
<table>
<thead><tr><th>Format</th><th>Prix/tonne</th><th>Prix/kWh</th><th>Usage typique</th></tr></thead>
<tbody>
<tr><td><strong>Vrac soufflé</strong></td><td>300 – 400€/t</td><td>0,062 – 0,083€</td><td>Silo textile/maçonné, livraison camion</td></tr>
<tr><td><strong>Sacs 15 kg (palette)</strong></td><td>350 – 550€/t</td><td>0,073 – 0,115€</td><td>Réservoir journalier, sans silo</td></tr>
<tr><td><strong>Big bags 1 tonne</strong></td><td>320 – 420€/t</td><td>0,067 – 0,088€</td><td>Compromis prix/praticité</td></tr>
</tbody>
</table>

<h2>Évolution des prix 2020-2026</h2>
<table>
<thead><tr><th>Année</th><th>Prix moyen vrac (€/t)</th><th>Variation</th></tr></thead>
<tbody>
<tr><td>2020</td><td>280€</td><td>—</td></tr>
<tr><td>2021</td><td>290€</td><td>+4%</td></tr>
<tr><td>2022</td><td><strong>550€</strong></td><td><strong>+90%</strong> 🔴</td></tr>
<tr><td>2023</td><td>420€</td><td>-24%</td></tr>
<tr><td>2024</td><td>350€</td><td>-17%</td></tr>
<tr><td>2025</td><td>320€</td><td>-9%</td></tr>
<tr><td>2026</td><td><strong>330€</strong></td><td>+3%</td></tr>
</tbody>
</table>

<p>La <strong>crise de 2022</strong> était due à la guerre en Ukraine, à un effet de stockage massif et à des tensions sur la logistique. Le marché s'est normalisé : la production française de granulés a augmenté de 30% entre 2022 et 2025.</p>

<h2>Comment acheter au meilleur prix ?</h2>
<ol>
<li><strong>Commandez en été</strong> (mai-juillet) : prix 10-15% moins chers qu'en hiver</li>
<li><strong>Achetez en vrac</strong> : 20-30% moins cher que les sacs</li>
<li><strong>Regroupez les commandes</strong> avec vos voisins</li>
<li><strong>Vérifiez les certifications</strong> : DINplus ou ENplus A1 uniquement</li>
</ol>
`
  }
];
