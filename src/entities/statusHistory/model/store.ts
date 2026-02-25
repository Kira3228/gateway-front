import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { fetchStatusHistory } from "../api/getStatusHistory";
import { StatusHistoryResponse, TQueryParams } from "./types";

export const useStatusHistoryStore = defineStore("history-status-store", () => {
  const statusHistory = ref<StatusHistoryResponse>({
    history: [],
    totalPage: 0,
  });
  const page = ref(1);
  const isLoading = ref(false);
  const error = ref("");

  const hasMorePages = computed(() => page.value < statusHistory.value.totalPage);

  const getStatusHistory = async (
    messageId: string,
    params: TQueryParams,
    isReload: boolean = false
  ) => {
    if (isLoading.value) return;

    if (isReload) {
      page.value = 1;
      statusHistory.value = { history: [], totalPage: 0 };
    }

    isLoading.value = true;
    error.value = "";

    try {
      const fetchParams = {
        ...params,
        page: page.value,
        limit: params.limit || 10,
      };
      console.log(fetchParams);
      
      const data = await fetchStatusHistory(messageId, fetchParams);

      if (isReload) {
        statusHistory.value = data;
      } else {
        statusHistory.value.history = [...statusHistory.value.history, ...data.history];
        statusHistory.value.totalPage = data.totalPage;
      }
    } catch (err: any) {
      error.value = err.message;
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const loadMore = async (messageId: string, params: TQueryParams) => {
    if (isLoading.value || !hasMorePages.value) return;

    page.value++;
    await getStatusHistory(messageId, params, false);
  };

  const resetState = () => {
    statusHistory.value = { history: [], totalPage: 0 };
    page.value = 1;
    error.value = "";
    isLoading.value = false;
  };

  return {
    statusHistory,
    page,
    isLoading,
    error,
    hasMorePages,
    getStatusHistory,
    loadMore,
    resetState,
  };
});
