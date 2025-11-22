import { defineStore } from "pinia";
import { fetchFiles } from "../api/getFiles";
import { TMessageFile, TQueryParams } from "./types";

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
    async getMessageFiles(messageId: string, params?: TQueryParams) {
      this.isLoading = false
      this.error = ''
      try {
        const files = await fetchFiles(messageId, params)
        this.files = files
      } catch (error: any) {
        this.error = error.message
        console.error(error);
      }
      finally {
        this.isLoading = false
      }
    }
  },
  getters: {

  }
})