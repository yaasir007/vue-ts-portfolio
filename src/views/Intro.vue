<script setup lang="ts">
import { RouterLink } from 'vue-router' 
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-name">Yaasir Cheekoory</div>
      <div class="intro-job-title">Full Stack Engineer</div>
      <div class="route-links">
        <RouterLink active-class="active" class="route-link" to="/about">About</RouterLink>
        <RouterLink active-class="active" class="route-link" to="/experience">experience</RouterLink>
        <RouterLink active-class="active" class="route-link" to="/projects">Projects</RouterLink>
        <RouterLink active-class="active" class="route-link" to="/tools">Tools</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  height: 88vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .intro-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 77vh;
    font-size: clamp(1rem, 10vw, 5rem);
    z-index: 9999;

    .intro-name,
    .intro-job-title {
      letter-spacing: 5px;
    }

    .intro-name {
      opacity: 0;  
      animation: fadeIn 0.8s 0.3s ease-in forwards;
    }

    .intro-job-title {
      opacity: 0;  
      animation: fadeIn 0.8s 0.8s ease-in forwards;
    }
  }
}

.route-links {
  display: none;
}

@media screen and (max-width: 550px) {
  .route-links {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-block: 1rem;
  }
  .route-link {
    font-size: 1.3rem;
    color: #f59694;
    opacity: 0;
  }

  .route-link:nth-child(1) {
    animation: fadeIn 0.8s 1.2s ease-in forwards;
  }
  .route-link:nth-child(2) {
    animation: fadeIn 0.8s 1.4s ease-in forwards;
  }
  .route-link:nth-child(3) {
    animation: fadeIn 0.8s 1.6s ease-in forwards;
  }
  .route-link:nth-child(4) {
    animation: fadeIn 0.8s 1.8s ease-in forwards;
  }
}
</style>