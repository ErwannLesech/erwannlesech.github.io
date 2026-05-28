export type Project = {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  tags: string[];
  domain: "agentic_ai" | "ml_research" | "data_science" | "backend_cloud" | "systems_devops" | "product";
  github?: string;
  live?: string;
  report?: string;
};

export const projects: Project[] = [
  {
    id: "codeNavigator",
    title: { fr: "Code Navigator", en: "Code Navigator" },
    description: {
      fr: "Indexation de base de code et graphe de connaissance pour alimenter un chatbot d'assistance et générer de la documentation technique.",
      en: "Source code indexing for a developer assistance chatbot and technical documentation generation.",
    },
    longDescription: {
      fr: "Pipeline complet de RAG (ingestion de codes, chunking, embeddings, retrieval, génération) avec frontend déployé par docker. Intègre la génération de documentation technique dynamique au fil des développements sur git et un graphe de connaissance pour le data lineage afin d'alimenter un chatbot d'assistance aux développeurs.",
      en: "Complete RAG pipeline (code ingestion, chunking, embeddings, retrieval, generation) with a docker-deployed frontend. Integrates dynamic technical documentation generation alongside git development and a knowledge graph for data lineage to feed a developer assistance chatbot.",
    },
    tags: ["Python", "networkx", "FastAPI", "React", "MistralAI", "Ollama", "CI/CD", "Docker"],
    domain: "agentic_ai",
    github: "https://github.com/ErwannLesech/CodeNavigator",
  },
  {
    id: "ticketGenerator",
    title: { fr: "Générateur de tickets", en: "Ticket Generator" },
    description: {
      fr: "Workflow LLM de génération de ticket à partir d'un besoin avec intégration Github et Jira.",
      en: "LLM workflow for ticket generation from a requirement with Github and Jira integration.",
    },
    longDescription: {
      fr: "Système de bout en bout combinant des LLMs successifs orchestrés par LangGraph pour générer automatiquement des tickets Jira à partir d'un besoin exprimé en langage naturel (mail, cahier des charges, transcription). Intégration avec Github et Jira pour exporter les tâches générées.",
      en: "End-to-end system combining successive LLMs orchestrated by LangGraph to automatically generate Jira tickets from a requirement expressed in natural language (email, message, transcription). Integration with Github and Jira to export the generated tasks.",
    },
    tags: ["Python", "LangChain/LangGraph", "React", "MistralAI", "OCR", "Jira API", "Github API", "CI/CD", "Docker"],
    domain: "agentic_ai",
    github: "https://github.com/ErwannLesech/AI-Agentic-SDLC-solution",
  },
  {
    id: "vocal-assistant",
    title: { fr: "Assistant vocal personnalisé", en: "Custom Vocal Assistant" },
    description: {
      fr: "Assistant vocal agentic connectant plusieurs APIs pour retourner des résultats vocalement avec reconnaissance vocale.",
      en: "Agentic vocal assistant connecting multiple APIs to vocally return requested results with voice recognition.",
    },
    longDescription: {
      fr: "Assistant vocal personnel tournant en arrière-plan sur PC ou appareils embarqués (Raspberry Pi, Google Home). Utilise un mot-clé d'activation pour déclencher des interactions conversationnelles. Architecture agentic basée sur des APIs intégrées : OpenWeather pour la météo, Spotify API pour les contrôles musicaux, agenda personnel pour la gestion d'événements. Si la demande ne correspond à aucune action predéfinie, elle est envoyée à un LLM pour réponse générale. Combine Whisper (speech-to-text) et ElevenLabs (text-to-speech) pour une interaction vocale naturelle.",
      en: "Personal vocal assistant running in the background on PC or embedded devices (Raspberry Pi, Google Home). Uses a keyword to trigger conversational interactions. Agentic architecture based on integrated APIs: OpenWeather for weather, Spotify API for music controls, personal calendar for event management. If a request doesn't match predefined actions, it's sent to an LLM for general response. Combines Whisper (speech-to-text) and ElevenLabs (text-to-speech) for natural voice interaction.",
    },
    tags: ["Python", "Whisper", "ElevenLabs", "OpenAI API", "Agentic AI", "Voice Recognition", "Text-to-Speech", "Raspberry Pi", "IoT"],
    domain: "agentic_ai",
    github: "https://github.com/ErwannLesech/Vocal-Assistant",
  },
  {
    id: "diffusion-model",
    title: { fr: "Modèle de diffusion", en: "Diffusion Model" },
    description: {
      fr: "Implémentation from scratch d'un modèle de diffusion pour la génération d'images avec bruitage et débruitage progressif.",
      en: "From-scratch implementation of a diffusion model for image generation with progressive noise and denoising.",
    },
    longDescription: {
      fr: "Projet académique en binôme implémentant un modèle de diffusion basé sur les processus de diffusion et les chaînes de Markov inversées. Le projet couvre l'intégralité du pipeline : mécanisme de bruitage et débruitage progressif sous loi normale, entraînement sur plusieurs datasets (points 2D, MNIST, CIFAR10) et génération de nouvelles images. Inclut un rapport détaillé avec analyses des résultats.",
      en: "Academic project implementing a diffusion model based on diffusion processes and reversed Markov chains. Covers the complete pipeline: progressive noise and denoising mechanism under normal distribution, training on multiple datasets (2D points, MNIST, CIFAR10) and generation of new images. Includes detailed report with results analysis.",
    },
    tags: ["PyTorch", "NumPy", "Image Generation", "Machine Learning", "Diffusion Models", "MNIST", "CIFAR10", "Generative AI"],
    domain: "ml_research",
    github: "https://github.com/ErwannLesech/Projet-de-diffusion/",
    report: "/reports/diffusion-model.pdf",
  },
  {
    id: "gnn-link-prediction",
    title: { fr: "Prédiction de liens avec GNN", en: "Link Prediction with Graph Neural Networks" },
    description: {
      fr: "Modèles de Graph Neural Networks pour la prédiction de liens entre aliments compatibles via le dataset FlavorGraph.",
      en: "Graph Neural Network models for link prediction between compatible foods using the FlavorGraph dataset.",
    },
    longDescription: {
      fr: "Projet académique utilisant les Graph Neural Networks pour la prédiction de liens dans un graphe culinaire. Objective : prédire de nouvelles connexions entre aliments qui se marieraient bien ensemble. Implémente des architectures GNN modernes : Graph Attention Networks (GAT) et Graph Isomorphism Networks (GIN) utilisant PyTorch Geometric. Enrichit les noeuds du graphe avec des features hétérogènes : propriétés chimiques des aliments, catégories culinaires et metadata.",
      en: "Academic project using Graph Neural Networks for link prediction in a culinary graph. Objective: predict new connections between foods that pair well together. Implements modern GNN architectures: Graph Attention Networks (GAT) and Graph Isomorphism Networks (GIN) using PyTorch Geometric. Enriches graph nodes with heterogeneous features: chemical properties of foods, culinary categories and metadata.",
    },
    tags: ["Python", "PyTorch", "PyTorch Geometric", "Graph Neural Networks", "GAT", "GIN", "Link Prediction", "Machine Learning", "Culinary Data", "Graph Deep Learning"],
    domain: "ml_research",
    github: "https://github.com/ErwannLesech/Improving-What-s-Cooking---Using-GNNs-to-redefine-Culinary-Boundaries",
    report: "/reports/gnn-link-prediction.pdf",
  },
  {
    id: "sudoku-ocr",
    title: { fr: "Sudoku OCR - Solveur de Sudoku par reconnaissance d'image", en: "Sudoku OCR - Image-based Sudoku Solver" },
    description: {
      fr: "Système complet de reconnaissance optique de caractères et résolution de sudoku à partir d'une image.",
      en: "Complete optical character recognition and sudoku solving system from an image.",
    },
    longDescription: {
      fr: "Projet académique en groupe (4 étudiants, 3 mois) développant un solveur de sudoku complet : capture d'une image de sudoku incomplet et retour de la solution résolue. Pipeline complet incluant import/rotation d'image, détection de la grille et séparation des cellules, reconnaissance des nombres via deep learning, résolution du sudoku, et redessinage de la grille complétée. Implémentation d'un réseau de neurones from scratch en C pour l'apprentissage et la détection précise des chiffres.",
      en: "Academic group project (4 students, 3 months) developing a complete sudoku solver: capture an incomplete sudoku image and return the solved solution. Complete pipeline including image import/rotation, grid detection and cell separation, digit recognition via deep learning, sudoku solving, and redrawing of completed grid. Implementation of a neural network from scratch in C for training and precise digit detection.",
    },
    tags: ["C", "Deep Learning", "Neural Networks", "OCR", "Image Processing", "Sudoku Solver", "Computer Vision", "Machine Learning", "Algorithm", "UI"],
    domain: "ml_research",
    github: "https://github.com/ErwannLesech/OCR",
    report: "/reports/ocr-report.pdf",
  },
    {
    id: "mushroom-toxicity",
    title: {
      fr: "Détection de la toxicité des champignons par Deep Learning",
      en: "Deep Learning for Mushroom Toxicity Detection",
    },
    description: {
      fr: "Application de modèles de Deep Learning pour détecter la toxicité des champignons destinée aux randonneurs.",
      en: "Deep neural networks for mushroom toxicity detection as a practical tool for hikers.",
    },
    longDescription: {
      fr: "Projet appliquant des modèles de deep learning légers pour résoudre un problème réel de randonnée : la toxicité des champignons. Utilise des architectures de réseaux de neurones compacts sur des données tabulaires structurées avec variables catégoriques codées en one-hot. Les expériences sur un dataset équilibré de champignons atteignent une précision et une F1-score parfaits, surpassant les méthodes traditionnelles tout en restant pratiques pour le déploiement mobile. Inclut visualisations avancées, résultats quantifiés et perspectives d'extension vers des modèles hybrides image + tabulaire.",
      en: "Project applying lightweight deep neural networks to address a real public health issue: mushroom poisoning detection for hikers. Uses compact neural network architectures on structured tabular data with one-hot encoded categorical features. Experiments on a balanced mushroom dataset achieve perfect accuracy and F1 scores, outperforming traditional methods while remaining practical for mobile deployment. Includes advanced visualizations, quantified results, and perspectives for extension to hybrid image + tabular models.",
    },
    tags: ["Python", "PyTorch", "Deep Learning", "Neural Networks", "Machine Learning", "Classification", "Tabular Data", "One-Hot Encoding", "Model Optimization", "Mobile Deployment"],
    domain: "ml_research",
    report: "/reports/mushroom-toxicity-classification.pdf",
  },
  {
    id: "conformal-prediction-credit-risk",
    title: { fr: "Prédiction Conforme et Régression Quantile en Finance", en: "Conformal Prediction and Quantile Regression in Finance" },
    description: {
      fr: "Analyse et modélisation du risque de crédit utilisant des techniques avancées avec quantification de l'incertitude.",
      en: "Credit risk analysis and modeling using advanced techniques with uncertainty quantification.",
    },
    longDescription: {
      fr: "Projet académique d'analyse et de modélisation du risque de crédit utilisant deux approches complémentaires : Régression Quantile pour estimer les intervalles de prédiction des montants de prêt à différents niveaux de risque, et Prédiction Conforme (Conformal Prediction) pour la classification des ratings de crédit avec garanties statistiques. Le projet inclut prétraitement des données financières, implémentation de modèles de prédiction, comparaison des méthodes et développement d'une application professionnelle avec garanties statistiques de 90% de confiance sur les prédictions.",
      en: "Academic project analyzing and modeling credit risk using two complementary approaches: Quantile Regression to estimate prediction intervals for loan amounts at different risk levels, and Conformal Prediction for credit rating classification with statistical guarantees. Includes financial data preprocessing, model implementation, method comparison, and development of a professional risk assessment application with 90% confidence statistical guarantees on predictions.",
    },
    tags: ["Python", "Scikit-learn", "XGBoost", "Quantile Regression", "Conformal Prediction", "Finance", "Risk Analysis", "Credit Risk", "Machine Learning", "Basel Accords"],
    domain: "data_science",
    github: "https://github.com/ErwannLesech/Prediction-Conforme-et-Regression-Quantile-en-finance",
    report: "/reports/conformal-prediction-credit-risk.pdf",
  },
  {
    id: "ml-mortality-prediction",
    title: { fr: "Prédiction de mortalité clinique avec MLOps", en: "Clinical Mortality Prediction with MLOps" },
    description: {
      fr: "Application web d'aide à la décision clinique prédisant le risque de mortalité hospitalière à partir de données patients, avec pipeline MLOps complet.",
      en: "Clinical decision support web app predicting hospital mortality risk from patient data, with a complete MLOps pipeline.",
    },
    longDescription: {
      fr: "Solution complète d'aide à la décision clinique combinant machine learning et interface moderne pour prédire le risque de mortalité hospitalière. Le modèle de classification binaire, hébergé sur Dataiku, analyse 12 variables cliniques : données démographiques (âge, sexe, IMC), paramètres vitaux (tension artérielle), analyses biologiques (glucose, cholestérol, créatinine) et antécédents médicaux (diabète, hypertension, diagnostic principal, réadmissions). Architecture microservices avec backend FastAPI et frontend React/TailwindCSS, déployés via Docker. Visualisation interactive des résultats avec graphiques circulaires, codes couleur de risque et recommandations cliniques.",
      en: "Complete clinical decision support solution combining machine learning and a modern interface to predict hospital mortality risk. The binary classification model, hosted on Dataiku, analyses 12 clinical variables: demographic data (age, sex, BMI), vital parameters (blood pressure), biological analyses (glucose, cholesterol, creatinine) and medical history (diabetes, hypertension, main diagnosis, readmissions). Microservices architecture with FastAPI backend and React/TailwindCSS frontend, deployed via Docker. Interactive result visualisation with pie charts, risk colour codes and clinical recommendations.",
    },
    tags: ["Python", "FastAPI", "React", "Vite", "TailwindCSS", "Docker", "Dataiku", "MLOps", "Machine Learning", "Healthcare", "Microservices"],
    domain: "data_science",
    github: "https://github.com/ErwannLesech/ML-Mortality-Prediction-with-MLOps-practices",
  },
  {
    id: "food-recommendation",
    title: { fr: "Système de recommandation de recettes", en: "Food Recipe Recommendation System" },
    description: {
      fr: "Système de recommandation utilisant collaborative filtering et matrix factorization pour suggérer des recettes personnalisées.",
      en: "Recommendation system using collaborative filtering and matrix factorization to suggest personalized recipes.",
    },
    longDescription: {
      fr: "Projet académique en groupe (3 étudiants) développant un système de recommandation complet pour le dataset Food.com Recipes and Reviews. Implémente et compare plusieurs algorithmes : user-based collaborative filtering, item-based collaborative filtering, et matrix factorization. Inclut analyse exploratoire détaillée du dataset (sparsité, statistiques utilisateurs/items), préparation et nettoyage des données, diversification des recommandations. Pipeline complet avec Jupyter notebooks documentés couvrant chaque étape.",
      en: "Academic group project (3 students) developing a complete recommendation system for the Food.com Recipes and Reviews dataset. Implements and compares multiple algorithms: user-based collaborative filtering, item-based collaborative filtering, and matrix factorization. Includes detailed exploratory analysis of the dataset (sparsity, user/item statistics), data preparation and cleaning, recommendation diversification.",
    },
    tags: ["Python", "Pandas", "Jupyter", "Recommendation Systems", "Collaborative Filtering", "Matrix Factorization", "Machine Learning", "Data Analysis", "Kaggle", "Metrics"],
    domain: "data_science",
    github: "https://github.com/ErwannLesech/Recommandation-Benchmark-for-Recipes",
    report: "/reports/food-recommendation.pdf",
  },
  {
    id: "network-anomaly-detection",
    title: { fr: "Détection d'anomalies et corrélations en observabilité réseau", en: "Anomaly Detection and Correlation in Network Observability" },
    description: {
      fr: "Projet de fin d'études (PFEE) axé sur la détection d'anomalies et la recherche de corrélations en observabilité réseau avec algorithms IA avancés.",
      en: "Final-year project (PFEE) focused on anomaly detection and correlation discovery in network observability using advanced AI algorithms.",
    },
    longDescription: {
      fr: "Projet de fin d'études (PFEE) - Détection d'anomalies et corrélations en observabilité réseau. Réalisé en collaboration avec CNS Communications (société de conseil en infrastructures IT) en groupe de 4 étudiants d'EPITA (avril 2025 - aujourd'hui). L'objectif est d'explorer et implémenter des algorithmes d'IA avancés pour détection d'anomalies dans des séries temporelles (métriques, logs, traces) et recherche de corrélations entre données issues d'une plateforme d'observabilité réseau. Implémente des méthodes de détection d'anomalies : Isolation Forest, LOF (Local Outlier Factor), One-Class SVM, autoencodeurs et autres approches non-supervisées. Analyse et prétraitement de données massives issues d'équipements réseau, expérimentations de modèles supervisés/non-supervisés pour corréler incidents et métriques systèmes, démonstration d'applications pratiques pour anticiper les pannes et renforcer la résilience IT.",
      en: "Final-year project (PFEE) - Anomaly Detection and Correlation in Network Observability. Conducted in collaboration with CNS Communications (IT infrastructure consulting firm) as a group of 4 EPITA students (April 2025 - today). Objective: explore and implement advanced AI algorithms for anomaly detection in time series (metrics, logs, traces) and correlation discovery between data from a network observability platform. Implements anomaly detection methods: Isolation Forest, LOF (Local Outlier Factor), One-Class SVM, autoencoders, and other unsupervised approaches. Analysis and preprocessing of massive data from network equipment, experimentation of supervised/unsupervised models to correlate incidents and system metrics, demonstration of practical applications to anticipate failures and strengthen IT resilience.",
    },
    tags: ["Python", "Anomaly Detection", "Isolation Forest", "LOF", "One-Class SVM", "Autoencoders", "Grafana", "Dynatrace", "Prometheus", "Network Observability", "Time Series", "Machine Learning", "AI", "Data Analysis"],
    domain: "data_science",
  },
  {
    id: "epitweet",
    title: { fr: "Epitweet / Tiny-X - Plateforme de micro-blogging distribuée", en: "Epitweet / Tiny-X - Distributed Micro-Blogging Platform" },
    description: {
      fr: "Plateforme de micro-blogging type Twitter/X (refonte complète) basée sur une architecture microservices, avec déploiement Kubernetes et NoSQL databases.",
      en: "Twitter/X-like micro-blogging platform (complete rebuild) based on microservices architecture, with Kubernetes deployment and NoSQL databases.",
    },
    longDescription: {
      fr: "Projet académique en groupe (10 étudiants, tech leader) développant une plateforme de micro-blogging distribuée 'tiny-twitter' (X anciennement Twitter). Implémente une architecture complète de microservices avec services isolés pour la gestion des utilisateurs, posts, recherche, graphe social et timelines. Utilise MongoDB pour les posts, Neo4j pour le graphe social, ElasticSearch pour la recherche full-text, et Redis pour la communication asynchrone entre services. Frontend Angular moderne communiquant via REST APIs. Déployable localement avec Docker ou en production avec Kubernetes.",
      en: "Academic group project (10 students, tech lead) developing a distributed 'tiny-twitter' (X formerly Twitter) platform. Implements a complete microservices architecture with isolated services for user management, posts, search, social graph, and timelines. Uses MongoDB for posts, Neo4j for social graph, ElasticSearch for full-text search, and Redis for asynchronous service communication. Modern Angular frontend communicating via REST APIs. Deployable locally with Docker or in production with Kubernetes.",
    },
    tags: ["Java", "Quarkus", "Angular", "MongoDB", "ElasticSearch", "Neo4j", "Redis", "Docker", "Kubernetes", "Microservices", "REST API", "CI/CD", "Project Management"],
    domain: "backend_cloud",
    github: "https://github.com/ErwannLesech/Tiny-X-Twitter",
    live: "http://tinyx.sortifal.fr",
  },
  {
    id: "42-sh",
    title: { fr: "42-Sh - Shell interactif POSIX", en: "42-Sh - POSIX Interactive Shell" },
    description: {
      fr: "Shell interactif complet et extensible implémentant les fonctionnalités POSIX pour une expérience utilisateur optimisée.",
      en: "Complete and extensible interactive shell implementing POSIX features for an optimized user experience.",
    },
    longDescription: {
      fr: "Projet académique en groupe (4 étudiants) développant un shell interactif complet respectant les normes POSIX. Implémente l'ensemble des fonctionnalités essentielles d'un shell : opérateurs conditionnels (if/elif/else), boucles (while, for), redirections et pipes, gestion des variables d'environnement, listes de commandes, chaînes de caractères complexes (simple et double quotes), et builtins. Architecture robuste avec parseur AST (générateur de graphe avec Graphviz), logging optionnel et pretty-print pour visualisation. Incluant CI/CD avec GitHub Actions, tests automatisés, formatage clang-format et vérifications clang-tidy, ainsi que documentation Doxygen.",
      en: "Academic group project (4 students) developing a complete interactive shell complying with POSIX standards. Implements all essential shell features: conditional operators (if/elif/else), loops (while, for), redirections and pipes, environment variable management, command lists, complex strings (single and double quotes), and builtins. Robust architecture with AST parser (graph generator with Graphviz), optional logging and pretty-print for visualization. Includes CI/CD with GitHub Actions, automated tests, clang-format compliance and clang-tidy checks, plus Doxygen documentation.",
    },
    tags: ["C", "POSIX Shell", "Bash", "Parser", "CI/CD", "GitHub Actions", "Clang-format", "Clang-tidy", "Doxygen", "System Programming", "Shell Scripting"],
    domain: "systems_devops",
    github: "https://github.com/ErwannLesech/42-Sh",
  },
  {
    id: "tiger-compiler",
    title: { fr: "Compilateur Tiger", en: "Tiger Compiler" },
    description: {
      fr: "Implémentation C++ d'un compilateur pour le langage Tiger avec gestion de codebase existant.",
      en: "C++ implementation of a compiler for the Tiger language with existing codebase management.",
    },
    longDescription: {
      fr: "Projet académique en groupe (4 étudiants) développant un compilateur C++ pour le langage Tiger décrit dans les ouvrages \"Modern Compiler Implementation\" d'Andrew Appel. Projet pédagogique axé sur l'apprentissage de la prise en charge d'une base de code existante avec documentation partielle et incomplète. Implémente les phases essentielles d'un compilateur : lexical analysis, parsing, type checking, et code generation. Architecture robuste avec CI/CD GitHub Actions, vérifications clang-format et clang-tidy, tests automatisés, et documentation Doxygen.",
      en: "Academic group project (4 students) developing a C++ compiler for the Tiger language described in Andrew Appel's \"Modern Compiler Implementation\" books. Educational project focused on learning how to maintain existing codebase with partial and incomplete documentation. Implements essential compiler phases: lexical analysis, parsing, type checking, and code generation. Robust architecture with GitHub Actions CI/CD, clang-format and clang-tidy checks, automated tests, and Doxygen documentation.",
    },
    tags: ["C++", "Compiler", "CMake", "Lexical Analysis", "Parsing", "Type Checking", "Code Generation", "CI/CD", "Clang-format", "Clang-tidy", "Legacy Code", "System Programming"],
    domain: "systems_devops",
    github: "https://github.com/ErwannLesech/tiger",
  },
  {
    id: "probleme-combinatoire",
    title: { fr: "Résolution de problème combinatoire", en: "Combinatorial Problem Solving" },
    description: {
      fr: "Optimisation de la charge d'une entreprise de livraison via des solveurs ad-hoc et génériques pour un problème de bin packing 3D avec contraintes LIFO.",
      en: "Delivery company load optimisation using ad-hoc and generic solvers for a 3D bin packing problem with LIFO constraints.",
    },
    longDescription: {
      fr: "Projet académique de recherche opérationnelle visant à optimiser la répartition de colis dans des véhicules de livraison aux capacités différentes, afin de minimiser le nombre de véhicules utilisés. Le problème de bin packing 3D intègre des contraintes d'ordre de livraison (LIFO). Le projet implémente un solveur ad-hoc basé sur un algorithme glouton First Fit Decreasing optimisé par volume, avec support des 6 rotations possibles par objet et détection de collisions. Le pipeline inclut un générateur de données d'entrée par league (Bronze, Silver, Gold) et un visualisateur 3D des solutions. Un solveur générique est également développé pour comparaison.",
      en: "Operational research academic project optimising the distribution of parcels across delivery vehicles of varying capacities to minimise the number of vehicles used. The 3D bin packing problem incorporates delivery order constraints (LIFO). Implements an ad-hoc solver based on a volume-optimised First Fit Decreasing greedy algorithm, supporting 6 possible object rotations and collision detection. The pipeline includes an input data generator per league (Bronze, Silver, Gold) and a 3D solution visualiser. A generic solver is also developed for comparison.",
    },
    tags: ["Python", "Combinatorial Optimisation", "Bin Packing", "3D Packing", "LIFO", "Greedy Algorithm", "Operations Research", "Solver", "Algorithm"],
    domain: "systems_devops",
    github: "https://github.com/ErwannLesech/Resolution-de-problemes-combinatoires",
    report: "/reports/probleme-combinatoire.pdf",
  },
  {
    id: "deneigement-montreal",
    title: { fr: "Optimisation du déneigement de Montréal", en: "Montreal Snow Removal Optimisation" },
    description: {
      fr: "Étude chiffrée pour optimiser le déneigement de Montréal via graphe de rues, modélisation de coûts et comparaison de flottes de déneigeuses et drones de reconnaissance.",
      en: "Quantitative study to optimise Montreal snow removal using street graph modelling, cost analysis and comparison of snowplow fleets and reconnaissance drones.",
    },
    longDescription: {
      fr: "Projet académique en groupe (5 étudiants) mené dans le cadre d'un appel d'offre simulé pour la ville de Montréal. L'objectif était de déterminer la stratégie de déneigement la plus efficace et économique. L'étude repose sur l'export et l'analyse du graphe réel des rues de Montréal, avec classification des voies par priorité (artères principales, rues secondaires, ruelles). Un travail approfondi sur graphe permet d'établir des tournées optimales. L'analyse coût-bénéfice compare plusieurs types de déneigeuses selon leur coût kilométrique et leur investissement initial, ainsi que l'intégration de drones de reconnaissance pour cibler les quartiers enneigés en temps réel et prioriser les interventions.",
      en: "Academic group project (5 students) conducted as part of a simulated public tender for the city of Montreal. The goal was to determine the most effective and cost-efficient snow removal strategy. The study is based on the export and analysis of Montreal's real street graph, with road classification by priority (main arteries, secondary streets, alleys). In-depth graph work establishes optimal routes. A cost-benefit analysis compares several types of snowplows based on their per-kilometre cost and initial investment, alongside the integration of reconnaissance drones to identify snow-covered districts in real time and prioritise interventions.",
    },
    tags: ["Python", "NetworkX", "OpenStreetMap", "Graph Theory", "Operations Research", "Optimisation", "Route Planning", "Cost Analysis", "Drone", "Urban Planning"],
    domain: "systems_devops",
    report: "/report/ero1-report.pdf",
  },
  {
    id: "medical-gutpain-tracker",
    title: { fr: "Suivi médical des douleurs intestinales", en: "Medical Gut Pain Tracker" },
    description: {
      fr: "Application mobile pour le suivi des douleurs intestinales et la génération de rapports pour les médecins.",
      en: "Mobile application for tracking gut pain and generating reports for doctors.",
    },
    longDescription: {
      fr: "Application mobile permettant aux patients de déclarer et suivre leurs douleurs intestinales, de suivre leurs régimes alimentaires et inscrire leurs formes (fatigue, stress, sommeil) afin de générer des rapports détaillés pour les médecins et faciliter le suivi médical.",
      en: "Mobile application allowing patients to report and track gut pain, monitor their diet, and log their overall condition (fatigue, stress, sleep) in order to generate detailed reports for doctors and facilitate medical follow-up.",
    },
    tags: ["Dart", "Android Studio", "Figma"],
    domain: "product",
    github: "https://github.com/ErwannLesech/medical-gutpain-tracker",
  },
  {
    id: "amadeus-ide",
    title: { fr: "AmadeusIDE - IDE Musical Collaboratif", en: "AmadeusIDE - Collaborative Musical IDE" },
    description: {
      fr: "IDE en ligne innovant permettant aux musiciens-développeurs de coder en musique et écouter leur partition de code.",
      en: "Innovative online IDE allowing musician-developers to code through music and listen to their code score.",
    },
    longDescription: {
      fr: "Projet client end-to-end en groupe (5 étudiants, 1 mois) développant une plateforme IDE unique convertissant le code source en musique. Les développeurs peuvent écrire du code et « écouter leur partition » en fonction des dernières lignes écrites, avec variation dynamique des effets sonores selon les instruments sélectionnés. Architecture full-stack avec backend Java robuste et frontend TypeScript moderne. Inclut gestion collaborative du code, synthèse sonore en temps réel basée sur les patterns de code, et interface intuitive pour la sélection d'instruments.",
      en: "End-to-end client project in group (5 students, 1 month) developing a unique IDE platform converting source code into music. Developers can write code and \"listen to their partition\" based on the last written lines, with dynamic variation of sound effects based on selected instruments. Full-stack architecture with robust Java backend and modern TypeScript frontend. Includes collaborative code management, real-time sound synthesis based on code patterns, and intuitive interface for instrument selection.",
    },
    tags: ["Java", "TypeScript", "React", "Web IDE", "Music Synthesis", "Real-time Audio", "Collaborative Coding", "Full-Stack", "Client Management", "Web Development", "Creative Coding"],
    domain: "product",
    github: "https://github.com/ErwannLesech/AmadeusIDE",
    report: "/reports/amadeusIDE-documentation.pdf",
  },
  {
    id: "era-of-guardians",
    title: { fr: "Era of Guardians - Timeless Village", en: "Era of Guardians - Timeless Village" },
    description: {
      fr: "RPG 3D complet avec gestion d'inventaire et mouvements avancés développé sur Unity avec assets créés sur Blender.",
      en: "Complete 3D RPG with inventory management and advanced movement developed on Unity with assets created on Blender.",
    },
    longDescription: {
      fr: "Projet académique en groupe (4 étudiants, 5 mois, chef de projet) développant un RPG 3D immersif sur Unity. Implémente un gameplay riche avec gestion complète d'inventaire, système de progression personnage, mouvements avancés et fluides du joueur, rencontres avec PNJ, et environnement 3D explorable. Architecture modulaire avec conventions de commits strictes pour la collaboration d'équipe. Création des assets 3D sur Blender permettant d'appréhender la modélisation digitale 3D et l'animation. Apprentissage de la programmation orientée objet via C#.",
      en: "Academic group project (4 students, 5 months, project manager) developing an immersive 3D RPG on Unity. Implements rich gameplay with complete inventory management, character progression system, advanced and fluid player movement, NPC encounters, and explorable 3D environment. Modular architecture with strict commit conventions for team collaboration. 3D asset creation on Blender to understand digital 3D modeling and animation. Learning object-oriented programming through C#.",
    },
    tags: ["Unity", "C#", "Blender", "3D Game Development", "RPG", "Game Design", "Inventory System", "Character Control", "Project Management", "Team Collaboration", "Game Engine", "3D Modeling"],
    domain: "product",
    github: "https://github.com/ErwannLesech/Era-of-Guardians-Timeless-Village",
    report: "/reports/era-of-guardians-report.pdf",
  },
  {
    id: "portfolio",
    title: { fr: "Ce portfolio", en: "This portfolio" },
    description: {
      fr: "Site personnel de présentation et portfolio, développé via des outils IA pour un design front-end moderne.",
      en: "Personal portfolio site, developed using AI tools for a modern front-end design.",
    },
    longDescription: {
      fr: "Site personnel afin de présenter au mieux qui je suis, comment je travaille et ce que j'ai réalisé. Développé avec soin pour refléter mes valeurs : design réfléchi, motion subtile, performance, accessibilité et bilinguisme dès le premier commit.",
      en: "Personal site built to mirror how I work: careful design, subtle motion, performance, accessibility, and bilingual from the first commit.",
    },
    tags: ["React", "TypeScript", "Three.js"],
    domain: "product",
    github: "https://github.com/ErwannLesech/erwannlesech.github.io",
    live: "localhost:8080",
  },
];