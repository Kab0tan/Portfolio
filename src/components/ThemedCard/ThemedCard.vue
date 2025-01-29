<template>
  <div v-if="isMobile" class="themed-card">
    <div class="themed-card__content">
      <div class="themed-card__content--title">{{ title }}</div>
      <!-- tag section -->
      <ElRow class="themed-card__tags">
        <div
          v-for="tag in tags"
          :key="tag.name"
          class="themed-card__tags--tag"
          :style="{ 'background-color': tag.bgColor, color: tag.txtColor }"
        >
          {{ tag.name }}
        </div>
      </ElRow>
      <div class="themed-card__content--description">
        {{ description }}
      </div>
      <ElRow v-if="hasGithub()" class="themed-card__content--icons">
        <FontAwesomeIcon
          icon="fa-brands fa-github"
          style="cursor: pointer"
          @click="handleLinkGithub(github as string)"
        />
      </ElRow>
      <div class="themed-card__image">
        <div class="img">
          <ThemedImage :links="links" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="themed-card">
    <ElRow v-if="handleLeftCard()" justify="center" class="themed-card__row">
      <ElCol :span="15">
        <div class="themed-card__content">
          <div class="themed-card__content--title">{{ title }}</div>
          <!-- tag section -->
          <ElRow class="themed-card__tags">
            <div
              v-for="tag in tags"
              :key="tag.name"
              class="themed-card__tags--tag"
              :style="{ 'background-color': tag.bgColor, color: tag.txtColor }"
            >
              {{ tag.name }}
            </div>
          </ElRow>
          <div class="themed-card__content--description">
            {{ description }}
          </div>
          <ElRow v-if="hasGithub()" class="themed-card__content--icons">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              style="cursor: pointer"
              @click="handleLinkGithub(github as string)"
            />
          </ElRow>
        </div>
      </ElCol>
      <ElCol :span="9">
        <div class="themed-card__image">
          <div class="img">
            <ThemedImage :links="links" />
          </div>
        </div>
      </ElCol>
    </ElRow>
    <!-- reverse disposition -->
    <ElRow v-else justify="center" class="themed-card__row">
      <ElCol :span="9">
        <div class="themed-card__image">
          <div class="img">
            <ThemedImage :links="links" />
          </div>
        </div>
      </ElCol>
      <ElCol :span="15">
        <div class="themed-card__content">
          <div class="themed-card__content--title">{{ title }}</div>
          <ElRow class="themed-card__tags">
            <div
              v-for="tag in tags"
              :key="tag.name"
              class="themed-card__tags--tag"
              :style="{ 'background-color': tag.bgColor, color: tag.txtColor }"
            >
              {{ tag.name }}
            </div>
          </ElRow>
          <div class="themed-card__content--description">
            {{ description }}
          </div>
          <div v-if="hasGithub()" class="themed-card__content--icons">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              style="cursor: pointer"
              @click="handleLinkGithub(github as string)"
            />
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
import { storeToRefs } from 'pinia'
import { useNavBarStore } from '@/stores/navbar'
const navBarStore = useNavBarStore()
const { isMobile } = storeToRefs(navBarStore)

const { left, github } = defineProps({
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
  links: {
    type: Array<Image>,
    required: false,
  },
  github: {
    type: String,
  },
})

const hasGithub = () => {
  if (github !== '') return true
  return false
}

const handleLeftCard = () => {
  if (left === 'true') return true
  return false
}

const handleLinkGithub = (githubLink: string) => {
  window.open(githubLink, '_blank')
}
</script>
