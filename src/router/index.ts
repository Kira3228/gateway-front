import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MessageList from "../pages/MessageList/ui/Page.vue"
import Layout from "../layout/Layout.vue"
import EmptyRouterView from '../shared/UI/EmptyRouterView.vue'

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
        name: "msg_list",
        component: EmptyRouterView,
        meta: { breadcrumb: `Сообщения` },
        children: [
          {
            path: 'msg_detail',
            name: `msg_detail`,
            meta: { breadcrumb: `Детали` },
            component: MessageList
          },
          {
            path: 'msg_filters',
            name: `msg_filters`,
            meta: { breadcrumb: `Фильтры` },
            component: MessageList
          },
          {
            path: 'msg_view_preset',
            name: `msg_view_preset`,
            meta: { breadcrumb: `Режим отображения` },
            component: MessageList
          },
          {
            path: 'msg_export',
            name: `msg_export`,
            meta: { breadcrumb: `Экспорт сообщений` },
            component: MessageList
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
