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
    },
    fr: {
      messages: {},
      about: {
        h1: "Bonjour, je m'appelle",
        title: 'Je suis un ingénieur logiciel.',
      },
    },
  },
})
