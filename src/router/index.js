import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue'),
    },
    {
      path: '/article/:articleId(\\d+)',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
  ],
})

export default router
