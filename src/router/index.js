import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ActivitiesPage from '../pages/ActivitiesPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/resources', component: ResourcesPage },
  { path: '/activities', component: ActivitiesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
