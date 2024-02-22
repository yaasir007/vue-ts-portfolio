<script setup lang="ts">
import { AtomSpinner } from 'epic-spinners'

import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue'
import Nav from '../src/views/Nav.vue'
</script>

<template>
  <Particles />
  <Nav />
  <atom-spinner :animation-duration="1000" :size="60" color="#ff1d5e" />
  <RouterView />
</template>
