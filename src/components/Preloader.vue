<script setup lang="ts">
import { AtomSpinner } from 'epic-spinners'
</script>

<template>
  <div class="preloader">
    <atom-spinner :animation-duration="1500" :size="100" color="#a60080" />
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
