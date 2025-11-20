import { ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { type RootState } from ".."
import { TMessageFile } from "@/shared/types/common/TMessageFile"
import { fetchMessageFiles } from "@/shared/api/messageFile"
import { TSortValue } from "@/shared/types/common/TSortOptions"


export type TInitialState = {
  files: TMessageFile[]
  isFilesLoading: boolean
  page: number
  sortField: TSortValue
}

const state: TInitialState = {
  files: [],
  isFilesLoading: false,
  page: 1,
  sortField: { sortField: '', sortOrder: "DESC" }
}


const mutations: MutationTree<TInitialState> = {
  SET_FILE_LOADING(state: TInitialState, loadSatate: boolean) {
    state.isFilesLoading = loadSatate
  },
  SET_FILES(state: TInitialState, newFiles: TMessageFile[]) {
    state.files = [...newFiles]
  },
  SET_NEW_PAGE(state: TInitialState) {
    state.page++
  },
  SET_NEW_SORT_FIELD(state: TInitialState, newSort: TSortValue) {
    state.sortField = { ...newSort }
  },
  CLEAR_Sort(state: TInitialState) {
    state.sortField = { sortField: "", sortOrder: "DESC" }
  }
}

const actions: ActionTree<TInitialState, RootState> = {
  async getMessageFile({ commit }, payload: { id: number, sortField?: string, sortOrder?: "ASC" | "DESC" }) {
    try {
      commit(`SET_FILE_LOADING`, true)
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

  async incrementPage({ commit }) {
    commit(`SET_NEW_PAGE`)
  },
  updateSort({commit}) { }

}

const getters: GetterTree<TInitialState, RootState> = {


}

const messageFilesState: Module<TInitialState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default messageFilesState
