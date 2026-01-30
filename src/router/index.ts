import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LessonSelector from '../views/LessonSelector.vue'
import TypingLesson from '../views/TypingLesson.vue'
import Results from '../views/Results.vue'
import Statistics from '../views/Statistics.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lessons',
    name: 'LessonSelector',
    component: LessonSelector
  },
  {
    path: '/lesson/:id',
    name: 'TypingLesson',
    component: TypingLesson
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
