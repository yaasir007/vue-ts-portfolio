<script setup lang="ts">
import Parkium from '../assets/projects/parkium.png'
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Projects</div>
    <div class="projects-container">
      <div class="project">
        <div class="project-img">
          <img :src=Parkium alt="" class="img-res">
        </div>
        <div class="project-content">
          <button>Open Website</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}

.project-img {
  width: 400px;
}

</style>