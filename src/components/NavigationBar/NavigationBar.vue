<template>
  <header class="header">
    <nav class="nav-container">
      <ElRow :gutter="0" class="nav-row">
        <ElCol :span="8">
          <div class="nav-left">
            <RouterLink to="/" class="nav-text">About</RouterLink>
            <RouterLink to="/experience" class="nav-text">Experience</RouterLink>
            <RouterLink to="/portfolio" class="nav-text">Portfolio</RouterLink>
            <RouterLink to="/contact" class="nav-text">Contact</RouterLink>
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
            <ThemedSwitch :size="36" v-model:model-value="screenMode" />
            <ElSwitch
              v-model="locale"
              active-value="en"
              inactive-value="fr"
              inline-prompt
              active-text="en"
              inactive-text="fr"
            />
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
import ThemedSwitch from '@/components/ThemedSwitch/ThemedSwitch.vue'
import FlagIcon from 'vue3-flag-icons'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

const screenMode = ref(false) //false = dark mode

const handleLinkGithub = () => {
  console.log('github')
}
const handleLinkLinkedin = () => {
  console.log('linkedin')
}
</script>
