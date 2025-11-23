import { TOption } from "@/shared/UI/SelectInput/TOptions";
import { defineStore } from "pinia";

interface IStatusFilterState {
  newStatuses: TOption[]
  oldStatuses: TOption[]
}
export const useStatusFiltersStore = defineStore(`status-filter-store`, {
  state: (): IStatusFilterState => ({
    newStatuses: [],
    oldStatuses: []
  }),
  actions: {
  }
})