import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'
import messageStore from './messageList/message.store'

import type { TInitialState as messageState } from './messageList/message.store'
import viewMessageDetailsStore from '@/features/viewMessageDetails/model/store'
Vue.use(Vuex)

export interface RootState {
  messageStore: messageState
}


const store: StoreOptions<RootState> = {
  modules: {
    features: {
      namespaced: true,
      modules: {
        viewMessageDetailsStore
      }
    },
    messageStore: messageStore,
    breadcrumbsStore: breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)