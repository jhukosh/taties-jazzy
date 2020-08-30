import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('@/app/components/home-page/home-page.vue')
  },
  {
    path:'/shows',
    name:'Concerts',
    component: () => import('@/app/components/shows-page/shows-page.vue')
  },
  {
    path:'/classes',
    name:'Master class',
    component: () => import('@/app/components/master-classes/master-classes-page.vue')
  },
  {
    path: '/association',
    name: 'L\'association',
    component: () => import('@/app/components/association-page/association-page.vue')
  },
  {
    path: '/club',
    name: 'Le club',
    component: () => import('@/app/components/club-page/club-page.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/app/components/contact-page/contact-page.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
