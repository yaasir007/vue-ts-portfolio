<script setup lang="ts">
import MyImage from '../assets/my-image.jpg'
import Linkedin from '../assets/socials/linkedin.svg'
import Github from '../assets/socials/github.svg'
import Medium from '../assets/socials/medium.svg'
import Slack from '../assets/socials/slack.svg'
import Twitter from '../assets/socials/x.svg'
import Discord from '../assets/socials/discord.svg'

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
            <img :src=Linkedin alt="Linkedin" class="img-res">
          </div>
          <div class="social">
            <img :src=Github alt="Github" class="img-res">
          </div>
          <div class="social">
            <img :src=Medium alt="Github" class="img-res">
          </div>
          <div class="social">
            <img :src=Slack alt="Github" class="img-res">
          </div>
          <div class="social">
            <img :src=Twitter alt="Github" class="img-res">
          </div>
          <div class="social">
            <img :src=Discord alt="Github" class="img-res">
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
  height: 100vh;
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

      .about-title {
        font-size: 1.6rem;
        color: gold;
      }

      .about-socials {
        display: flex;
        gap: 1rem;
        .social {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
        }
      }

      .about-job-title,
      .about-hashtags {
        color: gold;
        text-transform: lowercase !important;
      }
    }

    .about-img {
      width: 400px;
      z-index: 9999;
      filter: grayscale(3) blur(5px) brightness(.5);
      transition: all .35s linear;
    }
    .about-img:hover {
      filter: grayscale(0) blur(0px) brightness(.9);
    }

    .about-img > img {
      box-shadow: 0px 0px 20px 4px #a60080;
      border-radius: 31% 69% 36% 64% / 49% 54% 46% 51%;
    }
  }
}
</style>