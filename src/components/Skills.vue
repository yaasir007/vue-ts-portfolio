<script setup lang="ts">
import { ref } from 'vue'

const skillSet = ref([]);

skillset = ['HTML', 'CSS', 'JAVASCRRIPT', 'JQUERY', 'HTML5', 'PHP', 'VUE', 'REACT']

</script>

<template>
  <div class="skills-section">
    Skills page
  </div>
</template>

<style lang="scss" scoped>
.skills-section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>