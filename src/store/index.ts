import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'
// import messageStore from './messageList/message.store'

import type { TInitialState as messageState } from './messageList/message.store'
import presetStore, { IPresetState } from '@/features/preset/model/store'
// import messageFileStore, { IMessageFileState } from '@/entities/messageFile/model/store'

Vue.use(Vuex)

export interface RootState {
  messageStore: messageState,
  entities: {
    // messageFilesStore: IMessageFileState
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
        // messageFileStore: messageFileStore
      }
    },
    features: {
      namespaced: true,
      modules: {
        presetStore: presetStore
      }
    },
    // messageStore: messageStore,
    breadcrumbsStore: breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)