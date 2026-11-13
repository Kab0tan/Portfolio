import type { Project, Tag } from '@/types.ts'
import kanjiNoKabeImageUrl from '/src/assets/images/KanjinoKabe.png?url'
import deezerImageUrl from '/src/assets/images/deezer.jpg?url'
import spotifyImageUrl from '/src/assets/images/spotify.png?url'
import quizImageUrl from '/src/assets/images/quizium.jpg?url'
import histoImageUrl from '/src/assets/images/histoProject.png?url'
import customRetroTermImageUrl from '/src/assets/images/customRetroTerm.png?url'
import foodexImageUrl from '/src/assets/images/foodex.webp?url'
import rameoImageUrl from '/src/assets/images/rameo.webp?url'
import rameoFullImageUrl from '/src/assets/images/rameo-overview.png?url'

const TAGS = {
  vue: { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
  typescript: { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
  javascript: { name: 'Javascript', bgColor: '#f7df65' },
  elementPlus: { name: 'Element Plus', bgColor: '#409EFF', txtColor: 'white' },
  scss: { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
  vite: { name: 'Vite', bgColor: '#ffcb3b' },
  pinia: { name: 'Pinia', bgColor: '#f7df65' },
  electron: { name: 'Electron', bgColor: '#47848F', txtColor: 'white' },
  webgl: { name: 'WebGL', bgColor: '#990000', txtColor: 'white' },
  xterm: { name: 'xterm.js', bgColor: '#2D2E2C', txtColor: 'white' },
  tailwind: { name: 'Tailwind CSS', bgColor: '#38BDF8' },
  supabase: { name: 'Supabase', bgColor: '#3ECF8E' },
  postgresql: { name: 'PostgreSQL', bgColor: '#336791', txtColor: 'white' },
  tanstackQuery: {
    name: 'TanStack Query',
    bgColor: '#FF4154',
    txtColor: 'white',
  },
  reactNative: { name: 'React Native', bgColor: '#61DAFB' },
  sqlite: { name: 'SQLite', bgColor: '#d6d6d6', txtColor: '#003B57' },
  expo: { name: 'Expo', bgColor: '#000020', txtColor: 'white' },
  python: { name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' },
  flask: { name: 'Flask', bgColor: '#3BABC3' },
  nextjs: { name: 'Next.js', bgColor: '#000000', txtColor: 'white' },
  react: { name: 'React', bgColor: '#61DAFB' },
  maplibre: { name: 'MapLibre GL', bgColor: '#396CB2', txtColor: 'white' },
  vitest: { name: 'Vitest', bgColor: '#729B1B', txtColor: 'white' },
  prim: { name: 'IDFM PRIM API (SIRI)', bgColor: '#1B2A55', txtColor: 'white' },
  gtfs: { name: 'GTFS', bgColor: '#6B7280', txtColor: 'white' },
} satisfies Record<string, Tag>

// Language-independent data. Each project's description lives in PORTFOLIO_TEXTS under its key.
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    key: 'rameo',
    title: 'Rameo',
    tags: [
      TAGS.nextjs,
      TAGS.typescript,
      TAGS.react,
      TAGS.maplibre,
      TAGS.vitest,
      TAGS.prim,
      TAGS.gtfs,
    ],
    links: [
      {
        src: rameoImageUrl,
        link: '',
        zoom: true,
        fullSrc: rameoFullImageUrl,
      },
    ],
    github: '',
  },
  {
    key: 'customRetroTerm',
    title: 'custom-retro-term',
    tags: [TAGS.electron, TAGS.vue, TAGS.typescript, TAGS.webgl, TAGS.xterm],
    links: [
      {
        src: customRetroTermImageUrl,
        link: 'https://github.com/Kab0tan/custom-retro-term',
      },
    ],
    github: 'https://github.com/Kab0tan/custom-retro-term',
  },
  {
    key: 'kanjiNoKabe',
    title: 'Kanji no Kabe',
    tags: [TAGS.vue, TAGS.elementPlus, TAGS.scss, TAGS.vite, TAGS.pinia],
    links: [
      {
        src: kanjiNoKabeImageUrl,
        link: 'https://github.com/Kab0tan/KanjiNoKabe/',
      },
    ],
    github: 'https://github.com/Kab0tan/KanjiNoKabe/',
  },
  {
    key: 'foodex',
    title: 'Foodex',
    tags: [
      TAGS.vue,
      TAGS.typescript,
      TAGS.tailwind,
      TAGS.supabase,
      TAGS.postgresql,
      TAGS.tanstackQuery,
      TAGS.pinia,
    ],
    links: [
      {
        src: foodexImageUrl,
        link: 'https://foodex-mu.vercel.app/demo/recipes',
      },
    ],
    github: '',
  },
  {
    key: 'quizium',
    title: 'Quizium',
    tags: [TAGS.reactNative, TAGS.sqlite, TAGS.expo, TAGS.typescript],
    links: [
      {
        src: quizImageUrl,
        link: 'https://github.com/Kab0tan/Quizium',
      },
    ],
    github: 'https://github.com/Kab0tan/Quizium',
  },
  {
    key: 'histoProject',
    title: 'HistoProject',
    tags: [
      TAGS.vue,
      TAGS.scss,
      TAGS.vite,
      TAGS.pinia,
      TAGS.javascript,
      TAGS.python,
      TAGS.flask,
      TAGS.postgresql,
    ],
    links: [
      {
        src: histoImageUrl,
        link: '',
        zoom: true,
      },
    ],
    github: '',
  },
  {
    key: 'portfolio',
    title: 'Portfolio',
    tags: [
      TAGS.vue,
      TAGS.scss,
      TAGS.vite,
      TAGS.pinia,
      TAGS.typescript,
      TAGS.elementPlus,
    ],
    github: 'https://github.com/Kab0tan/Portfolio',
  },
  {
    key: 'deezerToSpotify',
    title: 'deezer-to-spotify',
    tags: [TAGS.python],
    links: [
      {
        src: deezerImageUrl,
        link: '',
      },
      {
        src: spotifyImageUrl,
        link: '',
      },
    ],
    github: 'https://github.com/Kab0tan/deezer-to-spotify',
  },
]

export const PORTFOLIO_TEXTS = {
  en: {
    title: 'Portfolio',
    description: `During my studies and free time, I've worked on a few projects that reflect
     my passion for programming and learning new tech stacks. I still continue to work on different personal
     projects whenever inspiration strikes. If you have any questions on one of those projects, feel free to contact me,
     I'll be happy to answer !`,
    projects: {
      rameo: `A live map of the Paris metro that shows where every train is,
         estimated from real-time arrival times. Still a work in progress.`,
      customRetroTerm: `A retro CRT terminal for Windows, macOS and Linux, inspired by cool-retro-term.
         Screen curvature, bloom, scanlines and amber, green or cyan phosphors are rendered through a WebGL pipeline.
         Live panels sit next to the shell (system stats, kernel log, audio spectrum, device map),
         and you can write your own as one small sandboxed JavaScript plugin. Still a work in progress.`,
      kanjiNoKabe: 'Small web appplication for practicing Kanjis from N5 to N1 Japanese level.',
      foodex: `A personal meal planner: a recipe catalogue, a drag-and-drop weekly plan,
         and a shopping list built from it automatically. Each user only sees their own data.
         There is no application backend: Supabase handles the database, authentication and photo storage,
         and Row Level Security enforces access directly in Postgres. Deployed on Vercel.`,
      quizium: `A customizable mobile quiz application built with React Native.
         Users can create their own quizzes and questions, with or without images, either
          one question at a time or by importing a CSV file.
          I also made a previous version of the app on Flutter.`,
      portfolio: "My personal portfolio website that you're currently on.",
      histoProject: `Small WIP webapp to vizualize data from Meta conversations (Facebook & Instagram).
        The app allows you to vizualize all messages from past conversations with someone by year, month or day.`,
      deezerToSpotify:
        'A semi-automatic script that allows you to convert your Deezer library into a Spotify playlist.',
    },
  },
  fr: {
    title: 'Portfolio',
    description: `Pendant mes études et mon temps libre, j'ai travaillé sur plusieurs projets qui
    reflètent ma passion pour la programmation et l'apprentissage de nouvelles technologies.
     Je continue toujours à travailler sur différents projets personnels dès que l'inspiration
      me vient. Si vous avez des questions sur l'un de ces projets, n'hésitez pas à me contacter,
       je serai ravi d'y répondre !`,
    projects: {
      rameo: `Une carte en direct du métro parisien qui affiche la position de chaque rame,
         estimée à partir des horaires de passage en temps réel. Projet toujours en cours de développement.`,
      customRetroTerm: `Un terminal rétro façon écran CRT pour Windows, macOS et Linux, inspiré de cool-retro-term.
         La courbure de l'écran, le bloom, les scanlines et les phosphores ambre, vert ou cyan sont rendus via un pipeline WebGL.
         Des panneaux en direct s'affichent à côté du shell (stats système, logs du noyau, spectre audio, carte des périphériques),
         et vous pouvez créer les vôtres sous forme d'un petit plugin JavaScript sandboxé. Projet toujours en cours de développement.`,
      kanjiNoKabe: `Petite application web de quiz pour m'entraîner sur les Kanjis du niveau N5 à N1 en Japonais.`,
      foodex: `Un planificateur de repas personnel : un catalogue de recettes, un planning hebdomadaire
         en glisser-déposer et une liste de courses générée automatiquement à partir de celui-ci.
         Chaque utilisateur ne voit que ses propres données. Pas de backend applicatif : Supabase gère la base de données,
         l'authentification et le stockage des photos, et la Row Level Security contrôle les accès directement dans Postgres.
         Déployé sur Vercel.`,
      quizium: `Une application mobile de quiz personnalisable sous react Native. L'utilisateur peut créer
         ses propres quiz et questions, avec ou sans images.
         Question par question ou par un import CSV.`,
      portfolio: 'Mon site portfolio personnel sur lequel vous êtes actuellement.',
      histoProject: `Petite application web (WIP) pour visualiser les données des conversations Meta (Facebook & Instagram).
        L'application permet de visualiser tous les messages des conversations passées avec quelqu'un, triés par année, mois ou jour.`,
      deezerToSpotify:
        'Script semi-automatique permettant de convertir votre bibliotheque Deezer en une playlist Spotify.',
    },
  },
}
