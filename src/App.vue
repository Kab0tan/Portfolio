<template>
  <div class="app-header">
    <NavigationBar />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from './components/NavigationBar/NavigationBar.vue'
</script>
