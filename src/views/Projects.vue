<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/projects.json'
// import Card from 'primevue/card';
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';
const defaultImg = ref("https://i.pinimg.com/564x/5e/d5/8c/5ed58cbf79e583bfbab7016077008e28.jpg")

const redirectGithub = (project: any) => {
  window.open(project.github.link, "_target");
}

const redirectWebsite = (project: any) => {
  window.open(project.website.link, "_target");
}

onMounted(() => {
  ScrollReveal().reveal('.project', { delay: 400 });
})
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Projects</div>
    <div class="projects-container">
      <div v-for="project in ProjectsJson" class="article-card">
        <div v-if="project" class="project-card">
          <div class="content">
            <p class="title">{{ project.title }}</p>
            <p class="date">{{ project.description.substring(0, 90) }} ...</p>
            <div style="display: flex; gap: .8rem;">
              <Button v-show="project.github.disabled" style="background-color: #a60080; border: none;" class="project-buttons" label="Github" @click="redirectGithub(project)" />
              <Button v-show="project.website.disabled" style="background-color: #373F7A; border: none;" class="project-buttons" label="Live" @click="redirectWebsite(project)" />
            </div>
          </div>
          <img :src="project.img || defaultImg" alt="article-cover" />
          </div>
      </div>
    </div>
  </div>
  <ScrollTop />
</template>

<style lang="scss" scoped>
.projects-section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-block: 5rem;
  margin-inline: 3rem;

  .projects-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: clamp(1rem, 7vw, 3rem);
    font-family: "Bebas Neue", sans-serif;
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
}

.projects-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1rem;
}

.article-card {
  max-width: 950px;
  max-height: 420px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px  ;
  box-shadow: 0 1px 3px rgba(217, 212, 212, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  img {
    opacity: 1;
  }
}

.article-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .6;
  transition: opacity .4s linear;
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
  z-index: 9999;
}

.article-card .date,
.article-card .title {
  margin: 0;
}

.article-card .date {
  font-size: clamp(0.3rem, 4vw, 1.055rem);

  font-family: "Bebas Neue", sans-serif;
  font-style: normal;

  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
}

.article-card .title {
  font-size: clamp(1rem, 5vw, 2rem);
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  color: #fff;
}

.project-buttons {
  font-size: clamp(1rem, 5vw, 1rem);
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  letter-spacing: 1px;
}

@media screen and (max-width: 500px) {
  .article-card .date {
    font-size: clamp(0.3rem, 4vw, .8rem);

    font-family: "Bebas Neue", sans-serif;
    font-style: normal;

    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 4px;
  }

  .article-card .title {
    font-size: clamp(1rem, 5vw, 1rem);
    font-family: "Bebas Neue", sans-serif;
    font-style: normal;
    color: #fff;
  }

  .project-buttons {
    font-size: clamp(1rem, 5vw, 0.5rem);
    font-family: "Bebas Neue", sans-serif;
    font-style: normal;
    letter-spacing: 1px;
  }
}
</style>
