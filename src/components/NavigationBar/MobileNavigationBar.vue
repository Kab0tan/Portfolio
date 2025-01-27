<template>
  <ElRow class="nav-mobile-row">
    <ThemedSwitch
      v-model:model-value="locale"
      :is-icon="false"
      active-text="en"
      inactive-text="fr"
      :bg-color="isLight"
    />
    <ThemedSwitch v-model:model-value="isLight" :active-icon="Sunny" :inactive-icon="Moon" />
    <div class="nav-mobile-icon-container">
      <FontAwesomeIcon
        v-if="!isMenuOpen"
        @click="toggleMenu"
        icon="fa-solid fa-bars"
        class="nav-mobile-text--icon"
      />
      <FontAwesomeIcon
        v-else
        @click="toggleMenu"
        icon="fa-solid fa-xmark"
        class="nav-mobile-text--icon"
      />
    </div>
  </ElRow>
  <Transition name="slide">
    <div v-if="isMenuOpen" class="nav-mobile-menu">
      <RouterLink
        to="/"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('about') }"
        @click="handleToggle"
      >
        About
      </RouterLink>
      <RouterLink
        to="/experience"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('experience') }"
        @click="handleToggle"
      >
        Experience
      </RouterLink>
      <RouterLink
        to="/portfolio"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('portfolio') }"
        @click="handleToggle"
      >
        Portfolio
      </RouterLink>
      <RouterLink
        to="/contact"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('contact') }"
        @click="handleToggle"
      >
        Contact
      </RouterLink>
      <a href="src\assets\resume\CV_justin_leddet.pdf" target="_blank" rel="noopener noreferrer">
        <button class="nav-mobile-menu--btn">
          Resume
          <FlagIcon code="gb" />
        </button>
      </a>
      <a href="src\assets\resume\CV_justin_leddet.pdf" target="_blank" rel="noopener noreferrer">
        <button class="nav-mobile-menu--btn">
          CV
          <FlagIcon code="fr" />
        </button>
      </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import './MobileNavigationBar.scss'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/composables/useTheme.ts'
import { useNavBarStore } from '@/stores/navbar'
import ThemedSwitch from '@/components/ThemedSwitch/ThemedSwitch.vue'

const { isLight, toggleTheme, highlightColor } = useTheme()

const navBarStore = useNavBarStore()
const { isMenuOpen, currentRouteName } = storeToRefs(navBarStore)
const { toggleMenu } = navBarStore

const { locale } = useI18n({ useScope: 'global' })

const handleHighlight = (routeName: string) => {
  if (currentRouteName.value === routeName) return highlightColor.value
  return ''
}

const handleToggle = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
  toggleMenu()
}

watch(isLight, () => {
  toggleTheme()
})
</script>
