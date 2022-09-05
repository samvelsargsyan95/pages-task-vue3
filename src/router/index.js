import { createRouter, createWebHistory } from 'vue-router'
import PageA from '../views/PageA'
import PageB from '../views/PageB'
import PageC from '../views/PageC'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: PageA,
    children: [{
      path: "page-a",
      name: "pageA",
      component: PageA,
    }]
  },

  {
    path: '/page-b',
    name: 'pageB',
    component: PageB,
  },

  {
    path: '/page-c',
    name: 'pageC',
    component: PageC,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
