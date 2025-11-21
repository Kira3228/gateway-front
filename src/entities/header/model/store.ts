import { ActionTree, Module, MutationTree } from "vuex"
import { RootState } from "@/store"
import { THeaderColumn } from './types'
import { fetchHeaders } from "../api/getHeaders"

export interface IHeaderState {
  header: THeaderColumn[]
}

const state = {
  header: []
}
const mutations: MutationTree<IHeaderState> = {
  setHeaders(state: IHeaderState, newMessages: THeaderColumn[]) {
    state.header = [...newMessages]
  },
}

const actions: ActionTree<IHeaderState, RootState> = {
  async getHeaders({ commit }, preset: string) {
    const newHeaders = await fetchHeaders(preset)
    commit(`setHeaders`, newHeaders)

  }
}

const headerStore: Module<IHeaderState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default headerStore


