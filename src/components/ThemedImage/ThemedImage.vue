<template>
  <div class="themed-img">
    <button
      v-for="(link, index) in links"
      :key="index"
      class="button"
      :class="{ 'button--static': !link.link && !link.zoom }"
      :disabled="!link.link && !link.zoom"
      :style="{ 'z-index': 60 - index }"
      @click="handleClick($event, link)"
    >
      <div class="button__content">
        <img :src="link.src" />
      </div>
    </button>
    <ImageModal
      v-if="zoomed"
      :src="zoomed.src"
      :origin="zoomed.origin"
      @close="zoomed = null"
    />
  </div>
</template>

<script setup lang="ts">
import './ThemedImage.scss'
import type { Image } from '@/types.ts'
import { ref } from 'vue'
import ImageModal from '@components/ImageModal/ImageModal.vue'

defineProps({
  links: {
    type: Array<Image>,
    required: false,
  },
})

const zoomed = ref<{ src: string; origin: DOMRect } | null>(null)

const handleClick = (event: MouseEvent, image: Image) => {
  if (image.zoom) {
    const origin = (event.currentTarget as HTMLElement).getBoundingClientRect()
    zoomed.value = { src: image.fullSrc ?? image.src, origin }
    return
  }
  if (image.link === '') return
  window.open(image.link, '_blank')
}
</script>
