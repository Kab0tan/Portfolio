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
      <RouterLink to="/" class="nav-mobile-menu--text" :style="{ color: handleHighlight('about') }">
        About
      </RouterLink>
      <RouterLink
        to="/experience"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('experience') }"
      >
        Experience
      </RouterLink>
      <RouterLink
        to="/portfolio"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('portfolio') }"
      >
        Portfolio
      </RouterLink>
      <RouterLink
        to="/contact"
        class="nav-mobile-menu--text"
        :style="{ color: handleHighlight('contact') }"
      >
        Contact
      </RouterLink>
      <button class="nav-mobile-menu--btn">
        Resume
        <FlagIcon code="gb" />
      </button>
      <button class="nav-mobile-menu--btn">
        CV
        <FlagIcon code="fr" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import './MobileNavigationBar.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useTheme } from '@/composables/useTheme.ts'
import ThemedSwitch from '@/components/ThemedSwitch/ThemedSwitch.vue'
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { useNavBarStore } from '@/stores/navbar'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const navBarStore = useNavBarStore()
const { isMenuOpen } = storeToRefs(navBarStore)
const { toggleMenu, handleHighlight } = navBarStore

const { isLight, toggleTheme } = useTheme()
const { locale } = useI18n({ useScope: 'global' })

watch(isLight, () => {
  toggleTheme()
})
</script>
