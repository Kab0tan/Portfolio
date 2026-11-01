<template>
  <div class="portfolio">
    <div class="portfolio__header">
      <span class="portfolio__header--title"> {{ t('portfolio.title') }} </span>
      <span class="portfolio__header--description"> {{ t('portfolio.description') }}</span>
    </div>
    <div class="portfolio__content">
      <span class="portfolio__content--title">Portfolio</span>
      <div class="portfolio__content--cards">
        <ThemedCard
          v-for="(project, index) in PORTFOLIO_PROJECTS"
          :key="project.key"
          :title="project.title"
          :tags="project.tags"
          :description="t(`portfolio.projects.${project.key}`)"
          :links="project.links"
          :left="String(index % 2 === 0)"
          :github="project.github"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './PortfolioView.scss'
import { PORTFOLIO_PROJECTS } from '@assets/constants/PortfolioTexts.ts'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
