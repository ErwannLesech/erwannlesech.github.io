export type Publication = {
  id: string;
  title: { fr: string; en: string };
  date: string;
  type: "Rapport" | "Article" | "Réflexion IA" | "Research";
  language: "FR" | "EN";
  abstract: { fr: string; en: string };
  url?: string;
};

export const publications: Publication[] = [
  {
    id: "p1",
    title: {
      fr: "Descente de gradient : une réflexion mathématique au coeur du Deep Learning",
      en: "Gradient descent: a mathematical reflection at the core of Deep Learning",
    },
    date: "2025-05",
    type: "Réflexion IA",
    language: "FR",
    abstract: {
      fr: "Écrit réflexif et scientifique sur la mécanique phare du Deep Learning : fonctionnement mathématique de la descente de gradient, pas constant, backtracking, normes de descente, sensibilité au conditionnement de la Hessienne, méthodes d'accélération et analyse comparative.",
      en: "Reflective scientific writing on the core mechanism of Deep Learning: mathematical behavior of gradient descent, constant step size, backtracking, descent norms, sensitivity to Hessian conditioning, acceleration methods, and comparative analysis.",
    },
    url: "/reports/descente-gradient.pdf",
  },
  {
    id: "p3",
    title: {
      fr: "Détection de points d'intérêt (PoI) par clustering à Lyon",
      en: "Detecting Points of Interest (PoI) Using Clustering Algorithms",
    },
    date: "2025-06",
    type: "Research",
    language: "EN",
    abstract: {
      fr: "La détection de points d'intérêt à Lyon via des données Flickr est ici un cas d'étude servant à comparer rigoureusement les algorithmes de clustering. Le rapport met l'accent sur l'analyse méthodologique (K-Means, DBSCAN, agglomératif, Mean-Shift), la sensibilité aux hyperparamètres, les visualisations et les limites de chaque approche.",
      en: "In this project, PoI detection in Lyon using Flickr geolocated posts is primarily a pretext for a rigorous comparison of clustering algorithms. The report focuses on methodological benchmarking across K-Means, DBSCAN, Agglomerative Clustering, and Mean-Shift, with emphasis on hyperparameter sensitivity, visualization, and method-specific trade-offs.",
    },
    url: "/reports/PoI-cluster.pdf",
  },
];
