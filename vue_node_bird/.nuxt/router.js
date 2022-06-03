import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4de574c = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _861c6812 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _1affd55d = () => interopDefault(import('../pages/user/zerocho.vue' /* webpackChunkName: "pages/user/zerocho" */))
const _29760943 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _c4de574c,
    name: "profile"
  }, {
    path: "/signup",
    component: _861c6812,
    name: "signup"
  }, {
    path: "/user/zerocho",
    component: _1affd55d,
    name: "user-zerocho"
  }, {
    path: "/",
    component: _29760943,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
