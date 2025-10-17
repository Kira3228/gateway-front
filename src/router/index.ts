import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MenuVue from "../shared/UI/Menu/Menu.vue"
import Menu2Vue from "../shared/UI/Menu/Menu2.vue"
import MessageList from "../pages/MessageList.page.vue"
import Layout from "../layout/Layout.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: `/`,
    redirect: ``,
    component: Layout,
    children: [
      {
        path: `dash`,
        name: `dash`,
        meta: { breadcrumb: `Дашборд` },
        children: [
          {
            path: 'stats',
            name: `stats`,
            meta: { breadcrumb: `Статистика` },

            component: MessageList
          },
          {
            path: 'charts',
            name: `charts`,
            meta: { breadcrumb: `Графики` },

            component: MessageList
          },
          {
            path: 'alerts',
            name: `alerts`,
            meta: { breadcrumb: `Уведомления` },

            component: MessageList
          },
        ]
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
