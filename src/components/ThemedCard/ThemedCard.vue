<template>
  <div class="themed-card">
    <ElRow v-if="handleLeftCard()" justify="center" class="themed-card__row">
      <ElCol :span="16">
        <div class="themed-card__content">
          <div class="themed-card__content--title">{{ title }}</div>
          <ElRow class="themed-card__tags">
            <div v-for="tag in tags" :key="tag.name" class="themed-card__tags--tag">
              {{ tag.name }}
            </div>
          </ElRow>
          <div class="themed-card__content--description">
            {{ description }}
          </div>
          <div v-if="icons" class="themed-card__content--icons">
            <FontAwesomeIcon icon="fa-brands fa-github" @click="handleLinkGithub" />
          </div>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="themed-card__image">
          <div class="img">
            <ThemedImage :links="links" />
          </div>
        </div>
      </ElCol>
    </ElRow>
    <!-- reverse disposition -->
    <ElRow v-else justify="center" class="themed-card__row">
      <ElCol :span="8">
        <div class="themed-card__image">
          <div class="img">
            <ThemedImage :links="links" />
          </div>
        </div>
      </ElCol>
      <ElCol :span="16">
        <div class="themed-card__content">
          <div class="themed-card__content--title">{{ title }}</div>
          <div class="themed-card__content--description">
            {{ description }}
          </div>
          <div v-if="icons" class="themed-card__content--icons">
            <FontAwesomeIcon icon="fa-brands fa-github" @click="handleLinkGithub" />
          </div>
        </div>
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import './ThemedCard.scss'
import type { Tag, Image } from '@/types.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ThemedImage from '@components/ThemedImage/ThemedImage.vue'

const handleLinkGithub = () => {
  console.log('github')
}

const { left, title, description, tags, icons, links } = defineProps({
  left: {
    type: String,
    default: 'true',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array<Tag>,
    required: false,
  },
  icons: {
    type: Boolean,
    default: false,
  },
  links: {
    type: Array<Image>,
    required: false,
  },
})

const handleLeftCard = () => {
  if (left === 'true') return true
  return false
}
</script>
