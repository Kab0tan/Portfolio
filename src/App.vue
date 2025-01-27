<template>
  <div class="app">
    <NavigationBar />
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from './components/NavigationBar/NavigationBar.vue'
</script>
