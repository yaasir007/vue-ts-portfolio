<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AtomSpinner } from 'epic-spinners'

import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue'
import Nav from '../src/views/Nav.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
})
</script>

<template>
  <div v-if="isLoading" class="preloader">
    <atom-spinner :animation-duration="1500" :size="100" color="#a60080" />
  </div>
  <Particles v-if="!isLoading" />
  <Nav v-if="!isLoading" />
  <RouterView v-if="!isLoading" />
</template>

<style scoped lang="scss">
.preloader {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
