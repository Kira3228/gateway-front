import { defineStore } from "pinia";
import { TQueryParams, TStatusHistoryItem } from "./types";
import { fetchStatusHistory } from "../api/getStatusHistory";

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
    refresh() {
      this.page = 1
      this.statusHistory = []
    }
  }
})