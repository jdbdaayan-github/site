import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/resources', component: ResourcesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
