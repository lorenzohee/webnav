import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      component: ()=>import('@/views/nav/nav.vue')
    },{
      path: '/hello',
      component: ()=>import('@/components/HelloWorld.vue')
    }
  ]
})

export default router