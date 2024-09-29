<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/articles.json'

// import Card from 'primevue/card';
// import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';

const defaultImg = ref("https://i.pinimg.com/564x/5e/d5/8c/5ed58cbf79e583bfbab7016077008e28.jpg")

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
      <!-- <Card v-for="project in ProjectsJson" style="width: 70%; height: fit-content; z-index: 999;">
        <template #title>{{ project.title }}</template>
        <template #content>
            <p class="m-0">{{ project.description }}</p>
            <div class="card-btns">
              <Button v-if="project.link" label="Read Article" severity="success" @click="redirectWebsite(project)" />
            </div>
        </template>
      </Card> -->


      <div v-for="project in ProjectsJson" class="article-card" @click="redirectWebsite(project)">
        <div class="content">
          <p class="title">{{ project.title }}</p>
          <p class="date">{{ project.description.substring(0, 90) }} ...</p>
        </div>
        <img :src="project.img || defaultImg" alt="article-cover" />
      </div>


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

.article-card {
  width: 350px;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.article-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  padding: 30px 20px 20px 20px;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
}

.article-card .date,
.article-card .title {
  margin: 0;
}

.article-card .date {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
}

.article-card .title {
  font-size: 15px;
  color: #fff;
}
</style>
