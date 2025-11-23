import { defineStore } from "pinia";
interface StatusFilterStoreState {
  oldStatuses: string[]
  newStatuses: string[]
}
export const useStatusFilterStore = defineStore(`status-filter-store`, {
  state: (): StatusFilterStoreState => ({
    newStatuses: [],
    oldStatuses: []
  }),
  actions: {
    setStatuses() {

    }
  }
})