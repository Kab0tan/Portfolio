<template>
  <header class="header">
    <nav class="nav-container">
      <MobileNavigationBar v-if="isMobile" />
      <ElRow v-else class="nav-row">
        <ElCol :span="10">
          <div class="nav-left">
            <img src="/favicon.ico" class="nav-logo" />
            <RouterLink to="/" class="nav-text" :style="{ color: handleHighlight('about') }"
              >{{ t('nav.about') }}</RouterLink
            >
            <RouterLink
              to="/experience"
              class="nav-text"
              :style="{ color: handleHighlight('experience') }"
              >{{ t('nav.experience') }}</RouterLink
            >
            <RouterLink
              to="/portfolio"
              class="nav-text"
              :style="{ color: handleHighlight('portfolio') }"
              >{{ t('nav.portfolio') }}</RouterLink
            >
            <RouterLink
              to="/contact"
              class="nav-text"
              :style="{ color: handleHighlight('contact') }"
              >{{ t('nav.contact') }}</RouterLink
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
        <ElCol :span="8" :offset="6">
          <div class="nav-right">
            <ThemedSwitch
              v-model:model-value="locale"
              :is-icon="false"
              active-text="en"
              inactive-text="fr"
              :bg-color="isLight"
            />
            <ThemedSwitch v-model:model-value="isLight" :active-icon="Sunny" :inactive-icon="Moon" />
            <a :href="resumeEnURL" target="_blank" rel="noopener noreferrer">
              <button class="nav-btn--resume">
                {{ t('nav.resume') }}
                <FlagIcon code="gb" />
              </button>
            </a>
            <a :href="resumeFrURL" target="_blank" rel="noopener noreferrer">
              <button class="nav-btn--resume">
                {{ t('nav.cv') }}
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
import resumeEnURL from '/resume/CV_justin_leddet_EN.pdf?url'
import resumeFrURL from '/resume/CV_justin_leddet_FR.pdf?url'
import { watch, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/composables/useTheme.ts'
import { useNavBarStore } from '@/stores/navbar'
import MobileNavigationBar from '@/components/NavigationBar/MobileNavigationBar.vue'
import ThemedSwitch from '@/components/ThemedSwitch/ThemedSwitch.vue'

const { isLight, toggleTheme, highlightColor } = useTheme()

const navBarStore = useNavBarStore()
const { checkMobile } = navBarStore
const { isMobile, currentRouteName } = storeToRefs(navBarStore)

const { t, locale } = useI18n({ useScope: 'global' })

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
