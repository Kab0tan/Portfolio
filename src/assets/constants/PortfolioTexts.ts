import kanjiNoKabeImageUrl from '/src/assets/images/KanjinoKabe.png?url'
import deezerImageUrl from '/src/assets/images/deezer.jpg?url'
import spotifyImageUrl from '/src/assets/images/spotify.png?url'
import quizImageUrl from '/src/assets/images/quizium.jpg?url'
import histoImageUrl from '/src/assets/images/histoProject.png?url'

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
            src: kanjiNoKabeImageUrl,
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
          { name: 'SQLite', bgColor: '#d6d6d6', txtColor: '#003B57' },
          { name: 'Expo', bgColor: '#000020', txtColor: 'white' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
        ],
        description: `A customizable mobile quiz application built with React Native.
         Users can create their own quizzes and questions, with or without images, either
          one question at a time or by importing a CSV file.
          I also made a previous version of the app on Flutter.`,
        links: [
          {
            src: quizImageUrl,
            link: 'https://github.com/Kab0tan/Quizium',
          },
        ],
        github: 'https://github.com/Kab0tan/Quizium',
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
        github: 'https://github.com/Kab0tan/Portfolio',
        left: 'true',
      },
      {
        title: 'HistoProject',
        tags: [
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
          { name: 'Javascript', bgColor: '#f7df65' },
          { name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' },
          { name: 'Flask', bgColor: '#3BABC3' },
          { name: 'PostgreSQL', bgColor: '#336791', txtColor: 'white' },
        ],
        description: `Small WIP webapp to vizualize data from Meta conversations (Facebook & Instagram).
        The app allows you to vizualize all messages from past conversations with someone by year, month or day.`,
        links: [
          {
            src: histoImageUrl,
            link: '',
          },
        ],
        github: '',
        left: 'false',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' }],
        description:
          'A semi-automatic script that allows you to convert your Deezer library into a Spotify playlist.',
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
        left: 'true',
        github: 'https://github.com/Kab0tan/deezer-to-spotify',
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
            src: kanjiNoKabeImageUrl,
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
          { name: 'SQLite', bgColor: ' #d6d6d6', txtColor: '#003B57' },
          { name: 'Expo', bgColor: '#000020', txtColor: 'white' },
          { name: 'TypeScript', bgColor: '#3178C6', txtColor: 'white' },
        ],
        description: `Une application mobile de quiz personnalisable sous react Native. L'utilisateur peut créer
         ses propres quiz et questions, avec ou sans images.
         Question par question ou par un import CSV.`,
        links: [
          {
            src: quizImageUrl,
            link: 'https://github.com/Kab0tan/Quizium',
          },
        ],
        github: 'https://github.com/Kab0tan/Quizium',
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
        github: 'https://github.com/Kab0tan/Portfolio',
        left: 'true',
      },
      {
        title: 'HistoProject',
        tags: [
          { name: 'Vue3', bgColor: '#41B883', txtColor: 'white' },
          { name: 'SCSS', bgColor: '#c69', txtColor: 'white' },
          { name: 'Vite', bgColor: '#ffcb3b' },
          { name: 'Pinia', bgColor: '#f7df65' },
          { name: 'Javascript', bgColor: '#f7df65' },
          { name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' },
          { name: 'Flask', bgColor: '#3BABC3' },
          { name: 'PostgreSQL', bgColor: '#336791', txtColor: 'white' },
        ],
        description: `Petite application web (WIP) pour visualiser les données des conversations Meta (Facebook & Instagram).
        L'application permet de visualiser tous les messages des conversations passées avec quelqu'un, triés par année, mois ou jour.`,
        links: [
          {
            src: histoImageUrl,
            link: '',
          },
        ],
        github: '',
        left: 'false',
      },
      {
        title: 'deezer-to-spotify',
        tags: [{ name: 'Python', bgColor: '#4584b6', txtColor: '#ffde57' }],
        description:
          'Script semi-automatique permettant de convertir votre bibliotheque Deezer en une playlist Spotify.',
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
        left: 'true',
      },
    ],
  },
}
