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
const getInitialFilesState = () => ({
  files: [],
  totalPage: 0,
  count: 0
});
export const useMessageFileStore = defineStore(`fileStore`, {
  state: (): IMessageFileState => ({
    error: ``,
    files: getInitialFilesState(),
    isLoading: false,
    page: 1,
    isAvalibleLoad: true
  }),
  actions: {
    async getMessageFiles(messageId: string, params: TQueryParams, isReload: boolean = false) {
      if (this.isLoading) return;

      if (isReload) {
        this.page = 1
        this.files = getInitialFilesState()
      }

      this.isLoading = false
      this.error = ''

      try {

        const fetchParams = {
          ...params,
          page: this.page,
          limit: params.limit || 10
        }

        const files = await fetchFiles(messageId, fetchParams)

        if (isReload) {
          this.files = files; // Полная замена
        } else {
          this.files.files = [...this.files.files, ...files.files];
          this.files.totalPage = files.totalPage;
        }

      } catch (error: any) {
        this.error = error.message
        console.error(error);
      }
      finally {
        this.isLoading = false
      }
    },
    loadMore(messageId: string, params: TQueryParams) {
      if (this.isLoading || this.page >= this.files.totalPage) {
        return;
      }
      this.page++
      return this.getMessageFiles(messageId, params, false)
    },
    resetState() {
      this.page = 1
      this.files = getInitialFilesState()
      this.error = ""
      this.isLoading = false
    }
  },
})