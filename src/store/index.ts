import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'
// import messageStore from './messageList/message.store'

import type { TInitialState as messageState } from './messageList/message.store'
import viewMessageDetailsStore from '@/features/viewMessageDetails/model/store'
import presetStore, { IPresetState } from '@/features/preset/model/store'
import headerStore, { IHeaderState } from '@/entities/header/model/store'
import messageStore, { IMessageState } from '@/entities/message/model/store'
// import messageFileStore, { IMessageFileState } from '@/entities/messageFile/model/store'

Vue.use(Vuex)

export interface RootState {
  messageStore: messageState,
  entities: {
    messageStore: IMessageState
    headerStore: IHeaderState,
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
        messageStore: messageStore,
        headerStore: headerStore,
        // messageFileStore: messageFileStore
      }
    },
    features: {
      namespaced: true,
      modules: {
        viewMessageDetailsStore,
        presetStore: presetStore
      }
    },
    // messageStore: messageStore,
    breadcrumbsStore: breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)