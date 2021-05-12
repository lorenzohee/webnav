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
    },{
      path: '/nav',
      component: ()=>import('@/views/nav/list.vue')
    }
  ]
})

export default router