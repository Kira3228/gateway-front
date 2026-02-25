import { MessageParams, MessageRequest } from "./types"
import { fetchMessages } from "../api/getMessages"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useMessageStore = defineStore(`message-store`, () => {
  const messages = ref<MessageRequest>({ messageCount: 0, messages: [], totalPage: 0 })


  const getMessages = async (params: MessageParams) => {
    try {
      const messageRequest = await fetchMessages(params)
      messages.value = messageRequest
    } catch (e: any) {

    } finally {
    }
  }

  return {
    messages, getMessages
  }
})