import { ActionTree, MutationTree } from "vuex"
import { RootState } from ".."
import { fetchMessages } from "@/shared/api/messages"
import { IMessageRespone } from "./types/TMessage.response"

type InitialState = {
  data: IMessageRespone
  isLoading: boolean,
  error: boolean
}

const state: InitialState = {
  data: {
    messages: [],
    page: 1,
    totalPages: 0
  },
  isLoading: false,
  error: false
}


const mutations: MutationTree<any> = {
  SET_IS_LOADING(state: InitialState, newState: boolean) {
    state.isLoading = newState
  },
  SET_ERROR(state: InitialState, newState: boolean) {
    state.error = newState
  },
}

const actions: ActionTree<any, RootState> = {
  async loadItems({ commit }) {
    try {
      commit(`SET_IS_LOADING`, true)
      const data = await fetchMessages()
      if (data && data) {
        commit(``)
      }
      else {
        commit(``)
      }
    } catch (error) {
      commit(`SET_ERROR`, true)
    }
    finally {
      commit(`SET_IS_LOADING`, true)
    }
  }
}