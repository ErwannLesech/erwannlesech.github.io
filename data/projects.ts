import type { SkillDomain } from "./skills"

export type ProjectDomain = Extract<
  SkillDomain,
  "ml" | "data" | "cloud" | "devops"
>

export interface Project {
  id: string
  /** translations live in locale files under projects.<id>.title / .description / .details */
  tags: string[]
  github?: string
  live?: string
  domain: ProjectDomain
}

export const projects: Project[] = [
  {
    id: "llm-rag",
    tags: ["Python", "LLMs", "RAG", "FastAPI", "AWS"],
    github: "https://github.com/ErwannLesech",
    live: "https://example.com",
    domain: "ml",
  },
  {
    id: "streaming-pipeline",
    tags: ["Spark", "Kafka", "Airflow", "Terraform", "AWS"],
    github: "https://github.com/ErwannLesech",
    domain: "data",
  },
  {
    id: "vision-anomaly",
    tags: ["PyTorch", "scikit-learn", "Docker", "GCP"],
    github: "https://github.com/ErwannLesech",
    live: "https://example.com",
    domain: "ml",
  },
  {
    id: "churn",
    tags: ["dbt", "SQL", "Airflow", "scikit-learn"],
    github: "https://github.com/ErwannLesech",
    domain: "data",
  },
  {
    id: "infra-platform",
    tags: ["Kubernetes", "Terraform", "Docker", "AWS"],
    github: "https://github.com/ErwannLesech",
    domain: "cloud",
  },
  {
    id: "cicd-mlops",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "Airflow"],
    github: "https://github.com/ErwannLesech",
    domain: "devops",
  },
]
