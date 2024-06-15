<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import ExperienceJson from '../data/experience.json'
</script>

<template>
  <section class="experience">
    <div class="experience-container">
      <div class="experience-wrapper">
        <div class="experience-title">Works</div>
        <Accordion :activeIndex="0" class="accord-items">
            <AccordionTab v-for="tab, index in ExperienceJson" :key="index" :header="tab.company_name" id="test" class="accord-item">
                <div class="job-content">
                  <div class="job-title">
                    <span>{{ tab.job_title }}</span>
                    <span> | {{ tab.start_date }}</span>
                    <span v-if="tab.end_date === ''"> - Present</span>
                    <span v-else> - {{ tab.end_date }}</span>
                  </div>
                  <div class="job-res">
                    <p class="m-0" v-for="resp, index in tab.responsibilities">
                    {{ index + 1 }}.  {{ resp }}
                    </p>
                  </div>
                </div>
            </AccordionTab>
        </Accordion>
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
  margin-block: 6rem;
}

.experience-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(1rem, 7vw, 2rem);
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

.accord-items {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: "Oswald", sans-serif !important;
  font-weight: 300;
}

#test {
  background-color: red;
}

.job-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-title {
  font-family: "Oswald", sans-serif !important;
  font-weight: 700;
}

.job-res {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

</style>
