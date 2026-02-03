import { MessageRequest } from "./types"
import { fetchMessages } from "../api/getMessages"
import { defineStore } from "pinia"
import { ref } from "vue"

export interface IMessageState {
  messages: MessageRequest
  isLoading: boolean
  error: string
}

export const useMessageStore = defineStore(`message-store`, () => {
  const error = ref<string>("")
  const isLoading = ref<boolean>(false)
  const messages = ref<MessageRequest>({ messageCount: 0, messages: [], totalPage: 0 })

  const getMessages = async (page: number, presetName?: string) => {
    try {
      isLoading.value = true
      const messageRequest = await fetchMessages(page)
      messages.value = messageRequest
      console.log(messages.value);
    } catch (e: any) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  return {
    error, isLoading, messages, getMessages
  }
})