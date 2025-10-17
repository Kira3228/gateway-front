import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { IMessageList } from './messageList/types/IMessageList'
import breadcrumbsStore from './breadcrumbs/breadcrumbs.store'

Vue.use(Vuex)

export interface RootState {
  messageList: IMessageList
}


const store: StoreOptions<RootState> = {
  modules: {
    breadcrumbsStore
  },
  strict: process.env.NODE_ENV !== `prodaction`
}

export default new Vuex.Store<RootState>(store)