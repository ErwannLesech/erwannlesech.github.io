export interface Experience {
  id: string
  /** translations live in locale files under experiences.<id>.role / .company / .dates / .bullets */
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: "dataiku",
    tags: ["Python", "Spark", "Airflow", "AWS", "Kubernetes", "LLMs"],
  },
  {
    id: "epita",
    tags: ["Python", "C++", "scikit-learn", "GCP", "Docker"],
  },
  {
    id: "research",
    tags: ["PyTorch", "Research", "NLP", "Python"],
  },
]
