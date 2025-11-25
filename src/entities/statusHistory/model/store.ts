import { defineStore } from "pinia";
import { fetchStatusHistory } from "../api/getStatusHistory";
import { TQueryParams, TStatusHistoryItem } from "./types";

export interface ISatusHistory {
  isLoading: boolean
  error: string
  statusHistory: TStatusHistoryItem[]
  page: number
  isAvalibleLoading: boolean
}


export const useStatusHistoryStore = defineStore(`history-status-store`, {
  state: (): ISatusHistory => ({
    error: '',
    isLoading: false,
    statusHistory: [],
    page: 1,
    isAvalibleLoading: true
  }),
  actions: {
    async getStatusHistory(id: string, params?: TQueryParams) {
      try {
        this.error = ""
        this.isLoading = false
        const history = await fetchStatusHistory(id, params)
        this.statusHistory = [...this.statusHistory, ...history]
        if (history.length === 0) {
          this.isAvalibleLoading = false
        }

        console.log(`история`, history);
      } catch (error: any) {
        this.error = error.message
        this.isAvalibleLoading = false

      }
      finally {
        this.isLoading = false
      }
    },
    resetHistory() {
      this.statusHistory = []
    },
    incrementPage() {
      this.page++
    },
    reset() {
      this.page = 1
    }
  }
})