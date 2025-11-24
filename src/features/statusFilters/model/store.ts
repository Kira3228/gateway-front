import { TOption } from "@/shared/UI/SelectInput/TOptions";
import { defineStore } from "pinia";
interface StatusFilterStoreState {
  oldStatuses: TOption[]
  newStatuses: TOption[]
  userTypes: TOption[]
}
export const useStatusFilterStore = defineStore(`status-filter-store`, {
  state: (): StatusFilterStoreState => ({
    newStatuses: [],
    oldStatuses: [],
    userTypes: []
  }),
  actions: {
    setStatuses() {
    },
    reset() {
      this.newStatuses = []
      this.oldStatuses = []
      this.userTypes = []
    },
  }
}
)