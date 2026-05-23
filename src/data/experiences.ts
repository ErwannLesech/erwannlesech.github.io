export type Experience = {
  id: string;
  type: "pro" | "academic";
  company: string;
  logo?: string | { light?: string; dark?: string };
  role: { fr: string; en: string };
  dates: { fr: string; en: string };
  context?: { fr: string; en: string };
  location: string;
  country: "FR" | "IE";
  bullets: { fr: string; en: string }[];
  tags: string[];
  degree?: string;
  honors?: { fr: string; en: string };
  contractType?: "stage" | "cdd" | "cdi" | "freelance";
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    type: "pro",
    company: "TALAN",
    logo: "/logos/talan.png",
    role: { fr: "Data & AI Engineer Junior", en: "Junior Data & AI Engineer" },
    dates: { fr: "Février 2026 - Août 2026", en: "February 2026 - August 2026" },
    context: {
      fr: "Afin de cloturer ma formation j'ai pu travailler en ESN pour des clients au sein de projets de fiabilisation de pipelines de données cloud et de production de solution d'IA pour optimiser les processus de développements.",
      en: "To complete my studies, I worked in a consulting firm for clients on projects focused on hardening cloud data pipelines and delivering AI solutions to optimize development processes.",
    },
    location: "Lyon, France",
    country: "FR",
    contractType: "stage",
    bullets: [
      {
        fr: "Contribution à la maintenance et à l’évolution d’une plateforme data en production (modélisation Data Vault) dans un environnement cloud AWS, avec mise en place de monitoring et alerting pour le suivi de la qualité et de la disponibilité des données pour un leader dans la croisière de luxe.",
        en: "Contributed to the maintenance and evolution of a production data platform (Data Vault modeling) in an AWS cloud environment, with monitoring and alerting to track data quality and availability for a leader in luxury cruises.",
      },
      {
        fr: "Conception de solutions d’IA appliquées à la donnée : RAG sur bases de code clients, génération automatique de documentation technique et création d’un graphe de connaissance pour le data lineage.",
        en: "Designed AI solutions applied to data: RAG on client codebases, automatic technical documentation generation, and creation of a knowledge graph for data lineage.",
      },
      {
        fr: "Développement d’outils d’automatisation pour les équipes métier et produit : génération de tickets et automatisation de workflows entre outils de gestion et plateformes de développement.",
        en: "Developed automation tools for business and product teams: ticket generation and workflow automation between management tools and development platforms.",
      },
      {
        fr: "Participation à des présentations techniques et démonstrations de solutions auprès de prospects et clients grands comptes dans l’énergie et l’industrie.",
        en: "Participated in technical presentations and solution demonstrations for prospects and key clients in the energy and industry sectors.",
      },
    ],
    tags: ["Python", "SQL", "AWS", "Docker", "Projet Agile", "Jira", "Confluence", "Data Vault", "RAG", "NLP", "Knowledge Graph"],
  },
  {
    id: "exp-2",
    type: "pro",
    company: "IPSA (Institut polytechnique des sciences avancées)",
    logo: "/logos/ipsa.png",
    role: { fr: "Enseignant d'algorithmie et de python", en: "Algorithms and Python Instructor" },
    dates: { fr: "Septembre 2025 - Janvier 2026", en: "September 2025 - January 2026" },
    context: {
      fr: "En parallèle de mes cours d'ingénieur, j'ai pu enseigner l'algorithmie et le python à des étudiants en première année de classe préparatoire intégrée à l'IPSA, une école d'ingénieurs spécialisée en aéronautique et spatial.",
      en: "Experience combining teaching and technical content structuring around algorithms and Python.",
    },
    location: "Lyon, France",
    country: "FR",
    contractType: "cdd",
    bullets: [
      {
        fr: "Mise en place d’une pédagogie inversée avec l’utilisation de la plateforme Moodle/IONISx (Mimos, QCM interactifs, supports numériques).",
        en: "Implemented a flipped classroom approach using the Moodle/IONISx platform (Mimos, interactive quizzes, digital resources).",
      },
      {
        fr: "Conception et animation de séances de TD/TP axées sur la pratique du langage Python : variables, structures de contrôle, fonctions, récursivité, gestion des fichiers, dictionnaires, bibliothèques.",
        en: "Designed and delivered practical sessions on Python programming: variables, control structures, functions, recursion, file management, dictionaries, libraries.",
      },
      {
        fr: "Élaboration et suivi des évaluations (QCM, contrôles continus, partiels).",
        en: "Designed and monitored assessments (quizzes, continuous assessments, exams).",
      },
    ],
    tags: ["Python", "Algorithmie", "Pédagogie", "Didactique", "Code Review"],
  },
  {
    id: "exp-3",
    type: "pro",
    company: "Sparks Formation",
    logo: { light: "/logos/sparks-formation.png", dark: "/logos/sparks-formation2.png" },
    role: { fr: "Ingénieur d'études, développement et DevOps", en: "Software and DevOps Engineer" },
    dates: { fr: "Juillet 2025 - Septembre 2025", en: "July 2025 - September 2025" },
    context: {
      fr: "Après un stage concluant de 6 mois et mon semestre de cours, Sparks Formation m’a confié le rôle de référent digital suite au départ de l’ancien responsable. J'ai pu piloter la digitalisation des processus internes avec l'équipe technique et les équipes métiers, ce qui m'a formé à la gestion de projet et au management d'équipe.",
      en: "After a successful 6-month internship and my semester of courses, Sparks Formation entrusted me with the role of digital referent following the departure of the previous manager. I was able to lead the digitalization of internal processes with the technical team and business teams, which trained me in project management and team management.",
    },
    location: "Lyon, France",
    country: "FR",
    contractType: "cdd",
    bullets: [
      {
        fr: "Maintenance & évolutions des outils internes (applications métiers, portails clients) et optimisation des déploiements sur les environnements cloud (Azure DevOps, OVH, Plesk) via des pipelines CI/CD",
        en: "Maintenance & evolution of internal tools (business applications, client portals) and optimization of deployments on cloud environments (Azure DevOps, OVH, Plesk) via CI/CD pipelines",
      },
      {
        fr: "Digitalisation complète de la signature des contrats avec DocuSign → réduction significative des délais et de la charge de travail pour contractualiser les partenaires et formateurs.",
        en: "Complete digitalization of contract signing with DocuSign → significant reduction in time and workload for contracting partners and trainers.",
      },
      {
        fr: "Création d’un Marketplace interne permettant de fluidifier et optimiser les candidatures des formateurs sur les formations et sessions proposées.",
        en: "Created an internal Marketplace to streamline and optimize trainer applications for the offered courses and sessions.",
      },
      {
        fr: "Mise en place de bonnes pratiques DevOps et d’une documentation technique unifiée pour l’entreprise.",
        en: "Implemented DevOps best practices and unified technical documentation for the company.",
      }
    ],
    tags: ["Azure DevOps", "OVH", "Plesk", "Gestion de projet", "SQL", "Java", "JavaScript", "PHP", "Symfony", "Docker", "CI/CD", "DevOps", "Développement fullstack"],
  },
  {
    id: "exp-4",
    type: "pro",
    company: "Sparks Formation",
    logo: { light: "/logos/sparks-formation.png", dark: "/logos/sparks-formation2.png" },
    role: { fr: "Développeur fullstack", en: "Fullstack Developer" },
    dates: { fr: "Septembre 2024 - Février 2025", en: "September 2024 - February 2025" },
    context: {
      fr: "Pour mon premier poste en informatique, j'ai été recruté en tant que stagiaire développeur fullstack dans cette PME spécialisée dans la formation professionnelle. J'ai pu travailler sur des projets variés, allant de la maintenance d'outils internes à la création de nouvelles fonctionnalités pour les portails clients.",
      en: "For my first job in IT, I was hired as a fullstack developer intern in this SME specialized in professional training. I was able to work on various projects, ranging from maintaining internal tools to creating new features for client portals.",
    },
    location: "Lyon, France",
    country: "FR",
    contractType: "stage",
    bullets: [
      {
        fr: "Maintien et évolution des logiciels métiers existants",
        en: "Maintenance & evolution of existing business software",
      },
      {
        fr: "Développement back-end (PHP/Symfony, SQL) et front-end (JavaScript)",
        en: "Back-end development (PHP/Symfony, SQL) and front-end (JavaScript)",
      },
      {
        fr: "Mise en place d'un système d'Audit digitalisé pour formalisé et unifié le processus",
        en: "Implemented a digitalized audit system to formalize and unify the process",
      },
      {
        fr: "Ajout d'un système d'OCR pour reconnaitre les dates de validité des documents uploadé sur les plateformes de l'entreprise",
        en: "Added an OCR system to recognize the validity dates of documents uploaded to the company's platforms",
      }
    ],
    tags: ["PHP", "Symfony", "HTML", "CSS", "JavaScript", "SQL", "Développement web fullstack", "OCR", "gestion de projet"],
  },
  {
    id: "exp-5",
    type: "pro",
    company: "EPITA",
    logo: "/logos/epita.png",
    role: { fr: "Professeur assistant d'informatique pratique", en: "Teaching Assistant in Practical Computer Science" },
    dates: { fr: "Septembre 2023 - Juin 2024", en: "September 2023 - June 2024" },
    context: {
      fr: "Au sein de l'EPITA, il est possible de devenir professeur assistant pour encadrer les étudiants dans leurs projets et travaux pratiques en informatque. J'ai pu ainsi accompagner des groupes d'étudiants lors de leurs TP et projets sur les langages C/UNIX, Rust et C++ (Arduino).",
      en: "At EPITA, it is possible to become a teaching assistant to supervise students in their projects and practical work in computer science. I was able to support groups of students during their labs and projects on the C/UNIX, Rust, and C++ (Arduino) languages.",
    },
    location: "Lyon, France",
    country: "FR",
    contractType: "cdd",
    bullets: [
      {
        fr: "Dispense de séances de travaux pratiques et d'encadrement de projets sur les langages C/UNIX, Rust et C++ (Arduino)",
        en: "Conducted practical computer science sessions and supervised projects on C/UNIX, Rust, and C++ (Arduino) languages",
      },
      {
        fr: "Création de TP pour le national (800 étudiants) et correction des projets et TP",
        en: "Created lab exercises for the national level (800 students) and graded projects and lab exercises",
      },
      {
        fr: "Suivi et accompagnement des étudiants lors des soutenances intérmediaires et finales de projets",
        en: "Monitored and supported students during intermediate and final project presentations",
      }
    ],
    tags: ["C", "C++", "Rust", "UNIX", "Arduino", "Pédagogie", "Encadrement de projets", "Code Review"],
  },
  {
    id: "edu-1",
    type: "academic",
    company: "EPITA (École pour l'informatique et les techniques avancées)",
    logo: "/logos/epita.png",
    role: { fr: "Diplôme d'ingénieur en informatique", en: "Engineering Degree in Computer Science" },
    dates: { fr: "2021-2026", en: "2021-2026" },
    location: "France",
    country: "FR",
    degree: "Diplôme d'ingénieur",
    honors: { fr: "Major de promotion · Spécialité IA / Big Data", en: "Top of the class · Specialization in AI / Big Data" },
    bullets: [],
    tags: [],
  },
  {
    id: "edu-2",
    type: "academic",
    company: "Dorset College, Dublin",
    logo: "/logos/dorset-college.png",
    role: { fr: "Ingénierie informatique", en: "Computer Engineering" }, 
    dates: { fr: "Janvier 2022 - Juin 2022", en: "January 2022 - June 2022" },
    location: "Dublin, Ireland",
    country: "IE",
    degree: "Bachelor of Science in Computer Engineering",
    honors: { fr: "Semestre d'échange académique · Développement backend (Java, MongoDB)", en: "Academic exchange semester · Backend development (Java, MongoDB)" },
    bullets: [],
    tags: [],
  },
];
