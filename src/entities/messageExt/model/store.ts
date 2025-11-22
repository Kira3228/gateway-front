import { defineStore } from "pinia";
import { TMessageExt } from "./types";
import { fetchMessageExts } from "../api/getMessageExt";



export interface IMessageExtState {
  messageExts: TMessageExt
  isLoading: boolean
  error: string
}

export const useMessageExtStore = defineStore(`message-ext-store`, {
  state: (): IMessageExtState => ({
    messageExts: {
      checksum: '',
      createdAt: new Date(),
      delivered_at: new Date(),
      id: 0,
      metadata: ``,
      read_at: new Date(),
      received_at: new Date(),
      receiving_at: new Date(),
      sending_at: new Date(),
      sent_at: new Date(),
      totalFilesCount: 0,
      totalSizeBytes: 0
    },
    error: "",
    isLoading: false
  }),
  actions: {
    async getMessageExt(messageId: string) {
      try {
        this.error = ''
        this.isLoading = true
        const messageExts = await fetchMessageExts(messageId)
        console.log(messageExts);

        this.messageExts = { ...messageExts }
      }
      catch (error: any) {
        this.error = error.message
        console.log(error);

      }
      finally {
        this.isLoading = false
      }

    }
  }
})