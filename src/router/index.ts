import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Tools from '../views/Tools.vue'
import Experience from '../views/Experience.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    }
  ]
})

export default router