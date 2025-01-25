<template>
  <div
    class="themed-switch"
    :class="switchClass"
    :style="{
      '--size': `${size}px`,
    }"
    @click="toggle"
  >
    <input type="checkbox" class="themed-switch__checkbox" />
    <div class="themed-switch__overlay">
      <ElIcon :size="size / 2" v-if="isIcon">
        <inactiveIcon v-if="isToggled" />
        <activeIcon v-else />
      </ElIcon>
      <span v-else :style="{ fontSize: `${size / 2}px` }">
        <span v-if="isToggled">{{ activeText }}</span>
        <span v-else>{{ inactiveText }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import './ThemedSwitch.scss'
import { computed } from 'vue'

const { isIcon, activeText, inactiveText, bgColor } = defineProps({
  size: {
    type: Number,
    default: 40,
  },
  isIcon: {
    type: Boolean,
    default: true,
  },
  activeIcon: {
    type: Object,
  },
  inactiveIcon: {
    type: Object,
  },
  activeText: {
    type: String,
  },
  inactiveText: {
    type: String,
  },
  bgColor: {
    type: Boolean,
  },
})

const modelValue = defineModel('modelValue')

const isToggled = computed(() => {
  if (isIcon) {
    return modelValue.value
  }
  return modelValue.value === activeText
})

const switchClass = computed(() => {
  if (isIcon) {
    return isToggled.value ? 'themed-switch--active' : 'themed-switch--inactive'
  } else {
    return bgColor ? 'themed-switch--active' : 'themed-switch--inactive'
  }
})

const toggle = () => {
  if (isIcon) {
    modelValue.value = !modelValue.value
  } else {
    modelValue.value = modelValue.value === activeText ? inactiveText : activeText
  }
}
</script>
