import { defineStore } from "pinia";

interface IStatusHistoryOrderSwitchState {
  usernameOrder: "ASC" | "DESC" | ""
  createdAtOrder: "ASC" | "DESC" | ""
}

export const useStatusHistoryOrderSwitchStore = defineStore(`status-history-order-store`, {
  state: (): IStatusHistoryOrderSwitchState => ({
    createdAtOrder: "",
    usernameOrder: ""
  }),
  actions: {
    setOrder(sortField: string, order: "ASC" | "DESC" | "") {
      switch (sortField) {
        case `username`: {
          this.usernameOrder = order
          break
        }
        case `createdAt`: {
          this.createdAtOrder = order
          break
        }
      }
      console.log(this.usernameOrder, this.createdAtOrder);

    },
    refresh() {
      this.usernameOrder = ''
      this.createdAtOrder = ''
    }
  }
})