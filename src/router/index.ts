import {createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path:'/:pathMatch(.*)*',
    component:()=>import('@/views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((item)=>{
  console.log(item);
  return true
});

router.afterEach(item=>{
  console.log(item)
})

export default router
