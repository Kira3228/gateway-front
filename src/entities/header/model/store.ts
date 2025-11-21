import { THeaderColumn } from './types'
import { fetchHeaders } from "../api/getHeaders"
import { defineStore } from "pinia"

export interface IHeaderState {
  headers: THeaderColumn[]
}

export const useHeaderStore = defineStore(`header-store`, {
  state: (): IHeaderState => ({
    headers: []
  }),
  actions: {
    async getHeaders(preset?: string) {
      try {
        const headers = await fetchHeaders(preset)
        this.headers = headers
      } catch (error) {

      }
    }
  }
})