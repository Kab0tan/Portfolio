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
          v-for="(item, index) in content"
          :key="index"
          :title="rt(item.title)"
          :tags="item.tags"
          :description="rt(item.description)"
          :links="item.links"
          :left="rt(item.left)"
          :github="rt(item.github)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './PortfolioView.scss'
import type { ThemedCardContent } from '@/types.ts'
import { computed, type ComputedRef } from 'vue'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()

const content: ComputedRef<ThemedCardContent[]> = computed(() => tm('portfolio.content'))
</script>
