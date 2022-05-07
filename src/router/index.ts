import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/zhuang',
      name:'zhuang',
      redirect:'/zhuang/keyi',
      component:() => import('../views/zhuangzi/keyi.vue'),
      children:[
        {
          path:'/zhuang/keyi',
          name:'keyi',
          component:() => import('../views/zhuangzi/keyi.vue')
        }
      ]
    },

  ]
})

export default router
