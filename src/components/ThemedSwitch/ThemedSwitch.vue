<template>
  <div
    class="custom-switch"
    :style="{
      '--size': `${size}px`,
    }"
  >
    <input type="checkbox" id="mode-switch" v-model="checked" />
    <label for="mode-switch" class="switch-slider"></label>
  </div>
</template>

<script setup lang="ts">
import './ThemedSwitch.scss'

defineProps({
  size: {
    type: Number,
    default: 40,
  },
})

const checked = defineModel('modelValue')

// const checked = ref(props.modelValue === 'dark')
</script>
