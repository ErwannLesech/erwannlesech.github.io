import { type SkillDomain } from "@/data/skills";

export const CLUSTER_COLOR: Record<SkillDomain, string> = {
  ai_ml: "#7c3aed",
  data_backend: "#0891b2",
  infra_devops: "#f59e0b",
  frontend: "#f97316",
  systems: "#059669",
};

export const DOMAINS: SkillDomain[] = ["ai_ml", "data_backend", "infra_devops", "frontend", "systems"];
