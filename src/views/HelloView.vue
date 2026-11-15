<template>
  <main class="hello">
    <div class="hello__lang">
      <button
        v-for="lang in ['en', 'fr']"
        :key="lang"
        class="hello__lang-btn"
        :class="{ 'hello__lang-btn--active': locale === lang }"
        @click="locale = lang"
      >
        {{ lang.toUpperCase() }}
      </button>
    </div>

    <section class="hello__card">
      <img src="@/assets/images/pdp.jpg" class="hello__photo" alt="Justin Leddet" />
      <h1 class="hello__name">Justin Leddet</h1>
      <p class="hello__role">{{ t('hello.role') }}</p>

      <div class="hello__cv">
        <a :href="resumeEnURL" class="hello__btn hello__btn--primary" target="_blank" rel="noopener">
          <FontAwesomeIcon icon="fa-solid fa-download" />
          {{ t('hello.cvEn') }}
          <FlagIcon code="gb" />
        </a>
        <a :href="resumeFrURL" class="hello__btn hello__btn--primary" target="_blank" rel="noopener">
          <FontAwesomeIcon icon="fa-solid fa-download" />
          {{ t('hello.cvFr') }}
          <FlagIcon code="fr" />
        </a>
      </div>

      <button class="hello__btn hello__btn--secondary" @click="downloadVCard">
        <FontAwesomeIcon icon="fa-solid fa-address-card" />
        {{ t('hello.saveContact') }}
      </button>

      <button class="hello__btn hello__btn--secondary" @click="copyEmail">
        <FontAwesomeIcon icon="fa-solid fa-copy" />
        {{ t('hello.copyEmail') }}
      </button>

      <RouterLink to="/" class="hello__btn hello__btn--secondary">
        {{ t('hello.portfolio') }}
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
      </RouterLink>

      <div class="hello__socials">
        <a href="https://www.linkedin.com/in/justin-leddet" target="_blank" rel="noopener" aria-label="LinkedIn">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/Kab0tan" target="_blank" rel="noopener" aria-label="GitHub">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a :href="`mailto:${EMAIL}`" aria-label="Email">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import './HelloView.scss'
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import FlagIcon from 'vue3-flag-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const EMAIL = 'leddetj.ginp@gmail.com'

// Files in public/ keep a stable URL across builds (safe for a printed QR code)
const base = import.meta.env.BASE_URL
const resumeEnURL = `${base}resume/CV_justin_leddet_EN.pdf`
const resumeFrURL = `${base}resume/CV_justin_leddet_FR.pdf`

const { t, locale } = useI18n({ useScope: 'global' })

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL)
    ElMessage({ message: t('hello.emailCopied'), type: 'success' })
  } catch {
    // Clipboard blocked: show the address so it can be copied by hand
    ElMessage({ message: EMAIL, type: 'info', duration: 6000 })
  }
}

const downloadVCard = () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Leddet;Justin;;;',
    'FN:Justin Leddet',
    `TITLE:${t('hello.role')}`,
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    'URL:https://www.linkedin.com/in/justin-leddet',
    `URL:${window.location.origin}${base}`,
    'END:VCARD',
  ].join('\r\n')
  const url = URL.createObjectURL(new Blob([vcard], { type: 'text/vcard' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'Justin_Leddet.vcf'
  a.click()
  URL.revokeObjectURL(url)
}

// Keep this page out of search results
let robotsMeta: HTMLMetaElement | null = null
onMounted(() => {
  if (navigator.language.toLowerCase().startsWith('fr')) locale.value = 'fr'
  robotsMeta = document.createElement('meta')
  robotsMeta.name = 'robots'
  robotsMeta.content = 'noindex'
  document.head.appendChild(robotsMeta)
})
onUnmounted(() => robotsMeta?.remove())
</script>
