export const PORTFOLIO_TEXTS = {
  en: {
    title: 'Portfolio',
    description: `During my studies and free time, I've worked on a few projects that reflect
     my passion for programming and learning new tech stacks. I still continue to work on different personal
     projects whenever inspiration strikes. If you have any questions on one of those projects, feel free to contact me,
     I'll be happy to answer !`,
    content: [
      {
        title: 'Kanji no Kabe',
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
            link: 'https://github.com/Kab0tan/KanjiNoKabe/',
          },
        ],
        left: 'true',
        github: 'https://github.com/Kab0tan/KanjiNoKabe/',
      },
      {
        title: 'Quizium',
        tags: [
          { name: 'React Native', bgColor: '#61DAFB' },
          { name: 'SQLite', bgColor: 'white', txtColor: '#003B57' },
          { name: 'Expo', bgColor: '#000020', txtColor: 'white' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
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
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
          { name: 'Element Plus', bgColor: '#409EFF', txtColor: 'white' },
        ],
        description: "My personal portfolio website that you're currently on.",
        github: '',
        left: 'true',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' }],
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
    description: `Pendant mes études et mon temps libre, j'ai travaillé sur plusieurs projets qui 
    reflètent ma passion pour la programmation et l'apprentissage de nouvelles technologies.
     Je continue toujours à travailler sur différents projets personnels dès que l'inspiration
      me vient. Si vous avez des questions sur l'un de ces projets, n'hésitez pas à me contacter,
       je serai ravi d'y répondre !`,
    content: [
      {
        title: 'Kanji no Kabe',
        tags: [
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'Element Plus', bgColor: '#409EFF', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
        ],
        description: `Petite application web de quiz pour m'entraîner sur les Kanjis du niveau N5 à N1 en Japonais.`,
        links: [
          {
            src: 'src/assets/images/KanjinoKabe.png',
            link: 'https://github.com/Kab0tan/KanjiNoKabe/',
          },
        ],
        github: 'https://github.com/Kab0tan/KanjiNoKabe/',
        left: 'true',
      },
      {
        title: 'Quizium',
        tags: [
          { name: 'React Native', bgColor: '#61DAFB' },
          { name: 'SQLite', bgColor: 'white', txtColor: '#003B57' },
          { name: 'Expo', bgColor: '#000020', txtColor: 'white' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
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
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
          { name: 'Element Plus', bgColor: '#409EFF', txtColor: 'white' },
        ],
        description: 'Mon site portfolio personnel sur lequel vous êtes actuellement.',
        github: '',
        left: 'true',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' }],
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
