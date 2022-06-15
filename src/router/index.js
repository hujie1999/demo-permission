import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import { deepClone } from '@/utils/deepClone'
import { getRoleRoute } from '@/utils/permission/getRoleRoute'
import { execAsyncRoute } from '@/utils/permission/dealRoleRoute'
// import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)


//公用路由
const Container = () => import('@/layout/container.vue')
const DashBoard = () => import('@/views/DashBoard.vue')
const Login = () => import('@/views/Login.vue')
const NotFound = () => import('@/views/NotFound.vue')
//异步路由
const Users = () => import('@/views/users/Users.vue')
const Students = () => import('@/views/users/children/Students.vue')
const Teachers = () => import('@/views/users/children/Teachers.vue')
const Roles = () => import('@/views/roles/Roles.vue')
const Goods = () => import('@/views/goods/Goods.vue')
const Books = () => import('@/views/goods/children/Books.vue')
const Desks = () => import('@/views/goods/children/Desks.vue')

const usersRule = {
  path: '/users',
  name: 'users',
  meta:{},
  component: Users,
  children:[
    {
      path: '/users/students',
      name: 'students',
      meta:{},
      component: Students
      // children: [
      //   {
      //     path: '/users/students/girls',
      //     name: 'girls'
      //   },
      //   {
      //     path: '/users/students/boys',
      //     name: 'boys'
      //   }
      // ]
    },
    {
      path: '/users/teachers',
      name: 'teachers',
      meta:{},
      component: Teachers
    }
  ]
}
const rolesRule = {
  path: '/roles',
  name: 'roles',
  meta:{},
  component: Roles
}
const goodsRule = {
  path: '/goods',
  name: 'goods',
  meta:{},
  component: Goods,
  children:[
    {
      path: '/goods/books',
      name: 'books',
      meta:{},
      component: Books
    },
    {
      path: '/goods/desks',
      name: 'desks',
      meta:{},
      component: Desks
    }
  ]
}

//所有异步路由表
export const allAsyncRoutes = [
  usersRule,
  rolesRule,
  goodsRule
]

//公用路由表
export const constantRoutes = [
  {
    path: '/',
    name: 'container',
    component: Container,
    redirect: '/dashboard',
    children: [
      {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
      }
  ]
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      hide: true
    },
    component: Login
  },
  {
    path: '*',
    name: 'notfound',
    meta:{
      hide: true
    },
    component: NotFound
  }
]



const createRouter = (r) => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: r
})
const router = createRouter(constantRoutes)

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

let load = 0

router.beforeEach((to,from,next)=>{
  const routerTable = store.getters.router  //router表，用于渲染sidebar
  const login = store.getters.login

  if(to.name !== 'login'){
    if(!login || !routerTable.length){
      next('/login')
    }
    if (load === 0 && routerTable.length) {
      load++
      //添加动态路由
  
      const constant = deepClone(constantRoutes)   //所有静态路由
      const roleRoute = getRoleRoute(store.getters.username)  //用户对应的路由信息（也就是从后台转来的路由信息）
      const addR = execAsyncRoute(roleRoute.routsData)   // 根据用户对应的路由信息，分析出除了静态路由之外，需新加入的动态路由
      addR.forEach(el=>{
        constant[0].children.push(el)    //将动态路由加入静态路由下对应的二级路由
      })
      resetRouter()      // 路由重置
      router.addRoutes(constant);   //加入路由
  
      next({path: to.fullPath})   //跳转
    }
  }
  
  next()
  
})
export default router