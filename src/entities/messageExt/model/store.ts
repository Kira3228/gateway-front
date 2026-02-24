import { defineStore } from "pinia";
import { TMessageExt } from "./types";
import { fetchMessageExts } from "../api/getMessageExt";
import { ref } from "vue";

export interface IMessageExtState {
  messageExts: TMessageExt
  isLoading: boolean
  error: string
}

export const useMessageExtStore = defineStore(`message-ext-store`, () => {
  const messageExts = ref<TMessageExt>({
    checksum: '',
    createdAt: "",
    delivered_at: "",
    id: 0,
    metadata: ``,
    read_at: "",
    received_at: "",
    receiving_at: "",
    sending_at: "",
    sent_at: "",
    totalFilesCount: 0,
    totalSizeBytes: 0
  })

  const error = ref<string>('')
  const isLoading = ref<boolean>(false)

  const getMessageExt = async (messageId: string) => {
    try {
      error.value = ''
      isLoading.value = true
      const result = await fetchMessageExts(messageId)
      messageExts.value = { ...result }
    }
    catch (e: any) {
      error.value = e.message
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    getMessageExt, messageExts, error, isLoading
  }

})