import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { defineStore } from "pinia";

interface IOrderSwitchState {
  fileNameOrder: "ASC" | "DESC" | ""
  fileSizeBytesOrder: "ASC" | "DESC" | ""
  createdAtOrder: "ASC" | "DESC" | ""
}

export const useFileOrderSwitch = defineStore(`file-order-switch-store`, {
  state: (): IOrderSwitchState => ({
    fileNameOrder: "",
    fileSizeBytesOrder: "",
    createdAtOrder: ""
  }),
  actions: {
    setFileNameOrder(order: "ASC" | "DESC" | "") {
      this.fileNameOrder = order
    },
    setFileSizeBytesOrder(order: "ASC" | "DESC" | "") {
      this.fileSizeBytesOrder = order
    },
    setCreatedAtOrder(order: "ASC" | "DESC" | "") {
      this.createdAtOrder = order
    },

  }
})