import { TMessage } from "./types"
import { fetchMessages } from "../api/getMessages"
import { defineStore } from "pinia"

export interface IMessageState {
  messages: TMessage[]
  isLoading: boolean
  error: string
}

export const useMessageStore = defineStore(`message-store`, {
  state: (): IMessageState => ({
    error: "",
    isLoading: false,
    messages: []
  }),
  actions: {
    async getMessages(page: number) {
      try {
        this.error = ""
        this.isLoading = true
        const messages = await fetchMessages(page)
        this.messages = messages
      } catch (error: any) {
        this.error = error.message
      }
      finally {
        this.isLoading = false
      }
    }
  }
})