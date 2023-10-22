<script setup lang="ts">
import { RouterLink } from 'vue-router' 
import Logo from '../assets/myc-logo.png'
</script>

<template>
  <div class="nav-section">
    <div class="nav-logo-container">
      <img :src="Logo" alt="MYC" class="nav-logo">     
    </div>

    <div class="nav-links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <RouterLink active-class="active" to="/projects">Projects</RouterLink>
      <RouterLink active-class="active" to="#">Tools</RouterLink>
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
    }
  }
  .nav-links {
    padding-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    a {
      text-decoration: none;
      font-size: 1.3rem;
      transition: all .2s ease-in;
      color: white;
      transition: all .2s linear;
    }

    a:hover {
      color: #f59694;
      transform: scale(1.08);
    }
  }
}
</style>