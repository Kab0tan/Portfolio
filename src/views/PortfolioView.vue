<template>
  <div class="portfolio">
    <div class="portfolio__header">
      <span class="portfolio__header--title"> {{ t('portfolio.title') }} </span>
      <span class="portfolio__header--subtitle"> {{ t('portfolio.subtitle') }}</span>
    </div>
    <div class="portfolio__content">
      <span class="portfolio__content--title">Portfolio</span>
      <div class="portfolio__content--cards">
        <ThemedCard
          title="Kabe no kanji"
          :tags="tags"
          description="Je suis passionné par la photographie et la vidéo."
          :icons="true"
        />
        <ThemedCard
          :left="false"
          title="Coding Problems"
          description="Je fais des Leecode et du Advent Of Code."
          :icons="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './PortfolioView.scss'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const tags = [{ name: 'React' }, { name: 'Typescript' }, { name: 'Javascript' }]
</script>
