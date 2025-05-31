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
          <WorkCard v-for="(item, index) in contentCareer" :key="index" :title="rt(item.title)"
            :company="rt(item.company)" :description="rt(item.description)" :tags="item.tags" :skills="item.subjects" />
        </div>
      </div>
      <!-- formation -->
      <span class="experience__content--title">{{ t('experience.educationTitle') }}</span>
      <div class="experience__content__container">
        <div class="dot-timeline"></div>
        <div class="cards-container">
          <WorkCard v-for="(item, index) in contentEducation" :key="index" :title="rt(item.title)"
            :company="rt(item.company)" :description="rt(item.description)" :tags="item.tags" :skills="item.subjects" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ExperienceView.scss'
import type { WorkCardContent } from '@/types'
import { computed, type ComputedRef } from 'vue'
import WorkCard from '@components/WorkCard/WorkCard.vue'

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()

const contentCareer: ComputedRef<WorkCardContent[]> = computed(() => tm('experience.career'))
const contentEducation: ComputedRef<WorkCardContent[]> = computed(() => tm('experience.education'))
</script>
