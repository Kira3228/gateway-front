import { defineStore } from "pinia";
import { fetchStatusHistory } from "../api/getStatusHistory";
import { TQueryParams, TStatusHistoryItem } from "./types";

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
    async getStatusHistory(id: string, params?: TQueryParams) {
      try {
        this.error = ""
        this.isLoading = true
        const history = await fetchStatusHistory(id, params)
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