<template>
  <div class="about">
    <ElRow class="about__header">
      <ElCol :span="16">
        <div class="about__header__text-container">
          <span class="about__header--title"> {{ t('about.h1') }} </span>
          <span class="about__header--subtitle"> Justin Leddet. </span>
          <span class="about__header--subtitle"> {{ t('about.title') }}</span>
          <span class="about__header--description">{{ t('about.description') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="about__header__col">
          <div class="about__header__img-container">
            <img src="@/assets/images/pdp.png" class="about__header__img" />
            <div class="about__header__img--overlay" @click="handleLinkLinkedin">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" class="about__header__img--icon" />
            </div>
          </div>
        </div>
      </ElCol>
    </ElRow>
    <div class="about__content">
      <span class="about__content--title">Hobbies</span>
      <div class="about__content--cards">
        <ThemedCard
          v-for="msg in tm('about.content')"
          :key="msg"
          :title="rt(msg.title)"
          :description="rt(msg.description)"
          :left="rt(msg.left)"
          :links="msg.links"
          :github="rt(msg.github)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './AboutView.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'

const handleLinkLinkedin = () => {
  window.open('https://www.linkedin.com/in/justin-leddet', '_blank')
}

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()
</script>
