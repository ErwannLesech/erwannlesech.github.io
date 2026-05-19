export type SkillDomain = "ai_ml" | "data_backend" | "infra_devops" | "frontend" | "systems";

export type Skill = {
  id: string;
  label: string;
  logo: string;
  domain: SkillDomain;
  description: { fr: string; en: string };
  linkedProjects: string[];
  linkedExperiences: string[];
};

const dev = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const simple = (name: string) =>
  `https://cdn.simpleicons.org/${name}`;

export const skills: Skill[] = [

  // ── AI / ML ──────────────────────────────────────────────────────────────

  {
    id: "python",
    label: "Python",
    logo: dev("python"),
    domain: "ai_ml",
    description: {
      fr: "Python est mon outil de prédilection pour transformer une idée en produit: prototypage ML, orchestration LLM, et APIs métier. J'ai affiné cette maîtrise au travers de projets de recherche, de produits data complexes, et de missions en contexte entreprise exigeant.",
      en: "Python is my tool of choice to transform ideas into products: ML prototyping, LLM orchestration, and business APIs. I refined this mastery through research projects, complex data products, and demanding company missions.",
    },
    linkedProjects: [
      "codeNavigator",
      "ticketGenerator",
      "conformal-prediction-credit-risk",
      "ml-mortality-prediction",
    ],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "pytorch",
    label: "PyTorch",
    logo: dev("pytorch"),
    domain: "ai_ml",
    description: {
      fr: "J'ai constré et entraîné avec PyTorch des architectures deep learning sur des cas variés: génération, vision et graphes. Ma maîtrise provient de projets complets, de la modélisation jusqu'à l'analyse rigoureuse des performances et la communication des résultats.",
      en: "I built and trained deep learning architectures with PyTorch on varied use cases: generation, vision, and graphs. My mastery comes from complete projects, from modeling to rigorous performance analysis and result communication.",
    },
    linkedProjects: ["diffusion-model", "gnn-link-prediction", "mushroom-toxicity", "sudoku-ocr"],
    linkedExperiences: [],
  },
  {
    id: "tensorflow",
    label: "TensorFlow",
    logo: dev("tensorflow"),
    domain: "ai_ml",
    description: {
      fr: "TensorFlow m'a servi en comparaison de frameworks et pour consolider mes bases en deep learning applique. Je le maitrise surtout sur des cas de classification et de vision, avec une approche orientee evaluation rigoureuse.",
      en: "TensorFlow helped me compare frameworks and strengthen my applied deep-learning fundamentals. I am most proficient with it on classification and vision use cases, with a rigorous evaluation mindset.",
    },
    linkedProjects: ["sudoku-ocr"],
    linkedExperiences: [],
  },
  {
    id: "scikit-learn",
    label: "scikit-learn",
    logo: simple("scikitlearn"),
    domain: "ai_ml",
    description: {
      fr: "scikit-learn est devenu mon outil de référence pour les benchmarks, la modélisation classique et la validation expérimentale. J'ai consolidé cette expertise sur des projets exigeants sur le plan méthodologique, impliquant comparaison rigoureuse de modèles et mesure d'incertitude.",
      en: "scikit-learn became my reference tool for benchmarks, classical modeling, and experimental validation. I solidified this expertise on methodologically demanding projects involving rigorous model comparison and uncertainty estimation.",
    },
    linkedProjects: ["conformal-prediction-credit-risk", "food-recommendation", "ml-mortality-prediction"],
    linkedExperiences: [],
  },
  {
    id: "langchain",
    label: "LangChain / LangGraph",
    logo: simple("langchain"),
    domain: "ai_ml",
    description: {
      fr: "J'ai mis en place LangChain et LangGraph pour orchestrer des workflows LLM robustes et spécialisés avec des sorties exploitables en équipe. Cet apprentissage s'est consolidé par des implémentations end-to-end intégrées directement en production.",
      en: "I implemented LangChain and LangGraph to orchestrate specialized robust LLM workflows with team-usable outputs. This learning solidified through end-to-end implementations integrated directly into production.",
    },
    linkedProjects: ["ticketGenerator", "codeNavigator"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "ollama",
    label: "Ollama",
    logo: simple("ollama"),
    domain: "ai_ml",
    description: {
      fr: "Ollama me permet de prototyper rapidement des usages LLM en local, avec controle des modeles et des couts d'experimentation. Je le maitrise sur des scenarios d'assistance dev et de generation technique offline.",
      en: "Ollama lets me quickly prototype local LLM use cases while controlling models and experimentation costs. I master it on developer-assistance and offline technical-generation scenarios.",
    },
    linkedProjects: ["codeNavigator"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "r",
    label: "R",
    logo: dev("r"),
    domain: "ai_ml",
    description: {
      fr: "J'ai utilisé R pour approfondir ma modélisation statistique avancée et l'analyse exploratoire de données. Mes projets incluaient régressions linéaires, ACP et prédiction conforme appliquées à des cas financiers et médicaux avec une rigueur méthodologique stricte.",
      en: "I used R to deepen my advanced statistical modeling and exploratory data analysis skills. My projects included linear regression, PCA, and conformal prediction applied to financial and medical cases with strict methodological rigor.",
    },
    linkedProjects: ["conformal-prediction-credit-risk", "ml-mortality-prediction"],
    linkedExperiences: [],
  },

  // ── DATA & BACKEND ────────────────────────────────────────────────────────

  {
    id: "postgresql",
    label: "SQL (PostgreSQL, MySQL, Redshift)",
    logo: dev("postgresql"),
    domain: "data_backend",
    description: {
      fr: "J'utilise les bases de donnees relationnelles pour structurer des donnees metier et supporter des requetes analytiques fiables. PostgreSQL est ma reference pour la qualite du schema, MySQL pour la compatibilite, et Redshift pour l'analytique massive en cloud. Je les maitrise via des architectures backend exigeantes en performance et fiabilite SQL.",
      en: "I use relational databases to structure business data and support reliable analytical queries. PostgreSQL is my reference for schema quality, MySQL for compatibility, and Redshift for massive cloud analytics. I master them through demanding backend architectures with strict SQL performance and reliability requirements.",
    },
    linkedProjects: ["codeNavigator"],
    linkedExperiences: ["exp-1", "exp-4"],
  },
  {
    id: "neo4j",
    label: "Neo4j",
    logo: dev("neo4j"),
    domain: "data_backend",
    description: {
      fr: "J'utilise Neo4j pour modeliser et interroger des graphes complexes: graphe social, relations d'entites, et requetes relationnelles specialisees. Je le maitrise sur des architectures microservices ou la representation relationnelle est cruciale.",
      en: "I use Neo4j to model and query complex graphs: social graphs, entity relationships, and specialized relational queries. I master it in microservice architectures where relational representation is crucial.",
    },
    linkedProjects: ["epitweet"],
    linkedExperiences: ["edu-2"],
  },
  {
    id: "mongodb",
    label: "MongoDB",
    logo: dev("mongodb"),
    domain: "data_backend",
    description: {
      fr: "J'utilise MongoDB pour stocker et interroger des documents volumineux et semi-structures. Je le maitrise sur des architectures microservices ou la flexibilite du schema et la scalabilite horizontale sont prioritaires.",
      en: "I use MongoDB to store and query large, semi-structured documents. I master it in microservice architectures where schema flexibility and horizontal scalability are priorities.",
    },
    linkedProjects: ["epitweet"],
    linkedExperiences: ["edu-2"],
  },
  {
    id: "fastapi",
    label: "FastAPI",
    logo: dev("fastapi"),
    domain: "data_backend",
    description: {
      fr: "FastAPI est mon framework privilegie pour exposer des modeles IA et des services backend avec une API propre et performante. Je le maitrise en production sur des apps data avec contrats clairs, validation forte et integration frontend.",
      en: "FastAPI is my preferred framework to expose AI models and backend services with clean, high-performance APIs. I master it in production data apps with clear contracts, strong validation, and frontend integration.",
    },
    linkedProjects: ["codeNavigator", "ticketGenerator", "ml-mortality-prediction"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "java",
    label: "Java / Quarkus",
    logo: dev("java"),
    domain: "data_backend",
    description: {
      fr: "J'utilise Java pour des backends robustes et des applications structurees, notamment en environnement microservices. Je le maitrise grace a des projets d'equipe et des experiences pro orientees maintenabilite et qualite logicielle.",
      en: "I use Java for robust backends and structured applications, especially in microservice environments. I master it through team projects and professional experiences focused on maintainability and software quality.",
    },
    linkedProjects: ["epitweet", "amadeus-ide"],
    linkedExperiences: ["exp-3", "exp-4", "edu-2"],
  },
  {
    id: "spark",
    label: "Apache Spark",
    logo: dev("apachespark"),
    domain: "data_backend",
    description: {
      fr: "J'ai utilisé Apache Spark pour traiter et analyser les données massives en environnement distribué avec Hadoop et MapReduce. Ma maîtrise s'est construite sur des projets de big data incluant prédiction d'accidents et ETL complexes avec performances optimales.",
      en: "I used Apache Spark to process and analyze massive data in a distributed environment with Hadoop and MapReduce. My expertise was built on big data projects including accident prediction and complex ETLs with optimal performance.",
    },
    linkedProjects: [],
    linkedExperiences: [],
  },
  {
    id: "aws",
    label: "AWS",
    logo: dev("amazonwebservices", "original-wordmark"),
    domain: "data_backend",
    description: {
      fr: "AWS m'a servi de plateforme pour renforcer mes compétences en mise en production data et IA. J'ai acquis cette maîtrise sur des contextes exigeants nécessitant fiabilité, monitoring robuste et industrialisation de pipelines.",
      en: "AWS served as my platform to strengthen data and AI production skills. I acquired this mastery in demanding contexts requiring reliability, robust monitoring, and pipeline industrialization.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-1"],
  },

  // ── INFRA & DEVOPS ────────────────────────────────────────────────────────

  {
    id: "docker",
    label: "Docker",
    logo: dev("docker"),
    domain: "infra_devops",
    description: {
      fr: "Docker a transformé ma façon de livrer: environnements reproductibles, intégration fluide et déploiement propre. Cette expertise s'est consolidée par un usage systématique, tant sur des projets personnels qu'en contexte d'entreprise.",
      en: "Docker transformed how I deliver: reproducible environments, smooth integration, and clean deployment. This expertise solidified through systematic usage in both personal projects and company environments.",
    },
    linkedProjects: ["codeNavigator", "ticketGenerator", "epitweet", "ml-mortality-prediction"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    logo: dev("kubernetes"),
    domain: "infra_devops",
    description: {
      fr: "J'utilise Kubernetes pour orchestrer des services distribues et gerer proprement la scalabilite applicative. Je le maitrise sur des projets microservices ou la resilience et la separation des composants sont prioritaires.",
      en: "I use Kubernetes to orchestrate distributed services and manage application scalability cleanly. I master it on microservice projects where resilience and component separation are priorities.",
    },
    linkedProjects: ["epitweet"],
    linkedExperiences: [],
  },
  {
    id: "github-actions",
    label: "CI/CD GitHub Actions",
    logo: dev("githubactions"),
    domain: "infra_devops",
    description: {
      fr: "GitHub Actions est mon standard pour automatiser tests, linting, build et controles qualite a chaque commit. Je le maitrise car je l'ai applique sur des projets C/C++, IA et web avec des contraintes techniques tres differentes.",
      en: "GitHub Actions is my standard for automating tests, linting, build, and quality checks on every commit. I master it by applying it to C/C++, AI, and web projects with very different technical constraints.",
    },
    linkedProjects: ["codeNavigator", "ticketGenerator", "epitweet", "42-sh", "tiger-compiler"],
    linkedExperiences: [],
  },
  {
    id: "git",
    label: "Git",
    logo: dev("git"),
    domain: "infra_devops",
    description: {
      fr: "Git structure ma facon de collaborer: branches propres, conventions de commits, revue et historique lisible. Je le maitrise parce qu'il est present dans tous mes projets d'equipe et dans mes workflows de livraison continue.",
      en: "Git structures how I collaborate: clean branching, commit conventions, review, and readable history. I master it because it is present in all my team projects and continuous delivery workflows.",
    },
    linkedProjects: ["42-sh", "tiger-compiler", "era-of-guardians"],
    linkedExperiences: ["exp-3", "exp-1"],
  },
  {
    id: "arduino",
    label: "Arduino",
    logo: dev("arduino"),
    domain: "infra_devops",
    description: {
      fr: "Arduino m'a permis d'explorer l'embarque, l'interfaçage capteurs et les contraintes materiel/logiciel en temps reel. Je le maitrise par la pratique en TP et sur des prototypes orientés IoT.",
      en: "Arduino let me explore embedded programming, sensor interfacing, and real-time hardware/software constraints. I master it through practical labs and IoT-oriented prototypes.",
    },
    linkedProjects: ["vocal-assistant"],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "linux-unix",
    label: "Linux / Unix",
    logo: dev("linux"),
    domain: "infra_devops",
    description: {
      fr: "Linux et Unix constituent le socle de ma pratique de l'infrastructure et du développement système. J'ai approfondi cette maîtrise par des projets d'administration serveur, l'automatisation de pipelines et la compréhension fine des systèmes d'exploitation.",
      en: "Linux and Unix form the foundation of my infrastructure and systems development practice. I deepened this mastery through server administration projects, pipeline automation, and deep understanding of operating systems.",
    },
    linkedProjects: ["42-sh"],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "azure-devops",
    label: "Azure DevOps",
    logo: dev("azuredevops"),
    domain: "infra_devops",
    description: {
      fr: "J'ai utilise Azure DevOps chez Sparks pour orchestrer le deploiement automatique d'images Docker et transformer l'infrastructure en environnement cloud entierement automatise. Je le maitrise sur des pipelines CI/CD complexes et la transition vers l'industrialisation.",
      en: "I used Azure DevOps at Sparks to orchestrate automated Docker image deployment and transform infrastructure into a fully automated cloud environment. I master it on complex CI/CD pipelines and the transition to industrialised practices.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "terraform",
    label: "Terraform",
    logo: dev("terraform"),
    domain: "infra_devops",
    description: {
      fr: "Terraform m'a permis de définir et déployer l'infrastructure cloud en tant que code, garantissant reproductibilité et versionnabilité. J'ai renforcé cette expertise sur des scénarios de déploiement Docker en cloud et gestion déclarative des ressources.",
      en: "Terraform allowed me to define and deploy cloud infrastructure as code, ensuring reproducibility and versioning. I strengthened this expertise on Docker deployment scenarios and declarative resource management.",
    },
    linkedProjects: [],
    linkedExperiences: [],
  },
  {
    id: "dataiku",
    label: "Dataiku",
    logo: simple("dataiku"),
    domain: "data_backend",
    description: {
      fr: "Dataiku a été mon outil privilégié pour accélérer le cycle de vie des projets ML en MLOps, du data wrangling au déploiement de modèles. Grâce à cette plateforme, j'ai pu automatiser des pipelines complexes et collaborer efficacement en équipe data sur des cas de classification et prédiction.",
      en: "Dataiku was my go-to platform to accelerate ML project lifecycles in MLOps, from data wrangling to model deployment. Through this platform, I automated complex pipelines and collaborated effectively on classification and prediction use cases.",
    },
    linkedProjects: ["ml-mortality-prediction"],
    linkedExperiences: [],
  },
  {
    id: "php",
    label: "PHP / Symfony",
    logo: dev("php"),
    domain: "data_backend",
    description: {
      fr: "J'ai utilisé PHP avec le framework Symfony chez Sparks Formation pour développer des services backend robustes et maintenables. Cette expérience m'a conforté dans la maîtrise des architectures MVC, la gestion des dépendances et les bonnes pratiques de développement web d'entreprise.",
      en: "I used PHP with the Symfony framework at Sparks Formation to develop robust and maintainable backend services. This experience solidified my proficiency in MVC architectures, dependency management, and enterprise web development practices.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "monitoring-stack",
    label: "Grafana / Dynatrace / Prometheus",
    logo: dev("grafana"),
    domain: "infra_devops",
    description: {
      fr: "J'utilise Grafana, Dynatrace et Prometheus pour construire une observabilite robuste de l'infrastructure et des applications. Je le maitrise sur un projet de fin d'etudes axe sur la detection d'anomalies et la correlation de metriques en environnement reseau distribue.",
      en: "I use Grafana, Dynatrace, and Prometheus to build robust infrastructure and application observability. I master them on a final-year project focused on anomaly detection and metric correlation in distributed network environments.",
    },
    linkedProjects: ["network-anomaly-detection"],
    linkedExperiences: [],
  },

  // ── FRONTEND ──────────────────────────────────────────────────────────────

  {
    id: "react",
    label: "React",
    logo: dev("react"),
    domain: "frontend",
    description: {
      fr: "J'ai construit avec React de nombreuses interfaces produit fluides autour de services IA et data. Cette expertise s'est affirmée sur des applications complètes, de la conception des composants réutilisables jusqu'à l'intégration fine avec les APIs backend.",
      en: "I built many fluid product interfaces with React around AI and data services. This expertise developed through complete applications, from reusable component design to fine integration with backend APIs.",
    },
    linkedProjects: ["codeNavigator", "ticketGenerator", "ml-mortality-prediction", "portfolio", "amadeus-ide"],
    linkedExperiences: [],
  },
  {
    id: "typescript",
    label: "TypeScript",
    logo: dev("typescript"),
    domain: "frontend",
    description: {
      fr: "TypeScript s'est imposé comme mon standard pour fiabiliser le frontend et garantir une maintenabilité long terme. J'ai renforcé cette expertise sur des produits web réels avec architectures de composants, routing complexe et contrats de données rigoureux.",
      en: "TypeScript became my standard to ensure frontend reliability and long-term maintainability. I strengthened this expertise on real web products with complex component architectures, routing, and strict data contracts.",
    },
    linkedProjects: ["portfolio", "amadeus-ide", "codeNavigator", "ticketGenerator"],
    linkedExperiences: [],
  },
  {
    id: "javascript",
    label: "JavaScript",
    logo: dev("javascript"),
    domain: "frontend",
    description: {
      fr: "J'ai pratiqué JavaScript pour des intégrations web rapides, des scripts métier spécilisés et des évolutions front sur des stacks existantes. Cet apprentissage s'est renforcé par des usages concrets en entreprise sur des outils internes et portails clients exigeants.",
      en: "I practiced JavaScript for quick web integrations, specialized business scripts, and frontend evolution on existing stacks. This learning strengthened through concrete company usage on demanding internal tools and client portals.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-3", "exp-4"],
  },
  {
    id: "html-css",
    label: "HTML / CSS",
    logo: dev("html5"),
    domain: "frontend",
    description: {
      fr: "HTML et CSS sont les fondamentaux du web que j'ai appris en creant mes premiers sites a 16 ans, notamment un site pour les motos. Je les maitrise sur la creation de structures semantiques, le responsive design et l'accessibilite web.",
      en: "HTML and CSS are the web fundamentals I learned creating my first sites at 16, including a motorcycle website. I master them on semantic structure, responsive design, and web accessibility.",
    },
    linkedProjects: [],
    linkedExperiences: [],
  },
  {
    id: "jquery",
    label: "jQuery",
    logo: dev("jquery"),
    domain: "frontend",
    description: {
      fr: "J'ai utilisé jQuery pour simplifier la manipulation du DOM et les animations sur les sites web chez Sparks Formation. Cette expérience m'a familiarisé avec les patterns de sélection jQuery et les interactions utilisateur fluides sur des stacks frontend legacy.",
      en: "I used jQuery to simplify DOM manipulation and animations on websites at Sparks Formation. This experience familiarized me with jQuery selection patterns and smooth user interactions on legacy frontend stacks.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-1"],
  },

  // ── SYSTEMS ───────────────────────────────────────────────────────────────

  {
    id: "c",
    label: "C",
    logo: dev("c"),
    domain: "systems",
    description: {
      fr: "Le C a été mon langage de référence pour comprendre la gestion fine de la mémoire et les systèmes bas niveau. J'ai approfondi cette maîtrise par des projets exigeants incluant un solveur OCR de sudoku qui m'a forcé à gérer malloc/free, un shell POSIX, et des implémentations algorithmiques performantes.",
      en: "C was my reference language to understand fine memory management and low-level systems. I deepened this mastery through demanding projects including an OCR sudoku solver that forced me to manage malloc/free, a POSIX shell, and performance-oriented implementations.",
    },
    linkedProjects: ["42-sh", "sudoku-ocr"],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "cpp",
    label: "C++",
    logo: dev("cplusplus"),
    domain: "systems",
    description: {
      fr: "C++ m'a permis de construire des systèmes robustes et performants avec abstraction et sécurité. J'ai consolidé cette expertise en concevant un compilateur complet pour le langage Tiger, ce qui m'a enrich d'une expérience précieuse en gestion de legacy code et architecture logicielle disciplinée.",
      en: "C++ allowed me to build robust and efficient systems with abstraction and safety. I solidified this expertise by designing a complete compiler for the Tiger language, gaining valuable experience in legacy code management and disciplined software architecture.",
    },
    linkedProjects: ["tiger-compiler"],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "rust",
    label: "Rust",
    logo: dev("rust"),
    domain: "systems",
    description: {
      fr: "Rust m'a appris a concilier performance systeme et surete memoire, avec une discipline de code rigoureuse. Je le maitrise dans un cadre d'enseignement et de pratique encadree sur des problemes systemes.",
      en: "Rust taught me how to combine systems performance and memory safety with strong coding discipline. I master it in teaching and supervised practice contexts on systems problems.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "asm",
    label: "Assembleur x86",
    logo: simple("assemblyscript"),
    domain: "systems",
    description: {
      fr: "L'assembleur x86 m'a permis de comprendre finement le lien entre code, compilation et execution machine. Je le maitrise sur des exercices bas niveau qui renforcent mes bases en architecture et optimisation.",
      en: "x86 assembly helped me deeply understand the link between code, compilation, and machine execution. I master it through low-level exercises that strengthen my architecture and optimization fundamentals.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-5"],
  },
  {
    id: "csharp",
    label: "C#",
    logo: dev("csharp"),
    domain: "systems",
    description: {
      fr: "C# m'a enseigne la programmation orientee objet et la conception d'architectures logicielles modulaires. Je le maitrise via un projet long en equipe ou j'ai gere le design des systemes de gameplay et la collaboration en equipe avec conventions strictes.",
      en: "C# taught me object-oriented programming and modular software architecture design. I master it through a long team project where I managed gameplay system design and team collaboration with strict conventions.",
    },
    linkedProjects: ["era-of-guardians"],
    linkedExperiences: [],
  },
  {
    id: "unity",
    label: "Unity",
    logo: dev("unity"),
    domain: "systems",
    description: {
      fr: "Unity me permet de concevoir des experiences interactives 3D completes avec gestion d'inventaire, systemes de combat et environnements explorabes. Je le maitrise via un projet long en equipe (5 mois) avec role de project manager et exigences de livraison reelles.",
      en: "Unity allows me to design complete interactive 3D experiences with inventory management, combat systems, and explorable environments. I master it through a long team project (5 months) where I was project manager with real delivery constraints.",
    },
    linkedProjects: ["era-of-guardians"],
    linkedExperiences: [],
  },
  {
    id: "blender",
    label: "Blender",
    logo: dev("blender"),
    domain: "systems",
    description: {
      fr: "J'utilise Blender pour la modelisation et la creation d'assets 3D. Je le maitrise sur le projet Era of Guardians ou j'ai cree les assets 3D et appris les rudiments de la modelisation digitale 3D et de l'animation.",
      en: "I use Blender for 3D modeling and asset creation. I master it on the Era of Guardians project where I created 3D assets and learned the fundamentals of digital 3D modeling and animation.",
    },
    linkedProjects: ["era-of-guardians"],
    linkedExperiences: [],
  },
];