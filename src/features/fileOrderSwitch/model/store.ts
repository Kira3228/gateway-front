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
          if (this.fileNameOrder === order) {
            this.fileNameOrder = ""
          }
          else {
            this.fileNameOrder = order
          }
          break
        }
        case `filesize`: {
          if (this.fileSizeBytesOrder === order) {
            this.fileSizeBytesOrder = ""
          }
          else {
            this.fileSizeBytesOrder = order
          }
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