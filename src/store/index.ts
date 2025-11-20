import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'
import messageStore from './messageList/message.store'

import type { TInitialState as messageState } from './messageList/message.store'
import type { TInitialState as messageFilesState } from './messageList/message-files.store'

Vue.use(Vuex)

export interface RootState {
  messageStore: messageState,
  messageFilesStore: messageFilesState
}


const store: StoreOptions<RootState> = {
  modules: {
    messageStore: messageStore,
    breadcrumbsStore: breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)