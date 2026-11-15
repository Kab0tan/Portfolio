<template>
  <div class="app">
    <NavigationBar v-if="!route.meta.hideNav" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from './components/NavigationBar/NavigationBar.vue'

const route = useRoute()
</script>
