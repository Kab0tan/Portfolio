<template>
  <div
    class="custom-switch-lg"
    :style="{
      '--size': `${size}px`,
    }"
  >
    <input
      type="checkbox"
      id="mode-switch-lg"
      v-model="checked"
      class="check-toggle check-toggle-round-flat"
    />
    <label
      for="mode-switch-lg"
      class="switch-slider-lg"
      :style="{ '--bg-color-on': bgColorOn, '--bg-color-off': bgColorOff }"
    >
    </label>
    <span class="on">FR</span>
    <span class="off">EN</span>
  </div>
</template>

<script setup lang="ts">
import './ThemedSwitchLg.scss'

defineProps({
  size: {
    type: Number,
    default: 40,
  },
  bgColorOn: {
    type: String,
  },
  bgColorOff: {
    type: String,
  },
})

const checked = defineModel('modelValue')
</script>
