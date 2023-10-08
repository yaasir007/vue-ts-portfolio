<script setup lang="ts">
import MyImage from '../assets/my-image.jpg'
</script>

<template>
  <div class="about-section">
    <div class="about-inner">
      <div class="about-content">
        <div class="about-title">Hola geeks...</div>
        <div class="about-description">
          Currently working at Xefi Mauritius as a <span class="about-job-title">Full Stack Web Developer</span> using modern technologies. 
          <br>Explore my modern web portfolio: Ruby, JavaScript, Docker. Cutting-edge development for innovative web experiences. 
          <br><span class="about-hashtags">#WebDev #Ruby #JavaScript #Docker</span>
        </div>
      </div>
      <div class="about-img">
        <img :src=MyImage alt="My Image" class="img-res">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.about-section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .about-inner {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .about-content {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      // align-items: flex-end;
      flex-direction: column;
      font-size: 1.3rem;
      gap: 1rem;

      .about-job-title,
      .about-hashtags {
        color: #a60080;
        text-transform: lowercase !important;
      }
    }

    .about-img {
      width: 400px;
      z-index: 9999;
  }
  }
}
</style>