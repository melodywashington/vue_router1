import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IdView from '@/views/IdView.vue'
import FunView from '@/views/FunView.vue'
import NotFoundView from '@/views/notFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: AboutView,
    },
    {
      path: '/test/:id',
      name: 'id',
      component: IdView
    },
    {
      path: '/fun',
      name:'fun',
      component: FunView
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFoundView
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFoundView
    }
  ],
})

export default router
