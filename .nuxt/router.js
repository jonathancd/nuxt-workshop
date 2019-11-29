import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27f7a0d0 = () => interopDefault(import('..\\pages\\albums\\about.vue' /* webpackChunkName: "pages_albums_about" */))
const _3aa15f3d = () => interopDefault(import('..\\pages\\albums\\_id.vue' /* webpackChunkName: "pages_albums__id" */))
const _7a387c79 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums/about",
    component: _27f7a0d0,
    name: "albums-about"
  }, {
    path: "/albums/:id?",
    component: _3aa15f3d,
    name: "albums-id"
  }, {
    path: "/",
    component: _7a387c79,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
