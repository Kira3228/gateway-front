import { MessageRequest } from "./types"
import { fetchMessages } from "../api/getMessages"
import { defineStore } from "pinia"

export interface IMessageState {
  messages: MessageRequest
  isLoading: boolean
  error: string
}

export const useMessageStore = defineStore(`message-store`, {
  state: (): IMessageState => ({
    error: "",
    isLoading: false,
    messages: { messageCount: 0, messages: [] }
  }),
  actions: {
    async getMessages(page: number) {
      try {
        this.error = ""
        this.isLoading = true
        const messages = await fetchMessages(page)
        this.messages = { ...messages }
      } catch (error: any) {
        this.error = error.message
      }
      finally {
        this.isLoading = false
      }
    }
  }
})