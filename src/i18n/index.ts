import { createI18n } from 'vue-i18n'
import { ABOUT_TEXTS } from '@assets/constants/AboutTexts.ts'
import { EXPERIENCE_TEXTS } from '@assets/constants/ExperienceTexts.ts'
import { PORTFOLIO_TEXTS } from '@assets/constants/PortfolioTexts.ts'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  legacy: false,
  messages: {
    en: {
      about: {
        h1: ABOUT_TEXTS.en.H1,
        title: ABOUT_TEXTS.en.TITLE,
        description: ABOUT_TEXTS.en.DESCRIPTION,
        content: ABOUT_TEXTS.en.CONTENT,
      },
      experience: {
        title: EXPERIENCE_TEXTS.en.title,
        subtitle: EXPERIENCE_TEXTS.en.subtitle,
        careerTitle: EXPERIENCE_TEXTS.en.careerTitle,
        educationTitle: EXPERIENCE_TEXTS.en.educationTitle,
        career: EXPERIENCE_TEXTS.en.career,
        education: EXPERIENCE_TEXTS.en.education,
      },
      portfolio: {
        title: PORTFOLIO_TEXTS.en.title,
        subtitle: PORTFOLIO_TEXTS.en.subtitle,
        content: PORTFOLIO_TEXTS.en.content,
      },
      contact: {
        title: 'Get in touch',
        subtitle:
          "Feel free to contact me ! I'm open to all opportunities, or if you have any question on a project i'll be happy to answer.",
        placeholderName: 'Your name',
        placeholderEmail: 'Your email',
        placeholderMessage: 'Your message',
        submit: 'Send message',
      },
    },
    fr: {
      about: {
        h1: ABOUT_TEXTS.fr.H1,
        title: ABOUT_TEXTS.fr.TITLE,
        description: ABOUT_TEXTS.fr.DESCRIPTION,
      },
      experience: {
        title: EXPERIENCE_TEXTS.fr.title,
        subtitle: EXPERIENCE_TEXTS.fr.subtitle,
        careerTitle: EXPERIENCE_TEXTS.fr.careerTitle,
        educationTitle: EXPERIENCE_TEXTS.fr.educationTitle,
        career: EXPERIENCE_TEXTS.fr.career,
        education: EXPERIENCE_TEXTS.fr.education,
      },
      portfolio: {
        title: PORTFOLIO_TEXTS.fr.title,
        subtitle: PORTFOLIO_TEXTS.fr.subtitle,
        content: PORTFOLIO_TEXTS.fr.content,
      },
      contact: {
        title: 'Contact',
        subtitle:
          "N'hésitez pas à me contacter ! Je suis ouvert aux opportunités et je serai ravi de répondre à vos questions sur un projet si vous en avez.",
        placeholderName: 'Votre nom',
        placeholderEmail: 'Votre email',
        placeholderMessage: 'Votre message',
        submit: 'Envoyer',
      },
    },
  },
})
