import { ActionTree, Module, MutationTree } from "vuex"
import { TMessage } from "./types"
import { RootState } from "@/store"
import { fetchMessages } from "../api/getMessages"

export interface IMessageState {
  messages: TMessage[]
  isLoading: boolean
  error: string
}

const state: IMessageState = {
  messages: [],
  isLoading: false,
  error: "",
}

const mutations: MutationTree<IMessageState> = {
  setMessages(state: IMessageState, newMessages: TMessage[]) {
    state.messages = [...newMessages]
  },
  setIsLoading(state: IMessageState, newLoadingStatus: boolean) {
    state.isLoading = newLoadingStatus
  },
  setError(state: IMessageState, newError: string) {
    state.error = newError
  }
}

const actions: ActionTree<IMessageState, RootState> = {
  async getMessages({ commit }) {
    try {
      console.log(`Грузятся сообщения`);
      commit(`setIsLoading`, true)
      const messages = await fetchMessages()
      commit(`setMessages`, messages)
    } catch (error) {
      commit(`setError`, error)
      commit(`setMessages`, [])
      console.error(`Ошибка`, error);

    }
    finally {
      console.log(`Finally`)
      commit(`setIsLoading`, false)
    }
  }
}

const messageStore: Module<IMessageState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default messageStore