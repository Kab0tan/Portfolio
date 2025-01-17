<template>
  <div class="about">
    <div class="about__header">
      <span class="about__header--title"> {{ t('about.h1') }} </span>
      <span class="about__header--subtitle"> Justin Leddet. </span>
      <span class="about__header--subtitle"> {{ t('about.title') }}</span>
      <span class="about__header--description">{{ t('about.description') }}</span>
    </div>
    <div class="about__content">
      <span class="about__content--title">Hobbies</span>
      <div class="about__content--cards">
        <ThemedCard
          v-for="msg in tm('about.content')"
          :key="msg"
          :title="rt(msg.title)"
          :description="rt(msg.description)"
          :left="rt(msg.left)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutView.scss'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()
</script>
