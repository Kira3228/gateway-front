import { RootState } from "@/store"
import { Action, ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { fetchHeaders } from "../../../entities/header/api/getHeaders"
import { fetchPresets } from "../api/getPresets"

export interface IPresetState {
  preset: string
  presetList: string[]
}

const state: IPresetState = {
  preset: '',
  presetList: []
}

const getters: GetterTree<IPresetState, RootState> = {
  presets: (state: IPresetState) => {
    return state.presetList.map(str => ({ label: str, value: str }))
  }
}

const mutations: MutationTree<IPresetState> = {
  setNewPreset(state: IPresetState, newPreset: string) {
    state.preset = newPreset
  },
  setPresetList(state: IPresetState, newPresetList: string[]) {
    state.presetList = [...newPresetList]
  }
}

const actions: ActionTree<IPresetState, RootState> = {
  async getPresetList({ commit }) {
    const presetList = await fetchPresets()
    commit(`setPresetList`, presetList)
  },


  async getHeaders({ state, commit }) {
    fetchHeaders(state.preset)
  },
}

const presetStore: Module<IPresetState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default presetStore