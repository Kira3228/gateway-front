import { defineStore } from "pinia";
import { TStatusHistoryItem } from "./types";
import { fetchStatusHistory } from "../api/getStatusHistory";

export interface ISatusHistory {
  isLoading: boolean
  error: string
  statusHistory: TStatusHistoryItem[]
}


export const useStatusHistoryStore = defineStore(`history-status-store`, {
  state: (): ISatusHistory => ({
    error: '',
    isLoading: false,
    statusHistory: []
  }),
  actions: {
    async getStatusHistory(id: string) {
      try {
        this.error = ""
        this.isLoading = true
        const history = await fetchStatusHistory(id)
        this.statusHistory = history
      } catch (error: any) {
        this.error = error.message
      }
      finally {
        this.isLoading = false
      }

    }
  }
})