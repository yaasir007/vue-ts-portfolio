<script setup lang="ts">
import { ref } from 'vue'
import Linkedin from '../assets/socials/linkedin.png'
import Github from '../assets/socials/github.png'
import Medium from '../assets/socials/medium.png'
import Slack from '../assets/socials/slack.svg'
import Twitter from '../assets/socials/twitter.png'
import Resume from '../assets/socials/cv.png'
import ResumePDF from '../assets/docs/M.Y.C-030923.pdf'

const socials = ref([
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yaasir007',
    img: Linkedin,
    target: '_blank'
  },
  {
    name: 'Github',
    url: 'https://github.com/yaasir007',
    img: Github,
    target: '_blank'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@yaasir007',
    img: Medium,
    target: '_blank'
  },
  {
    name: 'Slack',
    url: 'https://lewagon-alumni.slack.com/team/U02E51WTHCJ',
    img: Slack,
    target: '_blank'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yaasir_mohammad',
    img: Twitter,
    target: '_blank'
  },
  {
    name: 'Resume',
    url: ResumePDF,
    img: Resume,
    target: '_blank'
  }
])
</script>

<template>
  <div class="intro-section">
    <div class="intro-content">
      <div class="intro-name">Yaasir Cheekoory</div>
      <div class="intro-job-title animate-charcter">Full Stack Engineer</div>

      <div class="about-socials">
        <div class="social" v-for="social in socials">
          <a :href="social.url" :target="social.target">
            <img :src="social.img" :alt="social.name" class="img-res" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  margin-top: 5rem;
  height: 88vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .intro-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 77vh;
    font-size: clamp(1rem, 10vw, 5rem);

    .intro-name,
    .intro-job-title {
      letter-spacing: 5px;
    }

    .intro-name {
      font-family: "Bebas Neue", sans-serif;
      opacity: 0;
      animation: fadeIn 0.8s 0.8s ease-in forwards;
    }

    .intro-job-title {
      font-family: "Bebas Neue", sans-serif;
      opacity: 0;
    }

    .animate-charcter {
      text-transform: uppercase;
      background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite, fadeIn 0.8s 0.8s ease-in forwards;
      display: inline-block;
      font-size: clamp(.7rem, 10vw, 5rem);
    }

    .about-socials {
      display: flex;
      gap: 1.3rem;
      margin-top: -6rem;

      .social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.3rem;
        opacity: 0;
      }

      .social:nth-child(1) {
        animation: fadeIn 0.8s 1.2s ease-in forwards;
      }
      .social:nth-child(2) {
        animation: fadeIn 0.8s 1.4s ease-in forwards;
      }
      .social:nth-child(3) {
        animation: fadeIn 0.8s 1.6s ease-in forwards;
      }
      .social:nth-child(4) {
        animation: fadeIn 0.8s 1.8s ease-in forwards;
      }
      .social:nth-child(5) {
        animation: fadeIn 0.8s 2s ease-in forwards;
      }
      .social:nth-child(6) {
        animation: fadeIn 0.8s 2.2s ease-in forwards;
      }
      .social:nth-child(7) {
        animation: fadeIn 0.8s 2.4s ease-in forwards;
      }
    }
  }
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media screen and (max-width: 750px) {
  .intro-content {
    z-index: -9;
  }
  .about-socials {
    margin-top: 0rem !important;
  }
}
</style>
