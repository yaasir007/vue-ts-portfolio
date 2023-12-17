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
            Ruby, HTML5, CSS3, JavaScript, TypeScript, SQL, PHP, VB, SASS.
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
          <span class="value-sec">AGILE, SCRUM, JIRA, GitHub, GitLab, Trello</span>
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
  margin-block: 6rem;
  margin-inline: 2rem;

  .tools-wrapper {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .tools-title {
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

  .tools-title::after {
    content: "";
    border: 1px solid #EF5962;
    width: 5%;
    transition: all .3s linear;
  }

  .tools-title:hover::after {
    width: 12%;
  }

  .tools-container {
    z-index: 999;
    font-size: clamp(1rem, 5vw, 1.6rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .topic-sec {
    opacity: 0;
    color: #EF5962;
    animation: fadeIn 0.3s .7s ease-in forwards;
  }

  .value-sec {
    opacity: 0;
    animation: fadeIn 0.9s 1s ease-in forwards;
  }
}
</style>
