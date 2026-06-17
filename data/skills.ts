export type SkillDomain =
  | "ml"
  | "data"
  | "cloud"
  | "devops"
  | "languages"
  | "frameworks"

export interface Skill {
  id: string
  label: string
  domain: SkillDomain
  proficiency: number
  /** translation key suffix; descriptions live in locale files under skills.<id>.desc */
  linkedProjects: string[]
  linkedExperiences: string[]
}

export const domainColors: Record<SkillDomain, string> = {
  ml: "#7c3aed",
  data: "#0891b2",
  cloud: "#059669",
  devops: "#f59e0b",
  languages: "#f97316",
  frameworks: "#38bdf8",
}

export const domainLabelKeys: Record<SkillDomain, string> = {
  ml: "skills.domains.ml",
  data: "skills.domains.data",
  cloud: "skills.domains.cloud",
  devops: "skills.domains.devops",
  languages: "skills.domains.languages",
  frameworks: "skills.domains.frameworks",
}

export const skills: Skill[] = [
  {
    id: "pytorch",
    label: "PyTorch",
    domain: "ml",
    proficiency: 88,
    linkedProjects: ["llm-rag", "vision-anomaly"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "llm",
    label: "LLMs / RAG",
    domain: "ml",
    proficiency: 85,
    linkedProjects: ["llm-rag"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "sklearn",
    label: "scikit-learn",
    domain: "ml",
    proficiency: 90,
    linkedProjects: ["vision-anomaly", "churn"],
    linkedExperiences: ["epita"],
  },
  {
    id: "spark",
    label: "Apache Spark",
    domain: "data",
    proficiency: 82,
    linkedProjects: ["streaming-pipeline"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "airflow",
    label: "Airflow",
    domain: "data",
    proficiency: 84,
    linkedProjects: ["streaming-pipeline", "churn"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "kafka",
    label: "Kafka",
    domain: "data",
    proficiency: 78,
    linkedProjects: ["streaming-pipeline"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "dbt",
    label: "dbt",
    domain: "data",
    proficiency: 80,
    linkedProjects: ["churn"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "aws",
    label: "AWS",
    domain: "cloud",
    proficiency: 83,
    linkedProjects: ["streaming-pipeline", "llm-rag"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "gcp",
    label: "GCP",
    domain: "cloud",
    proficiency: 75,
    linkedProjects: ["vision-anomaly"],
    linkedExperiences: ["epita"],
  },
  {
    id: "docker",
    label: "Docker",
    domain: "devops",
    proficiency: 87,
    linkedProjects: ["streaming-pipeline", "llm-rag", "vision-anomaly"],
    linkedExperiences: ["dataiku", "epita"],
  },
  {
    id: "k8s",
    label: "Kubernetes",
    domain: "devops",
    proficiency: 76,
    linkedProjects: ["streaming-pipeline", "llm-rag"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "terraform",
    label: "Terraform",
    domain: "devops",
    proficiency: 74,
    linkedProjects: ["streaming-pipeline"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "python",
    label: "Python",
    domain: "languages",
    proficiency: 93,
    linkedProjects: ["llm-rag", "vision-anomaly", "churn", "streaming-pipeline"],
    linkedExperiences: ["dataiku", "epita"],
  },
  {
    id: "sql",
    label: "SQL",
    domain: "languages",
    proficiency: 89,
    linkedProjects: ["churn", "streaming-pipeline"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "cpp",
    label: "C / C++",
    domain: "languages",
    proficiency: 80,
    linkedProjects: ["vision-anomaly"],
    linkedExperiences: ["epita"],
  },
  {
    id: "fastapi",
    label: "FastAPI",
    domain: "frameworks",
    proficiency: 85,
    linkedProjects: ["llm-rag", "churn"],
    linkedExperiences: ["dataiku"],
  },
  {
    id: "react",
    label: "React / Next.js",
    domain: "frameworks",
    proficiency: 78,
    linkedProjects: ["llm-rag"],
    linkedExperiences: ["epita"],
  },
]
