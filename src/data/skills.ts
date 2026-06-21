export type SkillDomain = "fullstack" | "ai" | "data" | "tools" | "platforms";

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

export const skills: Skill[] = [
  {
    id: "python",
    label: "Python",
    logo: dev("python"),
    domain: "ai",
    description: {
      fr: "Mon langage principal au quotidien pour le ML, l'orchestration de données et les services backend.",
      en: "My daily driver for ML, data orchestration and backend services.",
    },
    linkedProjects: ["llm-pipeline", "forecast-engine"],
    linkedExperiences: ["exp-1", "exp-2"],
  },
  {
    id: "pytorch",
    label: "PyTorch",
    logo: dev("pytorch"),
    domain: "ai",
    description: {
      fr: "Recherche et fine-tuning de modèles — du prototype au serving production.",
      en: "Research and fine-tuning — from prototype to production serving.",
    },
    linkedProjects: ["llm-pipeline"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "tensorflow",
    label: "TensorFlow",
    logo: dev("tensorflow"),
    domain: "ai",
    description: {
      fr: "Utilisé pour des modèles de séries temporelles et NLP, déployés via TF Serving.",
      en: "Time-series and NLP models, deployed through TF Serving.",
    },
    linkedProjects: ["forecast-engine"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "spark",
    label: "Apache Spark",
    logo: dev("apachespark", "original"),
    domain: "data",
    description: {
      fr: "Traitement de données à grande échelle, batch et streaming sur clusters managés.",
      en: "Large-scale batch and streaming data processing on managed clusters.",
    },
    linkedProjects: ["lakehouse"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "kafka",
    label: "Kafka",
    logo: dev("apachekafka", "original"),
    domain: "data",
    description: {
      fr: "Bus d'événements pour pipelines streaming temps réel critiques.",
      en: "Event bus for mission-critical real-time streaming pipelines.",
    },
    linkedProjects: ["lakehouse"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "airflow",
    label: "Airflow",
    logo: dev("apacheairflow"),
    domain: "data",
    description: {
      fr: "Orchestration de DAGs ETL et ML, scheduling fiable en production.",
      en: "ETL and ML DAG orchestration with reliable production scheduling.",
    },
    linkedProjects: ["lakehouse"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "dbt",
    label: "dbt",
    logo: dev("dbt", "original"),
    domain: "data",
    description: {
      fr: "Modélisation SQL versionnée — qualité de données et lineage automatisés.",
      en: "Versioned SQL modeling — automated data quality and lineage.",
    },
    linkedProjects: ["lakehouse"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    logo: dev("postgresql"),
    domain: "data",
    description: {
      fr: "Base relationnelle de référence — schémas analytiques, extensions, pg_vector.",
      en: "My go-to relational database — analytical schemas, extensions, pg_vector.",
    },
    linkedProjects: ["llm-pipeline", "forecast-engine"],
    linkedExperiences: ["exp-1", "exp-2"],
  },
  {
    id: "gcp",
    label: "Google Cloud",
    logo: dev("googlecloud"),
    domain: "platforms",
    description: {
      fr: "BigQuery, Dataflow, Vertex AI — plateforme principale pour mes projets data/IA.",
      en: "BigQuery, Dataflow, Vertex AI — my main platform for data/AI projects.",
    },
    linkedProjects: ["lakehouse", "forecast-engine"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "aws",
    label: "AWS",
    logo: dev("amazonwebservices", "original-wordmark"),
    domain: "platforms",
    description: {
      fr: "S3, Lambda, ECS, SageMaker — déploiements multi-régions et architectures serverless.",
      en: "S3, Lambda, ECS, SageMaker — multi-region deployments and serverless architectures.",
    },
    linkedProjects: ["llm-pipeline"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "docker",
    label: "Docker",
    logo: dev("docker"),
    domain: "tools",
    description: {
      fr: "Containerisation systématique : dev reproductible, déploiements fiables.",
      en: "Containerization by default: reproducible dev, reliable deploys.",
    },
    linkedProjects: ["llm-pipeline", "lakehouse"],
    linkedExperiences: ["exp-1", "exp-2"],
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    logo: dev("kubernetes"),
    domain: "tools",
    description: {
      fr: "Orchestration de workloads ML/data — Helm, KEDA, GitOps avec ArgoCD.",
      en: "Orchestrating ML/data workloads — Helm, KEDA, GitOps with ArgoCD.",
    },
    linkedProjects: ["llm-pipeline"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "terraform",
    label: "Terraform",
    logo: dev("terraform"),
    domain: "tools",
    description: {
      fr: "Infrastructure-as-code multi-cloud, modules réutilisables, CI/CD intégré.",
      en: "Multi-cloud infrastructure-as-code, reusable modules, integrated CI/CD.",
    },
    linkedProjects: ["lakehouse"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "fastapi",
    label: "FastAPI",
    logo: dev("fastapi"),
    domain: "fullstack",
    description: {
      fr: "API performantes pour exposer modèles ML et services internes.",
      en: "High-performance APIs to expose ML models and internal services.",
    },
    linkedProjects: ["llm-pipeline"],
    linkedExperiences: ["exp-1"],
  },
  {
    id: "react",
    label: "React",
    logo: dev("react"),
    domain: "fullstack",
    description: {
      fr: "Frontend pour dashboards data, outils internes et prototypes produit.",
      en: "Frontend for data dashboards, internal tools and product prototypes.",
    },
    linkedProjects: ["forecast-engine"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    logo: dev("typescript"),
    domain: "fullstack",
    description: {
      fr: "Mon standard pour tout code frontend ou Node — typage strict obligatoire.",
      en: "My standard for any frontend or Node code — strict typing by default.",
    },
    linkedProjects: ["forecast-engine"],
    linkedExperiences: ["exp-2"],
  },
  {
    id: "git",
    label: "Git",
    logo: dev("git"),
    domain: "tools",
    description: {
      fr: "Workflows GitOps, trunk-based, revue de code et conventions strictes.",
      en: "GitOps and trunk-based workflows, code review and strict conventions.",
    },
    linkedProjects: [],
    linkedExperiences: ["exp-1", "exp-2"],
  },
];
