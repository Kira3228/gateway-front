import { ActionTree, Module, MutationTree } from "vuex"
import { TMessage } from "./types"
import { RootState } from "@/store"

interface IMessageState {
  messages: TMessage[]
}

const state = {
  messages: []
}
const mutations: MutationTree<IMessageState> = {
  setMessages(state: IMessageState, newMessages: TMessage[]) {
    state.messages = [...newMessages]
  },
}

const actions: ActionTree<IMessageState, RootState> = {

}

const messageStore: Module<IMessageState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default messageStore