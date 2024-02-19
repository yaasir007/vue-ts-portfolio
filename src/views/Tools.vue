<script setup lang="ts">
import { ref } from 'vue'
import ToolAnimation from '../components/ToolAnimation.vue'

const langs = ref(["Ruby", "HTML5", "CSS3", "JavaScript", "TypeScript", "SQL", "PHP", "Visual Basic", "C#"]);
const devTools = ref(["git", "Visual Studio Code", "RubyMine", "Postman", "Chrome", "Sidekick", "Arc", "Edge", "Figma", "Firebase", "Supabase", "Adobe", "Docker", "Heroku"]);
const frameworks = ref(["Tailwind", "VueJS", "ReactJS", "Nuxt", "Ruby on Rails", "Bootstrap", "Postgresql", "Drupal", "Wordpress", "Umbraco"]);
const mgmt = ref(["Agile", "Scrum", "Jira", "GitHub", "GitLab", "Trello", "Monday", "Clickup"]);
</script>

<template>
  <div class="tool-wrapper">
    <div class="tool-title">Tools</div>
    <div class="scroll-container">
      <ToolAnimation timing="--time:40s" cssClass="scroll" :items=langs />
      <ToolAnimation timing="--time:50s" cssClass="scroll-reverse" :items=devTools />
      <ToolAnimation timing="--time:40s" cssClass="scroll" :items=frameworks />
      <ToolAnimation timing="--time:50s" cssClass="scroll-reverse" :items=mgmt />
    </div>
  </div>
</template>

<style scoped>
.tool-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-block: 6rem;
}

.tool-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(1rem, 7vw, 2rem);
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.5s 0.2s ease-in forwards;
  color: #EF5962;
}

.tool-title::after {
  content: "";
  border: 1px solid #EF5962;
  width: 40%;
  transition: all .3s linear;
}

.tool-title:hover::after {
  width: 90%;
}

.scroll-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
</style>
