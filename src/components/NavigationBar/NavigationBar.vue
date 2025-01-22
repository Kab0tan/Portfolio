<template>
  <header class="header">
    <nav class="nav-container">
      <ElRow :gutter="0" class="nav-row">
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
            ></ElSwitch>
            <button class="nav-btn--resume">
              Resume
              <FlagIcon code="gb" />
            </button>
            <button class="nav-btn--resume">
              Resume
              <FlagIcon code="fr" />
            </button>
          </div>
        </ElCol>
      </ElRow>
    </nav>
  </header>
</template>

<script setup lang="ts">
import './NavigationBar.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/composables/useTheme.ts'
const { isLight, toggleTheme } = useTheme()
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const { locale } = useI18n({ useScope: 'global' })
const router = useRouter()

const currentRouteName = computed(() => router.currentRoute.value.name)

const handleLinkGithub = () => {
  window.open('https://github.com/Kab0tan', '_blank')
}
const handleLinkLinkedin = () => {
  window.open('https://www.linkedin.com/in/justin-leddet', '_blank')
}

const handleHighlight = (routeName: string) => {
  if (isLight.value) {
    if (currentRouteName.value === routeName) return '#ff810d'
    return ''
  } else {
    if (currentRouteName.value === routeName) return '#46f3ff'
    return ''
  }
}
watch(isLight, () => {
  toggleTheme()
})
</script>
