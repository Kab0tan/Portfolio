import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  legacy: false,
  messages: {
    en: {
      messages: {},
      about: {
        h1: 'Hi, my name is',
        title: "I'm a software engineer.",
      },
      experience: {
        title: 'Experience',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        career: 'Careers',
        formation: 'Education',
      },
      portfolio: {
        title: 'Portfolio',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      },
    },
    fr: {
      messages: {},
      about: {
        h1: "Bonjour, je m'appelle",
        title: 'Je suis un ingénieur logiciel.',
      },
      experience: {
        title: 'Expérience',
        subtitle: 'Oui oui très bien',
        career: 'Parcours professionnel',
        formation: 'Formation',
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Oui oui vraiment très bien',
      },
    },
  },
})
