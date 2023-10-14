<script setup lang="ts">
import Parkium from "../assets/projects/parkium.jpeg";
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Projects</div>
    <div class="projects-container">
      <div class="project">
        <div class="project-img">
          <img :src="Parkium" alt="" class="img-res" />
        </div>
        <div class="project-content">
          <span class="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni ut minima earum quasi ad?</span>
            <div class="project-btns">
              <button>Open Website</button>
              <button>Open Github</button>
            </div>
        </div>
      </div>

      <div class="project">
        <div class="project-img">
          <img :src="Parkium" alt="" class="img-res" />
        </div>
        <div class="project-content">
          <span class="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni ut minima earum quasi ad?</span>
            <div class="project-btns">
              <button>Open Website</button>
              <button>Open Github</button>
            </div>
        </div>
      </div>

      <div class="project">
        <div class="project-img">
          <img :src="Parkium" alt="" class="img-res" />
        </div>
        <div class="project-content">
          <span class="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni ut minima earum quasi ad?</span>
            <div class="project-btns">
              <button>Open Website</button>
              <button>Open Github</button>
            </div>
        </div>
      </div>

      <div class="project">
        <div class="project-img">
          <img :src="Parkium" alt="" class="img-res" />
        </div>
        <div class="project-content">
          <span class="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni ut minima earum quasi ad?</span>
            <div class="project-btns">
              <button>Open Website</button>
              <button>Open Github</button>
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
  gap: 2rem;


  .projects-title {
    margin-block: 3rem;
    font-size: clamp(1rem, 10vw, 2.5rem); 
  }
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project:nth-child(even) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.project:nth-child(odd) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.project-content {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .project-btns {
    display: flex;
    gap: 1rem;
  }
}


</style>
