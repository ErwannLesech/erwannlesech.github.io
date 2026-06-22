export type Experience = {
  id: string;
  type: "pro" | "academic";
  company: string;
  role: { fr: string; en: string };
  dates: string;
  location: string;
  country: "FR" | "IE";
  flag: string;
  bullets: { fr: string; en: string }[];
  tags: string[];
  degree?: string;
  honors?: { fr: string; en: string };
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    type: "pro",
    company: "Confidential Scale-up",
    role: { fr: "Data & AI Engineer Senior", en: "Senior Data & AI Engineer" },
    dates: "2024 — Présent",
    location: "Paris, France",
    country: "FR",
    flag: "🇫🇷",
    bullets: [
      {
        fr: "Conception et industrialisation d'une plateforme RAG en production servant 50k+ requêtes/jour.",
        en: "Designed and productionized a RAG platform serving 50k+ requests/day.",
      },
      {
        fr: "Migration d'un data warehouse legacy vers une architecture lakehouse Delta + Iceberg.",
        en: "Migrated a legacy warehouse to a Delta + Iceberg lakehouse architecture.",
      },
      {
        fr: "Mise en place de l'observabilité ML : drift, latence, qualité, alerting de bout en bout.",
        en: "Set up end-to-end ML observability: drift, latency, quality and alerting.",
      },
      {
        fr: "Mentorat de deux data engineers juniors, mise en place de standards de code et de revue.",
        en: "Mentored two junior data engineers and set up code & review standards.",
      },
    ],
    tags: ["Python", "PyTorch", "Spark", "Kafka", "GCP", "Kubernetes"],
  },
  {
    id: "exp-2",
    type: "pro",
    company: "European Tech Company",
    role: { fr: "Data Engineer", en: "Data Engineer" },
    dates: "2022 — 2024",
    location: "Dublin, Ireland",
    country: "IE",
    flag: "🇮🇪",
    bullets: [
      {
        fr: "Construction de pipelines ETL critiques traitant 5 TB/jour sur AWS.",
        en: "Built mission-critical ETL pipelines processing 5 TB/day on AWS.",
      },
      {
        fr: "Développement d'un moteur de forecasting ML déployé en production sur 5000 SKUs.",
        en: "Built an ML forecasting engine deployed in production across 5,000 SKUs.",
      },
      {
        fr: "Refonte du modèle dbt analytique : -40% de temps d'exécution, +100% de tests.",
        en: "Redesigned the analytical dbt model: -40% runtime, +100% test coverage.",
      },
    ],
    tags: ["Python", "AWS", "dbt", "Airflow", "TensorFlow"],
  },
  {
    id: "edu-1",
    type: "academic",
    company: "École d'ingénieurs (France)",
    role: { fr: "Diplôme d'ingénieur — Informatique & Data", en: "Engineering Degree — Computer Science & Data" },
    dates: "2019 — 2022",
    location: "France",
    country: "FR",
    flag: "🇫🇷",
    degree: "MSc Eng.",
    honors: { fr: "Mention Bien · Majeure IA / Systèmes distribués", en: "With honors · AI / Distributed Systems major" },
    bullets: [],
    tags: [],
  },
  {
    id: "edu-2",
    type: "academic",
    company: "Irish University",
    role: { fr: "MSc — Artificial Intelligence", en: "MSc — Artificial Intelligence" },
    dates: "2021 — 2022",
    location: "Dublin, Ireland",
    country: "IE",
    flag: "🇮🇪",
    degree: "MSc",
    honors: { fr: "First Class Honours · Thèse sur les LLMs appliqués", en: "First Class Honours · Thesis on applied LLMs" },
    bullets: [],
    tags: [],
  },
];
