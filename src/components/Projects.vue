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
              <button>Website</button>
              <button>Github</button>
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
              <button>Website</button>
              <button>Github</button>
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
              <button>Website</button>
              <button>Github</button>
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
              <button>Website</button>
              <button>Github</button>
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

.project-img {
  z-index: 999;
}

button {
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
  font-family: "JetBrains Mono",monospace;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 12px;
}

button:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

button:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

</style>
