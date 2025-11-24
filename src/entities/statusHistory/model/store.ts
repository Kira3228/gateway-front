import { defineStore } from "pinia";
import { fetchStatusHistory } from "../api/getStatusHistory";
import { TQueryParams, TStatusHistoryItem } from "./types";

export interface ISatusHistory {
  isLoading: boolean
  error: string
  statusHistory: TStatusHistoryItem[]
  page: number
}


export const useStatusHistoryStore = defineStore(`history-status-store`, {
  state: (): ISatusHistory => ({
    error: '',
    isLoading: false,
    statusHistory: [],
    page: 1
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
    },
    incrementPage() {
      this.page++
    },
    reset() {
      this.page = 1
    }
  }
})