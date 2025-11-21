import { defineStore } from "pinia";
import { TMessageFile } from "./types";
import { fetchFiles } from "../api/getFiles";

interface IMessageFileState {
  files: TMessageFile[];
  isLoading: boolean;
  error: string;
}

export const useMessageFileStore = defineStore(`fileStore`, {
  state: (): IMessageFileState => ({
    error: ``,
    files: [],
    isLoading: false
  }),
  actions: {
    async getMessageFiles(messageId: string) {
      this.isLoading = false
      this.error = ''
      try {
        const files = await fetchFiles(messageId)
        this.files = files
      } catch (error: any) {
        this.error = error.message
      }
      finally {
        this.isLoading = false
      }
    }
  },
  getters: {

  }
})