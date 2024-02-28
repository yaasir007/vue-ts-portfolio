<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '../assets/myc-logo.png'
import MenuBar from '../assets/nav/menu.png'

const drawer = ref(false)
</script>

<template>
  <div class="nav-section">
    <div class="nav-logo-container">
      <RouterLink to="/">
        <img :src="Logo" alt="MYC" class="nav-logo">
      </RouterLink>
    </div>

    <div class="nav-links">
      <RouterLink active-class="active" class="nav-link" to="/">&lt;Home&gt;</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/about">&lt;About&gt;</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/works">&lt;Works&gt;</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/projects">&lt;Projects&gt;</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/blogs">&lt;Blogs&gt;</RouterLink>
      <RouterLink active-class="active" class="nav-link" to="/tools">&lt;Tools&gt;</RouterLink>
    </div>
  </div>

  <div class="nav-section-mobile">
    <v-card>
      <v-layout>
        <v-app-bar
          color="#373f7a"
          prominent
          class="nav-mobile"
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
            <img :src="MenuBar" alt="Menu Bar" style="width: 45px;">
          </v-app-bar-nav-icon>

          <v-toolbar-title style="color: white;" class="nav-mobile-title">MYC</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
          class="drawerNav"
          v-model="drawer"
          location="left"
          temporary
          style="background-color: rgb(0, 0, 0); height: 100vh; width: 100vw;"
        >
          <v-list>
            <div class="route-links">
              <RouterLink active-class="active" class="route-link" to="/">Home</RouterLink>
              <RouterLink active-class="active" class="route-link" to="/about">About</RouterLink>
              <RouterLink active-class="active" class="route-link" to="/works">Experience</RouterLink>
              <RouterLink active-class="active" class="route-link" to="/projects">Projects</RouterLink>
              <RouterLink active-class="active" class="route-link" to="/blogs">Blogs</RouterLink>
              <RouterLink active-class="active" class="route-link" to="/tools">Tools</RouterLink>
            </div>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
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
    gap: 1.4rem;

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

//CSS for mobile Menu
.nav-section-mobile {
  display: none;
}

@media screen and (max-width: 750px) {
  .nav-section {
    display: none;
  }
  .nav-section-mobile {
    display: block;
  }
  .nav-mobile {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-mobile-title {
    color: white;
    font-size: 1.5rem;
  }
  .route-links {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    margin-block: 1rem;
    margin-inline: 1.5rem;
  }
  .route-link {
    font-size: 1.8rem;
    color: white;
    text-decoration: none;
  }
  .active {
    display: none;
  }
}
</style>
