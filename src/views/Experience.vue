<script setup lang="ts">
import ExperienceJson from '../data/experience.json'

const openExperience = (index: number) => {
  const expDesps = document.querySelectorAll(".exp-description");
  expDesps[index].classList.toggle("open");
}
</script>

<template>
  <section class="experience">
    <div class="experience-container">
      <div class="experience-wrapper">
        <div class="experience-title">Work</div>
        <div class="exp_main">
          <div 
            v-for="experience, index in ExperienceJson"
            @click="openExperience(index)" 
            class="exp-item"
          >
            <div class="exp-title__con">
              <div class="exp-details">
                <span class="exp__companyName">
                  {{ experience.company_name }}
                </span>
                <span class="exp__title">
                  {{ experience.job_title }}
                </span>
              </div>
              <div class="exp__duration">
                <div class="start_date">
                  {{ experience.start_date }} -
                  <span 
                    v-if="experience.end_date === ''" 
                    class="present"
                  >
                    Present
                  </span>
                  <span v-else>{{ experience.end_date }}</span>
                </div>
              </div>
            </div>
            <div class="exp-description">
              <div class="exp-description__title">Responsibilities:</div>
              <ul 
                v-for="resp, index in experience.responsibilities" class="single-description"
              >
                <li>{{ index + 1 }}. {{ resp }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-block: 3rem;
}

.experience-title {
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

.experience-title::after {
  content: "";
  border: 1px solid #EF5962;
  width: 40%;
  transition: all .3s linear;
}

.experience-title:hover::after {
  width: 90%;
}

.exp_main {
  width: 90%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
}

.exp-item {
  padding: 1rem;
  width: 60%;
  border: 1px solid slateblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 9999;
}

.exp-item:hover {
  background-color: slateblue;
  transform: scale(105%);
}

.exp-item:nth-child(1) {
  animation: fadeIn 1s ease-in forwards;
}

.exp-item:nth-child(2) {
  animation: fadeIn 1.5s ease-in forwards;
}

.exp-item:nth-child(3) {
  animation: fadeIn 2s ease-in forwards;
}


.exp-item:nth-child(4) {
  animation: fadeIn 2.5s ease-in forwards;
}

.exp-item:nth-child(5) {
  animation: fadeIn 3s ease-in forwards;
}

.exp-item:nth-child(6) {
  animation: fadeIn 3.5s ease-in forwards;
}

.exp-item:nth-child(7) {
  animation: fadeIn 4s ease-in forwards;
}


.exp-title__con {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.exp__companyName {
  font-size: 1.2rem;
}

.exp__duration {
  font-size: 1.2rem;
}

.present {
  color: #EF5962;
}

.exp-details {
  display: flex;
  flex-direction: column;
}

.exp-description {
  display: none;
}

.open {
  display: block;
}

.exp-description ul {
  display: flex;
  flex-direction: column;
  gap: .6rem;
}

.exp-description__title {
  font-weight: 700;
  font-size: 1.2rem;
  color: #EF5962;
}

.exp-description ul li:not(.exp-description__title) {
  padding-left: 1rem;
}

.single-description {
  padding: .2rem;
}

.exp-description ul li {
  list-style: none;
}

@media screen and (max-width: 550px) {
  .exp__duration {
    display: none;
  }
}

</style>
