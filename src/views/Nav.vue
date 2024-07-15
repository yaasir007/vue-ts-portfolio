<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '../assets/nav/logo_without_bg.png'
import { ref } from 'vue'
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        path: "/"
    },
    {
        label: 'Works',
        path: "/works"
    },
    {
        label: 'Projects',
        path: "/projects"
    },
    {
        label: 'Blogs',
        path: "/blogs"
    },
    {
        label: 'Tools',
        path: "/tools"
    },
])
</script>

<template>
  <!-- <div class="nav-section">
  </div> -->

  <div class="card">
    <Menubar :model="items" class="nav-section">
      <template #start>
        <div class="nav-logo-container">
          <RouterLink to="/">
            <img :src="Logo" alt="MYC" class="nav-logo">
          </RouterLink>
        </div>
      </template>

      <template #item="{ item }" #end>
        <div class="nav-links">
          <RouterLink active-class="active" class="nav-link" :to="item.path">{{ item.label }}</RouterLink>
        </div>
      </template>

    </Menubar>
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
}

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
  background-color: transparent;

  .nav-link {
    text-decoration: none;
    font-size: clamp(0.3rem, 4vw, 1.025rem);
    // font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    transition: all 0.3s linear;
    color: white;
    display: inline-flex !important;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .nav-link:hover {
    transform: scale(1.08);
  }
}
</style>
