export const PORTFOLIO_TEXTS = {
  en: {
    title: 'Portfolio',
    subtitle: `During my studies and free time, I've worked on a few projects that reflect
     my passion for programming and learning new tech stacks. I still continue to work on different personal
     projects whenever inspiration strikes. If you have any questions on one of those projects, feel free to contact me,
     I'll be happy to answer !`,
    content: [
      {
        title: 'Kanji no kabe',
        tags: [
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'Element Plus', bgColor: '#409EFF', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
        ],
        description: 'Small web appplication for practicing Kanjis from N5 to N1 Japanese level.',
        links: [
          {
            src: 'src/assets/images/KanjinoKabe.png',
            link: '',
          },
        ],
        left: 'true',
        github: '',
      },
      {
        title: 'Quizium',
        tags: [
          { name: 'React Native' },
          { name: 'SQLite' },
          { name: 'Expo' },
          { name: 'TypeScript' },
        ],
        description: `A customizable mobile quiz application built with React Native.
         Users can create their own quizzes and questions, with or without images, either
          one question at a time or by importing a CSV file.`,
        links: [
          {
            src: 'src/assets/images/quizium.jpg',
            link: '',
          },
        ],
        github: '',
        left: 'false',
      },
      {
        title: 'Portfolio',
        tags: [
          { name: 'Vue3' },
          { name: 'SCSS' },
          { name: 'Vite' },
          { name: 'Pinia' },
          { name: 'TypeScript' },
          { name: 'Element Plus' },
        ],
        description: "My personal portfolio website that you're currently on.",
        github: '',
        left: 'true',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python' }],
        description:
          'A semi-automatic script that allows you to convert your Deezer library into a Spotify playlist.',
        links: [
          {
            src: 'src/assets/images/deezer.jpg',
            link: '',
          },
          {
            src: 'src/assets/images/spotify.png',
            link: '',
          },
        ],
        left: 'false',
        github: '',
      },
    ],
  },
  fr: {
    title: 'Portfolio',
    subtitle: 'Cecie est ma page portfolio',
    content: [
      {
        title: 'Kanji no Kabe',
        tags: [
          { name: 'Vue3' },
          { name: 'Element Plus' },
          { name: 'SCSS' },
          { name: 'Vite' },
          { name: 'Pinia' },
        ],
        description: `Petite application web de quiz pour m'entraîner sur les Kanjis du niveau N5 à N1 en Japonais.`,
        links: [
          {
            src: 'src/assets/images/KanjinoKabe.png',
            link: '',
          },
        ],
        github: '',
        left: 'true',
      },
      {
        title: 'Quizium',
        tags: [
          { name: 'React Native' },
          { name: 'SQLite' },
          { name: 'Expo' },
          { name: 'TypeScript' },
        ],
        description: `Une application mobile de quiz personnalisable sous react Native. L'utilisateur peut créer
         ses propres quiz et questions, avec ou sans images.
         Question par question ou par un import CSV.`,
        links: [
          {
            src: 'src/assets/images/quizium.jpg',
            link: '',
          },
        ],
        github: '',
        left: 'false',
      },
      {
        title: 'Portfolio',
        tags: [
          { name: 'Vue3' },
          { name: 'SCSS' },
          { name: 'Vite' },
          { name: 'Pinia' },
          { name: 'TypeScript' },
          { name: 'Element Plus' },
        ],
        description: 'Mon site portfolio personnel sur lequel vous êtes actuellement.',
        github: '',
        left: 'true',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python' }],
        description:
          'Script semi-automatique permettant de convertir votre bibliotheque Deezer en une playlist Spotify.',
        links: [
          {
            src: 'src/assets/images/deezer.jpg',
            link: '',
          },
          {
            src: 'src/assets/images/spotify.png',
            link: '',
          },
        ],
        github: '',
        left: 'false',
      },
    ],
  },
}
