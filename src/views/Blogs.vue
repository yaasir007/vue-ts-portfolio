<script setup lang="ts">
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/articles.json'

import Card from 'primevue/card';
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';

// const defaultImg = ref("https://i.pinimg.com/564x/5e/d5/8c/5ed58cbf79e583bfbab7016077008e28.jpg")

const redirectWebsite = (project: any) => {
  window.open(project.link, "_target");
}

onMounted(() => {
  ScrollReveal().reveal('.project', { delay: 400 });
})
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Blogs</div>
    <div class="projects-container">
      <Card v-for="project in ProjectsJson" style="width: 70%; height: fit-content; z-index: 999;">
        <template #title>{{ project.title }}</template>
        <template #content>
            <p class="m-0">{{ project.description }}</p>
            <div class="card-btns">
              <Button v-if="project.link" label="Read Article" severity="success" @click="redirectWebsite(project)" />
            </div>
        </template>
      </Card>
    </div>
  </div>
  <ScrollTop />
</template>

<style lang="scss" scoped>
.card-btns {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.projects-section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-block: 6rem;
}

.projects-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(1rem, 7vw, 1.5rem);
  opacity: 0;
  animation: fadeIn 0.5s 0.2s ease-in forwards;
  color: #EF5962;
  font-weight: 600;
  letter-spacing: 1px;
}

.projects-title::after {
  content: "";
  border: 1px solid #EF5962;
  width: 40%;
  transition: all .3s linear;
}

.projects-title:hover::after {
  width: 90%;
}

.projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
