import { RootState } from "@/store"
import { Action, ActionTree, MutationTree } from "vuex"
import { fetchHeaders } from "../api/getHeaders"
import { fetchPresets } from "../api/getPresets"

interface IPresetState {
  preset: string
  presetList: string[]
}

const state: IPresetState = {
  preset: '',
  presetList: []
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
    const presetList = fetchPresets()
    commit(`setPresetList`, presetList)
  },


  async getHeaders({ state, commit }) {
    fetchHeaders(state.preset)
  },


}