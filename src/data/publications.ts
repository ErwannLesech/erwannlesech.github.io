export type Publication = {
  id: string;
  title: { fr: string; en: string };
  date: string;
  type: "Rapport" | "Article" | "Réflexion IA" | "Research";
  abstract: { fr: string; en: string };
  url?: string;
};

export const publications: Publication[] = [
  {
    id: "p1",
    title: {
      fr: "Évaluer un système RAG sans tomber dans la métrique-piège",
      en: "Evaluating a RAG system without falling into the metric trap",
    },
    date: "2025-09",
    type: "Article",
    abstract: {
      fr: "Pourquoi les benchmarks classiques mentent sur la qualité réelle d'un système RAG, et comment construire un protocole d'évaluation aligné sur l'usage.",
      en: "Why classical benchmarks lie about real RAG quality, and how to build an evaluation protocol aligned with actual usage.",
    },
    url: "#",
  },
  {
    id: "p2",
    title: {
      fr: "LLMs appliqués : thèse de fin d'études",
      en: "Applied LLMs: master's thesis",
    },
    date: "2022-06",
    type: "Rapport",
    abstract: {
      fr: "Travail de recherche sur l'adaptation de modèles de langage à des domaines spécialisés via fine-tuning et retrieval augmenté.",
      en: "Research on adapting language models to specialized domains through fine-tuning and retrieval augmentation.",
    },
    url: "#",
  },
  {
    id: "p3",
    title: {
      fr: "Le rôle de l'ingénieur Data à l'ère des LLMs",
      en: "The role of the Data Engineer in the LLM era",
    },
    date: "2025-03",
    type: "Réflexion IA",
    abstract: {
      fr: "Une réflexion personnelle sur la transformation du métier de data engineer face aux modèles génératifs et aux nouvelles architectures.",
      en: "A personal reflection on how the data engineering craft is being reshaped by generative models and new architectures.",
    },
    url: "#",
  },
  {
    id: "p4",
    title: {
      fr: "Architecture lakehouse : retour d'expérience",
      en: "Lakehouse architecture: lessons learned",
    },
    date: "2024-11",
    type: "Rapport",
    abstract: {
      fr: "Bilan d'une migration warehouse vers lakehouse : pièges techniques, choix de gouvernance, ROI réel.",
      en: "Looking back at a warehouse-to-lakehouse migration: technical pitfalls, governance choices, actual ROI.",
    },
    url: "#",
  },
];
