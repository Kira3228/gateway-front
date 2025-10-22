import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from ".."
import { fetchMessageHeaders, fetchMessages } from "@/shared/api/messages"
import { TMessage } from "@/shared/types/messages/TMessage"
import { THeaderColumn } from "@/shared/types/common/THeader"
import { TExceptions } from "@/shared/types/common/TExceptions"
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt"
import { fetchMessageExts } from "@/shared/api/messageExt"
import { httpGet } from "@/shared/api/http"

export type TInitialState = {
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
  ext: TMessageExt
}

const state: TInitialState = {
  items: [],
  page: 1,
  totalPages: 0,
  headers: [],
  preset: "",
  default_filters: {},
  exceptions: [],
  presetList: [],
  error: false,
  isLoading: false,
  ext: {
    id: 0,
    createdAt: new Date(),
    receiving_at: new Date(),
    received_at: new Date(),
    sending_at: new Date(),
    sent_at: new Date(),
    delivered_at: new Date(),
    read_at: null,
    totalFilesCount: 0,
    totalSizeBytes: 0,
    checksum: "",
    metadata: "",
  }
}


const mutations: MutationTree<any> = {
  SET_IS_LOADING(state: TInitialState, newState: boolean) {
    state.isLoading = newState
  },
  SET_ERROR(state: TInitialState, newState: boolean) {
    state.error = newState
  },
  SET_ITEMS(state: TInitialState, newState: TMessage[]) {
    state.items = [...newState]
  },
  SET_HEADERS(state: TInitialState, newHeaders: THeaderColumn[]) {
    state.headers = [...newHeaders]
  },
  SET_EXTS(state: TInitialState, newExts: TMessageExt) {
    state.ext = { ...newExts }
  }
}

const actions: ActionTree<TInitialState, RootState> = {
  async loadItems({ commit, state }) {
    try {
      commit(`SET_IS_LOADING`, true)
      const data = await fetchMessages({
        page: state.page
      })

      if (data && data) {
        commit(`SET_ITEMS`, data.items)
        // commit(`SET_TOTAL_PAGES`, data.totalPages ?? 0)
      }
      else {
        commit(`SET_ITEMS`, [])
        // commit(`SET_TOTAL_PAGES`, 0)
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
    }
    catch (error) {
      console.error(error)
    }
  },

  async getExts({ commit, state, dispatch }, messageId: string) {
    try {
      const data = await fetchMessageExts({ messageId: messageId })
      commit(`SET_EXTS`, data)
      return data
    } catch (error) {

    }
  }


}

const messageStore: Module<TInitialState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default messageStore
