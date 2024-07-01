<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue'
import Nav from '../src/views/Nav.vue'
import Preloader from '../src/components/Preloader.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
})
</script>

<template>
  <Preloader v-if="isLoading" />
  <Particles v-if="!isLoading" />
  <Nav v-if="!isLoading" />
  <RouterView v-if="!isLoading" />
</template>

<style scoped lang="scss">
</style>
