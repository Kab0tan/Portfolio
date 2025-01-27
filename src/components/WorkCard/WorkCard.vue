<template>
  <div class="work-card">
    <div class="work-card--title">
      {{ title }}
    </div>
    <ElRow class="work-card__tags">
      <div v-for="tag in tags" :key="tag.name" class="work-card__tags--tag">{{ tag.name }}</div>
    </ElRow>
    <div class="work-card--description">
      {{ description }}
    </div>
    <div>
      <div class="work-card--skills">{{ t('experience.skills') }}:</div>
      <span v-for="(skill, index) in skills" :key="skill" class="work-card--skills-text">
        {{ skill }}
        <span v-if="skills && index < skills.length - 1" class="highlight"> • </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './WorkCard.scss'
import type { Tag } from '@/types.ts'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array<Tag>,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array<string>,
    required: false,
  },
})
</script>
