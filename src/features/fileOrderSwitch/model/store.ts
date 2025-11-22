import { defineStore } from "pinia";

interface IOrderSwitchState {
  fileNameOrder: "ASC" | "DESC" | ""
  fileSizeBytesOrder: "ASC" | "DESC" | ""
  createdAtOrder: "ASC" | "DESC" | ""
}

export const useFileOrderSwitchStore = defineStore(`file-order-switch-store`, {
  state: (): IOrderSwitchState => ({
    fileNameOrder: "",
    fileSizeBytesOrder: "",
    createdAtOrder: ""
  }),
  actions: {
    setOrder(sortField: string, order: "ASC" | "DESC" | "") {
      switch (sortField) {
        case `filename`: {
          this.fileNameOrder = order;
          break
        }
        case `filesize`: {
          this.fileSizeBytesOrder = order
          break
        }
      }
    },
    refresh() {
      this.fileNameOrder = ''
      this.fileSizeBytesOrder = ''
    }
  }
})