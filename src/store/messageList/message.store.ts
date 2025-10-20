import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from ".."
import { fetchMessageHeaders, fetchMessages } from "@/shared/api/messages"
import { TMessage } from "@/shared/types/messages/TMessage"
import { THeaderColumn } from "@/shared/types/common/THeader"
import { TExceptions } from "@/shared/types/common/TExceptions"

export type InitialState = {
  items: TMessage[]
  page: number
  totalPages: number
  headers: THeaderColumn[]
  preset: string
  presetList: string[]
  exceptions: TExceptions[]
  default_filters: Record<string, any>
  isLoading: boolean
  error: boolean
}

const state: InitialState = {
  items: [],
  page: 1,
  totalPages: 0,
  headers: [],
  preset: "",
  default_filters: {

  },
  exceptions: [],
  presetList: [],
  error: false,
  isLoading: false
}


const mutations: MutationTree<any> = {
  SET_IS_LOADING(state: InitialState, newState: boolean) {
    state.isLoading = newState
  },
  SET_ERROR(state: InitialState, newState: boolean) {
    state.error = newState
  },
  SET_ITEMS(state: InitialState, newState: TMessage[]) {
    state.items = [...newState]
  },
  SET_HEADERS(state: InitialState, newHeaders: THeaderColumn[]) {
    state.headers = [...newHeaders]
  }
}

const actions: ActionTree<InitialState, RootState> = {
  async loadItems({ commit, state }) {
    try {
      commit(`SET_IS_LOADING`, true)
      const data = await fetchMessages({
        page: state.page
      })
      console.log(data);

      if (data && data) {
        commit(`SET_ITEMS`, data.messages)
        commit(`SET_TOTAL_PAGES`, data.totalPages ?? 0)
      }
      else {
        commit(`SET_ITEMS`, [])
        commit(`SET_TOTAL_PAGES`, 0)
      }
    } catch (error) {
      commit(`SET_ERROR`, true)
    }
    finally {
      commit(`SET_IS_LOADING`, false)
    }
  },

  async getHeaders({ commit, state, dispatch }) {
    try {
      const headers = await fetchMessageHeaders({ presetName: state.preset })

      if (headers) {
        commit(`SET_HEADERS`, headers)
      }
      else {
        commit(`SET_HEADERS`, [])
      }
      dispatch(`getSort`)
    }
    catch (error) {
      console.error(error)
    }
  },
}

const messageStore: Module<InitialState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default messageStore
