<script setup lang="ts">
import Logo from '../assets/myc-logo.png'
</script>

<template>
  <div class="nav-section">
    <div class="nav-logo-container">
      <img :src="Logo" alt="MYC" class="nav-logo">     
    </div>

    <div class="nav-links">
      <a href="">About</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Experiences</a>
      <a href="">Articles</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-section {
  background-color: #373f7a;
  padding: .8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-logo {
    width: 40px;
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
      color: white;
      transition: all .2s ease-in;
    }

    a:hover {
      color: #f59694;
    }
  }
}
</style>