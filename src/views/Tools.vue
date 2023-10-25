<script setup lang="ts">
</script>

<template>
  <div class="tools">
    <div class="tools-wrapper">
      <div class="tools-title">Tools</div>
      <div class="tools-container">
        <div class="languages">
          <p class="topic-sec">Languages: </p>
          <span class="value-sec">
            Ruby, HTML5, CSS3, JavaScript, TypeScript, SQL, PHP, VB, SASS, 
          </span>
        </div>
        <div class="tools-sec">
          <p class="topic-sec">Developer Tools: </p>
          <span class="value-sec">
            Visual Studio Code, RubyMine, Postman, Chrome, Sidekick, Firebase, Figma, Supabase
          </span>
        </div>
        <div class="frameworks">
          <p class="topic-sec">Technologies/Frameworks: </p>
          <span class="value-sec">
            git, Tailwind CSS, VueJS, ReactJS, Nuxt, Ruby on Rails, Docker, Azure, Heroku, Scalingo, Rspec, Bootstrap, jQuery, Postgresql, Drupal, Wordpress, Umbraco
          </span>
        </div>
        <div class="project-mgmt">
          <p class="topic-sec">Project Management: </p>
          <span class="value-sec">AGILE, JIRA, GitHub, GitLab, Trello</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tools {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 3rem;
  margin-inline: 2rem;

  .tools-wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .tools-title {
    z-index: 999;
    text-align: center;
    font-size: clamp(1rem, 10vw, 2.5rem);
  }

  .tools-container {
    z-index: 999;
    font-size: clamp(1rem, 5vw, 1.6rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .topic-sec:nth-child(1) {
    // opacity: 0;
    animation: fadeIn 0.3s .7s ease-in forwards;
  }
  .topic-sec:nth-child(2) {
    animation: fadeIn 0.5s 1.4s ease-in forwards;
  }
  .topic-sec:nth-child(3) {
    animation: fadeIn 0.7s 2.1s ease-in forwards;
  }
  .topic-sec:nth-child(4) {
    animation: fadeIn 0.9s 2.8s ease-in forwards;
  }

    .value-sec {
      opacity: 0;
    }
    .value-sec:nth-child(1) {
      animation: fadeIn 0.9s 1s ease-in forwards;
    }
}

</style>