import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from "@/store"
import { THeaderColumn } from './types'
import { fetchHeaders } from "../api/getHeaders"

export interface IHeaderState {
  headers: THeaderColumn[]
}

const state = {
  headers: []
}
const mutations: MutationTree<IHeaderState> = {
  setHeaders(state: IHeaderState, newHeaders: THeaderColumn[]) {
    state.headers = [...newHeaders]
  },
}

const actions: ActionTree<IHeaderState, RootState> = {
  async getHeaders({ commit }, preset: string) {
    try {
      const newHeaders = await fetchHeaders(preset)
      commit(`setHeaders`, newHeaders)
    } catch (error) {

    }
  }
}

const headerStore: Module<IHeaderState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default headerStore


