<template>
  <Teleport to="body">
    <div
      class="image-modal"
      :class="{ 'image-modal--visible': visible }"
      :style="originOffset"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <div ref="frame" class="image-modal__frame">
        <div class="image-modal__content">
          <img ref="img" :src="src" :alt="alt" class="image-modal__img" @click="close" />
        </div>
        <button class="image-modal__close" aria-label="Close" @click="close">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import './ImageModal.scss'
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { src, alt = '', origin } = defineProps<{
  src: string
  alt?: string
  // Bounding box of the clicked element: the modal grows from its centre and shrinks back into it
  origin: DOMRect
}>()
const emit = defineEmits<{ close: [] }>()

const frame = useTemplateRef<HTMLDivElement>('frame')
const img = useTemplateRef<HTMLImageElement>('img')
const visible = ref(false)
let closing = false

// The frame is always centred in the viewport, so its offset from the clicked element's centre is known upfront
const originOffset = {
  '--origin-x': `${origin.left + origin.width / 2 - window.innerWidth / 2}px`,
  '--origin-y': `${origin.top + origin.height / 2 - window.innerHeight / 2}px`,
}

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve))

const open = async () => {
  // Wait for the image so the frame grows at its final size, then for the closed state to be painted
  await img.value?.decode().catch(() => {})
  await nextFrame()
  await nextFrame()
  visible.value = true
}

const close = () => {
  if (closing) return
  closing = true
  visible.value = false
  // transitionend can be skipped (hidden tab, reduced motion), so a timer backs it up
  let done = false
  const finish = () => {
    if (done) return
    done = true
    emit('close')
  }
  frame.value?.addEventListener('transitionend', (e) => {
    // Ignore transitions bubbling up from children like the close button
    if (e.target === frame.value && e.propertyName === 'transform') finish()
  })
  setTimeout(finish, 500)
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
  open()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
