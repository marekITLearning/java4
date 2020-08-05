import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import paths from '@/plugins/router/paths'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...paths],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('loggedIn')) {
      next()
    } else {
      if (from.path === '/login') {
        next(false)
        NProgress.done()
      } else {
        next('/login')
      }
    }
  } else {
    if (to.path === '/login' || to.path === '/') {
      if (sessionStorage.getItem('loggedIn')) {
        next('/overview')
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
