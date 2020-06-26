import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('@/app/home-page/home-page.vue')
  },
  {
    path:'/shows',
    name:'Concerts',
    component: () => import('@/app/shows-page/shows-page.vue')
  },
  {
    path:'/classes',
    name:'Master class',
    component: () => import('@/app/master-classes/master-classes-page.vue')
  },
  {
    path: '/association',
    name: 'L\'association',
    component: () => import('@/app/association-page/association-page.vue')
  },
  {
    path: '/club',
    name: 'Le club',
    component: () => import('@/app/club-page/club-page.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/app/contact-page/contact-page.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
