import { RootState } from "@/store"
import { ActionTree, Module, MutationTree } from "vuex"

interface IViewMessageDetails {
  isOpen: boolean
  currentId: string
  title: string
}

const state: IViewMessageDetails = {
  isOpen: false,
  currentId: '',
  title: ''
}

const mutations: MutationTree<IViewMessageDetails> = {
  openModal(state: IViewMessageDetails, payload: Omit<IViewMessageDetails, 'isOpen'>) {
    state.isOpen = true;
    state.currentId = payload.currentId
    state.title = payload.title
  },
  closeModal(state: IViewMessageDetails) {
    state.isOpen = false
    state.currentId = ""
    state.title = ""
  }
}

const actions: ActionTree<IViewMessageDetails, RootState> = {
  async openDetails({ commit, dispatch },) {

  },
}

const viewMessageDetailsStore: Module<IViewMessageDetails, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default viewMessageDetailsStore