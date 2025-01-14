<template>
  <header class="header">
    <nav class="nav-container">
      <ElRow :gutter="0">
        <ElCol :span="8">
          <div class="nav-left">
            <RouterLink to="/" class="nav-text">About</RouterLink>
            <RouterLink to="/experience" class="nav-text">Experience</RouterLink>
            <RouterLink to="/portfolio" class="nav-text">Portfolio</RouterLink>
            <RouterLink to="/contact" class="nav-text">Contact</RouterLink>
          </div>
        </ElCol>
        <ElCol :span="6" :offset="10">
          <div class="nav-right">OUI</div>
        </ElCol>
      </ElRow>
    </nav>
  </header>
</template>

<script setup lang="ts">
import './NavigationBar.scss'
</script>
