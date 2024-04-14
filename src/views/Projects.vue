<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/projects.json'
import Card from 'primevue/card';
const defaultImg = ref("https://i.pinimg.com/564x/5e/d5/8c/5ed58cbf79e583bfbab7016077008e28.jpg")

onMounted(() => {
  ScrollReveal().reveal('.project', { delay: 400 });
})
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Projects</div>
    <div class="projects-container">
      <Card v-for="project in ProjectsJson" style="width: 18rem; height: 310px; overflow: hidden; z-index: 999; background-color: snow;" class="project-card">
        <template #header>
            <img :src="project.img ? project.img : defaultImg" class="img-res" loading="lazy" style="height: 200px; object-fit: cover;" />
        </template>
        <template #title>
          <span style="font-size: 1.1rem; color: #ff1d5e;">
            {{ project.title }}
          </span>
        </template>
        <template #footer>
            <div class="project-btns">
              <a v-if=project.website.disabled :href=project.website.link target="_blank" class="btn">Website</a>
              <a v-if=project.github.disabled  :href=project.github.link target="_blank" class="btn">Github</a>
            </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-block: 6rem;

  .projects-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: clamp(1rem, 7vw, 2rem);
    opacity: 0;
    animation: fadeIn 0.5s 0.2s ease-in forwards;
    color: #EF5962;
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
}

.projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 90%;
  flex-wrap: wrap;
}

.project-card:nth-child(1) {
  opacity: 0;
}

.project-btns {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  .btn {
    padding: .5rem 1rem;
    color: white;
    background-color: black;
    border-radius: 5px;
  }

  a {
    text-decoration: none;
  }
}
</style>
