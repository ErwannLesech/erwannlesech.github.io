export type Passion = {
  id: string;
  icon: "swim" | "moto" | "plane" | "chef" | "gamepad" | "music";
  bg: "wave" | "speed" | "cloud" | "steam" | "scan" | "eq";
  accent: "orange" | "sky";
  label: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const passions: Passion[] = [
  {
    id: "swim",
    icon: "swim",
    bg: "wave",
    accent: "sky",
    label: { fr: "Natation & Basket", en: "Swimming & Basketball" },
    description: {
      fr: "Compétition depuis l'enfance, la discipline et le dépassement de soi dans l'eau comme ailleurs.",
      en: "Competing since childhood — the discipline and self-overcoming in the water carry over everywhere.",
    },
  },
  {
    id: "moto",
    icon: "moto",
    bg: "speed",
    accent: "orange",
    label: { fr: "Moto & Sport méca", en: "Motorcycles & Motorsport" },
    description: {
      fr: "L'odeur du carburant, la précision des trajectoires, la mécanique comme poésie en mouvement.",
      en: "The smell of fuel, the precision of lines — mechanics as poetry in motion.",
    },
  },
  {
    id: "plane",
    icon: "plane",
    bg: "cloud",
    accent: "sky",
    label: { fr: "Aviation", en: "Aviation" },
    description: {
      fr: "Passionné par tout ce qui vole, de l'aérodynamique aux systèmes embarqués des avions modernes.",
      en: "Drawn to everything that flies, from aerodynamics to the embedded systems of modern aircraft.",
    },
  },
  {
    id: "chef",
    icon: "chef",
    bg: "steam",
    accent: "orange",
    label: { fr: "Gastronomie", en: "Gastronomy" },
    description: {
      fr: "Cuisiner comme on code : ingrédients soignés, méthode rigoureuse, et un peu d'improvisation.",
      en: "Cooking the way I code: careful ingredients, rigorous method, and a bit of improvisation.",
    },
  },
  {
    id: "gamepad",
    icon: "gamepad",
    bg: "scan",
    accent: "orange",
    label: { fr: "Gaming compétitif", en: "Competitive gaming" },
    description: {
      fr: "FPS et jeux de stratégie — l'esprit d'équipe, la lecture du jeu, et la décision sous pression.",
      en: "FPS and strategy games — teamwork, reading the game, and decision-making under pressure.",
    },
  },
  {
    id: "music",
    icon: "music",
    bg: "eq",
    accent: "sky",
    label: { fr: "Musique", en: "Music" },
    description: {
      fr: "Du hip-hop à l'électro, la musique accompagne chaque ligne de code et chaque longue session.",
      en: "From hip-hop to electronic — music carries every line of code and every long session.",
    },
  },
];
