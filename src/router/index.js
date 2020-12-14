import Vue from 'vue'
import VueRouter from 'vue-router'
import { publicRoute, protectedRoute } from './config'

Vue.use(VueRouter)

const routes = publicRoute.concat(protectedRoute)

console.log(routes)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
