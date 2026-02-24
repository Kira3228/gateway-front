import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { fetchFiles } from "../api/getFiles";
import { TMessageFile, TQueryParams } from "./types";

export const useMessageFileStore = defineStore("fileStore", () => {
  const files = ref<TMessageFile[]>([]);
  const totalPage = ref(0);
  const page = ref(1);
  const isLoading = ref(false);
  const error = ref("");

  const hasMorePages = computed(() => page.value < totalPage.value);

  const getMessageFiles = async (
    messageId: string,
    params: TQueryParams,
    isReload: boolean = false
  ) => {
    if (isLoading.value) return;

    if (isReload) {
      page.value = 1;
      files.value = [];
    }

    isLoading.value = true;
    error.value = "";

    try {
      const fetchParams = {
        ...params,
        page: page.value,
        limit: params.limit || 10,
      };

      const result = await fetchFiles(messageId, fetchParams);

      if (isReload) {
        files.value = result.files;
      } else {
        files.value = [...files.value, ...result.files];
      }
      totalPage.value = result.totalPage;

    } catch (err: any) {
      error.value = err.message || "Ошибка при загрузке файлов";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const loadMore = async (messageId: string, params: TQueryParams) => {
    if (isLoading.value || !hasMorePages.value) return;
    page.value++;
    await getMessageFiles(messageId, params, false);
  };

  const resetState = () => {
    files.value = [];
    totalPage.value = 0;
    page.value = 1;
    error.value = "";
    isLoading.value = false;
  };

  return {
    files,
    totalPage,
    page,
    isLoading,
    error,
    hasMorePages,
    getMessageFiles,
    loadMore,
    resetState,
  };
});
