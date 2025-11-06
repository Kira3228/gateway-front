import { ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { RootState } from ".."
import { fetchMessageHeaders, fetchMessages } from "@/shared/api/messages"
import { TMessage } from "@/shared/types/messages/TMessage"
import { THeaderColumn } from "@/shared/types/common/THeader"
import { TExceptions } from "@/shared/types/common/TExceptions"
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt"
import { fetchMessageExts } from "@/shared/api/messageExt"
import { formatDate } from "@/shared/utils/formatDate"
import { fetchMessageFiles } from "@/shared/api/messageFile"
import { TMessageFile } from "@/shared/types/common/TMessageFile"
import { fetchHistory } from "@/shared/api/status-history"
import { TStatusHistory } from "@/shared/types/common/TStatusHistory"
import { fetchPresets } from "@/shared/api/presets"

export type TInitialState = {
  items: TMessage[]
  fileId: number
  messageId: number
  page: number
  totalPages: number
  headers: THeaderColumn[]
  preset: string
  presetList: string[]
  exceptions: TExceptions[]
  default_filters: Record<string, any>
  isTableLoading: boolean
  error: boolean
  ext: TMessageExt
  files: TMessageFile[]
  statusHistory: TStatusHistory[]
  isFilesLoading: boolean
  isStatusHistoryLoading: boolean
}

const state: TInitialState = {
  items: [],
  fileId: 0,
  page: 1,
  messageId: 0,
  totalPages: 0,
  headers: [],
  preset: "",
  default_filters: {},
  exceptions: [],
  presetList: [],
  error: false,
  isTableLoading: false,
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
  },
  files: [],
  statusHistory: [],
  isFilesLoading: false,
  isStatusHistoryLoading: false
}


const mutations: MutationTree<TInitialState> = {
  SET_IS_LOADING(state: TInitialState, newState: boolean) {
    state.isTableLoading = newState
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
  },
  SET_FILES(state: TInitialState, newFiles: TMessageFile[]) {
    state.files = [...newFiles]
  },
  SET_HISTORY(state: TInitialState, newHistory: TStatusHistory[]) {
    state.statusHistory = [...newHistory]
  },
  SET_PRESET_LIST(state: TInitialState, presetList: string[]) {
    state.presetList = [...presetList]
  },
  SET_PRESET(state: TInitialState, newPreset: string) {
    state.preset = newPreset
  },
  SET_MESSAGE_ID(state: TInitialState, newFileId: number) {
    state.messageId = newFileId
  },
  SET_IS_TABLE_LOADING(state: TInitialState, loadSatate: boolean) {
    state.isTableLoading = loadSatate
  },
  SET_FILE_LOADING(state: TInitialState, loadSatate: boolean) {
    state.isFilesLoading = loadSatate
  },
  SET_STATUS_HISTORY(state: TInitialState, loadState: boolean) {
    state.isStatusHistoryLoading = loadState
  },
  SET_FILE_ID(state: TInitialState, newId: number) {
    state.fileId = newId
  }
}

const actions: ActionTree<TInitialState, RootState> = {
  async loadItems({ commit, state }) {
    try {
      commit(`SET_IS_TABLE_LOADING`, true)
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
      commit(`SET_IS_TABLE_LOADING`, false)
    }
  },

  async getHeaders({ commit, state }) {
    try {
      console.log(state.preset);

      const headers = await fetchMessageHeaders({ presetName: state.preset })
      console.log(headers);


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

  async getExts({ commit }, messageId: string) {
    try {
      const data = await fetchMessageExts({ messageId: messageId })

      commit(`SET_EXTS`, data)
      return data
    } catch (error) {

    }
  },

  async getMessageFile({ commit }, payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }) {
    try {
      commit(`SET_FILE_LOADING`, true)
      commit(`SET_ITEM_ID`, payload.id)
      const files = await fetchMessageFiles(payload)

      const fileWithLoading = files.map((file: TMessageFile) => {
        return {
          ...file, isLoading: false
        }
      })

      commit(`SET_FILES`, fileWithLoading)

      commit(`SET_MESSAGE_ID`, payload.id)
    } catch (error) {

    }
    finally {
      commit(`SET_FILE_LOADING`, false)
    }
  },

  async getStatusHistory({ commit }, payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }) {
    try {
      commit(`SET_STATUS_HISTORY`, true)

      const history = await fetchHistory(payload)

      commit(`SET_HISTORY`, history)
    } catch (error) {
      console.error(error);
    }
    finally {
      commit(`SET_STATUS_HISTORY`, false)

    }
  },

  async getPresetNames({ state, commit }) {
    try {
      const presets = await fetchPresets()
      commit(`SET_PRESET_LIST`, presets)
    } catch (error) {

    }
  },
  async getSortedFiles({ state, commit, dispatch }) {

  }

}

const getters: GetterTree<TInitialState, RootState> = {
  messages: (state: TInitialState): TMessageExt => {
    const fdata = Object.fromEntries(
      Object.entries(state.ext).map(([key, value]) => [
        key,
        formatDate(value)
      ])
    ) as TMessageExt

    return fdata
  },

  formatedHistory: (state: TInitialState): TStatusHistory[] => {
    return state.statusHistory.map(item => ({
      ...item,
      changeDatetime: formatDate(item.changeDatetime) as string,
    }))
  }
}

const messageStore: Module<TInitialState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default messageStore
