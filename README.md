# Portfolio Personnel - Erwann LESECH

Bienvenue sur mon portfolio personnel. 

## Technologies utilisées

### Frontend
- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **TanStack Router** - Routage côté client
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Composants UI accessibles et unstyled
- **React Three Fiber** - Intégration Three.js avec React
- **React Hook Form** - Gestion des formulaires
- **EmailJS** - Service d'envoi d'emails

### Build & Outils
- **Vite** - Build tool et dev server
- **ESLint** - Linter
- **Prettier** - Formateur de code

### Autres
- **i18n** - Internationalisation
- **Sonner** - Toast notifications

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v18 ou supérieur)
- **Git**

## Installation et Mise en Route

### 1. Cloner le repository

```bash
git clone https://github.com/erwannlesech/erwannlesech.github.io.git
cd erwannlesech.github.io
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à : **http://localhost:5173** (ou le port affiché dans le terminal)

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec hot reload |
| `npm run build` | Construit l'application pour la production |
| `npm run build:dev` | Construit en mode développement |
| `npm run preview` | Prévisualise la build de production en local |
| `npm run lint` | Lance ESLint pour vérifier la qualité du code |
| `npm run format` | Formate le code avec Prettier |

## Structure du projet

```
erwannlesech.github.io/
├── src/
│   ├── components/
│   │   ├── sections/        # Sections principales du site
│   │   ├── ui/              # Composants UI réutilisables
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── routes/              # Routes TanStack Router
│   ├── data/                # Données statiques
│   ├── hooks/               # Hooks React personnalisés
│   ├── lib/                 # Utilitaires et helpers
│   ├── locales/             # Fichiers i18n (en.json, fr.json)
│   ├── styles.css           # Styles globaux
│   ├── router.tsx           # Configuration du routeur
│   └── main.tsx             # Point d'entrée
├── vite.config.ts           # Configuration Vite
├── tsconfig.json            # Configuration TypeScript
├── eslint.config.js         # Configuration ESLint
└── package.json             # Dépendances du projet
```

### Détails des dossiers

- **`/components`** : Tous les composants React
  - `/sections` : Grandes sections du portfolio (About, Hero, Projects, etc.)
  - `/ui` : Composants UI primitifs et réutilisables (Button, Card, Dialog, etc.)
- **`/routes`** : Définition des routes avec TanStack Router
- **`/data`** : Données statiques (expériences, compétences, projets, etc.)
- **`/hooks`** : Hooks personnalisés
- **`/lib`** : Fonctions utilitaires et helpers (theme, i18n, error handling, etc.)
- **`/locales`** : Fichiers de traduction (JSON)

## Personnalisation

### Ajouter une section

1. Créez un nouveau fichier dans `src/components/sections/`
2. Importez-le dans le composant approprié
3. Ajoutez votre contenu en TypeScript/JSX

### Modifier les données

Les données du portfolio se trouvent dans `src/data/` :
- `experiences.ts` : Expériences professionnelles
- `skills.ts` : Compétences
- `projects.ts` : Projets réalisés
- `publications.ts` : Publications
- `passions.ts` : Intérêts et passions
- `testimonials.ts` : Témoignages

### Traductions

Les traductions se trouvent dans `src/locales/` :
- `en.json` : Textes en anglais
- `fr.json` : Textes en français

Modifiez ces fichiers pour ajouter ou changer les traductions.

## Déploiement

### Build pour la production

```bash
npm run build
```

Cela générera un dossier `dist/` contenant les fichiers optimisés prêts pour le déploiement.

### Prévisualisation locale

```bash
npm run build
npm run preview
```

## Environnement (VITE_* variables)

Les variables d'environnement peuvent être définies dans des fichiers `.env`, `.env.local`, etc.

Format :
```
VITE_MA_VARIABLE=valeur
```

Exemple :
```
VITE_API_URL=https://api.example.com
```

Accédez-les dans le code avec :
```typescript
console.log(import.meta.env.VITE_MA_VARIABLE)
```

## Contact

Pour toute question ou suggestion, vous pouvez :
- Visiter le portfolio : https://erwannlesech.github.io
- Utiliser le formulaire de contact sur le site
- Me contacter directement via les liens fournis

## Licence

Ce projet est personnel et à usage privé.

## Contribution

Ce projet est personnel et fermé aux contributions externes.

---

**Dernière mise à jour** : Juin 2026

**Maintenue par** : Erwann LESECH
