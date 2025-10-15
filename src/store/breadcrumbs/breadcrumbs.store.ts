import { Module, MutationTree } from "vuex"
import { RootState } from ".."

const state: InitialState = {
  breadcrubms: []
}

type InitialState = {
  breadcrubms: TBreadcrumbs[]
}
type TBreadcrumbs = {
  href: string,
  text: string | number,
  to: string | object,
  title: string
}

const mutations: MutationTree<InitialState> = {
  SET_BREADCRUMBS(state: InitialState, newBreadcrumbs: TBreadcrumbs) {
    if (!state.breadcrubms.includes(newBreadcrumbs)) {
      state.breadcrubms = [...state.breadcrubms, newBreadcrumbs]
      console.log(`newBreadcrumbs`, newBreadcrumbs.title);
    }
  }
}

const breadcrumbsStore: Module<InitialState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default breadcrumbsStore