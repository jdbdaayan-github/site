import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/components/HomePage.vue'
import AboutPage from '../src/components/AboutPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
