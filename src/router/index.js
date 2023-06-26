import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EducationandskillsView from '../views/EducationandskillsView.vue'
import ProjectView from '../views/ProjectView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/',
    name: 'Education',
    component: EducationandskillsView
  },
  {
    path: '/',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/',
    name: 'testimonial',
    component: TestimonialView
  },
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
