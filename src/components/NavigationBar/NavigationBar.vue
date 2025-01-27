<template>
  <header class="header">
    <nav class="nav-container">
      <MobileNavigationBar v-if="isMobile" />
      <ElRow v-else class="nav-row">
        <ElCol :span="8">
          <div class="nav-left">
            <RouterLink to="/" class="nav-text" :style="{ color: handleHighlight('about') }"
              >About</RouterLink
            >
            <RouterLink
              to="/experience"
              class="nav-text"
              :style="{ color: handleHighlight('experience') }"
              >Experience</RouterLink
            >
            <RouterLink
              to="/portfolio"
              class="nav-text"
              :style="{ color: handleHighlight('portfolio') }"
              >Portfolio</RouterLink
            >
            <RouterLink
              to="/contact"
              class="nav-text"
              :style="{ color: handleHighlight('contact') }"
              >Contact</RouterLink
            >
            <FontAwesomeIcon
              @click="handleLinkGithub"
              icon="fa-brands fa-github"
              class="nav-text--icon"
            />
            <FontAwesomeIcon
              @click="handleLinkLinkedin"
              icon="fa-brands fa-linkedin"
              class="nav-text--icon"
            />
          </div>
        </ElCol>
        <ElCol :span="8" :offset="8">
          <div class="nav-right">
            <ElSwitch
              v-model="locale"
              active-value="en"
              inactive-value="fr"
              inline-prompt
              active-text="en"
              inactive-text="fr"
              :class="isLight ? 'theme-switch-light' : 'theme-switch-dark'"
            />
            <ElSwitch
              v-model="isLight"
              :active-icon="Sunny"
              :inactive-icon="Moon"
              inline-prompt
              :class="isLight ? 'theme-switch-light' : 'theme-switch-dark'"
            />
            <a
              href="src/assets/resume/CV_justin_leddet.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="nav-btn--resume">
                Resume
                <FlagIcon code="gb" />
              </button>
            </a>
            <a
              href="src/assets/resume/CV_justin_leddet.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="nav-btn--resume">
                CV
                <FlagIcon code="fr" />
              </button>
            </a>
          </div>
        </ElCol>
      </ElRow>
    </nav>
  </header>
</template>

<script setup lang="ts">
import './NavigationBar.scss'
import { watch, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/composables/useTheme.ts'
import { useNavBarStore } from '@/stores/navbar'
import MobileNavigationBar from '@/components/NavigationBar/MobileNavigationBar.vue'

const { isLight, toggleTheme, highlightColor } = useTheme()

const navBarStore = useNavBarStore()
const { checkMobile } = navBarStore
const { isMobile, currentRouteName } = storeToRefs(navBarStore)

const { locale } = useI18n({ useScope: 'global' })

const handleLinkGithub = () => {
  window.open('https://github.com/Kab0tan', '_blank')
}
const handleLinkLinkedin = () => {
  window.open('https://www.linkedin.com/in/justin-leddet', '_blank')
}

const handleHighlight = (routeName: string) => {
  if (currentRouteName.value === routeName) return highlightColor.value
  return ''
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
watch(isLight, () => {
  toggleTheme()
})
</script>
