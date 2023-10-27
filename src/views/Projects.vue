<script setup lang="ts">
import ScrollReveal from 'scrollreveal'
import ProjectsJson from '../data/projects.json'

import Parkium from "../assets/projects/parkium.png";
import CounterApp from "../assets/projects/counterApp.png";
import QuoteGen from "../assets/projects/quoteGen.png";
import { onMounted } from 'vue';

console.log(ProjectsJson);

const Projects = [
  {
    img: Parkium,
    title: "Parkium",
    description: "The parking system project is a web application designed to simplify parking management using a combination of JavaScript, Rails, Ruby, Webpack, HTML, CSS, Bootstrap, SCSS, and Devise template.",
    website: {
      disabled: false,
      link: "",
    },
    github: {
      disabled: true,
      link: "https://github.com/yaasir007/Parkium"
    }
  },
  {
    img: CounterApp,
    title: "Counter App",
    description: "The counter project is a simple application built using React and Tailwind CSS. It allows users to increment, decrement, and reset a counter using a user-friendly interface. The project is responsive and easy to use, making it a great starting point for learning React and Tailwind CSS.",
    website: {
      disabled: true,
      link: "https://counter-react-three-delta.vercel.app/",
    },
    github: {
      disabled: false,
      link: "https://github.com/yaasir007/landing-page"
    }
  },
  {
    img: QuoteGen,
    title: "Quote Generator",
    description: "The quote generator project is a web application built using JavaScript that fetches quotes from an API and displays them on the screen. The application features a user-friendly interface and allows users to generate new quotes by clicking a button. This project is a great way to get inspired, motivated, or entertained by reading quotes.",
    website: {
      disabled: true,
      link: "https://fetch-quote-js.vercel.app/",
    },
    github: {
      disabled: false,
      link: "https://github.com/yaasir007/landing-page"
    }
  },
  {
    img: Parkium,
    title: "Tic Tac Toe",
    description: "The Tic Tac Toe app is a web application built using JavaScript that enables users to play the classic game of Tic Tac Toe against an AI opponent or another player. The application features a user-friendly interface and provides a fun and challenging way to pass the time while improving logical thinking and decision-making skills.",
    website: {
      disabled: true,
      link: "https://tic-tac-toe-js-orpin.vercel.app/",
    },
    github: {
      disabled: true,
      link: "https://github.com/yaasir007/tic-tac-toe-js"
    }
  }
];

onMounted(() => {
  ScrollReveal().reveal('.project', { delay: 400 });
})
</script>

<template>
  <div class="projects-section">
    <div class="projects-title">Projects</div>
    <div class="projects-container">
      <div v-for="project in ProjectsJson" class="project">
        <div class="project-img">
          <img :src=project.img alt="" class="img-res" />
        </div>
        <div class="project-content-container">
          <div class="project-content">
            <span class="project-title">{{ project.title }}</span>
            <span class="project-description">{{ project.description }}</span>
          </div>
            <div class="project-btns">
              <a v-if=project.website.disabled :href=project.website.link target="_blank" class="btn">Website</a>
              <a v-if=project.github.disabled  :href=project.github.link target="_blank" class="btn">Github</a>
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
  margin-block: 3rem;

  .projects-title {
    font-size: clamp(1rem, 10vw, 2.5rem);
    z-index: 999;
    opacity: 0;
    animation: fadeIn 0.5s 0.2s ease-in forwards;
    color: #EF5962;
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

    .project-title {
      font-size: clamp(1rem, 5vw, 1.5rem);
      opacity: 0;
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
  display: inline-block; /* or any other appropriate display property */
  border: 2px solid rgba(255, 255, 255, 0.5); /* Adjust the border width and opacity as needed */
  background-clip: padding-box;
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.5s 0.5s ease-in forwards;
}

.project-img > img {
  object-fit: cover;
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

</style>
