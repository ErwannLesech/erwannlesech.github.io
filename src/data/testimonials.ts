export type Testimonial = {
  id: string;
  quote: { fr: string; en: string };
  name: string;
  relationship: { fr: string; en: string };
  initials: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: {
      fr: "Erwann combine une rigueur d'ingénieur senior et une vraie curiosité pour les problèmes produit. Une recrue rare.",
      en: "Erwann combines the rigor of a senior engineer with genuine product curiosity. A rare hire.",
    },
    name: "M. Dupont",
    relationship: { fr: "Employeur", en: "Employer" },
    initials: "MD",
  },
  {
    id: "t2",
    quote: {
      fr: "Travailler avec lui, c'est apprendre. Il sait expliquer les choses complexes simplement et écoute vraiment.",
      en: "Working with him means learning. He explains complex things simply and actually listens.",
    },
    name: "Sarah O'Connor",
    relationship: { fr: "Collègue", en: "Colleague" },
    initials: "SO",
  },
  {
    id: "t3",
    quote: {
      fr: "Un étudiant brillant, autonome, capable de mener un projet de recherche de bout en bout sans rien lâcher.",
      en: "A brilliant, autonomous student capable of leading a research project end to end without ever letting up.",
    },
    name: "Pr. L. Martin",
    relationship: { fr: "Professeur", en: "Professor" },
    initials: "LM",
  },
  {
    id: "t4",
    quote: {
      fr: "Mentor exigeant et bienveillant. Il m'a appris à structurer mon travail et à viser la production.",
      en: "Demanding and supportive mentor. He taught me to structure my work and aim for production.",
    },
    name: "T. Bernard",
    relationship: { fr: "Étudiant", en: "Mentee" },
    initials: "TB",
  },
  {
    id: "t5",
    quote: {
      fr: "On peut lui confier les problèmes vagues, ambigus — il les transforme en architecture claire.",
      en: "You can hand him the vague, ambiguous problems — he turns them into clear architecture.",
    },
    name: "A. Lefèvre",
    relationship: { fr: "Collègue", en: "Colleague" },
    initials: "AL",
  },
];
