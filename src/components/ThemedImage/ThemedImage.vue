<template>
  <div class="themed-img">
    <button
      v-for="(link, index) in links"
      :key="index"
      class="button"
      :style="{ 'z-index': 60 - index }"
      @click="handleLink(link.link)"
    >
      <div class="button__content">
        <img :src="link.src" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import './ThemedImage.scss'
import type { Image } from '@/types.ts'

defineProps({
  links: {
    type: Array<Image>,
    required: false,
  },
})

const handleLink = (link: string) => {
  if (link === '') return
  window.open(link, '_blank')
}
</script>
