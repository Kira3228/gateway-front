import { MessageParams, MessageRequest } from "./types"
import { fetchMessages } from "../api/getMessages"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useMessageStore = defineStore(`message-store`, () => {
  const messages = ref<MessageRequest>({ messageCount: 0, messages: [], totalPage: 0 })
  const isLoading = ref<boolean>(false)
  const error = ref<string>(``)
  const currentPage = ref<number>(1)
  const totalPage = ref<number>(0)
  const limit = ref<number>(15)

  const getMessages = async (params: MessageParams) => {
    try {
      error.value = ''
      isLoading.value = true
      const messageRequest = await fetchMessages(params)
      messages.value = messageRequest
    } catch (e: any) {
      error.value = e
    } finally {
      isLoading.value = false

    }
  }

  return {
    messages, getMessages, isLoading, error, currentPage
  }
})