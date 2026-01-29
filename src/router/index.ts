import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MessageList from "../pages/MessageList/ui/Page.vue"
import Layout from "../layout/Layout.vue"
import EmptyRouterView from '../shared/UI/EmptyRouterView.vue'
import { MessageDetailPage } from '@/pages/MessageDetail'
import TestPage from '@/pages/testPage.vue'

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
        component: EmptyRouterView,
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
      {
        path: "msg_list",
        component: EmptyRouterView,
        meta: { breadcrumb: `Сообщения` },
        children: [
          {
            path: "",
            name: "msg_list",
            component: MessageList,
          },
          {
            path: `msg_list/details/:id`,
            name: `details`,
            component: MessageDetailPage,
            // component: TestPage,
            meta: { breadcrumb: `Детали` }
          }
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
