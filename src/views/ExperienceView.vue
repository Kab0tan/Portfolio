<template>
  <div class="experience">
    <div class="experience__header">
      <span class="experience__header--title"> {{ t('experience.title') }}</span>
      <span class="experience__header--subtitle"> {{ t('experience.subtitle') }} </span>
    </div>
    <div class="experience__content">
      <!-- career -->
      <span class="experience__content--title">{{ t('experience.career') }}</span>
      <div class="experience__content__container">
        <div class="dot-timeline"></div>
        <div class="cards-container">
          <WorkCard
            title="Web Developer"
            :tags="tags"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <WorkCard
            title="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <WorkCard
            title="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
      <!-- formation -->
      <span class="experience__content--title">{{ t('experience.formation') }}</span>
      <div class="experience__content__container">
        <div class="dot-timeline"></div>
        <div class="cards-container">
          <WorkCard
            title="Web Developer"
            :tags="tags"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <WorkCard
            title="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <WorkCard
            title="Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
const { t } = useI18n()

const tags = [{ name: '2020-2024' }, { name: 'Grenoble' }, { name: 'France' }]
</script>
