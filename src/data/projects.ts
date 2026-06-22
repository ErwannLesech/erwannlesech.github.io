export type Project = {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  tags: string[];
  domain: "ai" | "data" | "cloud" | "devops" | "fullstack";
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "llm-pipeline",
    title: { fr: "LLM Pipeline d'entreprise", en: "Enterprise LLM Pipeline" },
    description: {
      fr: "Plateforme RAG production avec orchestration, évaluation continue et observabilité.",
      en: "Production RAG platform with orchestration, continuous evaluation and observability.",
    },
    longDescription: {
      fr: "Pipeline complet de RAG (ingestion documentaire, chunking, embeddings, retrieval hybride, génération) déployé sur Kubernetes. Intègre une boucle d'évaluation automatique (LLM-as-judge + métriques classiques), un système de feature flags par tenant, et une observabilité fine via OpenTelemetry. Sert plus de 50k requêtes/jour avec latence p95 < 1.2s.",
      en: "End-to-end RAG pipeline (ingestion, chunking, embeddings, hybrid retrieval, generation) deployed on Kubernetes. Includes automated evaluation loop (LLM-as-judge + classical metrics), per-tenant feature flags, and fine-grained observability via OpenTelemetry. Serves 50k+ requests/day with p95 latency < 1.2s.",
    },
    tags: ["Python", "PyTorch", "FastAPI", "Kubernetes", "AWS"],
    domain: "ai",
    github: "https://github.com",
  },
  {
    id: "forecast-engine",
    title: { fr: "Moteur de prévisions ML", en: "ML Forecast Engine" },
    description: {
      fr: "Forecasting multi-modèles pour la demande retail, dashboard React intégré.",
      en: "Multi-model forecasting for retail demand with embedded React dashboard.",
    },
    longDescription: {
      fr: "Système hybride combinant Prophet, LightGBM et un modèle Transformer pour prédire la demande sur 5000 SKUs. Backend FastAPI + frontend React avec visualisations interactives (Recharts). Réduction de l'erreur MAPE de 18% à 9% en six mois.",
      en: "Hybrid system combining Prophet, LightGBM and a Transformer model to forecast demand across 5,000 SKUs. FastAPI backend + React frontend with interactive Recharts visualizations. Reduced MAPE from 18% to 9% in six months.",
    },
    tags: ["Python", "TensorFlow", "React", "TypeScript", "GCP"],
    domain: "ai",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "lakehouse",
    title: { fr: "Lakehouse temps réel", en: "Real-time Lakehouse" },
    description: {
      fr: "Architecture lakehouse Delta/Iceberg avec streaming Kafka et orchestration Airflow.",
      en: "Delta/Iceberg lakehouse with Kafka streaming and Airflow orchestration.",
    },
    longDescription: {
      fr: "Migration d'un data warehouse legacy vers une architecture lakehouse moderne. Ingestion temps réel via Kafka + Spark Structured Streaming, modélisation dbt en couches medallion (bronze/silver/gold), orchestration Airflow, IaC Terraform multi-environnement. Coût de stockage divisé par 3.",
      en: "Migrated a legacy data warehouse to a modern lakehouse. Real-time ingestion via Kafka + Spark Structured Streaming, dbt medallion modeling (bronze/silver/gold), Airflow orchestration, multi-env Terraform IaC. Storage cost cut by 3x.",
    },
    tags: ["Spark", "Kafka", "Airflow", "dbt", "Terraform", "GCP"],
    domain: "data",
    github: "https://github.com",
  },
  {
    id: "mlops-platform",
    title: { fr: "Plateforme MLOps interne", en: "Internal MLOps Platform" },
    description: {
      fr: "Self-service ML platform pour data scientists : training, registry, déploiement.",
      en: "Self-service ML platform for data scientists: training, registry, deployment.",
    },
    longDescription: {
      fr: "Plateforme interne basée sur Kubeflow, MLflow et Seldon. Permet aux data scientists de lancer des entraînements GPU, versionner leurs modèles, et déployer en canary sans intervention DevOps. Adoptée par 4 équipes en moins d'un an.",
      en: "Internal platform built on Kubeflow, MLflow and Seldon. Lets data scientists launch GPU training, version models and canary-deploy without DevOps intervention. Adopted by 4 teams within a year.",
    },
    tags: ["Kubernetes", "MLflow", "Python", "Terraform", "AWS"],
    domain: "devops",
    github: "https://github.com",
  },
  {
    id: "iac-platform",
    title: { fr: "Landing zone multi-cloud", en: "Multi-cloud Landing Zone" },
    description: {
      fr: "Modules Terraform standardisés pour GCP/AWS, sécurité by default.",
      en: "Standardized Terraform modules for GCP/AWS with security by default.",
    },
    longDescription: {
      fr: "Conception d'une landing zone multi-cloud : modules Terraform réutilisables, baseline sécurité (CIS), IAM centralisé, observabilité unifiée. Réduit le temps de provisioning d'un nouveau projet de 2 semaines à 2 jours.",
      en: "Designed a multi-cloud landing zone: reusable Terraform modules, CIS security baseline, centralized IAM, unified observability. Cut new project provisioning from 2 weeks to 2 days.",
    },
    tags: ["Terraform", "GCP", "AWS", "Kubernetes"],
    domain: "cloud",
    github: "https://github.com",
  },
  {
    id: "portfolio",
    title: { fr: "Ce portfolio", en: "This portfolio" },
    description: {
      fr: "Personnel, hand-crafted — TanStack Start, Three.js, Framer Motion, i18n.",
      en: "Personal, hand-crafted — TanStack Start, Three.js, Framer Motion, i18n.",
    },
    longDescription: {
      fr: "Site personnel construit pour refléter ma façon de travailler : design soigné, animations subtiles, performance, accessibilité, et bilingue dès le premier commit.",
      en: "Personal site built to mirror how I work: careful design, subtle motion, performance, accessibility, and bilingual from the first commit.",
    },
    tags: ["TanStack Start", "React", "TypeScript", "Three.js"],
    domain: "fullstack",
    github: "https://github.com",
  },
];
