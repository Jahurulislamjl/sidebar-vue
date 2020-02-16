import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: require('../views/Dashboard').default
  },

  {
    path: '/exercise',
    name: 'exercise',
    component: require('../views/Exercise').default
  },

  {
    path: '/favourites',
    name: 'favourites',
    component: require('../views/Favourites').default
  },

  {
    path: '/manage-exercise',
    name: 'manage-exercise',
    component: require('../views/ManageExercise').default
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
