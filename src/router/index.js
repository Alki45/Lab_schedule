// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import CoursePage from '@/components/CoursePage.vue'
import AssistanPage from '@/components/Dashboard/AssistanPage.vue'
import LecturerPage from '@/components/Dashboard/LecturerPage.vue'
import SchedulePage from '@/components/SchedulePage.vue'
import LabRoom from '@/components/Dashboard/LabRoom.vue'
import Dashboard from '@/components/Dashboard/Dashboard.vue'




const routes = [
  { path: '/', component: HomePage },
  //{ path: '/Lab_schedule', component: HomePage },
  { path: '/dashboard', component: Dashboard },
  { path: '/about', component: AboutPage },
  { path: '/courses', component: CoursePage },
  { path: '/lab-assistants', component: AssistanPage },
  { path: '/lecturers', component: LecturerPage },
  { path: '/lab-rooms', component: LabRoom },
  { path: '/schedule', component: SchedulePage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
