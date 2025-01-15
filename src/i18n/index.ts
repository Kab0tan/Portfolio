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
        subtitle: 'Oui oui très bien',
        career: 'Careers',
        formation: 'Education',
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
    },
  },
})
