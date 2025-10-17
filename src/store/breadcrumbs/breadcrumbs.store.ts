import { GetterTree, Module, MutationTree } from "vuex"
import { RootState } from ".."

const state: InitialState = {
  breadcrumbs: []
}

type InitialState = {
  breadcrumbs: TBreadcrumbs[]
}
export type TBreadcrumbs = {
  href: string,
  text: string | number,
  to: string | object,
  title: string
}

const mutations: MutationTree<InitialState> = {
  SET_BREADCRUMBS(state: InitialState, newBreadcrumbs: TBreadcrumbs) {
    const exists = state.breadcrumbs.some(b => b.to === newBreadcrumbs.to)
    if (!exists) {
      state.breadcrumbs = [...state.breadcrumbs, newBreadcrumbs]
    }
  },
  RESET_BREADCRUMBS(state: InitialState) {
    state.breadcrumbs = []
  },
  REMOVE_FROM_INDEX(state: InitialState, index: number) {
    state.breadcrumbs = state.breadcrumbs.slice(0, index + 1)
  }
}

const getters: GetterTree<InitialState, RootState> = {
  getBreadCrumbs: (state) => {
  }
}
const breadcrumbsStore: Module<InitialState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default breadcrumbsStore