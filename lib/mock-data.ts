import {
  Achievement,
  ContactInfo,
  MediaItem,
  NewsArticle,
  Profile,
  TimelineItem,
  VisionAxis,
} from "@/types";

export const profile: Profile = {
  name: "Fritz William Michel",
  title: "Administrateur public, dirigeant et personnalité publique haïtienne",
  tagline: "Sens de l'État, responsabilité et continuité institutionnelle",
  location: "Haïti",
  shortBio:
    "Ce prototype institutionnel présente Fritz William Michel à travers un parcours associant administration publique, gestion financière, coordination institutionnelle et responsabilités exécutives. Il est conçu comme une base éditoriale premium, destinée à accueillir des contenus officiels validés, des repères biographiques consolidés et des documents de référence.",
};

export const homeHighlights = [
  {
    title: "Expérience publique",
    description:
      "Une trajectoire inscrite dans l'administration publique haïtienne, avec une expérience structurée autour des questions budgétaires, financières et institutionnelles.",
  },
  {
    title: "Direction institutionnelle",
    description:
      "Des fonctions de direction administrative, de cabinet et d'encadrement qui traduisent une pratique concrète de la coordination et du pilotage institutionnel.",
  },
  {
    title: "Parcours académique",
    description:
      "Une formation en sciences comptables, sciences administratives et management de projets, renforcée par des séminaires techniques ciblés.",
  },
  {
    title: "Engagement professionnel",
    description:
      "Une continuité entre service public, responsabilités exécutives et engagement organisationnel, présentée dans un cadre professionnel sobre et cohérent.",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: "t1",
    period: "1993 - 2000",
    title: "Études classiques au Collège Catt’s Pressoir",
    description:
      "Parcours secondaire indiqué dans le CV, de la 6ème à la philosophie, au Collège Catt’s Pressoir.",
    category: "Formation",
  },
  {
    id: "t2",
    period: "2000 - 2004",
    title: "Formation en sciences comptables et administratives",
    description:
      "Études en sciences comptables à l’INAGHEI et en sciences administratives à l’IHECE, telles que mentionnées dans le CV fourni.",
    category: "Formation",
  },
  {
    id: "t3",
    period: "Juillet 2010",
    title: "Perfectionnement en management et évaluation de projets",
    description:
      "Formation en management, suivi et évaluation de projets (MDI) à Illinois State University, telle qu’indiquée dans le CV.",
    category: "Formation",
  },
  {
    id: "t4",
    period: "2005 - 2011",
    title: "Premières responsabilités au Ministère de l’Économie et des Finances",
    description:
      "Fonctions successives à la Direction générale du budget, dont des responsabilités techniques et comptables au sein du Ministère de l’Économie et des Finances.",
    category: "Administration",
  },
  {
    id: "t5",
    period: "2011 - 2018",
    title: "Direction administrative et responsabilités de cabinet",
    description:
      "Parcours comprenant des fonctions de directeur administratif et financier ainsi qu’un rôle de directeur de cabinet du ministre de l’Économie et des Finances.",
    category: "Service public",
  },
  {
    id: "t6",
    period: "Depuis septembre 2018",
    title: "Responsabilités exécutives dans le secteur privé",
    description:
      "Le CV mentionne des fonctions de président-directeur général et de direction exécutive dans plusieurs structures professionnelles.",
    category: "Leadership",
  },
  {
    id: "t7",
    period: "Engagement organisationnel",
    title: "Participation à des structures associatives et de jeunesse",
    description:
      "Le CV fait état d’une implication au sein de la Fédération Nationale de la Jeunesse pour Développement, avec des responsabilités de budget.",
    category: "Leadership",
  },
];

export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "Direction administrative et financière dans l’administration publique",
    description:
      "Le CV mentionne plusieurs fonctions de direction administrative et financière au sein d’institutions publiques, notamment dans les secteurs économique, financier et agricole.",
    domain: "Administration publique",
    period: "2011 - 2017",
    status: "verified",
    needsVerification: false,
  },
  {
    id: "a2",
    title: "Expérience budgétaire et technique au Ministère de l’Économie et des Finances",
    description:
      "Le parcours présenté dans le CV souligne une expérience continue autour du budget, de la comptabilité publique et du fonctionnement administratif de l’État.",
    domain: "Finances publiques",
    period: "2005 - 2018",
    status: "verified",
    needsVerification: false,
  },
  {
    id: "a3",
    title: "Fonctions de direction de cabinet et de coordination",
    description:
      "Le rôle de directeur de cabinet indiqué dans le CV suggère une expérience de coordination, de préparation décisionnelle et d’appui au pilotage institutionnel.",
    domain: "Coordination institutionnelle",
    period: "2017 - 2018",
    status: "verified",
    needsVerification: false,
  },
  {
    id: "a4",
    title: "Responsabilités exécutives dans des entreprises privées",
    description:
      "Depuis 2018, le CV mentionne des fonctions de président-directeur général et de direction exécutive dans des structures privées, illustrant une continuité entre gestion publique et pilotage d’entreprise.",
    domain: "Direction générale",
    period: "Depuis 2018",
    status: "verified",
    needsVerification: false,
  },
];

export const visionAxes: VisionAxis[] = [
  {
    id: "v1",
    title: "Gouvernance responsable",
    icon: "Shield",
    description:
      "Promouvoir une culture de responsabilité, de continuité institutionnelle et de prise de décision alignée sur l'intérêt général.",
    objectives: [
      "Clarifier les priorités publiques",
      "Renforcer la responsabilité administrative",
      "Encourager des mécanismes de suivi institutionnel",
    ],
  },
  {
    id: "v2",
    title: "Administration moderne",
    icon: "Landmark",
    description:
      "Structurer des services publics plus lisibles, plus coordonnés et mieux adaptés aux besoins de la population et des institutions.",
    objectives: [
      "Simplifier les processus",
      "Encourager une meilleure coordination",
      "Préparer la modernisation des outils publics",
    ],
  },
  {
    id: "v3",
    title: "Dialogue citoyen",
    icon: "Messages",
    description:
      "Créer des passerelles entre institutions, société civile et communautés afin de favoriser l'écoute, l'information et la confiance.",
    objectives: [
      "Mieux expliquer l'action publique",
      "Favoriser des échanges respectueux",
      "Valoriser les retours des citoyens",
    ],
  },
  {
    id: "v4",
    title: "Jeunesse et formation",
    icon: "GraduationCap",
    description:
      "Soutenir les dynamiques qui renforcent les compétences, la formation et la place des jeunes dans le développement national.",
    objectives: [
      "Mettre en avant la formation",
      "Favoriser l'accès à l'information",
      "Encourager l'engagement civique",
    ],
  },
  {
    id: "v5",
    title: "Développement économique",
    icon: "TrendingUp",
    description:
      "Contribuer à une vision économique fondée sur la stabilité, la confiance institutionnelle et le dialogue avec les forces productives.",
    objectives: [
      "Valoriser un climat de confiance",
      "Favoriser le dialogue économique",
      "Soutenir une planification cohérente",
    ],
  },
  {
    id: "v6",
    title: "Transparence et efficacité publique",
    icon: "FileCheck",
    description:
      "Mettre l'accent sur la qualité de l'information publique, la traçabilité des actions et l'efficacité des dispositifs administratifs.",
    objectives: [
      "Améliorer la communication publique",
      "Structurer les documents de référence",
      "Rendre l'information plus accessible",
    ],
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "m1",
    title: "Portrait officiel",
    type: "photo",
    description:
      "Portrait institutionnel déjà intégré à la démonstration, pouvant servir de base au kit média, aux biographies officielles et aux visuels de communication.",
    placeholder: "Portrait officiel validé",
    imagePath: "/id.jpeg",
  },
  {
    id: "m2",
    title: "Interviews et interventions",
    type: "video",
    description:
      "Espace destiné à recevoir des interviews, interventions filmées, messages institutionnels ou archives audiovisuelles validées.",
    placeholder: "Séquences vidéo à intégrer",
  },
  {
    id: "m3",
    title: "Dossier de presse et repères biographiques",
    type: "press",
    description:
      "Section pensée pour accueillir la biographie condensée, les repères de carrière, les fiches institutionnelles et les articles ou citations de presse autorisés.",
    placeholder: "Revue de presse structurée",
  },
  {
    id: "m4",
    title: "Prises de parole et citations publiques",
    type: "quote",
    description:
      "Répertoire prévu pour les citations validées, extraits de discours, notes institutionnelles ou déclarations officielles.",
    placeholder: "Citations à valider",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "n1",
    slug: "rencontre-acteurs-societe-civile",
    title: "Rencontre avec des acteurs de la société civile",
    date: "2026-04-11",
    category: "Dialogue",
    excerpt:
      "Un échange institutionnel structuré avec des représentants de la société civile haïtienne, centré sur les priorités de gouvernance, de transparence et de modernisation administrative.",
    content: [
      "Fritz William Michel a réuni des représentants de la société civile haïtienne dans le cadre d'une discussion ouverte sur les priorités publiques du moment.",
      "Les échanges ont porté sur la nécessité d'un dialogue renforcé entre les institutions et les citoyens, ainsi que sur les mécanismes concrets de suivi de l'action publique.",
      "Cette initiative s'inscrit dans une démarche de responsabilité et de continuité institutionnelle, valeurs fondamentales qui guident l'engagement de Fritz William Michel.",
    ],
    imagePath: "/id.jpeg",
  },
  {
    id: "n2",
    slug: "message-responsabilite-publique",
    title: "Message autour de la responsabilité publique",
    date: "2026-03-26",
    category: "Prise de parole",
    excerpt:
      "Un appel à la rigueur et à la continuité dans la gestion des affaires publiques, avec un accent particulier sur le rôle des administrateurs face aux défis institutionnels actuels.",
    content: [
      "Dans un contexte où les institutions haïtiennes font face à des défis considérables, Fritz William Michel réaffirme l'importance d'une gestion publique fondée sur la rigueur, la transparence et le sens de l'État.",
      "Fort de plus de quinze ans d'expérience dans l'administration publique et le secteur privé, il souligne que la stabilité institutionnelle est le préalable indispensable à tout développement économique durable.",
    ],
    imagePath: "/id.jpeg",
  },
  {
    id: "n3",
    slug: "discussion-gouvernance",
    title: "Participation à une discussion sur la gouvernance",
    date: "2026-02-19",
    category: "Gouvernance",
    excerpt:
      "Une participation active à un forum de réflexion sur les enjeux de gouvernance administrative, de modernisation de l'État et de renforcement des institutions publiques haïtiennes.",
    content: [
      "Fritz William Michel a pris part à un forum de haut niveau consacré aux enjeux de gouvernance et à la modernisation des institutions publiques haïtiennes.",
      "Son intervention a mis en lumière l'importance d'une administration plus coordonnée, plus lisible et mieux orientée vers les besoins réels de la population et des opérateurs économiques.",
    ],
    imagePath: "/id.jpeg",
  },
  {
    id: "n4",
    slug: "modernisation-administrative",
    title: "Note de réflexion sur la modernisation administrative",
    date: "2026-01-15",
    category: "Réflexion",
    excerpt:
      "Une note analytique sur les leviers de modernisation de l'administration haïtienne, articulant réforme budgétaire, coordination institutionnelle et renforcement des capacités.",
    content: [
      "Cette note de réflexion explore les principaux leviers de transformation de l'administration publique haïtienne, à partir d'une lecture croisée des expériences internationales et du contexte local.",
      "Elle formule des orientations concrètes autour de trois axes prioritaires : la rationalisation des processus budgétaires, le renforcement de la coordination inter-institutionnelle, et l'amélioration de la communication publique.",
    ],
    imagePath: "/id.jpeg",
  },
];

export const contactInfo: ContactInfo = {
  generalEmail: "contact@fritzwilliammichel.ht",
  pressEmail: "presse@fritzwilliammichel.ht",
  office: "Port-au-Prince, Haïti",
  socialLinks: [
    { label: "X (Twitter)", href: "https://x.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const journeyHighlights = [
  "Formation en sciences comptables et administratives",
  "Expérience au Ministère de l’Économie et des Finances",
  "Fonctions de direction administrative et de cabinet",
  "Responsabilités exécutives dans le secteur privé depuis 2018",
];

export const educationHighlights = [
  "Juillet 2010 : management, suivi et évaluation de projets à Illinois State University",
  "2000 - 2004 : études en sciences comptables à l’INAGHEI",
  "2000 - 2004 : études en sciences administratives à l’IHECE",
  "1993 - 2000 : études secondaires au Collège Catt’s Pressoir",
];

export const seminarHighlights = [
  "Cours national de programmation et politiques financières, organisé par le FMI et la BRH",
  "Formation sur la rédaction des rapports administratifs au Centre Universitaire de Management et de Productivité",
  "Formation sur les éléments d’analyse du risque de crédit à la Faculté de droit et des sciences économiques",
];

export const professionalExperience = [
  "Depuis septembre 2018 : Président Directeur Général de PM Agripro S.A., PDG de Express Transport et Distribution, Directeur Exécutif de Caribbean Products and Services",
  "Avril 2017 à septembre 2018 : Directeur de Cabinet du Ministre de l’Économie et des Finances",
  "Août 2012 à mars 2017 : Directeur Administratif et Financier à l’Inspection Générale des Finances",
  "Décembre 2011 à juillet 2012 : Directeur Administratif et Financier au Ministère de l’Agriculture, des Ressources Naturelles et du Développement Rural",
  "Septembre 2009 à novembre 2011 : Comptable en chef à la Direction Générale du Budget",
  "Mars 2005 à octobre 2009 : Technicien à la Direction des Études et de la Programmation Budgétaire, Direction Générale du Budget",
  "Août 2004 à février 2005 : Stage au Ministère de l’Économie et des Finances, Direction Générale du Budget",
  "Septembre 2001 à juillet 2004 : Office Manager de la F.M. Travel and Tours",
];

export const organizationHighlights = [
  "Membre du Conseil Fédéral de la Fédération Nationale de la Jeunesse pour Développement (FNJD)",
  "Responsabilité mentionnée au budget au sein de cette structure organisationnelle",
];

export const languageHighlights = [
  "Français : très bien",
  "Anglais : bien",
];

export const contributionThemes = [
  {
    title: "Gestion budgétaire et financière",
    description:
      "Le CV met en évidence une expérience suivie dans la Direction générale du budget, la comptabilité publique et les fonctions de gestion financière.",
  },
  {
    title: "Coordination administrative",
    description:
      "Les postes de direction administrative et financière suggèrent une pratique de coordination, d’organisation interne et de suivi opérationnel.",
  },
  {
    title: "Appui à la décision institutionnelle",
    description:
      "Le passage en cabinet ministériel permet de présenter une expérience d’appui, de préparation et de coordination autour de l’action publique.",
  },
  {
    title: "Direction exécutive et management",
    description:
      "Les responsabilités exercées depuis 2018 dans plusieurs structures privées renforcent la dimension managériale et exécutive du profil.",
  },
];

export const verifiedReferencePoints = [
  "Parcours académique en sciences comptables et administratives",
  "Expérience confirmée au Ministère de l’Économie et des Finances",
  "Fonctions de direction administrative et financière dans le secteur public",
  "Rôle de directeur de cabinet du Ministre de l’Économie et des Finances",
  "Responsabilités exécutives dans des entreprises privées depuis 2018",
];

export const mediaKitItems = [
  "Portrait officiel en haute définition",
  "Biographie institutionnelle courte et longue",
  "Chronologie synthétique du parcours",
  "Repères de fonctions publiques et professionnelles",
  "Sélection de prises de parole, interviews et documents validés",
];

export const pressNotes = [
  "Le site présente un profil articulant administration publique, gestion financière et direction institutionnelle.",
  "Les contenus affichés s’appuient désormais sur le CV transmis et peuvent être complétés par des documents officiels.",
  "Les données personnelles privées ne sont pas exposées publiquement dans cette démonstration sans validation spécifique.",
];

export const documentsToIntegrate = [
  "CV officiel",
  "Biographie officielle",
  "Photos institutionnelles",
  "Discours publics",
  "Articles de presse",
];

export const latestNews = newsArticles.slice(0, 3);
