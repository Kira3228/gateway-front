import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'
import messageStore from './messageList/message.store'

import type { TInitialState as messageState } from './messageList/message.store'
import viewMessageDetailsStore from '@/features/viewMessageDetails/model/store'
import presetStore, { IPresetState } from '@/features/preset/model/store'
import headerStore, { IHeaderState } from '@/entities/header/model/store'
Vue.use(Vuex)

export interface RootState {
  messageStore: messageState,
  entity: {
    headerStore: IHeaderState,
  },
  features: {
    presetStore: IPresetState
  }
}


const store: StoreOptions<RootState> = {
  modules: {
    entities: {
      namespaced: true,
      modules: {
        headerStore: headerStore
      }
    },
    features: {
      namespaced: true,
      modules: {
        viewMessageDetailsStore,
        presetStore: presetStore
      }
    },
    messageStore: messageStore,
    breadcrumbsStore: breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)