import { defineStore } from "pinia";
import { fetchStatusHistory } from "../api/getStatusHistory";
import { StatusHistoryResponse, TQueryParams, } from "./types";

export interface ISatusHistory {
  isLoading: boolean
  error: string
  statusHistory: StatusHistoryResponse
  page: number
  isAvalibleLoading: boolean
}

const getInitialFilesState = (): StatusHistoryResponse => ({
  history: [],
  totalPage: 0
})
export const useStatusHistoryStore = defineStore(`history-status-store`, {
  state: (): ISatusHistory => ({
    error: '',
    isLoading: false,
    statusHistory: getInitialFilesState(),
    page: 1,
    isAvalibleLoading: true
  }),
  actions: {
    async getStatusHistory(messageId: string, params: TQueryParams, isReload: boolean = false) {
      if (this.isLoading) return

      if (isReload) {
        this.page = 1
        this.statusHistory = getInitialFilesState()
      }
      this.isLoading = false
      this.error = ''

      try {
        const fetchParams = {
          ...params,
          page: this.page,
          limit: params.limit || 10
        }

        const history = await fetchStatusHistory(messageId, fetchParams)

        if (isReload) {
          this.statusHistory = history
        }
        else {
          this.statusHistory.history = [...this.statusHistory.history, ...history.history];
          this.statusHistory.totalPage = history.totalPage
        }
      } catch (error: any) {
        this.error = error.message
        console.error(error);
      }
      finally {
        this.isLoading = false
      }
    },
    loadMore(messageId: string, params: TQueryParams) {
      if (this.isLoading || this.page >= this.statusHistory.totalPage) {
        return
      }
      this.page++
      return this.getStatusHistory(messageId, params, false)
    },
    resetHistory() {
      this.statusHistory.history = []
    },
    incrementPage() {
      this.page++
    },
    reset() {
      this.page = 1
    }
  }
})