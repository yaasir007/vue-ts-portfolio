<script setup lang="ts">
import { RouterView } from 'vue-router'
import Particles from './components/Particles.vue'
import Nav from '../src/views/Nav.vue'
</script>

<template>
  <Particles />
  <Nav />
  <RouterView />
</template>
