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
      fr: "Erwann a travaillé avec nous durant son stage de 4ème année, et je ne peux que le recommander! Impliqué, proactif avec un excellent niveau technique, il a largement dépassé nos attentes. [...] Je suis convaincue qu’il fera la différence dans ses futurs projets !",
      en: "Erwann worked with us during his 4th year internship, and I can only recommend him! Involved, proactive with an excellent technical level, he has far exceeded our expectations. [...] I am convinced that he will make a difference in his future projects!",
    },
    name: "Aude Negre, Directrice de Sparks Formation \& Apollo (ESN)",
    relationship: { fr: "Employeur", en: "Employer" },
    initials: "AN",
  },
  {
    id: "t2",
    quote: {
      fr: "J’ai collaboré avec Erwann Lesech sur plusieurs projets techniques complexes durant nos études supérieures. [...] Sa curiosité, sa persévérance et son aptitude à transformer une nouveauté en résultats concrets ont joué un rôle décisif dans la réussite du projet.",
      en: "I collaborated with Erwann Lesech on several complex technical projects during our higher education studies. [...] His curiosity, perseverance, and ability to turn new ideas into concrete results played a decisive role in the success of the project.",
    },
    name: "Guillaume Jolivalt",
    relationship: { fr: "Collègue", en: "Colleague" },
    initials: "GJ",
  },
  {
    id: "t3",
    quote: {
      fr: "Avoir Erwann comme professeur assistant à l'EPITA a été une très bonne expérience. Il était accessible et pédagogue, toujours disposé à s'investir pour nous aider. Il proposait des quiz pour réviser et donnait d'excellents conseils sur les projets. C'était vraiment apprécié !",
      en: "Having Erwann as a teaching assistant at EPITA was a very good experience. He was approachable and pedagogical, always willing to invest time to help us. He offered quizzes to review and gave excellent advice on projects. It was truly appreciated!",
    },
    name: "Quentin Couavoux",
    relationship: { fr: "Étudiant", en: "Student" },
    initials: "QC",
  },
];
