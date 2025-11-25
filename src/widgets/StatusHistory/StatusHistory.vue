<template>
  <ext-data-card title="История изменения">
    <div>
      <status-history-order-switch />
      <status-filters />
    </div>
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="statusHistory"
      :skeleton-height="100"
      :skeletons-quantity="6"
      @load-more="handleLoadMore"
      ><template #content="{ item }">
        <status-history-card :item="item"></status-history-card>
      </template>
    </complex-virtual-scroll>
  </ext-data-card>
</template>

<script lang="ts" setup>
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import { toRef, watch } from "vue";
import {
  useStatusHistoryOrderSwitchModel,
  StatusHistoryOrderSwitch,
} from "@/features/statusHistoryOrderSwitch";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import { storeToRefs } from "pinia";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { useStatusFilterModel, StatusFilters } from "@/features/statusFilters";
import { useDebounce } from "@/shared/lib/debounce";
interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const messageId = toRef(props, `id`);

const { changeDatetime, fullName, refresh } =
  useStatusHistoryOrderSwitchModel();

const statusHistoryStore = useStatusHistoryStore();

const { error, isLoading, statusHistory, page, isAvalibleLoading } =
  storeToRefs(statusHistoryStore);
const { newStatuses, oldStatuses, store } = useStatusFilterModel();
const { debounce } = useDebounce();

const handleLoadMore = () => {
  if (isAvalibleLoading.value) {
    statusHistoryStore.incrementPage();
  }
};

const getParams = (pageOverride?: number) => ({
  changeDatetime: changeDatetime.value,
  fullName: fullName.value,
  limit: 10,
  newStatuses: newStatuses.value,
  oldStatuses: oldStatuses.value,
  page: pageOverride || page.value,
  userTypes: "",
});

watch(
  messageId,
  (newId) => {
    if (!newId) {
      return;
    }
    store.reset();
    statusHistoryStore.reset();
    statusHistoryStore.getStatusHistory(newId, getParams(1));
  },
  { immediate: true }
);

watch([changeDatetime, fullName, newStatuses, oldStatuses], () => {
  debounce(() => {
    statusHistoryStore.resetHistory();
    statusHistoryStore.reset();
    statusHistoryStore.getStatusHistory(messageId.value, getParams(1));
  });
});

watch(page, (newPage, oldPage) => {
  if (newPage > 1 && newPage > oldPage) {
    statusHistoryStore.getStatusHistory(messageId.value, getParams(newPage));
  }
});
</script>
