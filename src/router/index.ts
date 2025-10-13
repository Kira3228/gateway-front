import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MenuVue from "../shared/UI/Menu/Menu.vue"
import Menu2Vue from "../shared/UI/Menu/Menu2.vue"
import MessageList from "../pages/MessageList.page.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: `/`,
    redirect: ``,
    component: Menu2Vue,
    children: [
      {
        path: '/',
        name: `main`,
        component: MessageList
      },
      {
        path: '/1',
        name: `1`,
        component: MessageList
      },
      {
        path: '/2',
        name: `2`,
        component: MessageList
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
