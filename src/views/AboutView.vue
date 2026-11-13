<template>
  <div class="about">
    <ElRow v-if="!isMobile" class="about__header">
      <ElCol :span="16">
        <div class="about__header__text-container">
          <span class="about__header--title"> {{ t('about.h1') }} </span>
          <span class="about__header--subtitle">
            Justin Leddet<span class="highlight">.</span>
          </span>
          <span class="about__header--subtitle">
            {{ t('about.title') }}<span class="highlight">.</span>
          </span>
          <i18n-t keypath="about.description" tag="span" scope="global" class="about__header--description">
            <template #ense3><span class="highlight">Grenoble-INP ENSE3</span></template>
            <template #phelma><span class="highlight">Grenoble-INP PHELMA</span></template>
            <template #web>
              <span class="highlight">{{ t('about.webDevelopment') }}</span>
            </template>
          </i18n-t>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="about__header__col">
          <div class="about__header__img-container">
            <img src="@/assets/images/pdp.jpg" class="about__header__img" alt="Justin Leddet" />
            <div class="about__header__img--overlay" @click="handleLinkLinkedin">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" class="about__header__img--icon" />
            </div>
          </div>
        </div>
      </ElCol>
    </ElRow>
    <div v-else class="about__header">
      <div class="about__header__text-container">
        <span class="about__header--title"> {{ t('about.h1') }} </span>
        <span class="about__header--subtitle"> Justin Leddet<span class="highlight">.</span> </span>
        <span class="about__header--subtitle">
          {{ t('about.title') }}<span class="highlight">.</span>
        </span>
        <i18n-t keypath="about.description" tag="span" scope="global" class="about__header--description">
          <template #ense3><span class="highlight">Grenoble-INP ENSE3</span></template>
          <template #phelma><span class="highlight">Grenoble-INP PHELMA</span></template>
          <template #web>
            <span class="highlight">{{ t('about.webDevelopment') }}</span>
          </template>
        </i18n-t>
        <div class="about__header__col">
          <div class="about__header__img-container">
            <img src="@/assets/images/pdp.jpg" class="about__header__img" alt="Justin Leddet" />
            <div class="about__header__img--overlay" @click="handleLinkLinkedin">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" class="about__header__img--icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about__content">
      <span class="about__content--title">Hobbies</span>
      <div class="about__content--cards">
        <ThemedCard
          v-for="(msg, index) in content"
          :key="index"
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
import type { ThemedCardContent } from '@/types.ts'
import { computed, type ComputedRef } from 'vue'
import { storeToRefs } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ThemedCard from '@components/ThemedCard/ThemedCard.vue'
import { useNavBarStore } from '@/stores/navbar'
const navBarStore = useNavBarStore()
const { isMobile } = storeToRefs(navBarStore)

const handleLinkLinkedin = () => {
  window.open('https://www.linkedin.com/in/justin-leddet', '_blank')
}

import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()

const content: ComputedRef<ThemedCardContent[]> = computed(() => tm('about.content'))
</script>
