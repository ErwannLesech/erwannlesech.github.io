export type Passion = {
  id: string;
  icon: "swim" | "moto" | "plane" | "chef" | "gamepad" | "music";
  accent: "orange" | "sky";
  label: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const passions: Passion[] = [
  {
    id: "swim",
    icon: "swim",
    accent: "sky",
    label: { fr: "Natation & Basket", en: "Swimming & Basketball" },
    description: {
      fr: "Compétiteur dans l'âme depuis mon enfance, ces deux sports m'ont appris la discipline, le dépassement de soi et l'esprit d'équipe. J'ai été fier de représenter mon club marseillais de natation aux championnats de France.",
      en: "A competitor at heart since childhood, these two sports taught me discipline, self-improvement, and team spirit. I was proud to represent my Marseille swimming club at the French championships.",
    },
  },
  {
    id: "moto",
    icon: "moto",
    accent: "orange",
    label: { fr: "Moto & Sport méca", en: "Motorcycles & Motorsport" },
    description: {
      fr: "Dès l'âge de 16 ans, la moto a été une passion. La sensation de liberté et l'art du pilotage m'ont poussé à explorer les cols de la région PACA et la côte d'Azur bien des fois.",
      en: "Since the age of 16, motorcycles have been a passion. The feeling of freedom and the craft of riding have led me to explore the mountain passes of the PACA region and the French Riviera many times.",
    },
  },
  {
    id: "music",
    icon: "music",
    accent: "sky",
    label: { fr: "Musique", en: "Music" },
    description: {
      fr: "Comme beaucoup, j'ai grandi avec la musique. Du rock/metal des années 1980 de mes parents à la pop des années 2010 et aujourd'hui. Dans une autre vie, j'aurai souhaité être compositeur ou chanteur.",
      en: "Like many people, I grew up with music. From my parents' 1980s rock and metal to 2010s pop and today's sounds. In another life, I would have loved to be a composer or singer.",
    },
  },
  {
    id: "chef",
    icon: "chef",
    accent: "orange",
    label: { fr: "Gastronomie", en: "Gastronomy" },
    description: {
      fr: "Une de mes dernières découvertes lors de mes études supérieures, la cuisine et la pâtisserie sont devenues un exutoire créatif et très gourmand.",
      en: "One of my most recent discoveries during higher education, cooking and pastry became a creative and delicious outlet.",
    }
  },
  {
    id: "plane",
    icon: "plane",
    accent: "sky",
    label: { fr: "Aviation", en: "Aviation" },
    description: {
      fr: "J'ai toujours été attiré par la précision technologique que représente l'aviation. J'espère un jour pouvoir piloter un avion ou un hélicoptère, mais pour l'instant je me contente de les admirer depuis le sol.",
      en: "Drawn to everything that flies, from aerodynamics to the embedded systems of modern aircraft. I hope to one day pilot an airplane or helicopter, but for now, I content myself with admiring them from the ground.",
    },
  },
  {
    id: "gamepad",
    icon: "gamepad",
    accent: "orange",
    label: { fr: "Gaming compétitif", en: "Competitive gaming" },
    description: {
      fr: "Jeux de stratégies et FPS ont tout deux contribué à développer mon esprit d'équipe, ma communication et ma détermination afin d'atteindre un haut niveau.",
      en: "Strategy and FPS games both helped me develop teamwork, communication, and determination to reach a high level.",
    },
  },
];
