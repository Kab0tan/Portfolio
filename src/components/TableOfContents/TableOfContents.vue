<template>
  <nav class="toc" aria-label="Table of contents">
    <ul class="toc__sections">
      <li v-for="section in sections" :key="section.id" class="toc__section">
        <span class="toc__section-title">{{ section.title }}</span>
        <ul class="toc__items">
          <li v-for="item in section.items" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="toc__link"
              :class="{ 'toc__link--active': activeId === item.id }"
              @click.prevent="scrollToItem(item.id)"
            >
              <span v-if="item.period" class="toc__link-period">{{
                item.period
              }}</span>
              <span class="toc__link-label">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import './TableOfContents.scss'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

export interface TocItem {
  id: string
  label: string
  period?: string
}

export interface TocSection {
  id: string
  title: string
  items: TocItem[]
}

const props = defineProps<{
  sections: TocSection[]
}>()

const ACTIVE_LINE_OFFSET = 120
const activeId = ref('')

onMounted(() => {
  nextTick(updateActiveId)
  window.addEventListener('scroll', updateActiveId, { passive: true })
  window.addEventListener('resize', updateActiveId)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveId)
  window.removeEventListener('resize', updateActiveId)
})

const allIds = computed(() =>
  props.sections.flatMap((section) => section.items.map((item) => item.id)),
)

const updateActiveId = () => {
  const ids = allIds.value
  if (!ids.length) return

  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2
  if (atBottom) {
    activeId.value = ids[ids.length - 1]
    return
  }

  let current = ids[0]
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top - ACTIVE_LINE_OFFSET <= 0) {
      current = id
    } else {
      break
    }
  }
  activeId.value = current
}

const scrollToItem = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

watch(
  () => props.sections,
  () => nextTick(updateActiveId),
)
</script>
