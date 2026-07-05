<template>
  <div class="experience">
    <div class="experience__header">
      <span class="experience__header--title">
        {{ t('experience.title') }}
      </span>
      <span class="experience__header--description">
        {{ t('experience.description') }}
      </span>
    </div>
    <div class="experience__content">
      <div class="experience__content__main">
        <!-- career -->
        <span class="experience__content--title">
          {{ t('experience.careerTitle') }}
        </span>
        <div class="experience__content__container">
          <div class="dot-timeline" />
          <div class="cards-container">
            <div
              v-for="(item, index) in contentCareer"
              :key="index"
              :id="`career-${index}`"
              class="exp-anchor"
            >
              <WorkCard
                :title="rt(item.title)"
                :company="rt(item.company)"
                :description="rt(item.description)"
                :tags="item.tags"
                :skills="item.subjects"
              />
            </div>
          </div>
        </div>
        <!-- formation -->
        <span class="experience__content--title">
          {{ t('experience.educationTitle') }}
        </span>
        <div class="experience__content__container">
          <div class="dot-timeline" />
          <div class="cards-container">
            <div
              v-for="(item, index) in contentEducation"
              :key="index"
              :id="`education-${index}`"
              class="exp-anchor"
            >
              <WorkCard
                :title="rt(item.title)"
                :company="rt(item.company)"
                :description="rt(item.description)"
                :tags="item.tags"
                :skills="item.subjects"
              />
            </div>
          </div>
        </div>
      </div>
      <TableOfContents
        class="experience__content__toc"
        :sections="tocSections"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import './ExperienceView.scss'
import type { WorkCardContent } from '@/types'
import { computed, type ComputedRef } from 'vue'
import WorkCard from '@components/WorkCard/WorkCard.vue'
import TableOfContents from '@components/TableOfContents/TableOfContents.vue'

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()

const contentCareer: ComputedRef<WorkCardContent[]> = computed(() =>
  tm('experience.career'),
)
const contentEducation: ComputedRef<WorkCardContent[]> = computed(() =>
  tm('experience.education'),
)

const tocSections = computed(() => [
  {
    id: 'career',
    title: t('experience.careerTitle'),
    items: contentCareer.value.map((item, index) => ({
      id: `career-${index}`,
      label: rt(item.title),
      period: item.tags?.[0]?.name,
    })),
  },
  {
    id: 'education',
    title: t('experience.educationTitle'),
    items: contentEducation.value.map((item, index) => ({
      id: `education-${index}`,
      label: rt(item.title),
      period: item.tags?.[0]?.name,
    })),
  },
])
</script>
