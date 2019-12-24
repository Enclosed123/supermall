import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (category.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "category" */ '../views/category/Category.vue')
  },
  {
    path:'/cart',
    name:'cart',
    component: () => import(/* webpackChunkName: "category" */ '../views/cart/Cart.vue')
  },
  {
    path:'/profile',
    name:'profile',
    component:() => import(/* webpackChunkName: "category" */ '../views/profile/Profile.vue')
  },
  {
    path:'/detail/:iid',
    name:'detail',
    component:() => import(/* webpackChunkName: "category" */ '../views/detail/Detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
