<script setup lang="ts">
</script>

<template class="skillls">
  <div class="skills">
    <div class="skills-wrapper">
      <div class="skills-title">Skills</div>
      <div class="skills-logos">
        <div class="logo-container">HTML</div>
        <div class="logo-container">React</div>
        <div class="logo-container">Vue</div>
        <div class="logo-container">Ruby</div>
        <div class="logo-container">Rails</div>
        <div class="logo-container">Docker</div>
        <div class="logo-container">Nuxt</div>
        <div class="logo-container">JavaScript</div>
        <div class="logo-container">TypeScript</div>
        <div class="logo-container">Scss</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 5rem;

  .skills-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .skills-title {
      text-align: center;
      font-size: clamp(1rem, 10vw, 2.5rem);
    }

    .skills-logos {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3rem;
      flex-wrap: wrap;
      width: 750px;
      // height: 450px;
      border: 1px solid red;
      overflow: hidden;

      .logo-container {
        border: 1px solid burlywood;
        padding: 1rem 1.5rem;
        width: fit-content;
        height: fit-content;
        animation: moveBox 10s linear infinite;
      }
    }
  }
}

@keyframes moveBox {
  from {
    transform: translateX(-500%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>