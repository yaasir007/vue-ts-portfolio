<script setup lang="ts">
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-name">Yaasir Cheekoory</div>
      <div class="intro-job-title">Full Stack Engineer</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  margin-top: 5rem;
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

    .intro-name,
    .intro-job-title {
      letter-spacing: 5px;
    }

    .intro-name {
      font-family: 'Bebas Neue', sans-serif;
      opacity: 0;
      animation: fadeIn 0.8s 0.3s ease-in forwards;
    }

    .intro-job-title {
      font-family: 'Bebas Neue', sans-serif;
      opacity: 0;
      animation: fadeIn 0.8s 0.8s ease-in forwards;
    }
  }
}

@media screen and (max-width: 750px) {
  .intro-content {
    z-index: -9;
  }
}
</style>
