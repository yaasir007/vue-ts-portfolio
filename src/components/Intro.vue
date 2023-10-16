<script setup lang="ts">
import Scroll from '../assets/scrollDown.svg'
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-name">Yaasir Cheekoory</div>
      <div class="intro-job-title">Full Stack Engineer</div>
    </div>
    <div class="intro-scroll-down">
      <img :src=Scroll alt="" class="intro-scroll">
    </div>
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
    font-size: clamp(1rem, 10vw, 5rem);
    z-index: 9999;

    .intro-name,
    .intro-job-title {
      letter-spacing: 5px;
    }
  }

  .intro-scroll-down {
    height: 15vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    animation: upDown 1s infinite alternate;

    .intro-scroll {
      width: 2rem;
    }
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