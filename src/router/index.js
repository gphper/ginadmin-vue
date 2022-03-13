/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-06 13:39:26
 */
import AdminUserView from '@/views/AdminUserView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GroupView from '../views/GroupView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/admin',
    name: 'home',
    component: HomeView,
    children: [
      { path: 'group', component: GroupView },
      { path: 'user', component:AdminUserView }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  // {
  //   path: '/setting',
  //   name: 'setting',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
