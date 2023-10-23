<script setup lang="ts">
</script>

<template>
  <div class="skills">
    <div class="skills-wrapper">
      <div class="skills-title">Tools</div>
      <div class="skills-container">
        <div class="languages">
          Languages: <br>Ruby, HTML5, CSS3, JavaScript, TypeScript, SQL, PHP, VB, SASS, 
        </div>
        <div class="tools">
          Developer Tools: <br>Visual Studio Code, RubyMine, Postman, Chrome, Sidekick, Firebase, Figma, Supabase
        </div>
        <div class="frameworks">
          Technologies/Frameworks: <br>git, Tailwind CSS, VueJS, ReactJS, Nuxt, Ruby on Rails, Docker, Azure, Heroku, Scalingo, Rspec, Bootstrap, jQuery, Postgresql, Drupal, Wordpress, Umbraco
        </div>
        <div class="project-mgmt">
          Project Management: <br>AGILE, JIRA, GitHub, GitLab, Trello
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 3rem;
  margin-inline: 2rem;

  .skills-wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skills-title {
    z-index: 999;
    text-align: center;
    font-size: clamp(1rem, 10vw, 2.5rem);
  }

  .skills-container {
    z-index: 999;
    font-size: clamp(1rem, 5vw, 1.6rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
}

</style>