<template>
  <div class="about">
    <div class="about__header">
      <span class="about__header--title"> {{ t('about.h1') }} </span>
      <span class="about__header--subtitle"> Justin Leddet. </span>
      <span class="about__header--subtitle"> {{ t('about.title') }}</span>
    </div>
    <div class="about__content">
      <span class="about__content--title">Hobbies</span>
      <div class="about__content--cards">
        <ThemedCard
          title="Photographie"
          description="Je suis passionné par la photographie et la vidéo."
        />
        <ThemedCard
          :left="false"
          title="Coding Problems"
          description="Je fais des Leecode et du Advent Of Code."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutView.scss'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
