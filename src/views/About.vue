<script setup lang="ts">
import MyImage from '../assets/my-image.jpg'
import Linkedin from '../assets/socials/linkedin.svg'
import Github from '../assets/socials/github.svg'
import Medium from '../assets/socials/medium.svg'
import Slack from '../assets/socials/slack.svg'
import Twitter from '../assets/socials/x.svg'
import Discord from '../assets/socials/discord.svg'
import Resume from '../assets/socials/resume.png'
import ResumePDF from '../assets/docs/M.Y.C-030923.pdf'


</script>

<template>
  <div class="about-section">
    <div class="about-inner">
      <div class="about-content">
        <div class="about-title">Hola geeks...</div>
        <div class="about-description">
          Currently working at Xefi Mauritius as a <span class="about-job-title">Full Stack Dev</span> using modern technologies. 
          <p>Explore my modern web portfolio: Ruby, JavaScript, Docker. Cutting-edge development for innovative web experiences. </p>
          <p class="about-hashtags">#WebDev #Ruby #JavaScript #Docker</p>
        </div>
        <div class="about-socials">
          <div class="social">
            <a href="https://www.linkedin.com/in/yaasir007/" target="_blank">
              <img :src=Linkedin alt="Linkedin" class="img-res">
            </a>
          </div>
          <div class="social">
            <a href="https://github.com/yaasir007" target="_blank">
              <img :src=Github alt="Github" class="img-res">
            </a>
          </div>
          <div class="social">
            <a href="https://medium.com/@yaasir007" target="_blank">
              <img :src=Medium alt="Medium" class="img-res">
            </a>
          </div>
          <div class="social">
            <a href="https://lewagon-alumni.slack.com/team/U02E51WTHCJ" target="_blank">
              <img :src=Slack alt="Slack" class="img-res">
            </a>
          </div>
          <div class="social">
            <a href="https://twitter.com/yaasir_mohammad" target="_blank">
              <img :src=Twitter alt="Twitter" class="img-res">
            </a>
          </div>
          <div class="social">
            <a href="https://discord.com/channels/@me/1155718639228555264" target="_blank">
              <img :src=Discord alt="Discord" class="img-res">
            </a>
          </div>
          <div class="social">
            <a :href=ResumePDF download>
              <img :src=Resume alt="Resume" class="img-res">
            </a>
          </div>
        </div>
      </div>
      <div class="about-img">
        <img :src=MyImage alt="My Image" class="img-res">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.about-section {
  height: 92vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .about-inner {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .about-content {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      font-size: 1.3rem;
      gap: 1rem;
      z-index: 999;

      .about-title {
        font-size: 1.6rem;
        color: gold;
        opacity: 0;  
        animation: fadeIn 0.8s 0.3s ease-in forwards;
      }

      .about-description {
        opacity: 0;  
        animation: fadeIn 0.8s 0.6s ease-in forwards;
      }

      .about-socials {
        display: flex;
        gap: 1rem;
        
        .social {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
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

      .about-job-title,
      .about-hashtags {
        color: gold;
      }
    }

    .about-img {
      width: 400px;
      z-index: -9;
      filter: grayscale(.5px) blur(.5px) brightness(.7);
      transition: all .35s linear;

      opacity: 0;  
      animation: fadeIn 0.8s 1.5s ease-in forwards;
    }

    .about-img > img {
      box-shadow: 0px 0px 20px 4px #a60080;
      border-radius: 31% 69% 36% 64% / 49% 54% 46% 51%;
    }
  }
}
</style>