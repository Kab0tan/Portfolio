<template>
  <div class="themed-card">
    <ElRow v-if="left" justify="center" class="themed-card__row">
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
          <div class="img"></div>
        </div>
      </ElCol>
    </ElRow>
    <!-- reverse disposition -->
    <ElRow v-else justify="center" class="themed-card__row">
      <ElCol :span="8">
        <div class="themed-card__image">
          <div class="img"></div>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const handleLinkGithub = () => {
  console.log('github')
}

interface Tag {
  name: string
}

defineProps({
  left: {
    type: Boolean,
    default: true,
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
  // image: {
  //   type: String, //TODO: maybe to change
  //   required: true,
  // },
})
</script>
