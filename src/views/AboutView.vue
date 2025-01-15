<template>
  <div class="about">
    <div class="about__header">
      <span class="about__header--h1"> {{ t('about.h1') }} </span>
      <span class="about__header--text"> Justin Leddet. </span>
      <span class="about__header--text"> {{ t('about.title') }}</span>
    </div>
    <div class="about__content">
      <span class="about__content--title">Hobbies</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutView.scss'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
