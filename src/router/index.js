import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    name:'Home',
    component: Home,
    children:[
      {
        path: '/personal',
        name: 'Personal',
        component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
      },
      {
        path: '/borrow',
        name: 'Borrow',
        component: () => import(/* webpackChunkName: "borrow" */ '../views/Borrow.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
      },
      {
        path: '/logout',
        name: 'Logout',
        component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
        
      },
    ]
  },
  {
    path:'/',
    name:'Login',
    component: Login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
