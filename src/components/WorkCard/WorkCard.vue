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
    <div class="work-card--skills">
      <span>Subjects : {{ skills }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './WorkCard.scss'

interface Tag {
  name: string
}

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
    type: String,
    required: false,
  },
})
</script>
