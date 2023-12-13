<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '../assets/myc-logo.png'
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
      <RouterLink active-class="active" class="nav-link" to="/work">Work</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/projects">Projects</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/article">Articles</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/tools">Tools</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-section {
  position: sticky;
  height: 8vh;
  background-color: #373f7a;
  padding: .8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-logo {
      width: 65px;
      opacity: 0;
      animation: fadeIn 0.8s 0.3s ease-in forwards;
    }
  }
  .nav-links {
    padding-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    .nav-link {
      text-decoration: none;
      font-size: 1.3rem;
      font-size: clamp(0.5rem, 5vw, 1.3rem);

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

  @media screen and (max-width: 550px) {
    .nav-links {
      display: none;
    }
  }
}
</style>
