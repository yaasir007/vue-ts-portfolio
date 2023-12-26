<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/articles.json'

const defaultImg = ref("https://i.pinimg.com/564x/5e/d5/8c/5ed58cbf79e583bfbab7016077008e28.jpg")

const limitDescription = (description: string) => {
  return description.substring(0, 135)
}

onMounted(() => {
  ScrollReveal().reveal('.project', { delay: 400 });
})
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Articles</div>
    <div class="projects-container">
      <div v-for="project in ProjectsJson" class="project">
        <div class="project-img">
          <img :src="project.img ? project.img : defaultImg" alt="" class="img-res" loading="lazy" />
        </div>
        <div class="project-content-container">
          <div class="project-content">
            <a :href="project.link" target="_blank" class="title-link"><span class="project-title">{{ project.title }}</span></a>
            <span class="project-description">{{ limitDescription(project.description) }}..</span>
          </div>
          <div class="project-btns">
            <a :href=project.link target="_blank" class="btn">Read more</a>
          </div>
        </div>
      </div>
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
    font-size: clamp(1rem, 10vw, 2.5rem);
    z-index: 999;
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
  flex-direction: column;
  gap: 2rem;
}

.project {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
}

.project-content-container {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 2rem;

  .project-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 999;

    a {
      color: white;
    }

    .project-title {
      font-size: clamp(1rem, 5vw, 1.5rem);
      opacity: 0;
      text-decoration: underline;
      animation: fadeIn 0.5s 0.5s ease-in forwards;
    }

    .project-description {
      font-size: clamp(0.5rem, 5vw, 1.1rem);
      opacity: 0;
      animation: fadeIn 0.5s 0.7s ease-in forwards;
    }
  }

  .project-btns {
    display: flex;
    gap: 1rem;
    opacity: 0;
    animation: fadeIn 0.5s 0.9s ease-in forwards;
  }
}

.project-img {
  display: inline-block;
  /* or any other appropriate display property */
  border: 1px solid rgba(255, 255, 255, 0.5);
  /* Adjust the border width and opacity as needed */
  background-clip: padding-box;
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.5s 0.5s ease-in forwards;
  max-width: 400px;
  max-height: 220px;
}

.project-img>img {
  background-size: cover;
  width: 400px;
  height: 215px;
}

.btn {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding: .8rem 1rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 1rem;
}

.btn:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

@media screen and (max-width: 900px) {
  .project-img {
    display: none;
  }

  .project-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .project {
    justify-content: center;
    align-items: center;
  }
}
</style>
