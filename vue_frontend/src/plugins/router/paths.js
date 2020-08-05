export default [
  // PATHS FOR MAIN MENU ITEMS
  {
    path: '/services/all',
    name: 'ServicesAll',
    component: () => ({ component: import(/* webpackChunkName: "Services" */ '@/views/Services.vue') }),
    meta: {
      requiresAuth: true,
      label: '$l.paths.services',
      icon: 'mdi-shopping-outline',
      isMainMenuItem: true
    }
  },
  {
    path: '/administration',
    name: 'Administration',
    component: () => ({ component: import(/* webpackChunkName: "Administration" */ '@/views/Administration.vue') }),
    meta: {
      requiresAuth: true,
      label: '$l.paths.administration',
      icon: 'mdi-cog-outline'
    }
  },
  // PATHS FOR UNKNOWN, REGISTER AND LOGIN
  {
    path: '*',
    redirect: {
      name: 'ServicesAll'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => ({ component: import(/* webpackChunkName: "Login" */ '@/views/Login.vue') }),
    meta: {
      requiresAuth: false,
      label: '$l.paths.login'
    }
  },
  {
    path: '/login/actid/:actid',
    name: 'LoginAct',
    component: () => ({ component: import(/* webpackChunkName: "Login" */ '@/views/Login.vue') }),
    meta: {
      requiresAuth: false,
      label: '$l.paths.login'
    }
  },
  // PATHS FOR SUBVIEWS
  {
    path: '/services/:category',
    name: 'Services',
    component: () => ({ component: import(/* webpackChunkName: "Services" */ '@/views/Services.vue') }),
    meta: {
      requiresAuth: true,
      label: '$l.paths.services'
    }
  },
  // OTHER PATHS
  {
    path: '/use-of-cookies',
    name: 'UseOfCookies',
    component: () => ({ component: import(/* webpackChunkName: "UseOfCookies" */ '@/views/UseOfCookies.vue') }),
    meta: {
      requiresAuth: false,
      label: '$l.paths.useOfCookies'
    }
  }
]
