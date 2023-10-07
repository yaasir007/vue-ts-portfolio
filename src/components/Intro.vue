<script setup lang="ts">
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-name">Yaasir Cheekoory</div>
      <div class="intro-job-title">Full Stack Engineer</div>
    </div>
    <div class="intro-scroll-down">Scroll</div>
  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  height: 92vh;
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
    color: white;
    font-size: 5rem;
    letter-spacing: 5px;
  }

  .intro-scroll-down {
    color: white;
    height: 15vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    animation: upDown 1s infinite alternate;
  }

  @keyframes upDown {
    0% {
      transform: translateY(1rem);
    }
    100% {
      transform: translateY(-1rem);
    }
  }
  
}
</style>