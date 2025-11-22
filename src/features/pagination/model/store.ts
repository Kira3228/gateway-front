import { defineStore } from "pinia";
interface IPafinationState {
  page: number
}
export const usePaginationStore = defineStore(`pagintion-store`, {
  state: (): IPafinationState => ({
    page: 1
  }),
  actions: {
    async getPaginationLength() {
      const length = await 1
    }
  }
})