import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { IMessageList } from './messageList/IMessageList'

Vue.use(Vuex)

export interface RootState {
  messageList: IMessageList
}


const store: StoreOptions<RootState> = {
  modules: {

  },
  strict: process.env.NODE_ENV !== `prodaction`
}
export default new Vuex.Store<RootState>(store)