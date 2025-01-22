<template>
  <div class="experience">
    <div class="experience__header">
      <span class="experience__header--title"> {{ t('experience.title') }}</span>
      <span class="experience__header--description"> {{ t('experience.description') }} </span>
    </div>
    <div class="experience__content">
      <!-- career -->
      <span class="experience__content--title">{{ t('experience.careerTitle') }}</span>
      <div class="experience__content__container">
        <div class="dot-timeline"></div>
        <div class="cards-container">
          <WorkCard
            v-for="item in tm('experience.career')"
            :key="item"
            :title="rt(item.title)"
            :description="rt(item.description)"
            :tags="item.tags"
            :skills="rt(item.subjects)"
          />
        </div>
      </div>
      <!-- formation -->
      <span class="experience__content--title">{{ t('experience.educationTitle') }}</span>
      <div class="experience__content__container">
        <div class="dot-timeline"></div>
        <div class="cards-container">
          <WorkCard
            v-for="item in tm('experience.education')"
            :key="item"
            :title="rt(item.title)"
            :description="rt(item.description)"
            :tags="item.tags"
            :skills="rt(item.subjects)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ExperienceView.scss'
import WorkCard from '@components/WorkCard/WorkCard.vue'

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()
</script>
