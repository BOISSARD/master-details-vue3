import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Tests from '@/views/Tests/Tests.vue'
import TestsList from '@/views/Tests/TestsList.vue';
import Colors from '@/views/Tests/Colors.vue'
import Contacts from '@/views/Contacts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/tests',
    component: Tests,
    children: [
      {
        path: '',
        name: 'Tests',
        component: TestsList
      },
      {
        path: 'colors',
        name: 'Colors',
        component: Colors
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
