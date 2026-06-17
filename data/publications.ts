export type PublicationType = "report" | "article" | "reflection"

export interface Publication {
  id: string
  /** translations live in locale files under publications.<id>.title / .abstract */
  date: string
  type: PublicationType
  url: string
}

export const publications: Publication[] = [
  {
    id: "rag-eval",
    date: "2025-03",
    type: "article",
    url: "https://example.com",
  },
  {
    id: "streaming-report",
    date: "2024-11",
    type: "report",
    url: "https://example.com",
  },
  {
    id: "ai-ethics",
    date: "2024-06",
    type: "reflection",
    url: "https://example.com",
  },
  {
    id: "anomaly-detection",
    date: "2023-12",
    type: "report",
    url: "https://example.com",
  },
]
