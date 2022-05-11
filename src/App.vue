<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view #="{Component,route}">
    <component :is="Component" :key="route.path"></component>
  </router-view>
</template>

<style>

</style>
