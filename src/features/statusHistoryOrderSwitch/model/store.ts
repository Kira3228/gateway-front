import { defineStore } from "pinia";

interface IStatusHistoryOrderSwitchState {
  changeDatetime: "ASC" | "DESC" | ""
  fullName: "ASC" | "DESC" | ""
}

export const useStatusHistoryOrderSwitchStore = defineStore(`status-history-order-store`, {
  state: (): IStatusHistoryOrderSwitchState => ({
    changeDatetime: '',
    fullName: ''
  }),
  actions: {
    setOrder(sortField: string, order: "ASC" | "DESC" | "") {
      switch (sortField) {
        case `fullName`: {
          if (this.fullName === order) {
            this.fullName = ''
          }
          else {
            this.fullName = order
          }
          break
        }
        case `changeDatetime`: {
          if (this.changeDatetime === order) {
            this.changeDatetime = ""
          }
          else {
            this.changeDatetime = order
          }
          break
        }
      }
    },
    refresh() {
      this.fullName = ''
      this.changeDatetime = ''
    }
  }
})