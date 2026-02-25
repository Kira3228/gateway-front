<template>
  <ext-data-card title="История изменения">
    <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
      <div class="tw-flex tw-flex-shrink-0 tw-mb-4">
        <status-history-order-switch />
        <status-filters />
      </div>
      <complex-virtual-scroll
        class="tw-flex-1 tw-min-h-0"
        :error="statusHistoryStore.error"
        :is-loading="statusHistoryStore.isLoading"
        :items="statusHistoryStore.statusHistory.history"
        :skeleton-height="100"
        :skeletons-quantity="6"
        @load-more="messageStatusHistoryList.onScrollLoadMore"
        ><template #content="{ item }">
          <status-history-card :item="item"></status-history-card>
        </template>
      </complex-virtual-scroll>
    </div>
  </ext-data-card>
</template>

<script lang="ts" setup>
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import { StatusHistoryOrderSwitch } from "@/features/statusHistoryOrderSwitch";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { StatusFilters } from "@/features/statusFilters";
import { useMessageStatusHistoryList } from "./model/use-message-status-history-list";

const messageStatusHistoryList = useMessageStatusHistoryList();
const statusHistoryStore = useStatusHistoryStore();
</script>
