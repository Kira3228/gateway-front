import { defineStore } from "pinia";
import { fetchFiles } from "../api/getFiles";
import { TMessageFilesResponse, TQueryParams } from "./types";

interface IMessageFileState {
  files: TMessageFilesResponse;
  isLoading: boolean;
  error: string;
  page: number
  isAvalibleLoad: boolean
}
const initialState: TMessageFilesResponse = {
  files: [],
  totalPage: 0
}
export const useMessageFileStore = defineStore(`fileStore`, {
  state: (): IMessageFileState => ({
    error: ``,
    files: initialState,
    isLoading: false,
    page: 1,
    isAvalibleLoad: true
  }),
  actions: {
    async getMessageFiles(messageId: string, params?: TQueryParams) {
      this.isLoading = false
      this.error = ''
      try {
        if (this.page < this.files.totalPage) {
          const files = await fetchFiles(messageId, params)
          this.files.files = [...files.files]
          this.files.totalPage = files.totalPage
        }
      } catch (error: any) {
        this.error = error.message
        console.error(error);
      }
      finally {
        this.isLoading = false
      }
    },
    incrementPage() {
      if (this.isAvalibleLoad) {
        this.page++
        console.log(this.page);
      }
    },
    refresh() {
      this.page = 1
      this.files = { ...initialState }
    }
  },
})