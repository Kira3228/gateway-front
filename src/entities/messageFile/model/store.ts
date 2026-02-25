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

  const getMessageFiles = async (messageId: string, params: TQueryParams, isReload: boolean = false) => {
    if (isReload) {
      page.value = 1;
      files.value = [];
    }

    isLoading.value = true;
    error.value = "";

    const fetchParams = {
      ...params,
      page: page.value || 1,
      limit: params.limit || 1,
    };

    const result = await fetchFiles(messageId, fetchParams);

    if (isReload) {
      files.value = result.files;
    }
    else {
      files.value = [...files.value, ...result.files];
      console.log(`files`, files.value);

    }
    totalPage.value = result.totalPage;
  }
  const loadMore = async (messageId: string, params: TQueryParams) => {
    console.log(isLoading.value, hasMorePages.value);

    if (!hasMorePages.value) return;
    page.value++;
    console.log(3131231);

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
