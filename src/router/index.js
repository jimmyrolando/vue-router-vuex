import Vue from 'vue'
import VueRouter from 'vue-router'

import display from '../components/display.vue'
import controls from '../components/controls.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/display', component: display },
  { path: '/controls', component: controls }
]

export default new VueRouter({
  routes
})
