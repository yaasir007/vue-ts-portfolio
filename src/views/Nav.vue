<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '../assets/nav/logo_without_bg.png'
</script>

<template>
  <div class="nav-section">
    <div class="nav-logo-container">
      <RouterLink to="/">
        <img :src="Logo" alt="MYC" class="nav-logo">
      </RouterLink>
    </div>

    <div class="nav-links">
      <RouterLink active-class="active" class="nav-link" to="/">Home</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/about">About</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/works">Works</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/projects">Projects</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/blogs">Blogs</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/tools">Tools</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-section {
  z-index: 99999;
  width: 100%;
  position: fixed;
  top: 0;
  height: 8vh;
  background-color: #373f7a;
  padding: .8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.5rem;

  .nav-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-logo {
      margin-top: .3rem;
      transform: scale(1.5);
      height: 7vh;
      opacity: 0;
      animation: fadeIn 0.8s 0.3s ease-in forwards;
    }
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;

    .nav-link {
      text-decoration: none;
      font-size: clamp(0.3rem, 4vw, 1rem);

      transition: all .2s ease-in;
      color: white;
      transition: all .2s linear;
      opacity: 0;
    }

    .nav-link:nth-child(1) {
      animation: fadeIn 0.8s 0.4s ease-in forwards;
    }
    .nav-link:nth-child(2) {
      animation: fadeIn 0.8s 0.5s ease-in forwards;
    }
    .nav-link:nth-child(3) {
      animation: fadeIn 0.8s 0.6s ease-in forwards;
    }
    .nav-link:nth-child(4) {
      animation: fadeIn 0.8s 0.7s ease-in forwards;
    }
    .nav-link:nth-child(5) {
      animation: fadeIn 0.8s 0.8s ease-in forwards;
    }
    .nav-link:nth-child(6) {
      animation: fadeIn 0.8s 0.9s ease-in forwards;
    }

    .nav-link:hover {
      color: #f59694;
      transform: scale(1.08);
    }
  }
}

@media screen and (max-width: 750px) {
  .nav-section {
    display: none;
  }
}
</style>
